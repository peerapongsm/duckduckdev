// Facts shared by the page, the JSON-LD in layout.tsx and /llms.txt, so search engines and
// AI assistants read the same answers a visitor sees. Keep every claim true to the page copy.

export const SITE_URL = "https://peerapongsm.dev";
export const EMAIL = "contact@peerapongsm.dev";
export const LINE_URL = "https://line.me/ti/p/sx3m1nEg53";
export const TIKTOK_URL = "https://www.tiktok.com/@peera.pos";

export type Faq = { q: string; a: string };

export const FAQ: Record<"th" | "en", Faq[]> = {
  th: [
    {
      q: "PeerapoS รับทำแอปแบบไหนบ้าง",
      a: "PeerapoS เป็น software house เล็ก ๆ ที่รับทำแอปและเขียนโปรแกรมตามสั่งให้ธุรกิจ มีทั้งโปรแกรม Windows ที่ใช้ออฟไลน์ได้ และเว็บแอปที่เปิดได้ทั้งมือถือ แท็บเล็ต และคอมพิวเตอร์ งานที่ทำบ่อยคือระบบหลังร้าน เช่น สต็อกสินค้า สมุดลูกค้า ใบสั่งงาน และงานแจ้งซ่อม ถ้างานของคุณยังอยู่ในสมุดหรือ Excel ก็คุยกันได้",
    },
    {
      q: "ต้องเตรียมเอกสารสเปกก่อนไหม",
      a: "ไม่ต้อง เล่าให้ฟังด้วยภาษาธรรมดาว่าร้านทำงานยังไงก็พอ แล้วเราช่วยกันหาว่าส่วนไหนเสียเวลามากที่สุด งานก็เริ่มจากตรงนั้น",
    },
    {
      q: "ทำแอปหนึ่งตัวใช้เวลานานแค่ไหน",
      a: "ส่วนใหญ่ใช้เวลาเป็นสัปดาห์ ไม่ใช่หลายเดือน เพราะเราใส่เฉพาะฟีเจอร์ที่คุณได้ใช้จริง พอคุยเรื่องงานกันแล้ว เราจะบอกระยะเวลาให้ชัดก่อนเริ่ม",
    },
    {
      q: "ราคาเท่าไร",
      a: "ขึ้นกับขนาดงาน ส่งอีเมลหรือทัก LINE มาเล่างานก่อน แล้วเราจะบอกว่าแอปทำอะไรได้บ้าง ใช้เวลาเท่าไร และราคาประมาณเท่าไร",
    },
    {
      q: "ส่งมอบแล้ว ข้อมูลเป็นของใคร มีคนดูแลต่อไหม",
      a: "ข้อมูลเป็นของคุณ หลังส่งมอบเราก็ยังช่วยปรับแก้แอปให้เมื่อธุรกิจโตขึ้นด้วย",
    },
    {
      q: "ใครเป็นคนทำ",
      a: "Peerapong (Peter) Saksommon ตอนนี้เป็น Software Architect ที่ธนาคารแห่งประเทศไทย เคยเป็น Full-Stack Engineer ที่ Agoda จบ ป.โท Information Systems จาก Syracuse University และได้ใบรับรอง Microsoft Azure Solutions Architect Expert",
    },
    {
      q: "โปรแกรมฟรี 16 ตัวฟรีจริงไหม",
      a: "ฟรีจริง ไม่มีค่าสมาชิก ไม่มีโฆษณา ไม่ต้องสมัครบัญชี ทุกตัวใช้งานออฟไลน์บน Windows 10 และ 11 ข้อมูลเก็บอยู่ในเครื่องคุณเอง",
    },
  ],
  en: [
    {
      q: "What kind of apps does PeerapoS build?",
      a: "PeerapoS is a small software house that builds custom apps and software for businesses: offline Windows programs, and web apps that run on phones, tablets and desktops. Typical work is back-office systems such as inventory, customer records, work orders and maintenance requests. If your work still lives in a notebook or a spreadsheet, we can talk.",
    },
    {
      q: "Do I need a spec document first?",
      a: "No. Tell us in plain words how your business runs. Together we find the part that costs you the most time, and the work starts there.",
    },
    {
      q: "How long does a custom app take?",
      a: "Usually weeks, not months, because we only build the features you will actually use. Once we have talked through the work, we give you a clear timeline before starting.",
    },
    {
      q: "How much does it cost?",
      a: "It depends on the size of the job. Email us or message us on LINE about the work, and we will tell you what the app would do, how long it would take and roughly what it would cost.",
    },
    {
      q: "Who owns the data, and is there support after delivery?",
      a: "Your data is yours. After delivery we keep helping with changes as your business grows.",
    },
    {
      q: "Who builds the apps?",
      a: "Peerapong (Peter) Saksommon, a Software Architect at the Bank of Thailand and a former full-stack engineer at Agoda. He holds an MS in Information Systems from Syracuse University and is a Microsoft Certified Azure Solutions Architect Expert.",
    },
    {
      q: "Are the 16 free apps really free?",
      a: "Yes. No subscription, no ads, no account. Every app works offline on Windows 10 and 11, and your data stays on your own PC.",
    },
  ],
};
