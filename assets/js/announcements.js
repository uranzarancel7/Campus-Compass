/* ==========================================================================
   announcements.js - SHOWS THE DATA FROM data/announcements-data.js
   --------------------------------------------------------------------------
   Nothing in this file needs to change when you add, edit, or remove an
   announcement. Just edit the data file and reload the page.
   ========================================================================== */

/* Turn "2026-11-09" into something friendly like "Nov 9, 2026". */
function formatDate(dateString) {
  if (!dateString) {
    return "";
  }

  var date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

/* Turn "2026-11-21" into "Nov 21". Used on the small date chips. */
function formatShortDate(dateString) {
  if (!dateString) {
    return "";
  }

  var date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/* Newest published items first. */
function sortByNewestPosted(items) {
  return items.slice().sort(function (a, b) {
    return new Date(b.datePosted) - new Date(a.datePosted);
  });
}

/* Events with the nearest date first. */
function sortByEventDate(items) {
  return items.slice().sort(function (a, b) {
    return new Date(a.eventDate) - new Date(b.eventDate);
  });
}

/* Build the small category / type / sample labels shown on each card. */
function buildBadges(item) {
  var typeLabel = item.type === "event" ? "Event" : "Announcement";
  var typeClass = item.type === "event" ? "badge--event" : "badge--announcement";
  var html = '<div class="badge-row">';
  html += '<span class="badge ' + typeClass + '">' + typeLabel + "</span>";
  html += '<span class="badge badge--announcement">' + item.category + "</span>";

  if (item.sample) {
    html += '<span class="badge badge--sample">Sample</span>';
  }

  html += "</div>";
  return html;
}

/* The big announcement card at the top of the announcements page. */
function buildFeaturedAnnouncement(item) {
  var html = '<article class="featured-card card">';

  if (item.image) {
    html += '<div class="featured-card__media">';
    html += '<img src="' + item.image + '" alt="Poster for ' + item.title + '">';
    html += "</div>";
  }

  html += '<div class="featured-card__content">';
  html += buildBadges(item);
  html += '<h2 class="featured-card__title">' + item.title + "</h2>";
  html += '<p class="featured-card__meta">Posted ' + formatDate(item.datePosted) + "</p>";

  if (item.eventDate) {
    html += '<p class="featured-card__meta">Event date: ' + formatDate(item.eventDate);
    if (item.eventTime) {
      html += " &middot; " + item.eventTime;
    }
    html += "</p>";
  }

  html += '<p class="featured-card__text">' + item.description + "</p>";

  if (item.location) {
    html += '<p class="featured-card__location">&#128205; ' + item.location + "</p>";
  }

  html += "</div></article>";
  return html;
}

/* A normal card used in the announcement and event grids. */
function buildAnnouncementCard(item) {
  var cardClass = item.type === "event" ? "announcement-card card announcement-card--event"
                                        : "announcement-card card";
  var html = '<article class="' + cardClass + '">';

  html += '<div class="announcement-card__media">';
  if (item.image) {
    html += '<img src="' + item.image + '" alt="Poster for ' + item.title + '">';
  } else {
    html += '<div class="announcement-card__placeholder" aria-hidden="true">' +
            (item.type === "event" ? "&#128197;" : "&#128227;") + "</div>";
  }
  html += "</div>";

  html += '<div class="announcement-card__body">';
  html += buildBadges(item);
  html += '<h3 class="announcement-card__title">' + item.title + "</h3>";
  html += '<p class="announcement-card__meta">Posted ' + formatDate(item.datePosted) + "</p>";

  if (item.eventDate) {
    html += '<p class="announcement-card__meta announcement-card__meta--event">' +
            "&#128197; " + formatDate(item.eventDate);
    if (item.eventTime) {
      html += " &middot; " + item.eventTime;
    }
    html += "</p>";
  }

  html += '<p class="announcement-card__text">' + item.description + "</p>";

  if (item.location) {
    html += '<p class="announcement-card__location">&#128205; ' + item.location + "</p>";
  }

  html += "</div></article>";
  return html;
}

/* Fill the "Latest Announcement" card on the home page. */
function renderHomeLatestAnnouncement(items) {
  var container = document.getElementById("home-latest-body");
  var dateLabel = document.getElementById("home-latest-date");

  if (!container) {
    return;
  }

  if (items.length === 0) {
    container.innerHTML = '<p class="muted">No announcements have been posted yet.</p>';
    return;
  }

  var item = items[0];
  var html = '<a class="home-latest" href="#announcements" data-view="announcements">';

  if (item.image) {
    html += '<img class="home-latest__image" src="' + item.image +
            '" alt="Poster for ' + item.title + '">';
  }

  html += '<h3 class="home-latest__title">' + item.title + "</h3>";
  html += '<p class="home-latest__text">' + item.description + "</p>";
  html += "</a>";

  container.innerHTML = html;

  if (dateLabel) {
    dateLabel.textContent = formatDate(item.datePosted);
  }

  /* The new link needs the page-switching behaviour too. */
  container.querySelector("[data-view]").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.hash = "announcements";
  });
}

/* Fill the "Upcoming Events" list on the home page. */
function renderHomeEvents(events) {
  var list = document.getElementById("home-events-list");

  if (!list) {
    return;
  }

  if (events.length === 0) {
    list.innerHTML = '<li class="muted">No upcoming events right now.</li>';
    return;
  }

  var html = "";
  events.slice(0, 3).forEach(function (item) {
    var date = new Date(item.eventDate + "T00:00:00");
    var day = date.toLocaleDateString("en-US", { day: "numeric" });
    var month = date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();

    html += '<li class="event-item">';
    html += '<span class="event-item__date" aria-hidden="true">';
    html += '<span class="event-item__day">' + day + "</span>";
    html += '<span class="event-item__month">' + month + "</span>";
    html += "</span>";
    html += '<span class="event-item__info">';
    html += '<span class="event-item__title">' + item.title + "</span>";
    html += '<span class="event-item__meta">' + formatDate(item.eventDate);
    if (item.eventTime) {
      html += " &middot; " + item.eventTime;
    }
    html += "</span></span></li>";
  });

  list.innerHTML = html;
}

/* Draw the featured card, the events grid, and the announcements grid. */
function renderAnnouncementPage(filter) {
  var featuredContainer = document.getElementById("featured-announcement");
  var eventsList = document.getElementById("events-list");
  var announcementsList = document.getElementById("announcements-list");
  var eventsBlock = document.getElementById("events-block");
  var announcementsBlock = document.getElementById("announcements-block");

  var allItems = announcementsData;
  var events = sortByEventDate(allItems.filter(function (item) {
    return item.type === "event";
  }));
  var announcements = sortByNewestPosted(allItems.filter(function (item) {
    return item.type !== "event";
  }));

  /* Featured card: the newest item marked featured, or simply the newest post. */
  var newestItems = sortByNewestPosted(allItems);
  var featuredItem = allItems.filter(function (item) {
    return item.featured;
  })[0] || newestItems[0];

  var showFeatured = filter !== "event" && featuredItem;
  featuredContainer.innerHTML = showFeatured ? buildFeaturedAnnouncement(featuredItem) : "";

  /* Events grid */
  var showEvents = filter === "all" || filter === "event";
  eventsBlock.hidden = !showEvents;
  eventsList.innerHTML = showEvents ? events.map(buildAnnouncementCard).join("") : "";

  /* Announcements grid */
  var showAnnouncements = filter === "all" || filter === "announcement";
  announcementsBlock.hidden = !showAnnouncements;
  announcementsList.innerHTML = showAnnouncements
    ? announcements.map(buildAnnouncementCard).join("")
    : "";
}

/* Start everything for this file. Called from main.js. */
function initAnnouncements() {
  /* Safety check: if the data file is missing, show a friendly message. */
  if (typeof announcementsData === "undefined") {
    document.getElementById("home-latest-body").innerHTML =
      '<p class="muted">Announcement data could not be loaded. Check data/announcements-data.js.</p>';
    return;
  }

  var allItems = announcementsData;
  var events = sortByEventDate(allItems.filter(function (item) {
    return item.type === "event";
  }));
  var announcements = sortByNewestPosted(allItems.filter(function (item) {
    return item.type !== "event";
  }));

  renderHomeLatestAnnouncement(announcements);
  renderHomeEvents(events);
  renderAnnouncementPage("all");

  /* Filter buttons on the announcements page. */
  var filterButtons = document.querySelectorAll(".filter-button");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterButtons.forEach(function (otherButton) {
        otherButton.classList.remove("is-active");
      });
      button.classList.add("is-active");
      renderAnnouncementPage(button.getAttribute("data-filter"));
    });
  });
}
