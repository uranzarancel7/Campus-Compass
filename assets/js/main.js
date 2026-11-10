/* ==========================================================================
   main.js - STARTS THE WEBSITE
   --------------------------------------------------------------------------
   This is the file to look at first. When the page finishes loading, it calls
   the setup function for each part of the site, in a sensible order.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  /* Page switching and the mobile menu */
  initNavigation();

  /* Announcements and events (home page + announcements page) */
  initAnnouncements();

  /* Campus Directory search */
  initCampusDirectory();

  /* Campus Map floor buttons */
  initCampusMap();

  /* Frequently asked questions */
  initFaqs();

  /* Put the current year in the footer */
  var yearElement = document.getElementById("footer-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
