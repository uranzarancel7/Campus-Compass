/* ==========================================================================
   navigation.js - PAGE SWITCHING AND MOBILE MENU
   --------------------------------------------------------------------------
   The site is a single HTML file with five sections ("views"). Clicking a
   navigation link hides every section except the one you chose.

   It also keeps the URL hash up to date (#home, #announcements, #directory,
   #map, #faq) so refreshing the page or sharing a link works correctly.
   ========================================================================== */

function initNavigation() {
  var navLinks = document.querySelectorAll("[data-view]");
  var views = document.querySelectorAll(".view");
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("sidebar-overlay");
  var menuToggle = document.getElementById("menu-toggle");

  /* Hide every view, then show only the requested one. */
  function showView(viewName) {
    var found = false;

    views.forEach(function (view) {
      var isMatch = view.id === viewName + "-view";
      view.classList.toggle("is-active", isMatch);
      view.hidden = !isMatch;

      if (isMatch) {
        found = true;
      }
    });

    /* If the hash does not match a known view, fall back to the home page. */
    if (!found) {
      showView("home");
      return;
    }

    /* Update which sidebar link is highlighted. */
    navLinks.forEach(function (link) {
      var isActive = link.classList.contains("nav-link") &&
                     link.getAttribute("data-view") === viewName;
      link.classList.toggle("is-active", isActive);
    });

    closeMobileMenu();

    /* Start each new page at the top of the content area. */
    window.scrollTo(0, 0);
  }

  /* Turn the sidebar into a slide-in menu on small screens. */
  function openMobileMenu() {
    sidebar.classList.add("is-open");
    overlay.classList.add("is-visible");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  /* Every element with data-view acts as a page link (sidebar, hero buttons,
     quick links, "see all" links). */
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetView = link.getAttribute("data-view");
      window.location.hash = targetView;
      showView(targetView);
    });
  });

  /* Support the browser back / forward buttons. */
  window.addEventListener("hashchange", function () {
    var viewName = window.location.hash.replace("#", "");
    showView(viewName || "home");
  });

  /* Mobile menu controls. */
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      if (sidebar.classList.contains("is-open")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener("click", closeMobileMenu);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      closeMobileMenu();
    }
  });

  /* Show the page named in the URL when the site first loads. */
  var startingView = window.location.hash.replace("#", "") || "home";
  showView(startingView);
}
