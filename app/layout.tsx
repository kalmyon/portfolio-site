import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Blog",
  description: "kalm のポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-100 text-gray-900">
  <header className="bg-white shadow">
    <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
      <Link
        href="/"
        className="text-2xl font-bold"
      >
        Portfolio Blog
      </Link>

      <Link
        href="/posts/new"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        新規投稿
      </Link>
    </div>
  </header>

  <main className="mx-auto w-full max-w-5xl flex-1 p-6">
    {children}
  </main>
</body>
    </html>
  );
}
