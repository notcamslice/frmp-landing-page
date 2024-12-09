import './globals.css';
import { Inter } from 'next/font/google';
import { constructMetadata } from '@/lib/metadata';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}