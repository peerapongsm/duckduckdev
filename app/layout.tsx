import type { Metadata } from "next";
import { Fredoka, Kanit, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kanit",
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
      className={`${fredoka.variable} ${nunito.variable} ${kanit.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
