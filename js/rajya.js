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
  const mandis = MB.mandis.filter((m) => m.state === slug);
  const dynamicFaqs = ((MB.dynamicStateFaqs || {})[slug] || [])
    .map((item) => {
      if (item.type === "mandi-crop") {
        const market = u.mandiBySlug(item.mandi);
        const crop = u.cropBySlug(item.crop);
        const row = rows.find((price) => price.mandi === item.mandi && price.crop === item.crop);
        if (!market || !crop) return "";
        const answer = row
          ? market.hi + " में " + crop.hi + " का उपलब्ध मॉडल भाव " + u.rupee(row.modal) + " प्रति क्विंटल है। न्यूनतम भाव " + u.rupee(row.min) + " और अधिकतम भाव " + u.rupee(row.max) + " है। यह उपलब्ध भाव रिकॉर्ड " + u.formatUpdatedHi(MB.LAST_UPDATED_DATE || MB.PRICE_DATE) + " का है।"
          : market.hi + " में " + crop.hi + " का उपलब्ध भाव रिकॉर्ड अभी नहीं है। नया record उपलब्ध होने पर यह उत्तर अपने-आप भाव के साथ दिखेगा।";
        return '<details class="faq-item"><summary>' + item.q + "</summary><p>" + answer + "</p></details>";
      }
      if (item.type === "state-crop") {
        const crop = u.cropBySlug(item.crop);
        const list = rows.filter((price) => price.crop === item.crop && u.isFreshPrice(price));
        if (!crop || !list.length) return "";
        const med = u.median(list.map((price) => price.modal));
        const best = list.slice().sort((a, b) => b.modal - a.modal)[0];
        const market = u.mandiBySlug(best.mandi);
        return '<details class="faq-item"><summary>' + item.q + "</summary><p>" + state.hi + " में " + crop.hi + " का उपलब्ध राज्य median मॉडल भाव " + u.rupee(med) + " प्रति क्विंटल है। इस समय सबसे ऊंचा उपलब्ध मॉडल भाव " + market.hi + " में " + u.rupee(best.modal) + " प्रति क्विंटल है। यह उपलब्ध भाव रिकॉर्ड " + u.formatUpdatedHi(MB.LAST_UPDATED_DATE || MB.PRICE_DATE) + " का है।</p></details>";
      }
      return "";
    })
    .filter(Boolean)
    .join("");
  const dynamicFaqSection = dynamicFaqs
    ? '<section class="faq-section dynamic-faq"><h2>आज के भाव से जुड़े सवाल</h2>' + dynamicFaqs.replace('<details class="faq-item">', '<details class="faq-item" open>') + "</section>"
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
        price = "<small>मंडी के उपलब्ध भाव</small><b>भाव देखें</b>";
      }
      return (
        '<a class="mandi-tile" href="' +
        u.mandiHref(m.slug) +
        '"><span class="mandi-tile-top"><span class="mandi-state"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>' +
        m.district.hi +
        '</span><span class="mandi-arrow" aria-hidden="true">→</span></span><strong>' +
        m.hi +
        '</strong><span class="mandi-tile-price">' +
        price +
        "</span></a>"
      );
    })
    .join("");

  const tables =
    '<p class="share-bar"><span class="price-date">आज ' +
    u.formatUpdatedHi(MB.LAST_UPDATED_DATE) +
    ': ' +
    state.hi +
    ' के ताज़ा मंडी भाव' +
    '</span></p>' +
    '<section class="state-mandi-directory"><h2>' +
    state.hi +
    ' की सभी मंडियां</h2><div class="mandi-grid">' +
    mandiCards +
    "</div></section>" +
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
