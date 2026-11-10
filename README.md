# Campus Compass: Your Guide to College Life

A beginner-friendly website for new and continuing **Gordon College** students.
It brings campus announcements, a searchable facility directory, simple floor
plans, and frequently asked questions into one place.

Built with plain **HTML5, CSS, and vanilla JavaScript** - no frameworks, no
build tools, and no external libraries.

> **Sample content notice**
> All announcements, facility locations, room numbers, operating hours, and FAQ
> answers in this project are clearly labelled **sample data**. They are not
> official Gordon College information. Replace them only with details that have
> been verified and approved by the school.

---

## 1. How to run the website locally

You do **not** need to install anything.

1. Open the `Campus-Compass` folder.
2. Double-click `index.html` (or right-click and choose *Open with* your browser).
3. The site opens at `index.html` and all pages work through the navigation menu.

Optional, if you prefer a local server:

- **VS Code:** install the *Live Server* extension, right-click `index.html`,
  and choose *Open with Live Server*.
- **Python:** open a terminal in the project folder and run
  `python -m http.server 8000`, then visit `http://localhost:8000`.
- **VS Code terminal:** run `opencode` in this folder if you use OpenCode.

Everything also works when opened directly as a file, because the project uses
only relative paths and classic `<script>` tags.

---

## 2. Folder and file guide

```
Campus-Compass/
|
|-- index.html                  The whole site structure (5 page sections)
|
|-- assets/
|   |-- css/
|   |   |-- style.css           Colours, fonts, resets, shared helpers
|   |   |-- layout.css          Header, sidebar, page grids, footer
|   |   |-- components.css      Cards, buttons, search bar, accordion, map
|   |   |-- responsive.css      Tablet and mobile adjustments
|   |
|   |-- js/
|   |   |-- main.js             Starts every feature when the page loads
|   |   |-- navigation.js       Switches pages + mobile menu
|   |   |-- announcements.js    Draws announcements and events
|   |   |-- campus-directory.js Search + facility details
|   |   |-- campus-map.js       Floor button -> floor image
|   |   |-- faqs.js             Expandable FAQ questions
|   |
|   `-- images/
|       |-- campus-map/         Six floor-plan placeholder PNGs
|       |-- announcements/      Announcement and event poster PNGs
|       `-- general/            Logo and hero texture
|
|-- data/
|   |-- announcements-data.js   All announcements and events
|   |-- campus-directory-data.js All facilities
|   `-- faq-data.js             All questions and answers
|
`-- README.md                   This file
```

### What each part does

| File | Purpose |
| --- | --- |
| `index.html` | Contains all five page sections: Home, Announcements, Campus Directory, Campus Map, and FAQs. Navigation links show one section at a time. |
| `style.css` | The design tokens (green palette, gold accent, text colours, spacing) plus base typography and accessibility helpers. |
| `layout.css` | Header, sidebar, hero banners, content grids, directory layout, map layout, and footer. |
| `components.css` | Reusable parts: cards, badges, buttons, search fields, result rows, floor buttons, and the FAQ accordion. |
| `responsive.css` | All `@media` rules. Desktop styles are never changed here. |
| `main.js` | The starting point. Calls `initNavigation()`, `initAnnouncements()`, `initCampusDirectory()`, `initCampusMap()`, and `initFaqs()`. |
| `navigation.js` | Hides and shows page sections, updates the URL hash (`#home`, `#map`, ...), and opens the mobile sidebar. |
| `announcements.js` | Sorts and draws announcements and events from the data file. |
| `campus-directory.js` | Filters facilities as you type and fills the details card. |
| `campus-map.js` | Swaps the floor image when a floor button is clicked. |
| `faqs.js` | Groups questions by category and opens/closes answers. |
| `data/*.js` | The only files you edit to change content. They are plain JavaScript arrays. |

---

## 3. How to add a new announcement

1. Open `data/announcements-data.js`.
2. Copy an existing object (from `{` to `},`).
3. Paste it at the **top** of the array so it appears first.
4. Change the values:

```js
{
  id: "ann-008",
  title: "New Student Orientation",
  type: "event",                        // "announcement" or "event"
  category: "Student Services",
  datePosted: "2026-11-12",             // YYYY-MM-DD
  eventDate: "2026-12-05",              // "" for a normal announcement
  eventTime: "8:00 AM - 12:00 PM",
  location: "College Chapel (sample location)",
  description: "A short description of the announcement.",
  image: "assets/images/announcements/my-poster.png",  // "" if no image
  featured: false,                      // true = big card at the top
  sample: true
}
```

5. Save the file and reload the browser.

- To use a picture, put the image in `assets/images/announcements/` and write its
  path in `image`. Use a descriptive file name such as
  `orientation-day-poster.png`.
- Items are sorted automatically: announcements by `datePosted` (newest first),
  events by `eventDate` (soonest first).
- Only one item should normally have `featured: true`.

---

## 4. How to add a new campus facility

1. Open `data/campus-directory-data.js`.
2. Copy an existing object and paste it into the list.
3. Fill in the fields:

```js
{
  id: "fac-017",
  name: "Admissions Office",
  category: "Administrative Office",
  floor: "1st Floor",
  room: "Room 105 (sample)",
  description: "Handles applications and entrance requirements.",
  hours: "Monday to Friday, 8:00 AM - 5:00 PM (sample)",
  notes: "Bring a valid ID when submitting requirements.",
  keywords: ["admission", "application", "entrance", "requirements"]
}
```

4. Save and reload.

Tips:

- `keywords` are extra words students might type. Add synonyms there.
- Use a category that already exists in the `category` dropdown inside
  `index.html` if you want the filter to find it. To add a brand-new category,
  also add one `<option>` in the directory search panel in `index.html`.
- The search checks the name, category, floor, room, description, hours, notes,
  and keywords. Every typed word must match, so "room 301" works.

The directory search is **not** connected to the Campus Map. It only displays
text information.

---

## 5. How to add a new FAQ

1. Open `data/faq-data.js`.
2. Copy an existing object and paste it where you want it.
3. Use one of the five category names exactly:

- `"Enrollment and Admission"`
- `"Academic Matters"`
- `"Campus Facilities"`
- `"Student Services"`
- `"General Concerns"`

```js
{
  id: "faq-011",
  category: "Campus Facilities",
  question: "Where is the lost and found?",
  answer: "Ask at the Student Affairs Office on the 1st floor.",
  sample: true
}
```

4. Save and reload. New categories are created automatically if you use a
   different category name, so nothing else needs editing.

---

## 6. How to replace a floor-plan placeholder image

The map shows one image at a time, using this naming pattern:

```
assets/images/campus-map/floor-1-placeholder.png
assets/images/campus-map/floor-2-placeholder.png
assets/images/campus-map/floor-3-placeholder.png
assets/images/campus-map/floor-4-placeholder.png
assets/images/campus-map/floor-5-placeholder.png
assets/images/campus-map/floor-6-placeholder.png
```

**Easiest method (no code changes):**

1. Get the official image approved by Gordon College.
2. Rename it to match the placeholder exactly, for example
   `floor-3-placeholder.png`.
3. Copy it into `assets/images/campus-map/`, replacing the old file.
4. Reload the page and click Floor 3.

**Alternative (keep the original file):**

1. Save the new image with a clearer name, for example `floor-3-official.png`.
2. Open `assets/js/campus-map.js`.
3. Change the line inside `showFloor()`:

```js
floorImage.src = "assets/images/campus-map/floor-" + floorNumber + "-official.png";
```

Only publish floor plans that the school has verified and approved, and leave
out restricted or sensitive areas. This viewer is intentionally simple: it does
not provide directions, room markers, or live location tracking.

---

## 7. Design reference

The visual style follows the supplied reference design:

- Deep green to olive-green gradient hero banners with white headings
- Off-white page background with white rounded cards and thin light borders
- Gold accent for highlights, events, and badges
- A left sidebar navigation with icon + label items
- Clean sans-serif type with bold headings and muted secondary text

---

## 8. Privacy and security notes

- No accounts, logins, or forms that collect personal information.
- No GPS, location tracking, or analytics scripts.
- Announcements are the same for every visitor.
- Floor plans and facility details must be approved by Gordon College before
  publication.

---

## 9. Quick testing checklist

- [x] Sidebar links switch between all five sections
- [x] Browser back/forward buttons still work
- [x] Home page shows the newest announcement and next three events
- [x] Announcement posters load from `assets/images/announcements/`
- [x] "All posts / Announcements / Events" filters work
- [x] Directory search finds facilities by name, room, or keyword
- [x] Category dropdown narrows the results
- [x] Clicking a result shows its floor, room, hours, and notes
- [x] "No matching facilities found" appears for empty searches
- [x] All six floor buttons show the correct image
- [x] FAQ questions expand and collapse
- [x] Layouts work on desktop, tablet, and phone widths
- [x] No console errors and no broken image paths

---

Built as a student project for Gordon College. Content is sample data only.
