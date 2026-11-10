/* ==========================================================================
   campus-map.js - SIMPLE FLOOR-PLAN IMAGE VIEWER
   --------------------------------------------------------------------------
   Clicking a floor button swaps the picture shown in the viewer.
   There is no GPS, no pathfinding, and no connection to the Campus Directory.

   The image file names follow one pattern:
       assets/images/campus-map/floor-1-placeholder.png
       assets/images/campus-map/floor-2-placeholder.png
       ... and so on up to floor 6.

   To use a real floor plan later, either replace the placeholder file with
   the real image (keep the same file name), or change the file names in the
   floorButtons list near the bottom of this file.
   ========================================================================== */

function initCampusMap() {
  var floorButtons = document.querySelectorAll(".floor-button");
  var floorImage = document.getElementById("floor-plan-image");
  var floorCaption = document.getElementById("floor-plan-caption");

  if (!floorImage) {
    return;
  }

  function showFloor(floorNumber) {
    /* Build the image path from the floor number. */
    floorImage.src = "assets/images/campus-map/floor-" + floorNumber + "-placeholder.png";
    floorImage.alt = "Placeholder floor plan for Floor " + floorNumber;

    if (floorCaption) {
      floorCaption.textContent = "Floor " + floorNumber + " - sample floor plan";
    }

    /* Highlight the active button and update its accessibility state. */
    floorButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-floor") === floorNumber;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  floorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      showFloor(button.getAttribute("data-floor"));
    });
  });

  /* The HTML already shows Floor 1, so nothing else is needed on load. */
}
