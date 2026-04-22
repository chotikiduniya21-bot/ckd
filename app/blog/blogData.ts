export interface BlogPost {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  emoji: string;
  color: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'teal' | 'orange';
  // Internal notes (shown in preview so Ash can understand strategy)
  strategyNote: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Montessori at Home for Indian Parents: A Realistic Starter Guide",
    category: "Parenting",
    readTime: "8 min read",
    date: "Coming soon",
    excerpt: "No imported shelves, no ₹50k kits. What actually works in a 2BHK.",
    emoji: "🏠",
    color: "red",
    strategyNote: "High search volume + evergreen. Pulls in affluent urban parents. Internal links to every activity sheet."
  },
  {
    id: 2,
    title: "Screen Time for Toddlers: The Honest Indian Parent's Playbook",
    category: "Child Development",
    readTime: "6 min read",
    date: "Coming soon",
    excerpt: "WHO says zero. Reality says otherwise. Here's the middle ground.",
    emoji: "📱",
    color: "blue",
    strategyNote: "Viral potential. AdSense goldmine — ed-tech brands bid on this keyword."
  },
  {
    id: 3,
    title: "Why Your 3-Year-Old Isn't 'Behind' in English (And What Matters Instead)",
    category: "Early Education",
    readTime: "5 min read",
    date: "Coming soon",
    excerpt: "A Montessori teacher's rant about India's preschool obsession.",
    emoji: "💬",
    color: "yellow",
    strategyNote: "Chutki's personal POV = trust-building. Emotional share triggers."
  },
  {
    id: 4,
    title: "15 Montessori Toys Under ₹500 on Amazon India (Teacher Tested)",
    category: "Product Guides",
    readTime: "10 min read",
    date: "Coming soon",
    excerpt: "The affiliate-friendly guide — every toy linked, every one genuinely useful.",
    emoji: "🧸",
    color: "pink",
    strategyNote: "Highest affiliate revenue post. Amazon + FirstCry links embedded."
  },
  {
    id: 5,
    title: "Potty Training in Indian Summers: A Week-by-Week Plan",
    category: "Parenting",
    readTime: "7 min read",
    date: "Coming soon",
    excerpt: "Hot months are secretly the best months. Here's the plan.",
    emoji: "🌞",
    color: "orange",
    strategyNote: "Hyper-specific, low competition, seasonal spike every March–May."
  },
  {
    id: 6,
    title: "Hindi First or English First? Here's What Child Development Actually Says",
    category: "Language Learning",
    readTime: "9 min read",
    date: "Coming soon",
    excerpt: "The debate that splits every Indian family dinner table.",
    emoji: "📖",
    color: "green",
    strategyNote: "Controversy-driven. Huge share potential on WhatsApp."
  },
  {
    id: 7,
    title: "How to Handle Tantrums: 8 Things I Learned Teaching 200+ Kids",
    category: "Child Development",
    readTime: "6 min read",
    date: "Coming soon",
    excerpt: "The stuff parenting books won't tell you. From the classroom floor.",
    emoji: "😤",
    color: "purple",
    strategyNote: "Chutki's experience = unbeatable credibility. Search volume: massive."
  },
  {
    id: 8,
    title: "Choosing a Preschool in India: 12 Questions Most Parents Forget to Ask",
    category: "Early Education",
    readTime: "8 min read",
    date: "Coming soon",
    excerpt: "Skip the 'air-conditioned' brochure fluff. Ask these instead.",
    emoji: "🏫",
    color: "teal",
    strategyNote: "Super high CPM — preschools, edtech, and ed-insurance bid on this."
  },
  {
    id: 9,
    title: "Pre-Writing Before Letters: Why Tracing ABC First is Actually Backwards",
    category: "Learning Milestones",
    readTime: "5 min read",
    date: "Coming soon",
    excerpt: "The Montessori sequence no Indian parent was told about.",
    emoji: "✏️",
    color: "red",
    strategyNote: "Perfect lead-in to paid tracing sheets. 1:1 conversion funnel."
  },
  {
    id: 10,
    title: "Rainy Day Indoor Activities for Kids (No Screens, No Mess, No Stress)",
    category: "Activities",
    readTime: "7 min read",
    date: "Coming soon",
    excerpt: "25 ideas you can set up in 5 minutes with stuff already at home.",
    emoji: "🌧️",
    color: "blue",
    strategyNote: "Monsoon traffic spike. Each idea links to a free or paid activity sheet."
  },
];

export const categories = [
  { name: "All", count: 10 },
  { name: "Parenting", count: 2 },
  { name: "Child Development", count: 2 },
  { name: "Early Education", count: 2 },
  { name: "Language Learning", count: 1 },
  { name: "Product Guides", count: 1 },
  { name: "Learning Milestones", count: 1 },
  { name: "Activities", count: 1 },
];
