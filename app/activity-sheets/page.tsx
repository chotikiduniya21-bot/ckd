import { freeSheets, bundles, universalExtras } from './sheetsData';
import FreeSheetsGrid from './FreeSheetsGrid';
import styles from './sheets.module.css';

const colorMap: Record<string, string> = {
  red: 'linear-gradient(135deg, #FF4E6A, #FF8A3D)',
  blue: 'linear-gradient(135deg, #4A9EFF, #9B5DE5)',
  green: 'linear-gradient(135deg, #4CD964, #2EC4B6)',
  yellow: 'linear-gradient(135deg, #FFD23F, #FF8A3D)',
  purple: 'linear-gradient(135deg, #9B5DE5, #FF7EB9)',
  pink: 'linear-gradient(135deg, #FF7EB9, #FF4E6A)',
};

export default function ActivitySheetsPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-sticker">🎁 Every sheet is free · Always</div>
        <h1>
          All sheets are <span className="rainbow-word">free</span>.
          <br />Forever.
        </h1>
        <p>
          No trial. No email wall. No catch. Every individual activity sheet
          Chutki makes is 100% free to download. We make money through bundles that
          add structure, support, and guides — not by locking up content.
        </p>
      </section>

      {/* ============ FREE SHEETS LIBRARY ============ */}
      <section className={styles.freeSection}>
        <div className={styles.freeHeader}>
          <div className={styles.freeHeaderLeft}>
            <div className={styles.freeBanner}>
              <span className={styles.freeGift}>🌈</span>
              <div>
                <div className={styles.freeEyebrow}>The Free Library</div>
                <h2 className={styles.freeTitle}>
                  <span className="rainbow-word">{freeSheets.length}</span> free sheets · growing weekly
                </h2>
              </div>
            </div>
            <p className={styles.freeSubtitle}>
              Start with these. We add <strong>10–15 new free sheets every week</strong> — letters,
              numbers, Hindi, life skills, colouring. Click, download, print, share with friends.
              Yours forever.
            </p>
          </div>
          <div className={styles.freeStats}>
            <div className={styles.freeStatCard}>
              <div className={styles.freeStatNum}>83,900+</div>
              <div className={styles.freeStatLabel}>Free downloads this month</div>
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
            <strong>Want structure instead of 50 separate downloads?</strong> Our bundles add parent guides,
            learning sequences, progress trackers, certificates, and WhatsApp support — so your child
            learns in the right order, not randomly.
          </p>
        </div>
      </section>

      {/* ============ WHY BUNDLES EXIST — THE VALUE EXPLAINER ============ */}
      <section className={styles.bundleValue}>
        <div className="section-head">
          <div className="section-eyebrow">~ Why pay for bundles? ~</div>
          <h2>Free sheets are the tool. Bundles are the guide. 🗺️</h2>
          <p>Here&apos;s exactly what bundles add that free individual sheets don&apos;t.</p>
        </div>

        <div className={styles.compareBox}>
          <div className={styles.compareCol}>
            <div className={styles.compareHead} style={{ background: '#E8F9E8' }}>
              <div className={styles.compareTag}>FREE SHEETS</div>
              <h3>Just the PDFs</h3>
              <div className={styles.compareSubhead}>Perfect for casual use</div>
            </div>
            <ul className={styles.compareList}>
              <li>✅ Individual activity sheets</li>
              <li>✅ Download as many as you want</li>
              <li>✅ Print, share, reuse forever</li>
              <li className={styles.compareDim}>✖ No guidance on order</li>
              <li className={styles.compareDim}>✖ No teaching notes</li>
              <li className={styles.compareDim}>✖ No progress tracking</li>
              <li className={styles.compareDim}>✖ No support from Chutki</li>
              <li className={styles.compareDim}>✖ No completion certificate</li>
            </ul>
          </div>

          <div className={styles.compareVs}>VS</div>

          <div className={styles.compareCol}>
            <div className={styles.compareHead} style={{ background: '#FFF4D6' }}>
              <div className={styles.compareTag} style={{ background: 'var(--red)', color: 'white' }}>BUNDLES</div>
              <h3>A full learning path</h3>
              <div className={styles.compareSubhead}>For parents who want structure</div>
            </div>
            <ul className={styles.compareList}>
              <li>✅ All the sheets (organised)</li>
              <li>✅ <strong>Parent Guide</strong> — how to teach each one</li>
              <li>✅ <strong>Learning Sequence Map</strong> — what order</li>
              <li>✅ <strong>Progress Tracker</strong> — printable checklist</li>
              <li>✅ <strong>Completion Certificate</strong> — for your child</li>
              <li>✅ <strong>WhatsApp Support</strong> — ask Chutki anything</li>
              <li>✅ <strong>Monthly Q&amp;A calls</strong> — live with Chutki</li>
              <li>✅ <strong>Lifetime updates</strong> — new sheets free forever</li>
            </ul>
          </div>
        </div>

        {/* Universal extras explained */}
        <div className={styles.extrasShowcase}>
          <h3 className={styles.extrasTitle}>What&apos;s inside every bundle</h3>
          <div className={styles.extrasGrid}>
            {universalExtras.map((extra) => (
              <div key={extra.title} className={styles.extraCard}>
                <div className={styles.extraIcon}>{extra.icon}</div>
                <h4>{extra.title}</h4>
                <p>{extra.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BUNDLES ============ */}
      <section className={styles.bundlesSection} id="bundles">
        <div className="section-head">
          <div className="section-eyebrow">~ Choose your bundle ~</div>
          <h2>Which path fits your child? 🎯</h2>
          <p>Each bundle is curated around a stage or goal — not just a pile of sheets.</p>
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
                <div className={styles.bundleSubtitle}>{bundle.subtitle}</div>
                <div className={styles.bundleMeta}>
                  <span>{bundle.ageFocus}</span>
                  <span>·</span>
                  <span>{bundle.sheetCount}+ sheets</span>
                </div>
              </div>

              <div className={styles.bundleBody}>
                <p className={styles.bundleDesc}>{bundle.description}</p>

                <div className={styles.bundleSection}>
                  <div className={styles.bundleSectionLabel}>📚 Topics covered</div>
                  <ul className={styles.bundleList}>
                    {bundle.topics.map((t, j) => (
                      <li key={j}>• {t}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.bundleSection}>
                  <div className={styles.bundleSectionLabel}>🎁 Special extras</div>
                  {bundle.bonusExtras.map((extra, j) => (
                    <div key={j} className={styles.bundleBonus}>
                      <span className={styles.bonusIcon}>{extra.icon}</span>
                      <div>
                        <strong>{extra.title}</strong>
                        <p>{extra.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.bundleSection}>
                  <div className={styles.bundleSectionLabel}>✨ Plus the usual goodies</div>
                  <div className={styles.universalBadges}>
                    <span>📘 Parent Guide</span>
                    <span>🗺️ Sequence Map</span>
                    <span>✅ Tracker</span>
                    <span>📜 Certificate</span>
                    <span>💬 WhatsApp</span>
                  </div>
                </div>

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

      {/* SUBSCRIPTION — COMING SOON */}
      <section className={styles.subscriptionSection}>
        <div className={styles.subscriptionBox}>
          <div className={styles.comingSoonBadge}>⏳ COMING SOON</div>
          <div className={styles.subLeft}>
            <div className="sticker" style={{ background: 'var(--yellow)' }}>🔁 For Dedicated Families</div>
            <h2 className={styles.subTitle}>
              The <span className="rainbow-word">Magic Pass</span> — coming soon
            </h2>
            <p className={styles.subText}>
              All bundles + every new bundle we release + exclusive members-only sheets +
              monthly live workshops with Chutki. The full Chutki Ki Duniya experience in one subscription.
            </p>
            <ul className={styles.subList}>
              <li>✓ Every current &amp; future bundle</li>
              <li>✓ Members-only worksheets (not in free library)</li>
              <li>✓ Monthly live workshops with Chutki</li>
              <li>✓ Early access to Phase 2 books &amp; toys</li>
              <li>✓ Cancel anytime, no lock-in</li>
            </ul>
          </div>
          <div className={styles.subRight}>
            <div className={styles.subPriceCard}>
              <div className={styles.subPriceLabel}>Launching soon at</div>
              <div className={styles.subPriceMain}>
                <span className={styles.subCurrency}>₹</span>
                <span className={styles.subAmount}>199</span>
                <span className={styles.subUnit}>/month</span>
              </div>
              <div className={styles.subPriceCompare}>
                Early subscribers get <strong>Lifetime ₹149/month</strong> pricing 🎉
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
            <p>&quot;Free sheets got me hooked. Then I bought the School-Ready bundle — the parent guide is worth the price alone.&quot;</p>
            <div className={styles.testimonialAuthor}>— Priya, Lucknow</div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
            <p>&quot;Whatsapp group se Chutki didi ne meri beti ke liye personal tips diye. Worth every rupee.&quot;</p>
            <div className={styles.testimonialAuthor}>— Rohan, Pune</div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
            <p>&quot;I love that individual sheets stay free — feels honest. The bundle is genuinely structured, not just a zip.&quot;</p>
            <div className={styles.testimonialAuthor}>— Meera, Delhi</div>
          </div>
        </div>
      </section>
    </>
  );
}
