/*
  फाइल: js/home.js — होम पेज की सारी लिखावट
  यहाँ बदलें: बड़ी हेडिंग, नीचे की लाइन, बड़े बदलाव, आज के भाव।
  cropGroups = होम पर सभी फसलें किस क्रम में और किन समूहों में दिखें (छोटे नाम data.js से लें)।
  समूहों के नाम या अलग line स्क्रीन पर नहीं दिखती; सभी cards एक ही लगातार grid में रहते हैं।
  famous = नीचे कौन सी मंडियां दिखें।
  चलती पट्टी की फसल/भाव/मंडी js/data.js में MB.TAPE।
  रंग css/site.css में। भाव के आंकड़े data.js में — यहाँ मत लिखें।
*/
MB.page = function homePage() {
  const u = MB.ui;
  const cropGroups = [
    ["gehun", "bajra", "makka", "dhan", "rice", "jau", "jowar"],
    ["chana", "moong", "moth", "arhar", "urad", "masoor", "matar", "gwar"],
    ["sarson", "narma", "kapas", "moongphali", "soyabean", "til", "arandi", "alsi"],
    ["jeera", "dhaniya", "saunf", "methi", "isabgol", "haldi", "mirch"],
    ["pyaz", "aalu", "tamatar", "lahsun", "adrak", "hari-mirch", "hara-dhaniya", "hari-methi", "hara-matar", "amrood", "kela", "seb", "anar"],
  ];
  // सूची राज्य के क्रम में नहीं, देश/क्षेत्र में मंडी की पहचान के क्रम में है।
  const famous = ["unjha", "indore", "mandsaur", "sri-ganganagar", "nagaur", "gondal", "sirsa", "shahabad"];

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
      return (
        '<a class="crop-tile" href="' +
        u.cropHref(slug) +
        '"><strong>' +
        c.hi +
        '<span class="crop-en">' +
        c.en +
        "</span></strong><em>" +
        price +
        "</em></a>"
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

  const mandiRows = famous
    .map((slug) => {
      const m = u.mandiBySlug(slug);
      const st = u.stateBySlug(m.state);
      const rows = u.pricesFor({ mandi: slug }).filter(u.isFreshPrice);
      const top = rows.slice().sort((a, b) => b.modal - a.modal)[0];
      if (!top) return "";
      const crop = top ? u.cropBySlug(top.crop) : null;
      return (
        "<tr><td><a href=\"" +
        u.mandiHref(slug) +
        '">' +
        u.nameHi(m) +
        "</a></td><td>" +
        u.nameHi(st) +
        "</td><td>" +
        (crop ? crop.hi + " " + u.rupee(top.modal) : "—") +
        "</td></tr>"
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
  const tapeHtml = !tapeBits
    ? ""
    : '<a class="price-tape" href="#aaj-ke-bhav"><div class="price-tape-track"><div class="price-tape-run">' +
      tapeBits +
      '</div><div class="price-tape-run" aria-hidden="true">' +
      tapeBits +
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
    return (
      '<a class="mover" href="' +
      u.cropHref(x.crop.slug) +
      '"><span class="mover-txt"><strong>' +
      x.crop.hi +
      "</strong><em>" +
      x.crop.en +
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
          ? '<div>' + moversUp.map(moverCard).join("") +
            "</div>"
          : "") +
        (moversDown.length
          ? '<div>' + moversDown.map(moverCard).join("") +
            "</div>"
          : "") +
        "</div></section>";

  const stateEyebrow = MB.states
    .map(function (s) {
      return '<a href="' + u.stateHref(s.slug) + '">' + s.hi + "</a>";
    })
    .join(" · ");

  document.getElementById("main").innerHTML =
    '<section class="hero">' +
    '<p class="eyebrow">' +
    stateEyebrow +
    "</p>" +
    "<h1>ताज़ा भाव, सीधे मंडी से</h1>" +
    '<p class="hero-source"><a href="' + u.siteHref("jaankari/source-method/") + '">Powered by Agmarknet</a></p>' +
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
    '<button type="button" class="btn-primary" id="hero-go">मंडी भाव देखें</button>' +
    u.joinGroupBtn("wa-join-hero") +
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
    '<a class="ticker" href="#aaj-ke-bhav">फसल के आधार पर भाव →</a>' +
    tapeHtml +
    moversHtml +
    '<section class="land-block pad" id="aaj-ke-bhav">' +
    "<h2>एक फसल, सारी मंडियों का भाव<span class='en'>Today's prices</span></h2>" +
    '<div class="grid-crops landing-crops">' +
    fieldTiles +
    "</div>" +
    produceSection +
    "</section>" +
    '<section class="land-block pad" id="mandiyan">' +
    "<h2>आपकी जानी-पहचानी मंडियां<span class='en'>Popular mandis</span></h2>" +
    '<div class="card" style="margin:0"><table><thead><tr><th>मंडी</th><th>राज्य</th><th>आज</th></tr></thead><tbody>' +
    mandiRows +
    "</tbody></table></div></section>";

  const hs = document.getElementById("hero-search");
  if (hs) u.bindSearch(hs.querySelector("#q"), hs.querySelector("#suggest"), hs);
  const go = document.getElementById("hero-go");
  if (go) {
    go.addEventListener("click", () => u.goSearch(document.getElementById("q")));
  }
};
