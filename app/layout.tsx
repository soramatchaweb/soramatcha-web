import type { Metadata } from "next";
import localFont from 'next/font/local'
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Soramatcha",
  description: "Sora Matcha was born out of a shared passion between two longtime friends who turned their love for matcha into something more. Founded in May 2025, our mission is simple: to redefine what good matcha tastes like—with purity, purpose, and a personal touch.",
  robots: "index, follow",
  openGraph: {
    title: "Soramatcha",
    description:
      "Sora Matcha was born out of a shared passion between two longtime friends who turned their love for matcha into something more. Founded in May 2025, our mission is simple: to redefine what good matcha tastes like—with purity, purpose, and a personal touch.",
    url: defaultUrl,
    siteName: "Soramatcha",
    images: [
      {
        url: `https://soramatcha-web.netlify.app/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Soramatcha",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

const garet = localFont({
  src: [
    { path: '../assets/fonts/Garet-Book.ttf', weight: '400', style: 'normal' },
    { path: '../assets/fonts/Garet-Heavy.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-garet',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={garet.variable} suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
