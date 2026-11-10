/* ==========================================================================
   faqs.js - EXPANDABLE QUESTIONS AND ANSWERS
   --------------------------------------------------------------------------
   Reads data/faq-data.js and groups the questions by their "category" value.
   Clicking a question opens or closes its answer.
   ========================================================================== */

/* Build one expandable question + answer pair. */
function buildFaqItem(item) {
  var answerId = "faq-answer-" + item.id;

  var html = '<div class="faq-item">';
  html += '<button class="faq-question" type="button" aria-expanded="false"' +
          ' aria-controls="' + answerId + '">';
  html += '<span class="faq-question__text">' + item.question + "</span>";
  html += '<span class="faq-question__icon" aria-hidden="true"></span>';
  html += "</button>";

  html += '<div class="faq-answer" id="' + answerId + '">';
  html += '<div class="faq-answer__inner">';
  html += "<p>" + item.answer + "</p>";
  if (item.sample) {
    html += '<span class="badge badge--sample">Sample answer</span>';
  }
  html += "</div></div></div>";

  return html;
}

/* Build one category card containing all of its questions. */
function buildFaqCategory(categoryName, items) {
  var html = '<article class="faq-category card">';

  html += '<header class="card__header">';
  html += '<h2 class="card__title">' + categoryName + "</h2>";
  html += '<span class="card__meta">' + items.length + " question" +
          (items.length === 1 ? "" : "s") + "</span>";
  html += "</header>";

  html += '<div class="faq-list">';
  items.forEach(function (item) {
    html += buildFaqItem(item);
  });
  html += "</div></article>";

  return html;
}

/* Start the FAQ page. Called from main.js. */
function initFaqs() {
  var container = document.getElementById("faq-categories");

  /* Safety check: if the data file is missing, show a friendly message. */
  if (typeof faqData === "undefined") {
    container.innerHTML =
      '<p class="muted">FAQ data could not be loaded. Check data/faq-data.js.</p>';
    return;
  }

  /* Collect the category names in the order they appear in the data file. */
  var categories = [];
  faqData.forEach(function (item) {
    if (categories.indexOf(item.category) === -1) {
      categories.push(item.category);
    }
  });

  var html = "";
  categories.forEach(function (categoryName) {
    var items = faqData.filter(function (item) {
      return item.category === categoryName;
    });
    html += buildFaqCategory(categoryName, items);
  });

  container.innerHTML = html;

  /* One click listener handles every question, including future ones. */
  container.addEventListener("click", function (event) {
    var button = event.target.closest(".faq-question");

    if (!button) {
      return;
    }

    var item = button.closest(".faq-item");
    var isNowOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", isNowOpen ? "true" : "false");
  });
}
