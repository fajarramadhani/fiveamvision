import { siteConfig } from "@/lib/site";

/**
 * English dictionary — the source of truth for all UI copy.
 * `id.ts` mirrors this shape exactly (enforced by the Dict type).
 */

export const en = {
  nav: {
    home: "Home",
    work: "Work",
    services: "Services",
    about: "About",
    contact: "Contact",
    startProject: "Start a Project",
    primaryAria: "Primary",
    mobileAria: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    servicesGroupLabel: "Services",
  },

  switcher: {
    ariaLabel: "Switch language",
    currentAria: "Current language",
  },

  footer: {
    blurb: "Creative photography & filmmaking for people, moments and brands.",
    navigate: "Navigate",
    servicesTitle: "Services",
    connect: "Connect",
    location: siteConfig.location,
    rights: "FiveAM Agency. All rights reserved.",
    tagline: "People. Moments. Brands.",
    serviceLinks: [
      { href: "/wedding", label: "Wedding" },
      { href: "/graduation", label: "Graduation" },
      { href: "/brand", label: "Brand / UMKM" },
    ],
  },

  waFloat: {
    ariaLabel: "Chat with FiveAM on WhatsApp",
    message: "Hi FiveAM! I'd like to ask about your services.",
  },

  placeholder: {
    replaceText: "Replace with FiveAM project image",
    ariaPrefix: "Placeholder visual — replace with FiveAM project photo: ",
  },

  ctaDefault: {
    title: "Have a story to tell?",
    highlight: "Let's create something worth remembering.",
    body: "Tell us about your moment, your session or your brand. We'll help you turn it into a story people remember.",
    primary: "Start a Project",
    secondary: "Talk to FiveAM",
    waMessage: "Hi FiveAM! I'd like to discuss a project.",
  },

  home: {
    meta: {
      title:
        "FiveAM Agency — Stories Worth Remembering | Creative Photography & Filmmaking Jakarta",
      description:
        "Creative photography & filmmaking for people, moments and brands. Weddings, graduation sessions, personal & creator content, and brand production in Jakarta, Indonesia.",
    },
    hero: {
      eyebrow: "Creative Photography & Filmmaking — Jakarta",
      title1: "Stories Worth",
      title2: "Remembering.",
      sub: "Creative photography & filmmaking for people, moments and brands.",
      explore: "Explore Our Work",
      startProject: "Start a Project",
      strip: ["People", "Moments", "Brands"],
    },
    intro: {
      eyebrow: "Who We Are",
      segments: [
        { t: "FiveAM is a creative team crafting visual stories through " },
        { t: "photography", a: true },
        { t: ", " },
        { t: "filmmaking", a: true },
        { t: " and " },
        { t: "creative direction", a: true },
        { t: "." },
      ] as Array<{ t: string; a?: boolean }>,
      pillars: [
        { word: "People", note: "Brides & grooms, graduates, creators & personal brands." },
        { word: "Moments", note: "Weddings, graduations and moments worth keeping." },
        { word: "Brands", note: "UMKM & brands that are growing." },
      ],
    },
    servicesSec: {
      eyebrow: "What We Do",
      titlePlain: "One team.",
      titleAccent: "Four stories to tell.",
      lead: "From joyful days to growing brands — we handle everything with the same approach: find the story first, then pick up the camera.",
    },
    rows: {
      weddings: {
        name: "Weddings",
        tagline: "Capture stories beyond the ceremony.",
        cta: "Explore Weddings",
      },
      graduation: {
        name: "Graduation",
        tagline: "Celebrate the chapter you've completed.",
        cta: "Explore Graduation",
      },
      personal: {
        name: "Personal & Creator",
        tagline: "Visual storytelling for individuals and creators.",
        cta: "Explore Personal",
      },
      brands: {
        name: "Brands",
        tagline: "Creative content built for growing brands.",
        cta: "Explore Brand Work",
      },
    },
    featured: {
      eyebrow: "Selected Stories",
      titlePlain: "Work we're",
      titleAccent: "proud of.",
      viewAll: "View All Work",
    },
    why: {
      eyebrow: "Why FiveAM",
      titlePlain: "Simple approach,",
      titleAccent: "serious craft.",
      items: [
        {
          title: "Story First",
          body: "We don't just take pictures. We look for the story inside them.",
        },
        {
          title: "Creative Direction",
          body: "We help from concept to execution — not just showing up with a camera.",
        },
        {
          title: "Collaborative",
          body: "Every project is built together with the client. Your ideas matter.",
        },
        {
          title: "Detail Matters",
          body: "Small details shape the whole story. We pay attention to them.",
        },
      ],
    },
    process: {
      eyebrow: "How It Works",
      titlePlain: "From hello to",
      titleAccent: "delivered.",
      steps: [
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
      ],
    },
    kindWords: {
      eyebrow: "Kind Words",
      titlePlain: "What clients say",
      titleAccent: "after the story.",
      trustedBy: "Trusted by",
    },
  },

  workPage: {
    meta: {
      title: "Work — Selected Stories",
      description:
        "Selected stories from FiveAM Agency — weddings, graduation sessions, portraits and brand campaigns in Jakarta, Indonesia.",
    },
    eyebrow: "Our Work",
    title1: "Selected",
    title2: "Stories.",
    sub: "Every project is a story. Filter by what you need — or see them all.",
  },

  workFilter: {
    ariaLabel: "Filter projects by category",
    filters: ["All", "Wedding", "Graduation", "Personal", "Brand"],
    empty: "No stories in this category yet.",
  },

  projectDetail: {
    labels: {
      category: "Category",
      year: "Year",
      client: "Client",
    },
    clientTba: "[TO BE PROVIDED]",
    moreStories: "More stories",
    galleryAria: "Project gallery",
    similarTitle: "Have a similar story?",
    similarHighlight: "Start a Similar Project.",
    similarPrimary: "Start a Similar Project",
    similarWaPrefix: 'Hi FiveAM! I saw "',
    similarWaSuffix: "\" and I'd love to create something similar.",
  },

  servicesPage: {
    meta: {
      title: "Services — What We Create",
      description:
        "Wedding & graduation (moments), personal & creator content (people), and photography, video, reels & creative direction for brands. Jakarta, Indonesia.",
    },
    eyebrow: "Services",
    title1: "What We",
    title2: "Create.",
    sub: "People. Moments. Brands. All within one creative ecosystem.",
    pricingNote:
      "We don't list fixed prices for each service — every project has different needs. Chat with us and we'll help recommend the package that fits best.",
    groups: [
      {
        id: "moments",
        label: "Moments",
        headline: "Days that only happen once.",
        items: [
          {
            name: "Wedding",
            desc: "Photography, films, engagement, prewedding, akad, reception & intimate wedding.",
            href: "/wedding",
            cta: "Check Availability",
          },
          {
            name: "Graduation",
            desc: "Individual, couple, best friend, group & family sessions — plus reels.",
            href: "/graduation",
            cta: "Book Your Session",
          },
        ],
      },
      {
        id: "people",
        label: "People",
        headline: "Your story, told differently.",
        items: [
          {
            name: "Personal / Creator",
            desc: "Personal photoshoot, portrait, personal branding, creator content & reels.",
            href: "/contact",
            cta: "Start a Session",
          },
        ],
      },
      {
        id: "brands",
        label: "Brands",
        headline: "Content that moves your brand forward.",
        items: [
          {
            name: "Commercial & UMKM",
            desc: "Product photography, campaign, lifestyle content, reels, short-form video & creative direction. Monthly content production is also available for ongoing content needs.",
            href: "/brand",
            cta: "Discuss Your Project",
          },
        ],
      },
    ],
    cta: {
      title: "Not sure where to start?",
      highlight: "Let's talk it through.",
      waMessage:
        "Hi FiveAM! I'm not sure which service fits my needs — can we discuss?",
    },
  },

  weddingPage: {
    meta: {
      title: "Wedding Photographer & Videographer Jakarta",
      description:
        "Wedding photography, cinematic films, prewedding & intimate wedding documentation by FiveAM Agency. Every wedding has its own rhythm — we capture it as it happens.",
    },
    hero: {
      eyebrow: "Weddings",
      title1: "Your day,",
      title2: "your rhythm.",
      sub: "Every wedding has its own rhythm, people and story. We capture it as it happens.",
      checkAvailability: "Check Availability",
      checkWaMessage: "Hi FiveAM! I'd like to check availability for our wedding date.",
      seeStories: "See Wedding Stories",
    },
    approach: {
      eyebrow: "Our Approach",
      segments: [
        { t: "We don't direct your happiest day like a photoshoot. " },
        { t: "We document what actually happens", a: true },
        {
          t: " — the laughter, the tears, and the small moments in between.",
        },
      ] as Array<{ t: string; a?: boolean }>,
    },
    stories: {
      eyebrow: "Selected Wedding Stories",
      titlePlain: "Recent",
      titleAccent: "celebrations.",
    },
    included: {
      eyebrow: "What's Included",
      titlePlain: "Coverage for",
      titleAccent: "every chapter.",
    },
    servicesList: [
      "Wedding Photography",
      "Wedding Films",
      "Engagement",
      "Prewedding",
      "Akad & Reception",
      "Intimate Wedding",
      "Couple Session",
    ],
    faq: {
      eyebrow: "FAQ",
      titlePlain: "Questions,",
      titleAccent: "answered.",
      items: [
        {
          q: "How do we book FiveAM for our wedding date?",
          a: "Chat with us via WhatsApp and tell us your date and event concept. If the date is available, we'll send package recommendations and lock the booking with a down payment.",
        },
        {
          q: "Do you offer both photo and video?",
          a: "Yes. You can book photography only, videography only, or both as one team that is used to working together.",
        },
        {
          q: "We're planning a small / intimate wedding. Is that okay?",
          a: "Absolutely. Intimate weddings actually have more room for storytelling — we adapt the package to the scale of your event.",
        },
        {
          q: "How many photos and how long is the film?",
          a: "Photo count and film length depend on the package. What we promise isn't the numbers — it's the story conveyed from your day.",
        },
      ],
    },
    cta: {
      title: "Getting married soon?",
      highlight: "Let's tell your story properly.",
      primary: "Check Availability",
      waMessage: "Hi FiveAM! I'd like to check availability for our wedding date.",
    },
  },

  graduationPage: {
    meta: {
      title: "Graduation Photographer Jakarta — Book Your Session",
      description:
        "Graduation photography & reels by FiveAM Agency — individual, couple, best friend, group and family sessions. Celebrate the chapter you've completed.",
    },
    hero: {
      eyebrow: "Graduation",
      title1: "You did it.",
      title2: "Now remember it.",
      sub: "Years of hard work, closed in a single day. Celebrate the chapter you've completed — and keep it forever.",
      bookWaMessage: "Hi FiveAM! I'd like to book a graduation session.",
      bookBtn: "Book Graduation Session",
    },
    sessions: {
      eyebrow: "Pick Your Vibe",
      title: "Session types.",
    },
    sessionTypes: [
      { name: "Individual", desc: "Full focus on you and your achievement." },
      { name: "Couple", desc: "Celebrate a new chapter together with your partner." },
      { name: "Best Friend", desc: "The most fun graduation photos with your bestie." },
      { name: "Group", desc: "One class, one frame, one memory." },
      { name: "Family", desc: "Parents who are proud too — capture them as well." },
    ],
    addons: {
      titlePlain: "Level it up with",
      titleAccent: "add-ons.",
    },
    addOnsList: [
      "Graduation Reels",
      "Cinematic Video",
      "Same Day Edit",
      "Additional Hour",
    ],
    cta: {
      title: "Graduation season fills up fast.",
      highlight: "Book your session early.",
      primary: "Book Graduation Session",
      waMessage:
        "Hi FiveAM! I'd like to ask about graduation packages for this season.",
    },
  },

  brandPage: {
    meta: {
      title: "Brand & UMKM Content Production Jakarta",
      description:
        "Product photography, campaign, lifestyle content, reels, short-form video & creative direction for growing brands and UMKM. Content made to move your brand forward.",
    },
    hero: {
      eyebrow: "Brands & UMKM",
      title1: "Content made to",
      title2: "move you forward.",
      sub: "For UMKM and growing brands — not just product photos, but content with clear creative direction.",
      discussWaMessage:
        "Hi FiveAM! I'd like to discuss content production for my brand.",
      discussBtn: "Discuss Your Project",
    },
    capabilities: {
      eyebrow: "Capabilities",
      titlePlain: "One partner,",
      titleAccent: "full coverage.",
    },
    groups: [
      {
        title: "Photography",
        items: ["Product", "Campaign", "Lifestyle", "Food", "Fashion"],
      },
      {
        title: "Video Content",
        items: ["Reels", "Short-form video", "Cinematic", "Product video"],
      },
      {
        title: "Creative",
        items: ["Creative Direction", "Social Media Content", "Campaign Concept"],
      },
    ],
    monthly: {
      titlePlain: "Need content",
      titleAccent: "all year round?",
      body: "Monthly Content Production: photoshoots, reels and content assets every month — your brand's feed stays alive without you thinking about it every month.",
      btn: "Ask About Monthly Plan",
      waMessage: "Hi FiveAM! I'm interested in the monthly content production.",
    },
    stories: {
      eyebrow: "Selected Brand Work",
      titlePlain: "Campaigns, not just",
      titleAccent: "product shots.",
    },
    cta: {
      title: "Have a brand to build?",
      highlight: "Let's make content that works.",
      primary: "Discuss Your Project",
      waMessage: "Hi FiveAM! I'd like to discuss a project for my brand.",
    },
  },

  aboutPage: {
    meta: {
      title: "About — Who We Are",
      description:
        "FiveAM Agency is a creative team crafting visual stories through photography, filmmaking and creative direction. Based in Jakarta, Indonesia.",
    },
    hero: {
      title1: "The team behind",
      title2: "the stories.",
      eyebrow: "About",
    },
    who: {
      eyebrow: "Who We Are",
      title: "FiveAM is a creative team.",
      paras: [
        "Not just \u201cthe person who carries the camera\u201d — FiveAM is a creative partner helping you turn people, moments and brands into visual stories with real value.",
        "Our name comes from the calmest hour of the day — 5 AM. The hour when the city hasn't woken up, the light is still soft, and the day's story hasn't begun yet. We love starting from there: before everyone else sees it.",
        "Based in Jakarta, Indonesia. Working with couples, graduates, creators and growing brands.",
      ],
    },
    beliefs: {
      eyebrow: "What We Believe",
      title: "Three things, no fluff.",
      items: [
        {
          title: "Storytelling",
          body: "Every image must tell a story. If there's no story yet, we look for it before pressing the shutter.",
        },
        {
          title: "Collaboration",
          body: "The best projects are born from two directions — your ideas plus our perspective.",
        },
        {
          title: "Creative Execution",
          body: "A great idea without great execution is just an idea. We see it through to the last detail.",
        },
      ],
    },
    team: {
      eyebrow: "Meet the Team",
      titlePlain: "The humans of",
      titleAccent: "FiveAM.",
      sub: "Roles at FiveAM: PIC, Creative Lead, Production Team & Post Production.",
    },
    cta: {
      title: "Like how we think?",
      highlight: "You'll like how we work.",
      waMessage:
        "Hi FiveAM! I just checked your About page and I'd love to work together.",
    },
  },

  contactPage: {
    meta: {
      title: "Contact — Let's Create Something",
      description:
        "Start a project with FiveAM Agency. Weddings, graduation sessions, personal & creator content, or brand production — chat via WhatsApp or send an inquiry.",
    },
    eyebrow: "Contact",
    title1: "Let's create",
    title2: "something.",
    talkHeading: "Talk to FiveAM directly",
    channels: [
      {
        label: "WhatsApp",
        note: "Fastest response — usually within a few hours.",
      },
      {
        label: "Email",
        note: "For proposals & collaborations.",
      },
      {
        label: "Instagram",
        note: "See our latest work & behind the scenes.",
      },
    ],
    location: siteConfig.location,
  },

  inquiry: {
    name: { label: "Name", placeholder: "Your name" },
    contact: {
      label: "WhatsApp / Email",
      placeholder: "+62… or you@email.com",
    },
    type: {
      label: "Project Type",
      options: ["Wedding", "Graduation", "Personal / Creator", "Brand", "Other"],
    },
    date: { label: "Event / Project Date" },
    budget: {
      label: "Estimated Budget",
      options: [
        "Not sure yet",
        "< Rp1 million",
        "Rp1–3 million",
        "Rp3–5 million",
        "Rp5–10 million",
        "> Rp10 million",
      ],
    },
    message: {
      label: "Tell Us About Your Project",
      placeholder: "Tell us your idea, the moment, or your brand…",
    },
    submit: "Send Inquiry",
    disclaimer:
      "Submitting opens WhatsApp with your inquiry pre-filled — no account needed.",
    waIntro: "Hi FiveAM! I'd like to start a project.",
    waFields: {
      name: "Name",
      contact: "Contact",
      type: "Project Type",
      date: "Event / Project Date",
      budget: "Estimated Budget",
      about: "About the project",
    },
  },
};

export type Dict = typeof en;
