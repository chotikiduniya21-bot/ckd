# Chutki Ki Duniya 🌸

A vibrant, kid-friendly Next.js 14 site for Chutki Ki Duniya — a Montessori-inspired learning brand for Indian kids aged 2–8.

## Pages

### Public pages
| Route | What's there |
|---|---|
| `/` | Home — hero with mascot, YouTube spotlight, pillars, Phase 1/2 roadmap |
| `/activity-sheets` | **Free Forever (8 sheets)** → Paid packs → Bundles → Magic Pass waitlist |
| `/blog` | 10 post-card index with AdSense + affiliate demo slots |
| `/seasonal-calendar` | Repackaging concept + 12-month drop plan + revenue projections |
| `/about` | Mascot + Chutki the real teacher + mission |
| `/login` | Login/signup with mode toggle |

### Protected dashboard (requires login)
| Route | What's there |
|---|---|
| `/dashboard` | Overview — welcome, stats, recent activity, upsell CTAs |
| `/dashboard/library` | All paid packs the user owns — re-download anytime |
| `/dashboard/downloads` | Free sheet download history + remaining available |
| `/dashboard/subscription` | Magic Pass waitlist + early-bird ₹99/month offer |
| `/dashboard/settings` | Profile, email preferences, danger zone |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

To test the dashboard, click **"Login / Sign up"** in the top-right. The current auth is a **mock system** (localStorage-based) — any email will sign you in with pre-populated demo data (Priya's account with 2 paid packs + 2 free downloads). Perfect for demoing the UX before wiring real auth.

## Build for production

```bash
npm run build
npm start
```

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** (no Tailwind — just CSS vars + modules)
- **Mock auth** via React Context + localStorage (see `lib/auth.tsx`)
- **Google Fonts:** Fredoka (display), Nunito (body), Patrick Hand (handwritten accents)

## Design system

All colors, fonts, and tokens live in `styles/globals.css` as CSS variables — change them to re-theme the whole site.

## 🔐 Moving from mock auth to real auth

The mock in `lib/auth.tsx` mimics Clerk's API surface intentionally. To go live:

### Option 1: Clerk (recommended — 2-3 hours work)

```bash
npm install @clerk/nextjs
```

1. Sign up at [clerk.com](https://clerk.com) (10k MAU free)
2. Add `CLERK_SECRET_KEY` and `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` to `.env.local`
3. Replace `lib/auth.tsx` imports in these files:
   - `app/layout.tsx` — `AuthProvider` → `ClerkProvider`
   - `components/Navbar.tsx` — `useUser` from `@clerk/nextjs`
   - All dashboard pages — same `useUser` swap
   - `app/login/page.tsx` — replace form with Clerk's `<SignIn />` component
4. Add `middleware.ts` at the project root to protect `/dashboard/*`:

```ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
const isProtected = createRouteMatcher(['/dashboard(.*)']);
export default clerkMiddleware((auth, req) => {
  if (isProtected(req)) auth().protect();
});
export const config = { matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'] };
```

That's it. Everything else stays the same.

### Option 2: NextAuth.js (free, more control)

More setup but fully free. Use NextAuth's `useSession` hook and adapt the mock's shape to NextAuth's session object.

## 💳 Adding real Razorpay payments

The subscription waitlist is stored in localStorage right now. For real payments:

1. `npm install razorpay` (server SDK)
2. Get API keys from [dashboard.razorpay.com](https://dashboard.razorpay.com)
3. Create subscription plans in Razorpay dashboard (₹99/month Magic Pass)
4. Add API routes:
   - `app/api/razorpay/create-subscription/route.ts` — creates a subscription for a user
   - `app/api/razorpay/webhook/route.ts` — handles payment events
5. Replace the waitlist form in `app/dashboard/subscription/page.tsx` with Razorpay checkout

For one-time purchases (paid sheets), use **Razorpay Payment Links** — no code needed, just paste a link per product.

## 📄 PDF download & delivery flow

The site ships with a full, production-quality PDF delivery system:

### How it works today

1. User clicks "Download" on any sheet
2. Request hits `/api/download/free/[sheetId]` or `/api/download/paid/[sheetId]`
3. Server checks:
   - For paid: Is user signed in? Do they own the sheet? → 401 / 403 if not
   - For free: Is this IP over rate limit (20/hr)? → 429 if not
4. Server generates a **time-limited signed URL** (15 min for paid, 1 hour for free)
5. Download is logged for audit
6. Browser downloads the PDF via the signed URL
7. URL expires automatically — can't be shared indefinitely

In dev/demo mode, the API returns a real placeholder PDF (it actually downloads as a valid PDF file) so you can test the full end-to-end flow.

### Moving to Cloudflare R2 in production

All storage logic is abstracted in `lib/storage.ts`. Steps to go live:

```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

1. Create an R2 bucket at [dash.cloudflare.com](https://dash.cloudflare.com) → R2
   - Bucket name: `chutki-sheets` (keep private)
   - Generate R2 API token with Object Read permission
2. Add to `.env.local`:
   ```
   R2_ACCOUNT_ID=your-account-id
   R2_ACCESS_KEY_ID=your-access-key
   R2_SECRET_ACCESS_KEY=your-secret
   R2_BUCKET_NAME=chutki-sheets
   ```
3. In `lib/storage.ts`, replace the mock implementation with the commented-out R2 code (already written, just uncomment)
4. Upload your real PDFs to R2 as `sheets/{sheetId}.pdf`

That's it — all API routes, the dashboard, the download hook, and the toast all keep working without changes.

### Rate limiting in production

The in-memory rate limiter in `lib/storage.ts` works for a single server instance. For Vercel (which runs multiple instances), swap it with **Vercel KV** or **Upstash Redis**:

```bash
npm install @upstash/redis @upstash/ratelimit
```

Then replace `checkRateLimit()` in `lib/storage.ts` with the Upstash implementation — 10 lines of code.

### Pricing note

Cloudflare R2 has no egress fees (unlike S3). For a kids' PDF site:
- Storage: ~$0.015/GB/month
- Operations: First 1M reads free per month
- For 500 PDFs × 5MB average × 10k downloads/month = ~₹80/month

That's 60-80% cheaper than AWS S3 for this workload.

## 📁 Project structure

```
app/
├── layout.tsx                        ← shared navbar + footer + AuthProvider
├── page.tsx                          ← home
├── activity-sheets/
│   ├── page.tsx                      ← Free Forever + paid + bundles + waitlist
│   └── sheetsData.ts                 ← freeSheets + paid sheets + bundles
├── blog/                             ← blog index
├── seasonal-calendar/                ← 12-month repackaging plan
├── about/                            ← mascot + teacher + mission
├── login/                            ← combined login/signup
└── dashboard/
    ├── layout.tsx                    ← sidebar + route protection
    ├── page.tsx                      ← overview
    ├── library/                      ← owned paid sheets
    ├── downloads/                    ← free sheets history
    ├── subscription/                 ← Magic Pass waitlist
    └── settings/                     ← profile + preferences

components/
├── Navbar.tsx                        ← shows user avatar when signed in
├── Footer.tsx
└── Mascot.tsx                        ← reusable SVG mascot

lib/
└── auth.tsx                          ← mock auth (replace with Clerk)

styles/globals.css                    ← design tokens + shared classes
```

## 🎯 What's designed vs what needs backend work

| Feature | State | Needs backend? |
|---|---|---|
| UI for all 11 pages | ✅ Done | No |
| Mock auth (demo) | ✅ Done | No |
| Real auth | ⏳ Needs Clerk setup | Yes |
| Free sheet downloads | UI only | Need cloud storage (Cloudflare R2, S3) |
| Paid purchases | UI only | Razorpay Payment Links (easy) |
| Subscription billing | Waitlist only | Razorpay Subscriptions API |
| Email notifications | UI only | Use Resend, Mailgun, or SendGrid |
| User data persistence | localStorage | Swap mock auth → Clerk + Prisma + Postgres |

## 💡 Monetization notes (built into the site)

1. **YouTube stays the traffic engine** — 8L+ subs funnel to the site
2. **Free Forever sheets at the top** — trust-builder, no email wall
3. **Parent blog** = AdSense + affiliate layer (written for parents, not kids — critical for CPM)
4. **Activity sheets ₹39–₹69** — impulse price, UPI checkout
5. **Bundles ₹99/₹199/₹349** — AOV boost via Starter/School-Ready/Mega tiers
6. **Magic Pass ₹99/month (early bird)** — recurring revenue, launching in Phase 2
7. **Seasonal drops** — April, August, November are peak months (see `/seasonal-calendar`)
