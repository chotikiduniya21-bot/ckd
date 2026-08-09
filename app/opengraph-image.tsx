import { ImageResponse } from 'next/og';
import fs from 'node:fs';
import path from 'node:path';

export const runtime = 'nodejs';
export const alt = 'Choti Ki Duniya — free printable activity sheets for kids 2–8';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

function mascotDataUri() {
  try {
    const buf = fs.readFileSync(path.join(process.cwd(), 'public', 'mascot.png'));
    return `data:image/png;base64,${buf.toString('base64')}`;
  } catch {
    return null;
  }
}

export default async function Image() {
  const mascot = mascotDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #FFF8EC 0%, #FFF4D6 100%)',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 14, display: 'flex' }}>
          {['#FF4E6A', '#FF8A3D', '#FFD23F', '#4CD964', '#2EC4B6', '#4A9EFF', '#9B5DE5'].map((c) => (
            <div key={c} style={{ flex: 1, background: c }} />
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '70px 0 70px 70px',
            width: 730,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              background: '#FFD23F',
              color: '#2A1B3D',
              fontSize: 26,
              fontWeight: 700,
              padding: '10px 22px',
              borderRadius: 999,
              border: '3px solid #2A1B3D',
              marginBottom: 28,
            }}
          >
            CHOTI KI DUNIYA
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 68,
              fontWeight: 800,
              color: '#2A1B3D',
              lineHeight: 1.1,
              letterSpacing: -1.5,
            }}
          >
            Where little minds bloom
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 32,
              color: '#5E4B7D',
              marginTop: 24,
              lineHeight: 1.35,
            }}
          >
            Free printable activity sheets, Hindi rhymes &amp; stories for kids 2–8
          </div>

          <div style={{ display: 'flex', marginTop: 36, alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                background: '#FF4E6A',
                color: '#FFF8EC',
                fontSize: 26,
                fontWeight: 700,
                padding: '12px 26px',
                borderRadius: 14,
              }}
            >
              76 free sheets
            </div>
            <div style={{ display: 'flex', fontSize: 26, color: '#5E4B7D', marginLeft: 20 }}>
              chotikiduniya.com
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            width: 470,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {mascot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={mascot} width={380} height={380} alt="" />
          ) : (
            <div
              style={{
                display: 'flex',
                width: 340,
                height: 340,
                borderRadius: 999,
                background: 'linear-gradient(135deg, #FF7EB9, #FFD23F)',
              }}
            />
          )}
        </div>
      </div>
    ),
    size,
  );
}
