export interface ChotiVideo {
  /** YouTube video ID (the part after v= or /shorts/ in the URL).
   *  e.g. https://www.youtube.com/shorts/TrvUUWYbgAo → 'TrvUUWYbgAo' */
  id: string;
  /** Video title (matches what's on YouTube) */
  title: string;
  /** Optional: duration in human format e.g. '5:42' */
  duration?: string;
  /** Optional: age range tag e.g. '3-5', '5-7' */
  ageRange?: string;
  /** Optional: short hook/category e.g. 'Hindi rhyme', 'Counting' */
  category?: string;
  /** Is this a YouTube Short? Affects URL construction. */
  isShort?: boolean;
}

/**
 * Hand-curated list of YouTube videos to feature on the /videos page.
 * Update this list as Choti uploads new videos.
 */
export const chotiVideos: ChotiVideo[] = [
  {
    id: 'TrvUUWYbgAo',
    title: 'Paanch Chote Bandar — Five Little Monkeys',
    category: 'Hindi rhyme',
    ageRange: '2-5',
    isShort: true,
  },
  {
    id: 'fD3OeFmh9pc',
    title: 'Main Toh So Rahi Thi — मैं तो सो रही थी',
    category: 'Hindi poem',
    ageRange: '2-5',
    isShort: true,
  },
  {
    id: 'nn1gheSkFQM',
    title: 'Pyara Gubbara Mera — गुब्बारे वाला',
    category: 'Hindi rhyme',
    ageRange: '2-5',
    isShort: true,
  },
  {
    id: 'LEOwjpuapKQ',
    title: 'Aloo Kachaloo Beta Kahan Gaye The — आलू कचालू बेटा',
    category: 'Hindi rhyme',
    ageRange: '2-5',
    isShort: true,
  },
  {
    id: 'Eq1mSQ1ZskM',
    title: 'Barish Aayi Cham Cham Cham',
    category: 'Hindi rhyme',
    ageRange: '2-5',
    isShort: true,
  },
  {
    id: '0mhyCCPXBxs',
    title: 'Main Tota Hare Rang Ka — मैं तोता हरे रंग का',
    category: 'Hindi rhyme',
    ageRange: '2-5',
    isShort: true,
  },
];
