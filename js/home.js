MB.page = function homePage() {
  const u = MB.ui;
  const cropImages = {
    gehun: "img/crops/gehun.webp",
  sarson: "img/crops/sarson.webp",
  til: "img/crops/til.webp",
  jeera: "img/crops/jeera.webp",
  dhaniya: "img/crops/dhaniya.webp",
  saunf: "img/crops/saunf.webp",
  sua: "img/crops/sua.webp",
  "sua-patti": "img/crops/sua-patti.webp",
  methi: "img/crops/methi.webp",
  "hari-methi": "img/crops/hari-methi.webp",
  isabgol: "img/crops/isabgol.webp",
  haldi: "img/crops/haldi.webp",
  mirch: "img/crops/mirch.webp",
  arandi: "img/crops/arandi.webp",
  alsi: "img/crops/alsi.webp",
  kapas: "img/crops/kapas.webp",
  chana: "img/crops/chana.webp",
    bajra: "img/crops/bajra.webp",
    makka: "img/crops/makka.webp",
    dhan: "img/crops/dhan.webp",
    rice: "img/crops/rice.webp",
    jau: "img/crops/jau.webp",
    jowar: "img/crops/jowar.webp",
    moong: "img/crops/moong.webp",
    moth: "img/crops/moth.webp",
    arhar: "img/crops/arhar.webp",
    urad: "img/crops/urad.webp",
  masoor: "img/crops/masoor.webp",
  matar: "img/crops/matar.webp",
  gwar: "img/crops/gwar.webp",
  moongphali: "img/crops/moongphali.webp",
  soyabean: "img/crops/soyabean.webp",
  "hara-matar": "img/crops/hara-matar.webp",
  gwarphali: "img/crops/gwarphali.webp",
  pyaz: "img/crops/pyaz.webp",
  aalu: "img/crops/aalu.webp",
  tamatar: "img/crops/tamatar.webp",
  lahsun: "img/crops/lahsun.webp",
  adrak: "img/crops/adrak.webp",
  "hari-mirch": "img/crops/hari-mirch.webp",
  "hara-dhaniya": "img/crops/hara-dhaniya.webp",
  amrood: "img/crops/amrood.webp",
  kela: "img/crops/kela.webp",
  seb: "img/crops/seb.webp",
  anar: "img/crops/anar.webp",
  ker: "img/crops/ker.webp",
  sangri: "img/crops/sangri.webp",
  asaliya: "img/crops/asaliya.webp",
  kalonji: "img/crops/kalonji.webp",
};
  const rajasthaniCrops = ["ker", "sangri", "sua-patti"];
  const lastUpdateDate = MB.LAST_UPDATED_DATE || MB.PRICE_DATE;
  const fieldCrops = MB.crops
    .filter((crop) => !crop.veg && !rajasthaniCrops.includes(crop.slug))
    .map((crop) => crop.slug);
  const produceCrops = MB.crops
    .filter((crop) => crop.veg && !rajasthaniCrops.includes(crop.slug))
    .map((crop) => crop.slug);
  function tilesFor(slugs, kgOnly) {
    return slugs
      .slice()
      .sort((a, b) => {
        const rateFor = (slug) => {
          const c = u.cropBySlug(slug);
          if (c && c.cityRate && (MB.CITY_RATES || {})[slug]) return true;
          return u.pricesFor({ crop: slug }).some(u.isFreshPrice);
        };
        return Number(rateFor(b)) - Number(rateFor(a));
      })
      .map((slug) => {
      const c = u.cropBySlug(slug);
      // Ker and sangri publish a city/wholesale rate per kilo instead of a
      // mandi record, so they are read from MB.CITY_RATES.
      const cityRate = c && c.cityRate ? (MB.CITY_RATES || {})[slug] : null;
      const rows = cityRate ? [] : u.pricesFor({ crop: slug }).filter(u.isFreshPrice);
      const med = cityRate ? Number(cityRate.modal) : u.median(rows.map((r) => r.modal));
      if (!c) return "";
      let price = med == null ? "भाव देखें" : u.rupee(med) + "/qtl";
      if (med != null && cityRate) price = '<span class="kg-inline">' + u.rupee(med) + "/kg</span>";
      else if (med != null && kgOnly && c.veg) price = '<span class="kg-inline">' + u.rupee(u.kgFromQtl(med)) + "/kg</span>";
      else if (med != null && c.veg) price += ' · <span class="kg-inline">' + u.rupee(u.kgFromQtl(med)) + '/kg</span>';
      const imageAlt = c.cityRate ? "सूखी " + c.hi + " की उपज" : c.hi + " की फसल";
      const image = cropImages[slug]
        ? '<span class="crop-image"><img src="' + cropImages[slug] + '" alt="' + imageAlt + '" width="42" height="42" loading="lazy" decoding="async" /></span>'
        : "";
      return (
        '<a class="crop-tile" href="' +
        u.cropHref(slug) +
        '">' + image + '<span class="crop-copy"><strong>' +
        c.hi +
        "</strong><em>" +
        price +
        "</em></span></a>"
      );
      })
      .filter(Boolean)
      .join("");
  }
  const fieldTiles = tilesFor(fieldCrops, false);
  const rajasthaniTiles = tilesFor(rajasthaniCrops, false);
  const produceTiles = tilesFor(produceCrops, true);
  const rajasthaniSection =
    '<div class="produce-break"><span>मरुधरा की खास उपज</span><small>Rajasthani special produce</small></div>' +
    '<div class="grid-crops landing-crops rajasthani-crops">' + rajasthaniTiles + "</div>";
  const produceSection = !produceTiles
    ? ""
    : '<div class="produce-break"><span>सब्जियां और फल</span><small>Vegetables &amp; fruits</small></div>' +
      '<div class="grid-crops landing-crops produce-crops">' + produceTiles + "</div>";

  const stateCards = MB.states
    .map((state) => {
      const mandis = MB.mandis.filter((mandi) => mandi.state === state.slug);
      const mandiSlugs = new Set(mandis.map((mandi) => mandi.slug));
      const rows = MB.prices.filter((price) => mandiSlugs.has(price.mandi) && u.isFreshPrice(price));
      const cropCount = new Set(rows.map((price) => price.crop)).size;
      if (!mandis.length) return "";
      return (
        '<a class="state-tile" href="' +
        u.stateHref(state.slug) +
        '"><span class="state-code">' +
        state.short +
        '</span><span class="state-copy"><strong>' +
        state.hi +
        '</strong><small>' +
        mandis.length +
        " मंडियाँ · " +
        cropCount +
        ' फसलें</small></span><span class="state-arrow" aria-hidden="true">→</span></a>'
      );
    })
    .filter(Boolean)
    .join("");
  const stateSection = !stateCards
    ? ""
    : '<section class="land-block pad state-home-block" id="rajya"><h2>राज्य के अनुसार मंडी भाव</h2><p class="section-intro">अपने राज्य की मंडियाँ और आज के फसल भाव देखें।</p><div class="state-grid">' +
      stateCards +
      "</div></section>";

  const blogCards = (MB.blogs || [])
    .map((blog) => {
      const href = u.siteHref("blog/" + blog.slug + "/");
      return (
        '<article class="home-blog-card"><a href="' + href + '">' +
        '<span class="home-blog-media"><img src="' + u.siteHref(blog.image) + '" alt="' +
        u.escapeHtml(blog.alt) + '" width="1200" height="630" loading="lazy" decoding="async" /></span>' +
        '<span class="home-blog-copy"><small>' + u.escapeHtml(blog.category) + '</small><strong>' +
        u.escapeHtml(blog.title) + '</strong><span>' + u.escapeHtml(blog.excerpt) +
        '</span><b>पूरी जानकारी पढ़ें <i aria-hidden="true">→</i></b></span></a></article>'
      );
    })
    .join("");
  const blogSection = !blogCards
    ? ""
    : '<section class="land-block home-blog-section" aria-labelledby="home-blog-title">' +
      '<div class="home-blog-heading"><div><span>खेती की काम की जानकारी</span><h2 id="home-blog-title">किसान गाइड्स</h2></div>' +
      '<div class="home-blog-actions"><div class="home-blog-arrows" id="home-blog-arrows">' +
      '<button type="button" data-blog-direction="-1" aria-label="पिछले लेख देखें">←</button>' +
      '<button type="button" data-blog-direction="1" aria-label="अगले लेख देखें">→</button></div>' +
      '<a href="' + u.siteHref("blog/") + '">सभी लेख देखें</a></div></div>' +
      '<div class="home-blog-rail" id="home-blog-rail" tabindex="0" aria-label="किसान गाइड्स; बाएँ से दाएँ स्क्रॉल करें">' +
      blogCards + "</div></section>";

  const bullionData = MB.BULLION || {};
  const bullionRates = bullionData.rates || [];
  const goldRate = bullionRates.find((rate) => rate.slug === "gold-999");
  const silverRate = bullionRates.find((rate) => rate.slug === "silver-999");
  const bullionPromo = goldRate && silverRate
    ? '<section class="land-block bullion-home-block"><a class="bullion-home-card" href="' +
      u.siteHref("sona-chandi-ka-bhav/") +
      '"><div class="bullion-home-copy"><h2>1 तोला सोना-चांदी का भाव</h2><small>Gold 999 · Silver 999</small></div><div class="bullion-home-mark" aria-hidden="true"><span class="bullion-gold-mark">Au</span><span class="bullion-silver-mark">Ag</span></div><strong class="bullion-home-link">आज का भाव देखें <b>→</b></strong></a></section>'
    : "";

  const tapeBits = (MB.TAPE || [])
    .map(function (t) {
      const crop = u.cropBySlug(t.crop);
      const mandi = u.mandiBySlug(t.mandi);
      const state = mandi ? u.stateBySlug(mandi.state) : null;
      const row = MB.prices.find(function (price) {
        return price.crop === t.crop && price.mandi === t.mandi;
      });
      if (!crop || !mandi || !row || !u.isFreshPrice(row)) return "";
      return (
        '<span class="tape-item">' +
        crop.hi +
        " <b>" +
        u.rupee(row.modal) +
        "</b><i>(" +
        mandi.hi +
        (state ? ", " + state.short : "") +
        ")</i></span>"
      );
    })
    .filter(Boolean)
    .join('<span class="tape-dot">•</span>');
  const tapeRun = tapeBits
    ? [tapeBits, tapeBits, tapeBits].join('<span class="tape-dot">•</span>')
    : "";
  const tapeHtml = !tapeRun
    ? ""
    : '<a class="price-tape" href="#aaj-ke-bhav"><div class="price-tape-track"><div class="price-tape-run">' +
      tapeRun +
      '</div><div class="price-tape-run" aria-hidden="true">' +
      tapeRun +
      "</div></div></a>";

  const byCropMove = {};
  const moveDate = MB.PRICE_DATE;
  MB.prices.forEach((r) => {
    // "आज के बड़े बदलाव" only means the current published update, never an older record.
    if (!r.vs || r.date !== moveDate) return;
    const prev = byCropMove[r.crop];
    if (!prev || Math.abs(r.vs) > Math.abs(prev.vs)) byCropMove[r.crop] = r;
  });
  const moveList = Object.keys(byCropMove).map((crop) => ({
    crop: u.cropBySlug(crop),
    row: byCropMove[crop],
    mandi: u.mandiBySlug(byCropMove[crop].mandi),
  }));
  const moversUp = moveList
    .filter((x) => x.crop && x.row.vs > 0)
    .sort((a, b) => b.row.vs - a.row.vs)
    .slice(0, 4);
  const moversDown = moveList
    .filter((x) => x.crop && x.row.vs < 0)
    .sort((a, b) => a.row.vs - b.row.vs)
    .slice(0, 4);
  function moverCard(x) {
    const mandiName = x.mandi ? u.nameHi(x.mandi) : "";
    const isUp = x.row.vs > 0;
    const trendIcon = isUp
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 15 5-5 3 3 6-7"/><path d="M15 6h4v4"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 9 5 5 3-3 6 7"/><path d="M15 18h4v-4"/></svg>';
    return (
      '<a class="mover mover-' + (isUp ? "up" : "down") + '" href="' +
      u.cropHref(x.crop.slug) +
      '"><span class="mover-icon">' + trendIcon + '</span><span class="mover-txt"><strong>' +
      x.crop.hi +
      "</strong><em>" +
      (mandiName ? " · " + mandiName : "") +
      '</em></span><span class="' +
      u.vsClass(x.row.vs) +
      '">' +
      u.vsText(x.row.vs) +
      "/qtl</span></a>"
    );
  }
  const moversHtml =
    !moversUp.length && !moversDown.length
      ? ""
      : '<section class="land-block" id="bade-badlav">' +
        "<h2>आज के बड़े बदलाव</h2>" +
        '<div class="movers">' +
        (moversUp.length
          ? '<div class="mover-group mover-group-up"><p class="mover-group-title"><span>↗</span> तेजी वाली फसलें</p>' + moversUp.map(moverCard).join("") +
            "</div>"
          : "") +
        (moversDown.length
          ? '<div class="mover-group mover-group-down"><p class="mover-group-title"><span>↘</span> गिरावट वाली फसलें</p>' + moversDown.map(moverCard).join("") +
            "</div>"
          : "") +
        "</div></section>";

  document.getElementById("main").innerHTML =
    '<section class="hero">' +
    '<div class="hero-layout">' +
    '<div class="hero-intro"><span class="hero-accent" aria-hidden="true"></span>' +
    "<h1>आज के मंडी भाव</h1>" +
    '<p class="hero-summary">आज के फसल मंडी भाव देखें। गेहूं, सरसों, चना, सोयाबीन, कपास, धान, प्याज, आलू व अन्य फसलों के मंडी-वार लाइव रेट और मॉडल भाव जानने के लिए नीचे फसल चुनें।</p>' +
    "</div>" +
    '<div class="hero-ctas">' +
    '<button type="button" class="btn-primary" id="hero-go">आज के मंडी भाव देखें</button>' +
    u.joinGroupBtn("wa-join-hero") +
    "</div>" +
    "</div>" +
    "</section>" +
    '<div class="big-stats">' +
    "<div><b>" +
    MB.mandis.length +
    "+</b><span>Mandis tracked</span></div>" +
    "<div><b>" +
    MB.crops.length +
    "+</b><span>Crops</span></div>" +
    "<div><b>" +
    u.formatUpdatedHi(lastUpdateDate).replace(/\s+\d{4}$/, "") +
    "</b><small class=\"stat-update\">Last update</small></div>" +
    "</div>" +
    tapeHtml +
    moversHtml +
    '<section class="land-block pad" id="aaj-ke-bhav">' +
    "<h2 class='all-crops-heading'>सभी फसलों के भाव</h2>" +
    '<div class="grid-crops landing-crops">' +
    fieldTiles +
    "</div>" +
    produceSection +
    rajasthaniSection +
    "</section>" +
    bullionPromo +
    stateSection +
    blogSection;

  const go = document.getElementById("hero-go");
  if (go) go.addEventListener("click", () => u.goSearch());

  const blogRail = document.getElementById("home-blog-rail");
  const blogArrows = document.getElementById("home-blog-arrows");
  if (blogRail && blogArrows) {
    const arrowButtons = Array.from(blogArrows.querySelectorAll("button"));
    const updateBlogArrows = () => {
      const overflow = blogRail.scrollWidth > blogRail.clientWidth + 2;
      blogArrows.hidden = !overflow;
      if (!overflow) return;
      arrowButtons[0].disabled = blogRail.scrollLeft <= 2;
      arrowButtons[1].disabled = blogRail.scrollLeft + blogRail.clientWidth >= blogRail.scrollWidth - 2;
    };
    arrowButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const card = blogRail.querySelector(".home-blog-card");
        const gap = 16;
        const step = card ? card.getBoundingClientRect().width + gap : blogRail.clientWidth * 0.85;
        blogRail.scrollBy({
          left: Number(button.dataset.blogDirection) * step,
          behavior: "smooth",
        });
      });
    });
    blogRail.addEventListener("scroll", updateBlogArrows, { passive: true });
    window.addEventListener("resize", updateBlogArrows);
    requestAnimationFrame(updateBlogArrows);
  }
};
