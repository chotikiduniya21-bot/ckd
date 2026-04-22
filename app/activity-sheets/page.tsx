import { freeSheets, sheets, bundles } from './sheetsData';
import FreeSheetsGrid from './FreeSheetsGrid';
import styles from './sheets.module.css';

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

const tagColors: Record<string, string> = {
  bestseller: 'var(--red)',
  new: 'var(--green)',
  popular: 'var(--purple)',
};

const tagLabels: Record<string, string> = {
  bestseller: '🔥 BESTSELLER',
  new: '✨ NEW',
  popular: '💕 POPULAR',
};

export default function ActivitySheetsPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-sticker">📝 Phase 1 · Live Now</div>
        <h1>
          <span className="rainbow-word">Printable</span> activity sheets
          <br />for little big minds
        </h1>
        <p>
          Designed by a Montessori teacher. Start with free sheets — fall in love —
          then dive deeper into the full packs. No catch, no email wall on the free ones.
        </p>
      </section>

      {/* ============ FREE FOREVER — THE STAR OF THE PAGE ============ */}
      <section className={styles.freeSection}>
        <div className={styles.freeHeader}>
          <div className={styles.freeHeaderLeft}>
            <div className={styles.freeBanner}>
              <span className={styles.freeGift}>🎁</span>
              <div>
                <div className={styles.freeEyebrow}>Free Forever · No email required</div>
                <h2 className={styles.freeTitle}>
                  Start with <span className="rainbow-word">8 free sheets</span>
                </h2>
              </div>
            </div>
            <p className={styles.freeSubtitle}>
              Not a sample. Not a trial. Yours to print, share with your WhatsApp mom group,
              and use as long as you like — completely free. This is how we say thank you
              to every parent who trusts us.
            </p>
          </div>
          <div className={styles.freeStats}>
            <div className={styles.freeStatCard}>
              <div className={styles.freeStatNum}>83,900+</div>
              <div className={styles.freeStatLabel}>Free sheets downloaded</div>
            </div>
            <div className={styles.freeStatCard}>
              <div className={styles.freeStatNum}>200+</div>
              <div className={styles.freeStatLabel}>Indian cities using them</div>
            </div>
          </div>
        </div>

        <FreeSheetsGrid sheets={freeSheets} />

        <div className={styles.freeNudge}>
          <span>🌱</span>
          <p>
            Loved these? The paid packs below go <strong>much deeper</strong> — 20–30 pages each,
            parent guides, answer keys, and full curriculum sequences. Pennies per page.
          </p>
        </div>
      </section>

      {/* ============ TRANSITION DIVIDER ============ */}
      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
        <div className={styles.dividerText}>
          <span className={styles.dividerSpan}>✨ Ready for more? Meet our premium packs ✨</span>
        </div>
        <div className={styles.dividerLine}></div>
      </div>

      {/* TRUST BAR */}
      <section className={styles.trustBar}>
        <div className={styles.trustItems}>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>🇮🇳</div>
            <div><strong>UPI Payment</strong><br /><span>Paytm, PhonePe, GPay</span></div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>⚡</div>
            <div><strong>Instant Download</strong><br /><span>PDF in your dashboard in 2 min</span></div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>🔁</div>
            <div><strong>Lifetime Access</strong><br /><span>Re-download anytime from dashboard</span></div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>💛</div>
            <div><strong>Happiness Promise</strong><br /><span>Not loving it? Email us, full refund</span></div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className={styles.filters}>
        <div className={styles.filterRow}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Age:</span>
            {['All', '2–4', '3–5', '4–7'].map((age, i) => (
              <button key={age} className={`${styles.filterPill} ${i === 0 ? styles.filterActive : ''}`}>
                {age}
              </button>
            ))}
          </div>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Sort:</span>
            <select className={styles.select}>
              <option>Most loved</option>
              <option>New first</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* PAID SHEETS GRID */}
      <section className={styles.sheetsSection}>
        <div className={styles.sheetsGrid}>
          {sheets.map((sheet) => (
            <div key={sheet.id} className={styles.sheetCard}>
              {sheet.tag && (
                <div
                  className={styles.cardTag}
                  style={{ background: tagColors[sheet.tag] }}
                >
                  {tagLabels[sheet.tag]}
                </div>
              )}
              <div
                className={styles.sheetThumb}
                style={{ background: colorMap[sheet.color] }}
              >
                <div className={styles.sheetEmoji}>{sheet.emoji}</div>
                <div className={styles.sheetPageBadge}>{sheet.pages} pages</div>
              </div>
              <div className={styles.sheetBody}>
                <div className={styles.sheetAge}>Ages {sheet.ageRange}</div>
                <h3 className={styles.sheetTitle}>{sheet.title}</h3>
                <p className={styles.sheetDesc}>{sheet.description}</p>
                <div className={styles.sheetFooter}>
                  <div className={styles.priceBlock}>
                    <span className={styles.price}>₹{sheet.price}</span>
                  </div>
                  <button className={styles.addBtn}>Buy →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUNDLES */}
      <section className={styles.bundlesSection}>
        <div className="section-head">
          <div className="section-eyebrow">~ Save More, Learn More ~</div>
          <h2>Bundle &amp; Save 💰</h2>
          <p>Most parents start with one pack, love it, and come back for more. Skip that trip — bundle up and save up to ₹125.</p>
        </div>

        <div className={styles.bundlesGrid}>
          {bundles.map((bundle, i) => (
            <div
              key={bundle.id}
              className={`${styles.bundleCard} ${i === 1 ? styles.bundleFeatured : ''}`}
            >
              {i === 1 && <div className={styles.bundleBadge}>⭐ MOST LOVED</div>}
              <div
                className={styles.bundleTop}
                style={{ background: colorMap[bundle.color] }}
              >
                <div className={styles.bundleEmoji}>{bundle.emoji}</div>
                <h3 className={styles.bundleTitle}>{bundle.title}</h3>
                <div className={styles.bundleItems}>{bundle.items} activity packs</div>
              </div>
              <div className={styles.bundleBody}>
                <p className={styles.bundleDesc}>{bundle.description}</p>
                <ul className={styles.bundleList}>
                  {bundle.included.map((item, j) => (
                    <li key={j}>✓ {item}</li>
                  ))}
                </ul>
                <div className={styles.bundlePriceBlock}>
                  <div>
                    <span className={styles.bundleStrike}>₹{bundle.originalPrice}</span>
                    <span className={styles.bundlePrice}>₹{bundle.price}</span>
                  </div>
                  <div className={styles.bundleSave}>{bundle.tag}</div>
                </div>
                <button className={styles.bundleBtn}>
                  Get {bundle.title} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIPTION — COMING SOON STATE */}
      <section className={styles.subscriptionSection}>
        <div className={styles.subscriptionBox}>
          <div className={styles.comingSoonBadge}>⏳ COMING SOON</div>
          <div className={styles.subLeft}>
            <div className="sticker" style={{ background: 'var(--yellow)' }}>🔁 For Regular Learners</div>
            <h2 className={styles.subTitle}>
              The <span className="rainbow-word">Magic Pass</span> — coming soon
            </h2>
            <p className={styles.subText}>
              A monthly subscription for families who want <em>everything</em>. New sheets every week,
              unlimited downloads, priority access to Phase 2 books &amp; toys, and our private parent community.
            </p>
            <ul className={styles.subList}>
              <li>✓ Unlimited sheet downloads (new + archive)</li>
              <li>✓ 4–6 new sheets added every month</li>
              <li>✓ Early access to books &amp; toys (Phase 2)</li>
              <li>✓ WhatsApp parent community</li>
              <li>✓ Cancel anytime, no lock-in</li>
            </ul>
          </div>
          <div className={styles.subRight}>
            <div className={styles.subPriceCard}>
              <div className={styles.subPriceLabel}>Launching soon at</div>
              <div className={styles.subPriceMain}>
                <span className={styles.subCurrency}>₹</span>
                <span className={styles.subAmount}>149</span>
                <span className={styles.subUnit}>/month</span>
              </div>
              <div className={styles.subPriceCompare}>
                Early subscribers get <strong>Lifetime ₹99/month</strong> pricing 🎉
              </div>
              <form className={styles.waitlistForm}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={styles.waitlistInput}
                />
                <button className={styles.waitlistBtn} type="submit">
                  Join Waitlist →
                </button>
              </form>
              <div className={styles.subNote}>
                🔒 We&apos;ll only email you when it launches. No spam.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className={styles.socialProof}>
        <div className={styles.proofHead}>
          <h2>Parents in 200+ Indian cities trust us 💛</h2>
        </div>
        <div className={styles.proofGrid}>
          <div className={styles.testimonial}>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
            <p>&quot;Downloaded the free Hindi starter, my 4-year-old finished it in a day. Bought the full pack immediately.&quot;</p>
            <div className={styles.testimonialAuthor}>— Priya, Lucknow</div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
            <p>&quot;Free sheets se start kiya, ab poora bundle hai. Chutki didi kamaal hai!&quot;</p>
            <div className={styles.testimonialAuthor}>— Rohan, Pune</div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
            <p>&quot;Quality same as ₹500 international worksheets, at 1/10th the price. UPI payment was instant.&quot;</p>
            <div className={styles.testimonialAuthor}>— Meera, Delhi</div>
          </div>
        </div>
      </section>
    </>
  );
}
