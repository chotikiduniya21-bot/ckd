import type { Metadata } from 'next';
import Script from 'next/script';
import { Fredoka, Patrick_Hand, Nunito } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { siteGraph } from '@/lib/schema';
import { AuthProvider } from '@/lib/auth';
import '@/styles/globals.css';

// Self-host fonts via next/font (no runtime fetch from Google)
const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
});
const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-patrick-hand',
  display: 'swap',
});
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
});

const SITE_URL = 'https://www.chotikiduniya.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Choti Ki Duniya: Free Kids Worksheets & Hindi Rhymes',
    template: '%s | Choti Ki Duniya',
  },
  description:
    'Free Montessori-inspired activity sheets, Hindi rhymes, and stories for Indian kids aged 2-8. Made by Choti, a Montessori-inspired educator. 8 lakh+ YouTube family.',
  authors: [{ name: 'Choti', url: SITE_URL }],
  creator: 'Choti Ki Duniya',
  publisher: 'Choti Ki Duniya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Choti Ki Duniya',
    title: 'Choti Ki Duniya — Where Little Minds Bloom',
    description:
      'Free Montessori-inspired activity sheets, Hindi rhymes & stories for kids 2-8. By a Montessori-inspired educator.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Choti Ki Duniya — Where Little Minds Bloom',
    description:
      'Free Montessori-inspired activity sheets, Hindi rhymes & stories for kids 2-8.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" data-scroll-behavior="smooth" className={`${fredoka.variable} ${patrickHand.variable} ${nunito.variable}`}>
      <body>
        <JsonLd data={siteGraph} />

        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>

        {/* Vercel built-in analytics + speed insights */}
        <Analytics />
        <SpeedInsights />

        {/* Google Analytics — production only */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-CC2SC89XVC"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-CC2SC89XVC');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
