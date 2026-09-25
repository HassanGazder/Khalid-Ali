import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative isolate overflow-hidden bg-black pb-14 pt-20 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <iframe
          className="section-background-video"
          src="https://www.youtube.com/embed/9txnNhz2qzc?autoplay=1&mute=1&loop=1&playlist=9txnNhz2qzc&controls=0&playsinline=1&rel=0&disablekb=1&fs=0"
          title="Khalid Ali experience showreel background"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex="-1"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/45" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,10,11,0.86),rgba(10,10,11,0.5)_42%,rgba(10,10,11,0.08)_70%,rgba(10,10,11,0.42))]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          Experience in <span className="italic text-gold">Dubai</span>
        </motion.h2>

        <div className="mt-16 border-l border-white/25">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={`${item.period}-${item.company}`}
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
              <h3 className="mt-3 font-serif text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-gold sm:text-3xl">
                {item.role}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-300">
                {item.company}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-200">
                {item.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
