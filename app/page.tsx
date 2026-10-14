"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { APPS, STORE_LIVE, shotUrls, storeUrl, type DesktopApp } from "./apps-data";

const EMAIL = "contact@peerapongsm.dev";
const ARMORY_URL = "https://armory.peerapongsm.dev/";

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
    bg: "bg-ink fill-white",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.840-.02 8.75-.08 1.4-.54 2.79-1.350 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.150-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
];

type Lang = "th" | "en";

const COPY = {
  th: {
    house: "Software House",
    navApps: "โปรแกรมฟรี",
    navCustom: "รับทำแอป",
    navContact: "ติดต่อ",
    h1: "โปรแกรมฟรี",
    heroSub:
      "16 โปรแกรมบน Windows ใช้งานออฟไลน์ ข้อมูลอยู่ในเครื่องคุณ ไม่มีค่าสมาชิก ไม่มีโฆษณา ถ้ายังไม่มีตัวที่ตรงกับงานของคุณ เรารับทำให้",
    heroApps: "ดูโปรแกรมทั้งหมด",
    heroCustom: "คุยเรื่องทำแอป",
    wallLabel: "โปรแกรมทั้ง 16 ตัว กดเพื่อดูรายละเอียด",
    appsTitle: "เลือกตัวที่ตรงกับงานของคุณ",
    appsSub: "ทุกตัวฟรี ทำงานได้โดยไม่ต้องต่อเน็ต และสำรองข้อมูลเก็บไว้เองได้",
    winOnly: "ใช้ได้กับ Windows 10 และ 11 (64-bit) บนคอมพิวเตอร์ ยังไม่มีเวอร์ชัน Mac มือถือ และแท็บเล็ต",
    uiLang: { th: "หน้าจอภาษาไทย", en: "หน้าจอภาษาอังกฤษ" },
    dl: {
      button: "ติดตั้งจาก Microsoft Store",
      soon: "เร็ว ๆ นี้บน Microsoft Store",
      note: "ติดตั้งและอัปเดตผ่าน Microsoft Store ฟรี ไม่ต้องสมัครสมาชิก",
      close: "ปิด",
      features: "ทำอะไรได้บ้าง",
      prev: "ภาพก่อนหน้า",
      next: "ภาพถัดไป",
      shot: "ภาพที่",
    },
    customTitle: "รับทำแอปตามสั่ง",
    customSub:
      "งานบางอย่างไม่มีโปรแกรมสำเร็จรูปที่พอดี ถ้างานของร้านคุณยังติดอยู่ในสมุดหรือสเปรดชีต เราทำแอปเล็ก ๆ ให้ตรงกับวิธีทำงานของคุณ",
    steps: [
      {
        title: "คุยกัน",
        body: "เล่าให้ฟังว่าร้านทำงานยังไง ใช้ภาษาธรรมดา ไม่ต้องมีเอกสารสเปก แล้วเราหาจุดที่เสียเวลามากที่สุดด้วยกัน",
      },
      {
        title: "ทำงาน",
        body: "ออกแบบและสร้างแอปให้พอดีกับงานของคุณ ไม่ใส่ฟีเจอร์เกินจำเป็น ใช้เวลาเป็นสัปดาห์ ไม่ใช่หลายเดือน",
      },
      {
        title: "ส่งมอบ",
        body: "คุณได้แอปไปใช้ ข้อมูลเป็นของคุณ และเรายังช่วยปรับแก้ให้เมื่อธุรกิจโตขึ้น",
      },
    ],
    armoryTitle: "อยากดูงานทดลองอื่น ๆ",
    armoryBody: "เว็บแอป เกม และเครื่องมือเล็ก ๆ ที่ทำทีละตัวตลอดหนึ่งปี เก็บไว้ที่ The Armory",
    armoryLink: "ไปที่ The Armory",
    contactTitle: "เล่าให้ฟังว่าอะไรกินเวลาคุณทุกวัน",
    contactSub: "ส่งอีเมลหรือทัก LINE มาได้เลย ถ้าแอปเล็ก ๆ ช่วยได้ เราจะบอกว่าทำอะไรได้บ้างและใช้เวลาเท่าไร",
    privacy: "นโยบายความเป็นส่วนตัว",
  },
  en: {
    house: "Software House",
    navApps: "Free apps",
    navCustom: "Custom apps",
    navContact: "Contact",
    h1: "Free software",
    heroSub:
      "Sixteen Windows apps that work offline. Your data stays on your PC. No subscription, no ads. If none of them fits your work, we'll build one that does.",
    heroApps: "See all apps",
    heroCustom: "Talk about a custom app",
    wallLabel: "All 16 apps. Select one for details.",
    appsTitle: "Pick the one that fits your work",
    appsSub: "Every app is free, runs without an internet connection, and lets you keep your own backups.",
    winOnly: "Windows 10 and 11 (64-bit) desktops only. No Mac, phone or tablet versions yet.",
    uiLang: { th: "Thai interface", en: "English interface" },
    dl: {
      button: "Get it from Microsoft Store",
      soon: "Coming soon to Microsoft Store",
      note: "Installs and updates through the Microsoft Store. Free, no account needed.",
      close: "Close",
      features: "What it does",
      prev: "Previous screenshot",
      next: "Next screenshot",
      shot: "Screenshot",
    },
    customTitle: "Custom apps",
    customSub:
      "Some work has no off-the-shelf program that fits. If your shop still runs on a notebook or a spreadsheet, we build a small app around the way you already work.",
    steps: [
      {
        title: "Discuss",
        body: "Tell us how your shop actually runs, in plain words. No spec documents. Together we find the part that costs you the most time.",
      },
      {
        title: "Build",
        body: "We design and build an app around your workflow, with nothing you won't use. It takes weeks, not months.",
      },
      {
        title: "Deliver",
        body: "You get the app and your data stays yours. We stay around for changes as your business grows.",
      },
    ],
    armoryTitle: "Looking for the experiments?",
    armoryBody: "Web apps, games and small tools, built one at a time over a year, live in The Armory.",
    armoryLink: "Visit The Armory",
    contactTitle: "Tell us what eats your time every day",
    contactSub: "Send an email or message us on LINE. If a small app can help, we'll tell you what it would do and how long it would take.",
    privacy: "Privacy policy",
  },
} as const;

/** "PeerapoS Wash" → "Wash": the tile label under each icon. */
const short = (a: DesktopApp) => a.name.replace(/^PeerapoS /, "");

// Native scroll-snap carousel; arrows and dots just scroll the track.
function Carousel({ srcs, alt, labels }: { srcs: string[]; alt: string; labels: { prev: string; next: string; shot: string } }) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const go = (n: number) => ref.current?.scrollTo({ left: n * ref.current.clientWidth, behavior: "smooth" });
  const arrow =
    "grid size-11 shrink-0 place-items-center rounded-full border border-line bg-sheet text-xl text-ink transition-colors hover:border-ink disabled:opacity-30";

  return (
    <div className="mt-6">
      <div
        ref={ref}
        onScroll={(e) => setI(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-xl border border-line bg-paper [scrollbar-width:none]"
      >
        {srcs.map((src, n) => (
          // click opens the full-size image in a new tab for reading small text
          <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="w-full shrink-0 snap-center">
            <Image src={src} alt={`${alt} — ${labels.shot} ${n + 1}/${srcs.length}`} width={1920} height={1080} className="aspect-video w-full" />
          </a>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <button type="button" onClick={() => go(i - 1)} disabled={i === 0} aria-label={labels.prev} className={arrow}>
          ‹
        </button>
        <div className="flex gap-2">
          {srcs.map((src, n) => (
            <button
              key={src}
              type="button"
              onClick={() => go(n)}
              aria-label={`${labels.shot} ${n + 1}`}
              aria-current={i === n}
              className={`h-2.5 rounded-full transition-all ${i === n ? "w-7 bg-ink" : "w-2.5 bg-line"}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(i + 1)} disabled={i === srcs.length - 1} aria-label={labels.next} className={arrow}>
          ›
        </button>
      </div>
    </div>
  );
}

function LangSwitcher({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="flex rounded-full border border-line bg-sheet p-0.5 text-sm font-semibold">
      {(["th", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onChange(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1 transition-colors ${lang === l ? "bg-ink text-white" : "text-graphite hover:text-ink"}`}
        >
          {l === "th" ? "ไทย" : "EN"}
        </button>
      ))}
    </div>
  );
}

/** The signature: all 16 app tiles, laid out like pinned apps on a Windows Start menu. */
function TileWall({ label, onOpen }: { label: string; onOpen: (a: DesktopApp) => void }) {
  return (
    <ul aria-label={label} className="grid grid-cols-4 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6">
      {APPS.map((a, n) => (
        <li key={a.name} className="tile-in" style={{ animationDelay: `${120 + n * 45}ms` }}>
          <button
            type="button"
            onClick={() => onOpen(a)}
            aria-haspopup="dialog"
            className="group flex w-full flex-col items-center gap-1.5 rounded-xl p-1 text-center"
          >
            <Image
              src={a.icon}
              alt=""
              width={96}
              height={96}
              className="size-14 rounded-[22%] shadow-tile transition-transform group-hover:-translate-y-0.5 sm:size-[4.5rem] lg:size-20"
            />
            <span className="text-[0.8rem] font-semibold leading-tight text-graphite group-hover:text-ink sm:text-sm">{short(a)}</span>
          </button>
        </li>
      ))}
    </ul>
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
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-8 sm:py-6">
        <a href="#top" className="flex items-baseline gap-2 leading-none">
          <span className="font-display text-2xl font-extrabold tracking-tight sm:text-[1.7rem]">PeerapoS</span>
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 font-semibold text-graphite md:flex">
            <a href="#apps" className="hover:text-ink">{t.navApps}</a>
            <a href="#custom" className="hover:text-ink">{t.navCustom}</a>
            <a href="#contact" className="hover:text-ink">{t.navContact}</a>
          </nav>
          <LangSwitcher lang={lang} onChange={setLang} />
        </div>
      </header>

      {/* ── Hero: headline + the tile wall ─────────────── */}
      <section id="top" className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-6 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:pb-28 lg:pt-14">
        <div className="max-w-xl">
          <h1 className="font-display text-[2.6rem] font-bold leading-[1.15] tracking-tight sm:text-6xl">{t.h1}</h1>
          <p className="mt-5 text-lg leading-relaxed text-graphite sm:text-xl">{t.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#apps" className="rounded-xl bg-ink px-6 py-3.5 font-semibold text-white transition-colors hover:bg-indigo-deep">
              {t.heroApps}
            </a>
            <a href="#custom" className="rounded-xl border border-ink/25 bg-sheet px-6 py-3.5 font-semibold transition-colors hover:border-ink">
              {t.heroCustom}
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-line bg-sheet p-3 sm:p-6 lg:w-[30rem]">
          <TileWall label={t.wallLabel} onOpen={openApp} />
        </div>
      </section>

      {/* ── Apps ───────────────────────────────────────── */}
      <section id="apps" className="border-t border-line bg-sheet py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">{t.appsTitle}</h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-graphite">{t.appsSub}</p>
          <p className="mt-2 max-w-2xl text-sm font-semibold text-graphite">{t.winOnly}</p>

          {/* mobile: compact one-line rows; tablet: two columns, desktop: three, with the feature chips */}
          <ul className="mt-10 grid border-t border-line md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
            {APPS.map((a) => {
              const c = a[lang];
              return (
                <li key={a.name} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => openApp(a)}
                    aria-haspopup="dialog"
                    className="group flex w-full items-center gap-4 py-4 text-left md:items-start md:py-6"
                  >
                    <Image src={a.icon} alt="" width={96} height={96} className="size-12 shrink-0 rounded-[22%] md:size-14" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-lg font-bold group-hover:text-indigo md:text-xl">{a.name}</span>
                      <span className="block leading-snug text-graphite">{c.tagline}</span>
                      <span className="mt-3 hidden flex-wrap gap-1.5 md:flex">
                        {c.chips.map((chip) => (
                          <span key={chip} className="rounded-md bg-paper px-2 py-0.5 text-sm text-graphite">
                            {chip}
                          </span>
                        ))}
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-2xl text-line group-hover:text-ink md:hidden">
                      ›
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Custom apps ────────────────────────────────── */}
      <section id="custom" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">{t.customTitle}</h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-graphite">{t.customSub}</p>
          <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {t.steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-5">
                <h3 className="mt-1 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-graphite">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 flex flex-col gap-3 rounded-2xl border border-line bg-sheet p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="font-display text-xl font-bold">{t.armoryTitle}</h3>
              <p className="mt-1 leading-relaxed text-graphite">{t.armoryBody}</p>
            </div>
            <a href={ARMORY_URL} className="shrink-0 font-semibold text-indigo underline decoration-2 underline-offset-4 hover:text-indigo-deep">
              {t.armoryLink}
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────── */}
      <section id="contact" className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
          <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{t.contactTitle}</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">{t.contactSub}</p>
          <ul className="mt-9 flex flex-wrap items-center gap-3">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-block rounded-xl bg-white px-6 py-3.5 text-lg font-semibold text-ink transition-colors hover:bg-paper"
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
                  className={`grid size-14 place-items-center rounded-xl border border-white/25 ${s.bg}`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <footer className="mt-16 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:justify-between">
            <span>© 2026 PeerapoS</span>
            <a href="/privacy" className="hover:text-white">{t.privacy}</a>
          </footer>
        </div>
      </section>

      {/* ── App dialog ─────────────────────────────────── */}
      {/* Native <dialog>, not a window.open popup, so popup blockers never fire.
          Install button is a plain link to the app's Microsoft Store page. */}
      <dialog
        ref={dialogRef}
        onClose={() => setOpenAppName(null)}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
        aria-labelledby="dl-title"
        className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-2xl bg-sheet text-ink shadow-2xl backdrop:bg-ink/60"
      >
        {app && (
          <div className="p-5 sm:p-8">
            <div className="flex items-center gap-4">
              <Image src={app.icon} alt="" width={96} height={96} className="size-16 shrink-0 rounded-[22%]" />
              <div className="min-w-0">
                <h2 id="dl-title" className="break-words font-display text-2xl font-bold sm:text-3xl">
                  {app.name}
                </h2>
                <p className="text-lg text-graphite">{app[lang].tagline}</p>
              </div>
            </div>

            <Carousel key={app.name} srcs={shotUrls(app)} alt={app.name} labels={t.dl} />

            <p className="mt-5 max-w-3xl leading-relaxed text-graphite">{app[lang].description}</p>

            <h3 className="mt-6 font-display text-lg font-bold">{t.dl.features}</h3>
            <ul className="mt-2 grid list-disc gap-x-8 gap-y-1 pl-5 leading-relaxed text-graphite sm:grid-cols-2">
              {app[lang].features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <p className="mt-5 text-sm font-semibold text-graphite">
              {t.uiLang[app.uiLang]} · {t.winOnly}
            </p>

            {STORE_LIVE && app.storeId ? (
              <a
                href={storeUrl(app)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-xl bg-ink px-6 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-indigo-deep"
              >
                {t.dl.button}
              </a>
            ) : (
              <p className="mt-5 rounded-xl border border-dashed border-ink/30 px-6 py-4 text-center text-lg font-semibold text-graphite">
                {t.dl.soon}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-graphite">{t.dl.note}</p>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="rounded-full border border-line px-5 py-2 font-semibold hover:border-ink"
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
