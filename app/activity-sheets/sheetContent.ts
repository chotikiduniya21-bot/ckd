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
  111: {
    slug: 'count-the-fruits',
    h1: 'Count the fruits: free printable counting worksheet',
    metaTitle: 'Free Fruit Counting Worksheet to Print',
    metaDescription:
      'A free printable fruit counting worksheet for ages 3 to 6. Seven rows to count and a box to write each number in. Hindi instruction printed on the sheet.',
    hindi: 'फल',
    hindiInstruction: 'फलों को गिनें',
    body: [
      'Seven rows of fruit, each with a box at the end to write the number in. Strawberries, bananas, oranges, apples, watermelon, grapes and avocados, with a different quantity in every row.',
      'Start here if your child has not done a counting worksheet before. Fruit is the category young children know best, so nothing on the page needs explaining, and all their attention goes on the counting itself rather than on working out what they are looking at.',
      'The useful thing to watch is whether your child touches each item as they count. Pointing and touching is not a crutch, it is the actual mechanism that keeps count and object matched one to one. Children who count by looking alone usually lose track past four. If yours is not touching, put their finger on the first item and start them off.',
      'The rows go up to seven, which is past the point where most children stop being able to see a quantity at a glance and have to count properly. That is deliberate.',
    ],
    skillsIntro:
      'Fruit is the most familiar category, so the effort goes into counting rather than recognising. Here is what that practises.',
    skills: [
      'One to one counting with touch',
      'Writing numerals inside a box',
      'Counting past five reliably',
      'Fruit names in Hindi and English',
    ],
    faqs: [
      {
        q: 'Which counting worksheet should we start with?',
        a: 'This one. Fruit is the category children recognise fastest, so none of their attention is spent working out what the pictures are.',
      },
      {
        q: 'My child counts the same item twice. How do I fix that?',
        a: 'Have them touch each item as they say the number. Losing track usually means they are counting by eye alone, and touching keeps the number and the object matched.',
      },
      {
        q: 'Does my child need to write the numbers themselves?',
        a: 'Not at first. Plenty of three year olds can count a row correctly but cannot yet form the numeral. Let them say the answer and you write it, then swap once writing is comfortable.',
      },
    ],
  },

  112: {
    slug: 'count-the-vehicles',
    h1: 'Count the vehicles: free printable counting worksheet',
    metaTitle: 'Free Vehicle Counting Worksheet to Print',
    metaDescription:
      'Free printable vehicle counting worksheet for ages 3 to 6. Items vary in size deliberately, so children learn that quantity is separate from size. Hindi instruction included.',
    hindi: 'वाहन',
    hindiInstruction: 'वाहनों को गिनें',
    body: [
      'Five rows of vehicles: fire engines, cars, bicycles, aeroplanes and buses, each row a different quantity, each with a box for the answer.',
      'This sheet does something the others do not. The vehicles are drawn at very different sizes, so a row of five small bicycles takes up less space than a row of two large aeroplanes. That is not a design accident and it is worth using.',
      'Young children frequently judge quantity by how much space something fills rather than by how many things there are. Asked which row has more, they will often point at the bigger objects. Counting rows where the small items outnumber the large ones is one of the clearest ways to break that habit, because the answer contradicts the impression.',
      'It is also the shortest counting sheet at five rows, which makes it a good one for a day when attention is thin.',
    ],
    skillsIntro:
      'The vehicles are drawn at different sizes on purpose. That is what this sheet is really teaching.',
    skills: [
      'Separating quantity from size',
      'Counting a row of large items and a row of small ones',
      'Finishing a shorter sheet without losing focus',
      'Vehicle names in Hindi and English',
    ],
    faqs: [
      {
        q: 'Why are the vehicles different sizes?',
        a: 'Deliberately. Young children often judge how many by how much space things fill, so counting five small bicycles against two large aeroplanes challenges that directly.',
      },
      {
        q: 'Is this easier than the other counting sheets?',
        a: 'It is shorter, with five rows rather than six or seven, so it is a good choice when your child is tired or new to worksheets.',
      },
    ],
  },

  113: {
    slug: 'count-the-toys',
    h1: 'Count the toys: free printable counting worksheet',
    metaTitle: 'Free Toy Counting Worksheet to Print',
    metaDescription:
      'Free printable toy counting worksheet for ages 3 to 6. Seven rows including dice and a cricket bat. Hindi instruction printed on the sheet. Free download.',
    hindi: 'खिलौने',
    hindiInstruction: 'खिलौनों को गिनें',
    body: [
      'Seven rows of toys: robots, spinning tops, dice, dolls, footballs, teddy bears and cricket bats. It is the longest sheet in the counting set.',
      'The dice row is the interesting one. Dice have dots on them, and a child who has started noticing numbers will often begin counting the dots instead of the dice. That is not a mistake to correct sharply. It is a sign they are looking carefully. Just ask the question again more precisely: how many dice, not how many dots.',
      'That distinction between counting objects and counting marks on objects is genuinely useful, and no other sheet in this set raises it.',
      'The cricket bats are here because a toy row full of things Indian children do not own would be a strange thing to print. Seven rows is a lot for a three year old, so splitting the sheet across two sittings is completely reasonable.',
    ],
    skillsIntro:
      'Seven rows makes this the longest counting sheet, and the dice row adds something the others do not.',
    skills: [
      'Counting objects rather than marks on them',
      'Sustaining attention across seven rows',
      'Answering a more precisely worded question',
      'Toy names in Hindi and English',
    ],
    faqs: [
      {
        q: 'My child counted the dots on the dice instead of the dice.',
        a: 'That is a good sign rather than an error, because it means they are noticing detail. Just ask again more precisely: how many dice, not how many dots.',
      },
      {
        q: 'Seven rows feels like a lot. Can we split it?',
        a: 'Yes. Doing three or four rows now and the rest later works perfectly well, and is better than pushing to the end of a sheet your child has stopped enjoying.',
      },
    ],
  },

  114: {
    slug: 'count-the-shapes',
    h1: 'Count the shapes: free printable counting worksheet',
    metaTitle: 'Free Shapes Counting Worksheet to Print',
    metaDescription:
      'Free printable shapes counting worksheet for ages 3 to 6, covering stars, triangles, hearts, squares, circles and diamonds. Counting and shape naming together.',
    hindi: 'आकृतियाँ',
    hindiInstruction: 'आकृतियों को गिनें',
    body: [
      'Rows of stars, triangles, hearts, squares, circles and diamonds, each with a box for the number.',
      'Every other sheet in this set asks your child to count objects: things with names they already use at home. This one asks them to count shapes, and a shape is an abstraction. A triangle is not a thing in the world, it is a property that lots of different things share.',
      'That makes this sheet do two jobs at once. Your child counts, and while counting they have to hold in mind what makes a triangle a triangle rather than a diamond. Ask the name of the shape before each row and the sheet becomes a shape lesson with counting attached.',
      'It is also the most useful sheet here for a child heading into nursery or LKG, because shape naming appears in almost every Indian preschool syllabus and rarely gets practised at home.',
    ],
    skillsIntro:
      'This is the only sheet where the thing being counted is abstract, which makes it do two jobs at once.',
    skills: [
      'Naming shapes while counting them',
      'Telling a diamond from a square',
      'Working with an abstract category',
      'Shape names in Hindi and English',
    ],
    faqs: [
      {
        q: 'How is this different from the other counting sheets?',
        a: 'The others count objects your child already knows by name. This one counts shapes, which are abstract properties rather than things, so it practises shape naming at the same time.',
      },
      {
        q: 'Is this useful before nursery or LKG?',
        a: 'Yes. Shape naming appears in most Indian preschool syllabuses and is rarely practised at home, so it is one of the more directly useful sheets in this set.',
      },
    ],
  },

  115: {
    slug: 'count-the-clothes',
    h1: 'Count the clothes: free printable counting worksheet',
    metaTitle: 'Free Clothes Counting Worksheet to Print',
    metaDescription:
      'Free printable clothes counting worksheet for ages 3 to 6. Includes a row with only one item, which is harder for young children than it sounds.',
    hindi: 'कपड़े',
    hindiInstruction: 'कपड़ों को गिनें',
    body: [
      'Rows of dresses, caps, shorts, t-shirts, shoes, gloves and dungarees, each with a box for the number.',
      'The row with a single item is the one to pay attention to. After five or six rows of counting groups, a child reaches a row with one thing in it and often hesitates, or writes a larger number, or looks up to check whether it is a trick.',
      'It is not a trick, and the hesitation is real. Counting has a rhythm to it, and one does not have a rhythm. There is nothing to count along. Children who have settled into the pattern of the sheet have to stop and think about what the question is actually asking, which is a small but genuine shift.',
      'The shoes and gloves rows are worth a mention too, since both are things that come in pairs. If your child says two for a row of five gloves, they are counting pairs rather than items, which is worth a conversation rather than a correction.',
    ],
    skillsIntro:
      'A row of one and two rows of paired items make this trickier than it first looks.',
    skills: [
      'Counting a group of one',
      'Counting items rather than pairs',
      'Breaking out of a counting rhythm',
      'Clothing names in Hindi and English',
    ],
    faqs: [
      {
        q: 'Why did my child struggle with the row that has one item?',
        a: 'Counting has a rhythm and one has no rhythm to it. After several rows of groups, a single item makes children stop and reconsider what the question is asking, which is normal.',
      },
      {
        q: 'My child said two for a row of five gloves.',
        a: 'They are counting pairs rather than individual items, which is actually quite sophisticated. Worth talking about rather than marking wrong.',
      },
    ],
  },

  116: {
    slug: 'count-the-treats',
    h1: 'Count the treats: free printable counting worksheet',
    metaTitle: 'Free Treats Counting Worksheet to Print',
    metaDescription:
      'Free printable treats counting worksheet for ages 3 to 6, with cupcakes, candies and donuts. High motivation for a child who resists worksheets.',
    hindi: 'ट्रीट्स',
    hindiInstruction: 'ट्रीट्स को गिनें',
    body: [
      'Six rows of cupcakes, ice lollies, sweets, donuts, chocolate bars and popcorn, each with a box for the number.',
      'There is no developmental reason to count sweets rather than spoons. The reason to print this sheet is motivational, and that is a perfectly good reason. If your child has decided that worksheets are boring, a page of cupcakes buys you several minutes of willing attention that a page of household objects will not.',
      'Use it accordingly. This is the sheet for a difficult afternoon, or for the first attempt after a child has refused a worksheet, or for a younger sibling who wants to do what the older one is doing.',
      'One thing worth noticing: the Hindi instruction on this sheet uses ट्रीट्स, a borrowed English word written in Devanagari rather than a native Hindi term. Indian households genuinely speak this way, and seeing it printed is a small, accurate reflection of how the language is actually used at home.',
    ],
    skillsIntro:
      'This sheet earns its place through motivation rather than difficulty. It still practises the following.',
    skills: [
      'Counting six rows willingly',
      'Writing numerals in a box',
      'Reading a Devanagari loanword',
      'Food names in Hindi and English',
    ],
    faqs: [
      {
        q: 'Is counting sweets teaching my child to want sweets?',
        a: 'The pictures are cartoon drawings on a worksheet, not food. What the sheet buys you is willing attention from a child who has decided worksheets are boring.',
      },
      {
        q: 'Why is the Hindi word written as ट्रीट्स?',
        a: 'It is the English word written in Devanagari, which is how most Indian households actually say it. Seeing borrowed words in print is a normal part of reading Hindi today.',
      },
    ],
  },

  117: {
    slug: 'count-the-drinks',
    h1: 'Count the drinks: free printable counting worksheet',
    metaTitle: 'Free Drinks Counting Worksheet to Print',
    metaDescription:
      'Free printable drinks counting worksheet for ages 3 to 6. Rows of juice, milk, water and coconuts, with a Hindi instruction line printed on the sheet.',
    hindi: 'ड्रिंक्स',
    hindiInstruction: 'ड्रिंक्स को गिनें',
    body: [
      'Six rows of drinks: juice glasses, milk bottles, water glasses, lemonade, hot chocolate and coconuts, each with a box for the number.',
      'The containers here are close to identical in outline. A juice glass and a water glass differ mainly in what colour they are filled with, which means your child has to attend to a smaller difference than on any other sheet in this set. Rows of near-identical items are where miscounting happens most, because the eye slides across them without registering separate objects.',
      'That makes this a good sheet to use once counting is already reliable elsewhere. If your child counts fruit correctly but goes wrong here, it is not a counting problem. It is an attention problem, and it is worth knowing the difference.',
      'The coconut row is the one Indian children recognise immediately and most printable worksheets from elsewhere would never include.',
    ],
    skillsIntro:
      'The containers look alike, which makes this more about careful looking than about numbers.',
    skills: [
      'Counting near-identical items accurately',
      'Attending to small visual differences',
      'Checking an answer by counting twice',
      'Drink names in Hindi and English',
    ],
    faqs: [
      {
        q: 'My child counts fruit correctly but goes wrong on this sheet.',
        a: 'That is usually attention rather than counting. The containers look alike, so the eye slides across them. Ask for a second count on any row that looks wrong.',
      },
      {
        q: 'What age is this best for?',
        a: 'Ages 3 to 6, though it works better once your child already counts reliably on the easier sheets like fruit or animals.',
      },
    ],
  },

  118: {
    slug: 'count-the-objects',
    h1: 'Count the objects: free printable counting worksheet',
    metaTitle: 'Free Objects Counting Worksheet to Print',
    metaDescription:
      'Free printable everyday objects counting worksheet for ages 3 to 6. Plates, spoons, tables and balloons, with rows counting up to seven.',
    hindi: 'वस्तुएँ',
    hindiInstruction: 'वस्तुओं को गिनें',
    body: [
      'Six rows of everyday things: plates, bread slices, spoons, tables, toothbrushes and balloons, each with a box for the number.',
      'This is the plainest sheet in the counting set and that is its purpose. There is nothing here a child will find exciting, which means nothing distracts from the counting either. When you want to know whether your child can actually count without the help of an appealing picture, this is the sheet that tells you.',
      'The spoons row holds the largest quantity in the set. Long rows of small, similar items are where counting breaks down, so if your child manages the spoons without losing their place they are counting properly rather than recognising familiar small quantities by sight.',
      'It also pairs naturally with real life. Every object on this page exists in your kitchen, so the same counting can continue at the table afterwards with the actual things.',
    ],
    skillsIntro:
      'The plainest sheet here, which is exactly why it is a useful check on where counting really stands.',
    skills: [
      'Counting without an engaging picture to help',
      'Keeping place in a long row',
      'Carrying counting into real objects at home',
      'Household words in Hindi and English',
    ],
    faqs: [
      {
        q: 'Why use a sheet with such ordinary pictures?',
        a: 'Because nothing on it is distracting. If your child counts well here, they are genuinely counting rather than being carried along by an appealing picture.',
      },
      {
        q: 'What should we do after finishing it?',
        a: 'Count the real versions. Every object on this sheet is in your kitchen, so laying out spoons and counting them again makes the link between the page and the world.',
      },
    ],
  },

  119: {
    slug: 'count-the-animals',
    h1: 'Count the animals: free printable counting worksheet',
    metaTitle: 'Free Animal Counting Worksheet to Print',
    metaDescription:
      'Free printable animal counting worksheet for ages 3 to 6. Seven rows including a single crocodile, mixing large and small animals deliberately.',
    hindi: 'जानवर',
    hindiInstruction: 'जानवरों को गिनें',
    body: [
      'Seven rows of animals: elephants, lions, pandas, kangaroos, rhinos, a crocodile and pigs, each with a box for the number.',
      'Animals are the second most familiar category after fruit, so this is a comfortable sheet, but two rows do something more.',
      'The elephants and the pigs are drawn at noticeably different scales, so a row of large animals sits near a row of small ones. Children who judge quantity by how much of the page something fills will get these two rows the wrong way round, which is the point.',
      'The crocodile row has a single animal in it. As on the clothes sheet, a row of one interrupts the rhythm of counting and makes a child stop and think about what is being asked. Coming near the end of a long sheet, it is a good test of whether they are still paying attention or answering on autopilot.',
    ],
    skillsIntro:
      'A familiar category, with two rows that quietly test whether your child is still thinking.',
    skills: [
      'Separating quantity from animal size',
      'Counting a group of one',
      'Staying attentive to the end of a long sheet',
      'Animal names in Hindi and English',
    ],
    faqs: [
      {
        q: 'My child said the elephants row had more than the pigs row when it did not.',
        a: 'They are judging by how much space the animals take up rather than by how many there are. Counting each row out loud with a finger usually settles it.',
      },
      {
        q: 'Is this a good sheet to start with?',
        a: 'It is a reasonable second sheet. Fruit is the gentler starting point, but animals are almost as familiar and this one has more going on.',
      },
    ],
  },

  120: {
    slug: 'count-the-insects',
    h1: 'Count the insects: free printable counting worksheet',
    metaTitle: 'Free Insect Counting Worksheet to Print',
    metaDescription:
      'Free printable insect counting worksheet for ages 3 to 6. Two similar ant rows make this a visual discrimination exercise as well as a counting one.',
    hindi: 'कीड़े',
    hindiInstruction: 'कीड़ों को गिनें',
    body: [
      'Six rows of insects: caterpillars, ladybirds, ants, snails, butterflies and a second row of ants, each with a box for the number.',
      'Two rows of ants appear on the same sheet, drawn slightly differently. That repetition is the reason to use this page. A child working quickly will reach the second ant row, recognise it as one they have already done, and either skip it or copy the earlier answer.',
      'Catching that is more useful than the counting itself. It is the difference between reading a page and assuming a page, and the assuming habit is worth interrupting early, well before it turns up in school work.',
      'The insects are also small and closely spaced, which makes them harder to separate visually than the fruit or the animals. Expect this sheet to take longer than its six rows suggest.',
    ],
    skillsIntro:
      'Two similar ant rows make this as much about looking carefully as about counting.',
    skills: [
      'Telling apart two similar rows',
      'Counting small, closely spaced items',
      'Checking rather than assuming an answer',
      'Insect names in Hindi and English',
    ],
    faqs: [
      {
        q: 'Why are there two rows of ants?',
        a: 'To catch the habit of assuming. A child working fast will recognise the second row and copy the first answer instead of counting it, which is worth noticing.',
      },
      {
        q: 'This sheet takes longer than the others. Is that normal?',
        a: 'Yes. The insects are small and closely spaced, so separating them by eye is harder than on the fruit or animal sheets even though there are fewer rows.',
      },
    ],
  },
  121: {
    slug: 'trace-number-1',
    h1: 'Trace the number 1: free printable tracing worksheet',
    metaTitle: 'Free Number 1 Tracing Worksheet (PDF)',
    metaDescription:
      'A free printable number 1 tracing worksheet for ages 3 to 6. The 1 is drawn as a balloon string, with bilingual instructions and the Hindi word एक on the sheet.',
    hindi: 'एक',
    hindiInstruction: 'चलो गिनती सीखें!',
    body: [
      'The number 1 drawn as a balloon on a string, with a dotted 1 beside it to trace along.',
      'This is the only digit made from a single straight line, top to bottom, with no curve, no corner and no change of direction. That makes it the right place for any child to begin, and it is worth being clear about why. Every other numeral asks the hand to do at least two things. This one asks it to do one thing well.',
      'The balloon is doing real work here. A string hangs down from a balloon, which is exactly the direction a 1 is written in, so the picture reminds your child where to start without you having to say it. Children who begin numerals from the bottom develop a habit that becomes hard to undo later, and a top-anchored image is a gentler correction than a spoken instruction.',
      'The speech bubble shows ONE alongside एक, so the numeral, the English word and the Hindi word appear together on one page.',
    ],
    skillsIntro:
      'One straight stroke, top to bottom. Simple to describe and the foundation for everything after it.',
    skills: [
      'Drawing a single controlled vertical line',
      'Starting a numeral from the top',
      'Following a dotted guide',
      'Linking the numeral 1 to एक and one',
    ],
    faqs: [
      {
        q: 'Which number should my child trace first?',
        a: 'This one. The 1 is a single straight line with no curve or change of direction, so it is the only numeral that asks the hand to do just one thing.',
      },
      {
        q: 'My child starts the 1 from the bottom. Does it matter?',
        a: 'It does over time, because bottom-up habits get harder to undo once writing speeds up. The balloon picture helps, since a string naturally hangs downward from the top.',
      },
      {
        q: 'Does this sheet teach Devanagari numerals?',
        a: 'No. It uses the 1 to 10 forms used in Indian schools, and adds the Hindi number word एक alongside. Devanagari numerals are a separate thing.',
      },
    ],
  },

  122: {
    slug: 'trace-number-2',
    h1: 'Trace the number 2: free printable tracing worksheet',
    metaTitle: 'Free Number 2 Tracing Worksheet (PDF)',
    metaDescription:
      'Free printable number 2 tracing worksheet for ages 3 to 6. The 2 is drawn as a swan, with bilingual instructions and the Hindi word दो printed on the sheet.',
    hindi: 'दो',
    hindiInstruction: 'चलो गिनती सीखें!',
    body: [
      'The number 2 drawn as a swan, its curved neck forming the top of the digit and its body the base, with a dotted 2 alongside to trace.',
      'A 2 is the first numeral that changes direction twice in one stroke. The hand starts with a curve to the right, reverses into a diagonal running down and left, then reverses again into a flat line to the right. Three different movements without lifting the pencil.',
      'That is why it is common for children to produce a 2 that looks like a backwards S, or to stop after the curve. Neither is a mistake worth much concern. It means the hand completed the first movement and has not yet learned to chain the second onto it.',
      'The swan makes the shape memorable in a way an abstract digit does not. Curved neck, then a body along the water. If your child stalls halfway, naming the parts as they go often gets them through.',
      'दो appears in the speech bubble beside TWO.',
    ],
    skillsIntro:
      'Two direction changes in a single stroke, which is more than any earlier numeral asks for.',
    skills: [
      'Chaining three movements in one stroke',
      'Reversing direction without lifting the pencil',
      'Finishing on a straight horizontal line',
      'Linking the numeral 2 to दो and two',
    ],
    faqs: [
      {
        q: 'My child writes the 2 backwards. Should I be concerned?',
        a: 'Not at this age. Reversed numerals are very common up to around six and usually resolve on their own. Tracing over the dotted guide while saying the movement out loud helps more than correction.',
      },
      {
        q: 'Why is the 2 drawn as a swan?',
        a: 'The curved neck and the body along the water match the two halves of the digit, which gives your child something to remember when the pencil stalls halfway through.',
      },
    ],
  },

  123: {
    slug: 'trace-number-3',
    h1: 'Trace the number 3: free printable tracing worksheet',
    metaTitle: 'Free Number 3 Tracing Worksheet (PDF)',
    metaDescription:
      'Free printable number 3 tracing worksheet for ages 3 to 6. The 3 is drawn as a butterfly, with bilingual instructions and the Hindi word तीन on the sheet.',
    hindi: 'तीन',
    hindiInstruction: 'चलो गिनती सीखें!',
    body: [
      'The number 3 drawn as a butterfly, its two wings forming the two bumps of the digit, with a dotted 3 alongside.',
      'A 3 is two curves stacked on top of each other, both opening to the left. The difficulty is not the curve itself, it is that both curves face the same way. Children who have just learned to alternate directions on a 2 often flip the second curve, producing something closer to an E or a backwards 3.',
      'This is the most commonly reversed digit of the ten, and it stays that way longer than the others. It is not a reading problem and not a warning sign on its own.',
      'The butterfly helps because a butterfly has two wings on the same side of its body when seen from the side, which is precisely what the two bumps are. Trace the top wing, then the bottom wing, same direction both times.',
      'तीन appears beside THREE in the speech bubble.',
    ],
    skillsIntro:
      'Two curves facing the same direction, which is what makes this the most reversed digit of the set.',
    skills: [
      'Repeating a curve in the same direction',
      'Stacking two shapes vertically',
      'Resisting the urge to alternate direction',
      'Linking the numeral 3 to तीन and three',
    ],
    faqs: [
      {
        q: 'Why does my child keep writing the 3 backwards?',
        a: 'Both curves of a 3 face the same way, and children who have just learned to alternate directions on a 2 often flip the second one. It is the most commonly reversed digit and usually settles by six or seven.',
      },
      {
        q: 'Should I correct a reversed 3 every time?',
        a: 'Constant correction tends to make children write less rather than better. Tracing the dotted guide while saying top wing, bottom wing does more.',
      },
    ],
  },

  124: {
    slug: 'trace-number-4',
    h1: 'Trace the number 4: free printable tracing worksheet',
    metaTitle: 'Free Number 4 Tracing Worksheet (PDF)',
    metaDescription:
      'Free printable number 4 tracing worksheet for ages 3 to 6. The first digit needing two separate strokes. Drawn as a dinosaur, with the Hindi word चार included.',
    hindi: 'चार',
    hindiInstruction: 'चलो गिनती सीखें!',
    body: [
      'The number 4 drawn as a dinosaur, with a dotted 4 beside it to trace.',
      'This is where a lot of children stall, and it is worth knowing why before you sit down with the sheet. Every digit up to now has been one continuous stroke. A 4 is not. The pencil comes down and across, then has to lift, move back up to the top, and come down again in a separate line.',
      'Lifting the pencil and putting it back down in the right place is a genuinely different skill from drawing a shape. It needs the child to hold a plan in mind across a pause. Plenty of four year olds who trace 1, 2 and 3 confidently will produce a 4 with the two strokes in the wrong relationship to each other, because the pause loses them.',
      'If that happens, do the first stroke together, pause, and point to where the second one starts.',
      'चार appears beside FOUR in the speech bubble.',
    ],
    skillsIntro:
      'The first numeral that needs the pencil lifted and repositioned, which is a real step up.',
    skills: [
      'Writing a numeral in two separate strokes',
      'Lifting and repositioning the pencil accurately',
      'Holding a plan across a pause',
      'Linking the numeral 4 to चार and four',
    ],
    faqs: [
      {
        q: 'Why does my child manage 1, 2 and 3 but struggle with 4?',
        a: 'The first three are single continuous strokes. The 4 needs the pencil lifted and put back down in the right place, which is a different skill from drawing a shape.',
      },
      {
        q: 'How can I help with the pencil lift?',
        a: 'Do the first stroke together, pause deliberately, then point at exactly where the second stroke begins before letting them carry on.',
      },
    ],
  },

  125: {
    slug: 'trace-number-5',
    h1: 'Trace the number 5: free printable tracing worksheet',
    metaTitle: 'Free Number 5 Tracing Worksheet (PDF)',
    metaDescription:
      'Free printable number 5 tracing worksheet for ages 3 to 6. The 5 is drawn as a caterpillar, with bilingual instructions and the Hindi word पाँच on the sheet.',
    hindi: 'पाँच',
    hindiInstruction: 'चलो गिनती सीखें!',
    body: [
      'The number 5 drawn as a green caterpillar curling into the shape of the digit, with a dotted 5 alongside.',
      'A 5 combines everything the earlier digits practised. There is a straight line down, a curve to the right at the bottom, and a flat bar across the top that most children add as a second stroke after lifting the pencil.',
      'The top bar is the part that goes wrong. Because it is added last and separately, it often ends up too long, too short, or floating away from the vertical line it should join. Watch specifically for whether the bar touches the top of the down stroke.',
      'A 5 is also frequently reversed, usually alongside a reversed 2 and 3. If all three are reversed, that is a consistent pattern rather than three separate problems, and it typically resolves together.',
      'पाँच appears beside FIVE in the speech bubble.',
    ],
    skillsIntro:
      'A straight line, a curve and a separate top bar, which makes this the most composite digit so far.',
    skills: [
      'Combining a straight line with a curve',
      'Adding a second stroke that joins cleanly',
      'Judging the length of a horizontal bar',
      'Linking the numeral 5 to पाँच and five',
    ],
    faqs: [
      {
        q: 'My child leaves the top bar of the 5 floating.',
        a: 'That is the most common problem with this digit, because the bar is added last as a separate stroke. Point out where it should touch the top of the down stroke before they start.',
      },
      {
        q: 'My child reverses 2, 3 and 5 but not the others.',
        a: 'Those three are the digits most often reversed, and reversing all of them is a consistent pattern rather than three separate difficulties. It usually settles together.',
      },
    ],
  },

  126: {
    slug: 'trace-number-6',
    h1: 'Trace the number 6: free printable tracing worksheet',
    metaTitle: 'Free Number 6 Tracing Worksheet (PDF)',
    metaDescription:
      'Free printable number 6 tracing worksheet for ages 3 to 6. The 6 is drawn as a snail shell, with bilingual instructions and the Hindi word छः printed on the sheet.',
    hindi: 'छः',
    hindiInstruction: 'चलो गिनती सीखें!',
    body: [
      'The number 6 drawn as a snail, its spiral shell forming the loop at the bottom of the digit, with a dotted 6 alongside.',
      'A 6 is one continuous stroke that curves down from the top and then closes into a loop turning anticlockwise. No pencil lift, no corner, just a long controlled curve that has to finish by meeting itself.',
      'Closing a loop back onto the line it came from is harder than it looks. The hand has to judge where the curve began while still moving, which is the same judgement needed later for a, d and g. Expect early attempts to leave the loop open or to overshoot past the join.',
      'The snail is a good mnemonic precisely because a shell spirals inward. Trace down the snail body, then round into the shell.',
      'Worth pairing with the 9 sheet afterwards, since the two digits loop in opposite directions and comparing them directly makes both clearer.',
      'छः appears beside SIX in the speech bubble.',
    ],
    skillsIntro:
      'One long curve closing into an anticlockwise loop, which is the same movement letters like a and d need.',
    skills: [
      'Closing a loop back onto the starting line',
      'Controlling a long continuous curve',
      'Turning anticlockwise deliberately',
      'Linking the numeral 6 to छः and six',
    ],
    faqs: [
      {
        q: 'My child leaves the loop of the 6 open.',
        a: 'Closing a loop means judging where the curve started while the hand is still moving, which is genuinely hard. Tracing the dotted guide slowly a few times does more than explaining it.',
      },
      {
        q: 'Should we do 6 and 9 together?',
        a: 'Doing them one after the other works well. They loop in opposite directions, so comparing them directly makes the difference clearer than meeting each on its own.',
      },
    ],
  },

  127: {
    slug: 'trace-number-7',
    h1: 'Trace the number 7: free printable tracing worksheet',
    metaTitle: 'Free Number 7 Tracing Worksheet (PDF)',
    metaDescription:
      'Free printable number 7 tracing worksheet for ages 3 to 6. The 7 is drawn as a playground slide, with bilingual instructions and the Hindi word सात included.',
    hindi: 'सात',
    hindiInstruction: 'चलो गिनती सीखें!',
    body: [
      'The number 7 drawn as a playground slide, the ladder forming the top bar and the slide itself the diagonal, with a dotted 7 alongside.',
      'After the 6, this one comes as a relief. A 7 has no curves at all. It is a straight line across the top and a straight diagonal down, one continuous stroke with a single sharp corner between them.',
      'That makes it the second easiest digit after the 1, and a good one to reach for when your child has had a frustrating session on something harder. Finishing a sheet cleanly matters for how willing they are to sit down next time.',
      'The one thing to watch is the angle of the diagonal. Children often draw it almost vertical, which turns the 7 into something closer to a T. The slide picture helps, since a slide that goes straight down is not much of a slide.',
      'सात appears beside SEVEN in the speech bubble.',
    ],
    skillsIntro:
      'Two straight lines and one corner, with no curves anywhere. The easiest digit after the 1.',
    skills: [
      'Drawing a controlled diagonal line',
      'Making a sharp corner without lifting the pencil',
      'Judging the slope of a diagonal',
      'Linking the numeral 7 to सात and seven',
    ],
    faqs: [
      {
        q: 'My child draws the 7 almost like a T.',
        a: 'The diagonal is coming down too steeply. The slide picture helps, because a slide going straight down would not work as a slide.',
      },
      {
        q: 'Is the 7 an easy digit to practise?',
        a: 'Yes, it is the second easiest after the 1. It is a good one to use after a difficult session, since finishing something cleanly makes the next attempt more likely.',
      },
    ],
  },

  128: {
    slug: 'trace-number-8',
    h1: 'Trace the number 8: free printable tracing worksheet',
    metaTitle: 'Free Number 8 Tracing Worksheet (PDF)',
    metaDescription:
      'Free printable number 8 tracing worksheet for ages 3 to 6. The hardest single-stroke digit, drawn as a knotted rope, with the Hindi word आठ on the sheet.',
    hindi: 'आठ',
    hindiInstruction: 'चलो गिनती सीखें!',
    body: [
      'The number 8 drawn as a knotted rope, with a dotted 8 beside it to trace.',
      'This is the hardest of the ten. An 8 is a single unbroken stroke that crosses back through its own middle and closes two loops, one above and one below, in opposite directions. Nothing else in the set asks for that.',
      'Two things usually go wrong. The stroke crosses in the wrong place, so the top and bottom loops end up different sizes, or the child gives up on the crossing and draws two circles stacked instead. The second is very common and worth noticing rather than correcting sharply, because two stacked circles show the child understands the shape even if the hand cannot yet make it in one movement.',
      'The rope is an unusually good picture for this. A knot genuinely does cross over itself, which is precisely the movement the digit needs.',
      'Leave this one until 6 and 9 are comfortable, since both loop directions are needed here.',
      'आठ appears beside EIGHT in the speech bubble.',
    ],
    skillsIntro:
      'The hardest digit here. One unbroken stroke crossing itself and closing two loops in opposite directions.',
    skills: [
      'Crossing a stroke back through its own path',
      'Closing two loops in one movement',
      'Turning both clockwise and anticlockwise',
      'Linking the numeral 8 to आठ and eight',
    ],
    faqs: [
      {
        q: 'My child draws two circles instead of one 8.',
        a: 'That is very common and shows they understand the shape even though the hand cannot yet make it in one movement. The single stroke usually arrives a few months later.',
      },
      {
        q: 'When should we try the 8?',
        a: 'After 6 and 9 are comfortable. The 8 needs both loop directions, so meeting each one separately first makes it much less frustrating.',
      },
    ],
  },

  129: {
    slug: 'trace-number-9',
    h1: 'Trace the number 9: free printable tracing worksheet',
    metaTitle: 'Free Number 9 Tracing Worksheet (PDF)',
    metaDescription:
      'Free printable number 9 tracing worksheet for ages 3 to 6. The 9 is drawn as a lollipop, with bilingual instructions and the Hindi word नौ printed on the sheet.',
    hindi: 'नौ',
    hindiInstruction: 'चलो गिनती सीखें!',
    body: [
      'The number 9 drawn as a lollipop, the round sweet forming the loop and the stick forming the tail, with a dotted 9 alongside.',
      'A 9 is a closed loop at the top followed by a straight line coming down from it. The loop turns clockwise, which is the opposite direction from the loop in a 6, and that opposition is the whole reason to do these two sheets near each other.',
      'Children who have just mastered the 6 often carry the anticlockwise habit into the 9 and end up with a shape that reads as a mirrored 6. Pointing out that one loop sits at the top and the other at the bottom helps more than talking about direction, because top and bottom are easier for a young child to hold in mind than clockwise and anticlockwise.',
      'The lollipop is a clean mnemonic. Round part first, then the stick straight down.',
      'नौ appears beside NINE in the speech bubble.',
    ],
    skillsIntro:
      'A clockwise loop with a straight tail, deliberately the opposite of the 6.',
    skills: [
      'Turning a loop clockwise',
      'Attaching a straight line to a closed curve',
      'Telling a 9 apart from a 6',
      'Linking the numeral 9 to नौ and nine',
    ],
    faqs: [
      {
        q: 'My child muddles 6 and 9.',
        a: 'They loop in opposite directions, which is hard to hold in mind. Talking about where the loop sits, at the top for a 9 and the bottom for a 6, works better than explaining clockwise and anticlockwise.',
      },
      {
        q: 'Which should we practise first, 6 or 9?',
        a: 'Either, but do them close together. Meeting the two loop directions side by side makes the contrast clearer than learning each in isolation.',
      },
    ],
  },

  130: {
    slug: 'trace-number-10',
    h1: 'Trace the number 10: free printable tracing worksheet',
    metaTitle: 'Free Number 10 Tracing Worksheet (PDF)',
    metaDescription:
      'Free printable number 10 tracing worksheet for ages 3 to 6. The first two-digit number, drawn as a candle and a donut, with the Hindi word दस included.',
    hindi: 'दस',
    hindiInstruction: 'चलो गिनती सीखें!',
    body: [
      'The number 10 drawn as a candle standing beside a donut, with a dotted 10 alongside to trace.',
      'This sheet is doing something none of the others do. Every previous number was one symbol. Ten is two symbols standing next to each other, and understanding that is a genuinely bigger idea than any of the stroke work that came before.',
      'For a young child, the natural assumption is that a bigger number needs a bigger or more complicated symbol. Ten breaks that. It reuses the 1 they already know, puts a 0 after it, and the meaning changes completely. Most children accept this without question at first and only find it strange later, which is fine.',
      'On the page, the thing to watch is spacing. The 1 and the 0 need to sit close together as one number rather than drifting apart into two separate ones. The candle and donut sitting side by side is the picture that holds them together.',
      'दस appears beside TEN in the speech bubble.',
    ],
    skillsIntro:
      'The first number written with two symbols, which is a bigger idea than it appears.',
    skills: [
      'Writing two numerals as one number',
      'Spacing digits close together',
      'Reusing the 1 in a new meaning',
      'Linking the numeral 10 to दस and ten',
    ],
    faqs: [
      {
        q: 'Why is 10 harder than 9 if the strokes are easier?',
        a: 'The strokes are easier, but the idea is bigger. Ten is the first number written with two symbols, and the 1 no longer means one on its own.',
      },
      {
        q: 'My child writes the 1 and 0 far apart.',
        a: 'Spacing is the main thing to watch on this sheet. The candle and donut sitting side by side helps show that the two symbols belong together as one number.',
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
