MB.page = function statePage() {
  const u = MB.ui;
  const slug = u.pageStateSlug() || "rajasthan";
  const state = u.stateBySlug(slug);
  const box = document.getElementById("page-body") || document.getElementById("main");
  const seoReady = !!document.getElementById("page-body");

  if (!state) {
    box.innerHTML = '<p class="empty">राज्य नहीं मिला · State not found.</p>';
    return;
  }

  document.title = state.hi + " मंडी भाव आज | " + state.en + " Mandi Bhav Today";

  const rows = u.pricesFor({ state: slug });
  const currentRows = rows.filter(u.isFreshPrice);
  const stateTableModal = u.median(currentRows.map((row) => row.modal));
  const stateTableMin = currentRows.length ? Math.min.apply(null, currentRows.map((row) => row.min)) : null;
  const stateTableMax = currentRows.length ? Math.max.apply(null, currentRows.map((row) => row.max)) : null;
  const mandis = MB.mandis.filter((m) => m.state === slug);
  let mandiImages = {};
  try {
    mandiImages = JSON.parse(document.body.getAttribute("data-mandi-images") || "{}");
  } catch (error) {
    mandiImages = {};
  }
  const stateFaqEntities = [];
  const dynamicFaqs = ((MB.dynamicStateFaqs || {})[slug] || [])
    .map((item) => {
      if (item.type === "mandi-crop") {
        const market = u.mandiBySlug(item.mandi);
        const crop = u.cropBySlug(item.crop);
        const row = rows.find((price) => price.mandi === item.mandi && price.crop === item.crop && u.isFreshPrice(price));
        if (!market || !crop) return "";
        const modal = row ? Number(row.modal) : Number(stateTableModal);
        const min = row ? Number(row.min) : Number(stateTableMin);
        const max = row ? Number(row.max) : Number(stateTableMax);
        if (![modal, min, max].every(Number.isFinite)) return "";
        const answer = u.fillFaqAnswer(item.a, {
          dateLead: u.faqAnswerDateLead(item.q, (row && row.date) || MB.PRICE_DATE),
          label: row
            ? market.hi + " में " + crop.hi
            : state.hi + " की सारणी में दर्ज भावों का मध्य",
          mandi: market.hi,
          crop: crop.hi,
          modal: u.rupee(modal),
          min: u.rupee(min),
          max: u.rupee(max),
          kgModal: u.rupee(modal / 100),
          kgMin: u.rupee(min / 100),
          kgMax: u.rupee(max / 100),
        });
        if (!answer) return "";
        stateFaqEntities.push({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: answer } });
        return '<details class="faq-item"><summary>' + item.q + "</summary><p>" + u.escapeHtml(answer) + "</p></details>";
      }
      return "";
    })
    .filter(Boolean)
    .join("");
  if (stateFaqEntities.length) {
    let schema = document.getElementById("state-dynamic-faq-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "state-dynamic-faq-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: stateFaqEntities });
  }
  const dynamicFaqSection = dynamicFaqs
    ? '<section class="faq-section dynamic-faq"><h2>भाव संबंधित सवाल</h2>' + dynamicFaqs.replace('<details class="faq-item">', '<details class="faq-item" open>') + "</section>"
    : "";
  const mandiCards = mandis
    .map((m) => {
      const freshRows = u.pricesFor({ mandi: m.slug }).filter(u.isFreshPrice);
      const top = freshRows.slice().sort((a, b) => b.modal - a.modal)[0];
      const crop = top ? u.cropBySlug(top.crop) : null;
      let price = "";
      if (crop && top) {
        const value = crop.veg ? u.rupee(u.kgFromQtl(top.modal)) + "/kg" : u.rupee(top.modal) + "/qtl";
        price = '<small>' + crop.hi + ' · मॉडल भाव</small><b>' + value + "</b>";
      } else {
        price = "<small>मंडी भाव</small><b>भाव देखें</b>";
      }
      const image = mandiImages[m.slug]
        ? '<img class="mandi-tile-image" src="' + u.siteHref(mandiImages[m.slug]) + '" alt="' + u.escapeHtml(m.hi + ' मंडी का कृषि बाजार') + '" width="1200" height="630" loading="lazy" decoding="async" />'
        : "";
      const cardText = image
        ? '<span class="mandi-image-label"><span>भाव देखें</span><span class="mandi-arrow" aria-hidden="true">→</span></span>'
        : '<span class="mandi-tile-top"><span class="mandi-state"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>' +
          m.district.hi +
          '</span><span class="mandi-arrow" aria-hidden="true">→</span></span><strong>' +
          m.hi +
          '</strong><span class="mandi-tile-price">' +
          price +
          "</span>";
      return '<a class="mandi-tile' + (image ? ' mandi-tile-with-image' : '') + '" href="' + u.mandiHref(m.slug) + '">' + image + cardText + "</a>";
    })
    .join("");

  const stateLinks = MB.states
    .map((item) => {
      const mandisOfState = MB.mandis.filter((m) => m.state === item.slug);
      if (!mandisOfState.length) return "";
      const isCurrent = item.slug === slug;
      return (
        '<a class="state-tile' + (isCurrent ? ' state-tile-current' : '') + '" href="' +
        u.stateHref(item.slug) +
        '"' + (isCurrent ? ' aria-current="page"' : '') + '><span class="state-code">' +
        item.short +
        '</span><span class="state-copy"><strong>' +
        item.hi +
        '</strong><small>' +
        mandisOfState.length +
        ' मंडियाँ</small></span><span class="state-arrow" aria-hidden="true">→</span></a>'
      );
    })
    .filter(Boolean)
    .join("");

  const tables =
    '<p class="share-bar"><span class="price-date">आज ' + u.formatUpdatedHi(MB.PRICE_DATE) + ': ' +
    state.hi +
    ' के मंडी भाव' +
    '</span></p>' +
    '<section class="state-mandi-directory"><h2>' +
    state.hi +
    ' की प्रमुख मंडियां</h2><div class="mandi-grid">' +
    mandiCards +
    "</div></section>" +
    (stateLinks
      ? '<section class="land-block pad state-home-block state-links-block"><h2>अपने राज्य के अनुसार मंडी भाव देखें।</h2><div class="state-grid">' +
        stateLinks +
        "</div></section>"
      : "") +
    dynamicFaqSection;

  const seo = (MB.seo && MB.seo[slug]) || {};
  if (seoReady) {
    box.innerHTML = tables;
  } else {
    box.innerHTML =
      '<p class="crumbs"><a href="' + u.siteHref("") + '">होम</a> / ' +
      state.hi +
      "</p>" +
      "<h1>" +
      state.hi +
      " मंडी भाव आज | " +
      state.en +
      " Mandi Bhav Today</h1>" +
      '<p class="sub">' +
      (seo.hi || "आज इस राज्य में आई फसलें।") +
      "</p>" +
      '<p class="sub en-line">' +
      (seo.en || "Crops with arrivals in this state today.") +
      "</p>" +
      tables;
  }
};
