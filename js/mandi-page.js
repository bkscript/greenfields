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
  const stateNavigationHost = document.getElementById("price-page-state-nav");
  if (stateNavigationHost) stateNavigationHost.innerHTML = u.stateNavigationSection(mandi.state);
  const mandiHi = mandi.hi.endsWith("मंडी") ? mandi.hi : mandi.hi + " मंडी";
  const mandiEn = / mandi$/i.test(mandi.en) ? mandi.en : mandi.en + " Mandi";
  const pageTitle = mandiHi + " भाव आज | " + mandiEn + " Bhav Today";
  document.title = pageTitle;

  const baseRows = u.pricesFor({ mandi: slug });
  const sourceVarietyRows = u.varietyPricesFor({ mandi: slug });
  const displayVarietyRows = u.dedupeGenericVarietyRows(sourceVarietyRows);
  const allSavedRows = baseRows.concat(displayVarietyRows);
  const availableDates = Array.from(
    new Set(
      allSavedRows
        .map((row) => row.date)
        .filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(date || "") && date <= MB.PRICE_DATE)
    )
  ).sort((a, b) => String(b).localeCompare(String(a)));
  const mandiPriceDate = availableDates[0] || "";
  const isCurrentMandiDate = mandiPriceDate === MB.PRICE_DATE;
  const previousMandiDate = availableDates.find((date) => date < mandiPriceDate) || "";
  const rowsForDate = (date) => {
    if (!date) return [];
    const cropsWithVarieties = new Set(
      displayVarietyRows.filter((row) => row.date === date).map((row) => row.crop)
    );
    return baseRows
      .filter((row) => row.date === date && !cropsWithVarieties.has(row.crop))
      .concat(displayVarietyRows.filter((row) => row.date === date))
      .slice()
      .sort((a, b) => {
      if (highlight && a.crop === highlight) return -1;
      if (highlight && b.crop === highlight) return 1;
      return b.modal - a.modal;
      });
  };
  const currentTableRows = rowsForDate(mandiPriceDate);
  const previousTableRows = rowsForDate(previousMandiDate);
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
  const previousBody = previousTableRows.map(renderPriceRow).join("");

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
      const faqRows = item.type === "previous" && previousTableRows.length
        ? previousTableRows
        : currentTableRows;
      const faqDate = item.type === "previous" && previousTableRows.length
        ? previousMandiDate
        : mandiPriceDate;
      const row = item.variety
        ? faqRows.find(
            (price) => price.crop === item.crop && price.variety === item.variety
          )
        : faqRows.find((price) => price.crop === item.crop);
      const varietyRows = Array.isArray(item.varieties)
        ? item.varieties
            .map((variety) =>
              faqRows.find((price) => price.crop === item.crop && price.variety === variety)
            )
            .filter(Boolean)
        : [];
      const crop = u.cropBySlug(item.crop);
      const cropHi = crop ? crop.hi : item.cropHi || item.crop;
      const cropLabel = cropHi + (item.variety ? " की " + item.variety + " किस्म" : "");
      const summaryModal = u.median(faqRows.map((price) => price.modal));
      const summaryMin = faqRows.length ? Math.min.apply(null, faqRows.map((price) => price.min)) : null;
      const summaryMax = faqRows.length ? Math.max.apply(null, faqRows.map((price) => price.max)) : null;
      const modal = row ? Number(row.modal) : Number(summaryModal);
      const min = row ? Number(row.min) : Number(summaryMin);
      const max = row ? Number(row.max) : Number(summaryMax);
      if (![modal, min, max].every(Number.isFinite)) return "";
      const values = {
        dateLead: u.faqAnswerDateLead(item.q, (row && row.date) || faqDate),
        label: row
          ? mandi.hi + " में " + cropLabel
          : mandi.hi + " मंडी की सारणी में दर्ज फसलों का मध्य",
        mandi: mandi.hi,
        crop: cropHi,
        cropLabel,
        modal: u.rupee(modal),
        min: u.rupee(min),
        max: u.rupee(max),
        kgModal: u.rupee(modal / 100),
        kgMin: u.rupee(min / 100),
        kgMax: u.rupee(max / 100),
        varietyPrices: varietyRows
          .map((price) => price.variety + " " + u.rupee(price.modal) + " प्रति क्विंटल")
          .join(", "),
      };
      const answer = u.fillFaqAnswer(item.a, values);
      if (!answer) return "";
      mandiFaqEntities.push({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: answer } });
      return (
        '<details class="faq-item"><summary>' +
        item.q +
        "</summary><p>" +
        u.escapeHtml(answer) +
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
    ? '<section class="faq-section dynamic-faq"><h2>भाव संबंधित सवाल</h2>' + dynamicFaqs.replace('<details class="faq-item">', '<details class="faq-item" open>') + "</section>"
    : "";

  const tables =
    '<p class="share-bar">' +
    (top
      ? '<span class="price-date">' +
        (isCurrentMandiDate ? 'आज ' + u.formatUpdatedHi(MB.PRICE_DATE) : u.formatUpdatedHi(mandiPriceDate)) +
        ': ' +
        mandi.hi +
        ' मंडी के फसल भाव' +
        "</span>" +
        u.shareBtn(shareTop)
      : "") +
    "</p>" +
    '<section class="card mandi-crop-list"><h2>' +
    (isCurrentMandiDate
      ? 'आज ' + u.formatUpdatedHi(MB.PRICE_DATE) + ' को ' + mandi.hi + ' मंडी में फसलों के भाव'
      : mandi.hi + ' मंडी में ' + u.formatUpdatedHi(mandiPriceDate) + ' के फसल भाव') +
    '</h2>' +
    (currentBody
      ? "<table><thead><tr><th>फसल</th><th>किस्म</th>" +
        '<th class="num">मॉडल</th><th class="num range-col">न्यून.–अधि.</th></tr></thead><tbody>' +
        currentBody +
        "</tbody></table>"
      : '<p class="empty">इस मंडी का भाव जारी नहीं हुआ।</p>') +
    "</section>" +
    (previousBody
      ? '<section class="card mandi-crop-list crop-yesterday-list"><h2>' +
        u.formatUpdatedHi(previousMandiDate) + ' को ' + mandi.hi +
        ' मंडी में फसलों के भाव</h2><table><thead><tr><th>फसल</th><th>किस्म</th>' +
        '<th class="num">मॉडल</th><th class="num range-col">न्यून.–अधि.</th></tr></thead><tbody>' +
        previousBody + "</tbody></table></section>"
      : "") +
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
