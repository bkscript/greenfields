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
  document.title = mandi.hi + " मंडी भाव | " + mandi.en + " Mandi Bhav";

  const baseRows = u.pricesFor({ mandi: slug });
  const sourceVarietyRows = u.varietyPricesFor({ mandi: slug });
  const cropsWithVarieties = new Set(sourceVarietyRows.map((row) => row.crop));
  const rows = baseRows
    .filter((row) => !cropsWithVarieties.has(row.crop))
    .concat(sourceVarietyRows);
  const sortedRows = rows
    .slice()
    .sort((a, b) => {
      const freshness = u.freshFirst(a, b);
      if (freshness) return freshness;
      if (u.isStalePrice(a) && u.isStalePrice(b) && a.date !== b.date) {
        return String(b.date).localeCompare(String(a.date));
      }
      if (highlight && a.crop === highlight) return -1;
      if (highlight && b.crop === highlight) return 1;
      return b.modal - a.modal;
    });
  let lastStaleDate = "";
  const body = sortedRows
    .map((r) => {
      const c = u.cropBySlug(r.crop);
      const dateGroup = u.isStalePrice(r) && r.date !== lastStaleDate
        ? ((lastStaleDate = r.date), '<tr class="stale-date"><td colspan="4"><span>' + u.formatDateHi(r.date) + " के भाव</span></td></tr>")
        : "";
      const grade = r.grade
        ? '<span class="variety-grade">' + u.escapeHtml(r.grade) + "</span>"
        : "";
      return (
        dateGroup + "<tr><td><a class=\"detail-table-link\" href=\"" +
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
    })
    .join("");

  const nearby = MB.mandis
    .filter((m) => m.state === mandi.state && m.slug !== slug)
    .slice(0, 6)
    .map((m) => '<a class="chip" href="' + u.mandiHref(m.slug) + '">' + m.hi + "</a>")
    .join("");

  const top = sortedRows.find(u.isFreshPrice);
  const shareTop = top
    ? u.sharePage("आज " + mandi.hi + " मंडी के ताजा भाव देखें")
    : "#";
  const dynamicFaqs = ((MB.dynamicMandiFaqs || {})[slug] || [])
    .map((item) => {
      const row = item.variety
        ? sourceVarietyRows.find(
            (price) => price.crop === item.crop && price.variety === item.variety
          )
        : baseRows.find((price) => price.crop === item.crop);
      const varietyRows = Array.isArray(item.varieties)
        ? item.varieties
            .map((variety) =>
              sourceVarietyRows.find(
                (price) => price.crop === item.crop && price.variety === variety
              )
            )
            .filter(Boolean)
        : [];
      const crop = u.cropBySlug(item.crop);
      const cropHi = crop ? crop.hi : item.cropHi || item.crop;
      const cropLabel = cropHi + (item.variety ? " की " + item.variety + " किस्म" : "");
      let answer;
      if (item.varieties && varietyRows.length) {
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
        answer =
          mandi.hi +
          " में " +
          cropLabel +
          " का उपलब्ध प्रकाशित मॉडल भाव " +
          u.rupee(row.modal / 100) +
          " प्रति किलो के बराबर है। स्रोत दर " +
          u.rupee(row.modal) +
          " प्रति क्विंटल है; न्यूनतम " +
          u.rupee(row.min / 100) +
          " और अधिकतम " +
          u.rupee(row.max / 100) +
          " प्रति किलो के बराबर हैं। ये केवल क्विंटल दर का 100 से विभाजन हैं, खुदरा भाव नहीं। यह रिकॉर्ड " +
          u.formatUpdatedHi(row.date) +
          " का है।";
      } else {
        answer =
          mandi.hi +
          " में " +
          cropLabel +
          " का उपलब्ध मॉडल भाव " +
          u.rupee(row.modal) +
          " प्रति क्विंटल है। न्यूनतम भाव " +
          u.rupee(row.min) +
          " और अधिकतम भाव " +
          u.rupee(row.max) +
          " है। यह उपलब्ध भाव रिकॉर्ड " +
          u.formatUpdatedHi(row.date) +
          " का है।";
      }
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
  const dynamicFaqSection = dynamicFaqs
    ? '<section class="faq-section dynamic-faq"><h2>आज के भाव से जुड़े सवाल</h2>' + dynamicFaqs.replace('<details class="faq-item">', '<details class="faq-item" open>') + "</section>"
    : "";

  const tables =
    '<p class="share-bar">' +
    (top
      ? '<span class="price-date">आज ' +
        u.formatUpdatedHi(MB.LAST_UPDATED_DATE) +
        ': ' +
        mandi.hi +
        ' मंडी के ताज़ा फसल भाव' +
        "</span>" +
        u.shareBtn(shareTop)
      : "") +
    "</p>" +
    '<section class="card mandi-crop-list"><h2>आज ' + mandi.hi + ' मंडी में फसलों के भाव</h2>' +
    (rows.length
      ? "<table><thead><tr><th>फसल</th><th>किस्म</th>" +
        '<th class="num">मॉडल</th><th class="num range-col">न्यून.–अधि.</th></tr></thead><tbody>' +
        body +
        "</tbody></table>"
      : '<p class="empty">इस मंडी के भाव अभी उपलब्ध नहीं हैं।</p>') +
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
      mandi.hi +
      " मंडी भाव | " +
      mandi.en +
      " Mandi Bhav</h1>" +
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
