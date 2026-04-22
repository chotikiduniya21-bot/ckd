// ==========================================================================
// All individual sheets are FREE. Bundles are paid because they add structure,
// guides, support, and certificates — not because they unlock sheets.
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
  category: string; // for filtering later
}

// Launch set (first batch): 12 sheets across core categories.
// Chutki will add 10-15 new free sheets per week post-launch.
export const freeSheets: FreeSheet[] = [
  // Letters
  { id: 101, title: 'Letter A Tracing', ageRange: '3–5', pages: 4,
    color: 'red', emoji: '✏️', description: 'Single-letter starter with picture words.',
    downloads: '12.4k downloads', category: 'Letters' },
  { id: 102, title: 'Letters A–E Practice', ageRange: '3–5', pages: 8,
    color: 'pink', emoji: '📝', description: 'Your first five letters with tracing + matching.',
    downloads: '8.9k downloads', category: 'Letters' },

  // Numbers
  { id: 103, title: 'Count 1–10 Fun Page', ageRange: '3–5', pages: 3,
    color: 'blue', emoji: '🔢', description: 'Counting with objects kids love.',
    downloads: '9.2k downloads', category: 'Numbers' },
  { id: 104, title: 'Numbers 1–20', ageRange: '4–6', pages: 6,
    color: 'teal', emoji: '🔟', description: 'Count, trace, and simple addition hints.',
    downloads: '6.7k downloads', category: 'Numbers' },

  // Colors & Shapes
  { id: 105, title: 'Color the Rainbow', ageRange: '2–4', pages: 2,
    color: 'yellow', emoji: '🌈', description: 'Seven colors, one smiling rainbow.',
    downloads: '15.7k downloads', category: 'Colors & Shapes' },
  { id: 106, title: 'Match the Shapes', ageRange: '3–5', pages: 3,
    color: 'green', emoji: '🔷', description: 'Circle, square, triangle — match and trace.',
    downloads: '7.8k downloads', category: 'Colors & Shapes' },

  // Hindi
  { id: 107, title: 'अ से अनार — Hindi Starter', ageRange: '4–6', pages: 4,
    color: 'orange', emoji: '📖', description: 'First 4 Hindi letters with pictures.',
    downloads: '18.3k downloads', category: 'Hindi' },
  { id: 108, title: 'Hindi Numbers १–१०', ageRange: '4–6', pages: 4,
    color: 'red', emoji: '१', description: 'Hindi numerals with counting objects.',
    downloads: '11.2k downloads', category: 'Hindi' },

  // Life Skills
  { id: 109, title: 'My Family Colouring', ageRange: '2–4', pages: 3,
    color: 'pink', emoji: '👨‍👩‍👧', description: 'A gentle first art activity.',
    downloads: '6.1k downloads', category: 'Life Skills' },
  { id: 110, title: 'Fruits & Vegetables Match', ageRange: '3–5', pages: 3,
    color: 'purple', emoji: '🥕', description: 'Match Indian fruits and veggies to names.',
    downloads: '5.9k downloads', category: 'Life Skills' },

  // Fine Motor
  { id: 111, title: 'Simple Dot-to-Dot', ageRange: '4–6', pages: 3,
    color: 'teal', emoji: '🌀', description: 'Connect 1–15 dots to reveal pictures.',
    downloads: '8.5k downloads', category: 'Fine Motor' },
  { id: 112, title: 'Tracing Lines & Curves', ageRange: '3–5', pages: 4,
    color: 'blue', emoji: '✍️', description: 'Pre-writing practice before letters.',
    downloads: '10.1k downloads', category: 'Fine Motor' },
];

// ==========================================================================
// BUNDLE EXTRAS — the real value add
// ==========================================================================
// Every bundle includes these tangible extras that free sheets don't have.
// This is what parents actually pay for.
// ==========================================================================

export interface BundleExtra {
  icon: string;
  title: string;
  description: string;
}

// Universal extras every bundle includes
export const universalExtras: BundleExtra[] = [
  {
    icon: '📘',
    title: 'Parent Guide',
    description: 'Page-by-page teaching notes. How to introduce each sheet, what skills it builds, common mistakes to avoid.',
  },
  {
    icon: '🗺️',
    title: 'Learning Sequence Map',
    description: 'A visual roadmap showing which sheet to do in what order — no more guessing.',
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
    description: 'Private group where you can ask Chutki questions. Monthly Q&A video calls included.',
  },
  {
    icon: '🔄',
    title: 'Lifetime Updates',
    description: "When we add new sheets to a bundle's theme, you get them free — forever.",
  },
];

// ==========================================================================
// BUNDLES — sold on the structure, not the content
// ==========================================================================

export interface Bundle {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink';
  price: number;
  originalPrice: number;
  ageFocus: string;
  sheetCount: number;
  tag: string;
  description: string;
  // What themes/topics are included
  topics: string[];
  // Exclusive extras unique to this bundle (beyond universal)
  bonusExtras: BundleExtra[];
}

export const bundles: Bundle[] = [
  {
    id: 'little-explorer',
    title: 'Little Explorer',
    subtitle: 'First steps into learning',
    emoji: '🌱',
    color: 'green',
    price: 149,
    originalPrice: 249,
    ageFocus: 'Ages 2–4',
    sheetCount: 20,
    tag: 'Save ₹100',
    description: 'Gentle first activities for toddlers. Colors, shapes, simple matching — no pressure, lots of play.',
    topics: ['Colors & Shapes', 'Basic Matching', 'Fine Motor Pre-writing', 'Art & Colouring'],
    bonusExtras: [
      { icon: '🎨', title: 'Sensory Play Ideas',
        description: '10 hands-on activity cards to pair with sheets — using rice, playdough, beads, and stuff you already have.' },
    ],
  },
  {
    id: 'school-ready',
    title: 'School-Ready',
    subtitle: 'The Nursery admission companion',
    emoji: '🎒',
    color: 'blue',
    price: 299,
    originalPrice: 499,
    ageFocus: 'Ages 3–5',
    sheetCount: 40,
    tag: 'Save ₹200 · MOST LOVED',
    description: 'Everything your child needs before Nursery. Alphabet, numbers, fine motor skills, life skills — the Montessori way.',
    topics: ['Alphabet A–Z', 'Numbers 1–20', 'Shapes & Patterns', 'Pre-writing Skills', 'Life Skills'],
    bonusExtras: [
      { icon: '🎯', title: 'Admission Interview Prep',
        description: 'A PDF covering the 12 most-asked questions in Nursery interviews — plus how to prep your child without stressing them out.' },
      { icon: '📅', title: '60-day Daily Plan',
        description: 'A day-by-day schedule so you never wonder "what should we do today?"' },
    ],
  },
  {
    id: 'hindi-first',
    title: 'Hindi First',
    subtitle: 'Mother tongue, made joyful',
    emoji: '📖',
    color: 'red',
    price: 249,
    originalPrice: 399,
    ageFocus: 'Ages 4–7',
    sheetCount: 30,
    tag: 'Save ₹150',
    description: 'The complete Hindi foundation — Varnamala, matras, simple words, and sentence building. Because Hindi deserves as much love as English.',
    topics: ['Complete Varnamala', 'Matras Practice', 'First Hindi Words', 'Sentence Building'],
    bonusExtras: [
      { icon: '🎵', title: 'Hindi Rhymes Audio Pack',
        description: 'Chutki-recorded audio for 20 classic Hindi rhymes — perfect for car rides and bedtime.' },
    ],
  },
  {
    id: 'complete-learner',
    title: 'Complete Learner',
    subtitle: 'Everything, beautifully organised',
    emoji: '🏆',
    color: 'purple',
    price: 499,
    originalPrice: 899,
    ageFocus: 'Ages 2–7',
    sheetCount: 80,
    tag: 'Save ₹400 · BEST VALUE',
    description: 'Every sheet, every guide, every bonus — in one curated package. Designed for families who want it all, done right.',
    topics: ['All 4 bundles combined', 'Covers ages 2 to 7', 'English + Hindi + Life Skills'],
    bonusExtras: [
      { icon: '👑', title: 'Everything in all bundles',
        description: 'Every bonus from Little Explorer, School-Ready, and Hindi First — included.' },
      { icon: '📞', title: 'One 30-min call with Chutki',
        description: 'A personalized 1-on-1 video call to discuss your child&apos;s learning journey.' },
      { icon: '🎁', title: 'Quarterly surprise drops',
        description: 'Every 3 months, get a new themed sheet pack — free, yours, delivered to your email.' },
    ],
  },
];
