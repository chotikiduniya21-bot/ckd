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
  { id: 101, title: 'Color the Puppy', ageRange: '2–5', pages: 1, color: 'pink', emoji: '🐶', description: 'A friendly puppy ready to be colored. Builds crayon control and color recognition.', downloads: 'Free download', category: 'Coloring' },
  { id: 102, title: 'Color the Cat', ageRange: '2–5', pages: 1, color: 'orange', emoji: '🐱', description: 'A friendly cat ready to be colored. Builds crayon control and color recognition.', downloads: 'Free download', category: 'Coloring' },
  { id: 103, title: 'Color the Rabbit', ageRange: '2–5', pages: 1, color: 'pink', emoji: '🐰', description: 'A friendly rabbit ready to be colored. Builds crayon control and color recognition.', downloads: 'Free download', category: 'Coloring' },
  { id: 104, title: 'Color the Cow', ageRange: '2–5', pages: 1, color: 'yellow', emoji: '🐄', description: 'A friendly cow ready to be colored. Builds crayon control and color recognition.', downloads: 'Free download', category: 'Coloring' },
  { id: 105, title: 'Color the Bear', ageRange: '2–5', pages: 1, color: 'orange', emoji: '🐻', description: 'A friendly bear ready to be colored. Builds crayon control and color recognition.', downloads: 'Free download', category: 'Coloring' },
  { id: 106, title: 'Color the Monkey', ageRange: '2–5', pages: 1, color: 'yellow', emoji: '🐵', description: 'A friendly monkey ready to be colored. Builds crayon control and color recognition.', downloads: 'Free download', category: 'Coloring' },
  { id: 107, title: 'Color the Elephant', ageRange: '2–5', pages: 1, color: 'purple', emoji: '🐘', description: 'A friendly elephant ready to be colored. Builds crayon control and color recognition.', downloads: 'Free download', category: 'Coloring' },
  { id: 108, title: 'Color the Lion', ageRange: '2–5', pages: 1, color: 'orange', emoji: '🦁', description: 'A friendly lion ready to be colored. Builds crayon control and color recognition.', downloads: 'Free download', category: 'Coloring' },
  { id: 109, title: 'Color the Giraffe', ageRange: '2–5', pages: 1, color: 'yellow', emoji: '🦒', description: 'A friendly giraffe ready to be colored. Builds crayon control and color recognition.', downloads: 'Free download', category: 'Coloring' },
  { id: 110, title: 'Color the Kangaroo', ageRange: '2–5', pages: 1, color: 'red', emoji: '🦘', description: 'A friendly kangaroo ready to be colored. Builds crayon control and color recognition.', downloads: 'Free download', category: 'Coloring' },
  { id: 111, title: 'Count the fruits', ageRange: '3–6', pages: 1, color: 'red', emoji: '🍎', description: 'Count different fruits on the page. Builds early number sense and categorization.', downloads: 'Free download', category: 'Counting' },
  { id: 112, title: 'Count the vehicles', ageRange: '3–6', pages: 1, color: 'blue', emoji: '🚗', description: 'Count different vehicles on the page. Builds early number sense and categorization.', downloads: 'Free download', category: 'Counting' },
  { id: 113, title: 'Count the toys', ageRange: '3–6', pages: 1, color: 'pink', emoji: '🧸', description: 'Count different toys on the page. Builds early number sense and categorization.', downloads: 'Free download', category: 'Counting' },
  { id: 114, title: 'Count the shapes', ageRange: '3–6', pages: 1, color: 'teal', emoji: '🔷', description: 'Count different shapes on the page. Builds early number sense and categorization.', downloads: 'Free download', category: 'Counting' },
  { id: 115, title: 'Count the clothes', ageRange: '3–6', pages: 1, color: 'pink', emoji: '👕', description: 'Count different clothes on the page. Builds early number sense and categorization.', downloads: 'Free download', category: 'Counting' },
  { id: 116, title: 'Count the treats', ageRange: '3–6', pages: 1, color: 'orange', emoji: '🍪', description: 'Count different treats on the page. Builds early number sense and categorization.', downloads: 'Free download', category: 'Counting' },
  { id: 117, title: 'Count the drinks', ageRange: '3–6', pages: 1, color: 'blue', emoji: '🥤', description: 'Count different drinks on the page. Builds early number sense and categorization.', downloads: 'Free download', category: 'Counting' },
  { id: 118, title: 'Count the objects', ageRange: '3–6', pages: 1, color: 'purple', emoji: '📦', description: 'Count different objects on the page. Builds early number sense and categorization.', downloads: 'Free download', category: 'Counting' },
  { id: 119, title: 'Count the animals', ageRange: '3–6', pages: 1, color: 'green', emoji: '🐾', description: 'Count different animals on the page. Builds early number sense and categorization.', downloads: 'Free download', category: 'Counting' },
  { id: 120, title: 'Count the insects', ageRange: '3–6', pages: 1, color: 'red', emoji: '🐞', description: 'Count different insects on the page. Builds early number sense and categorization.', downloads: 'Free download', category: 'Counting' },
  { id: 121, title: 'Trace the number 1', ageRange: '3–6', pages: 1, color: 'red', emoji: '✏️', description: 'Practice tracing the number 1. Builds pre-writing skills and number recognition.', downloads: 'Free download', category: 'Number Tracing' },
  { id: 122, title: 'Trace the number 2', ageRange: '3–6', pages: 1, color: 'orange', emoji: '✏️', description: 'Practice tracing the number 2. Builds pre-writing skills and number recognition.', downloads: 'Free download', category: 'Number Tracing' },
  { id: 123, title: 'Trace the number 3', ageRange: '3–6', pages: 1, color: 'yellow', emoji: '✏️', description: 'Practice tracing the number 3. Builds pre-writing skills and number recognition.', downloads: 'Free download', category: 'Number Tracing' },
  { id: 124, title: 'Trace the number 4', ageRange: '3–6', pages: 1, color: 'green', emoji: '✏️', description: 'Practice tracing the number 4. Builds pre-writing skills and number recognition.', downloads: 'Free download', category: 'Number Tracing' },
  { id: 125, title: 'Trace the number 5', ageRange: '3–6', pages: 1, color: 'teal', emoji: '✏️', description: 'Practice tracing the number 5. Builds pre-writing skills and number recognition.', downloads: 'Free download', category: 'Number Tracing' },
  { id: 126, title: 'Trace the number 6', ageRange: '3–6', pages: 1, color: 'blue', emoji: '✏️', description: 'Practice tracing the number 6. Builds pre-writing skills and number recognition.', downloads: 'Free download', category: 'Number Tracing' },
  { id: 127, title: 'Trace the number 7', ageRange: '3–6', pages: 1, color: 'purple', emoji: '✏️', description: 'Practice tracing the number 7. Builds pre-writing skills and number recognition.', downloads: 'Free download', category: 'Number Tracing' },
  { id: 128, title: 'Trace the number 8', ageRange: '3–6', pages: 1, color: 'pink', emoji: '✏️', description: 'Practice tracing the number 8. Builds pre-writing skills and number recognition.', downloads: 'Free download', category: 'Number Tracing' },
  { id: 129, title: 'Trace the number 9', ageRange: '3–6', pages: 1, color: 'red', emoji: '✏️', description: 'Practice tracing the number 9. Builds pre-writing skills and number recognition.', downloads: 'Free download', category: 'Number Tracing' },
  { id: 130, title: 'Trace the number 10', ageRange: '3–6', pages: 1, color: 'orange', emoji: '✏️', description: 'Practice tracing the number 10. Builds pre-writing skills and number recognition.', downloads: 'Free download', category: 'Number Tracing' },
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
      'Everything schools actually test for — designed by Choti based on her experience preparing children for school admissions. Your child will know colors, shapes, numbers, manners, and be confident answering a stranger\'s questions.',
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
