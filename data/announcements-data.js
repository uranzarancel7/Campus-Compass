/* ==========================================================================
   ANNOUNCEMENTS AND EVENTS DATA
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to add, change, or remove an
   announcement or event.

   HOW TO ADD A NEW ITEM
   1. Copy one of the objects below (from "{" to "},").
   2. Paste it at the top of the list so it shows up first.
   3. Change the values.

   FIELD GUIDE
   id          : a short unique name. Example: "ann-008"
   title       : the headline students will see
   type        : "announcement" (general post) or "event" (has a date)
   category    : a short label such as "Enrollment" or "Student Services"
   datePosted  : the date it was published, in YYYY-MM-DD format
   eventDate   : for events only, in YYYY-MM-DD format. Use "" for posts.
   eventTime   : for events only. Example: "9:00 AM - 3:00 PM"
   location    : where the event happens. Use "" if not applicable.
   description : one to three sentences of details
   image       : path to a picture, or "" if the post has no picture.
                 Pictures live in assets/images/announcements/
   featured    : true if this should be the big "Latest Announcement" card
   sample      : true marks clearly-labelled sample content

   RULES
   - Newest datePosted appears first automatically.
   - Events stay sorted by eventDate.
   - Do not remove the square brackets [ ] or the commas between items.
   ========================================================================== */

const announcementsData = [
  {
    id: "ann-001",
    title: "Enrollment for Second Semester Is Now Open",
    type: "announcement",
    category: "Enrollment",
    datePosted: "2026-11-09",
    eventDate: "",
    eventTime: "",
    location: "Registrar's Office",
    description:
      "Continuing students may now enroll for the second semester. Bring your advising slip and student ID to the Registrar's Office. The enrollment window closes on November 27, 2026.",
    image: "assets/images/announcements/enrollment-second-semester-poster.png",
    featured: true,
    sample: true
  },
  {
    id: "ann-002",
    title: "Student Organization Fair 2026",
    type: "event",
    category: "Student Life",
    datePosted: "2026-11-06",
    eventDate: "2026-11-21",
    eventTime: "9:00 AM - 3:00 PM",
    location: "Campus Covered Court (sample location)",
    description:
      "Meet more than 30 student organizations in one place. There will be booth games, performances, and free snacks. This is a great chance for first-year students to find a community.",
    image: "assets/images/announcements/student-org-fair-poster.png",
    featured: false,
    sample: true
  },
  {
    id: "ann-003",
    title: "Library Extends Study Hours During Finals",
    type: "announcement",
    category: "Campus Facilities",
    datePosted: "2026-11-04",
    eventDate: "",
    eventTime: "",
    location: "Learning Resource Center",
    description:
      "The Learning Resource Center will stay open until 10:00 PM from November 16 to December 4, 2026. Group study rooms may be reserved at the front desk. Bring your student ID for entry after 6:00 PM.",
    image: "assets/images/announcements/library-study-hours-poster.png",
    featured: false,
    sample: true
  },
  {
    id: "ann-004",
    title: "Campus Clean-Up Drive",
    type: "event",
    category: "Student Services",
    datePosted: "2026-11-02",
    eventDate: "2026-11-28",
    eventTime: "7:00 AM - 11:00 AM",
    location: "Main Gate lobby (sample location)",
    description:
      "Join your block in keeping the campus green and clean. Gloves and trash bags will be provided. Volunteers should wear comfortable clothes and bring a refillable water bottle.",
    image: "assets/images/announcements/campus-clean-up-poster.png",
    featured: false,
    sample: true
  },
  {
    id: "ann-005",
    title: "Guidance Office Wellness Week",
    type: "event",
    category: "Student Services",
    datePosted: "2026-10-29",
    eventDate: "2026-12-01",
    eventTime: "8:00 AM - 4:00 PM",
    location: "Guidance and Counseling Office (sample location)",
    description:
      "A week of free mental health talks, relaxation activities, and confidential consultations. Walk-ins are welcome, but slots for one-on-one sessions are limited.",
    image: "",
    featured: false,
    sample: true
  },
  {
    id: "ann-006",
    title: "Scholarship Applications Close This Month",
    type: "announcement",
    category: "Scholarships",
    datePosted: "2026-10-27",
    eventDate: "",
    eventTime: "",
    location: "Student Affairs Office",
    description:
      "Reminder: application forms for the second semester scholarship program are due on November 30, 2026. Submit complete requirements to the Student Affairs Office during office hours.",
    image: "",
    featured: false,
    sample: true
  },
  {
    id: "ann-007",
    title: "Founders Week Thanksgiving Service",
    type: "event",
    category: "Campus Life",
    datePosted: "2026-10-24",
    eventDate: "2026-11-26",
    eventTime: "4:00 PM - 6:00 PM",
    location: "College Chapel (sample location)",
    description:
      "Students, faculty, and staff are invited to a thanksgiving service to close the Founders Week celebration. Seating opens 30 minutes before the program starts.",
    image: "",
    featured: false,
    sample: true
  }
];
