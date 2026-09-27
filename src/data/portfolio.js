import { Instagram } from "lucide-react";

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
  "All", "Real Estate", "Commercial Shoots", "Portfolio",
];

export const PROJECTS = [
  { id: "youtube-1", title: "Sobha Realty Sales Director", category: "Real Estate", client: "Sobha Realty", year: "2026", thumbnail: "https://i.ytimg.com/vi/br2zDQiwgSI/hqdefault.jpg", youtubeUrl: "https://youtu.be/br2zDQiwgSI", aspect: "md:col-span-8 md:row-span-2" },
  { id: "youtube-2", title: "Dubai Real Estate Shoot", category: "Real Estate", client: "Sobha Realty", year: "2026", thumbnail: "https://i.ytimg.com/vi/ZwwJvhWuayU/hqdefault.jpg", youtubeUrl: "https://youtu.be/ZwwJvhWuayU", aspect: "md:col-span-4" },
  { id: "youtube-3", title: "Sobha Realty Sales Manager", category: "Real Estate", client: "Dubai Production", year: "2026", thumbnail: "https://i.ytimg.com/vi/jySDnnyJj28/hqdefault.jpg", youtubeUrl: "https://youtu.be/jySDnnyJj28", aspect: "md:col-span-4" },
  { id: "youtube-4", title: "Dubai Freelance Videographer", category: "Commercial Shoots", client: "Real Estate & Commercial", year: "2026", thumbnail: "https://i.ytimg.com/vi/9dqJEi9KBHc/hqdefault.jpg", youtubeUrl: "https://youtube.com/shorts/9dqJEi9KBHc?feature=share", aspect: "md:col-span-4 md:row-span-2" },
  { id: "youtube-5", title: "Leos Development Premium Shoot", category: "Commercial Shoots", client: "Leos Development", year: "2026", thumbnail: "https://i.ytimg.com/vi/X6rM3-VnFjc/hqdefault.jpg", youtubeUrl: "https://youtube.com/shorts/X6rM3-VnFjc?feature=share", aspect: "md:col-span-4" },
  { id: "youtube-6", title: "Real Estate Video Shoot", category: "Real Estate", client: "Dubai Freelance Production", year: "2026", thumbnail: "https://i.ytimg.com/vi/JMRpfvehtoI/hqdefault.jpg", youtubeUrl: "https://youtube.com/shorts/JMRpfvehtoI?feature=share", aspect: "md:col-span-6" },
  { id: "youtube-7", title: "Videographer & Video Editor Portfolio", category: "Portfolio", client: "Khalik DXB", year: "2026", thumbnail: "https://i.ytimg.com/vi/KE8crNwAWDE/hqdefault.jpg", youtubeUrl: "https://youtube.com/shorts/KE8crNwAWDE?feature=share", aspect: "md:col-span-6" },
];

const AI_VIDEO_DETAILS = [
  ["rbWFFVLmHbU", "AI in Motion"],
  ["L4Rc0lI6YFU", "Digital Dreamscape"],
  ["V_OKMzKWu3w", "Cinematic Direction"],
  ["STx8W2c_8Xk", "Parallel Worlds"],
  ["BH5rkMhdbms", "Imagined in Motion"],
  ["g-KGWBngyko", "Vision Reimagined"],
  ["kx3qB_ZKL1s", "Synthetic Motion"],
  ["YGzHkFlaYGQ", "Beyond Reality"],
  ["JSgMKlglvXo", "Visual Metamorphosis"],
  ["givm_03ycDs", "Camera Movement"],
  ["B3Ti6zpBXis", "Production Vision"],
  ["dpVeStQEaKQ", "Perfect Timing"],
  ["lx-C-eRZZp0", "Future Frames"],
  ["ZESzxsKZa84", "Infinite Possibilities"],
  ["YdUt5oV6FGc", "The New Perspective"],
  ["g-C4xjt0-s4", "Cinematic Intelligence"],
  ["k44XyIhsNEk", "Generated Realities"],
  ["ujH5X5p64so", "Tomorrow's Dubai"],
  ["9txnNhz2qzc", "Crafted by AI"],
  ["dXNZi6A2lx0", "A New Dimension"],
];

export const AI_VIDEOS = AI_VIDEO_DETAILS.map(([videoId, title], index) => ({
  id: `ai-video-${index + 1}`,
  title,
  client: "AI Visual Production",
  thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
  youtubeUrl: `https://youtu.be/${videoId}`,
}));

export const EXPERIENCE = [
  {
    period: "2026",
    role: "Video Editor / Podcast Producer / Photographer",
    company: "Leos Development | Dubai, UAE",
    details: "Produced cinematic videography, podcast shoots, outdoor productions, graphic design assets, and professional photoshoots.",
  },
  {
    period: "2025 - 2026",
    role: "Video Editor / Podcast Producer / Photographer",
    company: "Prime Capital Real Estate | Dubai, UAE",
    details: "Shot and edited video campaigns that increased brand reach by 35%, while managing end-to-end podcast production from shoot to final edit.",
  },
  {
    period: "2025",
    role: "Event Branding & Digital Marketing",
    company: "HR Tech | Dubai, UAE",
    details: "Created event branding, social media designs, and digital marketing assets using Photoshop, Illustrator, CorelDRAW, and AI tools.",
  },
];

export const SKILLS = [
  "3D Video Editing",
  "Podcast Production & Editing",
  "Audio Editing",
  "Photography",
  "Graphic Design",
  "Social Media Design",
  "YouTube Content Creation",
  "AI Tools for Smart Work",
  "Digital Marketing",
  "Event Branding & Marketing",
  "Sales & Product Promotion",
  "Logo & Packaging Design",
  "Flex & Commercial Printing",
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
  location: "Dubai, UAE",
  email: "khalikali71@gmail.com",
  whatsapp: "+971 58 962 3558",
  linkedin: "https://www.linkedin.com/in/khalik006/",
  instagram: "https://www.instagram.com/khalik.dxb?stkn=am05M2p3YXVseWll",
  youtube: "https://www.youtube.com/@khalikdxb",
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
