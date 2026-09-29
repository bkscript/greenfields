MB.page = function cropPage() {
  const u = MB.ui;
  const slug = u.pageCrop() || "pyaz";
  const crop = u.cropBySlug(slug);
  const box = document.getElementById("page-body") || document.getElementById("main");
  const seoReady = !!document.getElementById("page-body");

  if (!crop) {
    box.innerHTML = '<p class="empty">फसल नहीं मिली · Crop not found.</p>';
    return;
  }

  document.title = crop.hi + " का भाव आज | " + crop.en + " Mandi Price Today";

  const baseRows = u.pricesFor({ crop: slug });
  const sourceVarietyRows = u.varietyPricesFor({ crop: slug });
  const mandiCropsWithVarieties = new Set(
    sourceVarietyRows.filter(u.isFreshPrice).map((row) => row.mandi + "|" + row.crop)
  );
  const rows = baseRows
    .filter((row) => !mandiCropsWithVarieties.has(row.mandi + "|" + row.crop))
    .concat(sourceVarietyRows);

  if (!rows.length) {
    box.innerHTML = '<p class="empty">इस फसल के भाव अभी उपलब्ध नहीं हैं।</p>';
    return;
  }

  const currentRows = baseRows.filter(u.isFreshPrice);
  const med = u.median(currentRows.map((r) => r.modal));
  const vsMed = u.median(currentRows.map((r) => r.vs));
  const mins = currentRows.map((r) => r.min);
  const maxs = currentRows.map((r) => r.max);

  const statIcon = (type) => {
    const icons = {
      modal: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V11M10 19V5M16 19v-8M22 19V8"/><path d="M3 19h20"/></svg>',
      kilo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l2 11H3L5 8Z"/><path d="M8 8a4 4 0 0 1 8 0M9 14h6"/></svg>',
      msp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 7 3v5c0 4.4-3 7.7-7 10-4-2.3-7-5.6-7-10V6l7-3Z"/><path d="M9 12h6M12 9v6"/></svg>',
      mandis: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10h18M5 10v9h14v-9M3 10l3-5h12l3 5"/><path d="M9 19v-5h6v5"/></svg>',
      min: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v14M7 13l5 5 5-5"/><path d="M5 21h14"/></svg>',
      range: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4"/></svg>',
      up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 16 10 11l3 3 6-7"/><path d="M15 7h4v4"/></svg>',
      down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 8 5 5 3-3 6 7"/><path d="M15 17h4v-4"/></svg>',
      flat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16"/><path d="m8 8-4 4 4 4M16 8l4 4-4 4"/></svg>',
    };
    return icons[type] || icons.modal;
  };

  const stats = currentRows.length ? [
    { v: u.rupee(med), l: "मॉडल भाव", i: "modal" },
    crop.veg
      ? { v: u.rupee(u.kgFromQtl(med)), l: "प्रति किलो", i: "kilo" }
      : crop.msp
        ? { v: u.rupee(crop.msp), l: "MSP", i: "msp" }
        : { v: String(currentRows.length), l: "उपलब्ध मंडियां", i: "mandis" },
    {
      v: u.rupee(Math.min.apply(null, mins)) + "–" + u.rupee(Math.max.apply(null, maxs)).replace("₹", ""),
      l: "न्यूनतम–अधिकतम",
      i: "range",
    },
    { v: u.vsText(vsMed || 0), l: "कल से", i: vsMed > 0 ? "up" : vsMed < 0 ? "down" : "flat" },
  ] : [];

  const shareAll = currentRows.length
    ? u.sharePage("आज " + crop.hi + " के ताजा मंडी भाव देखें")
    : "";
  const sortedRows = rows
    .slice()
    .sort((a, b) => {
      const freshness = u.freshFirst(a, b);
      if (freshness) return freshness;
      if (u.isStalePrice(a) && u.isStalePrice(b) && a.date !== b.date) {
        return String(b.date).localeCompare(String(a.date));
      }
      return b.modal - a.modal;
    });
  const currentTableRows = sortedRows.filter(u.isFreshPrice);
  const renderPriceRow = (r) => {
    const m = u.mandiBySlug(r.mandi);
    const st = u.stateBySlug(m.state);
    const grade = r.grade
      ? '<span class="variety-grade">' + u.escapeHtml(r.grade) + "</span>"
      : "";
    return (
      "<tr><td><a class=\"detail-table-link\" href=\"" +
      u.mandiHref(r.mandi, slug) +
      '">' +
      u.escapeHtml(u.nameHi(m)) +
      (!st ? "" : ' <span class="table-state-code">(' + u.escapeHtml(st.short) + ")</span>") +
      "</a></td>" +
      '<td class="variety-name">' +
      (r.variety ? u.escapeHtml(r.variety) + grade : "—") +
      "</td>" +
      '<td class="num modal-price">' +
      u.priceCell(slug, r) +
      "</td>" +
      '<td class="num range-col">' +
      u.rupee(r.min) +
      "–" +
      u.rupee(r.max).replace("₹", "") +
      "</td></tr>"
    );
  };
  const currentBody = currentTableRows.map(renderPriceRow).join("");

  const currentHistoryDate = MB.PRICE_DATE;
  const historyByDate = {};
  ((MB.cropModalHistory || {})[slug] || [])
    .filter((entry) => entry && entry.date && Number.isFinite(Number(entry.modal)))
    .forEach((entry) => { historyByDate[entry.date] = entry; });
  if (currentRows.length && Number.isFinite(Number(med))) {
    historyByDate[currentHistoryDate] = {
      date: currentHistoryDate,
      modal: Number(med),
      mandis: currentRows.length,
    };
  }
  const cropModelHistory = currentRows.length
    ? Object.values(historyByDate)
      .sort((a, b) => String(b.date).localeCompare(String(a.date)))
      .slice(0, 10)
    : [];
  const historyRows = cropModelHistory
    .slice()
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));
  const shortHistoryDate = (date) => {
    const parts = String(date || "").split("-");
    return parts.length === 3 ? parts[2] + "/" + parts[1] : String(date || "");
  };
  const historyGraph = (() => {
    if (!historyRows.length) return "";

    const width = 360;
    const height = 220;
    const left = 54;
    const right = 12;
    const top = 18;
    const bottom = 40;
    const plotWidth = width - left - right;
    const plotHeight = height - top - bottom;
    const values = historyRows.map((entry) => Number(entry.modal));
    const rawMin = Math.min.apply(null, values);
    const rawMax = Math.max.apply(null, values);
    const basePadding = rawMin === rawMax
      ? Math.max(rawMax * 0.05, 100)
      : Math.max((rawMax - rawMin) * 0.12, 50);
    const chartMin = Math.max(0, rawMin - basePadding);
    const chartMax = rawMax + basePadding;
    const chartRange = chartMax - chartMin || 1;
    const xFor = (index) => historyRows.length === 1
      ? left + (plotWidth / 2)
      : left + ((plotWidth * index) / (historyRows.length - 1));
    const yFor = (value) => top + (plotHeight * (chartMax - value) / chartRange);
    const pointPairs = historyRows.map((entry, index) => ({
      entry,
      x: xFor(index),
      y: yFor(Number(entry.modal)),
    }));
    const linePoints = pointPairs
      .map((point) => point.x.toFixed(2) + "," + point.y.toFixed(2))
      .join(" ");
    const areaPath = pointPairs.length > 1
      ? "M " + pointPairs[0].x.toFixed(2) + " " + (top + plotHeight) +
        " L " + pointPairs.map((point) => point.x.toFixed(2) + " " + point.y.toFixed(2)).join(" L ") +
        " L " + pointPairs[pointPairs.length - 1].x.toFixed(2) + " " + (top + plotHeight) + " Z"
      : "";
    const yGrid = [0, 1, 2, 3]
      .map((index) => {
        const ratio = index / 3;
        const y = top + (plotHeight * ratio);
        const value = chartMax - (chartRange * ratio);
        return '<line class="history-grid-line" x1="' + left + '" y1="' + y.toFixed(2) + '" x2="' +
          (width - right) + '" y2="' + y.toFixed(2) + '"></line>' +
          '<text class="history-axis-label history-y-label" x="' + (left - 6) + '" y="' +
          (y + 3).toFixed(2) + '" text-anchor="end">' + u.rupee(Math.round(value)) + "</text>";
      })
      .join("");
    const xLabels = pointPairs
      .map((point) =>
        '<text class="history-axis-label" x="' + point.x.toFixed(2) + '" y="' +
        (height - 15) + '" text-anchor="middle">' + shortHistoryDate(point.entry.date) + "</text>"
      )
      .join("");
    const points = pointPairs
      .map((point) => {
        const entry = point.entry;
        const mandiCount = Number(entry.mandis || 0);
        const label = u.formatDateHi(entry.date) + ", मॉडल भाव " +
          u.rupee(Number(entry.modal)) + " प्रति क्विंटल, " + mandiCount + " उपलब्ध मंडियां";
        return '<g class="history-point" tabindex="0" role="img" aria-label="' +
          u.escapeHtml(label) + '" data-tooltip="' + u.escapeHtml(label) + '">' +
          '<circle class="history-point-hit" cx="' + point.x.toFixed(2) + '" cy="' +
          point.y.toFixed(2) + '" r="12"></circle>' +
          '<circle class="history-point-dot" cx="' + point.x.toFixed(2) + '" cy="' +
          point.y.toFixed(2) + '" r="4.5"></circle></g>';
      })
      .join("");
    const dayLabel = historyRows.length === 1 ? "दिन" : "दिनों";

    return '<section class="card crop-model-history" id="price-history"><h2>पिछले ' + historyRows.length + " उपलब्ध " + dayLabel + " का " +
      crop.hi + ' मॉडल भाव</h2><div class="history-chart-wrap">' +
      '<svg class="history-chart" viewBox="0 0 ' + width + " " + height +
      '" role="img" aria-label="' + u.escapeHtml(crop.hi + " के मॉडल भाव का ग्राफ") +
      '" aria-describedby="history-chart-desc">' +
      '<desc id="history-chart-desc">पिछले उपलब्ध दिनों में ' + crop.hi +
      ' के मॉडल भाव का उतार-चढ़ाव। हर बिंदु पर तारीख, भाव और उपलब्ध मंडियों की संख्या देखी जा सकती है।</desc>' +
      yGrid + (areaPath ? '<path class="history-area" d="' + areaPath + '"></path>' : "") +
      '<polyline class="history-line" points="' + linePoints + '"></polyline>' + points + xLabels +
      '</svg><div class="history-tooltip" role="status" hidden></div></div></section>';
  })();
  const historyIntro = historyRows.length
    ? '<p class="history-intro">नीचे के ग्राफ में पिछले ' + historyRows.length +
      ' उपलब्ध दिनों के मॉडल भाव दिए गए हैं, जिनसे भाव का उतार-चढ़ाव समझ सकते हैं।</p>'
    : "";

  const subHi = "सभी उपलब्ध राज्यों की मंडियां।";
  const subEn = "Mandis across all available states.";

  const mandiDynamicFaqs = Object.keys(MB.dynamicMandiFaqs || {})
    .reduce((all, mandiSlug) => {
      const matches = (MB.dynamicMandiFaqs[mandiSlug] || []).filter(
        (item) => item.crop === slug
      );
      return all.concat(
        matches.map((item) => Object.assign({ mandi: mandiSlug }, item))
      );
    }, [])
    .map((item) => {
      const mandi = u.mandiBySlug(item.mandi);
      const row = item.variety
        ? u.varietyPricesFor({ mandi: item.mandi, crop: slug }).find((price) => price.variety === item.variety && u.isFreshPrice(price))
        : u.pricesFor({ mandi: item.mandi, crop: slug }).find(u.isFreshPrice);
      if (!mandi) return "";

      const cropLabel = crop.hi + (item.variety ? " (" + item.variety + ")" : "");
      let answer;
      if (row) {
        const isCurrent = u.isFreshPrice(row);
        answer = isCurrent
          ? u.formatUpdatedHi(MB.PRICE_DATE) + " को " + mandi.hi + " में " + cropLabel + " का मॉडल भाव " +
            u.rupee(row.modal) + " प्रति क्विंटल है। न्यूनतम भाव " + u.rupee(row.min) +
            " और अधिकतम भाव " + u.rupee(row.max) + " है।"
          : mandi.hi + " में " + cropLabel + " का आखिरी उपलब्ध मॉडल भाव " + u.formatUpdatedHi(row.date) +
            " को " + u.rupee(row.modal) + " प्रति क्विंटल था। उस दिन न्यूनतम भाव " + u.rupee(row.min) +
            " और अधिकतम भाव " + u.rupee(row.max) + " था।";
      } else {
        answer = mandi.hi + " में " + cropLabel +
          " का उपलब्ध भाव रिकॉर्ड अभी नहीं है। नया रिकॉर्ड उपलब्ध होने पर यह उत्तर अपने-आप भाव के साथ दिखेगा।";
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

  const cropFaqEntities = [];
  const cropDynamicFaqs = ((MB.dynamicCropFaqs || {})[slug] || [])
    .map((item) => {
      let answer;

      if (item.type === "mandi") {
        const row = baseRows.find((price) => price.mandi === item.mandi && u.isFreshPrice(price));
        const mandi = u.mandiBySlug(item.mandi);
        const mandiName = mandi ? mandi.hi : item.mandiHi;
        if (!row) {
          answer = mandiName + " मंडी में " + crop.hi +
            " का सत्यापित रिकॉर्ड अभी नहीं मिला है। ऊपर तालिका में अन्य उपलब्ध मंडियों के भाव देखें।";
        } else {
          const isCurrent = u.isFreshPrice(row);
          answer = isCurrent
            ? u.formatUpdatedHi(MB.PRICE_DATE) + " को " + mandiName + " मंडी में " + crop.hi +
              " का मॉडल भाव " + u.rupee(row.modal) + " प्रति क्विंटल है। न्यूनतम भाव " +
              u.rupee(row.min) + " और अधिकतम भाव " + u.rupee(row.max) + " है।"
            : mandiName + " मंडी में " + crop.hi + " का आखिरी उपलब्ध मॉडल भाव " +
              u.formatUpdatedHi(row.date) + " को " + u.rupee(row.modal) +
              " प्रति क्विंटल था। उस दिन न्यूनतम भाव " + u.rupee(row.min) +
              " और अधिकतम भाव " + u.rupee(row.max) + " था।";
        }
      } else if (item.type === "per-kg") {
        answer = Number.isFinite(med)
          ? u.formatUpdatedHi(MB.PRICE_DATE) + " को " + crop.hi +
            " का 1 किलो मॉडल भाव लगभग ₹" + (med / 100).toFixed(2) +
            " है। अलग-अलग मंडियों और खुदरा बाजार में भाव अलग हो सकता है; मंडीवार भाव ऊपर तालिका में देखें।"
          : crop.hi + " का मॉडल भाव अभी उपलब्ध नहीं है। उपलब्ध मंडीवार रिकॉर्ड ऊपर तालिका में देखें।";
      } else if (item.type === "msp") {
        answer = crop.msp
          ? crop.hi +
            " का सरकारी MSP " +
            u.rupee(crop.msp) +
            " प्रति क्विंटल है। यह मंडी का भाव नहीं है; उपलब्ध मंडी भाव ऊपर तालिका में देखें।"
          : crop.hi + " के लिए सरकारी MSP रिकॉर्ड उपलब्ध नहीं है।";
      } else {
        return "";
      }

      cropFaqEntities.push({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: answer } });
      return '<details class="faq-item"><summary>' + item.q + "</summary><p>" + answer + "</p></details>";
    })
    .join("");

  const dynamicFaqs = mandiDynamicFaqs + cropDynamicFaqs;
  if (cropFaqEntities.length) {
    const schemaId = "crop-dynamic-faq-schema";
    let schema = document.getElementById(schemaId);
    if (!schema) {
      schema = document.createElement("script");
      schema.id = schemaId;
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: cropFaqEntities });
  }

  const dynamicFaqSection = dynamicFaqs
    ? '<section class="faq-section dynamic-faq"><h2>आज के भाव से जुड़े सवाल</h2>' +
      dynamicFaqs.replace('<details class="faq-item">', '<details class="faq-item" open>') +
      "</section>"
    : "";

  const tables =
    (stats.length
      ? '<div class="stats four">' +
        stats
          .map((s) => '<div class="stat"><span class="stat-icon">' + statIcon(s.i) + "</span><b>" + s.v + "</b><span>" + s.l + "</span></div>")
          .join("") +
        "</div>"
      : "") +
    '<p class="share-bar"><span class="price-date">' +
    u.formatUpdatedHi(MB.PRICE_DATE) +
    ': ' +
    crop.hi +
    ' के ताज़ा मंडी भाव' +
    "</span>" +
    (shareAll ? u.shareBtn(shareAll) : "") +
    "</p>" +
    '<section class="card crop-mandi-list"><h2>' + crop.hi + ' के ' + u.formatUpdatedHi(MB.PRICE_DATE) + ' के उपलब्ध मंडी भाव</h2><table><thead><tr><th>मंडी</th><th>किस्म</th><th class="num">मॉडल</th><th class="num range-col">न्यून.–अधि.</th></tr></thead><tbody>' +
    (currentBody || '<tr><td class="empty" colspan="4">इस भाव तारीख के रिकॉर्ड उपलब्ध नहीं हैं।</td></tr>') +
    "</tbody></table></section>" +
    historyIntro +
    historyGraph;

  const pageContent = tables;

  if (seoReady) {
    box.innerHTML = pageContent;
  } else {
    const seo = (MB.seo && MB.seo[slug]) || {};
    box.innerHTML =
      '<p class="crumbs"><a href="' + u.siteHref("") + '">होम</a> / ' +
      crop.hi +
      "</p>" +
      "<h1>" +
      crop.hi +
      " का भाव आज | " +
      crop.en +
      " Mandi Price Today</h1>" +
      '<p class="sub">' +
      (seo.hi || subHi) +
      "</p>" +
      '<p class="sub en-line">' +
      (seo.en || subEn) +
      "</p>" +
      pageContent;
  }

  const historyTooltip = box.querySelector(".history-tooltip");
  const historyPoints = Array.prototype.slice.call(box.querySelectorAll(".history-point"));
  const hideHistoryTooltip = () => {
    if (historyTooltip) historyTooltip.hidden = true;
  };
  const showHistoryTooltip = (point) => {
    if (!historyTooltip || !point) return;
    const wrap = historyTooltip.parentElement;
    const dot = point.querySelector(".history-point-dot");
    if (!wrap || !dot) return;
    historyTooltip.textContent = String(point.getAttribute("data-tooltip") || "").replace(/, /g, " · ");
    historyTooltip.hidden = false;
    const wrapRect = wrap.getBoundingClientRect();
    const dotRect = dot.getBoundingClientRect();
    const tooltipRect = historyTooltip.getBoundingClientRect();
    const pointCenter = dotRect.left - wrapRect.left + (dotRect.width / 2);
    const maxLeft = Math.max(6, wrapRect.width - tooltipRect.width - 6);
    const tooltipLeft = Math.max(6, Math.min(pointCenter - (tooltipRect.width / 2), maxLeft));
    const arrowLeft = Math.max(14, Math.min(pointCenter - tooltipLeft, tooltipRect.width - 14));
    historyTooltip.style.left = tooltipLeft + "px";
    historyTooltip.style.top = (dotRect.bottom - wrapRect.top + 10) + "px";
    historyTooltip.style.setProperty("--history-arrow-left", arrowLeft + "px");
  };
  historyPoints.forEach((point) => {
    point.addEventListener("mouseenter", () => showHistoryTooltip(point));
    point.addEventListener("mouseleave", hideHistoryTooltip);
    point.addEventListener("focus", () => showHistoryTooltip(point));
    point.addEventListener("blur", hideHistoryTooltip);
    point.addEventListener("click", () => showHistoryTooltip(point));
  });

  if (dynamicFaqSection) {
    const article = document.querySelector("main .article-section");
    const staticFaq = document.querySelector("main .faq-section:not(.dynamic-faq)");
    if (article) article.insertAdjacentHTML("afterend", dynamicFaqSection);
    else if (staticFaq) staticFaq.insertAdjacentHTML("beforebegin", dynamicFaqSection);
    else box.insertAdjacentHTML("beforeend", dynamicFaqSection);
  }
};
