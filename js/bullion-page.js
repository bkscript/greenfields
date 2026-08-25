(function () {
  const data = MB.BULLION;
  const grid = document.getElementById("bullion-rates");
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
