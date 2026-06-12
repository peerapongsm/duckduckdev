"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const EMAIL = "peerapongsm03@gmail.com";

// next/image does not prepend basePath when images.unoptimized is set
const BASE_PATH = process.env.NODE_ENV === "production" ? "/duckduckdev" : "";

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
      "DUCKDUCKDRUG",
      "สร้างเพื่อธุรกิจขนาดเล็ก",
      "DUCKDUCKWASH",
      "เสร็จเป็นสัปดาห์ ไม่ใช่ไตรมาส",
      "ข้อมูลเป็นของคุณ",
    ],
    workKicker: "ผลงานในบ่อ",
    workTitle: "แอปจริง ร้านจริง",
    projects: [
      {
        tagline: "ระบบจัดการร้านขายยา หลายสาขา บนคลาวด์",
        description:
          "เว็บแอป multi-tenant สำหรับร้านขายยาไทย แต่ละร้านได้ subdomain ของตัวเอง บัญชีพนักงานของตัวเอง และแดชบอร์ดเดียวคุมทั้งร้าน — ตั้งแต่ชั้นวางยาจนถึงใบเสร็จ",
        chips: ["สต็อกยา", "งานขาย", "จัดซื้อ", "หลายสาขา", "รายงาน"],
      },
      {
        tagline: "แอปหน้าร้านซักรีด ใช้ได้โดยไม่ต้องมีเน็ต",
        description:
          "แอปเดสก์ท็อปสำหรับร้านซักรีดจริง ออกแบบให้เจ้าของร้านที่ไม่ถนัดเทคโนโลยีใช้ง่าย รับออเดอร์ในไม่กี่วินาที เช็คลิสต์เสื้อผ้ากันลืมกันเถียง และรายงานที่เคยอยู่ใน Excel",
        chips: ["รับออเดอร์", "เช็คลิสต์เสื้อผ้า", "ราคา", "รายจ่าย", "รายงาน"],
      },
    ],
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
      "DUCKDUCKDRUG",
      "BUILT FOR SMALL BUSINESS",
      "DUCKDUCKWASH",
      "WEEKS, NOT QUARTERS",
      "YOUR DATA STAYS YOURS",
    ],
    workKicker: "The pond so far",
    workTitle: "Real apps, real shops.",
    projects: [
      {
        tagline: "Drugstore management, multi-store, in the cloud.",
        description:
          "A multi-tenant web app for Thai drugstores. Every shop gets its own subdomain, its own staff accounts, and one dashboard for the whole operation — from the shelf to the receipt.",
        chips: ["Inventory", "Sales", "Purchasing", "Multi-branch", "Reports"],
      },
      {
        tagline: "A laundry counter app that runs with zero internet.",
        description:
          "A desktop app for a real laundry shop, built for a non-technical owner. Order intake in seconds, garment checklists that end disputes, and reports that used to live in Excel.",
        chips: ["Order intake", "Garment checklist", "Pricing", "Expenses", "Reports"],
      },
    ],
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

const PROJECT_META = [
  {
    name: "DuckDuckDrug",
    icon: `${BASE_PATH}/duckduckdrug.png`,
    stack: "Web SaaS · Next.js + MongoDB",
    accent: "bg-mint",
  },
  {
    name: "DuckDuckWash",
    icon: `${BASE_PATH}/duckduckwash.png`,
    stack: "Desktop · Electron + SQLite",
    accent: "bg-wash",
  },
];

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
      <section id="work" className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="font-display text-lg font-semibold text-beak">{t.workKicker}</p>
          <h2 className="mt-2 font-display text-4xl font-semibold sm:text-6xl">
            {t.workTitle}
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {PROJECT_META.map((p, i) => {
              const c = t.projects[i];
              return (
                <article
                  key={p.name}
                  className={`group rounded-3xl border-2 border-ink bg-cream p-7 shadow-hard transition-transform hover:-translate-y-1.5 hover:rotate-[0.4deg] sm:p-9 ${
                    i === 1 ? "lg:translate-y-10" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`size-20 overflow-hidden rounded-2xl border-2 border-ink ${p.accent} shadow-hard-sm transition-transform group-hover:rotate-[-4deg]`}
                    >
                      <Image
                        src={p.icon}
                        alt={`${p.name} logo`}
                        width={160}
                        height={160}
                        className="size-full object-cover"
                      />
                    </div>
                    <span className="rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-extrabold uppercase tracking-wide">
                      {p.stack}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-3xl font-semibold">{p.name}</h3>
                  <p className="mt-1 font-display text-xl text-ink/70">{c.tagline}</p>
                  <p className="mt-4 leading-relaxed text-ink/80">
                    {c.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {c.chips.map((chip) => (
                      <li
                        key={chip}
                        className="rounded-full bg-ink/8 px-3 py-1 text-sm font-extrabold"
                      >
                        {chip}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <p className="mt-20 max-w-md font-display text-2xl font-medium text-ink/60 lg:mt-24">
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
          <a
            href={`mailto:${EMAIL}`}
            className="mt-9 inline-block rounded-2xl border-2 border-cream bg-duck px-8 py-4 font-display text-xl font-semibold text-ink transition-transform hover:-translate-y-1"
          >
            {EMAIL}
          </a>

          <footer className="mt-20 flex flex-col items-center gap-2 border-t border-cream/15 pt-8 text-sm font-bold text-cream/50 sm:flex-row sm:justify-between">
            <span>© 2026 duckduckdev</span>
            <span>
              {t.footerFamily} <Duck />
            </span>
          </footer>
        </div>
      </section>
    </main>
  );
}
