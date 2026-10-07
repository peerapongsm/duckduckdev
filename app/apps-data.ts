// Windows desktop apps from ../electron, installed through the Microsoft Store
// (Store-signed, Store-updated). storeId = Partner Center → Product identity → Store ID.

type Copy = { tagline: string; description: string; chips: string[] };

export type DesktopApp = {
  name: string;
  storeId: string;
  icon: string;
  accent: string;
  uiLang: "th" | "en";
  th: Copy;
  en: Copy;
};

export const storeUrl = (a: DesktopApp) => `https://apps.microsoft.com/detail/${a.storeId}`;

export const APPS: DesktopApp[] = [
  {
    name: "DuckDuckWash",
    storeId: "9P7XDJ6VVFKX",
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
    storeId: "9NBP8MC66BHL",
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
    storeId: "9P0B60DD1R1T",
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
    storeId: "9NJ7D2DGW0N9",
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
    storeId: "9PJNBK1GH3QM",
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
    storeId: "9PJ54BQ005TN",
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
    storeId: "9PNWRCP264L0",
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
    storeId: "9NLP107NZFKD",
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
    storeId: "9NTLB1X4G8WB",
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
    storeId: "9MXCDQ3RN6Z7",
    icon: "/apps/plan.png",
    accent: "bg-mint",
    uiLang: "th",
    th: {
      tagline: "วางแผนโปรเจกต์และงาน",
      description:
        "รวมงานทุกโปรเจกต์ไว้ที่เดียว ดูได้ทั้งลิสต์ บอร์ด ปฏิทิน และไทม์ไลน์ มีสปรินต์ เป้าหมาย บันทึกเวลา และพิมพ์รายงานเป็น PDF ข้อมูลเข้ารหัสไว้ในเครื่อง",
      chips: ["บอร์ด", "ไทม์ไลน์", "สปรินต์", "เป้าหมาย", "บันทึกเวลา"],
    },
    en: {
      tagline: "Project and task planner.",
      description:
        "Every project in one place — list, board, calendar or timeline — with sprints, goals, time tracking and PDF reports. Data is encrypted on your PC.",
      chips: ["Board", "Timeline", "Sprints", "Goals", "Time tracking"],
    },
  },
  {
    name: "DuckDuckBCP",
    storeId: "9NK6TZPJC8LS",
    icon: "/apps/bcp.png",
    accent: "bg-beak",
    uiLang: "th",
    th: {
      tagline: "แผนฉุกเฉินและแผนธุรกิจต่อเนื่อง",
      description:
        "ช่วยธุรกิจเล็กเขียนแผนรับมือเหตุฉุกเฉิน ประเมินความเสี่ยง เตรียมรายชื่อผู้ติดต่อ ซ้อมแผน และใช้ตอนเกิดเหตุจริง พิมพ์แผน บัตรพกพา และโปสเตอร์ได้",
      chips: ["ความเสี่ยง", "ผู้ติดต่อ", "ซ้อมแผน", "โหมดเกิดเหตุ"],
    },
    en: {
      tagline: "Emergency and business continuity plan.",
      description:
        "Helps a small business write its emergency plan: assess risks, list contacts, run drills and use it when something actually happens. Prints the plan, wallet cards and a poster.",
      chips: ["Risks", "Contacts", "Drills", "Incident mode"],
    },
  },
];
