import { motion } from "framer-motion";
import {
  AudioWaveform,
  BarChart3,
  Bot,
  Box,
  Camera,
  Clapperboard,
  Megaphone,
  Mic2,
  PenTool,
  Printer,
  Share2,
  ShoppingBag,
  Youtube,
} from "lucide-react";
import { SKILLS } from "@/data/portfolio";

const SKILL_DETAILS = [
  { icon: Clapperboard, description: "Cinematic edits, 3D animations and visual storytelling.", image: "https://i.ytimg.com/vi/ujH5X5p64so/maxresdefault.jpg", color: "#ff2d75" },
  { icon: Mic2, description: "Multi-camera podcasts with professional editing.", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=85", color: "#a855f7" },
  { icon: AudioWaveform, description: "Clean, crisp and professional audio for any platform.", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=900&q=85", color: "#1296f3" },
  { icon: Camera, description: "High-quality photography for brands and campaigns.", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85", color: "#20d99a" },
  { icon: PenTool, description: "Creative designs for digital and print media.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=85", color: "#ff9f1c" },
  { icon: Share2, description: "Scroll-stopping visuals for your brand.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=85", color: "#ff2d75" },
  { icon: Youtube, description: "Complete YouTube content from concept to final edit.", image: "https://i.ytimg.com/vi/br2zDQiwgSI/maxresdefault.jpg", color: "#ff3148" },
  { icon: Bot, description: "Using AI to create faster and better content.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85", color: "#13cbea" },
  { icon: BarChart3, description: "Content strategies to grow your brand online.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85", color: "#f2b51d" },
  { icon: Megaphone, description: "Complete event coverage and promotional content.", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=85", color: "#b72dff" },
  { icon: ShoppingBag, description: "High-converting videos for products and services.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85", color: "#1a9cff" },
  { icon: Box, description: "Unique brand identity and packaging design.", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85", color: "#14d99b" },
  { icon: Printer, description: "Premium printing solutions for business needs.", image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=900&q=85", color: "#15c8e8" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#07090c] pb-10 pt-8 text-white sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-[11px] uppercase tracking-[0.32em] text-rose-400"
            >
              Creative Toolkit <span className="text-rose-500">—</span>
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-[1.02] sm:text-4xl lg:text-5xl"
            >
              Multi-disciplinary skills,
              <span className="block bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 bg-clip-text italic text-transparent">
                one visual language.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="max-w-sm text-sm leading-relaxed text-zinc-300 lg:col-span-4"
          >
            A complete creative toolkit to turn ideas into high-impact content across digital, branding and real estate.
          </motion.p>

          <div className="relative hidden h-28 lg:col-span-2 lg:block">
            <span className="absolute -bottom-6 left-0 font-serif text-[10rem] leading-none text-white/[0.07]">S</span>
            <p className="absolute right-0 top-2 max-w-20 font-mono text-[9px] uppercase leading-relaxed tracking-[0.25em] text-zinc-500">
              Skills that create impact <span className="text-rose-500">•</span>
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {SKILLS.map((skill, index) => {
            const detail = SKILL_DETAILS[index];
            const Icon = detail.icon;

            return (
              <motion.article
                key={skill}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.055 }}
                style={{ borderColor: `${detail.color}99`, boxShadow: `inset 0 0 30px ${detail.color}12` }}
                className="group relative min-h-[190px] overflow-hidden rounded-[10px] border bg-black sm:min-h-[170px]"
              >
                <img
                  src={detail.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-right opacity-75 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,9,0.98)_0%,rgba(5,6,9,0.94)_42%,rgba(5,6,9,0.36)_72%,rgba(5,6,9,0.12)_100%)]" />

                <div className="relative flex h-full max-w-[72%] flex-col p-4 sm:max-w-[68%] sm:p-5">
                  <span style={{ color: detail.color }} className="font-mono text-[10px] font-semibold tracking-[0.12em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1.5 font-serif text-base font-semibold leading-tight text-white sm:text-lg">
                    {skill}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-snug text-zinc-300 sm:text-xs">
                    {detail.description}
                  </p>
                </div>

                <span
                  style={{ backgroundColor: detail.color, boxShadow: `0 0 22px ${detail.color}70` }}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-[9px] text-white"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
