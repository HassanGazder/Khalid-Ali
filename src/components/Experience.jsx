import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-gold"
        >
          Career Chronicle
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Seven Years <span className="italic text-gold">in the Suite</span>
        </motion.h2>

        <div className="mt-16 border-l border-white/10">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={item.period}
              data-testid={`experience-item-${i}`}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative pb-14 pl-8 last:pb-0 sm:pl-12"
            >
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-crimson transition-colors duration-500 group-hover:bg-gold" />
              <p className="font-mono text-xs tracking-[0.3em] text-gold">
                {item.period}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-gold-bright sm:text-3xl">
                {item.role}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                {item.company}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
                {item.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
