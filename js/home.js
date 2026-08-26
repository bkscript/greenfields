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
  narma: "img/crops/kapas.webp",
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
};
  const cropGroups = [
    ["gehun", "bajra", "makka", "dhan", "rice", "jau", "jowar"],
    ["chana", "moong", "moth", "arhar", "urad", "masoor", "matar", "gwar"],
    ["sarson", "narma", "kapas", "moongphali", "soyabean", "til", "arandi", "alsi"],
    ["jeera", "dhaniya", "saunf", "sua", "methi", "hari-methi", "isabgol", "haldi", "mirch"],
    ["pyaz", "aalu", "tamatar", "lahsun", "adrak", "hari-mirch", "hara-dhaniya", "sua-patti", "hara-matar", "amrood", "kela", "seb", "anar"],
  ];
  const famous = ["unjha", "indore", "mandsaur", "sri-ganganagar", "kota", "gondal", "sirsa", "shahabad"];

  const fieldCrops = cropGroups.slice(0, -1).reduce((all, group) => all.concat(group), []);
  const produceCrops = cropGroups[cropGroups.length - 1];
  function tilesFor(slugs, kgOnly) {
    return slugs
      .slice()
      .sort((a, b) => {
        const aFresh = u.pricesFor({ crop: a }).some(u.isFreshPrice);
        const bFresh = u.pricesFor({ crop: b }).some(u.isFreshPrice);
        return Number(bFresh) - Number(aFresh);
      })
      .map((slug) => {
      const c = u.cropBySlug(slug);
      const rows = u.pricesFor({ crop: slug }).filter(u.isFreshPrice);
      const med = u.median(rows.map((r) => r.modal));
      if (!c || med == null) return "";
      let price = u.rupee(med) + "/qtl";
      if (kgOnly && c.veg) price = '<span class="kg-inline">' + u.rupee(u.kgFromQtl(med)) + "/kg</span>";
      else if (c.veg) price += ' · <span class="kg-inline">' + u.rupee(u.kgFromQtl(med)) + "/kg</span>";
      const image = cropImages[slug]
        ? '<span class="crop-image"><img src="' + cropImages[slug] + '" alt="' + c.hi + ' की फसल" width="42" height="42" loading="lazy" decoding="async" /></span>'
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
  const produceTiles = tilesFor(produceCrops, true);
  const produceSection = !produceTiles
    ? ""
    : '<div class="produce-break"><span>सब्जियां और फल</span><small>Vegetables &amp; fruits</small></div>' +
      '<div class="grid-crops landing-crops produce-crops">' + produceTiles + "</div>";

  const bullionData = MB.BULLION || {};
  const bullionRates = bullionData.rates || [];
  const goldRate = bullionRates.find((rate) => rate.slug === "gold-999");
  const silverRate = bullionRates.find((rate) => rate.slug === "silver-999");
  const bullionPromo = goldRate && silverRate
    ? '<section class="land-block bullion-home-block"><a class="bullion-home-card" href="' +
      u.siteHref("sona-chandi-ka-bhav/") +
      '"><div class="bullion-home-copy"><h2>1 तोला सोना-चांदी का भाव</h2><small>Gold 999 · Silver 999</small></div><div class="bullion-home-mark" aria-hidden="true"><span class="bullion-gold-mark">Au</span><span class="bullion-silver-mark">Ag</span></div><strong class="bullion-home-link">आज का भाव देखें <b>→</b></strong></a></section>'
    : "";

  const mandiCards = famous
    .map((slug) => {
      const m = u.mandiBySlug(slug);
      const st = u.stateBySlug(m.state);
      const rows = u.pricesFor({ mandi: slug }).filter(u.isFreshPrice);
      const top = rows.slice().sort((a, b) => b.modal - a.modal)[0];
      if (!top) return "";
      const crop = top ? u.cropBySlug(top.crop) : null;
      return (
        '<a class="mandi-tile" href="' +
        u.mandiHref(slug) +
        '"><span class="mandi-tile-top"><span class="mandi-state"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>' +
        u.nameHi(st) +
        '</span><span class="mandi-arrow" aria-hidden="true">→</span></span><strong>' +
        u.nameHi(m) +
        '</strong><span class="mandi-tile-price">' +
        (crop
          ? '<small>' + crop.hi + ' · मॉडल भाव</small><b>' + u.rupee(top.modal) + "/qtl</b>"
          : "—") +
        "</span></a>"
      );
    })
    .filter(Boolean)
    .join("");

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
  MB.prices.forEach((r) => {
    if (!r.vs) return;
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
        "<h2>आज के बड़े बदलाव<span class='en'>Biggest moves today</span></h2>" +
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
    "<h1>ताज़ा भाव, सीधे मंडी से</h1>" +
    "</div>" +
    '<div class="hero-tools">' +
    '<div class="hero-search-panel">' +
    '<div class="hero-search search-wrap" id="hero-search">' +
    '<div class="search-field">' +
    '<span class="search-icon-wrap" aria-hidden="true">' +
    '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.5-3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' +
    "</span>" +
    '<input id="q" type="search" autocomplete="off" placeholder="' +
    u.searchPlaceholder() +
    '" />' +
    "</div>" +
    '<div class="suggest" id="suggest"></div></div>' +
    '<div class="hero-ctas">' +
    '<button type="button" class="btn-primary" id="hero-go">आज के भाव देखें</button>' +
    u.joinGroupBtn("wa-join-hero") +
    "</div>" +
    "</div>" +
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
    u.formatUpdatedHi(MB.LAST_UPDATED_DATE).replace(/\s+\d{4}$/, "") +
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
    "</section>" +
    bullionPromo +
    '<section class="land-block pad" id="mandiyan">' +
    "<h2>प्रसिद्ध मंडियाँ</h2>" +
    '<div class="mandi-grid">' + mandiCards + "</div></section>";

  const hs = document.getElementById("hero-search");
  if (hs) u.bindSearch(hs.querySelector("#q"), hs.querySelector("#suggest"), hs);
  const go = document.getElementById("hero-go");
  if (go) {
    go.addEventListener("click", () => u.goSearch(document.getElementById("q")));
  }
};
