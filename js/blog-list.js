(function renderBlogLists() {
  if (!window.MB || !MB.ui) return;

  const u = MB.ui;
  Array.from(document.querySelectorAll("[data-state-navigation]")).forEach(function (host) {
    host.innerHTML = u.stateNavigationSection("");
  });

  const hosts = Array.from(document.querySelectorAll("[data-blog-list]"));
  if (!hosts.length || !Array.isArray(MB.blogs)) return;
  const pathMatch = window.location.pathname.match(/\/blog\/([^/]+)\/?$/);
  const currentSlug = pathMatch ? pathMatch[1] : "";
  const currentBlog = MB.blogs.find(function (blog) { return blog.slug === currentSlug; });
  const orderedBlogs = MB.blogs
    .filter(function (blog) { return blog.slug !== currentSlug; })
    .map(function (blog, index) { return { blog: blog, index: index }; })
    .sort(function (left, right) {
      const leftRelated = currentBlog && left.blog.category === currentBlog.category ? 1 : 0;
      const rightRelated = currentBlog && right.blog.category === currentBlog.category ? 1 : 0;
      return rightRelated - leftRelated || left.index - right.index;
    })
    .map(function (item) { return item.blog; });

  const cards = orderedBlogs
    .map(function (blog) {
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

  if (!cards) return;

  hosts.forEach(function (host, index) {
    const railId = "blog-page-rail-" + index;
    const arrowsId = "blog-page-arrows-" + index;
    host.innerHTML =
      '<div class="home-blog-heading"><div><span>खेती की काम की जानकारी</span><h2>किसान गाइड्स</h2></div>' +
      '<div class="home-blog-actions"><div class="home-blog-arrows" id="' + arrowsId + '">' +
      '<button type="button" data-blog-direction="-1" aria-label="पिछले लेख देखें">←</button>' +
      '<button type="button" data-blog-direction="1" aria-label="अगले लेख देखें">→</button></div>' +
      '<a href="' + u.siteHref("blog/") + '">सभी लेख देखें</a></div></div>' +
      '<div class="home-blog-rail" id="' + railId + '" tabindex="0" aria-label="किसान गाइड्स; बाएँ से दाएँ स्क्रॉल करें">' +
      cards + "</div>";

    const rail = document.getElementById(railId);
    const arrows = document.getElementById(arrowsId);
    if (!rail || !arrows) return;

    const buttons = Array.from(arrows.querySelectorAll("button"));
    const updateArrows = function () {
      const overflow = rail.scrollWidth > rail.clientWidth + 2;
      arrows.hidden = !overflow;
      if (!overflow) return;
      buttons[0].disabled = rail.scrollLeft <= 2;
      buttons[1].disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2;
    };

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const card = rail.querySelector(".home-blog-card");
        const step = card ? card.getBoundingClientRect().width + 16 : rail.clientWidth * 0.85;
        rail.scrollBy({
          left: Number(button.dataset.blogDirection) * step,
          behavior: "smooth",
        });
      });
    });

    rail.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    requestAnimationFrame(updateArrows);
  });
})();
