import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-bricolage",
});

// Looped Thai on purpose: the owner found loopless Thai faces hard to read.
const plexThai = IBM_Plex_Sans_Thai_Looped({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-thai",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peerapongsm.dev"),
  title: "PeerapoS Software House — โปรแกรมฟรีสำหรับ SME และรับทำแอปตามสั่ง",
  description:
    "PeerapoS Software House ทำโปรแกรม Windows ฟรีสำหรับธุรกิจเล็ก 16 ตัว ใช้งานออฟไลน์ ข้อมูลอยู่ในเครื่องคุณ และรับทำแอปตามสั่งให้พอดีกับงานของร้าน",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${bricolage.variable} ${plexThai.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
