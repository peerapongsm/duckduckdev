"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { APPS, STORE_LIVE, shotUrls, storeUrl, type DesktopApp } from "./apps-data";

const EMAIL = "contact@peerapongsm.dev";

// Brand icon paths from simple-icons (CC0), 24×24 viewBox.
const SOCIALS = [
  {
    name: "LINE",
    href: "https://line.me/ti/p/sx3m1nEg53",
    bg: "bg-[#06C755] fill-white",
    path: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@peera.pos",
    bg: "bg-cream fill-ink",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
];

// custom domain (duckduckdev.peerapongsm.dev) serves from root — no basePath
const BASE_PATH = "";

type Lang = "th" | "en";

const COPY = {
  th: {
    badge: "app on demand · สำหรับธุรกิจขนาดเล็ก",
    navWork: "ผลงาน",
    navProcess: "ขั้นตอน",
    navCta: "เริ่มโปรเจกต์",
    h1Pre: "แอปเล็ก ๆ ที่ทำให้ร้านคุณ ",
    h1Highlight: "เข้าที่เข้าทาง",
    h1Post: "",
    heroSub:
      "DuckDuckDev รับทำแอปขนาดเล็กตามสั่งสำหรับ SME — สต็อก ออเดอร์ บิล รายงาน ซอฟต์แวร์ที่ร้านคุณต้องใช้จริง เสร็จในไม่กี่สัปดาห์ ไม่ใช่หลายไตรมาส",
    heroCta: "เริ่มโปรเจกต์ →",
    heroSecondary: "ดูผลงาน",
    marquee: [
      "รับทำแอปตามสั่ง",
      "DUCKDUCKWASH",
      "ทำงานออฟไลน์",
      "DUCKDUCKSTOCK",
      "ข้อมูลอยู่ในเครื่องคุณ",
      "DUCKDUCKFILE",
      "เสร็จเป็นสัปดาห์ ไม่ใช่ไตรมาส",
      "DUCKDUCKROOM",
    ],
    workKicker: "ผลงานในบ่อ",
    workTitle: "แอปเดสก์ท็อปฟรี โหลดไปใช้ได้เลย",
    workSub:
      "ทุกตัวทำงานออฟไลน์ ข้อมูลอยู่ในเครื่องคุณ ไม่ส่งขึ้นเน็ต กดที่การ์ดเพื่อดูรายละเอียดและดาวน์โหลด",
    winOnly:
      "ใช้ได้เฉพาะ Windows 10/11 (64-bit) บนคอมพิวเตอร์เท่านั้น ยังไม่มีเวอร์ชัน Mac มือถือ และแท็บเล็ต",
    cardHint: "ดูรายละเอียดและดาวน์โหลด →",
    uiLang: { th: "แอปภาษาไทย", en: "แอปภาษาอังกฤษ" },
    armory: {
      tagline: "52 โปรเจกต์ในหนึ่งปี",
      description:
        "สนามทดลองส่วนตัว เว็บแอป เกม และเครื่องมือเล็ก ๆ ที่ลงมือทำทีละตัวตลอดหนึ่งปี ส่วนใหญ่เปิดเล่นบนเบราว์เซอร์ได้เลย",
      chips: ["เว็บแอป", "เกม", "เครื่องมือ"],
      hint: "เข้าคลังแสง ↗",
    },
    dl: {
      button: "ติดตั้งจาก Microsoft Store",
      soon: "เร็ว ๆ นี้บน Microsoft Store",
      note: "ติดตั้งและอัปเดตผ่าน Microsoft Store ฟรี ไม่ต้องสมัครสมาชิก",
      close: "ปิด",
      features: "ฟีเจอร์",
      prev: "ภาพก่อนหน้า",
      next: "ภาพถัดไป",
      shot: "ภาพที่",
    },
    pondCtaPre: "ร้านของคุณอาจเป็นเป็ดตัวถัดไปในบ่อ ",
    pondCtaLink: "ทักมาคุยกัน",
    processKicker: "ขั้นตอนการทำงาน",
    processTitle: "3 ขั้นตอน จบ ไม่ดราม่า",
    steps: [
      {
        title: "ก๊าบ",
        body: "เล่าให้ฟังว่าร้านคุณทำงานยังไง ภาษาคนธรรมดา ไม่ต้องมีเอกสารสเปก เราหาจุดที่เจ็บที่สุดด้วยกัน",
      },
      {
        title: "สร้าง",
        body: "ออกแบบและสร้างแอปเล็ก ๆ ให้พอดีกับงานของคุณเป๊ะ ๆ ไม่มีฟีเจอร์เกินจำเป็น เสร็จในไม่กี่สัปดาห์ ไม่ใช่หลายเดือน",
      },
      {
        title: "ส่งมอบ",
        body: "คุณได้แอปไปใช้ ข้อมูลเป็นของคุณ และเรายังอยู่ช่วยปรับแก้เมื่อธุรกิจคุณโต",
      },
    ],
    contactPre: "งานร้านยังติดอยู่ใน ",
    contactHighlight: "สเปรดชีต",
    contactPost: " อยู่หรือเปล่า?",
    contactSub:
      "เล่าให้ฟังว่าอะไรกินเวลาคุณทุกวัน ถ้าแอปเล็ก ๆ แก้ได้ เราจะสร้างแอปนั้นให้",
    footerFamily: "หนึ่งในครอบครัว duckduck",
  },
  en: {
    badge: "app on demand · for small business",
    navWork: "Work",
    navProcess: "Process",
    navCta: "Start a project",
    h1Pre: "Your business, ",
    h1Highlight: "ducks in a row",
    h1Post: ".",
    heroSub:
      "DuckDuckDev builds small, custom apps for SMEs — inventory, orders, billing, reports. The software your shop actually needs, shipped in weeks, not quarters.",
    heroCta: "Start a project →",
    heroSecondary: "See the work",
    marquee: [
      "APP ON DEMAND",
      "DUCKDUCKWASH",
      "WORKS OFFLINE",
      "DUCKDUCKSTOCK",
      "YOUR DATA STAYS ON YOUR PC",
      "DUCKDUCKFILE",
      "WEEKS, NOT QUARTERS",
      "DUCKDUCKROOM",
    ],
    workKicker: "The pond so far",
    workTitle: "Free desktop apps. Download and go.",
    workSub:
      "Every app works offline — your data stays on your PC and never goes online. Tap a card for details and the download.",
    winOnly:
      "Windows desktop only — Windows 10/11 (64-bit). No Mac, phone or tablet versions yet.",
    cardHint: "Details & download →",
    uiLang: { th: "Thai UI", en: "English UI" },
    armory: {
      tagline: "52 small builds in a year.",
      description:
        "A personal playground — web apps, games and little tools, built one at a time over a year. Most run right in your browser.",
      chips: ["Web apps", "Games", "Tools"],
      hint: "Enter the Armory ↗",
    },
    dl: {
      button: "Get it from Microsoft Store",
      soon: "Coming soon to Microsoft Store",
      note: "Installs and updates through the Microsoft Store. Free, no account needed.",
      close: "Close",
      features: "Features",
      prev: "Previous screenshot",
      next: "Next screenshot",
      shot: "Screenshot",
    },
    pondCtaPre: "Your shop could be the next duck in the pond. ",
    pondCtaLink: "Say hello",
    processKicker: "How it works",
    processTitle: "Three steps. No drama.",
    steps: [
      {
        title: "Quack",
        body: "Tell me how your shop actually runs — plain words, no spec documents. We find the part that hurts the most.",
      },
      {
        title: "Build",
        body: "I design and build a small app around your exact workflow. No bloat, no features you'll never touch. Weeks, not months.",
      },
      {
        title: "Ship",
        body: "You get the app, your data stays yours. I stick around for tweaks as your business grows.",
      },
    ],
    contactPre: "Got a workflow stuck in ",
    contactHighlight: "spreadsheets",
    contactPost: "?",
    contactSub:
      "Tell me what eats your time every day. If a small app can fix it, I'll build that app.",
    footerFamily: "part of the duckduck family",
  },
} as const;

const CARD =
  "group flex h-full w-full flex-col items-start rounded-3xl border-2 border-ink bg-cream p-6 text-left shadow-hard transition-transform hover:-translate-y-1.5 hover:rotate-[0.4deg] sm:p-7 lg:p-5";

const STEP_META = [
  { n: "01", accent: "bg-duck" },
  { n: "02", accent: "bg-beak" },
  { n: "03", accent: "bg-wash" },
];

function Wave({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-10 w-full sm:h-16 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        d="M0 32 C 120 0, 240 0, 360 32 S 600 64, 720 32 S 960 0, 1080 32 S 1320 64, 1440 32 L 1440 64 L 0 64 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Duck({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-block select-none ${className}`}>
      🦆
    </span>
  );
}

// Native scroll-snap carousel; arrows and dots just scroll the track.
function Carousel({
  srcs,
  alt,
  labels,
}: {
  srcs: string[];
  alt: string;
  labels: { prev: string; next: string; shot: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const go = (n: number) => ref.current?.scrollTo({ left: n * ref.current.clientWidth, behavior: "smooth" });
  const arrow =
    "grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-cream font-display text-xl font-semibold shadow-hard-sm transition-transform hover:-translate-y-0.5 disabled:opacity-30 disabled:hover:translate-y-0";

  return (
    <div className="mt-6">
      <div
        ref={ref}
        onScroll={(e) => setI(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-2xl border-2 border-ink bg-paper shadow-hard-sm [scrollbar-width:none]"
      >
        {srcs.map((src, n) => (
          // click opens the full-size image in a new tab for reading small text
          <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="w-full shrink-0 snap-center">
            <Image
              src={src}
              alt={`${alt} — ${labels.shot} ${n + 1}/${srcs.length}`}
              width={1920}
              height={1080}
              className="aspect-video w-full"
            />
          </a>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <button type="button" onClick={() => go(i - 1)} disabled={i === 0} aria-label={labels.prev} className={arrow}>
          ←
        </button>
        <div className="flex gap-2">
          {srcs.map((src, n) => (
            <button
              key={src}
              type="button"
              onClick={() => go(n)}
              aria-label={`${labels.shot} ${n + 1}`}
              aria-current={i === n}
              className={`h-3 rounded-full border-2 border-ink transition-all ${i === n ? "w-8 bg-beak" : "w-3 bg-cream"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(i + 1)}
          disabled={i === srcs.length - 1}
          aria-label={labels.next}
          className={arrow}
        >
          →
        </button>
      </div>
    </div>
  );
}

function LangSwitcher({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (l: Lang) => void;
}) {
  return (
    <div className="flex rounded-full border-2 border-ink bg-cream font-display text-sm font-semibold shadow-hard-sm">
      {(["th", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onChange(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3.5 py-1.5 uppercase transition-colors ${
            lang === l ? "bg-ink text-duck" : "hover:text-beak"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("th");
  const t = COPY[lang];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [openAppName, setOpenAppName] = useState<string | null>(null);
  const app = APPS.find((a) => a.name === openAppName);

  function openApp(a: DesktopApp) {
    setOpenAppName(a.name);
    dialogRef.current?.showModal();
  }

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <main className="overflow-x-clip">
      {/* ── Header ─────────────────────────────────────── */}
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-2xl font-semibold">
          <Duck className="animate-wiggle text-3xl" />
          duckduck<span className="text-beak">dev</span>
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-7 font-bold sm:flex">
            <a href="#work" className="hover:text-beak">
              {t.navWork}
            </a>
            <a href="#process" className="hover:text-beak">
              {t.navProcess}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full border-2 border-ink bg-duck px-5 py-2 font-display shadow-hard-sm transition-transform hover:-translate-y-0.5"
            >
              {t.navCta}
            </a>
          </nav>
          <LangSwitcher lang={lang} onChange={setLang} />
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────── */}
      <section id="top" className="dotgrid relative">
        <div className="mx-auto max-w-6xl px-5 pb-24 pt-14 sm:px-8 sm:pb-32 sm:pt-20">
          <div className="rise rise-1 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-1.5 text-sm font-extrabold shadow-hard-sm">
            <Duck /> {t.badge}
          </div>

          <h1 className="rise rise-2 mt-7 max-w-4xl font-display text-5xl font-semibold leading-[1.12] sm:text-7xl lg:text-8xl">
            {t.h1Pre}
            <span className="relative inline-block">
              <span className="relative z-10">{t.h1Highlight}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-[-2%] bottom-1 z-0 h-[0.42em] -rotate-1 rounded-md bg-duck"
              />
            </span>
            {t.h1Post}
          </h1>

          <p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl">
            {t.heroSub}
          </p>

          <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-2xl border-2 border-ink bg-ink px-7 py-4 font-display text-lg font-semibold text-duck shadow-hard transition-transform hover:-translate-y-1"
            >
              {t.heroCta}
            </a>
            <a
              href="#work"
              className="rounded-2xl border-2 border-ink bg-cream px-7 py-4 font-display text-lg font-semibold shadow-hard transition-transform hover:-translate-y-1"
            >
              {t.heroSecondary}
            </a>
          </div>
        </div>

        {/* floating ducks */}
        <div className="pointer-events-none absolute right-[6%] top-16 hidden animate-bob text-7xl md:block">
          <Duck />
        </div>
        <div className="pointer-events-none absolute bottom-24 right-[22%] hidden animate-bob-slow text-4xl md:block">
          <Duck />
        </div>
      </section>

      {/* ── Marquee ────────────────────────────────────── */}
      <div className="border-y-2 border-ink bg-duck py-3">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-display text-lg font-semibold">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex gap-8">
              {t.marquee.map((item) => (
                <span key={item} className="flex items-center gap-8">
                  {item} <Duck />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Work ───────────────────────────────────────── */}
      <section id="work" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="font-display text-lg font-semibold text-beak">{t.workKicker}</p>
          <h2 className="mt-2 font-display text-4xl font-semibold sm:text-6xl">
            {t.workTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">{t.workSub}</p>
          <p className="mt-5 inline-flex items-start gap-2 rounded-2xl border-2 border-ink bg-duck px-4 py-2.5 font-bold shadow-hard-sm">
            <span aria-hidden="true">🪟</span>
            {t.winOnly}
          </p>
        </div>

        {/* 80% of screen width on desktop, outside the max-w-6xl column */}
        <ul className="mx-auto mt-12 grid gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:w-4/5 lg:grid-cols-4 lg:gap-5 lg:px-0">
          {APPS.map((a) => {
            const c = a[lang];
            return (
              <li key={a.name}>
                <button
                  type="button"
                  onClick={() => openApp(a)}
                  aria-haspopup="dialog"
                  className={CARD}
                >
                  <div className="flex w-full items-center gap-3">
                    <Image
                      src={`${BASE_PATH}${a.icon}`}
                      alt=""
                      width={96}
                      height={96}
                      className={`size-14 shrink-0 rounded-2xl border-2 border-ink ${a.accent} shadow-hard-sm transition-transform group-hover:rotate-[-4deg]`}
                    />
                    <h3 className="min-w-0 font-display text-2xl font-semibold [overflow-wrap:anywhere] lg:text-xl">{a.name}</h3>
                  </div>
                  <p className="mt-4 font-display text-lg text-ink/70">{c.tagline}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {c.chips.map((chip) => (
                      <li key={chip} className="rounded-full bg-ink/8 px-2.5 py-0.5 text-sm font-extrabold">
                        {chip}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex w-full flex-wrap items-center justify-between gap-2 pt-5">
                    <span className="font-display font-semibold text-beak">{t.cardHint}</span>
                    <span className="rounded-full border-2 border-ink bg-cream px-2.5 py-0.5 text-xs font-extrabold">
                      Windows
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
          <li>
            <a
              href="https://peerapongsm.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={`${CARD} dotgrid`}
            >
              <div className="flex w-full items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-14 shrink-0 place-items-center rounded-2xl border-2 border-ink bg-beak text-3xl shadow-hard-sm transition-transform group-hover:rotate-[-4deg]"
                >
                  🛡️
                </span>
                <h3 className="min-w-0 font-display text-2xl font-semibold [overflow-wrap:anywhere] lg:text-xl">The Armory</h3>
              </div>
              <p className="mt-4 font-display text-lg text-ink/70">{t.armory.tagline}</p>
              <p className="mt-3 leading-relaxed text-ink/80">{t.armory.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {t.armory.chips.map((chip) => (
                  <li key={chip} className="rounded-full bg-ink/8 px-2.5 py-0.5 text-sm font-extrabold">
                    {chip}
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-5 font-display font-semibold text-beak">
                {t.armory.hint}
              </span>
            </a>
          </li>
        </ul>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="mt-20 max-w-2xl font-display text-2xl font-medium text-ink/60 lg:mt-24">
            {t.pondCtaPre}
            <a
              href={`mailto:${EMAIL}`}
              className="text-beak underline decoration-2 underline-offset-4"
            >
              {t.pondCtaLink}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────── */}
      <section id="process" className="bg-wash text-cream">
        <Wave className="text-paper" flip />
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-display text-lg font-semibold text-duck">{t.processKicker}</p>
          <h2 className="mt-2 font-display text-4xl font-semibold sm:text-6xl">
            {t.processTitle}
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEP_META.map((s, i) => (
              <div
                key={s.n}
                className="rounded-3xl border-2 border-ink bg-cream p-7 text-ink shadow-hard"
              >
                <div
                  className={`inline-grid size-12 place-items-center rounded-full border-2 border-ink font-display text-lg font-semibold ${s.accent}`}
                >
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">
                  {t.steps[i].title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink/80">
                  {t.steps[i].body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Wave className="text-ink" />
      </section>

      {/* ── Contact ────────────────────────────────────── */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 pb-24 pt-12 text-center sm:px-8 sm:pb-32">
          <Duck className="animate-bob inline-block text-6xl" />
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
            {t.contactPre}
            <span className="text-duck">{t.contactHighlight}</span>
            {t.contactPost}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
            {t.contactSub}
          </p>
          <ul className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-block rounded-2xl border-2 border-cream bg-duck px-8 py-4 font-display text-xl font-semibold text-ink transition-transform hover:-translate-y-1"
              >
                {EMAIL}
              </a>
            </li>
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className={`grid size-16 place-items-center rounded-2xl border-2 border-cream ${s.bg} text-ink transition-transform hover:-translate-y-1`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <footer className="mt-20 flex flex-col items-center gap-2 border-t border-cream/15 pt-8 text-sm font-bold text-cream/50 sm:flex-row sm:justify-between">
            <span>© 2026 duckduckdev</span>
            <span>
              {t.footerFamily} <Duck />
            </span>
          </footer>
        </div>
      </section>
      {/* ── Download dialog ────────────────────────────── */}
      {/* Native <dialog>, not a window.open popup, so popup blockers never fire.
          Install button is a plain link to the app's Microsoft Store page. */}
      <dialog
        ref={dialogRef}
        onClose={() => setOpenAppName(null)}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
        aria-labelledby="dl-title"
        className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto rounded-3xl border-2 border-ink bg-cream text-ink shadow-hard sm:shadow-hard-lg backdrop:bg-ink/60"
      >
        {app && (
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Image
                src={`${BASE_PATH}${app.icon}`}
                alt=""
                width={96}
                height={96}
                className={`size-16 shrink-0 rounded-2xl border-2 border-ink ${app.accent} shadow-hard-sm`}
              />
              <div className="min-w-0">
                <h2 id="dl-title" className="break-words font-display text-2xl font-semibold sm:text-3xl">
                  {app.name}
                </h2>
                <p className="font-display text-lg text-ink/70">{app[lang].tagline}</p>
              </div>
            </div>

            <Carousel key={app.name} srcs={shotUrls(app).map((s) => `${BASE_PATH}${s}`)} alt={app.name} labels={t.dl} />

            <p className="mt-5 leading-relaxed text-ink/80">{app[lang].description}</p>

            <h3 className="mt-5 font-display text-lg font-semibold">{t.dl.features}</h3>
            <ul className="mt-2 grid list-disc gap-x-8 gap-y-1 pl-5 leading-relaxed text-ink/80 marker:text-beak sm:grid-cols-2">
              {app[lang].features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <p className="mt-5 text-sm font-bold text-ink/70">{t.uiLang[app.uiLang]}</p>

            <p className="mt-5 flex items-start gap-2 rounded-2xl border-2 border-ink bg-duck px-4 py-2.5 text-sm font-bold">
              <span aria-hidden="true">🪟</span>
              {t.winOnly}
            </p>

            {STORE_LIVE ? (
              <a
                href={storeUrl(app)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-2xl border-2 border-ink bg-ink px-6 py-4 text-center font-display text-lg font-semibold text-duck shadow-hard transition-transform hover:-translate-y-1"
              >
                {t.dl.button} ↗
              </a>
            ) : (
              <p className="mt-5 block rounded-2xl border-2 border-dashed border-ink/40 px-6 py-4 text-center font-display text-lg font-semibold text-ink/60">
                {t.dl.soon}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-ink/70">{t.dl.note}</p>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="rounded-full border-2 border-ink bg-cream px-5 py-2 font-display font-semibold shadow-hard-sm"
              >
                {t.dl.close}
              </button>
            </div>
          </div>
        )}
      </dialog>
    </main>
  );
}
