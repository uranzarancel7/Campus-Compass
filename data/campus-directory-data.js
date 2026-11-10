/* ==========================================================================
   CAMPUS DIRECTORY DATA
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to add, change, or remove a campus
   facility. The search box on the Campus Directory page reads this list.

   HOW TO ADD A NEW FACILITY
   1. Copy one of the objects below (from "{" to "},").
   2. Paste it where you want it in the list.
   3. Change the values.

   FIELD GUIDE
   id          : a short unique name. Example: "fac-017"
   name        : the facility name students will search for
   category    : one of the categories used below
                 Classroom | Administrative Office | Laboratory | Library |
                 Restroom | Student Service | Study Area | Dining |
                 Health Service | Multi-purpose Hall
   floor       : the floor number as text. Example: "1st Floor"
   room        : room number if there is one, otherwise ""
   description : one or two sentences about the facility
   hours       : operating hours, otherwise ""
   notes       : extra useful information, otherwise ""
   keywords    : extra words students might type into the search box

   IMPORTANT
   All locations, room numbers, and hours below are SAMPLE information.
   Replace them only with information verified and approved by Gordon College.
   ========================================================================== */

const campusDirectoryData = [
  {
    id: "fac-001",
    name: "Registrar's Office",
    category: "Administrative Office",
    floor: "1st Floor",
    room: "Room 101 (sample)",
    description:
      "Handles enrollment, official records, transcripts, and certification requests.",
    hours: "Monday to Friday, 8:00 AM - 5:00 PM (sample)",
    notes: "Bring a valid student ID when requesting documents.",
    keywords: ["enrollment", "transcript", "records", "registration", "documents"]
  },
  {
    id: "fac-002",
    name: "Accounting Office",
    category: "Administrative Office",
    floor: "1st Floor",
    room: "Room 103 (sample)",
    description:
      "Accepts tuition and fee payments and issues official receipts.",
    hours: "Monday to Friday, 8:00 AM - 4:00 PM (sample)",
    notes: "Payments are also accepted at the cashier window during lunch break.",
    keywords: ["payment", "tuition", "cashier", "receipt", "fees", "billing"]
  },
  {
    id: "fac-003",
    name: "Learning Resource Center (Library)",
    category: "Library",
    floor: "2nd Floor",
    room: "Rooms 201-205 (sample)",
    description:
      "The main library with borrowing services, reference books, and quiet reading areas.",
    hours: "Monday to Saturday, 7:30 AM - 6:00 PM (sample)",
    notes: "Study hours are extended during final examination weeks.",
    keywords: ["library", "books", "borrow", "reading", "reference", "thesis"]
  },
  {
    id: "fac-004",
    name: "Group Study Rooms",
    category: "Study Area",
    floor: "2nd Floor",
    room: "Rooms 206-208 (sample)",
    description:
      "Small enclosed rooms for group work and presentations practice.",
    hours: "Same as library hours (sample)",
    notes: "Reserve a slot at the library front desk. Maximum of two hours per group.",
    keywords: ["study room", "group work", "discussion", "meeting", "reserve"]
  },
  {
    id: "fac-005",
    name: "Computer Laboratory 1",
    category: "Laboratory",
    floor: "3rd Floor",
    room: "Room 301 (sample)",
    description:
      "Desktop computers for programming, encoding, and computer-based activities.",
    hours: "Monday to Friday, 8:00 AM - 5:00 PM (sample)",
    notes: "Open for walk-in use when no class is scheduled.",
    keywords: ["computer", "lab", "printing", "internet", "programming", "pc"]
  },
  {
    id: "fac-006",
    name: "Science Laboratory",
    category: "Laboratory",
    floor: "4th Floor",
    room: "Room 402 (sample)",
    description:
      "General science laboratory for biology, chemistry, and physics classes.",
    hours: "Class schedules only (sample)",
    notes: "Students must be accompanied by an instructor. Safety goggles are required.",
    keywords: ["science", "chemistry", "biology", "physics", "experiment", "lab"]
  },
  {
    id: "fac-007",
    name: "Classroom 201",
    category: "Classroom",
    floor: "2nd Floor",
    room: "Room 201 (sample)",
    description:
      "A standard air-conditioned classroom with a projector and 40 seats.",
    hours: "Class schedules only (sample)",
    notes: "Used mostly by first-year blocks in the morning.",
    keywords: ["classroom", "room 201", "lecture", "first year"]
  },
  {
    id: "fac-008",
    name: "Classroom 305",
    category: "Classroom",
    floor: "3rd Floor",
    room: "Room 305 (sample)",
    description:
      "A larger classroom with movable chairs, often used for seminars.",
    hours: "Class schedules only (sample)",
    notes: "Can seat up to 60 students.",
    keywords: ["classroom", "room 305", "seminar", "lecture"]
  },
  {
    id: "fac-009",
    name: "Guidance and Counseling Office",
    category: "Student Service",
    floor: "1st Floor",
    room: "Room 108 (sample)",
    description:
      "Provides confidential counseling, career guidance, and student wellness support.",
    hours: "Monday to Friday, 8:00 AM - 5:00 PM (sample)",
    notes: "Walk-ins are welcome. Appointments can be booked at the front desk.",
    keywords: ["guidance", "counseling", "mental health", "career", "advice", "wellness"]
  },
  {
    id: "fac-010",
    name: "Student Affairs Office",
    category: "Student Service",
    floor: "1st Floor",
    room: "Room 110 (sample)",
    description:
      "Handles student organizations, scholarships, discipline concerns, and student activities.",
    hours: "Monday to Friday, 8:00 AM - 5:00 PM (sample)",
    notes: "Scholarship forms are submitted here.",
    keywords: ["student affairs", "organizations", "scholarship", "activities", "clubs"]
  },
  {
    id: "fac-011",
    name: "Health Services Clinic",
    category: "Health Service",
    floor: "1st Floor",
    room: "Room 112 (sample)",
    description:
      "Provides first aid, basic health checks, and referrals for students and staff.",
    hours: "Monday to Friday, 7:00 AM - 5:00 PM (sample)",
    notes: "For emergencies outside office hours, contact the security office.",
    keywords: ["clinic", "nurse", "first aid", "health", "medical", "sick"]
  },
  {
    id: "fac-012",
    name: "Main Lobby Restroom",
    category: "Restroom",
    floor: "1st Floor",
    room: "Beside the main lobby (sample)",
    description:
      "Restrooms located next to the main lobby and the guard station.",
    hours: "Open during campus hours (sample)",
    notes: "Wheelchair-accessible stalls are available.",
    keywords: ["restroom", "toilet", "bathroom", "cr", "comfort room", "washroom"]
  },
  {
    id: "fac-013",
    name: "East Wing Restroom",
    category: "Restroom",
    floor: "3rd Floor",
    room: "East wing, near Room 310 (sample)",
    description:
      "Restrooms serving the east wing classrooms of the third floor.",
    hours: "Open during campus hours (sample)",
    notes: "",
    keywords: ["restroom", "toilet", "bathroom", "cr", "comfort room", "east wing"]
  },
  {
    id: "fac-014",
    name: "Cafeteria and Dining Hall",
    category: "Dining",
    floor: "1st Floor",
    room: "North wing (sample)",
    description:
      "Main dining area with food stalls, a water station, and seating for students.",
    hours: "Monday to Saturday, 6:30 AM - 6:00 PM (sample)",
    notes: "Outside food is allowed in the designated picnic area only.",
    keywords: ["cafeteria", "canteen", "food", "lunch", "dining", "snacks", "water"]
  },
  {
    id: "fac-015",
    name: "IT Help Desk",
    category: "Student Service",
    floor: "2nd Floor",
    room: "Room 210 (sample)",
    description:
      "Assists with student portal accounts, campus Wi-Fi access, and printing concerns.",
    hours: "Monday to Friday, 8:00 AM - 5:00 PM (sample)",
    notes: "Bring your student ID for account resets.",
    keywords: ["it", "wifi", "password", "portal", "account", "printer", "technical"]
  },
  {
    id: "fac-016",
    name: "College Chapel and Multi-purpose Hall",
    category: "Multi-purpose Hall",
    floor: "1st Floor",
    room: "South wing (sample)",
    description:
      "Venue for chapel services, assemblies, and school-wide programs.",
    hours: "Open during scheduled activities (sample)",
    notes: "Room reservations are handled by the Student Affairs Office.",
    keywords: ["chapel", "hall", "assembly", "program", "venue", "gym"]
  }
];
