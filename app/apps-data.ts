// Windows desktop apps from ../electron. Installers are served from each app's
// public GitHub Release (HTTPS, versioned asset URL). sha256/size copied from the
// release asset metadata — update all three fields together on a new release:
//   gh api repos/peerapongsm/<repo>/releases/latest -q '.assets[]|select(.name|endswith(".exe"))|[.name,.size,.digest]'

type Copy = { tagline: string; description: string; chips: string[] };

export type DesktopApp = {
  name: string;
  repo: string;
  version: string;
  file: string;
  size: number;
  sha256: string;
  icon: string;
  accent: string;
  uiLang: "th" | "en";
  th: Copy;
  en: Copy;
};

export const releaseUrl = (a: DesktopApp) =>
  `https://github.com/peerapongsm/${a.repo}/releases/tag/v${a.version}`;
export const downloadUrl = (a: DesktopApp) =>
  `https://github.com/peerapongsm/${a.repo}/releases/download/v${a.version}/${a.file}`;

export const APPS: DesktopApp[] = [
  {
    name: "DuckDuckWash",
    repo: "duckduckwash",
    version: "1.2.3",
    file: "DuckDuckWash-Setup-1.2.3.exe",
    size: 106796859,
    sha256: "754e0ba30aeb0d6e492422543c6a646697b7c3155d5f1af10070b9bc64312d35",
    icon: "/apps/wash.png",
    accent: "bg-wash",
    uiLang: "en",
    th: {
      tagline: "ระบบหน้าร้านซักรีด",
      description:
        "สร้างให้ร้านซักรีดของคุณป้า ใช้จริงทุกวัน รับผ้า ออกบิล ดูยอดรายวัน ปุ่มใหญ่ ตัวหนังสือชัด คนไม่ถนัดคอมก็ใช้ได้",
      chips: ["รับผ้า", "ออกบิล", "ลูกค้า", "ยอดรายวัน"],
    },
    en: {
      tagline: "Front desk for a laundry shop.",
      description:
        "Built for my aunt's laundry and used every day — take in orders, print bills, check the day's totals. Big buttons and clear text, easy even if computers aren't your thing.",
      chips: ["Orders", "Billing", "Customers", "Daily totals"],
    },
  },
  {
    name: "DuckDuckStock",
    repo: "duckduckstock",
    version: "1.0.1",
    file: "DuckDuckStock-Setup-1.0.1.exe",
    size: 102623026,
    sha256: "d5e37705d35162ff105047f2e1a85f8545479d07fac5e229ee44df0c18901615",
    icon: "/apps/stock.png",
    accent: "bg-mint",
    uiLang: "th",
    th: {
      tagline: "สต็อกสินค้า ร้านเล็กถึงโกดังย่อม",
      description:
        "รับเข้า เบิกออก ตรวจนับด้วยบาร์โค้ด ต้นทุนเฉลี่ยคิดให้เอง ของใกล้หมดก็รู้ก่อนขาด",
      chips: ["สินค้า", "บาร์โค้ด", "ตรวจนับ", "ต้นทุนเฉลี่ย"],
    },
    en: {
      tagline: "Inventory for shops and small warehouses.",
      description:
        "Receive, issue and count stock with a barcode scanner. Moving-average cost is worked out for you, and low stock shows up before you run out.",
      chips: ["Products", "Barcodes", "Stock count", "Avg cost"],
    },
  },
  {
    name: "DuckDuckFile",
    repo: "duckduckfile",
    version: "1.0.1",
    file: "DuckDuckFile-Setup-1.0.1.exe",
    size: 105774772,
    sha256: "d9b5e4c3c81f04b9ea67c436164df2ed768c7b26b1c3b0b30ff7df5cf268e35b",
    icon: "/apps/file.png",
    accent: "bg-duck",
    uiLang: "th",
    th: {
      tagline: "ออกเอกสารธุรกิจครบในที่เดียว",
      description:
        "ใบเสนอราคา ใบแจ้งหนี้ ใบเสร็จ ใบกำกับภาษี คิด VAT หัก ณ ที่จ่าย และเขียนยอดเงินเป็นตัวหนังสือให้เอง ใบเสนอราคาที่ลูกค้าตกลงแล้วก็แปลงเป็นใบแจ้งหนี้ได้ทันที",
      chips: ["ใบเสนอราคา", "ใบกำกับภาษี", "VAT 7%", "หัก ณ ที่จ่าย", "PDF"],
    },
    en: {
      tagline: "Every business document in one place.",
      description:
        "Quotations, invoices, receipts and full tax invoices. VAT, withholding tax and the amount in Thai words are done for you, and an accepted quote turns into an invoice in one click.",
      chips: ["Quotation", "Tax invoice", "VAT 7%", "Withholding", "PDF"],
    },
  },
  {
    name: "DuckDuckPay",
    repo: "duckduckpay",
    version: "1.0.2",
    file: "DuckDuckPay-Setup-1.0.2.exe",
    size: 104022057,
    sha256: "ffd2d622fe9ce40735407dc8231cb85df692a2f0a1117b20e1d693ac5849d18e",
    icon: "/apps/pay.png",
    accent: "bg-beak",
    uiLang: "th",
    th: {
      tagline: "เงินเดือนและงานบุคคล 5–50 คน",
      description:
        "คิดเงินเดือน OT วันลา ประกันสังคม และภาษีหัก ณ ที่จ่ายให้ครบ ออกสลิปเงินเดือน รายงาน ภ.ง.ด.1 สปส.1-10 และ 50 ทวิ ได้จากโปรแกรมเลย",
      chips: ["เงินเดือน", "OT", "วันลา", "ประกันสังคม", "ภ.ง.ด.1"],
    },
    en: {
      tagline: "Payroll and HR for 5–50 staff.",
      description:
        "Salary, overtime, leave, social security and withholding tax, all calculated. Payslips and the Thai filings (ภ.ง.ด.1, สปส.1-10, 50 ทวิ) come straight out of the app.",
      chips: ["Payroll", "Overtime", "Leave", "Social security", "PND1"],
    },
  },
  {
    name: "DuckDuckGarage",
    repo: "duckduckgarage",
    version: "1.0.2",
    file: "DuckDuckGarage-Setup-1.0.2.exe",
    size: 100190672,
    sha256: "24d6c505a6cb5e7c506d86932af919bfe34c59804118a4353164fd8c36c57df5",
    icon: "/apps/garage.png",
    accent: "bg-wash",
    uiLang: "th",
    th: {
      tagline: "อู่ซ่อมรถและร้านซ่อมมอเตอร์ไซค์",
      description:
        "ดูแลงานตั้งแต่รับรถ ใบเสนอราคา เคลมประกัน จนถึงรับเงินและส่งมอบ ตัดสต็อกอะไหล่ให้เอง ถ้าลูกค้ายังค้างจ่าย โปรแกรมจะเตือนก่อนปล่อยรถ",
      chips: ["ใบรับรถ", "ใบเสนอราคา", "เคลมประกัน", "อะไหล่", "ใบเสร็จ"],
    },
    en: {
      tagline: "For car garages and motorcycle shops.",
      description:
        "From check-in, quote and insurance claim to payment and hand-over. Parts come off stock automatically, and the app stops you before releasing a car that still has money owing.",
      chips: ["Job card", "Quote", "Insurance claim", "Parts", "Receipt"],
    },
  },
  {
    name: "DuckDuckRoom",
    repo: "duckduckroom",
    version: "1.0.1",
    file: "DuckDuckRoom-Setup-1.0.1.exe",
    size: 100935649,
    sha256: "795540df2b5a8ba8c06e19980dabd77bd7c35b01d7d94f30e2bdda61b644f6a1",
    icon: "/apps/room.png",
    accent: "bg-mint",
    uiLang: "th",
    th: {
      tagline: "หอพักและห้องเช่า 10–200 ห้อง",
      description:
        "จดมิเตอร์น้ำไฟทั้งตึกในตารางเดียว ออกบิลรายเดือนพร้อม QR พร้อมเพย์ ส่งรูปบิลเข้า LINE ได้ พอผู้เช่าย้ายออกก็คิดเงินมัดจำคืนให้",
      chips: ["มิเตอร์", "บิลรายเดือน", "พร้อมเพย์", "สัญญาเช่า", "ย้ายออก"],
    },
    en: {
      tagline: "Dorms and rentals, 10–200 rooms.",
      description:
        "Read every water and power meter in one grid, issue monthly bills with a PromptPay QR, send bill images over LINE, and settle deposits when a tenant moves out.",
      chips: ["Meters", "Monthly bills", "PromptPay", "Leases", "Move-out"],
    },
  },
  {
    name: "DuckDuckClass",
    repo: "duckduckclass",
    version: "1.0.1",
    file: "DuckDuckClass-Setup-1.0.1.exe",
    size: 105902200,
    sha256: "bed5bf76ed554c71bccc3db4f44eb0fdab5703e85158be5b26a8c32afc3ed7e5",
    icon: "/apps/class.png",
    accent: "bg-duck",
    uiLang: "th",
    th: {
      tagline: "โรงเรียนกวดวิชาและสถาบันสอนพิเศษ",
      description:
        "ขายแพ็กเกจเป็นชั่วโมงหรือเป็นครั้ง เช็กชื่อแล้วตัดชั่วโมงให้เอง จัดตารางสอนได้ในตัว ถ้าครูหรือห้องชนกัน โปรแกรมจะบอกทันที",
      chips: ["นักเรียน", "แพ็กเกจเรียน", "ตารางสอน", "เช็กชื่อ"],
    },
    en: {
      tagline: "For tutoring centers and small schools.",
      description:
        "Sell hour or session packages, check students in and the balance updates itself. Build the timetable in-app — teacher or room clashes are flagged right away.",
      chips: ["Students", "Packages", "Timetable", "Check-in"],
    },
  },
  {
    name: "DuckDuckCRM",
    repo: "duckduckcrm",
    version: "1.0.1",
    file: "DuckDuckCRM-Setup-1.0.1.exe",
    size: 104507003,
    sha256: "82480c55f2f7558458f22378efa4eedec835bddfc7b33efeef38d10d6b237420",
    icon: "/apps/crm.png",
    accent: "bg-beak",
    uiLang: "th",
    th: {
      tagline: "สมุดลูกค้าและติดตามงานขาย",
      description:
        "เปิดโปรแกรมมาก็เห็นว่าวันนี้ต้องทักใคร ใครเลยนัด ดีลไหนใกล้ปิด จดบันทึกการคุยได้ในไม่กี่วินาที ไม่ต้องจำเองอีกต่อไป",
      chips: ["ลูกค้า", "ดีล", "นัดติดตาม", "วันเกิด", "PDPA"],
    },
    en: {
      tagline: "A customer book with follow-ups.",
      description:
        "Open it and see who to contact today, who's overdue and which deals are about to close. Log a conversation in seconds and stop keeping it all in your head.",
      chips: ["Customers", "Deals", "Follow-ups", "Birthdays", "PDPA"],
    },
  },
  {
    name: "DuckDuckCampaign",
    repo: "duckduckcampaign",
    version: "1.0.1",
    file: "DuckDuckCampaign-Setup-1.0.1.exe",
    size: 106041699,
    sha256: "13e163eef72babd4f2a37378b1495824aa62f8b2efadbb32dce632bc8c87e48b",
    icon: "/apps/campaign.png",
    accent: "bg-wash",
    uiLang: "th",
    th: {
      tagline: "วางแผนและวัดผลแคมเปญการตลาด",
      description:
        "วางคอนเทนต์บนปฏิทินที่ใส่วันเซลล์ วันหยุด และวันเงินเดือนออกไว้ให้แล้ว จดค่าโฆษณากับผลลัพธ์ แล้วโปรแกรมจะสรุปเป็นรายงานหน้าเดียว",
      chips: ["ปฏิทินการตลาด", "คอนเทนต์", "งบโฆษณา", "รายงาน"],
    },
    en: {
      tagline: "Plan and measure marketing campaigns.",
      description:
        "Lay out content on a calendar that already knows Thai sale days, holidays and paydays. Log ad spend and results, and get a one-page report.",
      chips: ["Calendar", "Content", "Ad spend", "Report"],
    },
  },
  {
    name: "DuckDuckPlan",
    repo: "duckduckplan",
    version: "1.0.0",
    file: "DuckDuckPlan.Setup.1.0.0.exe",
    size: 94871015,
    sha256: "fb2a05ec0fca02000352b7d26bc6b986a1c82f04850881ca472df3f4efc0f331",
    icon: "/apps/plan.png",
    accent: "bg-mint",
    uiLang: "en",
    th: {
      tagline: "วางแผนโปรเจกต์และงานส่วนตัว",
      description:
        "รวมงานทุกโปรเจกต์ไว้ที่เดียว ดูได้ทั้งแบบลิสต์ บอร์ด ปฏิทิน และ Gantt จับเวลาทำงานและเขียนเอกสารประกอบได้ในตัวด้วย",
      chips: ["ลิสต์", "บอร์ด", "Gantt", "จับเวลา", "เอกสาร"],
    },
    en: {
      tagline: "Personal project and task planner.",
      description:
        "Every project in one place, as a list, board, calendar or Gantt chart — with a built-in time tracker and docs.",
      chips: ["List", "Board", "Gantt", "Time tracking", "Docs"],
    },
  },
];
