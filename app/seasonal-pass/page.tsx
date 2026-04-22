import Link from 'next/link';
import { seasonalCalendar } from '../seasonal-calendar/calendarData';
import styles from './seasonalPass.module.css';

const colorMap: Record<string, string> = {
  red: 'linear-gradient(135deg, #FF4E6A, #FF8A3D)',
  blue: 'linear-gradient(135deg, #4A9EFF, #9B5DE5)',
  green: 'linear-gradient(135deg, #4CD964, #2EC4B6)',
  yellow: 'linear-gradient(135deg, #FFD23F, #FF8A3D)',
  purple: 'linear-gradient(135deg, #9B5DE5, #FF7EB9)',
  pink: 'linear-gradient(135deg, #FF7EB9, #FF4E6A)',
  teal: 'linear-gradient(135deg, #2EC4B6, #4A9EFF)',
  orange: 'linear-gradient(135deg, #FF8A3D, #FFD23F)',
};

// Calculate total standalone price from the calendar
const totalStandalonePrice = seasonalCalendar.reduce((sum, month) => {
  const priceMatch = month.primaryDrop.price.match(/₹(\d+)/);
  return sum + (priceMatch ? parseInt(priceMatch[1], 10) : 0);
}, 0);

const PASS_PRICE = 999;
const SAVINGS = totalStandalonePrice - PASS_PRICE;

export default function SeasonalPassPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroSticker}>🎁 Brand new · Limited launch pricing</div>
            <h1 className={styles.heroTitle}>
              Every festive bundle,
              <br />
              <span className="rainbow-word">all year long</span>.
            </h1>
            <p className={styles.heroSubtitle}>
              Holi in March. Summer Mega in April. Diwali in November. 12 themed bundles,
              one yearly price. Save ₹{SAVINGS.toLocaleString('en-IN')} vs buying each separately.
            </p>
            <div className={styles.heroPriceRow}>
              <div className={styles.priceBlock}>
                <div className={styles.priceStrike}>₹{totalStandalonePrice.toLocaleString('en-IN')}</div>
                <div className={styles.pricePrimary}>
                  <span className={styles.priceCurrency}>₹</span>
                  <span className={styles.priceAmount}>{PASS_PRICE}</span>
                  <span className={styles.pricePeriod}>/year</span>
                </div>
                <div className={styles.priceNote}>That&apos;s just ₹{Math.round(PASS_PRICE / 12)}/month</div>
              </div>
              <a href="#buy" className={styles.heroCta}>
                Get Seasonal Pass →
              </a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroCollage}>
              <div className={styles.collageItem} style={{ background: 'linear-gradient(135deg, #FFD23F, #FF8A3D)', top: '0%', left: '15%', transform: 'rotate(-8deg)' }}>🌈<br/>Holi</div>
              <div className={styles.collageItem} style={{ background: 'linear-gradient(135deg, #4A9EFF, #9B5DE5)', top: '8%', right: '5%', transform: 'rotate(5deg)' }}>☀️<br/>Summer</div>
              <div className={styles.collageItem} style={{ background: 'linear-gradient(135deg, #FF4E6A, #FF8A3D)', top: '35%', left: '0%', transform: 'rotate(4deg)' }}>🇮🇳<br/>I-Day</div>
              <div className={styles.collageItem} style={{ background: 'linear-gradient(135deg, #FFD23F, #FF4E6A)', top: '42%', right: '12%', transform: 'rotate(-6deg)' }}>🪔<br/>Diwali</div>
              <div className={styles.collageItem} style={{ background: 'linear-gradient(135deg, #4CD964, #2EC4B6)', bottom: '5%', left: '20%', transform: 'rotate(7deg)' }}>🎁<br/>Year-end</div>
              <div className={styles.collageItem} style={{ background: 'linear-gradient(135deg, #9B5DE5, #FF7EB9)', bottom: '12%', right: '0%', transform: 'rotate(-4deg)' }}>🌧️<br/>Monsoon</div>
              <div className={styles.collageBadge}>
                <div className={styles.collageBadgeTop}>Save</div>
                <div className={styles.collageBadgeNum}>₹{SAVINGS.toLocaleString('en-IN')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED — the 12 months */}
      <section className={styles.included}>
        <div className="section-head">
          <div className="section-eyebrow">~ What&apos;s inside ~</div>
          <h2>12 festive bundles. 1 yearly price. 📅</h2>
          <p>Every bundle ships to your dashboard on its launch day. No extra cost, no emails to manage — it just appears.</p>
        </div>

        <div className={styles.calendarGrid}>
          {seasonalCalendar.map((month) => (
            <div key={month.month} className={styles.monthCard}>
              <div
                className={styles.monthThumb}
                style={{ background: colorMap[month.primaryDrop.color] }}
              >
                <div className={styles.monthEmoji}>{month.primaryDrop.emoji}</div>
                <div className={styles.monthLabel}>{month.month}</div>
              </div>
              <div className={styles.monthBody}>
                <h4>{month.primaryDrop.title}</h4>
                <div className={styles.monthStandalone}>
                  Standalone: <span>{month.primaryDrop.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.calendarFooter}>
          <div className={styles.calTotal}>
            <div>
              <div className={styles.calTotalLabel}>Total standalone value</div>
              <div className={styles.calTotalValue}>₹{totalStandalonePrice.toLocaleString('en-IN')}</div>
            </div>
            <div className={styles.calArrow}>→</div>
            <div>
              <div className={styles.calTotalLabel}>With Seasonal Pass</div>
              <div className={styles.calTotalValueHighlight}>₹{PASS_PRICE}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ALSO INCLUDED — free perks */}
      <section className={styles.perks}>
        <div className="section-head">
          <div className="section-eyebrow">~ Plus these goodies ~</div>
          <h2>Pass members also get... 🎁</h2>
        </div>

        <div className={styles.perksGrid}>
          <div className={styles.perkCard} style={{ background: '#FFE5EC' }}>
            <div className={styles.perkIcon}>⚡</div>
            <h4>Early access</h4>
            <p>Get each festive bundle 48 hours before public launch. First in line for limited drops.</p>
          </div>
          <div className={styles.perkCard} style={{ background: '#E5F4FF' }}>
            <div className={styles.perkIcon}>🎯</div>
            <h4>Bonus free sheets</h4>
            <p>Pass members get an extra 3–5 themed free sheets each month, not available publicly.</p>
          </div>
          <div className={styles.perkCard} style={{ background: '#FFF4CC' }}>
            <div className={styles.perkIcon}>💬</div>
            <h4>Seasonal WhatsApp</h4>
            <p>Dedicated WhatsApp group just for Pass members. Ideas, planning, festival prep with Chutki.</p>
          </div>
          <div className={styles.perkCard} style={{ background: '#E8F9E8' }}>
            <div className={styles.perkIcon}>📆</div>
            <h4>Annual planning guide</h4>
            <p>A year-view PDF showing you when each drop comes and how to plan activities ahead.</p>
          </div>
          <div className={styles.perkCard} style={{ background: '#F0E6FF' }}>
            <div className={styles.perkIcon}>🎁</div>
            <h4>Birthday bonus</h4>
            <p>A special surprise sheet pack on your child&apos;s birthday month, personalised with their name.</p>
          </div>
          <div className={styles.perkCard} style={{ background: '#FFE8D6' }}>
            <div className={styles.perkIcon}>🔄</div>
            <h4>Renew or stop</h4>
            <p>Your pass auto-renews annually. Cancel anytime — you keep everything you&apos;ve already received.</p>
          </div>
        </div>
      </section>

      {/* COMPARISON WITH MAGIC PASS */}
      <section className={styles.comparison}>
        <div className="section-head">
          <div className="section-eyebrow">~ Which pass is right? ~</div>
          <h2>Seasonal Pass vs Magic Pass 🤔</h2>
          <p>Both are subscriptions. They serve different kinds of families.</p>
        </div>

        <div className={styles.compareGrid}>
          <div className={styles.compareCard} style={{ background: 'linear-gradient(135deg, #FFE8CC, #FFF4D6)' }}>
            <div className={styles.compareTag}>THIS PAGE</div>
            <h3>🎁 Seasonal Pass</h3>
            <div className={styles.comparePrice}>₹999<span>/year</span></div>
            <div className={styles.comparePer}>~₹83/month</div>
            <ul>
              <li>✓ 12 festive bundles across the year</li>
              <li>✓ Early access + bonus sheets</li>
              <li>✓ Seasonal WhatsApp group</li>
              <li>✓ Birthday bonus pack</li>
              <li className={styles.dimLi}>✖ No daily new sheets</li>
              <li className={styles.dimLi}>✖ No live workshops</li>
              <li className={styles.dimLi}>✖ No Phase 2 early access</li>
            </ul>
            <div className={styles.compareWhoFor}>
              <strong>Best for:</strong> Families who want exciting drops at festivals but don&apos;t need daily content.
            </div>
          </div>

          <div className={styles.compareCard} style={{ background: 'linear-gradient(135deg, #F0E6FF, #FFE5EC)' }}>
            <div className={styles.compareTag} style={{ background: 'var(--purple)' }}>COMING SOON</div>
            <h3>🔁 Magic Pass</h3>
            <div className={styles.comparePrice}>₹199<span>/month</span></div>
            <div className={styles.comparePer}>₹2,388/year (or ₹149/mo early-bird)</div>
            <ul>
              <li>✓ Everything in Seasonal Pass</li>
              <li>✓ Unlimited access to all bundles</li>
              <li>✓ 4–6 new sheets every week</li>
              <li>✓ Monthly live workshops with Chutki</li>
              <li>✓ Phase 2 early access (books, toys)</li>
              <li>✓ Members-only exclusive sheets</li>
              <li>✓ 1-on-1 calls with Chutki (annual)</li>
            </ul>
            <div className={styles.compareWhoFor}>
              <strong>Best for:</strong> Serious year-round learners. Families who want the full Chutki experience.
            </div>
          </div>
        </div>

        <div className={styles.compareNote}>
          💡 <strong>Good to know:</strong> Magic Pass (when it launches) will include everything in Seasonal Pass.
          So if you&apos;re unsure, start with Seasonal Pass — if you love it, upgrade to Magic Pass later and we&apos;ll
          credit your remaining Seasonal Pass months toward it.
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="section-head">
          <div className="section-eyebrow">~ Common questions ~</div>
          <h2>What parents usually ask 💭</h2>
        </div>

        <div className={styles.faqList}>
          <details className={styles.faqItem}>
            <summary>How does the Seasonal Pass work?</summary>
            <p>
              When you buy the pass, your account gets &quot;Pass Member&quot; status for 12 months.
              Every festive bundle we release during that year appears automatically in your
              dashboard — no extra payment, no links to click. Just sign in and download.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>What if I buy mid-year — do I get the earlier drops?</summary>
            <p>
              Yes. Buying the pass gives you access to <strong>all 12 drops in the current calendar year</strong>,
              including ones already released. If you join in June, you still get Holi, Republic Day,
              Summer — all of them. Your pass starts from the first drop of the year, not the date of purchase.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>What if my child outgrows the content during the year?</summary>
            <p>
              Each bundle has an age focus, but most sheets work for ages 2–8. And the pass also
              includes bonus free sheets each month — which we pick to cover a broader range.
              Plus, the bundles are yours to keep forever, even after the pass ends.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>Is this better than just buying bundles as I need them?</summary>
            <p>
              It depends. If you&apos;d buy <strong>3 or more bundles in a year</strong>, the pass saves you money.
              If you only want 1–2 specific bundles, buying them standalone is cheaper.
              Be honest with yourself — we won&apos;t mind if you pick the individual route.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>Does it auto-renew?</summary>
            <p>
              Yes, on the same date next year. You&apos;ll get an email 7 days before renewal so you
              can cancel if you want. If you cancel, you still keep everything you&apos;ve already
              downloaded — forever.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary>Can I gift this to a family member?</summary>
            <p>
              Not yet, but we&apos;re working on gift codes. Drop us a message on WhatsApp if you want
              to gift one — we&apos;ll sort it out manually until the feature is live.
            </p>
          </details>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta} id="buy">
        <div className={styles.ctaBox}>
          <div className={styles.ctaLeft}>
            <h2 className={styles.ctaTitle}>
              Save <span className="rainbow-word">₹{SAVINGS.toLocaleString('en-IN')}</span>.
              Celebrate every festival with Chutki.
            </h2>
            <p className={styles.ctaText}>
              12 months. 12 bundles. Early access, bonus sheets, WhatsApp group, birthday surprise.
              One-time yearly payment.
            </p>
            <div className={styles.ctaPriceRow}>
              <div className={styles.ctaPrice}>
                <span className={styles.ctaCurrency}>₹</span>
                <span className={styles.ctaAmount}>999</span>
                <span className={styles.ctaPeriod}>/year</span>
              </div>
              <Link href="/login" className={styles.ctaButton}>
                Get My Pass →
              </Link>
            </div>
            <div className={styles.ctaFine}>
              🔒 Secure UPI / card payment via Razorpay · Cancel anytime · 7-day refund guarantee
            </div>
          </div>
          <div className={styles.ctaEmoji}>🎁</div>
        </div>
      </section>
    </>
  );
}
