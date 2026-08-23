/*
  फाइल: js/rajya.js — राज्य वाला पेज
  हर फसल के सामने एक मंडी: उसी राज्य का सबसे ऊँचा मॉडल भाव।
  फसल पर क्लिक = फसल पेज। मंडी पर क्लिक = मंडी पेज।
  नीचे उसी राज्य की सारी मंडियां (सूची data.js में)।
  नया राज्य जोड़ने के लिए data.js खोलें।
*/
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
  const byCrop = {};
  rows.forEach((r) => {
    if (!byCrop[r.crop]) byCrop[r.crop] = [];
    byCrop[r.crop].push(r);
  });

  const cropRows = Object.keys(byCrop)
    .sort((a, b) => {
      const freshOrder = Number(byCrop[b].some(u.isFreshPrice)) - Number(byCrop[a].some(u.isFreshPrice));
      if (freshOrder) return freshOrder;
      const freshB = byCrop[b].filter(u.isFreshPrice);
      const freshA = byCrop[a].filter(u.isFreshPrice);
      const maxB = freshB.length ? Math.max(...freshB.map((row) => row.modal)) : 0;
      const maxA = freshA.length ? Math.max(...freshA.map((row) => row.modal)) : 0;
      return maxB - maxA;
    })
    .map((cropSlug) => {
      const list = byCrop[cropSlug].filter(u.isFreshPrice);
      if (!list.length) return "";
      const med = u.median(list.map((x) => x.modal));
      const best = list.slice().sort((a, b) => b.modal - a.modal)[0];
      const crop = u.cropBySlug(cropSlug);
      const mandi = u.mandiBySlug(best.mandi);
      let price = u.rupee(med) + "/qtl";
      if (crop.veg) price += " · " + u.rupee(u.kgFromQtl(med)) + "/kg";
      return (
        "<tr><td><a href=\"" +
        u.cropHref(cropSlug, slug) +
        '">' +
        u.nameHi(crop) +
        "</a></td><td>" +
        price +
        '</td><td><a href="' +
        u.mandiHref(mandi.slug, cropSlug) +
        '">' +
        u.nameHi(mandi) +
        "</a></td></tr>"
      );
    })
    .filter(Boolean)
    .join("");

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
        return '<details class="faq-item" open><summary>' + item.q + "</summary><p>" + answer + "</p></details>";
      }
      if (item.type === "state-crop") {
        const crop = u.cropBySlug(item.crop);
        const list = rows.filter((price) => price.crop === item.crop && u.isFreshPrice(price));
        if (!crop || !list.length) return "";
        const med = u.median(list.map((price) => price.modal));
        const best = list.slice().sort((a, b) => b.modal - a.modal)[0];
        const market = u.mandiBySlug(best.mandi);
        return '<details class="faq-item" open><summary>' + item.q + "</summary><p>" + state.hi + " में " + crop.hi + " का उपलब्ध राज्य median मॉडल भाव " + u.rupee(med) + " प्रति क्विंटल है। इस समय सबसे ऊंचा उपलब्ध मॉडल भाव " + market.hi + " में " + u.rupee(best.modal) + " प्रति क्विंटल है। यह उपलब्ध भाव रिकॉर्ड " + u.formatUpdatedHi(MB.LAST_UPDATED_DATE || MB.PRICE_DATE) + " का है।</p></details>";
      }
      return "";
    })
    .filter(Boolean)
    .join("");
  const dynamicFaqSection = dynamicFaqs
    ? '<section class="faq-section dynamic-faq"><h2>आज के भाव से जुड़े सवाल</h2>' + dynamicFaqs + "</section>"
    : "";
  const chips = mandis
    .map((m) => '<a class="chip" href="' + u.mandiHref(m.slug) + '">' + m.hi + "</a>")
    .join("");

  const other = MB.states
    .map((s) => {
      const on = s.slug === slug ? " on" : "";
      return '<a class="chip' + on + '" href="' + u.stateHref(s.slug) + '">' + s.hi + "</a>";
    })
    .join("");

  const tables =
    '<p class="share-bar"><span class="price-date">आखिरी अपडेट · ' +
    u.formatUpdatedHi(MB.LAST_UPDATED_DATE) +
    '</span></p>' +
    '<div class="chips">' +
    other +
    "</div>" +
    '<section class="card"><h2>फसलें<span class="en">Crops</span></h2><table><thead><tr><th>फसल</th><th>राज्य मीडियन</th><th>मंडी</th></tr></thead><tbody>' +
    cropRows +
    "</tbody></table></section>" +
    '<section class="card"><h2>मंडियां <span class="en">Mandis</span></h2><div style="padding:12px" class="chips">' +
    chips +
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
