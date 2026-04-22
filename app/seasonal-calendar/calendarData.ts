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
  secondaryDrop?: {
    title: string;
    emoji: string;
    price: string;
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
      title: 'New Year Learning Resolution Pack',
      emoji: '🎯',
      price: '₹199',
      type: 'bundle',
      rationale: 'Parents set learning goals for the year. Ride the resolution energy.',
      color: 'blue',
    },
    secondaryDrop: { title: 'Republic Day Craft Sheets', emoji: '🇮🇳', price: '₹39' },
    blogPost: 'How to set realistic learning goals for your toddler this year',
    ytTheme: 'Republic Day songs + tricolour crafts',
    trafficHint: 'high',
  },
  {
    month: 'February',
    monthNum: 2,
    primaryDrop: {
      title: 'Valentine\'s Family Love Pack',
      emoji: '💝',
      price: '₹49',
      type: 'sheet',
      rationale: 'Mini drop — Indian families increasingly celebrate. Low effort, steady sales.',
      color: 'pink',
    },
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
    secondaryDrop: { title: 'End-of-School Summary Sheets', emoji: '📊', price: '₹59' },
    blogPost: 'Holi craft ideas that won\'t ruin your floors',
    ytTheme: 'Holi songs, color-mixing experiments',
    trafficHint: 'high',
  },
  {
    month: 'April',
    monthNum: 4,
    primaryDrop: {
      title: 'Summer Vacation Mega Pack 🏆',
      emoji: '☀️',
      price: '₹299',
      type: 'bundle',
      rationale: 'THE biggest sales moment of the year. School ends, 2 months of bored kids. Parents will pay.',
      color: 'yellow',
    },
    secondaryDrop: { title: 'Daily Summer Activity Planner', emoji: '📅', price: '₹89' },
    blogPost: '30 screen-free summer activities (no prep needed)',
    ytTheme: 'Summer activity marathons, ice-cream counting',
    trafficHint: 'peak',
  },
  {
    month: 'May',
    monthNum: 5,
    primaryDrop: {
      title: 'Pre-Nursery Admission Prep Kit',
      emoji: '🎒',
      price: '₹249',
      type: 'bundle',
      rationale: 'Admission season in many boards. Parents stressed about interviews.',
      color: 'teal',
    },
    secondaryDrop: { title: 'Mother\'s Day Gratitude Sheets', emoji: '💐', price: '₹49' },
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
    secondaryDrop: { title: 'Back-to-School Starter Pack', emoji: '✏️', price: '₹149' },
    blogPost: '25 rainy day activities your toddler will love',
    ytTheme: 'Monsoon rhymes, umbrella crafts',
    trafficHint: 'high',
  },
  {
    month: 'July',
    monthNum: 7,
    primaryDrop: {
      title: 'Shapes & Sorting Deep Dive',
      emoji: '🔷',
      price: '₹69',
      type: 'sheet',
      rationale: 'Quiet month — launch a curriculum-heavy pack. Low promo month.',
      color: 'purple',
    },
    blogPost: 'Early math milestones: what to expect at 3, 4, and 5',
    ytTheme: 'Shape songs, sorting games',
    trafficHint: 'normal',
  },
  {
    month: 'August',
    monthNum: 8,
    primaryDrop: {
      title: 'Independence Day Patriot Pack 🇮🇳',
      emoji: '🇮🇳',
      price: '₹99',
      type: 'bundle',
      rationale: 'Massive emotional pull. Viral on WhatsApp. Schools often buy in bulk.',
      color: 'orange',
    },
    secondaryDrop: { title: 'Rakhi Craft Sheets', emoji: '🎗️', price: '₹49' },
    blogPost: 'Teaching Independence Day to a 4-year-old (without boring history)',
    ytTheme: 'Patriotic songs, flag crafts, freedom stories',
    trafficHint: 'peak',
  },
  {
    month: 'September',
    monthNum: 9,
    primaryDrop: {
      title: 'Teachers\' Day Gift Cards & Crafts',
      emoji: '🍎',
      price: '₹49',
      type: 'sheet',
      rationale: 'Parents want DIY gifts for preschool teachers. Niche but reliable.',
      color: 'green',
    },
    secondaryDrop: { title: 'Ganesh Chaturthi Activity Sheets', emoji: '🐘', price: '₹59' },
    blogPost: 'DIY Teachers\' Day gifts kids can actually make',
    ytTheme: 'Teacher appreciation songs, clay Ganesh crafts',
    trafficHint: 'normal',
  },
  {
    month: 'October',
    monthNum: 10,
    primaryDrop: {
      title: 'Navratri & Durga Puja Craft Bundle',
      emoji: '🪔',
      price: '₹149',
      type: 'bundle',
      rationale: 'Regional strength (East/West India huge). Festive family activities.',
      color: 'red',
    },
    secondaryDrop: { title: 'Dussehra Story Sheets', emoji: '🏹', price: '₹49' },
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
      price: '₹399',
      type: 'bundle',
      rationale: 'Peak sales moment #2 of the year. Festive mood, year-end budgets, gifting.',
      color: 'yellow',
    },
    secondaryDrop: { title: 'Diwali Rangoli Templates', emoji: '🎨', price: '₹69' },
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
      price: '₹499',
      type: 'bundle',
      rationale: 'Gift-giving season + Christmas + parents with bonus money. Premium bundle.',
      color: 'green',
    },
    secondaryDrop: { title: 'Christmas Craft Kit', emoji: '🎄', price: '₹99' },
    blogPost: 'The ultimate year-end review: your toddler\'s growth checklist',
    ytTheme: 'Christmas carols, winter crafts, year-end specials',
    trafficHint: 'peak',
  },
];
