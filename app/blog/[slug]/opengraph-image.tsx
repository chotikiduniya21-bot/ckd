import { ImageResponse } from 'next/og';
import { blogPosts, getBlogPostBySlug } from '../blogData';

export const runtime = 'nodejs';
export const alt = 'Choti Ki Duniya — parent blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

const categoryColor: Record<string, string> = {
  'Hindi Learning': '#FF8A3D',
  'Child Development': '#4A9EFF',
  'Parenting': '#FF7EB9',
  'Montessori': '#2EC4B6',
  'School Readiness': '#9B5DE5',
  'Activities & Play': '#4CD964',
  'Behaviour & Discipline': '#FF4E6A',
  'Language Development': '#FFD23F',
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  const title = post?.title ?? 'Choti Ki Duniya';
  const category = post?.category ?? 'Parent Blog';
  const accent = categoryColor[category] ?? '#FFD23F';

  const fontSize = title.length > 90 ? 50 : title.length > 60 ? 58 : 66;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#FFF8EC',
          padding: '58px 70px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 16,
            background: accent,
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              background: accent,
              color: '#2A1B3D',
              fontSize: 25,
              fontWeight: 700,
              padding: '9px 22px',
              borderRadius: 999,
              border: '3px solid #2A1B3D',
            }}
          >
            {category}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            fontSize,
            fontWeight: 800,
            color: '#2A1B3D',
            lineHeight: 1.14,
            letterSpacing: -1.5,
            paddingTop: 20,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '4px solid #2A1B3D',
            paddingTop: 26,
          }}
        >
          <div style={{ display: 'flex', fontSize: 30, color: '#2A1B3D', fontWeight: 700 }}>
            By Choti · Choti Ki Duniya
          </div>
          <div style={{ display: 'flex', fontSize: 27, color: '#5E4B7D' }}>
            chotikiduniya.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
