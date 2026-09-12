export const scrollToId = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const MARQUEE_ITEMS = [
  "KHALID ALI",
  "DUBAI BASED",
  "VIDEO EDITING",
  "COLOR GRADING",
  "MOTION GRAPHICS",
  "COMMERCIALS",
  "MUSIC VIDEOS",
  "BRAND FILMS",
];

export const CHAPTERS = [
  {
    number: "01",
    heading: "Pacing & Rhythm",
    body: "Every cut is a heartbeat. Whether editing a 15-second high-octane commercial or a 10-minute brand documentary, pacing governs emotion — and emotion is what people remember.",
  },
  {
    number: "02",
    heading: "Visual Precision",
    body: "Color grading is not just saturation — it is atmosphere. Deep blacks, metallic highlights, and harmonious tones tailored to Dubai's luxury visual standard.",
  },
  {
    number: "03",
    heading: "Sound Synergy",
    body: "Video is only half the story. Precise sound design, bass drops, and voice rhythm transform raw clips into immersive experiences that hold attention to the last frame.",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Brand Films",
  "Music Videos",
  "Social Edits",
  "Visual Art",
];

export const PROJECTS = [
  {
    id: "proj-1",
    title: "Emirates Luxury Horizon",
    category: "Brand Films",
    client: "Emirates / Dubai Tourism",
    year: "2025",
    thumbnail:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    videoSrc: "/reel1.mp4",
    description:
      "A high-end cinematic commercial showcasing Dubai's architectural marvels with dynamic match cuts and custom sound design.",
    tags: ["Color Grading", "Visual Effects", "Sound Design"],
    aspect: "md:col-span-8 md:row-span-2",
  },
  {
    id: "proj-2",
    title: "Neon Velocity — Red Bull DXB",
    category: "Social Edits",
    client: "Red Bull Middle East",
    year: "2025",
    thumbnail:
      "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    videoSrc: "/reel2.mp4",
    description:
      "High-octane fast cuts and sound design for an extreme sports showcase across social platforms.",
    tags: ["Fast Pacing", "Glitch FX", "Rhythm Sync"],
    aspect: "md:col-span-4",
  },
  {
    id: "proj-3",
    title: "Cyber Symphony",
    category: "Music Videos",
    client: "Sony Music ME",
    year: "2024",
    thumbnail:
      "https://images.unsplash.com/photo-1612548403247-aa2873e9422d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    videoSrc: "/reels3.mp4",
    description:
      "Futuristic music video with 3D camera tracking, glowing neon typography, and audio-reactive pacing.",
    tags: ["Motion Graphics", "3D Tracking", "Music Sync"],
    aspect: "md:col-span-4 md:row-span-2",
  },
  {
    id: "proj-4",
    title: "The Art of Precision",
    category: "Visual Art",
    client: "Khalid Ali Original",
    year: "2024",
    thumbnail:
      "https://images.unsplash.com/photo-1490810194309-344b3661ba39?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    description:
      "An editorial visual study exploring macro textures, film grain, and high-contrast color science.",
    tags: ["35mm Film Grain", "Macro Cut", "Editorial"],
    aspect: "md:col-span-4",
  },
  {
    id: "proj-5",
    title: "Emaar Real Estate Showcase",
    category: "Brand Films",
    client: "Emaar Properties",
    year: "2024",
    thumbnail:
      "https://images.unsplash.com/photo-1543579596-2c11997c7706?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    description:
      "Luxury penthouse promo with ultra-smooth drone transitions and warm golden-hour grading.",
    tags: ["Drone Stitching", "Warm Grade", "Luxury"],
    aspect: "md:col-span-4",
  },
  {
    id: "proj-6",
    title: "Midnight Drive — Porsche DXB",
    category: "Social Edits",
    client: "Porsche Middle East",
    year: "2023",
    thumbnail:
      "https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    description:
      "Atmospheric nocturnal automotive film with sound design focused on engine revs and city ambience.",
    tags: ["Automotive", "Sound Design", "Dark Grade"],
    aspect: "md:col-span-8",
  },
];

export const EXPERIENCE = [
  {
    period: "2023 — PRESENT",
    role: "Lead Video Editor & Motion Designer",
    company: "Independent Studio, Dubai UAE",
    details:
      "Directing post-production for luxury brands, government initiatives, and international music labels in Dubai and across the GCC region.",
  },
  {
    period: "2021 — 2023",
    role: "Senior Post-Production Specialist",
    company: "Apex Media House, Dubai",
    details:
      "Edited broadcast commercials, TV spots, and high-impact social media campaigns for global brands like Red Bull and Nike Middle East.",
  },
  {
    period: "2019 — 2021",
    role: "Graphic Designer & VFX Artist",
    company: "Creative Wave Agency, Dubai",
    details:
      "Designed visual identities, kinetic typography packages, and title sequences for commercial productions.",
  },
];

export const SERVICES = [
  {
    number: "01",
    title: "Cinematic Video Editing",
    description:
      "Full-service post-production from raw assembly to final master. Specialized in commercial pacing, narrative flow, and music videos.",
  },
  {
    number: "02",
    title: "Motion Graphics & VFX",
    description:
      "Custom kinetic typography, 2D/3D title cards, HUD elements, logo animations, and seamless green screen compositing.",
  },
  {
    number: "03",
    title: "Color Grading (DaVinci Resolve)",
    description:
      "Professional look creation, skin tone enhancement, high dynamic range balancing, and film emulation with 16mm / 35mm grain.",
  },
  {
    number: "04",
    title: "Sound Design & Audio Mix",
    description:
      "SFX layering, foley integration, vocal polish, bass enhancement, and audio-reactive pacing for maximum impact.",
  },
  {
    number: "05",
    title: "Graphic & Title Design",
    description:
      "Poster art, digital brand assets, social media campaign packages, and promotional artwork for film releases.",
  },
];

export const CONTACT_INFO = {
  location: "Dubai Design District (d3), Dubai, UAE",
  email: "khalid.ali.edits@gmail.com",
  whatsapp: "+971 50 123 4567",
  hours: "Sun — Thu (09:00 — 18:00 GST)",
};

export const PROJECT_TYPES = [
  "Commercial / Brand Film",
  "Music Video",
  "Social Media Edit Package",
  "Color Grading Only",
  "Full Post-Production Package",
];

export const BUDGETS = [
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];
