import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { EDUCATION } from "@/data/portfolio";

export default function Education() {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? EDUCATION : EDUCATION.slice(0, 4);

  return (
    <section id="education" className="border-y border-black/10 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
          Education & Training
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 max-w-2xl font-serif text-3xl font-bold text-zinc-950 sm:text-4xl lg:text-5xl">
          Built through <span className="italic text-gold">craft and study</span>
        </motion.h2>

        <div className="mt-14 grid gap-px bg-black/10 md:grid-cols-2">
          <AnimatePresence initial={false}>
            {visibleItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: (index % 4) * 0.07 }}
                className="group bg-[#faf8f2] p-7 transition-colors duration-300 hover:bg-[#f3eee4] sm:p-9"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-600">0{index + 1}</span>
                  <BookOpen className="h-5 w-5 text-gold transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
                </div>
                <h3 className="mt-8 font-serif text-2xl font-semibold text-zinc-950">{item.title}</h3>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-gold">{item.institution}</p>
                <p className="mt-2 text-sm text-zinc-500">{item.location}</p>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <button type="button" onClick={() => setExpanded((value) => !value)} className="group mt-10 inline-flex items-center gap-3 border border-gold/50 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-black transition-colors duration-300 hover:bg-gold hover:text-black">
          {expanded ? "Show less" : `View ${EDUCATION.length - 4} more courses`}
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />}
        </button>
      </div>
    </section>
  );
}
