(function () {
  const data = MB.BULLION;
  const grid = document.getElementById("bullion-rates");
  const tolaGrid = document.getElementById("tola-rates");
  const dateNode = document.getElementById("bullion-date");
  const sourceLinks = document.querySelectorAll("[data-bullion-source]");
  if (!data || !grid || !Array.isArray(data.rates)) return;

  const rupee = (value) => "₹" + Number(value).toLocaleString("en-IN");
  const date = new Date(data.date + "T00:00:00+05:30");
  const dateLabel = Number.isNaN(date.getTime())
    ? data.date
    : date.toLocaleDateString("hi-IN", { day: "numeric", month: "long", year: "numeric" });

  if (dateNode) dateNode.textContent = dateLabel;
  sourceLinks.forEach((link) => { link.href = data.sourceUrl; });

  const tolaGrams = 11.664;
  const gold999 = data.rates.find((rate) => rate.slug === "gold-999");
  const silver999 = data.rates.find((rate) => rate.slug === "silver-999");
  if (tolaGrid && gold999 && silver999) {
    const tolaRates = [
      { name: "1 तोला 24 कैरेट सोना", purity: "Gold 999 · 11.664 ग्राम", symbol: "Au", price: gold999.value * (tolaGrams / 10), metal: "gold" },
      { name: "1 तोला शुद्ध चांदी", purity: "Silver 999 · 11.664 ग्राम", symbol: "Ag", price: silver999.value * (tolaGrams / 1000), metal: "silver" },
    ];
    tolaGrid.innerHTML = tolaRates.map((rate) => (
      '<article class="tola-card is-' + rate.metal + '"><span class="tola-symbol">' + rate.symbol + '</span><div><p>' +
        rate.name + '</p><b>' + rupee(Math.round(rate.price)) + '</b><small>' + rate.purity + '</small></div></article>'
    )).join("");
  }

  grid.innerHTML = data.rates.map((rate) => (
    '<article class="metal-card ' + (rate.metal === "silver" ? "is-silver" : "is-gold") + '">' +
      '<div class="metal-card-top"><span class="metal-symbol">' + (rate.metal === "silver" ? "Ag" : "Au") + '</span>' +
      '<span class="metal-purity">' + rate.purity + '</span></div>' +
      '<h2>' + rate.name + '</h2>' +
      '<p class="metal-rate">' + rupee(rate.value) + '</p>' +
      '<p class="metal-unit">' + rate.unit + '</p>' +
    '</article>'
  )).join("");
})();
