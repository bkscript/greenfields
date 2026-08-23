/*
  फाइल: js/site.js — हर पेज का साझा काम
  यहाँ: ऊपर का हैडर, खोज बॉक्स, रुपया लिखना, शेयर करें बटन।
  होम के वाक्य यहाँ नहीं (वे home.js में हैं)।
  फसल की टेबल यहाँ नहीं (वह fasal.js में है)।
  खोज बॉक्स का वाक्य renderChrome के अंदर बदलें।
*/
(function () {
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const currentScript = document.currentScript;
  const siteBase = currentScript && currentScript.src
    ? new URL("../", currentScript.src).href
    : new URL("./", location.href).href;

  function siteHref(path) {
    return new URL(String(path || "").replace(/^\/+/, ""), siteBase).href;
  }

  function loadAnalytics() {
    const measurementId = MB.GA_MEASUREMENT_ID;
    if (!/^G-[A-Z0-9]+$/.test(measurementId || "")) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId);
    const tag = document.createElement("script");
    tag.async = true;
    tag.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
    document.head.appendChild(tag);
  }

  loadAnalytics();

  function nameHi(obj) {
    return obj ? obj.hi : "";
  }

  function nameMix(obj) {
    if (!obj) return "";
    if (obj.hi === obj.en) return obj.hi;
    return obj.hi + " · " + obj.en;
  }

  function rupee(n) {
    if (n == null || n === "") return "—";
    return "₹" + Number(n).toLocaleString("en-IN");
  }

  function kgFromQtl(n) {
    return Math.round((Number(n) / 100) * 10) / 10;
  }

  function vsClass(vs) {
    if (vs > 0) return "vs-up";
    if (vs < 0) return "vs-down";
    return "vs-flat";
  }

  function vsText(vs) {
    if (vs > 0) return "+" + rupee(vs);
    if (vs < 0) return "−" + rupee(Math.abs(vs));
    return "स्थिर";
  }

  function arrivalsText(a) {
    const map = {
      high: { hi: "ज्यादा", en: "High" },
      med: { hi: "मध्यम", en: "Med" },
      low: { hi: "कम", en: "Low" },
    };
    return map[a] ? map[a].hi : a;
  }

  function cropBySlug(slug) {
    return MB.crops.find((c) => c.slug === slug);
  }
  function stateBySlug(slug) {
    return MB.states.find((s) => s.slug === slug);
  }
  function mandiBySlug(slug) {
    return MB.mandis.find((m) => m.slug === slug);
  }

  function median(nums) {
    if (!nums.length) return null;
    const s = nums.slice().sort((a, b) => a - b);
    const mid = Math.floor(s.length / 2);
    return s.length % 2 ? s[mid] : Math.round((s[mid - 1] + s[mid]) / 2);
  }

  function pricesFor(filter) {
    return MB.prices.filter((p) => {
      if (filter.crop && p.crop !== filter.crop) return false;
      if (filter.mandi && p.mandi !== filter.mandi) return false;
      if (filter.state) {
        const m = mandiBySlug(p.mandi);
        if (!m || m.state !== filter.state) return false;
      }
      return true;
    });
  }

  function isFreshPrice(row) {
    return !!(row && row.fresh);
  }

  function freshFirst(a, b) {
    return Number(isFreshPrice(b)) - Number(isFreshPrice(a));
  }

  function formatDateHi(iso) {
    const months = [
      "जनवरी",
      "फरवरी",
      "मार्च",
      "अप्रैल",
      "मई",
      "जून",
      "जुलाई",
      "अगस्त",
      "सितंबर",
      "अक्टूबर",
      "नवंबर",
      "दिसंबर",
    ];
    const p = String(iso || "").split("-");
    if (p.length !== 3) return iso || "";
    return Number(p[2]) + " " + months[Number(p[1]) - 1] + " " + p[0];
  }

  function formatUpdatedHi(iso) {
    if (!iso) return formatDateHi(MB.PRICE_DATE);
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return formatDateHi(MB.PRICE_DATE);
    return d.toLocaleDateString("hi-IN", {
      timeZone: "Asia/Kolkata",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  function shareUrl(text) {
    return "https://wa.me/?text=" + encodeURIComponent(text);
  }

  function sharePrice(crop, mandi, row) {
    const c = cropBySlug(crop);
    const m = mandiBySlug(mandi);
    const veg = c && c.veg;
    let line =
      nameHi(c) +
      " · " +
      nameHi(m) +
      " · " +
      rupee(row.modal) +
      "/qtl";
    if (veg) line += " (" + rupee(kgFromQtl(row.modal)) + "/kg)";
    line += " · " + MB.PRICE_DATE + " · " + MB.BRAND_EN;
    return shareUrl(line);
  }

  const BRAND_LOGO =
    '<img class="brand-mark" src="' + siteHref("img/logo.png") + '" width="42" height="42" alt="" />';

  const WA_ICON =
    '<svg class="wa-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.5 14.4c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.1-.8.9-1 1.1-.4.2-.7.1a7.6 7.6 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3 .9 1.6 3.1 2.7a13 13 0 0 0 3 1.3 4.4 4.4 0 0 0 2.7.1c.8-.2 1.7-1 2-1.9s.3-1.7.2-1.8-.2-.2-.5-.3zM12.1 21.2h-.1A9.2 9.2 0 0 1 7.3 20L3 21.2 4.2 17a9.2 9.2 0 1 1 7.9 4.2zm0-16.7A7.5 7.5 0 0 0 5.5 16l.2.4-1.2 4 4.1-1.1.4.2a7.5 7.5 0 1 0 3.1-14.2z"/></svg>';

  function shareBtn(href) {
    return (
      '<a class="share" target="_blank" rel="noopener" href="' +
      href +
      '">' +
      WA_ICON +
      "शेयर करें</a>"
    );
  }

  function joinGroupBtn(extraClass) {
    if (!MB.WA_GROUP) return "";
    const shortLabel = extraClass && extraClass.indexOf("wa-join-hero") !== -1;
    return (
      '<a class="wa-join' +
      (extraClass ? " " + extraClass : "") +
      '" target="_blank" rel="noopener" href="' +
      MB.WA_GROUP +
      '">' +
      WA_ICON +
      (shortLabel ? MB.WA_JOIN_SHORT || "मुफ्त मंडी भाव" : MB.WA_JOIN || "ग्रुप से जुड़ें") +
      "</a>"
    );
  }

  function renderFooter() {
    const foot = document.getElementById("foot");
    if (!foot) return;
    const states = (MB.states || [])
      .map(function (s) {
        return '<a href="' + stateHref(s.slug) + '">' + s.hi + "</a>";
      })
      .join(" · ");
    foot.innerHTML =
      joinGroupBtn("wa-join-foot") +
      '<nav class="foot-states">' +
      states +
      "</nav>" +
      '<nav class="foot-links" aria-label="ज़रूरी जानकारी">' +
      '<a href="' + siteHref("jaankari/source-method/") + '">स्रोत और तरीका</a>' +
      '<a href="' + siteHref("jaankari/about/") + '">हमारे बारे में</a>' +
      '<a href="' + siteHref("jaankari/suggestions/") + '">सुझाव और सुधार</a>' +
      '<a href="' + siteHref("jaankari/disclaimer/") + '">जरूरी सूचना</a>' +
      '<a href="' + siteHref("jaankari/privacy-policy/") + '">Privacy Policy</a>' +
      "</nav>" +
      '<p class="foot-note">' +
      "© " +
      new Date().getFullYear() +
      " FasalBhav. All Rights Reserved." +
      "</p>";
  }

  function param(name) {
    return new URLSearchParams(location.search).get(name);
  }
  function cropHref(slug, state) {
    let href = siteHref("fasal/" + slug + "-ka-bhav/");
    if (state) href += "?state=" + encodeURIComponent(state);
    return href;
  }
  function stateHref(slug) {
    return siteHref("rajya/" + slug + "-mandi-bhav/");
  }
  function mandiHref(slug, crop) {
    let href = siteHref("mandi/" + slug + "-mandi-bhav/");
    if (crop) href += "?crop=" + encodeURIComponent(crop);
    return href;
  }
  function pageCrop() {
    return document.body.getAttribute("data-crop") || param("crop") || "";
  }
  function pageStateSlug() {
    return document.body.getAttribute("data-state") || param("state") || "";
  }
  function pageMandi() {
    return document.body.getAttribute("data-mandi") || param("mandi") || "";
  }

  function norm(q) {
    return (q || "").trim().toLowerCase().replace(/\s+/g, " ");
  }

  function resolveQuery(q) {
    const n = norm(q);
    if (!n) return [];
    const hits = [];

    const alias = MB.aliases.find(([from]) => n === from || n.includes(from));
    const aliasTarget = alias ? alias[1] : null;

    MB.crops.forEach((c) => {
      if (
        n === c.slug ||
        norm(c.hi).includes(n) ||
        n.includes(norm(c.hi)) ||
        norm(c.en).includes(n) ||
        n.includes(norm(c.en)) ||
        c.slug === aliasTarget
      ) {
        hits.push({ type: "crop", item: c, href: cropHref(c.slug) });
      }
    });
    MB.states.forEach((s) => {
      if (
        n === s.slug ||
        n === s.short.toLowerCase() ||
        norm(s.hi).includes(n) ||
        n.includes(norm(s.hi)) ||
        norm(s.en).includes(n) ||
        s.slug === aliasTarget
      ) {
        hits.push({ type: "state", item: s, href: stateHref(s.slug) });
      }
    });
    MB.mandis.forEach((m) => {
      if (
        n === m.slug ||
        norm(m.hi).includes(n) ||
        n.includes(norm(m.hi)) ||
        norm(m.en).includes(n) ||
        n.includes(norm(m.en)) ||
        m.slug === aliasTarget
      ) {
        hits.push({ type: "mandi", item: m, href: mandiHref(m.slug) });
      }
    });

    const seen = new Set();
    return hits.filter((h) => {
      const k = h.type + h.item.slug;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    }).slice(0, 8);
  }

  function renderChrome() {
    const header = $("#site-header");
    if (!header) return;
    const ph = "फसल, मंडी या राज्य खोजें — जैसे: प्याज, उंझा, राजस्थान";
    const isHome = document.body.getAttribute("data-page") === "home";
    const chatHref = MB.WA_GROUP || "https://chat.whatsapp.com/";
    const nav =
      '<nav class="header-nav">' +
      '<a href="' + siteHref("blog/") + '">Blogs</a>' +
      '<a href="' + siteHref("#aaj-ke-bhav") + '">Crops</a>' +
      '<a href="' +
      chatHref +
      '" target="_blank" rel="noopener">Chat</a>' +
      "</nav>";
    header.innerHTML =
      '<div class="header-row">' +
      '<a class="brand" href="' + siteHref("") + '">' +
      BRAND_LOGO +
      '<span class="brand-text"><span class="brand-word">Fasal<span>Bhav</span></span><span class="brand-tag">आज का मंडी भाव</span></span></a>' +
      nav +
      "</div>" +
      (isHome
        ? ""
        : '<div class="search-wrap">' +
          '<div class="search-field">' +
          '<span class="search-icon-wrap" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.5-3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' +
          "</span>" +
          '<input id="q" type="search" autocomplete="off" placeholder="' +
          ph +
          '" />' +
          "</div>" +
          '<div class="suggest" id="suggest"></div></div>');

    if (MB.WA_GROUP && !document.querySelector(".wa-float")) {
      document.body.insertAdjacentHTML(
        "beforeend",
        '<a class="wa-float" href="' +
          MB.WA_GROUP +
          '" target="_blank" rel="noopener" aria-label="WhatsApp ग्रुप जॉइन करें" title="WhatsApp ग्रुप जॉइन करें">' +
          WA_ICON +
          "</a>"
      );
    }

    const input = $("#q", header);
    const box = $("#suggest", header);
    if (input && box) bindSearch(input, box, header);
  }

  function bindSearch(input, box, root) {
    input.addEventListener("input", () => {
      const hits = resolveQuery(input.value);
      if (!hits.length) {
        box.classList.remove("open");
        box.innerHTML = "";
        return;
      }
      const kind = { crop: "फसल", state: "राज्य", mandi: "मंडी" };
      box.innerHTML = hits
        .map(
          (h) =>
            '<a href="' +
            h.href +
            '">' +
            h.item.hi +
            " <span class=\"kind\">" +
            h.item.en +
            " · " +
            kind[h.type] +
            "</span></a>"
        )
        .join("");
      box.classList.add("open");
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        goSearch(input);
      }
    });
    document.addEventListener("click", (e) => {
      if (root && !root.contains(e.target)) box.classList.remove("open");
    });
  }

  function goSearch(input) {
    const hits = resolveQuery(input ? input.value : "");
    if (hits[0]) {
      location.href = hits[0].href;
      return;
    }
    if (document.body.getAttribute("data-page") === "home") {
      location.hash = "aaj-ke-bhav";
    }
  }

  function priceCell(crop, row) {
    const c = cropBySlug(crop);
    let html = rupee(row.modal);
    if (c && c.veg) html += '<span class="kg">' + rupee(kgFromQtl(row.modal)) + "/kg</span>";
    return html;
  }

  MB.ui = {
    nameHi,
    nameMix,
    rupee,
    kgFromQtl,
    vsClass,
    vsText,
    arrivalsText,
    cropBySlug,
    stateBySlug,
    mandiBySlug,
    median,
    isFreshPrice,
    freshFirst,
    formatDateHi,
    formatUpdatedHi,
    pricesFor,
    sharePrice,
    shareBtn,
    joinGroupBtn,
    siteHref,
    param,
    cropHref,
    stateHref,
    mandiHref,
    pageCrop,
    pageStateSlug,
    pageMandi,
    priceCell,
    bindSearch,
    goSearch,
    searchPlaceholder: function () {
      return "फसल, मंडी या राज्य खोजें — जैसे: प्याज, उंझा, राजस्थान";
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.lang = "hi";
    renderChrome();
    if (typeof MB.page === "function") MB.page();
    renderFooter();
  });
})();
