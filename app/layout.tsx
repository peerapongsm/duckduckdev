import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Lexend, Sarabun } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
});

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sarabun",
});

export const metadata: Metadata = {
  title: "DuckDuckDev — รับทำแอปตามสั่งสำหรับธุรกิจ SME",
  description:
    "DuckDuckDev รับทำแอปขนาดเล็กตามสั่งสำหรับ SME — สต็อก ออเดอร์ บิล รายงาน ซอฟต์แวร์ที่ร้านคุณต้องใช้จริง เสร็จในไม่กี่สัปดาห์",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={`${lexend.variable} ${atkinson.variable} ${sarabun.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
