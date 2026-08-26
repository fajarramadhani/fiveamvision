import type { Dict } from "./en";

/**
 * Indonesian dictionary — must mirror the shape of `en` exactly.
 */
export const id: Dict = {
  nav: {
    home: "Beranda",
    work: "Karya",
    services: "Layanan",
    about: "Tentang",
    contact: "Kontak",
    startProject: "Mulai Project",
    primaryAria: "Navigasi utama",
    mobileAria: "Navigasi seluler",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    skipToContent: "Langsung ke konten",
    servicesGroupLabel: "Layanan",
  },

  switcher: {
    ariaLabel: "Ganti bahasa",
    currentAria: "Bahasa saat ini",
  },

  footer: {
    blurb: "Fotografi & filmmaking kreatif untuk people, moments dan brands.",
    navigate: "Navigasi",
    servicesTitle: "Layanan",
    connect: "Terhubung",
    location: "Jakarta, Indonesia",
    rights: "FiveAM Agency. Seluruh hak cipta dilindungi.",
    tagline: "People. Moments. Brands.",
    serviceLinks: [
      { href: "/wedding", label: "Wedding" },
      { href: "/graduation", label: "Graduation" },
      { href: "/brand", label: "Brand / UMKM" },
    ],
  },

  waFloat: {
    ariaLabel: "Chat dengan FiveAM via WhatsApp",
    message: "Hai FiveAM! Saya ingin bertanya tentang layanan kamu.",
  },

  placeholder: {
    replaceText: "Ganti dengan foto project FiveAM",
    ariaPrefix: "Visual placeholder — ganti dengan foto project FiveAM: ",
  },

  ctaDefault: {
    title: "Punya cerita untuk diceritakan?",
    highlight: "Mari buat sesuatu yang layak diingat.",
    body: "Ceritakan momen, session atau brand kamu. Kami bantu mengubahnya menjadi cerita yang orang ingat.",
    primary: "Mulai Project",
    secondary: "Ngobrol dengan FiveAM",
    waMessage: "Hai FiveAM! Saya ingin mendiskusikan sebuah project.",
  },

  home: {
    meta: {
      title:
        "FiveAM Agency — Stories Worth Remembering | Fotografi & Filmmaking Kreatif Jakarta",
      description:
        "Fotografi & filmmaking kreatif untuk people, moments dan brands. Wedding, graduation, konten personal & creator, serta produksi konten brand di Jakarta, Indonesia.",
    },
    hero: {
      eyebrow: "Fotografi & Filmmaking Kreatif — Jakarta",
      title1: "Stories Worth",
      title2: "Remembering.",
      sub: "Fotografi & filmmaking kreatif untuk people, moments dan brands.",
      explore: "Lihat Karya Kami",
      startProject: "Mulai Project",
      strip: ["People", "Moments", "Brands"],
    },
    intro: {
      eyebrow: "Siapa Kami",
      segments: [
        { t: "FiveAM adalah tim kreatif yang merangkai cerita visual melalui " },
        { t: "fotografi", a: true },
        { t: ", " },
        { t: "filmmaking", a: true },
        { t: " dan " },
        { t: "creative direction", a: true },
        { t: "." },
      ],
      pillars: [
        {
          word: "People",
          note: "Pengantin, wisudawan, kreator & personal brand.",
        },
        {
          word: "Moments",
          note: "Wedding, graduation dan momen yang layak diabadikan.",
        },
        {
          word: "Brands",
          note: "UMKM & brand yang sedang tumbuh.",
        },
      ],
    },
    servicesSec: {
      eyebrow: "Apa yang Kami Kerjakan",
      titlePlain: "One team.",
      titleAccent: "Four stories to tell.",
      lead: "Dari hari bahagia sampai brand yang sedang tumbuh — semuanya kami tangani dengan pendekatan yang sama: cari ceritanya dulu, baru ambil kameranya.",
    },
    rows: {
      weddings: {
        name: "Weddings",
        tagline: "Mengabadikan cerita di luar seremoni.",
        cta: "Jelajahi Wedding",
      },
      graduation: {
        name: "Graduation",
        tagline: "Rayakan babak yang sudah kamu selesaikan.",
        cta: "Jelajahi Graduation",
      },
      personal: {
        name: "Personal & Creator",
        tagline: "Storytelling visual untuk individu dan kreator.",
        cta: "Jelajahi Personal",
      },
      brands: {
        name: "Brands",
        tagline: "Konten kreatif untuk brand yang sedang tumbuh.",
        cta: "Jelajahi Brand",
      },
    },
    featured: {
      eyebrow: "Cerita Pilihan",
      titlePlain: "Work we're",
      titleAccent: "proud of.",
      viewAll: "Lihat Semua Karya",
    },
    why: {
      eyebrow: "Kenapa FiveAM",
      titlePlain: "Pendekatan sederhana,",
      titleAccent: "serius dalam craft.",
      items: [
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
      ],
    },
    process: {
      eyebrow: "Cara Kerjanya",
      titlePlain: "Dari hello sampai",
      titleAccent: "delivered.",
      steps: [
        {
          step: "01",
          title: "Ceritakan Ceritamu",
          body: "Bagikan ide, acara atau brand kamu lewat WhatsApp atau form inquiry kami.",
        },
        {
          step: "02",
          title: "Bangun Arah Kreatif",
          body: "Kami susun pendekatan visualnya bersama — konsep, mood dan rencana.",
        },
        {
          step: "03",
          title: "Create",
          body: "Hari produksi. Kami dokumentasikan dan arahkan, kamu tetap menikmati momennya.",
        },
        {
          step: "04",
          title: "Deliver",
          body: "Visual final yang sudah diedit, siap dibagikan kepada orang-orang yang penting.",
        },
      ],
    },
    kindWords: {
      eyebrow: "Kind Words",
      titlePlain: "Apa kata client",
      titleAccent: "setelah ceritanya.",
      trustedBy: "Dipercaya oleh",
    },
  },

  workPage: {
    meta: {
      title: "Karya — Cerita Pilihan",
      description:
        "Cerita-cerita pilihan dari FiveAM Agency — wedding, graduation, potret dan campaign brand di Jakarta, Indonesia.",
    },
    eyebrow: "Karya Kami",
    title1: "Selected",
    title2: "Stories.",
    sub: "Setiap project adalah cerita. Filter sesuai kebutuhanmu — atau lihat semuanya.",
  },

  workFilter: {
    ariaLabel: "Filter project berdasarkan kategori",
    filters: ["Semua", "Wedding", "Graduation", "Personal", "Brand"],
    empty: "Belum ada cerita di kategori ini.",
  },

  projectDetail: {
    labels: {
      category: "Kategori",
      year: "Tahun",
      client: "Client",
    },
    clientTba: "[AKAN DISEDIKAN]",
    moreStories: "Cerita lainnya",
    galleryAria: "Galeri project",
    similarTitle: "Punya cerita serupa?",
    similarHighlight: "Mulai Project Serupa.",
    similarPrimary: "Mulai Project Serupa",
    similarWaPrefix: "Hai FiveAM! Saya melihat \"",
    similarWaSuffix: "\" dan saya ingin membuat sesuatu yang serupa.",
  },

  servicesPage: {
    meta: {
      title: "Layanan — Apa yang Kami Buat",
      description:
        "Wedding & graduation (moments), konten personal & creator (people), serta photography, video, reels & creative direction untuk brand. Jakarta, Indonesia.",
    },
    eyebrow: "Layanan",
    title1: "What We",
    title2: "Create.",
    sub: "People. Moments. Brands. Semua dalam satu creative ecosystem.",
    pricingNote:
      "Harga tidak kami pasang di website setiap layanan — setiap project punya kebutuhan berbeda. Chat kami dan kami bantu rekomendasikan package yang paling cocok.",
    groups: [
      {
        id: "moments",
        label: "Moments",
        headline: "Hari-hari yang hanya terjadi sekali.",
        items: [
          {
            name: "Wedding",
            desc: "Photography, films, engagement, prewedding, akad, reception & intimate wedding.",
            href: "/wedding",
            cta: "Cek Ketersediaan",
          },
          {
            name: "Graduation",
            desc: "Session individual, couple, best friend, group & family — plus reels.",
            href: "/graduation",
            cta: "Book Session-mu",
          },
        ],
      },
      {
        id: "people",
        label: "People",
        headline: "Ceritamu, dengan cara yang berbeda.",
        items: [
          {
            name: "Personal / Creator",
            desc: "Personal photoshoot, portrait, personal branding, creator content & reels.",
            href: "/contact",
            cta: "Mulai Session",
          },
        ],
      },
      {
        id: "brands",
        label: "Brands",
        headline: "Content yang menggerakkan brand kamu.",
        items: [
          {
            name: "Commercial & UMKM",
            desc: "Product photography, campaign, lifestyle content, reels, short-form video & creative direction. Tersedia juga monthly content production untuk kebutuhan konten berkelanjutan.",
            href: "/brand",
            cta: "Diskusikan Project",
          },
        ],
      },
    ],
    cta: {
      title: "Bingung mulai dari mana?",
      highlight: "Mari kita bahas bersama.",
      waMessage:
        "Hai FiveAM! Saya belum yakin layanan mana yang cocok — bisa kita diskusikan?",
    },
  },

  weddingPage: {
    meta: {
      title: "Fotografer & Videographer Wedding Jakarta",
      description:
        "Fotografi wedding, film sinematik, prewedding & dokumentasi intimate wedding oleh FiveAM Agency. Setiap wedding punya ritmenya sendiri — kami abadikan apa adanya.",
    },
    hero: {
      eyebrow: "Weddings",
      title1: "Your day,",
      title2: "your rhythm.",
      sub: "Setiap wedding punya ritme, orang dan ceritanya sendiri. Kami mengabadikannya saat terjadi.",
      checkAvailability: "Cek Ketersediaan Tanggal",
      checkWaMessage:
        "Hai FiveAM! Saya ingin mengecek ketersediaan tanggal wedding kami.",
      seeStories: "Lihat Wedding Stories",
    },
    approach: {
      eyebrow: "Pendekatan Kami",
      segments: [
        { t: "Kami tidak mengarahkan hari bahagia kamu seperti pemotretan. " },
        { t: "Kami mendokumentasikan apa yang benar-benar terjadi", a: true },
        { t: " — tawa, air mata, dan momen kecil di sela-selanya." },
      ],
    },
    stories: {
      eyebrow: "Wedding Stories Pilihan",
      titlePlain: "Perayaan",
      titleAccent: "terbaru.",
    },
    included: {
      eyebrow: "Yang Termasuk",
      titlePlain: "Coverage untuk",
      titleAccent: "setiap babak.",
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
      titlePlain: "Pertanyaan,",
      titleAccent: "dijawab.",
      items: [
        {
          q: "Bagaimana cara booking FiveAM untuk tanggal wedding kami?",
          a: "Chat kami via WhatsApp, ceritakan tanggal dan konsep acara. Jika tanggal tersedia, kami kirim rekomendasi package lalu booking dikunci dengan down payment.",
        },
        {
          q: "Apakah tersedia photo dan video sekaligus?",
          a: "Ya. Kamu bisa ambil photography saja, videography saja, atau keduanya dalam satu tim yang sudah terbiasa bekerja bersama.",
        },
        {
          q: "Kami merencanakan wedding kecil / intimate. Apakah bisa?",
          a: "Sangat bisa. Intimate wedding justru punya ruang lebih besar untuk storytelling — kami menyesuaikan package dengan skala acaramu.",
        },
        {
          q: "Berapa jumlah foto dan berapa lama filmnya?",
          a: "Jumlah foto dan durasi film menyesuaikan package. Yang kami janjikan bukan jumlahnya — tapi cerita yang tersampaikan dari hari tersebut.",
        },
      ],
    },
    cta: {
      title: "Segera menikah?",
      highlight: "Mari ceritakan harimu dengan layak.",
      primary: "Cek Ketersediaan Tanggal",
      waMessage:
        "Hai FiveAM! Saya ingin mengecek ketersediaan tanggal wedding kami.",
    },
  },

  graduationPage: {
    meta: {
      title: "Fotografer Graduation Jakarta — Book Session-mu",
      description:
        "Fotografi & reels graduation oleh FiveAM Agency — session individual, couple, best friend, group dan family. Rayakan babak yang sudah kamu selesaikan.",
    },
    hero: {
      eyebrow: "Graduation",
      title1: "You did it.",
      title2: "Now remember it.",
      sub: "Tahun-tahun kerja keras, ditutup dalam satu hari. Rayakan babak yang sudah kamu selesaikan — dan simpan selamanya.",
      bookWaMessage: "Hai FiveAM! Saya ingin booking session graduation.",
      bookBtn: "Book Session Graduation",
    },
    sessions: {
      eyebrow: "Pilih Vibemu",
      title: "Jenis session.",
    },
    sessionTypes: [
      { name: "Individual", desc: "Fokus penuh ke kamu dan pencapaianmu." },
      { name: "Couple", desc: "Rayakan babak baru bersama pasangan." },
      { name: "Best Friend", desc: "Foto wisuda paling seru bareng bestie." },
      { name: "Group", desc: "Satu kelas, satu frame, satu kenangan." },
      { name: "Family", desc: "Orang tua yang ikut bangga — abadikan mereka juga." },
    ],
    addons: {
      titlePlain: "Naikkan levelnya dengan",
      titleAccent: "add-ons.",
    },
    addOnsList: [
      "Graduation Reels",
      "Cinematic Video",
      "Same Day Edit",
      "Additional Hour",
    ],
    cta: {
      title: "Season graduation cepat penuh.",
      highlight: "Book sessionmu dari sekarang.",
      primary: "Book Session Graduation",
      waMessage:
        "Hai FiveAM! Saya ingin bertanya tentang package graduation season ini.",
    },
  },

  brandPage: {
    meta: {
      title: "Produksi Konten Brand & UMKM Jakarta",
      description:
        "Product photography, campaign, lifestyle content, reels, short-form video & creative direction untuk brand dan UMKM yang sedang tumbuh. Konten yang menggerakkan brand-mu maju.",
    },
    hero: {
      eyebrow: "Brands & UMKM",
      title1: "Content made to",
      title2: "move you forward.",
      sub: "Untuk UMKM dan brand yang sedang tumbuh — bukan sekadar foto produk, tapi konten dengan arah kreatif yang jelas.",
      discussWaMessage:
        "Hai FiveAM! Saya ingin diskusi produksi konten untuk brand saya.",
      discussBtn: "Diskusikan Project",
    },
    capabilities: {
      eyebrow: "Kapabilitas",
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
        items: [
          "Creative Direction",
          "Social Media Content",
          "Campaign Concept",
        ],
      },
    ],
    monthly: {
      titlePlain: "Butuh konten",
      titleAccent: "terus-menerus?",
      body: "Monthly Content Production: photoshoot, reels dan content assets setiap bulan — feed brand kamu selalu hidup tanpa kamu mikir tiap bulan.",
      btn: "Tanya Monthly Plan",
      waMessage:
        "Hai FiveAM! Saya tertarik dengan monthly content production.",
    },
    stories: {
      eyebrow: "Brand Work Pilihan",
      titlePlain: "Campaigns, not just",
      titleAccent: "product shots.",
    },
    cta: {
      title: "Punya brand untuk dibangun?",
      highlight: "Mari buat konten yang benar-benar bekerja.",
      primary: "Diskusikan Project",
      waMessage:
        "Hai FiveAM! Saya ingin mendiskusikan project untuk brand saya.",
    },
  },

  aboutPage: {
    meta: {
      title: "Tentang — Siapa Kami",
      description:
        "FiveAM Agency adalah tim kreatif yang merangkai cerita visual melalui fotografi, filmmaking dan creative direction. Berbasis di Jakarta, Indonesia.",
    },
    hero: {
      title1: "Tim di balik",
      title2: "cerita-cerita itu.",
      eyebrow: "Tentang",
    },
    who: {
      eyebrow: "Siapa Kami",
      title: "FiveAM adalah tim kreatif.",
      paras: [
        "Bukan sekadar \u201corang yang bawa kamera\u201d — FiveAM adalah creative partner yang membantu mengubah people, moments dan brands menjadi visual story yang punya value.",
        "Nama kami datang dari jam paling tenang dalam sehari — 5 AM. Jam ketika kota belum bangun, cahaya masih lembut, dan cerita hari itu belum dimulai. Kami suka mulai dari situ: sebelum semua orang lain melihatnya.",
        "Based in Jakarta, Indonesia. Bekerja dengan couples, graduates, creators dan growing brands.",
      ],
    },
    beliefs: {
      eyebrow: "Apa yang Kami Percayai",
      title: "Three things, no fluff.",
      items: [
        {
          title: "Storytelling",
          body: "Setiap gambar harus bercerita. Kalau tidak ada ceritanya, kami cari dulu sebelum menekan shutter.",
        },
        {
          title: "Collaboration",
          body: "Project terbaik lahir dari dua arah — ide kamu plus perspektif kami.",
        },
        {
          title: "Creative Execution",
          body: "Ide bagus tanpa execution bagus itu cuma ide. Kami menuntaskan sampai detail terakhir.",
        },
      ],
    },
    team: {
      eyebrow: "Kenali Tim",
      titlePlain: "The humans of",
      titleAccent: "FiveAM.",
      sub: "Struktur peran di FiveAM: PIC, Creative Lead, Production Team & Post Production.",
    },
    cta: {
      title: "Suka cara kami berpikir?",
      highlight: "Kamu juga akan suka cara kami bekerja.",
      waMessage:
        "Hai FiveAM! Saya baru lihat halaman About kamu dan saya ingin bekerja sama.",
    },
  },

  contactPage: {
    meta: {
      title: "Kontak — Mari Buat Sesuatu",
      description:
        "Mulai project dengan FiveAM Agency. Wedding, session graduation, konten personal & creator, atau produksi brand — chat via WhatsApp atau kirim inquiry.",
    },
    eyebrow: "Kontak",
    title1: "Let's create",
    title2: "something.",
    talkHeading: "Ngobrol langsung dengan FiveAM",
    channels: [
      {
        label: "WhatsApp",
        note: "Respons tercepat — biasanya dalam beberapa jam.",
      },
      {
        label: "Email",
        note: "Untuk proposal & kolaborasi.",
      },
      {
        label: "Instagram",
        note: "Lihat karya terbaru & behind the scenes.",
      },
    ],
    location: "Jakarta, Indonesia",
  },

  inquiry: {
    name: { label: "Nama", placeholder: "Namamu" },
    contact: {
      label: "WhatsApp / Email",
      placeholder: "+62… atau kamu@email.com",
    },
    type: {
      label: "Jenis Project",
      options: ["Wedding", "Graduation", "Personal / Creator", "Brand", "Lainnya"],
    },
    date: { label: "Tanggal Acara / Project" },
    budget: {
      label: "Estimasi Budget",
      options: [
        "Belum yakin",
        "< Rp1 juta",
        "Rp1–3 juta",
        "Rp3–5 juta",
        "Rp5–10 juta",
        "> Rp10 juta",
      ],
    },
    message: {
      label: "Ceritakan Project-mu",
      placeholder: "Ceritakan idemu, momennya, atau brand-nya…",
    },
    submit: "Kirim Inquiry",
    disclaimer:
      "Menekan kirim akan membuka WhatsApp dengan inquiry yang sudah terisi — tanpa perlu akun.",
    waIntro: "Hai FiveAM! Saya ingin memulai sebuah project.",
    waFields: {
      name: "Nama",
      contact: "Kontak",
      type: "Jenis Project",
      date: "Tanggal Acara / Project",
      budget: "Estimasi Budget",
      about: "Tentang project",
    },
  },
};
