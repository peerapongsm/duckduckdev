// Auto-generated snapshot of the project-365 Armory fleet (peerapongsm.dev).
// Mirrors armory projects.json (done/funding->built, building, planned); notes+emoji hand-authored.
// Regenerate: node gen-armory.mjs (see scratchpad).
export type ArmoryStatus = "built" | "building" | "planned";
export interface ArmoryItem {
  id: number;
  name: string;
  url: string;
  status: ArmoryStatus;
  kind: string;
  emoji: string;
  note?: string;
}

export const ARMORY_BUILT = 45;
export const ARMORY_TOTAL = 52;

export const ARMORY: ArmoryItem[] = [
  {
    "id": 1,
    "name": "The Armory",
    "url": "https://peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🗄️",
    "note": "ฮับรวมทุกโปรเจกต์ + สถานะ"
  },
  {
    "id": 2,
    "name": "Armory Analytics",
    "url": "https://armory-analytics.peerapongsm.dev",
    "status": "built",
    "kind": "web",
    "emoji": "📊",
    "note": "แดชบอร์ด analytics ข้ามโปรเจกต์"
  },
  {
    "id": 3,
    "name": "Yai-Aree",
    "url": "https://yai-aree.peerapongsm.dev",
    "status": "built",
    "kind": "web",
    "emoji": "👵",
    "note": "CBT บันทึกความคิดกับยายอารี AI"
  },
  {
    "id": 4,
    "name": "กล่องพักใจ",
    "url": "https://glong-pak-jai.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "📦",
    "note": "พักความกังวลไว้เปิดตามเวลา (CBT)"
  },
  {
    "id": 5,
    "name": "คลายหนี้",
    "url": "https://klai-nee.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "💸",
    "note": "จัดระเบียบหนี้ เห็นดอกจริง หาทางออก"
  },
  {
    "id": 6,
    "name": "GPP Floor Check",
    "url": "https://gpp-floor-check.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "💊",
    "note": "ตรวจผังร้านยาตามมาตรฐาน GPP"
  },
  {
    "id": 7,
    "name": "set-is-dead",
    "url": "https://set-is-dead.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "📉",
    "note": "backtest กองทุนลดหย่อนภาษี vs ทางเลือกอื่น"
  },
  {
    "id": 8,
    "name": "หาบริการรัฐใกล้ฉัน",
    "url": "https://gov-service-locator.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🏢",
    "note": "หาสำนักงานรัฐใกล้สุด + เอกสารที่ต้องใช้"
  },
  {
    "id": 9,
    "name": "เพื่อนเกษตร",
    "url": "https://github.com/peerapongsm/puan-kaset/releases/latest",
    "status": "built",
    "kind": "desktop",
    "emoji": "🌾",
    "note": "คำนวณปุ๋ยตามค่าดิน + ปฏิทินเพาะปลูก"
  },
  {
    "id": 10,
    "name": "เพื่อนคู่ร้าน",
    "url": "https://shop-buddy.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🏪",
    "note": "เช็คสุขภาพการเงินร้านใน 10 คำถาม"
  },
  {
    "id": 11,
    "name": "DuckDuckWash",
    "url": "https://github.com/peerapongsm/duckduckwash/releases/latest",
    "status": "built",
    "kind": "desktop",
    "emoji": "🧺",
    "note": "POS ร้านซักรีด ออฟไลน์"
  },
  {
    "id": 12,
    "name": "DuckDuckPlan",
    "url": "https://duckduckplan.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🗂️",
    "note": "วางแผนงานส่วนตัว ออฟไลน์"
  },
  {
    "id": 13,
    "name": "PromptFiled",
    "url": "https://promptfiled.peerapongsm.dev",
    "status": "built",
    "kind": "web",
    "emoji": "📄",
    "note": "กรอกฟอร์มราชการไทย ได้ PDF พร้อมพิมพ์"
  },
  {
    "id": 14,
    "name": "ลด-ละ-เลิก",
    "url": "https://github.com/peerapongsm/lod-la-lerk/releases/latest",
    "status": "built",
    "kind": "mobile",
    "emoji": "🚭",
    "note": "นับวันเลิกบุหรี่/เหล้า + streak"
  },
  {
    "id": 15,
    "name": "RunClub Social",
    "url": "https://runclub.peerapongsm.dev/",
    "status": "built",
    "kind": "mobile",
    "emoji": "🏃",
    "note": "แอปชมรมวิ่ง social + วิ่งสด"
  },
  {
    "id": 16,
    "name": "สายโจรจำลอง",
    "url": "https://scam-call-trainer.peerapongsm.dev",
    "status": "built",
    "kind": "web",
    "emoji": "📞",
    "note": "ซ้อมรับสายมิจฉาชีพกับ AI"
  },
  {
    "id": 17,
    "name": "หนี้ครัวเรือนสด",
    "url": "https://debt-counter.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "📈",
    "note": "หนี้ครัวเรือนไทยวิ่งเรียลไทม์"
  },
  {
    "id": 18,
    "name": "หวยจำลอง",
    "url": "https://lottery-time-machine.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🎰",
    "note": "replay หวยย้อนหลัง เห็นยอดจ่าย/ถูก"
  },
  {
    "id": 19,
    "name": "หมาแมวจร",
    "url": "https://pawmap.peerapongsm.dev/",
    "status": "built",
    "kind": "mobile",
    "emoji": "🐕",
    "note": "แผนที่รายงานจุดหมาแมวจร"
  },
  {
    "id": 20,
    "name": "เกมปุ่มเดียว",
    "url": "https://one-button-games.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🕹️",
    "note": "3 มินิเกมเล่นด้วยปุ่มเดียว"
  },
  {
    "id": 21,
    "name": "หมากรุกไทยออนไลน์",
    "url": "https://makruk.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "♟️",
    "note": "หมากรุกไทยกติกาเต็ม + สู้บอท"
  },
  {
    "id": 22,
    "name": "ทายจังหวัดวันละครั้ง",
    "url": "https://daily-puzzle.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🗺️",
    "note": "เกมทายจังหวัดไทยรายวัน"
  },
  {
    "id": 23,
    "name": "Traffic God",
    "url": "https://traffic-god.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🚦",
    "note": "คุมไฟแดงสี่แยกเอง"
  },
  {
    "id": 24,
    "name": "พิมพ์ไล่ผี",
    "url": "https://typing-ghosts.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "👻",
    "note": "เกมฝึกพิมพ์ไทยไล่ผี"
  },
  {
    "id": 25,
    "name": "ลายไทย Generator",
    "url": "https://lai-thai-generator.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🎨",
    "note": "สร้างลายไทยด้วยพารามิเตอร์ + export"
  },
  {
    "id": 26,
    "name": "เสียงฝนเมืองไทย",
    "url": "https://sound-of-rain.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🌧️",
    "note": "เสียงฝนสังเคราะห์สด หลังคาสังกะสี"
  },
  {
    "id": 27,
    "name": "ชีวิตเป็นสัปดาห์",
    "url": "https://life-in-weeks.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "⏳",
    "note": "ชีวิตทั้งชีวิตใน grid สัปดาห์"
  },
  {
    "id": 28,
    "name": "CSS ตลาดสด",
    "url": "https://css-talad.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🛒",
    "note": "ฉากตลาดสดวาดด้วย CSS ล้วน"
  },
  {
    "id": 29,
    "name": "ฟอนต์ลายมือคุณ",
    "url": "https://handwriting-font.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "✍️",
    "note": "วาดตัวอักษร ได้ฟอนต์ .ttf จริง"
  },
  {
    "id": 30,
    "name": "if — ถ้า",
    "url": "https://if.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "📖",
    "note": "anthology นิยายเลือกทางเดิน CYOA ไทย"
  },
  {
    "id": 31,
    "name": "เพลงจากเส้นทางของคุณ",
    "url": "https://commute-music.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🎵",
    "note": "เส้นทางรถไฟฟ้ากลายเป็นเมโลดี้"
  },
  {
    "id": 32,
    "name": "Whistle to Search",
    "url": "https://whistle-search.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🎶",
    "note": "ผิวปากทำนองแล้วทายเพลง"
  },
  {
    "id": 33,
    "name": "แดดบอกเวลา",
    "url": "https://shadow-clock.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "☀️",
    "note": "นาฬิกาแดด virtual ตามพิกัด + พิมพ์ได้"
  },
  {
    "id": 34,
    "name": "Plant Cam Timelapse",
    "url": "https://plant-timelapse.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🌱",
    "note": "จัดแนวรูปต้นไม้เป็น timelapse"
  },
  {
    "id": 35,
    "name": "เว็บที่ช้าที่สุดในประเทศไทย",
    "url": "https://slowest-website.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🐌",
    "note": "performance art บังคับรอ 3 นาที"
  },
  {
    "id": 36,
    "name": "หน้าเว็บปี 2004",
    "url": "https://web-2004.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "💾",
    "note": "โฮมเพจยุค hi5 + โหมดพิพิธภัณฑ์"
  },
  {
    "id": 37,
    "name": "Two-Person Pixel Canvas",
    "url": "https://pixel-canvas.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🖼️",
    "note": "วาดพิกเซลกับเพื่อนผ่าน WebRTC"
  },
  {
    "id": 38,
    "name": "สารภาพกับความว่างเปล่า",
    "url": "https://confession.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🕯️",
    "note": "พิมพ์แล้วปล่อยให้หายไปจริง"
  },
  {
    "id": 39,
    "name": "QR Code ทำงานยังไง",
    "url": "https://qr-explorable.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🔳",
    "note": "explorable แกะ QR ทีละชั้น"
  },
  {
    "id": 40,
    "name": "สอนคอมให้เดา",
    "url": "https://teach-machine.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🤖",
    "note": "สอน AI จำแนกภาพ KNN โปร่งใส"
  },
  {
    "id": 41,
    "name": "0.1 + 0.2 ≠ 0.3",
    "url": "https://float-horror.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🔢",
    "note": "explorable บั๊ก floating point"
  },
  {
    "id": 42,
    "name": "Desk Rain",
    "url": "https://desk-rain.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🌦️",
    "note": "อีกเดี๋ยวฝนจะตกที่บ้านไหม (nowcast)"
  },
  {
    "id": 43,
    "name": "เติมบุญ",
    "url": "https://term-boon.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🙏",
    "note": "idle clicker เสียดสีเศรษฐกิจบุญ"
  },
  {
    "id": 44,
    "name": "เรียนรู้ Claude Architect",
    "url": "https://course.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "🎓",
    "note": "study guide Claude cert ไทย interactive"
  },
  {
    "id": 45,
    "name": "โฆษณานรก",
    "url": "https://ads.peerapongsm.dev/",
    "status": "built",
    "kind": "web",
    "emoji": "📢",
    "note": "เว็บเสียดสีโฆษณา dark pattern"
  },
  {
    "id": 46,
    "name": "เซียมซี",
    "url": "",
    "status": "building",
    "kind": "web",
    "emoji": "🎋",
    "note": "เขย่ามือถือเสี่ยงเซียมซี"
  },
  {
    "id": 47,
    "name": "เอนจินโคลงกลอน",
    "url": "",
    "status": "planned",
    "kind": "web",
    "emoji": "✒️",
    "note": "ตรวจและช่วยแต่งฉันทลักษณ์ไทย"
  },
  {
    "id": 48,
    "name": "ต่อกลอนสด",
    "url": "",
    "status": "planned",
    "kind": "web",
    "emoji": "📝",
    "note": "ต่อกลอนกับเพื่อนเรียลไทม์"
  },
  {
    "id": 49,
    "name": "ระบบเลือกตั้งจำลอง",
    "url": "",
    "status": "planned",
    "kind": "web",
    "emoji": "🗳️",
    "note": "เครื่องคำนวณผลเลือกตั้ง"
  },
  {
    "id": 50,
    "name": "ราชการ Simulator",
    "url": "",
    "status": "planned",
    "kind": "web",
    "emoji": "📋",
    "note": "เกมเสียดสีระบบราชการ"
  },
  {
    "id": 51,
    "name": "เดือนชนเดือน",
    "url": "",
    "status": "planned",
    "kind": "web",
    "emoji": "💰",
    "note": "จำลองใช้ชีวิตค่าแรงขั้นต่ำ"
  },
  {
    "id": 52,
    "name": "นิทรรศการ 3D",
    "url": "",
    "status": "planned",
    "kind": "web",
    "emoji": "🏛️",
    "note": "พิพิธภัณฑ์ 3D รวมทุกโปรเจกต์"
  }
];
