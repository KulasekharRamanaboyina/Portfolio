// scroll button
  const btn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

