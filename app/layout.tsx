import type { Metadata } from "next";
// Self-hosted via @fontsource so CI builds never fetch from Google Fonts.
import "@fontsource/bricolage-grotesque/latin-500.css";
import "@fontsource/bricolage-grotesque/latin-700.css";
import "@fontsource/bricolage-grotesque/latin-800.css";
// Looped Thai on purpose: the owner found loopless Thai faces hard to read.
import "@fontsource/ibm-plex-sans-thai-looped/thai-400.css";
import "@fontsource/ibm-plex-sans-thai-looped/thai-500.css";
import "@fontsource/ibm-plex-sans-thai-looped/thai-600.css";
import "@fontsource/ibm-plex-sans-thai-looped/thai-700.css";
import "@fontsource/ibm-plex-sans-thai-looped/latin-400.css";
import "@fontsource/ibm-plex-sans-thai-looped/latin-500.css";
import "@fontsource/ibm-plex-sans-thai-looped/latin-600.css";
import "@fontsource/ibm-plex-sans-thai-looped/latin-700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://peerapongsm.dev"),
  title: "PeerapoS — โปรแกรมฟรีสำหรับ SME และรับทำแอปตามสั่ง",
  description:
    "PeerapoS ทำโปรแกรม Windows ฟรีสำหรับธุรกิจเล็ก 16 ตัว ใช้งานออฟไลน์ ข้อมูลอยู่ในเครื่องคุณ และรับทำแอปตามสั่งให้พอดีกับงานของร้าน",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body className="antialiased">{children}</body>
    </html>
  );
}
