// ==========================================================================
// All individual sheets are FREE. Bundles are paid because they solve
// a specific goal — not because they unlock content.
// Bundles are organized around PARENT GOALS, not age groups.
// ==========================================================================

export interface FreeSheet {
  id: number;
  title: string;
  ageRange: string;
  pages: number;
  color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'teal' | 'orange';
  emoji: string;
  description: string;
  downloads: string;
  category: string;
}

// Launch set: 12 free sheets. Choti adds 10-15 new per week.
export const freeSheets: FreeSheet[] = [
  { id: 101, title: 'Letter A Tracing', ageRange: '3–5', pages: 4,
    color: 'red', emoji: '✏️', description: 'Single-letter starter with picture words.',
    downloads: '12.4k downloads', category: 'Letters' },
  { id: 102, title: 'Letters A–E Practice', ageRange: '3–5', pages: 8,
    color: 'pink', emoji: '📝', description: 'Your first five letters with tracing + matching.',
    downloads: '8.9k downloads', category: 'Letters' },
  { id: 103, title: 'Count 1–10 Fun Page', ageRange: '3–5', pages: 3,
    color: 'blue', emoji: '🔢', description: 'Counting with objects kids love.',
    downloads: '9.2k downloads', category: 'Numbers' },
  { id: 104, title: 'Numbers 1–20', ageRange: '4–6', pages: 6,
    color: 'teal', emoji: '🔟', description: 'Count, trace, and simple addition hints.',
    downloads: '6.7k downloads', category: 'Numbers' },
  { id: 105, title: 'Color the Rainbow', ageRange: '2–4', pages: 2,
    color: 'yellow', emoji: '🌈', description: 'Seven colors, one smiling rainbow.',
    downloads: '15.7k downloads', category: 'Colors & Shapes' },
  { id: 106, title: 'Match the Shapes', ageRange: '3–5', pages: 3,
    color: 'green', emoji: '🔷', description: 'Circle, square, triangle — match and trace.',
    downloads: '7.8k downloads', category: 'Colors & Shapes' },
  { id: 107, title: 'अ से अनार — Hindi Starter', ageRange: '4–6', pages: 4,
    color: 'orange', emoji: '📖', description: 'First 4 Hindi letters with pictures.',
    downloads: '18.3k downloads', category: 'Hindi' },
  { id: 108, title: 'Hindi Numbers १–१०', ageRange: '4–6', pages: 4,
    color: 'red', emoji: '१', description: 'Hindi numerals with counting objects.',
    downloads: '11.2k downloads', category: 'Hindi' },
  { id: 109, title: 'My Family Colouring', ageRange: '2–4', pages: 3,
    color: 'pink', emoji: '👨‍👩‍👧', description: 'A gentle first art activity.',
    downloads: '6.1k downloads', category: 'Life Skills' },
  { id: 110, title: 'Fruits & Vegetables Match', ageRange: '3–5', pages: 3,
    color: 'purple', emoji: '🥕', description: 'Match Indian fruits and veggies to names.',
    downloads: '5.9k downloads', category: 'Life Skills' },
  { id: 111, title: 'Simple Dot-to-Dot', ageRange: '4–6', pages: 3,
    color: 'teal', emoji: '🌀', description: 'Connect 1–15 dots to reveal pictures.',
    downloads: '8.5k downloads', category: 'Fine Motor' },
  { id: 112, title: 'Tracing Lines & Curves', ageRange: '3–5', pages: 4,
    color: 'blue', emoji: '✍️', description: 'Pre-writing practice before letters.',
    downloads: '10.1k downloads', category: 'Fine Motor' },
];

// ==========================================================================
// BUNDLE EXTRAS — what every paid bundle gives you beyond the sheets
// ==========================================================================

export interface BundleExtra {
  icon: string;
  title: string;
  description: string;
}

export const universalExtras: BundleExtra[] = [
  {
    icon: '📘',
    title: 'Parent Guide',
    description: 'Page-by-page teaching notes. How to introduce each sheet, what skills it builds, common mistakes to avoid.',
  },
  {
    icon: '📅',
    title: 'Daily Schedule',
    description: 'Which sheet to do on which day. No more guessing where to start or what comes next.',
  },
  {
    icon: '✅',
    title: 'Progress Tracker',
    description: 'Printable checklist your child marks off as they complete each sheet. Kids love ticking boxes.',
  },
  {
    icon: '📜',
    title: 'Completion Certificate',
    description: "A lovely 'I did it!' certificate with your child's name. Perfect for the fridge.",
  },
  {
    icon: '💬',
    title: 'WhatsApp Support',
    description: 'Private group where you can ask Choti questions. Monthly Q&A video calls included.',
  },
  {
    icon: '🔄',
    title: 'Lifetime Updates',
    description: 'When we add or improve sheets in this bundle, you get them free — forever.',
  },
];

// ==========================================================================
// BUNDLES — organized by GOAL, with age ranges as metadata
// ==========================================================================

export interface Bundle {
  id: string;
  title: string;              // The goal-based name
  subtitle: string;           // The outcome promise
  goal: string;               // Parent pain statement (shown as question)
  emoji: string;
  color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink';
  price: number;
  originalPrice: number;
  ageMin: number;
  ageMax: number;
  ageLabel: string;           // e.g. "Ages 3–5"
  duration: string;           // e.g. "30 days"
  sheetCount: number;
  tag: string;                // e.g. "Save ₹200"
  featured: boolean;          // highlights one bundle as "MOST LOVED"
  description: string;
  whatYouGet: string[];       // what's actually inside (skills/topics)
  bonusExtras: BundleExtra[]; // bundle-specific bonuses
}

export const bundles: Bundle[] = [
  {
    id: 'writing-starter',
    title: '30-Day Writing Starter',
    subtitle: 'From first strokes to full alphabet',
    goal: 'Struggling with pencil grip & letter formation?',
    emoji: '✏️',
    color: 'red',
    price: 299,
    originalPrice: 499,
    ageMin: 3, ageMax: 5,
    ageLabel: 'Ages 3–5',
    duration: '30 days',
    sheetCount: 30,
    tag: 'Save ₹200',
    featured: false,
    description:
      'A day-by-day plan to build writing confidence. Start with scribbles, end with full-alphabet mastery. No pressure, lots of Montessori-inspired play.',
    whatYouGet: [
      'Pre-writing strokes (day 1–7)',
      'Letter tracing A–Z (day 8–26)',
      'First words practice (day 27–30)',
      'Pencil grip correction guide',
    ],
    bonusExtras: [
      { icon: '🖐️', title: 'Pencil Grip Trainer',
        description: 'Printable guides showing the correct 3-finger tripod grip with before/after photos.' },
    ],
  },
  {
    id: 'number-ninja',
    title: 'Number Ninja Pack',
    subtitle: '1 to 20, and first math',
    goal: 'Child can count 1-10 but freezes after that?',
    emoji: '🔢',
    color: 'blue',
    price: 299,
    originalPrice: 499,
    ageMin: 4, ageMax: 6,
    ageLabel: 'Ages 4–6',
    duration: '4 weeks',
    sheetCount: 32,
    tag: 'Save ₹200',
    featured: false,
    description:
      'Move from rote counting to real number sense. Your child will count, compare, order, and start simple addition — with colorful visuals, not drills.',
    whatYouGet: [
      'Numbers 1–20 recognition',
      'Counting with objects',
      'Number sequencing & ordering',
      'Simple addition (sums up to 10)',
    ],
    bonusExtras: [
      { icon: '🎲', title: 'Math-at-Home Play Kit',
        description: '10 printable dice and card games that turn math practice into family time.' },
    ],
  },
  {
    id: 'preschool-ready',
    title: 'Preschool Admission Ready',
    subtitle: 'The Nursery interview companion',
    goal: "Nursery interview coming up and you're nervous?",
    emoji: '🎒',
    color: 'purple',
    price: 399,
    originalPrice: 699,
    ageMin: 3, ageMax: 4,
    ageLabel: 'Ages 3–4',
    duration: '60 days',
    sheetCount: 45,
    tag: 'Save ₹300',
    featured: true,
    description:
      'Everything schools actually test for — designed by Choti after 8 years watching admission rounds. Your child will know colors, shapes, numbers, manners, and be confident answering a stranger\'s questions.',
    whatYouGet: [
      'Core concepts (colors, shapes, numbers)',
      'Self-awareness ("What is your name?")',
      'Life skills (sharing, listening, sitting)',
      'Interview confidence games',
    ],
    bonusExtras: [
      { icon: '🎯', title: 'Admission Interview Prep',
        description: 'The 12 most-asked questions in Nursery interviews — plus how to prep without stressing your child.' },
      { icon: '📋', title: 'School Readiness Checklist',
        description: 'Print this, tick it off, and you\'ll know exactly when your child is ready. Updated yearly.' },
    ],
  },
  {
    id: 'hindi-21-days',
    title: 'Hindi in 21 Days',
    subtitle: 'Varnamala to first words',
    goal: 'Want your child to love Hindi, not just tolerate it?',
    emoji: '📖',
    color: 'pink',
    price: 249,
    originalPrice: 399,
    ageMin: 4, ageMax: 7,
    ageLabel: 'Ages 4–7',
    duration: '3 weeks',
    sheetCount: 25,
    tag: 'Save ₹150',
    featured: false,
    description:
      'Mother tongue done right. A gentle 21-day journey through Varnamala, matras, and reading first Hindi words. Because our language deserves the same love as English.',
    whatYouGet: [
      'Complete Varnamala (अ to ज्ञ)',
      'Matras practice (ा ि ी ु ू े ै ो ौ)',
      'First sight words (माँ, पानी, आम...)',
      'Simple sentence building',
    ],
    bonusExtras: [
      { icon: '🎵', title: 'Choti\'s Hindi Rhymes Audio Pack',
        description: '20 classic Hindi rhymes in Choti\'s voice — perfect for car rides and bedtime.' },
    ],
  },
  {
    id: 'summer-challenge',
    title: 'Summer Learning Challenge',
    subtitle: 'Screen-free activities for 8 weeks',
    goal: 'Summer vacation = bored kids + tired parents?',
    emoji: '☀️',
    color: 'yellow',
    price: 399,
    originalPrice: 699,
    ageMin: 3, ageMax: 7,
    ageLabel: 'Ages 3–7',
    duration: '8 weeks',
    sheetCount: 56,
    tag: 'Save ₹300',
    featured: false,
    description:
      'One activity a day for 8 weeks — a mix of worksheets, crafts, and "take it outside" challenges. Prevents the summer slide, saves your sanity, no phone involved.',
    whatYouGet: [
      '56 daily activities (one per day)',
      'Mix of indoor + outdoor',
      'Weekly "what we did" journal',
      'Grandparent-friendly (can be supervised by anyone)',
    ],
    bonusExtras: [
      { icon: '🎨', title: 'Kitchen Craft Cards',
        description: '15 zero-cost craft ideas using things from your kitchen (rice, atta, leaves, bottle caps).' },
    ],
  },
  {
    id: 'art-adventures',
    title: 'Art Adventures',
    subtitle: 'Creativity without the mess',
    goal: 'Want to spark creativity but dreading the cleanup?',
    emoji: '🎨',
    color: 'green',
    price: 249,
    originalPrice: 399,
    ageMin: 4, ageMax: 7,
    ageLabel: 'Ages 4–7',
    duration: '4 weeks',
    sheetCount: 24,
    tag: 'Save ₹150',
    featured: false,
    description:
      'Guided art projects your child completes on their own. Minimal supervision, minimal mess. Builds confidence and fine motor skills through process-focused art (not "draw this exact thing").',
    whatYouGet: [
      '24 guided art projects',
      'Skill progression: scribble → structure → scenes',
      'Indian craft themes (rangoli, warli, madhubani)',
      'Parent "hands-off" tips',
    ],
    bonusExtras: [
      { icon: '🖼️', title: 'My First Art Portfolio',
        description: 'A printable booklet your child fills up with their best work. Ready to show grandparents at Diwali.' },
    ],
  },
];
