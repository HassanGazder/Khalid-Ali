import { motion } from "framer-motion";
import { CHAPTERS } from "@/data/portfolio";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      data-testid="manifesto-section"
      className="relative py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-gold"
            >
              The Manifesto
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Chapters of
              <br />
              <span className="italic text-gold">the Craft</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-md text-base text-zinc-400 leading-relaxed"
            >
              How I approach every timeline, frame, and color grade — three
              principles that never leave the edit suite.
            </motion.p>
          </div>
        </div>

        <div className="lg:col-span-7">
          {CHAPTERS.map((chapter, i) => (
            <motion.article
              key={chapter.number}
              data-testid={`manifesto-chapter-${chapter.number}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-white/10 py-12 transition-colors duration-500 last:border-b hover:bg-white/[0.02]"
            >
              <div className="flex flex-col gap-4 px-2 sm:flex-row sm:gap-10 sm:px-6">
                <span className="font-mono text-sm tracking-[0.3em] text-crimson transition-colors duration-500 group-hover:text-gold">
                  {chapter.number}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-white transition-colors duration-500 group-hover:text-gold-bright sm:text-3xl">
                    {chapter.heading}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-400">
                    {chapter.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
