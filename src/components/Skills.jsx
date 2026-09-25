import { motion } from "framer-motion";
import {
  AudioWaveform,
  BadgeDollarSign,
  Bot,
  CalendarDays,
  Camera,
  Clapperboard,
  Megaphone,
  Mic2,
  Package,
  PenTool,
  Printer,
  Share2,
  Youtube,
} from "lucide-react";
import { SKILLS } from "@/data/portfolio";

const SKILL_ICONS = [
  Clapperboard,
  Mic2,
  AudioWaveform,
  Camera,
  PenTool,
  Share2,
  Youtube,
  Bot,
  Megaphone,
  CalendarDays,
  BadgeDollarSign,
  Package,
  Printer,
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,20,20,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,20,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-black/10 pb-12 lg:grid-cols-12 lg:items-end lg:pb-16">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-gold"
            >
              Creative Toolkit
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl lg:text-5xl"
            >
              Multi-disciplinary skills, <span className="italic text-gold">one visual language.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="flex items-end gap-5 border-l-2 border-gold pl-5 lg:col-span-4"
          >
            <span className="font-serif text-6xl font-bold leading-none text-zinc-950 sm:text-7xl">
              {SKILLS.length}
            </span>
            <div className="pb-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-crimson">Core capabilities</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-600">
                Production, post-production, design and digital strategy working as one connected craft.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {SKILLS.map((skill, index) => {
            const Icon = SKILL_ICONS[index];

            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
                className="group relative min-h-40 overflow-hidden border border-black/10 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.035)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] sm:min-h-44 sm:p-6"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center bg-zinc-950 text-gold transition-[background-color,color,transform] duration-300 group-hover:scale-105 group-hover:bg-gold group-hover:text-black sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-400 sm:text-[10px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-8 max-w-[15rem] font-serif text-lg font-semibold leading-tight text-zinc-900 transition-colors duration-300 group-hover:text-amber-700 sm:text-xl">
                  {skill}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
