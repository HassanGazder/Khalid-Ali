const fs = require("fs");
const path = "src/data/portfolio.js";
let source = fs.readFileSync(path, "utf8");

const profileData = `export const EXPERIENCE = [
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
  {
    period: "2022 - 2024",
    role: "Video & Audio Editor",
    company: "High Street Cars | New Delhi, India",
    details: "Shot, edited, and published regular video content for the High Street Cars YouTube and Instagram channels.",
  },
  {
    period: "2022 - 2024",
    role: "Social Media Handler / Designer",
    company: "High Street Cars | New Delhi, India",
    details: "Managed daily social media publishing and designed content to strengthen engagement and brand visibility.",
  },
  {
    period: "2020 - 2022",
    role: "Graphic Designer & Photographer",
    company: "Ciliary Healthcare | Himachal Pradesh, India",
    details: "Designed pharmaceutical packaging and product visuals, contributing to a 25% improvement in product visibility.",
  },
  {
    period: "2019 - 2020",
    role: "Graphic Designer & Logo Maker",
    company: "Chardikala Printing Press | Himachal Pradesh, India",
    details: "Developed logos, print graphics, and compelling brand materials that helped improve client engagement.",
  },
];

export const EDUCATION = [
  { title: "BA in Digital Arts", institution: "Himalayan University", location: "Himachal Pradesh, India" },
  { title: "Diploma in Videography & Editing", institution: "Professional Training", location: "New Delhi, India" },
  { title: "Graphic Designing", institution: "Professional Training", location: "Delhi, India" },
  { title: "Web Designing & Development", institution: "Professional Training", location: "Delhi, India" },
  { title: "SEO (Search Engine Optimization)", institution: "Professional Training", location: "Delhi, India" },
  { title: "Ethical Hacking", institution: "Professional Training", location: "Chandigarh, India" },
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

export const SERVICES`;

source = source.replace(/export const EXPERIENCE = \[[\s\S]*?\n\];\r?\n\r?\nexport const SERVICES/, profileData);
source = source.replace(/export const CONTACT_INFO = \{[\s\S]*?\n\};/, `export const CONTACT_INFO = {
  location: "Dubai, UAE",
  email: "khalikali71@gmail.com",
  whatsapp: "+971 58 962 3558",
  linkedin: "https://www.linkedin.com/in/khalik006/",
};`);

fs.writeFileSync(path, source);
