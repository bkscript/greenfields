MB.page = function mandiPage() {
  const u = MB.ui;
  const slug = u.pageMandi() || "unjha";
  const highlight = u.param("crop");
  const mandi = u.mandiBySlug(slug);
  const box = document.getElementById("page-body") || document.getElementById("main");
  const seoReady = !!document.getElementById("page-body");

  if (!mandi) {
    box.innerHTML = '<p class="empty">मंडी नहीं मिली · Mandi not found.</p>';
    return;
  }

  const state = u.stateBySlug(mandi.state);
  const mandiHi = mandi.hi.endsWith("मंडी") ? mandi.hi : mandi.hi + " मंडी";
  const mandiEn = / mandi$/i.test(mandi.en) ? mandi.en : mandi.en + " Mandi";
  const pageTitle = mandiHi + " भाव आज | " + mandiEn + " Bhav Today";
  document.title = pageTitle;

  const baseRows = u.pricesFor({ mandi: slug });
  const sourceVarietyRows = u.varietyPricesFor({ mandi: slug });
  const allSavedRows = baseRows.concat(sourceVarietyRows);
  const availableDates = Array.from(
    new Set(
      allSavedRows
        .map((row) => row.date)
        .filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(date || "") && date <= MB.PRICE_DATE)
    )
  ).sort((a, b) => String(b).localeCompare(String(a)));
  const mandiPriceDate = availableDates[0] || "";
  const isMandiDisplayPrice = (row) => !!row && row.date === mandiPriceDate;
  const isCurrentMandiDate = mandiPriceDate === MB.PRICE_DATE;
  const cropsWithVarieties = new Set(
    sourceVarietyRows.filter(isMandiDisplayPrice).map((row) => row.crop)
  );
  const rows = baseRows
    .filter((row) => !cropsWithVarieties.has(row.crop))
    .concat(sourceVarietyRows);
  const sortedRows = rows
    .filter(isMandiDisplayPrice)
    .slice()
    .sort((a, b) => {
      if (highlight && a.crop === highlight) return -1;
      if (highlight && b.crop === highlight) return 1;
      return b.modal - a.modal;
    });
  const currentTableRows = sortedRows;
  const renderPriceRow = (r) => {
    const c = u.cropBySlug(r.crop);
    const grade = r.grade
      ? '<span class="variety-grade">' + u.escapeHtml(r.grade) + "</span>"
      : "";
    return (
      "<tr><td><a class=\"detail-table-link\" href=\"" +
      u.cropHref(r.crop, mandi.state) +
      '">' +
      u.escapeHtml(u.nameHi(c)) +
      "</a></td>" +
      '<td class="variety-name">' +
      (r.variety ? u.escapeHtml(r.variety) + grade : "—") +
      "</td>" +
      '<td class="num modal-price">' +
      u.priceCell(r.crop, r) +
      "</td>" +
      '<td class="num range-col">' +
      u.rupee(r.min) +
      "–" +
      u.rupee(r.max).replace("₹", "") +
      "</td></tr>"
    );
  };
  const currentBody = currentTableRows.map(renderPriceRow).join("");

  const nearby = MB.mandis
    .filter((m) => m.state === mandi.state && m.slug !== slug)
    .slice(0, 6)
    .map((m) => '<a class="chip" href="' + u.mandiHref(m.slug) + '">' + m.hi + "</a>")
    .join("");

  const top = currentTableRows[0];
  const shareTop = top
    ? u.sharePage(u.formatUpdatedHi(mandiPriceDate) + " के " + mandi.hi + " मंडी भाव देखें")
    : "#";
  const mandiFaqEntities = [];
  const dynamicFaqs = ((MB.dynamicMandiFaqs || {})[slug] || [])
    .map((item) => {
      const row = item.variety
        ? sourceVarietyRows.find(
            (price) => price.crop === item.crop && price.variety === item.variety && isMandiDisplayPrice(price)
          )
        : baseRows.find((price) => price.crop === item.crop && isMandiDisplayPrice(price));
      const varietyRows = Array.isArray(item.varieties)
        ? item.varieties
            .map((variety) =>
              sourceVarietyRows.find(
                (price) => price.crop === item.crop && price.variety === variety && isMandiDisplayPrice(price)
              )
            )
            .filter(Boolean)
        : [];
      const crop = u.cropBySlug(item.crop);
      const cropHi = crop ? crop.hi : item.cropHi || item.crop;
      const cropLabel = cropHi + (item.variety ? " की " + item.variety + " किस्म" : "");
      let answer;
      if (item.type === "previous") {
        answer = mandi.hi + " मंडी के कल के भाव का अलग सत्यापित snapshot अभी उपलब्ध नहीं है। ऊपर तालिका में प्रत्येक फसल का उपलब्ध नवीनतम प्रकाशित रिकॉर्ड और उसकी तारीख देखें।";
      } else if (item.type === "container") {
        answer = "इंदौर के डॉलर चने का अलग सत्यापित कंटेनर रेट अभी इस साइट के डेटा में नहीं है। ऊपर दिए मंडी के प्रति क्विंटल भाव को कंटेनर रेट न मानें।";
      } else if (item.varieties && varietyRows.length) {
        answer =
          mandi.hi +
          " में " +
          cropHi +
          " के उपलब्ध किस्म-वार प्रकाशित मॉडल भाव: " +
          varietyRows
            .map((price) => price.variety + " " + u.rupee(price.modal) + " प्रति क्विंटल")
            .join(", ") +
          "। ये रिकॉर्ड " +
          varietyRows.map((price) => u.formatUpdatedHi(price.date)).filter((date, index, dates) => dates.indexOf(date) === index).join(" और ") +
          " के हैं। किस्म अलग होने से इन्हें एक ही भाव न मानें।";
      } else if (!row) {
        answer =
          mandi.hi +
          " में " +
          cropLabel +
          " का उपलब्ध भाव रिकॉर्ड अभी नहीं है। नया record उपलब्ध होने पर यह उत्तर अपने-आप भाव के साथ दिखेगा।";
      } else if (item.unit === "kg") {
        const isCurrent = isCurrentMandiDate;
        answer = isCurrent
          ? u.formatUpdatedHi(MB.PRICE_DATE) + " को " + mandi.hi + " में " + cropLabel + " का मॉडल भाव " +
            u.rupee(row.modal / 100) + " प्रति किलो के बराबर है। स्रोत दर " + u.rupee(row.modal) +
            " प्रति क्विंटल है; न्यूनतम " + u.rupee(row.min / 100) + " और अधिकतम " +
            u.rupee(row.max / 100) + " प्रति किलो के बराबर हैं। ये केवल क्विंटल दर का 100 से विभाजन हैं, खुदरा भाव नहीं।"
          : mandi.hi + " में " + cropLabel + " का आखिरी उपलब्ध मॉडल भाव " + u.formatUpdatedHi(row.date) +
            " को " + u.rupee(row.modal / 100) + " प्रति किलो के बराबर था। स्रोत दर " + u.rupee(row.modal) +
            " प्रति क्विंटल थी; उस दिन न्यूनतम " + u.rupee(row.min / 100) + " और अधिकतम " +
            u.rupee(row.max / 100) + " प्रति किलो के बराबर थे। ये केवल क्विंटल दर का 100 से विभाजन हैं, खुदरा भाव नहीं।";
      } else {
        const isCurrent = isCurrentMandiDate;
        answer = isCurrent
          ? u.formatUpdatedHi(MB.PRICE_DATE) + " को " + mandi.hi + " में " + cropLabel + " का मॉडल भाव " +
            u.rupee(row.modal) + " प्रति क्विंटल है। न्यूनतम भाव " + u.rupee(row.min) +
            " और अधिकतम भाव " + u.rupee(row.max) + " है।"
          : mandi.hi + " में " + cropLabel + " का आखिरी उपलब्ध मॉडल भाव " + u.formatUpdatedHi(row.date) +
            " को " + u.rupee(row.modal) + " प्रति क्विंटल था। उस दिन न्यूनतम भाव " + u.rupee(row.min) +
            " और अधिकतम भाव " + u.rupee(row.max) + " था।";
      }
      mandiFaqEntities.push({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: answer } });
      return (
        '<details class="faq-item"><summary>' +
        item.q +
        "</summary><p>" +
        answer +
        "</p></details>"
      );
    })
    .filter(Boolean)
    .join("");
  if (mandiFaqEntities.length) {
    let schema = document.getElementById("mandi-dynamic-faq-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "mandi-dynamic-faq-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: mandiFaqEntities });
  }
  const dynamicFaqSection = dynamicFaqs
    ? '<section class="faq-section dynamic-faq"><h2>उपलब्ध भाव से जुड़े सवाल</h2>' + dynamicFaqs.replace('<details class="faq-item">', '<details class="faq-item" open>') + "</section>"
    : "";

  const tables =
    '<p class="share-bar">' +
    (top
      ? '<span class="price-date">' +
        (isCurrentMandiDate ? 'आज ' : 'पिछली उपलब्ध तारीख ') +
        u.formatUpdatedHi(mandiPriceDate) +
        ': ' +
        mandi.hi +
        ' मंडी के उपलब्ध फसल भाव' +
        "</span>" +
        u.shareBtn(shareTop)
      : "") +
    "</p>" +
    '<section class="card mandi-crop-list"><h2>' + mandi.hi + ' मंडी में ' +
    (mandiPriceDate ? u.formatUpdatedHi(mandiPriceDate) + ' के फसल भाव' : 'भाव रिकॉर्ड') +
    '</h2>' +
    (currentBody
      ? "<table><thead><tr><th>फसल</th><th>किस्म</th>" +
        '<th class="num">मॉडल</th><th class="num range-col">न्यून.–अधि.</th></tr></thead><tbody>' +
        currentBody +
        "</tbody></table>"
      : '<p class="empty">इस मंडी का कोई सुरक्षित भाव रिकॉर्ड उपलब्ध नहीं है।</p>') +
    "</section>" +
    '<div class="chips">' +
    nearby +
    "</div>";

  const seo = (MB.seo && MB.seo[slug]) || {};
  if (seoReady) {
    box.innerHTML = tables;
  } else {
    box.innerHTML =
      '<p class="crumbs"><a href="' + u.siteHref("") + '">होम</a> / <a href="' +
      u.stateHref(mandi.state) +
      '">' +
      state.hi +
      "</a> / " +
      mandi.hi +
      "</p>" +
      "<h1>" +
      u.escapeHtml(pageTitle) +
      "</h1>" +
      '<p class="sub">' +
      (seo.hi || state.hi + " · " + mandi.district.hi) +
      "</p>" +
      '<p class="sub en-line">' +
      (seo.en || "") +
      "</p>" +
      tables;
  }

  if (dynamicFaqSection) {
    const article = document.querySelector("main .article-section");
    const staticFaq = document.querySelector("main .faq-section:not(.dynamic-faq)");
    if (article) article.insertAdjacentHTML("afterend", dynamicFaqSection);
    else if (staticFaq) staticFaq.insertAdjacentHTML("beforebegin", dynamicFaqSection);
    else box.insertAdjacentHTML("beforeend", dynamicFaqSection);
  }
};
