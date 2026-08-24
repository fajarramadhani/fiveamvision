/**
 * Service architecture — kept intentionally simple per the Master Context:
 * four core categories inside one creative ecosystem (People · Moments · Brands).
 */

export interface ServiceCategory {
  id: string;
  index: string;
  name: string;
  tagline: string;
  href: string;
  cta: string;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "weddings",
    index: "01",
    name: "Weddings",
    tagline: "Capture stories beyond the ceremony.",
    href: "/wedding",
    cta: "Explore Weddings",
    items: [
      "Wedding Photography",
      "Wedding Films",
      "Engagement",
      "Prewedding",
      "Akad & Reception",
      "Intimate Wedding",
      "Couple Session",
    ],
  },
  {
    id: "graduation",
    index: "02",
    name: "Graduation",
    tagline: "Celebrate the chapter you've completed.",
    href: "/graduation",
    cta: "Explore Graduation",
    items: [
      "Individual Session",
      "Couple",
      "Best Friend",
      "Group",
      "Family",
      "Graduation Reels",
    ],
  },
  {
    id: "personal",
    index: "03",
    name: "Personal & Creator",
    tagline: "Visual storytelling for individuals and creators.",
    href: "/services",
    cta: "Explore Personal",
    items: [
      "Personal Photoshoot",
      "Portrait",
      "Personal Branding",
      "Creator Content",
      "Reels",
    ],
  },
  {
    id: "brands",
    index: "04",
    name: "Brands",
    tagline: "Creative content built for growing brands.",
    href: "/brand",
    cta: "Explore Brand Work",
    items: [
      "Product Photography",
      "Campaign Photography",
      "Lifestyle Content",
      "Reels",
      "Short Form Video",
      "Creative Direction",
    ],
  },
];

export const whyFiveam = [
  {
    title: "Story First",
    body: "Kami tidak hanya mengambil gambar. Kami mencari cerita di dalamnya.",
  },
  {
    title: "Creative Direction",
    body: "Kami membantu dari konsep sampai execution — bukan sekadar datang dengan kamera.",
  },
  {
    title: "Collaborative",
    body: "Setiap project dibangun bersama client. Ide kamu matters.",
  },
  {
    title: "Detail Matters",
    body: "Detail kecil membentuk keseluruhan cerita. Kami memperhatikannya.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Tell Us Your Story",
    body: "Share your idea, event or brand through WhatsApp or our inquiry form.",
  },
  {
    step: "02",
    title: "Build The Direction",
    body: "We develop the visual approach together — concept, mood and plan.",
  },
  {
    step: "03",
    title: "Create",
    body: "Production day. We document and direct, so you can stay in the moment.",
  },
  {
    step: "04",
    title: "Deliver",
    body: "Final visuals, edited and ready to share with the people who matter.",
  },
];
