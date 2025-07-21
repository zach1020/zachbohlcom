import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HydrationSuppressor from "@/components/HydrationSuppressor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zach's Blog & Portfolio",
  description: "Programmer and Music Producer - Showcasing projects, blog posts, and music production work",
  keywords: ["programming", "music production", "portfolio", "blog", "developer"],
  authors: [{ name: "Zach" }],
  openGraph: {
    title: "Zach's Blog & Portfolio",
    description: "Programmer and Music Producer - Showcasing projects, blog posts, and music production work",
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
      <body className={inter.className}>
        <HydrationSuppressor />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {children}
        </div>
      </body>
    </html>
  );
}
