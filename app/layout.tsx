'use client';

import { useEffect } from 'react';

import { Hanken_Grotesk, Inter } from 'next/font/google';
// import "../../public/assets/css/bootstrap-icons.css";
import '@/public/assets/css/bootstrap-icons.css';

import '@/public/assets/css/boxicons.min.css';
import '@/public/assets/css/swiper-bundle.min.css';
// import "react-modal-video/css/modal-video.css";
import '@/public/assets/css/animate.min.css';
import '@/public/assets/css/bootstrap-datetimepicker.min.css';
import '@/public/assets/css/slick-theme.css';
import '@/public/assets/css/slick.css';
// import "react-datepicker/dist/react-datepicker.css";
import { ScrollProgress, ThemeSwitch } from '@/components';
import useWow from '@/hooks/useWow';
import '@/public/assets/css/bootstrap.min.css';
import '@/public/assets/css/style.css';
import 'yet-another-react-lightbox/styles.css';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hankenGrotesk',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useWow();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${hankenGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/public/assets/img/sm-logo.svg" type="image/x-icon" sizes="16x16" />
        <title>Zenfy - Software, SaaS &amp; Digital Agency Template</title>
      </head>
      <body>
        <ScrollProgress />
        <ThemeSwitch />
        {children}
      </body>
    </html>
  );
}
