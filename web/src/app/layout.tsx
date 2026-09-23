import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/RevealObserver";
import { brand } from "@/lib/brand";
import "./globals.css";

const display = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

const body = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — консалтинг в девелопменте`,
    template: `%s · ${brand.name}`,
  },
  description: brand.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
          <RevealObserver />
        </div>
      </body>
    </html>
  );
}
