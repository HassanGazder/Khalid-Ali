import { motion } from "framer-motion";
import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 font-serif text-[13rem] leading-none text-white/[0.025]">S</div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          Creative Toolkit
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 max-w-3xl font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Multi-disciplinary skills, <span className="italic text-gold">one visual language.</span>
        </motion.h2>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
              className="group flex min-h-20 items-center gap-4 border border-white/10 bg-white/[0.02] px-5 py-4 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-gold/[0.05]"
            >
              <span className="font-mono text-[10px] text-crimson">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
