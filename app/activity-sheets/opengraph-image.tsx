import { ImageResponse } from 'next/og';
import fs from 'node:fs';
import path from 'node:path';
import { freeSheets } from './sheetsData';

export const runtime = 'nodejs';
export const alt = 'Free printable activity sheets for kids 2–8 — Choti Ki Duniya';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const SHOWCASE_IDS = [101, 111, 121, 131];

function thumbDataUri(id: number) {
  try {
    const buf = fs.readFileSync(
      path.join(process.cwd(), 'public', 'sheet-thumbs', `${id}.png`),
    );
    return `data:image/png;base64,${buf.toString('base64')}`;
  } catch {
    return null;
  }
}

export default async function Image() {
  const thumbs = SHOWCASE_IDS.map(thumbDataUri).filter(Boolean) as string[];
  const count = freeSheets.length;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#FFF8EC',
          padding: '54px 60px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 62,
              fontWeight: 800,
              color: '#2A1B3D',
              letterSpacing: -1.5,
            }}
          >
            {count} free printable activity sheets
          </div>
          <div style={{ display: 'flex', fontSize: 31, color: '#5E4B7D', marginTop: 14 }}>
            Letters · Numbers · Coloring · Tracing · Daily routines · Ages 2–8
          </div>
        </div>

        <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 22 }}>
          {thumbs.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={src}
              width={226}
              height={320}
              alt=""
              style={{
                borderRadius: 16,
                border: '4px solid #2A1B3D',
                objectFit: 'cover',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              background: '#4CD964',
              color: '#2A1B3D',
              fontSize: 27,
              fontWeight: 700,
              padding: '11px 24px',
              borderRadius: 999,
              border: '3px solid #2A1B3D',
            }}
          >
            Free forever · No email needed
          </div>
          <div style={{ display: 'flex', fontSize: 27, color: '#5E4B7D', marginLeft: 22 }}>
            chotikiduniya.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
