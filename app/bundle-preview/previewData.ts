import type { Bundle } from '../activity-sheets/sheetsData';

// Sample content that varies per bundle.
// The preview page layout is identical across bundles — only the sample
// text/headlines inside each preview section change.

export interface BundlePreview {
  // Parent Guide sample — shown as a 2-page document preview
  guideSampleTitle: string;
  guideSampleLessonLabel: string;   // e.g. "Day 1 — Holding the pencil"
  guideSampleObjective: string;
  guideSampleSteps: string[];
  guideSampleWatchFor: string[];
  guideSampleNote: string;

  // Daily schedule sample — first week shown
  scheduleSampleWeekLabel: string;  // e.g. "Week 1 — Getting ready"
  scheduleSampleDays: Array<{ day: string; title: string; duration: string }>;

  // Certificate
  certMessage: string;

  // WhatsApp conversation preview
  whatsappSamples: Array<{ from: 'parent' | 'chutki'; text: string; time: string }>;
}

export const bundlePreviews: Record<string, BundlePreview> = {
  'writing-starter': {
    guideSampleTitle: 'The Writing Starter Parent Guide',
    guideSampleLessonLabel: 'Day 1 — Tripod pencil grip',
    guideSampleObjective: "Today we'll help your child discover the correct 3-finger pencil grip. This one thing, done right, sets up years of comfortable writing.",
    guideSampleSteps: [
      "Sit together at a flat surface. Show your child how you hold your pencil.",
      "Give them a short pencil (no more than 3 inches) — it forces the correct grip naturally.",
      "Place a crumpled tissue in their palm — they'll automatically use just 3 fingers.",
      "Let them scribble freely on the sheet for 5 minutes. No corrections today.",
    ],
    guideSampleWatchFor: [
      "Whole-fist grip — don't correct yet, just model the tripod grip yourself.",
      "Extreme pressure — offer a softer pencil (2B instead of HB).",
      "Frustration after 10 min — stop. Come back tomorrow.",
    ],
    guideSampleNote: "Tip from Chutki: Children often hold a pencil wrong because adults around them do too. Check your own grip — that's the one they'll copy.",

    scheduleSampleWeekLabel: 'Week 1 — Pre-writing foundations',
    scheduleSampleDays: [
      { day: 'Monday',    title: 'Tripod pencil grip + free scribbles', duration: '10 min' },
      { day: 'Tuesday',   title: 'Straight lines — up & down',           duration: '15 min' },
      { day: 'Wednesday', title: 'Horizontal lines — left to right',     duration: '15 min' },
      { day: 'Thursday',  title: 'Slanted lines — both directions',      duration: '15 min' },
      { day: 'Friday',    title: 'Curves — C and backward C',            duration: '15 min' },
      { day: 'Saturday',  title: 'Circles — small and big',              duration: '20 min' },
      { day: 'Sunday',    title: 'Rest day · review week 1 work',        duration: '—' },
    ],

    certMessage: 'for completing 30 days of the Writing Starter journey\nwith confidence, patience, and a beautiful pencil grip.',

    whatsappSamples: [
      { from: 'parent', text: 'Hi Chutki didi, my 4yo holds pencil with whole fist. Tried the tissue trick, still doing it. Help?', time: '9:14 AM' },
      { from: 'chutki', text: 'That is very normal at 4! Do not force it. Switch to thick crayons for 1 week, then try tripod again. 90% kids self-correct by age 5.', time: '9:22 AM' },
      { from: 'parent', text: 'Oh interesting! Will try. He loves crayons anyway 😊', time: '9:24 AM' },
      { from: 'chutki', text: 'Exactly — let the grip come naturally. Writing is a 2-year journey, not 30 days. Your job is just to keep it fun 💛', time: '9:26 AM' },
    ],
  },

  'number-ninja': {
    guideSampleTitle: 'The Number Ninja Parent Guide',
    guideSampleLessonLabel: 'Day 1 — Counting objects (not just reciting)',
    guideSampleObjective: "Most kids can recite '1,2,3...10' by rote. But can they touch 5 apples and say 'five'? Today's sheet makes this real.",
    guideSampleSteps: [
      "Before opening the sheet, put 5 small things on the table (grapes, buttons, coins).",
      "Ask: 'How many?' Let them touch-count one by one. Applaud any effort.",
      "Now open the sheet. Do the same thing on paper — point and count.",
      "Write the number '5' together at the end. Let them draw 5 circles next to it.",
    ],
    guideSampleWatchFor: [
      "Skipping numbers while counting — they might know the sequence but not objects.",
      "Saying the next number before touching — slow it down together.",
      "Confusion after 5 — stop at 5 today. Ninjas level up slowly.",
    ],
    guideSampleNote: "Tip from Chutki: 'Touch-counting' is more important than fast counting. A child who can slowly count 5 real things understands numbers. A child who recites 1-20 quickly may not.",

    scheduleSampleWeekLabel: 'Week 1 — Numbers 1 to 5',
    scheduleSampleDays: [
      { day: 'Monday',    title: 'Touch-counting up to 5',       duration: '15 min' },
      { day: 'Tuesday',   title: 'Writing the numeral 1',        duration: '15 min' },
      { day: 'Wednesday', title: 'Writing the numeral 2',        duration: '15 min' },
      { day: 'Thursday',  title: 'Writing 3 & matching objects', duration: '20 min' },
      { day: 'Friday',    title: 'Writing 4 + tracing practice', duration: '20 min' },
      { day: 'Saturday',  title: 'Writing 5 + counting game',    duration: '20 min' },
      { day: 'Sunday',    title: 'Rest + family counting walk',  duration: '—' },
    ],

    certMessage: 'for completing 35 sheets of the Number Ninja Pack\nwith curiosity, persistence, and ninja-level counting skills.',

    whatsappSamples: [
      { from: 'parent', text: 'Chutki ji, my daughter can count to 20 but gets confused when I ask to give me 4 spoons. She gives random number. Why?', time: '6:02 PM' },
      { from: 'chutki', text: 'This is called "rote vs cardinal counting" — super common. She knows the song but not the meaning yet. Day 1 sheet will fix exactly this!', time: '6:10 PM' },
      { from: 'parent', text: 'Oh wow, I thought she was being careless 😅', time: '6:11 PM' },
      { from: 'chutki', text: 'Haha never careless, just a different skill. Give her 2 weeks of Number Ninja and you will see. 💛', time: '6:14 PM' },
    ],
  },

  'preschool-ready': {
    guideSampleTitle: 'The Preschool Admission Parent Guide',
    guideSampleLessonLabel: 'Day 1 — "What is your name?" with confidence',
    guideSampleObjective: "The #1 thing schools look for: eye contact + clear speech. Not answers — just whether your child can respond to a stranger without freezing.",
    guideSampleSteps: [
      "Sit across from your child (not next to) — this mimics the interview seat.",
      "Ask: 'Hello beta, what is your name?' with a warm smile.",
      "If they mumble, don't correct. Say: 'My name is Amma. What is yours?'",
      "Practice 3 questions only: name, age, one favourite thing. That's enough for today.",
    ],
    guideSampleWatchFor: [
      "Hiding behind you — practice with a family member they don't see daily.",
      "Whispering answers — ask them to 'tell the toy' instead of you. Often works.",
      "Refusing completely — do it through play. Pretend to be a shopkeeper.",
    ],
    guideSampleNote: "Tip from Chutki: Schools are not testing your child's knowledge. They are watching if your child can function in a new setting for 10 minutes. That's it.",

    scheduleSampleWeekLabel: 'Week 1 — Social readiness',
    scheduleSampleDays: [
      { day: 'Monday',    title: 'Name, age, family',            duration: '15 min' },
      { day: 'Tuesday',   title: 'Colours & simple shapes',      duration: '20 min' },
      { day: 'Wednesday', title: 'Pointing out body parts',      duration: '15 min' },
      { day: 'Thursday',  title: 'Counting up to 5 objects',     duration: '20 min' },
      { day: 'Friday',    title: 'Greetings — Namaste / Hello',  duration: '15 min' },
      { day: 'Saturday',  title: 'Mock mini interview (fun!)',   duration: '15 min' },
      { day: 'Sunday',    title: 'Park day · no practice',       duration: '—' },
    ],

    certMessage: 'for 60 days of preparation and big-school readiness.\nMay your first day be full of joy and friendships.',

    whatsappSamples: [
      { from: 'parent', text: 'Interview is in 10 days 😨 My son gets very shy. Will the bundle help in time?', time: '8:45 AM' },
      { from: 'chutki', text: 'Yes, 10 days is plenty! Focus on week 1 (social) + week 6 (mock interview). Skip other weeks for now, come back to them later.', time: '8:52 AM' },
      { from: 'parent', text: 'Thank you so much. Should I be worried he\'ll freeze?', time: '8:54 AM' },
      { from: 'chutki', text: 'Listen — even if he freezes, schools are kind. They understand. Your job is to make HIM feel safe. He will do fine ❤️', time: '8:56 AM' },
    ],
  },

  'hindi-21-days': {
    guideSampleTitle: 'The Hindi in 21 Days Parent Guide',
    guideSampleLessonLabel: 'Day 1 — अ से अनार (A se Anar)',
    guideSampleObjective: "Start Hindi the way your grandmother started English — with a picture, a sound, and a word. No memorization, no pressure.",
    guideSampleSteps: [
      "Show the sheet. Point to 'अ' and say it slowly: 'aaa' (like 'uh' in English).",
      "Point to the pomegranate picture. Say: 'अनार'. Let them repeat.",
      "Now say together: 'अ से अनार' (A se Anar).",
      "Let them trace the letter, colour the pomegranate. That's it for day 1.",
    ],
    guideSampleWatchFor: [
      "Confusing अ with English 'A' — they're different sounds. Don't correct in day 1.",
      "Asking 'Why Hindi, Mumma?' — answer: 'Because Nani speaks it with love.'",
      "Getting bored — Hindi should be 5 min of joy, not 20 min of drilling.",
    ],
    guideSampleNote: "Tip from Chutki: If you're not confident in Hindi yourself, that's okay. Do it *with* your child, not *for* them. Children love learning alongside a struggling parent.",

    scheduleSampleWeekLabel: 'Week 1 — Varnamala part 1 (अ to औ)',
    scheduleSampleDays: [
      { day: 'Monday',    title: 'अ से अनार · आ से आम',      duration: '10 min' },
      { day: 'Tuesday',   title: 'इ से इमली · ई से ईख',       duration: '10 min' },
      { day: 'Wednesday', title: 'उ से उल्लू · ऊ से ऊन',      duration: '10 min' },
      { day: 'Thursday',  title: 'ऋ से ऋषि · ए से एड़ी',      duration: '10 min' },
      { day: 'Friday',    title: 'ऐ से ऐनक · ओ से ओखली',      duration: '10 min' },
      { day: 'Saturday',  title: 'औ से औरत · week 1 review',   duration: '15 min' },
      { day: 'Sunday',    title: 'Hindi rhyme with family',      duration: '—' },
    ],

    certMessage: 'for learning सारी वर्णमाला in 21 days\nwith curiosity, rhythm, and love for our mother tongue.',

    whatsappSamples: [
      { from: 'parent', text: 'Chutki ji, my daughter was born in Bangalore, speaks only English at home. Is it too late for Hindi?', time: '7:30 PM' },
      { from: 'chutki', text: 'Not at all! At 4-5 she can still pick up Hindi like a native speaker. Just 10 min a day, consistently. That\'s all.', time: '7:38 PM' },
      { from: 'parent', text: 'What if I don\'t speak Hindi well myself?', time: '7:39 PM' },
      { from: 'chutki', text: 'Use the audio pack in the bundle — I read every letter. You learn together with her. Double bonus 😄', time: '7:42 PM' },
    ],
  },

  'summer-challenge': {
    guideSampleTitle: 'The Summer Challenge Parent Guide',
    guideSampleLessonLabel: 'Day 1 — "Draw your room from above"',
    guideSampleObjective: "It's summer vacation, not summer school. Today we get the creative brain going with a fun observation challenge. No right answers.",
    guideSampleSteps: [
      "Ask your child to imagine they're a bird on the ceiling looking down at their room.",
      "Give them today's sheet with a blank outline of a room and ask them to draw what they'd see.",
      "Don't help with proportions. Crooked beds, giant toys — it's all correct.",
      "At the end, ask them to tell you about their drawing. Write their words on the back.",
    ],
    guideSampleWatchFor: [
      "\"I can't draw\" — say: 'Nobody draws better than you for YOUR room. Try one thing.'",
      "Copying siblings — separate them today. Bird's-eye views should be personal.",
      "Finishing in 2 minutes — 'Can you add what's under the bed?' works every time.",
    ],
    guideSampleNote: "Tip from Chutki: Summer sheets should never feel like school. If your child isn't smiling by minute 5, stop. We'll try again tomorrow.",

    scheduleSampleWeekLabel: 'Week 1 — Summer warmup',
    scheduleSampleDays: [
      { day: 'Monday',    title: 'Bird\'s-eye room drawing',        duration: '20 min' },
      { day: 'Tuesday',   title: 'Balcony scavenger hunt (outdoor)', duration: '30 min' },
      { day: 'Wednesday', title: 'Make a paper ice-cream menu',       duration: '25 min' },
      { day: 'Thursday',  title: 'Colour by number — mango theme',    duration: '20 min' },
      { day: 'Friday',    title: 'Story cubes — roll & tell a story', duration: '25 min' },
      { day: 'Saturday',  title: 'Family photo hunt (older sibling)', duration: '30 min' },
      { day: 'Sunday',    title: 'No activity · weekly reward sheet', duration: '—' },
    ],

    certMessage: 'for completing 56 days of screen-free summer learning\nwith curiosity, boredom turned into fun, and zero tantrums.',

    whatsappSamples: [
      { from: 'parent', text: 'Chutki didi, summer start hua but mera beta bore ho raha 2 ghante me. Kya karun?', time: '11:15 AM' },
      { from: 'chutki', text: 'Haha, classic! Summer boredom is actually good — that\'s when creativity starts. Let him be bored for 20 min first. Then suggest today\'s sheet.', time: '11:22 AM' },
      { from: 'parent', text: 'Lekin guilt feel hota hai screen bina 😅', time: '11:24 AM' },
      { from: 'chutki', text: 'Wo guilt humari generation ka hai. Bachpan mein hum bhi bore hote the, kuch nahi hua 😄 Trust the process!', time: '11:27 AM' },
    ],
  },

  'art-adventures': {
    guideSampleTitle: 'The Art Adventures Parent Guide',
    guideSampleLessonLabel: 'Day 1 — Finger painting, zero mess',
    guideSampleObjective: "Most parents skip art because of the mess. Today's project uses only 3 things you already have, and cleanup is 2 minutes. Promise.",
    guideSampleSteps: [
      "Grab: a paper plate, 3 dabs of washable paint, an old newspaper.",
      "Spread the newspaper. Put the plate in the middle.",
      "Show your child how to use just one finger at a time. Demonstrate on a scrap.",
      "Now let them go. Don't guide. Your job is to not interfere for 15 min.",
    ],
    guideSampleWatchFor: [
      "Wanting brushes — that's day 5. Today is fingers only. Builds sensory control.",
      "Eating paint — normal for under-3s. Keep washable paint within licking safety.",
      "\"I'm done\" in 2 min — 'Can you add 3 dots?' always extends engagement.",
    ],
    guideSampleNote: "Tip from Chutki: Art that looks messy to adults is often perfect process-art. Focus on *how* they worked, not what they made.",

    scheduleSampleWeekLabel: 'Week 1 — Explore textures',
    scheduleSampleDays: [
      { day: 'Monday',    title: 'Finger painting (washable)',         duration: '20 min' },
      { day: 'Tuesday',   title: 'Cotton bud dot painting',            duration: '25 min' },
      { day: 'Wednesday', title: 'Sponge stamping — shapes & patterns', duration: '25 min' },
      { day: 'Thursday',  title: 'Leaf printing with crayons',          duration: '30 min' },
      { day: 'Friday',    title: 'Chalk on black paper — big & free',   duration: '20 min' },
      { day: 'Saturday',  title: 'Mini warli patterns on earthy paper', duration: '30 min' },
      { day: 'Sunday',    title: 'Exhibition day · hang up the week',   duration: '—' },
    ],

    certMessage: 'for 24 art adventures of creating, experimenting, and\nturning a blank page into something beautifully yours.',

    whatsappSamples: [
      { from: 'parent', text: 'My daughter\'s art looks very "scribbly" while others in WhatsApp group share proper drawings. Should I be worried?', time: '4:02 PM' },
      { from: 'chutki', text: 'NO! Please stop comparing. At 4-5, scribbles = healthy brain development. Neat drawings often mean the kid is copying, not creating.', time: '4:10 PM' },
      { from: 'parent', text: 'Oh wow, I had it completely backwards 😳', time: '4:11 PM' },
      { from: 'chutki', text: 'Common mistake! Process > product always. Keep doing what you\'re doing. She\'s flourishing. 💛', time: '4:13 PM' },
    ],
  },
};

// Helper to get preview for a bundle (falls back to writing-starter if missing)
export function getBundlePreview(bundleId: string): BundlePreview {
  return bundlePreviews[bundleId] ?? bundlePreviews['writing-starter'];
}
