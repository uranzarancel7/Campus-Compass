/* ==========================================================================
   campus-directory.js - SEARCHING THE FACILITY DATA
   --------------------------------------------------------------------------
   Reads data/campus-directory-data.js, filters it as the student types, and
   shows the details of whichever result they click.

   This search only reads text. It is NOT connected to the Campus Map, and
   there are no room markers or directions anywhere in this file.
   ========================================================================== */

var selectedFacilityId = null;

/* Put a facility's information into the detail card on the right. */
function renderFacilityDetails(facility) {
  var detail = document.getElementById("directory-detail");

  if (!facility) {
    detail.innerHTML =
      '<div class="directory-detail__placeholder">' +
      '<span class="directory-detail__icon" aria-hidden="true">&#128196;</span>' +
      '<h2 class="directory-detail__title">Facility details</h2>' +
      '<p class="muted">Select a facility from the list to see its floor, room, ' +
      "hours, and other useful information.</p></div>";
    return;
  }

  var html = '<div class="directory-detail__body">';
  html += '<div class="badge-row">';
  html += '<span class="badge badge--announcement">' + facility.category + "</span>";

  if (facility.sample !== false) {
    html += '<span class="badge badge--sample">Sample info</span>';
  }

  html += "</div>";
  html += '<h2 class="directory-detail__name">' + facility.name + "</h2>";
  html += '<p class="directory-detail__description">' + facility.description + "</p>";
  html += '<dl class="detail-list">';

  html += '<div class="detail-list__row"><dt>Category</dt><dd>' +
          facility.category + "</dd></div>";

  html += '<div class="detail-list__row"><dt>Floor</dt><dd>' +
          facility.floor + "</dd></div>";

  if (facility.room) {
    html += '<div class="detail-list__row"><dt>Room</dt><dd>' +
            facility.room + "</dd></div>";
  }

  if (facility.hours) {
    html += '<div class="detail-list__row"><dt>Hours</dt><dd>' +
            facility.hours + "</dd></div>";
  }

  if (facility.notes) {
    html += '<div class="detail-list__row"><dt>Good to know</dt><dd>' +
            facility.notes + "</dd></div>";
  }

  html += "</dl>";
  html += '<p class="directory-card__text"><em>Sample information - confirm details ' +
          "with the office before relying on them.</em></p>";
  html += "</div>";

  detail.innerHTML = html;
}

/* Build one clickable result row. */
function buildDirectoryCard(facility) {
  var isSelected = facility.id === selectedFacilityId;

  var html = '<button class="directory-card' + (isSelected ? " is-selected" : "") + '"' +
             ' type="button" data-facility-id="' + facility.id + '"' +
             ' aria-pressed="' + (isSelected ? "true" : "false") + '">';

  html += '<span class="directory-card__top">';
  html += '<span class="directory-card__name">' + facility.name + "</span>";
  html += '<span class="badge badge--announcement">' + facility.category + "</span>";
  html += "</span>";

  html += '<span class="directory-card__meta">';
  html += "<span>&#127967; " + facility.floor + "</span>";
  if (facility.room) {
    html += "<span>&#128196; " + facility.room + "</span>";
  }
  html += "</span>";

  html += '<span class="directory-card__text">' + facility.description + "</span>";
  html += "</button>";

  return html;
}

/* Decide whether a facility matches the typed words.
   Every typed word must appear somewhere in the facility's text. */
function facilityMatchesWords(facility, words) {
  var searchableText = [
    facility.name,
    facility.category,
    facility.floor,
    facility.room,
    facility.description,
    facility.hours,
    facility.notes,
    (facility.keywords || []).join(" ")
  ].join(" ").toLowerCase();

  return words.every(function (word) {
    return searchableText.indexOf(word) !== -1;
  });
}

/* Filter the data and redraw the list. */
function updateDirectoryResults() {
  var searchInput = document.getElementById("directory-search");
  var categorySelect = document.getElementById("directory-category");
  var resultsContainer = document.getElementById("directory-results");
  var emptyState = document.getElementById("directory-empty");
  var countLabel = document.getElementById("directory-count");
  var clearButton = document.getElementById("directory-clear");

  var query = searchInput.value.trim().toLowerCase();
  var category = categorySelect.value;
  var words = query.length > 0 ? query.split(/\s+/) : [];

  /* Show the small "x" button only when there is something to clear. */
  clearButton.hidden = query.length === 0;

  var matches = campusDirectoryData.filter(function (facility) {
    var matchesCategory = category === "all" || facility.category === category;
    return matchesCategory && facilityMatchesWords(facility, words);
  });

  /* Sort alphabetically so the list is easy to scan. */
  matches.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  resultsContainer.innerHTML = matches.map(buildDirectoryCard).join("");

  var total = campusDirectoryData.length;
  countLabel.textContent = matches.length === total
    ? "Showing all " + total + " facilities"
    : "Showing " + matches.length + " of " + total + " facilities";

  /* Empty state */
  if (matches.length === 0) {
    emptyState.hidden = false;
    resultsContainer.hidden = true;
    selectedFacilityId = null;
    renderFacilityDetails(null);
  } else {
    emptyState.hidden = true;
    resultsContainer.hidden = false;
  }

  /* If the selected facility was filtered out, clear the detail card. */
  var selectedStillVisible = matches.some(function (facility) {
    return facility.id === selectedFacilityId;
  });

  if (!selectedStillVisible) {
    selectedFacilityId = null;
    renderFacilityDetails(null);
  }
}

/* Open one facility's details when its row is clicked. */
function selectFacility(facilityId) {
  var facility = campusDirectoryData.filter(function (item) {
    return item.id === facilityId;
  })[0];

  if (!facility) {
    return;
  }

  selectedFacilityId = facilityId;

  /* Rebuild the list so the selected row gets the highlight, then fill the
     detail card with this facility's information. */
  updateDirectoryResults();
  renderFacilityDetails(facility);

  /* On phones and tablets the detail card sits below the list, so bring it
     into view after a result is chosen. On wide screens it is already
     visible beside the list and nothing happens. */
  var detail = document.getElementById("directory-detail");
  var results = document.getElementById("directory-results");

  if (detail.getBoundingClientRect().top > results.getBoundingClientRect().top) {
    detail.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* Start the directory page. Called from main.js. */
function initCampusDirectory() {
  var searchInput = document.getElementById("directory-search");
  var categorySelect = document.getElementById("directory-category");
  var clearButton = document.getElementById("directory-clear");
  var resultsContainer = document.getElementById("directory-results");

  /* Safety check: if the data file is missing, show a friendly message. */
  if (typeof campusDirectoryData === "undefined") {
    resultsContainer.innerHTML =
      '<p class="muted">Facility data could not be loaded. Check data/campus-directory-data.js.</p>';
    return;
  }

  searchInput.addEventListener("input", updateDirectoryResults);
  categorySelect.addEventListener("change", updateDirectoryResults);

  clearButton.addEventListener("click", function () {
    searchInput.value = "";
    categorySelect.value = "all";
    updateDirectoryResults();
    searchInput.focus();
  });

  /* One click listener handles every result button, including new ones. */
  resultsContainer.addEventListener("click", function (event) {
    var card = event.target.closest(".directory-card");

    if (card) {
      selectFacility(card.getAttribute("data-facility-id"));
    }
  });

  updateDirectoryResults();
}
