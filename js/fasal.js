/*
  फाइल: js/fasal.js — फसल वाला पेज
  होम या खोज से खोलें तो चारों राज्य की मंडियां (सभी)।
  एक राज्य चुनें तो सिर्फ उसी की मंडियां।
  वाक्य और टेबल यहाँ। भाव data.js से आते हैं।
  सब्जी हो तो किलो का भाव अपने आप दिखता है।
*/
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

  const stateSlug = u.param("state");
  const state = stateSlug ? u.stateBySlug(stateSlug) : null;
  const rows = state
    ? u.pricesFor({ crop: slug, state: state.slug })
    : u.pricesFor({ crop: slug });

  if (!rows.length) {
    box.innerHTML = '<p class="empty">इस फसल के भाव अभी उपलब्ध नहीं हैं।</p>';
    return;
  }

  const currentRows = rows.filter(u.isFreshPrice);
  const med = u.median(currentRows.map((r) => r.modal));
  const vsMed = u.median(currentRows.map((r) => r.vs));
  const mins = currentRows.map((r) => r.min);
  const maxs = currentRows.map((r) => r.max);

  const chips =
    '<a class="chip' +
    (!state ? " on" : "") +
    '" href="' +
    u.cropHref(slug) +
    '">सभी</a>' +
    MB.states
      .map((s) => {
        const on = state && s.slug === state.slug ? " on" : "";
        return (
          '<a class="chip' +
          on +
          '" href="' +
          u.cropHref(slug, s.slug) +
          '">' +
          u.nameHi(s) +
          "</a>"
        );
      })
      .join("");

  const stats = currentRows.length ? [
    { v: u.rupee(med), l: "मॉडल भाव" },
    crop.veg
      ? { v: u.rupee(u.kgFromQtl(med)), l: "प्रति किलो" }
      : crop.msp
        ? { v: u.rupee(crop.msp), l: "MSP" }
        : { v: u.rupee(Math.min.apply(null, mins)), l: "न्यूनतम भाव" },
    {
      v: u.rupee(Math.min.apply(null, mins)) + "–" + u.rupee(Math.max.apply(null, maxs)).replace("₹", ""),
      l: "न्यूनतम–अधिकतम",
    },
    { v: u.vsText(vsMed || 0), l: "कल से" },
  ] : [];

  const shareAll = currentRows.length ? u.sharePrice(slug, currentRows[0].mandi, currentRows[0]) : "";
  const showStateCol = !state;

  const sortedRows = rows
    .slice()
    .sort((a, b) => u.freshFirst(a, b) || b.modal - a.modal);
  let staleDividerAdded = false;
  const body = sortedRows
    .map((r) => {
      const m = u.mandiBySlug(r.mandi);
      const st = u.stateBySlug(m.state);
      const divider = !staleDividerAdded && u.isStalePrice(r)
        ? ((staleDividerAdded = true), '<tr class="stale-divider" aria-label="पुराने भाव"><td colspan="' + (showStateCol ? 5 : 4) + '"><span></span></td></tr>')
        : "";
      return (
        divider + "<tr><td><a href=\"" +
        u.mandiHref(r.mandi, slug) +
        '">' +
        u.nameHi(m) +
        "</a></td>" +
        (showStateCol ? "<td>" + u.nameHi(st) + "</td>" : "") +
        '<td class="num">' +
        u.priceCell(slug, r) +
        "</td>" +
        '<td class="num">' +
        u.rupee(r.min) +
        "–" +
        u.rupee(r.max).replace("₹", "") +
        "</td>" +
        '<td class="num ' +
        u.vsClass(r.vs) +
        '">' +
        u.vsText(r.vs) +
        "</td></tr>"
      );
    })
    .join("");

  const subHi = state
    ? state.hi + " — इस राज्य की मंडियां।"
    : "राजस्थान, गुजरात, मध्य प्रदेश और हरियाणा की मंडियां।";
  const subEn = state
    ? "Mandis in this state."
    : "Mandis across Rajasthan, Gujarat, Madhya Pradesh and Haryana.";

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
      const row = u.pricesFor({ mandi: item.mandi, crop: slug })[0];
      if (!mandi) return "";

      const answer = row
        ? mandi.hi +
          " में " +
          crop.hi +
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
          crop.hi +
          " का उपलब्ध भाव रिकॉर्ड अभी नहीं है। नया रिकॉर्ड उपलब्ध होने पर यह उत्तर अपने-आप भाव के साथ दिखेगा।";

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

  const cropRows = u.pricesFor({ crop: slug }).filter(u.isFreshPrice);
  const cropDynamicFaqs = ((MB.dynamicCropFaqs || {})[slug] || [])
    .map((item) => {
      const median = cropRows.length
        ? u.median(cropRows.map((row) => row.modal))
        : null;
      let answer;

      if (item.type === "msp") {
        answer = crop.msp
          ? crop.hi +
            " का सरकारी MSP " +
            u.rupee(crop.msp) +
            " प्रति क्विंटल है। यह मंडी का भाव नहीं है; उपलब्ध मंडी भाव ऊपर तालिका में देखें।"
          : crop.hi + " के लिए सरकारी MSP रिकॉर्ड उपलब्ध नहीं है।";
      } else if (!median) {
        answer = crop.hi +
          " का उपलब्ध भाव रिकॉर्ड अभी नहीं है। नया रिकॉर्ड उपलब्ध होने पर यह उत्तर अपने-आप भाव के साथ दिखेगा।";
      } else if (item.type === "per-kg") {
        answer = crop.hi +
          " का उपलब्ध median मॉडल भाव " +
          u.rupee(median) +
          " प्रति क्विंटल है, यानी लगभग ₹" +
          (median / 100).toFixed(2) +
          " प्रति किलो। यह उपलब्ध भाव रिकॉर्ड " +
          u.formatUpdatedHi(MB.LAST_UPDATED_DATE || MB.PRICE_DATE) +
          " का है।";
      } else {
        answer = "इस किस्म का अलग भाव रिकॉर्ड उपलब्ध नहीं है। " +
          crop.hi +
          " का उपलब्ध median मॉडल भाव " +
          u.rupee(median) +
          " प्रति क्विंटल है। यह उपलब्ध भाव रिकॉर्ड " +
          u.formatUpdatedHi(MB.LAST_UPDATED_DATE || MB.PRICE_DATE) +
          " का है।";
      }

      return '<details class="faq-item" open><summary>' + item.q + "</summary><p>" + answer + "</p></details>";
    })
    .join("");

  const dynamicFaqs = mandiDynamicFaqs + cropDynamicFaqs;

  const dynamicFaqSection = dynamicFaqs
    ? '<section class="faq-section dynamic-faq"><h2>आज के भाव से जुड़े सवाल</h2>' +
      dynamicFaqs +
      "</section>"
    : "";

  const tables =
    '<div class="chips">' +
    chips +
    "</div>" +
    (stats.length
      ? '<div class="stats four">' +
        stats
          .map((s) => '<div class="stat"><b>' + s.v + "</b><span>" + s.l + "</span></div>")
          .join("") +
        "</div>"
      : "") +
    '<p class="share-bar"><span class="price-date">आखिरी अपडेट · ' +
    u.formatUpdatedHi(MB.LAST_UPDATED_DATE) +
    "</span>" +
    (shareAll ? u.shareBtn(shareAll) : "") +
    "</p>" +
    '<section class="card"><h2>मंडियां<span class="en">Mandis</span></h2><table><thead><tr><th>मंडी</th>' +
    (showStateCol ? "<th>राज्य</th>" : "") +
    '<th class="num">मॉडल</th><th class="num">न्यून.–अधि.</th><th class="num">कल से</th></tr></thead><tbody>' +
    body +
    "</tbody></table></section>" +
    '<p class="note">' +
    "अलग अलग राज्यों के मॉडल भाव से क्रम। सब्जी पर प्रति किलो भी लिखा है।</p>";

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

  if (dynamicFaqSection) {
    const article = document.querySelector("main .article-section");
    const staticFaq = document.querySelector("main .faq-section:not(.dynamic-faq)");
    if (article) article.insertAdjacentHTML("afterend", dynamicFaqSection);
    else if (staticFaq) staticFaq.insertAdjacentHTML("beforebegin", dynamicFaqSection);
    else box.insertAdjacentHTML("beforeend", dynamicFaqSection);
  }
};
