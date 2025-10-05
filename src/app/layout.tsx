import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HydrationSuppressor from "@/components/HydrationSuppressor";
import { MusicProvider } from "@/contexts/MusicContext";
import GlobalMusicPlayer from "@/components/GlobalMusicPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zach's Blog & Portfolio",
  description: "AI Programmer and Music Producer - Showcasing projects, blog posts, and music production work",
  keywords: ["AI programming", "machine learning", "music production", "portfolio", "blog", "developer"],
  authors: [{ name: "Zach" }],
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Zach's Blog & Portfolio",
    description: "AI Programmer and Music Producer - Showcasing projects, blog posts, and music production work",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
      </head>
      <body className={inter.className}>
        <HydrationSuppressor />
            <MusicProvider>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
                <div className="flex-1">
                  {children}
                </div>
                <footer className="bg-black/20 backdrop-blur-sm border-t border-purple-500/20 py-6 px-4">
                  <div className="max-w-7xl mx-auto text-center">
                    <p className="text-purple-300 text-lg font-medium">
                      Zach Bohl 2025
                    </p>
                  </div>
                </footer>
              </div>
              <GlobalMusicPlayer />
            </MusicProvider>
      </body>
    </html>
  );
}
