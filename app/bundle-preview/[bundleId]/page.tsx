import Link from 'next/link';
import { notFound } from 'next/navigation';
import { bundles } from '../../activity-sheets/sheetsData';
import { getBundlePreview } from '../previewData';
import styles from '../bundlePreview.module.css';

const colorMap: Record<string, string> = {
  red:    'linear-gradient(135deg, #FF4E6A, #FF8A3D)',
  blue:   'linear-gradient(135deg, #4A9EFF, #9B5DE5)',
  green:  'linear-gradient(135deg, #4CD964, #2EC4B6)',
  yellow: 'linear-gradient(135deg, #FFD23F, #FF8A3D)',
  purple: 'linear-gradient(135deg, #9B5DE5, #FF7EB9)',
  pink:   'linear-gradient(135deg, #FF7EB9, #FF4E6A)',
};

// Enable static generation for all bundles
export function generateStaticParams() {
  return bundles.map((b) => ({ bundleId: b.id }));
}

export default async function BundlePreviewPage({
  params,
}: {
  params: Promise<{ bundleId: string }>;
}) {
  const { bundleId } = await params;
  const bundle = bundles.find((b) => b.id === bundleId);
  if (!bundle) notFound();

  const preview = getBundlePreview(bundleId);
  const bundleColor = colorMap[bundle.color];

  return (
    <>
      {/* HERO */}
      <section className={styles.previewHero} style={{ background: bundleColor }}>
        <div className={styles.heroInner}>
          <Link href="/activity-sheets#bundles" className={styles.backLink}>
            ← Back to bundles
          </Link>
          <div className={styles.heroSticker}>👀 Preview · No signup needed</div>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className={styles.heroEmoji}>{bundle.emoji}</div>
              <h1 className={styles.heroTitle}>{bundle.title}</h1>
              <div className={styles.heroSubtitle}>{bundle.subtitle}</div>
              <div className={styles.heroMetaRow}>
                <span className={styles.heroMetaPill}>{bundle.ageLabel}</span>
                <span className={styles.heroMetaPill}>{bundle.duration}</span>
                <span className={styles.heroMetaPill}>{bundle.sheetCount} sheets</span>
              </div>
              <p className={styles.heroDesc}>{bundle.description}</p>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.heroPriceCard}>
                <div className={styles.heroPriceLabel}>One-time price</div>
                <div className={styles.heroPriceRow}>
                  <span className={styles.heroStrike}>₹{bundle.originalPrice}</span>
                  <span className={styles.heroPrice}>₹{bundle.price}</span>
                </div>
                <div className={styles.heroPriceTag}>{bundle.tag}</div>
                <div className={styles.heroSubText}>Lifetime access · No recurring fees</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAV STRIP */}
      <div className={styles.sectionNav}>
        <div className={styles.sectionNavInner}>
          <span className={styles.navLabel}>Jump to:</span>
          <a href="#guide">📘 Parent Guide</a>
          <a href="#schedule">📅 Schedule</a>
          <a href="#tracker">✅ Tracker</a>
          <a href="#certificate">📜 Certificate</a>
          <a href="#whatsapp">💬 WhatsApp</a>
          <a href="#faq">❓ FAQ</a>
        </div>
      </div>

      {/* PARENT GUIDE SAMPLE */}
      <section id="guide" className={styles.previewSection}>
        <div className="section-head">
          <div className="section-eyebrow">~ Parent Guide preview ~</div>
          <h2>Every sheet comes with teaching notes 📘</h2>
          <p>Not just &quot;give the worksheet to the child.&quot; Chutki walks you through each day — objective, steps, what to watch for.</p>
        </div>

        <div className={styles.guidePreview}>
          <div className={styles.guidePage}>
            <div className={styles.guidePageHeader}>
              <div className={styles.guideBrand}>🌸 Chutki Ki Duniya · Parent Guide</div>
              <div className={styles.guidePageNum}>Page 3 of {bundle.sheetCount + 2}</div>
            </div>
            <h3 className={styles.guideLessonTitle}>{preview.guideSampleLessonLabel}</h3>
            <div className={styles.guideBlock}>
              <div className={styles.guideBlockLabel}>🎯 Today's objective</div>
              <p>{preview.guideSampleObjective}</p>
            </div>
            <div className={styles.guideBlock}>
              <div className={styles.guideBlockLabel}>📝 What to do (step by step)</div>
              <ol className={styles.guideSteps}>
                {preview.guideSampleSteps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </div>
            <div className={styles.guideBlock}>
              <div className={styles.guideBlockLabel}>⚠️ Watch for these</div>
              <ul className={styles.guideWatchList}>
                {preview.guideSampleWatchFor.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
            <div className={styles.guideTipBox}>
              <div className={styles.guideTipLabel}>💡 Chutki's tip</div>
              <p>{preview.guideSampleNote}</p>
            </div>
            <div className={styles.guideWatermark}>SAMPLE · Actual guide has {bundle.sheetCount} full lessons</div>
          </div>
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section id="schedule" className={styles.previewSection} style={{ background: '#FFF8EC' }}>
        <div className="section-head">
          <div className="section-eyebrow">~ Daily Schedule preview ~</div>
          <h2>No more &quot;what should we do today?&quot; 📅</h2>
          <p>Every day mapped out. Stick it on your fridge. Kids love ticking off days — it becomes the game.</p>
        </div>

        <div className={styles.schedulePreview}>
          <div className={styles.scheduleCard}>
            <div className={styles.scheduleHeader}>
              <div className={styles.scheduleBrand}>📅 {preview.scheduleSampleWeekLabel}</div>
              <div className={styles.scheduleTotal}>{bundle.duration} total journey</div>
            </div>
            <div className={styles.scheduleDays}>
              {preview.scheduleSampleDays.map((d, i) => (
                <div key={i} className={styles.scheduleDay}>
                  <div className={styles.scheduleDayLabel}>{d.day}</div>
                  <div className={styles.scheduleDayTitle}>{d.title}</div>
                  <div className={styles.scheduleDayMeta}>{d.duration}</div>
                </div>
              ))}
            </div>
            <div className={styles.scheduleFoot}>
              <span>📄 Printable · A4 format</span>
              <span>✓ Checkbox version included</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESS TRACKER */}
      <section id="tracker" className={styles.previewSection}>
        <div className="section-head">
          <div className="section-eyebrow">~ Progress Tracker preview ~</div>
          <h2>A printable checklist your child will love ✅</h2>
          <p>Kids adore ticking boxes. This turns the bundle into a game — with stickers, stars, and visible progress.</p>
        </div>

        <div className={styles.trackerPreview}>
          <div className={styles.trackerCard}>
            <div className={styles.trackerTitle}>
              My {bundle.title} Journey
              <span className={styles.trackerChildName}>— _______________________</span>
            </div>
            <div className={styles.trackerGrid}>
              {Array.from({ length: Math.min(bundle.sheetCount, 20) }, (_, i) => (
                <div key={i} className={`${styles.trackerCell} ${i < 5 ? styles.trackerDone : ''}`}>
                  <div className={styles.trackerBox}>
                    {i < 5 ? '⭐' : ''}
                  </div>
                  <div className={styles.trackerDayLabel}>Day {i + 1}</div>
                </div>
              ))}
              {bundle.sheetCount > 20 && (
                <div className={styles.trackerMore}>
                  + {bundle.sheetCount - 20} more days
                </div>
              )}
            </div>
            <div className={styles.trackerFoot}>
              ⭐ = completed · Parent signs each week · Certificate awaits at the end 🎉
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATE */}
      <section id="certificate" className={styles.previewSection} style={{ background: '#FFF4D6' }}>
        <div className="section-head">
          <div className="section-eyebrow">~ Completion Certificate preview ~</div>
          <h2>A keepsake for the fridge 📜</h2>
          <p>When your child completes the journey, we generate a personalized certificate with their name. Print it, frame it, celebrate them.</p>
        </div>

        <div className={styles.certificatePreview}>
          <div className={styles.certificate}>
            <div className={styles.certBorder}>
              <div className={styles.certInnerBorder}>
                <div className={styles.certCrest}>🌸</div>
                <div className={styles.certEyebrow}>Chutki Ki Duniya presents</div>
                <h3 className={styles.certTitle}>Certificate of Completion</h3>
                <div className={styles.certAwarded}>This is awarded to</div>
                <div className={styles.certName}>_____ Your Child&apos;s Name _____</div>
                <p className={styles.certMessage}>{preview.certMessage}</p>
                <div className={styles.certFooter}>
                  <div className={styles.certSignBlock}>
                    <div className={styles.certSignLine}>Chutki</div>
                    <div className={styles.certSignLabel}>Chutki Didi</div>
                    <div className={styles.certSignSub}>Founder, Chutki Ki Duniya</div>
                  </div>
                  <div className={styles.certMedal}>{bundle.emoji}</div>
                  <div className={styles.certSignBlock}>
                    <div className={styles.certSignLine}>______________</div>
                    <div className={styles.certSignLabel}>Date</div>
                    <div className={styles.certSignSub}>Day of completion</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.certWatermark}>PREVIEW — yours will show your child's actual name</div>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <section id="whatsapp" className={styles.previewSection}>
        <div className="section-head">
          <div className="section-eyebrow">~ WhatsApp Support preview ~</div>
          <h2>Real support, from a real teacher 💬</h2>
          <p>No chatbots. Chutki answers every question personally (usually within 24 hours). Here&apos;s a real example of how conversations go.</p>
        </div>

        <div className={styles.whatsappPreview}>
          <div className={styles.whatsappPhone}>
            <div className={styles.whatsappTop}>
              <div className={styles.whatsappAvatar}>🌸</div>
              <div className={styles.whatsappContact}>
                <strong>Chutki Didi</strong>
                <span>online</span>
              </div>
              <div className={styles.whatsappActions}>📞 🎥</div>
            </div>
            <div className={styles.whatsappBody}>
              <div className={styles.whatsappDate}>Today</div>
              {preview.whatsappSamples.map((msg, i) => (
                <div
                  key={i}
                  className={`${styles.whatsappMsg} ${
                    msg.from === 'parent' ? styles.msgParent : styles.msgChutki
                  }`}
                >
                  <div className={styles.whatsappBubble}>
                    <p>{msg.text}</p>
                    <span className={styles.whatsappTime}>{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.whatsappInputBar}>
              <div className={styles.whatsappInputMock}>💬 Ask Chutki anything...</div>
              <div className={styles.whatsappMic}>🎤</div>
            </div>
          </div>
        </div>

        <div className={styles.whatsappBelow}>
          <div className={styles.whatsappFeature}>
            <span>⚡</span>
            <div>
              <strong>Reply within 24 hours</strong>
              <p>Weekdays 9 AM – 8 PM. Chutki replies personally, no assistants.</p>
            </div>
          </div>
          <div className={styles.whatsappFeature}>
            <span>👥</span>
            <div>
              <strong>Private support group</strong>
              <p>Connect with other bundle parents. See their wins, ask their tips.</p>
            </div>
          </div>
          <div className={styles.whatsappFeature}>
            <span>🎥</span>
            <div>
              <strong>Monthly live Q&amp;A</strong>
              <p>30-min video call, last Sunday of every month. Pre-submit questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS AFTER YOU PAY */}
      <section id="faq" className={styles.previewSection} style={{ background: '#F0F7FF' }}>
        <div className="section-head">
          <div className="section-eyebrow">~ What happens next ~</div>
          <h2>After you pay ₹{bundle.price}, here&apos;s what happens 🎯</h2>
        </div>

        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepEmoji}>💳</div>
            <h4>Instant access</h4>
            <p>Pay via UPI, card, or netbanking. Takes 30 seconds. You&apos;ll be redirected to your dashboard.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepEmoji}>📬</div>
            <h4>Welcome email</h4>
            <p>Check your inbox: the WhatsApp group link, Parent Guide PDF, and day 1 sheet to print tonight.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepEmoji}>📄</div>
            <h4>Start tomorrow</h4>
            <p>Print day 1. Set aside 15 min. Chutki&apos;s teaching note tells you exactly how to introduce it.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepEmoji}>🎉</div>
            <h4>Finish the journey</h4>
            <p>At day {bundle.sheetCount}, download the certificate with your child&apos;s name. Frame it. Celebrate.</p>
          </div>
        </div>

        <div className={styles.refundNote}>
          💛 <strong>7-day happiness guarantee:</strong> Try it for a week. If it&apos;s not right for your child,
          message Chutki on WhatsApp for a full refund. No questions.
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta} style={{ background: bundleColor }}>
        <div className={styles.ctaBox}>
          <h2>Ready to start {bundle.title}? 🚀</h2>
          <p>{bundle.sheetCount} sheets · {bundle.duration} · ₹{bundle.price} one-time · Lifetime access</p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>Get the bundle for ₹{bundle.price} →</button>
            <Link href="/activity-sheets#bundles" className={styles.ctaSecondary}>
              See other bundles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
