export interface SeasonalDrop {
  month: string;
  monthNum: number;
  primaryDrop: {
    title: string;
    emoji: string;
    price: string;
    type: 'bundle' | 'sheet' | 'product' | 'event';
    rationale: string;
    color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'teal' | 'orange';
  };
  // Secondary drops are always FREE themed sheets that feed into the primary bundle
  secondaryDrop?: {
    title: string;
    emoji: string;
    count: string; // e.g. "3 free sheets"
  };
  blogPost: string;
  ytTheme: string;
  trafficHint: 'high' | 'peak' | 'normal';
}

export const seasonalCalendar: SeasonalDrop[] = [
  {
    month: 'January',
    monthNum: 1,
    primaryDrop: {
      title: 'New Year Learning Starter Bundle',
      emoji: '🎯',
      price: '₹199',
      type: 'bundle',
      rationale: 'Parents set learning goals for the year. Ride the resolution energy.',
      color: 'blue',
    },
    secondaryDrop: { title: 'Republic Day themed sheets', emoji: '🇮🇳', count: '4 free sheets' },
    blogPost: 'How to set realistic learning goals for your toddler this year',
    ytTheme: 'Republic Day songs + tricolour crafts',
    trafficHint: 'high',
  },
  {
    month: 'February',
    monthNum: 2,
    primaryDrop: {
      title: "Valentine's Family Love Mini-bundle",
      emoji: '💝',
      price: '₹99',
      type: 'bundle',
      rationale: 'Low effort, steady sales. Indian families increasingly celebrate.',
      color: 'pink',
    },
    secondaryDrop: { title: "Kindness activities", emoji: '❤️', count: '3 free sheets' },
    blogPost: 'Teaching kids about family love (the Indian way)',
    ytTheme: 'Family-themed rhymes, gratitude activities',
    trafficHint: 'normal',
  },
  {
    month: 'March',
    monthNum: 3,
    primaryDrop: {
      title: 'Holi Colors & Shapes Bundle',
      emoji: '🌈',
      price: '₹149',
      type: 'bundle',
      rationale: 'Festive tie-in + natural fit with colors/shapes curriculum. High shareability.',
      color: 'red',
    },
    secondaryDrop: { title: 'Holi craft printables', emoji: '🎨', count: '5 free sheets' },
    blogPost: "Holi craft ideas that won't ruin your floors",
    ytTheme: 'Holi songs, color-mixing experiments',
    trafficHint: 'high',
  },
  {
    month: 'April',
    monthNum: 4,
    primaryDrop: {
      title: 'Summer Vacation Mega Bundle 🏆',
      emoji: '☀️',
      price: '₹399',
      type: 'bundle',
      rationale: 'THE biggest sales moment of the year. School ends, 2 months of bored kids.',
      color: 'yellow',
    },
    secondaryDrop: { title: 'Daily summer activity sheets', emoji: '📅', count: '10 free sheets' },
    blogPost: '30 screen-free summer activities (no prep needed)',
    ytTheme: 'Summer activity marathons, ice-cream counting',
    trafficHint: 'peak',
  },
  {
    month: 'May',
    monthNum: 5,
    primaryDrop: {
      title: 'Pre-Nursery Admission Prep Bundle',
      emoji: '🎒',
      price: '₹299',
      type: 'bundle',
      rationale: 'Admission season. Parents stressed about interviews — they pay for structure.',
      color: 'teal',
    },
    secondaryDrop: { title: "Mother's Day gratitude sheets", emoji: '💐', count: '3 free sheets' },
    blogPost: 'What preschools actually test in admission interviews',
    ytTheme: 'School-readiness songs, good-manners rhymes',
    trafficHint: 'peak',
  },
  {
    month: 'June',
    monthNum: 6,
    primaryDrop: {
      title: 'Monsoon Indoor Activity Bundle',
      emoji: '🌧️',
      price: '₹199',
      type: 'bundle',
      rationale: 'School starts + monsoon = indoor play needed. Evergreen pain point.',
      color: 'blue',
    },
    secondaryDrop: { title: 'Back-to-school starter sheets', emoji: '✏️', count: '6 free sheets' },
    blogPost: '25 rainy day activities your toddler will love',
    ytTheme: 'Monsoon rhymes, umbrella crafts',
    trafficHint: 'high',
  },
  {
    month: 'July',
    monthNum: 7,
    primaryDrop: {
      title: 'Hindi Varnamala Deep-dive Bundle',
      emoji: '📖',
      price: '₹249',
      type: 'bundle',
      rationale: 'Quiet month — launch a curriculum-heavy bundle. Low promo cost.',
      color: 'purple',
    },
    secondaryDrop: { title: 'Shapes & sorting sheets', emoji: '🔷', count: '4 free sheets' },
    blogPost: 'Early math milestones: what to expect at 3, 4, and 5',
    ytTheme: 'Shape songs, sorting games',
    trafficHint: 'normal',
  },
  {
    month: 'August',
    monthNum: 8,
    primaryDrop: {
      title: 'Independence Day Patriot Bundle 🇮🇳',
      emoji: '🇮🇳',
      price: '₹149',
      type: 'bundle',
      rationale: 'Massive emotional pull. Viral on WhatsApp. Schools often buy in bulk.',
      color: 'orange',
    },
    secondaryDrop: { title: 'Rakhi craft printables', emoji: '🎗️', count: '3 free sheets' },
    blogPost: 'Teaching Independence Day to a 4-year-old (without boring history)',
    ytTheme: 'Patriotic songs, flag crafts, freedom stories',
    trafficHint: 'peak',
  },
  {
    month: 'September',
    monthNum: 9,
    primaryDrop: {
      title: "Teachers' Day Appreciation Mini-bundle",
      emoji: '🍎',
      price: '₹99',
      type: 'bundle',
      rationale: 'DIY gifts for preschool teachers. Niche but reliable.',
      color: 'green',
    },
    secondaryDrop: { title: 'Ganesh Chaturthi activities', emoji: '🐘', count: '4 free sheets' },
    blogPost: "DIY Teachers' Day gifts kids can actually make",
    ytTheme: 'Teacher appreciation songs, clay Ganesh crafts',
    trafficHint: 'normal',
  },
  {
    month: 'October',
    monthNum: 10,
    primaryDrop: {
      title: 'Navratri & Durga Puja Bundle',
      emoji: '🪔',
      price: '₹149',
      type: 'bundle',
      rationale: 'Regional strength (East/West India huge). Festive family activities.',
      color: 'red',
    },
    secondaryDrop: { title: 'Dussehra story sheets', emoji: '🏹', count: '3 free sheets' },
    blogPost: 'Teaching Ramayana to kids (ages 4–7) — a gentle approach',
    ytTheme: 'Garba songs, Dussehra storytelling',
    trafficHint: 'high',
  },
  {
    month: 'November',
    monthNum: 11,
    primaryDrop: {
      title: 'Diwali Festive Mega Bundle 🪔',
      emoji: '🪔',
      price: '₹499',
      type: 'bundle',
      rationale: 'Peak sales moment #2. Festive mood, year-end budgets, heavy gifting.',
      color: 'yellow',
    },
    secondaryDrop: { title: 'Rangoli templates & diyas', emoji: '🎨', count: '6 free sheets' },
    blogPost: 'Festive learning: 10 ways Diwali teaches kids everything',
    ytTheme: 'Diwali specials daily, diya making, rangoli',
    trafficHint: 'peak',
  },
  {
    month: 'December',
    monthNum: 12,
    primaryDrop: {
      title: 'Year-End Everything Bundle 🎁',
      emoji: '🎁',
      price: '₹599',
      type: 'bundle',
      rationale: 'Gift-giving season + Christmas + parents with bonus money. Premium bundle.',
      color: 'green',
    },
    secondaryDrop: { title: 'Christmas craft sheets', emoji: '🎄', count: '5 free sheets' },
    blogPost: "The ultimate year-end review: your toddler's growth checklist",
    ytTheme: 'Christmas carols, winter crafts, year-end specials',
    trafficHint: 'peak',
  },
];
