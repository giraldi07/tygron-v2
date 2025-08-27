import './globals.css';
import type { Metadata } from 'next';
import { Bebas_Neue, Poppins } from 'next/font/google';
import ParallaxWrapper from '@/components/ParallaxWrapper';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Tygron Playground & Lounge - The Biggest Playground in Town',
  description: 'Premium gaming lounge featuring PS4, PS5, Nintendo Switch, VIP rooms, and competitive tournaments. Book your gaming session today!',
  keywords: 'gaming lounge, PS4, PS5, Nintendo Switch, tournaments, VIP gaming, esports',
  openGraph: {
    title: 'Tygron Playground & Lounge',
    description: 'The Biggest Playground in Town - Premium Gaming Experience',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tygron Playground & Lounge',
    description: 'The Biggest Playground in Town - Premium Gaming Experience',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico', // Pastikan favicon ada di folder /public
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Optional: Support multiple favicon sizes */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
      </head>
      <body className={`${bebasNeue.variable} ${poppins.variable} bg-black text-white antialiased overflow-x-hidden`}>
        <ParallaxWrapper>
          {children}
        </ParallaxWrapper>
      </body>
    </html>
  );
}
