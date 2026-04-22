export interface FreeSheet {
  id: number;
  title: string;
  ageRange: string;
  pages: number;
  color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'teal' | 'orange';
  emoji: string;
  description: string;
  downloads: string; // display-only social proof
}

// 8 completely free sheets — no email, no signup, just download
export const freeSheets: FreeSheet[] = [
  {
    id: 101,
    title: 'Letter A Tracing',
    ageRange: '3–5',
    pages: 4,
    color: 'red',
    emoji: '✏️',
    description: 'A single-letter starter — perfect to test the waters.',
    downloads: '12.4k downloads',
  },
  {
    id: 102,
    title: 'Count 1–10 Fun Page',
    ageRange: '3–5',
    pages: 3,
    color: 'blue',
    emoji: '🔢',
    description: 'Counting with objects kids love.',
    downloads: '9.2k downloads',
  },
  {
    id: 103,
    title: 'Color the Rainbow',
    ageRange: '2–4',
    pages: 2,
    color: 'yellow',
    emoji: '🌈',
    description: 'Learn seven colors, one smiling rainbow at a time.',
    downloads: '15.7k downloads',
  },
  {
    id: 104,
    title: 'Match the Shapes',
    ageRange: '3–5',
    pages: 3,
    color: 'green',
    emoji: '🔷',
    description: 'Circle, square, triangle — match and trace.',
    downloads: '7.8k downloads',
  },
  {
    id: 105,
    title: 'अ से अनार — Hindi Starter',
    ageRange: '4–6',
    pages: 4,
    color: 'orange',
    emoji: '📖',
    description: 'First 4 Hindi letters with pictures and practice lines.',
    downloads: '18.3k downloads',
  },
  {
    id: 106,
    title: 'My Family Colouring',
    ageRange: '2–4',
    pages: 3,
    color: 'pink',
    emoji: '👨‍👩‍👧',
    description: 'Colour your family — a gentle first art activity.',
    downloads: '6.1k downloads',
  },
  {
    id: 107,
    title: 'Simple Dot-to-Dot',
    ageRange: '4–6',
    pages: 3,
    color: 'teal',
    emoji: '🌀',
    description: 'Connect 1–15 dots to reveal hidden pictures.',
    downloads: '8.5k downloads',
  },
  {
    id: 108,
    title: 'Fruits & Vegetables Match',
    ageRange: '3–5',
    pages: 3,
    color: 'purple',
    emoji: '🥕',
    description: 'Match Indian fruits and vegetables to their names.',
    downloads: '5.9k downloads',
  },
];

export interface Sheet {
  id: number;
  title: string;
  ageRange: string;
  pages: number;
  price: number;
  originalPrice?: number;
  color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'teal' | 'orange';
  emoji: string;
  tag?: 'bestseller' | 'new' | 'popular';
  description: string;
}

// Paid packs — the deep, full-curriculum versions
export const sheets: Sheet[] = [
  {
    id: 1,
    title: 'Complete Alphabet A–Z Pack',
    ageRange: '3–5',
    pages: 26,
    price: 49,
    color: 'red',
    emoji: '✏️',
    tag: 'bestseller',
    description: 'Full A–Z with tracing, picture words, and a parent guide.',
  },
  {
    id: 2,
    title: 'Numbers 1–20 Mega Pack',
    ageRange: '4–6',
    pages: 24,
    price: 59,
    color: 'blue',
    emoji: '🔢',
    description: 'Counting, tracing, addition-ready number sense.',
  },
  {
    id: 3,
    title: 'Colors & Shapes Deep Dive',
    ageRange: '2–4',
    pages: 16,
    price: 39,
    color: 'green',
    emoji: '🎨',
    tag: 'popular',
    description: 'Match, sort, colour — with sensory bin printables.',
  },
  {
    id: 4,
    title: 'Hindi Varnamala क–ज्ञ',
    ageRange: '4–7',
    pages: 28,
    price: 69,
    color: 'purple',
    emoji: '📖',
    description: 'Full Hindi alphabet with matra practice + flashcards.',
  },
  {
    id: 5,
    title: 'Cutting & Pasting Skills',
    ageRange: '3–5',
    pages: 20,
    price: 49,
    color: 'orange',
    emoji: '✂️',
    tag: 'new',
    description: 'Fine motor fun with safe-scissor practice.',
  },
  {
    id: 6,
    title: 'Maze & Dot-to-Dot Premium',
    ageRange: '4–7',
    pages: 22,
    price: 49,
    color: 'teal',
    emoji: '🌀',
    description: 'Problem-solving puzzles with rising difficulty.',
  },
  {
    id: 7,
    title: 'My First Sight Words',
    ageRange: '4–6',
    pages: 30,
    price: 69,
    color: 'pink',
    emoji: '👀',
    description: '50 most common English sight words with games.',
  },
  {
    id: 8,
    title: 'Patterns & Sequencing',
    ageRange: '3–6',
    pages: 18,
    price: 49,
    color: 'yellow',
    emoji: '🌈',
    description: 'Pre-math logic through visual patterns.',
  },
];

export interface Bundle {
  id: string;
  title: string;
  emoji: string;
  color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink';
  price: number;
  originalPrice: number;
  items: number;
  description: string;
  tag: string;
  included: string[];
}

export const bundles: Bundle[] = [
  {
    id: 'starter',
    title: 'Starter Pack',
    emoji: '🎒',
    color: 'green',
    price: 99,
    originalPrice: 147,
    items: 3,
    tag: 'Save ₹48',
    description: 'Perfect for first-time buyers. 3 bestsellers in one pack.',
    included: ['Alphabet A–Z Pack', 'Numbers 1–20', 'Colors & Shapes'],
  },
  {
    id: 'school-ready',
    title: 'School-Ready Bundle',
    emoji: '🎓',
    color: 'blue',
    price: 199,
    originalPrice: 324,
    items: 5,
    tag: 'Save ₹125 · MOST LOVED',
    description: "Everything your 4–5 year old needs before Nursery.",
    included: ['All Starter Pack sheets', 'Hindi Varnamala', 'Cutting & Pasting Skills'],
  },
  {
    id: 'mega',
    title: 'Mega Learner Bundle',
    emoji: '🏆',
    color: 'red',
    price: 349,
    originalPrice: 432,
    items: 8,
    tag: 'Save ₹83 · BEST VALUE',
    description: 'Every paid pack we offer. 180+ pages of learning.',
    included: ['All 8 activity packs', 'Bonus: 2 seasonal specials', 'Free future updates for 1 year'],
  },
];
