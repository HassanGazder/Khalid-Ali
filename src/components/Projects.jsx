import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/portfolio";
import { VideoModal } from "@/components/VideoModal";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const visible =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative bg-coal py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-gold"
            >
              Selected Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              The Reel <span className="italic text-gold">2023 — 2026</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setFilter(cat)}
                className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-[background-color,color,border-color] duration-300 ${
                  filter === cat
                    ? "border-gold bg-gold text-black"
                    : "border-white/15 text-zinc-400 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.button
                layout
                key={project.id}
                data-testid={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(project)}
                className={`group relative col-span-1 block min-h-[280px] overflow-hidden border border-white/10 text-left transition-colors duration-500 hover:border-gold/40 ${project.aspect}`}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/20" />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(10,10,11,0.92),transparent)]" />

                <span className="absolute left-5 top-5 font-mono text-xs tracking-[0.3em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="absolute right-5 top-5 border border-white/20 bg-black/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-zinc-300 backdrop-blur-sm">
                  {project.year}
                </span>

                <span className="absolute inset-0 m-auto flex h-16 w-16 scale-75 items-center justify-center rounded-full border border-gold/70 bg-black/50 opacity-0 backdrop-blur-sm transition-[opacity,transform] duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <Play className="h-5 w-5 fill-gold text-gold" />
                </span>

                <span className="absolute inset-x-0 bottom-0 block p-6">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-crimson">
                    {project.category} — {project.client}
                  </span>
                  <span className="mt-2 block font-serif text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gold-bright sm:text-2xl">
                    {project.title}
                  </span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <VideoModal
        open={Boolean(active)}
        onClose={() => setActive(null)}
        title={active?.title}
        meta={active ? `${active.client} · ${active.year}` : ""}
        description={active?.description}
        tags={active?.tags}
      />
    </section>
  );
}
