import { seasonalCalendar } from './calendarData';
import styles from './calendar.module.css';

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

const trafficLabels: Record<string, { label: string; color: string }> = {
  peak:   { label: '🔥 PEAK', color: 'var(--red)' },
  high:   { label: '📈 HIGH', color: 'var(--orange)' },
  normal: { label: '📊 STEADY', color: 'var(--ink-soft)' },
};

export default function SeasonalCalendarPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-sticker">📅 12-Month Revenue Roadmap</div>
        <h1>
          The <span className="rainbow-word">Seasonal</span> drop calendar
        </h1>
        <p>
          Same sheets. New packaging. 3× the sales. Here&apos;s how to turn your
          evergreen activity packs into 12 months of festive, seasonal drops.
        </p>
      </section>

      {/* ============ THE BIG IDEA — REPACKAGING EXPLAINED ============ */}
      <section className={styles.conceptSection}>
        <div className={styles.conceptBox}>
          <div className={styles.conceptBadge}>💡 THE WHOLE IDEA IN ONE PICTURE</div>
          <h2 className={styles.conceptTitle}>
            One pack becomes <span className="rainbow-word">many drops</span> 🎁
          </h2>
          <p className={styles.conceptSub}>
            You don&apos;t create 12 new products. You <strong>repackage</strong> your
            existing sheets into festive bundles that feel brand new — and parents happily pay for them again.
          </p>

          {/* The repackaging recipe — visual example */}
          <div className={styles.recipeRow}>
            <div className={styles.recipeStep}>
              <div className={styles.recipeLabel}>Base ingredient</div>
              <div className={styles.recipeCard}>
                <div className={styles.recipeEmoji}>🎨</div>
                <div className={styles.recipeName}>Colors &amp; Shapes Pack</div>
                <div className={styles.recipePrice}>₹39 (evergreen)</div>
              </div>
            </div>
            <div className={styles.recipeArrow}>→</div>
            <div className={styles.recipeStep}>
              <div className={styles.recipeLabel}>Festive wrapper</div>
              <div className={styles.recipeToppings}>
                <div className={styles.topping}>🪔 Diwali theme cover</div>
                <div className={styles.topping}>🌈 +4 rangoli pages</div>
                <div className={styles.topping}>⏳ Limited time tag</div>
                <div className={styles.topping}>📣 YouTube launch</div>
              </div>
            </div>
            <div className={styles.recipeArrow}>→</div>
            <div className={styles.recipeStep}>
              <div className={styles.recipeLabel}>New seasonal drop</div>
              <div className={`${styles.recipeCard} ${styles.recipeFeatured}`}>
                <div className={styles.recipeEmoji}>🪔</div>
                <div className={styles.recipeName}>Diwali Festive Bundle</div>
                <div className={styles.recipePriceNew}>₹149 (limited)</div>
                <div className={styles.recipeSales}>3–5× more sales 🚀</div>
              </div>
            </div>
          </div>

          <div className={styles.conceptFooter}>
            <div className={styles.conceptPoint}>
              <strong>Why it works:</strong> Indian parents buy on emotion during festivals, not on price.
            </div>
            <div className={styles.conceptPoint}>
              <strong>Why it&apos;s efficient:</strong> 80% of the content already exists. You&apos;re
              just adding a cover, a theme, and urgency.
            </div>
          </div>
        </div>
      </section>

      {/* WAVES — THREE BUCKETS EXPLAINED */}
      <section className={styles.wavesSection}>
        <div className="section-head">
          <div className="section-eyebrow">~ 3 kinds of months ~</div>
          <h2>Plan around these three waves 🌊</h2>
          <p>Every month of the year falls into one of these buckets. Your strategy changes accordingly.</p>
        </div>

        <div className={styles.wavesGrid}>
          <div className={styles.waveCard} style={{ background: '#E5F4FF' }}>
            <div className={styles.waveNum}>Steady</div>
            <div className={styles.waveMonths}>Jul · Sep · Feb</div>
            <h3>🌱 Quiet months</h3>
            <p>
              No festivals, no school holidays. Sales come from your evergreen catalog at normal prices.
              <strong> Use this time to build your blog and create new content.</strong>
            </p>
          </div>
          <div className={styles.waveCard} style={{ background: '#FFE8CC', borderColor: 'var(--orange)' }}>
            <div className={styles.waveNum}>High</div>
            <div className={styles.waveMonths}>Jan · Mar · Jun · Oct</div>
            <h3>📈 Spike months</h3>
            <p>
              A festival or school event creates urgency — Holi, Republic Day, monsoon back-to-school.
              <strong> Drop a themed bundle, charge 2× normal, sell for 2 weeks.</strong>
            </p>
          </div>
          <div className={styles.waveCard} style={{ background: '#FFE5EC', borderColor: 'var(--red)' }}>
            <div className={styles.waveNum}>Peak</div>
            <div className={styles.waveMonths}>Apr · May · Aug · Nov · Dec</div>
            <h3>🔥 Peak moments</h3>
            <p>
              Summer holidays, admission season, Diwali, Christmas — buying intent is maximum.
              <strong> Launch your biggest bundles, email list, YouTube specials, full push.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* LEGEND */}
      <section className={styles.legendSection}>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: 'var(--red)' }}></span>
            <strong>Peak</strong> — big bundle, all-out push
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: 'var(--orange)' }}></span>
            <strong>High</strong> — festive or seasonal spike
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: '#bfb49c' }}></span>
            <strong>Steady</strong> — evergreen, low-promo month
          </div>
        </div>
      </section>

      {/* CALENDAR GRID */}
      <section className={styles.calendarSection}>
        <div className="section-head">
          <div className="section-eyebrow">~ The 12-month plan ~</div>
          <h2>Every month, mapped out 🗓️</h2>
        </div>

        <div className={styles.calendarGrid}>
          {seasonalCalendar.map((month, i) => {
            const traffic = trafficLabels[month.trafficHint];
            const isPeak = month.trafficHint === 'peak';

            return (
              <div
                key={month.month}
                className={`${styles.monthCard} ${isPeak ? styles.peakCard : ''}`}
                style={{ '--tilt': `${(i % 2 === 0 ? -0.3 : 0.3)}deg` } as React.CSSProperties}
              >
                <div className={styles.monthHead}>
                  <div className={styles.monthNumber}>{String(month.monthNum).padStart(2, '0')}</div>
                  <div>
                    <div className={styles.monthName}>{month.month}</div>
                    <div
                      className={styles.trafficTag}
                      style={{ background: traffic.color }}
                    >
                      {traffic.label}
                    </div>
                  </div>
                </div>

                <div
                  className={styles.dropHero}
                  style={{ background: colorMap[month.primaryDrop.color] }}
                >
                  <div className={styles.dropEmoji}>{month.primaryDrop.emoji}</div>
                  <div className={styles.dropPrice}>{month.primaryDrop.price}</div>
                </div>

                <div className={styles.dropBody}>
                  <div className={styles.dropTypeTag}>PRIMARY DROP</div>
                  <h3 className={styles.dropTitle}>{month.primaryDrop.title}</h3>
                  <p className={styles.dropRationale}>
                    <strong>Why this month:</strong> {month.primaryDrop.rationale}
                  </p>

                  {month.secondaryDrop && (
                    <div className={styles.secondaryDrop}>
                      <div className={styles.secondaryLabel}>+ Mini drop</div>
                      <div className={styles.secondaryRow}>
                        <span className={styles.secondaryEmoji}>{month.secondaryDrop.emoji}</span>
                        <div className={styles.secondaryText}>
                          <strong>{month.secondaryDrop.title}</strong>
                          <span>{month.secondaryDrop.price}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className={styles.connections}>
                    <div className={styles.connectionRow}>
                      <span className={styles.connectionIcon}>📝</span>
                      <div>
                        <div className={styles.connectionLabel}>Blog post</div>
                        <div className={styles.connectionValue}>{month.blogPost}</div>
                      </div>
                    </div>
                    <div className={styles.connectionRow}>
                      <span className={styles.connectionIcon}>📺</span>
                      <div>
                        <div className={styles.connectionLabel}>YouTube theme</div>
                        <div className={styles.connectionValue}>{month.ytTheme}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PLAYBOOK */}
      <section className={styles.playbook}>
        <div className="section-head">
          <div className="section-eyebrow">~ Run each drop like this ~</div>
          <h2>The 3-week execution rhythm 🎯</h2>
        </div>

        <div className={styles.playbookGrid}>
          <div className={styles.playbookCard}>
            <div className={styles.playbookNum}>T-21</div>
            <h4>Plan &amp; repackage</h4>
            <p>Pick existing sheets. Design new festive cover. Add 3–4 themed pages. Write product page.</p>
          </div>
          <div className={styles.playbookCard}>
            <div className={styles.playbookNum}>T-14</div>
            <h4>Tease on YouTube</h4>
            <p>Drop a themed video (Holi craft, summer routine). End with &quot;new pack coming next week.&quot;</p>
          </div>
          <div className={styles.playbookCard}>
            <div className={styles.playbookNum}>T-7</div>
            <h4>Publish the blog</h4>
            <p>Post goes live with teaser. Email list teaser. Instagram community post.</p>
          </div>
          <div className={styles.playbookCard}>
            <div className={styles.playbookNum}>T-0</div>
            <h4>Launch day</h4>
            <p>YouTube video premieres. Email blast. WhatsApp broadcast. 48-hour launch discount.</p>
          </div>
          <div className={styles.playbookCard}>
            <div className={styles.playbookNum}>T+7</div>
            <h4>Ride the momentum</h4>
            <p>Testimonials. User content. &quot;Last chance&quot; email. Move to evergreen pricing.</p>
          </div>
          <div className={styles.playbookCard}>
            <div className={styles.playbookNum}>T+14</div>
            <h4>Review &amp; learn</h4>
            <p>Check conversion, refund rate. Feed learnings into next drop. Start T-21 for next month.</p>
          </div>
        </div>
      </section>

      {/* REVENUE PROJECTION */}
      <section className={styles.projection}>
        <div className={styles.projectionBox}>
          <div className={styles.projectionHead}>
            <span className="sticker" style={{ background: 'var(--green)' }}>💰 Back-of-envelope math</span>
            <h2>What this could realistically earn 📈</h2>
            <p>Assumptions: 8L YouTube subs → ~0.5% monthly click-through → ~2% of visitors buy.</p>
          </div>

          <div className={styles.projectionGrid}>
            <div className={styles.projectionCard}>
              <div className={styles.projectionLabel}>Steady month</div>
              <div className={styles.projectionNum}>₹30k–60k</div>
              <div className={styles.projectionDetail}>
                Evergreen sheet sales + bundles + ads &amp; affiliate
              </div>
            </div>
            <div className={styles.projectionCard} style={{ background: '#FFE8CC', borderColor: 'var(--orange)' }}>
              <div className={styles.projectionLabel}>Peak month</div>
              <div className={styles.projectionNum}>₹1.5L–3L</div>
              <div className={styles.projectionDetail}>
                Festive bundle + 5× traffic + gift-giving intent.
              </div>
            </div>
            <div className={styles.projectionCard} style={{ background: '#E8F9E8', borderColor: 'var(--green)' }}>
              <div className={styles.projectionLabel}>Year 1 total</div>
              <div className={styles.projectionNum}>₹10L–18L</div>
              <div className={styles.projectionDetail}>
                Blended. Excludes brand deals &amp; Phase 2 physical products.
              </div>
            </div>
          </div>

          <div className={styles.projectionNote}>
            ⚠️ Not financial advice — just a directional model. Actual numbers depend on execution,
            YouTube algorithm, and conversion rate tuning.
          </div>
        </div>
      </section>
    </>
  );
}
