/*
  फाइल: js/mandi-page.js — मंडी वाला पेज
  उस मंडी की आज की सारी फसलें।
  नीचे पास की दूसरी मंडियां (उसी राज्य की)।
  नई मंडी सिर्फ data.js में जोड़ें।
*/
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

  const rows = u.pricesFor({ mandi: slug });
  const sortedRows = rows
    .slice()
    .sort((a, b) => {
      const freshness = u.freshFirst(a, b);
      if (freshness) return freshness;
      if (highlight && a.crop === highlight) return -1;
      if (highlight && b.crop === highlight) return 1;
      return b.modal - a.modal;
    });
  let staleDividerAdded = false;
  const body = sortedRows
    .map((r) => {
      const c = u.cropBySlug(r.crop);
      const divider = !staleDividerAdded && u.isStalePrice(r)
        ? ((staleDividerAdded = true), '<tr class="stale-divider" aria-label="पुराने भाव"><td colspan="5"><span></span></td></tr>')
        : "";
      return (
        divider + "<tr><td><a href=\"" +
        u.cropHref(r.crop, mandi.state) +
        '">' +
        u.nameHi(c) +
        "</a></td>" +
        '<td class="num">' +
        u.rupee(r.min) +
        "</td>" +
        '<td class="num">' +
        u.priceCell(r.crop, r) +
        "</td>" +
        '<td class="num">' +
        u.rupee(r.max) +
        "</td>" +
        '<td class="num">' +
        u.arrivalsText(r.arrivals) +
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
  const shareTop = top ? u.sharePrice(top.crop, slug, top) : "#";
  const dynamicFaqs = ((MB.dynamicMandiFaqs || {})[slug] || [])
    .map((item) => {
      const row = rows.find((price) => price.crop === item.crop);
      const crop = u.cropBySlug(item.crop);
      const cropHi = crop ? crop.hi : item.cropHi || item.crop;
      const answer = row
        ? mandi.hi +
          " में " +
          cropHi +
          " का उपलब्ध मॉडल भाव " +
          u.rupee(row.modal) +
          " प्रति क्विंटल है। न्यूनतम भाव " +
          u.rupee(row.min) +
          " और अधिकतम भाव " +
          u.rupee(row.max) +
          " है। यह उपलब्ध भाव रिकॉर्ड " +
          u.formatUpdatedHi(MB.LAST_UPDATED_DATE || MB.PRICE_DATE) +
          " का है।"
        : mandi.hi +
          " में " +
          cropHi +
          " का उपलब्ध भाव रिकॉर्ड अभी नहीं है। नया record उपलब्ध होने पर यह उत्तर अपने-आप भाव के साथ दिखेगा।";
      return (
        '<details class="faq-item" open><summary>' +
        item.q +
        "</summary><p>" +
        answer +
        "</p></details>"
      );
    })
    .filter(Boolean)
    .join("");
  const dynamicFaqSection = dynamicFaqs
    ? '<section class="faq-section dynamic-faq"><h2>आज के भाव से जुड़े सवाल</h2>' + dynamicFaqs + "</section>"
    : "";

  const tables =
    '<p class="share-bar">' +
    (top
      ? '<span class="price-date">आखिरी अपडेट · ' +
        u.formatUpdatedHi(MB.LAST_UPDATED_DATE) +
        "</span>" +
        u.shareBtn(shareTop)
      : "") +
    "</p>" +
    '<section class="card"><h2>आज इस मंडी की फसलें<span class="en">Crops in this mandi today</span></h2>' +
    (rows.length
      ? "<table><thead><tr><th>फसल</th>" +
        '<th class="num">न्यून.</th><th class="num">मॉडल</th><th class="num">अधि.</th>' +
        '<th class="num">आवक</th></tr></thead><tbody>' +
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

  // Keep the article directly below the table, then place live price FAQs
  // before the normal static FAQ section, matching the crop-page order.
  if (dynamicFaqSection) {
    const article = document.querySelector("main .article-section");
    const staticFaq = document.querySelector("main .faq-section:not(.dynamic-faq)");
    if (article) article.insertAdjacentHTML("afterend", dynamicFaqSection);
    else if (staticFaq) staticFaq.insertAdjacentHTML("beforebegin", dynamicFaqSection);
    else box.insertAdjacentHTML("beforeend", dynamicFaqSection);
  }
};
