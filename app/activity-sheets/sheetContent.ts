export interface SheetContent {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  hindi: string;
  hindiInstruction?: string;
  body: string[];
  skills: string[];
  skillsIntro: string;
  faqs: Array<{ q: string; a: string }>;
  relatedPost?: { slug: string; title: string };
}

const COLOR_INSTRUCTION = 'आओ रंग भरें और सीखें!';

export const sheetContent: Record<number, SheetContent> = {
  101: {
    slug: 'color-the-puppy',
    h1: 'Color the puppy: free printable coloring page',
    metaTitle: 'x',
    metaDescription:
      'A free printable puppy coloring page for children aged 2-5. Thick outlines suited to a fist grip, with the Hindi word पिल्ला printed alongside. No email needed.',
    hindi: 'पिल्ला',
    hindiInstruction: COLOR_INSTRUCTION,
    body: [
      'A seated puppy with floppy ears, drawn with deliberately thick outlines and very few internal details. That is not a shortcut. A two-year-old still holds a crayon in a whole-fist grip and colours from the shoulder, not the fingers, so a page with fine detail simply produces frustration.',
      'This is the sheet to start with if your child has never coloured before. The body, head and ears are three large shapes with generous boundaries, wide enough that scribbling roughly in the right area still looks like a coloured puppy. Getting a recognisable result on the first try matters more at this age than staying inside any line.',
      'The word पिल्ला is printed under the drawing next to the English. Say both while your child colours. Naming an animal in two languages while looking at it is how a bilingual child builds a vocabulary that sticks, and it costs you nothing extra.',
    ],
    skillsIntro:
      'While your child colours this puppy, these are the skills they are quietly building.',
    skills: [
      'Whole-hand crayon control',
      'Colouring within a large boundary',
      'Animal naming in Hindi and English',
      'Staying with one task for a few minutes',
    ],
    faqs: [
      {
        q: 'What age is this puppy coloring page for?',
        a: 'Ages 2 to 5. The outlines are thick enough for a two-year-old using a fist grip, and the shapes are simple enough that a five-year-old can finish quickly and add their own background.',
      },
      {
        q: 'Do I need a colour printer?',
        a: 'No. The sheet is line art in black and white by design, your child supplies the colour. Any home or shop printer on plain A4 paper works.',
      },
      {
        q: 'My child scribbles right over the lines. Is that a problem?',
        a: 'Not at this age. Staying inside lines needs wrist and finger control that most children develop between four and five. Before that, scribbling over the whole shape is normal and still builds the hand strength writing later depends on.',
      },
    ],
  },

  102: {
    slug: 'color-the-cat',
    h1: 'Color the cat: free printable coloring page',
    metaTitle: 'Free Cat Coloring Page to Print',
    metaDescription:
      'A free printable cat coloring page for ages 2-5, with whiskers and a curled tail for early detail work. Hindi word बिल्ली included. Free download, no email.',
    hindi: 'बिल्ली',
    hindiInstruction: COLOR_INSTRUCTION,
    body: [
      'A sitting cat with pointed ears, six whiskers and a tail curling around its feet. Compared to the puppy, this one asks slightly more of your child, the whiskers are thin lines rather than areas to fill, and the curled tail creates a narrow channel that a crayon has to follow rather than sweep across.',
      'Use that. Once the big shapes are coloured, ask your child to trace along each whisker with a crayon tip. That single move shifts them from shoulder-driven scribbling to finger-driven control, which is the actual thing standing between a child and handwriting later on.',
      'The ears are the other useful bit. They are two triangles, and triangles are the shape most three-year-olds find hardest to fill neatly because both boundaries slope. If your child manages the ears without going wide, they are further along than the age label suggests.',
      'बिल्ली is printed beside the English. Most Indian children hear this word long before they see it written.',
    ],
    skillsIntro:
      'The whiskers and tail make this a step up from the puppy sheet. Here is what your child is working on.',
    skills: [
      'Following a thin line with a crayon tip',
      'Filling sloped shapes without overshooting',
      'Moving from shoulder control to finger control',
      'Recognising बिल्ली in print',
    ],
    faqs: [
      {
        q: 'Is the cat harder than the puppy sheet?',
        a: 'Slightly. The whiskers and curled tail need more control than the puppy’s large rounded shapes. If your child is new to colouring, start with the puppy and come to this one after.',
      },
      {
        q: 'Can I use this in my playschool or daycare?',
        a: 'Yes. The sheet is free to print and use with a class. We only ask that you do not resell it or strip the Choti Ki Duniya credit from the page.',
      },
    ],
    relatedPost: {
      slug: 'why-4-year-olds-shouldnt-trace-letters',
      title: "Why 4-year-olds shouldn't be tracing letters yet",
    },
  },

  103: {
    slug: 'color-the-rabbit',
    h1: 'Color the rabbit: free printable coloring page',
    metaTitle: 'Free Rabbit Coloring Page to Print',
    metaDescription:
      'Free printable rabbit coloring page for ages 2-5. The striped ball introduces small enclosed areas and colour patterning. Hindi word खरगोश on the sheet.',
    hindi: 'खरगोश',
    hindiInstruction: COLOR_INSTRUCTION,
    body: [
      'A rabbit holding a striped ball, with long ears folded back over its head. The ball is the reason this sheet exists separately from the others, it splits into narrow bands, and narrow bands are the first time a child has to stop, lift the crayon, change colour, and start again in a specific place.',
      'That stop-and-restart is a bigger deal than it looks. Most colouring at this age is one continuous scribbling motion. Alternating stripes forces planning: which band comes next, which colour did I already use, where does this one end. It is early sequencing, dressed up as play.',
      'The long ears give you a second exercise. They are the narrowest shapes on the page, and a child who can fill them without straying is showing genuine boundary awareness rather than lucky scribbling.',
      'खरगोश appears under the drawing. It is a four-syllable word and children enjoy saying it slowly while they colour.',
    ],
    skillsIntro:
      'The striped ball turns simple colouring into a pattern exercise. These are the skills behind it.',
    skills: [
      'Colouring narrow bands without straying',
      'Lifting and repositioning the crayon deliberately',
      'Alternating colours in a pattern',
      'Early sequencing and planning',
    ],
    faqs: [
      {
        q: 'What is the ball for?',
        a: 'The stripes give your child a reason to change colours in a set order. That turns simple colouring into an early pattern exercise without the sheet having to explain anything.',
      },
      {
        q: 'How many times can I print this?',
        a: 'As many as you like. Children often want to redo a familiar sheet with different colours, and repetition is genuinely useful at this age rather than wasted effort.',
      },
    ],
  },

  104: {
    slug: 'color-the-cow',
    h1: 'Color the cow: free printable coloring page',
    metaTitle: 'Free Cow Coloring Page to Print',
    metaDescription:
      'A free printable cow coloring page for ages 2-5, with pre-filled black patches that teach colouring around a shape. Hindi word गाय included. No email required.',
    hindi: 'गाय',
    hindiInstruction: COLOR_INSTRUCTION,
    body: [
      'This cow arrives with its patches already filled in black, and that changes the task completely. Every other sheet in this set asks your child to fill an empty shape. This one asks them to colour around shapes that are already there.',
      'Working around an obstacle is harder than working inside a boundary, because the child has to hold two ideas at once, where to go and where not to go. If your child has been colouring confidently for a while and needs something to push against, this is the sheet to hand them.',
      'The patches are also irregular. They are not circles or squares, so there is no rhythm to fall into; each one has to be navigated on its own. Watch whether your child slows down as they approach a patch edge. That slowing is exactly the control we are trying to build.',
      'गाय is one of the first Hindi words most Indian children learn, which makes it a comfortable one to see written down for the first time.',
    ],
    skillsIntro:
      'Colouring around the black patches is harder than filling an empty shape. This is what it develops.',
    skills: [
      'Colouring around an existing shape',
      'Navigating irregular boundaries',
      'Slowing down near an edge',
      'Recognising गाय in print',
    ],
    faqs: [
      {
        q: 'Why are the cow’s patches already black?',
        a: 'So your child has to colour around them rather than inside them. It is a harder kind of control than filling an empty shape, and it is the main thing this sheet practises.',
      },
      {
        q: 'Is this suitable for a two-year-old?',
        a: 'It is printed for ages 2 to 5, but the patches make it the most demanding sheet in this set. A two-year-old will enjoy it and will colour straight over the patches, which is fine.',
      },
    ],
  },

  105: {
    slug: 'color-the-bear',
    h1: 'Color the bear: free printable coloring page',
    metaTitle: 'Free Bear Coloring Page to Print',
    metaDescription:
      'Free printable bear coloring page for ages 2-5. The simplest sheet in the set, built from large rounded shapes for a first-time colourer. Hindi word भालू on the page.',
    hindi: 'भालू',
    hindiInstruction: COLOR_INSTRUCTION,
    body: [
      'A seated bear made almost entirely of circles, round head, round ears, round belly, round paws. There are no thin lines anywhere on this sheet and no small enclosed areas at all.',
      'If you are printing one sheet for a child who has never held a crayon, print this one. Rounded shapes are the easiest to fill because a curved boundary forgives an overshoot in a way a corner does not; the crayon slides along the edge rather than jumping past it. A child gets a result that looks finished, and looking finished is what makes them ask for the next sheet.',
      'It also prints well at low ink. The large open areas mean the outline itself uses very little toner, which matters if you are printing a stack of these for a classroom.',
      'भालू is printed alongside. Say it with a long second syllable, children copy the rhythm before they copy the word.',
    ],
    skillsIntro:
      'This is the gentlest sheet in the set. For a first time colourer, it builds these.',
    skills: [
      'First-time crayon handling',
      'Filling large rounded areas',
      'Building confidence with a finished-looking result',
      'Recognising भालू in print',
    ],
    faqs: [
      {
        q: 'Which coloring sheet should a beginner start with?',
        a: 'This one. The bear is built from large rounded shapes with no thin lines or small areas, so a first-time colourer ends up with something that looks properly finished.',
      },
      {
        q: 'Does the sheet use a lot of ink to print?',
        a: 'No. It is line art with large open areas, so it uses less toner than most colouring pages. Plain A4 paper is fine.',
      },
    ],
  },

  106: {
    slug: 'color-the-monkey',
    h1: 'Color the monkey: free printable coloring page',
    metaTitle: 'Free Monkey Coloring Page to Print',
    metaDescription:
      'Free printable monkey coloring page for ages 2-5, with a curling tail for directional crayon control. Hindi word बंदर printed on the sheet. Free, no signup.',
    hindi: 'बंदर',
    hindiInstruction: COLOR_INSTRUCTION,
    body: [
      'A monkey with a long tail curling out to one side, an oval belly patch, and a face set inside a rounded muzzle. The shape to watch here is the tail.',
      'It is the only element in the whole coloring set that changes direction as it goes. A crayon following it has to curve, straighten and curve back, which means the child cannot use a single repeated stroke, they have to keep adjusting. That constant adjustment is what a pencil eventually demands when forming letters like S and J, and it is worth practising long before any letter appears.',
      'The belly oval sitting inside the body outline gives you a second, quieter exercise: a shape within a shape. Ask your child to use two different colours for the two, and you will see immediately whether they are tracking boundaries or just filling the general area.',
      'बंदर is printed under the drawing.',
    ],
    skillsIntro:
      'The curling tail is the reason to use this sheet. It develops the following.',
    skills: [
      'Following a curve that changes direction',
      'Colouring a shape nested inside another',
      'Adjusting stroke direction mid-movement',
      'Recognising बंदर in print',
    ],
    faqs: [
      {
        q: 'What does the curling tail practise?',
        a: 'Changing stroke direction mid-movement. The child cannot use one repeated motion, so they have to keep adjusting, the same control letters like S and J need later on.',
      },
      {
        q: 'Can my child colour the monkey any colour?',
        a: 'Yes, and it is worth letting them. Insisting on realistic colours at this age turns a free exercise into a test, and there is nothing to be gained from that.',
      },
    ],
  },

  107: {
    slug: 'color-the-elephant',
    h1: 'Color the elephant: free printable coloring page',
    metaTitle: 'Free Elephant Coloring Page to Print',
    metaDescription:
      'Free printable elephant coloring page for ages 2-5. The largest single colouring area in the set, good for building stamina. Hindi word हाथी on the sheet.',
    hindi: 'हाथी',
    hindiInstruction: COLOR_INSTRUCTION,
    body: [
      'A seated elephant with a large curved ear and a trunk curling down and back. The body is the biggest single uninterrupted area in this entire coloring set, and that is the point of the sheet.',
      'Filling a large area completely is a stamina exercise, not a control one. Most young children colour a patch, decide they are finished, and move on. Persuading them to keep going until the whole body is covered builds the ability to stay with a task past the point where it stops being novel, which is a far better predictor of how a child copes with school than whether they can stay inside a line.',
      'Do not push it. If they stop halfway, the sheet has still done its job. Come back to it another day and see if they get further.',
      'The ear is the one place where control matters: it overlaps the head, so there is a boundary running through the middle of the shape rather than around it.',
      'हाथी is printed under the drawing.',
    ],
    skillsIntro:
      'This sheet is about staying with the task rather than precision. That builds the following.',
    skills: [
      'Sustaining attention over a large area',
      'Working with an internal overlapping boundary',
      'Building colouring stamina',
      'Recognising हाथी in print',
    ],
    faqs: [
      {
        q: 'My child never finishes colouring the whole elephant. Should I worry?',
        a: 'No. Filling a large area completely is a stamina task, and stamina builds slowly at this age. Stopping halfway is normal, try the sheet again a week later and see how much further they get.',
      },
      {
        q: 'What size does this print at?',
        a: 'A4. The elephant fills most of the page, so print at 100% rather than fit-to-page if your printer offers the choice.',
      },
    ],
  },

  108: {
    slug: 'color-the-lion',
    h1: 'Color the lion: free printable coloring page',
    metaTitle: 'Free Lion Coloring Page to Print',
    metaDescription:
      'Free printable lion coloring page for ages 3-5. The scalloped mane is a genuine boundary-tracking exercise. Hindi word शेर printed alongside. Free download.',
    hindi: 'शेर',
    hindiInstruction: COLOR_INSTRUCTION,
    body: [
      'A lion with a full scalloped mane ringing its face. That mane is the hardest boundary in the coloring set and the reason this sheet is worth doing on its own.',
      'It is a closed ring with a wavy outer edge and a circular inner edge, so the child is colouring a band rather than a shape. Bands are difficult because there is no centre to work outward from, you have to follow the path. Watch whether your child colours the mane by going round it or by scribbling across it and cleaning up. Going round it is a real step forward.',
      'The face sitting inside the mane gives a natural two-colour split that even a three-year-old understands without instruction. Most children choose a darker mane and a lighter face on their own, which is the first sign of deliberate colour choice rather than picking whatever crayon is nearest.',
      'शेर is printed under the drawing.',
    ],
    skillsIntro:
      'The mane is a band rather than a filled shape, which is what makes it useful. It develops these.',
    skills: [
      'Colouring a band rather than a filled shape',
      'Following a wavy outer edge',
      'Making a deliberate two-colour choice',
      'Recognising शेर in print',
    ],
    faqs: [
      {
        q: 'Why is the lion listed for slightly older children?',
        a: 'The mane is a ring with a wavy outer edge, which needs more boundary tracking than the other animals in this set. Most children handle it comfortably from around three.',
      },
      {
        q: 'Should I tell my child to colour the mane orange?',
        a: 'Only if they ask. Children who pick their own colours engage longer, and most choose a darker mane and lighter face without being told.',
      },
    ],
  },

  109: {
    slug: 'color-the-giraffe',
    h1: 'Color the giraffe: free printable coloring page',
    metaTitle: 'Free Giraffe Coloring Page to Print',
    metaDescription:
      'Free printable giraffe coloring page for ages 3-5. Dozens of small spots make this the finest-control sheet in the set. Hindi word जिराफ़ on the page.',
    hindi: 'जिराफ़',
    hindiInstruction: COLOR_INSTRUCTION,
    body: [
      'A standing giraffe covered in spots, with a long neck and four thin legs. This is the most demanding sheet in the coloring set, and it is not close.',
      'The spots are small enclosed circles scattered across the body. Filling them individually requires the pincer grip, thumb and forefinger, crayon held near the tip, which is the same grip a pencil needs. A child who is still using a fist grip will not manage the spots, and that is genuinely useful information for you. It tells you where they actually are, more reliably than any checklist.',
      'The legs are the second challenge: four narrow parallel channels with white space between them. Narrow parallel shapes are where overshooting shows most obviously, so this sheet gives honest feedback about control.',
      'Use it as a periodic check rather than an everyday sheet. Print it once a month and see how the spots come out.',
      'जिराफ़ is printed under the drawing, with the nuqta.',
    ],
    skillsIntro:
      'This is the hardest sheet here, and a useful way to check where your child actually is.',
    skills: [
      'Pincer grip on the crayon',
      'Filling small enclosed circles',
      'Colouring narrow parallel shapes',
      'Recognising जिराफ़ in print',
    ],
    faqs: [
      {
        q: 'My child colours straight over the spots. What does that mean?',
        a: 'It usually means they are still holding the crayon in a fist rather than with thumb and forefinger. That is age-appropriate below about four, and the spots will come once the grip changes.',
      },
      {
        q: 'How often should we use this sheet?',
        a: 'Once a month rather than daily. It works better as a check on how control is developing than as everyday practice.',
      },
    ],
    relatedPost: {
      slug: 'why-4-year-olds-shouldnt-trace-letters',
      title: "Why 4-year-olds shouldn't be tracing letters yet",
    },
  },

  110: {
    slug: 'color-the-kangaroo',
    h1: 'Color the kangaroo: free printable coloring page',
    metaTitle: 'Free Kangaroo Coloring Page to Print',
    metaDescription:
      'Free printable kangaroo coloring page for ages 2-5, with a pouch shape nested in the body. Hindi word कंगारू printed on the sheet. Free, no email needed.',
    hindi: 'कंगारू',
    hindiInstruction: COLOR_INSTRUCTION,
    body: [
      'A standing kangaroo with tall ears, a rounded body and oversized back feet. The feature worth using here is the pouch, a curved shape sitting inside the body outline, sharing part of its edge.',
      'Shapes that share an edge confuse young children in a specific and interesting way. Is the pouch part of the body or separate from it? There is no correct answer, and watching your child decide tells you something about how they read a drawing. Some colour it as one continuous area, some treat it as a distinct shape and pick a second colour. Both are fine; the deciding is the point.',
      'The back feet are the other useful bit. They are much larger in proportion than a child expects, and children often colour them last and quickly. Slowing that down, feet first, for once, is a small way to break the habit of rushing the parts that seem less interesting.',
      'कंगारू is printed under the drawing.',
    ],
    skillsIntro:
      'The pouch shares an edge with the body, which is trickier than it looks. Here is what that develops.',
    skills: [
      'Colouring shapes that share an edge',
      'Deciding where one shape ends and another begins',
      'Working on a less interesting area deliberately',
      'Recognising कंगारू in print',
    ],
    faqs: [
      {
        q: 'Should the pouch be a different colour from the body?',
        a: 'Either works. It is more interesting to let your child decide, how they read a shape that shares an edge with another tells you a lot about how carefully they are looking.',
      },
      {
        q: 'Is there a Hindi version of this sheet?',
        a: 'The sheet itself is bilingual, कंगारू is printed alongside the English word, so the same page works whichever language you are using at home.',
      },
    ],
  },
};

export function getSheetContent(id: number): SheetContent | undefined {
  return sheetContent[id];
}

export function getSheetContentBySlug(
  slug: string,
): { id: number; content: SheetContent } | undefined {
  for (const [id, content] of Object.entries(sheetContent)) {
    if (content.slug === slug) return { id: Number(id), content };
  }
  return undefined;
}

export const publishedSheetIds = Object.keys(sheetContent).map(Number);
