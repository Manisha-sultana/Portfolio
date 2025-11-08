// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav links
navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.textContent.trim().toLowerCase();

    pages.forEach((page) => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    navigationLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");

    window.scrollTo(0, 0);
  });
});
