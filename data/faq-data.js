/* ==========================================================================
   FREQUENTLY ASKED QUESTIONS DATA
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to add, change, or remove an FAQ.
   Questions are grouped automatically by their "category" value.

   HOW TO ADD A NEW FAQ
   1. Copy one of the objects below (from "{" to "},").
   2. Paste it into the list.
   3. Change the values.

   FIELD GUIDE
   id       : a short unique name. Example: "faq-011"
   category : must match one of the five categories exactly:
              "Enrollment and Admission", "Academic Matters",
              "Campus Facilities", "Student Services", "General Concerns"
   question : the question students will click
   answer   : the answer that appears below the question
   sample   : true marks clearly-labelled sample content

   IMPORTANT
   The answers below are SAMPLE content written for this student project.
   Do not replace them with official Gordon College policies or procedures
   unless those have been verified and approved by the school.
   ========================================================================== */

const faqData = [
  /* ---------------------- Enrollment and Admission ---------------------- */
  {
    id: "faq-001",
    category: "Enrollment and Admission",
    question: "How do I enroll for the next semester?",
    answer:
      "Go to the Registrar's Office during the enrollment period with your advising slip, your previous grades, and your student ID. The staff will confirm your subjects and give you an enrollment form to complete.",
    sample: true
  },
  {
    id: "faq-002",
    category: "Enrollment and Admission",
    question: "What should I do if I miss the enrollment deadline?",
    answer:
      "Visit the Registrar's Office as soon as possible. Late enrollment is usually handled case by case, and you may be asked to write a short letter explaining the delay. Sample answer - confirm the real procedure with the Registrar.",
    sample: true
  },

  /* --------------------------- Academic Matters -------------------------- */
  {
    id: "faq-003",
    category: "Academic Matters",
    question: "How do I request an official transcript of records?",
    answer:
      "Fill out a request form at the Registrar's Office and present a valid student ID. Processing usually takes a few working days. Sample answer - ask the Registrar for the current fees and schedule.",
    sample: true
  },
  {
    id: "faq-004",
    category: "Academic Matters",
    question: "Can I change my subject after enrollment?",
    answer:
      "Subject changes are usually allowed only during the add or drop period. Ask your adviser first, then bring the signed form to the Registrar's Office. Sample answer - the official add and drop dates are posted each semester.",
    sample: true
  },

  /* --------------------------- Campus Facilities ------------------------- */
  {
    id: "faq-005",
    category: "Campus Facilities",
    question: "Where can I study quietly between classes?",
    answer:
      "The Learning Resource Center on the 2nd floor has quiet reading areas, and the group study rooms can be reserved at the front desk. Check the Campus Map page for the floor plan.",
    sample: true
  },
  {
    id: "faq-006",
    category: "Campus Facilities",
    question: "Is there somewhere I can print documents on campus?",
    answer:
      "The IT Help Desk on the 2nd floor assists with printing concerns, and the computer laboratory has printing services when no class is using the room. Bring your student ID.",
    sample: true
  },

  /* --------------------------- Student Services -------------------------- */
  {
    id: "faq-007",
    category: "Student Services",
    question: "How do I talk to a counselor?",
    answer:
      "Visit the Guidance and Counseling Office on the 1st floor during office hours. You can walk in or book an appointment at the front desk. All conversations are confidential.",
    sample: true
  },
  {
    id: "faq-008",
    category: "Student Services",
    question: "How do I join a student organization?",
    answer:
      "Attend the Student Organization Fair, or visit the Student Affairs Office for the current list of recognized organizations and their contact persons. Some organizations require an application form.",
    sample: true
  },

  /* --------------------------- General Concerns -------------------------- */
  {
    id: "faq-009",
    category: "General Concerns",
    question: "What do I do if I lose my student ID?",
    answer:
      "Report the loss to the Student Affairs Office right away so the card can be deactivated. Ask about the replacement procedure and any replacement fee. Sample answer - confirm details with Student Affairs.",
    sample: true
  },
  {
    id: "faq-010",
    category: "General Concerns",
    question: "Who do I contact during an emergency on campus?",
    answer:
      "Contact the security office or the nearest guard station immediately. The Health Services Clinic on the 1st floor can provide first aid during office hours. In a serious emergency, call local emergency services.",
    sample: true
  }
];
