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
  description: "The name Sora Matcha is inspired by the Japanese word “sora” (空), which means “sky.” Just like the sky, Sora Matcha represents clarity, calm, and endless possibilities. It reflects our vision of creating a matcha experience that feels light, pure, and intentional—something that lifts your day, grounds your spirit, and gives you a moment to breathe. Every cup is a reminder to slow down and savor simplicity, crafted with the finest ceremonial grade matcha and a personal touch that makes it uniquely ours.",
  robots: "index, follow",
  openGraph: {
    title: "Soramatcha",
    description:
      "The name Sora Matcha is inspired by the Japanese word “sora” (空), which means “sky.” Just like the sky, Sora Matcha represents clarity, calm, and endless possibilities. It reflects our vision of creating a matcha experience that feels light, pure, and intentional—something that lifts your day, grounds your spirit, and gives you a moment to breathe. Every cup is a reminder to slow down and savor simplicity, crafted with the finest ceremonial grade matcha and a personal touch that makes it uniquely ours.",
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
