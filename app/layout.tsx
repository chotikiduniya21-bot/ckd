import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/lib/auth';
import '@/styles/globals.css';

const SITE_URL = 'https://www.chotikiduniya.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Choti Ki Duniya — Free Activity Sheets, Hindi Rhymes & Montessori Learning for Kids 2-8',
    template: '%s | Choti Ki Duniya',
  },
  description:
    'Free Montessori-inspired activity sheets, Hindi rhymes, and stories for Indian kids aged 2-8. Made by Choti, a Montessori-inspired educator. 8 lakh+ YouTube family.',
  keywords: [
    'free activity sheets for kids',
    'hindi rhymes for toddlers',
    'montessori activities india',
    'preschool worksheets india',
    'free printables for kids',
    'hindi learning for toddlers',
    'kids activity sheets',
    'montessori at home india',
    'choti ki duniya',
    'early childhood education india',
  ],
  authors: [{ name: 'Choti', url: SITE_URL }],
  creator: 'Choti Ki Duniya',
  publisher: 'Choti Ki Duniya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Choti Ki Duniya',
    title: 'Choti Ki Duniya — Where Little Minds Bloom',
    description:
      'Free Montessori-inspired activity sheets, Hindi rhymes & stories for kids 2-8. By a Montessori-inspired educator.',
    images: [
      {
        url: '/og/default.png',
        width: 1200,
        height: 630,
        alt: 'Choti Ki Duniya — Where Little Minds Bloom',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Choti Ki Duniya — Where Little Minds Bloom',
    description:
      'Free Montessori-inspired activity sheets, Hindi rhymes & stories for kids 2-8.',
    images: ['/og/default.png'],
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
      <html lang="en" data-scroll-behavior="smooth">
      <body>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
