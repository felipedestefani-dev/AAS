function setText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.textContent = text;
}

function initYear() {
  setText("[data-year]", String(new Date().getFullYear()));
}

function initHeaderElevation() {
  const header = document.querySelector("[data-elevate]");
  if (!header) return;

  const onScroll = () => {
    header.setAttribute("data-elevated", window.scrollY > 4 ? "true" : "false");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!toggle || !nav) return;

  const close = () => {
    nav.removeAttribute("data-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const open = () => {
    nav.setAttribute("data-open", "true");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.getAttribute("data-open") === "true";
    if (isOpen) close();
    else open();
  });

  nav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    close();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

initYear();
initHeaderElevation();
initMobileNav();

