import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/portfolio";
import { VideoModal } from "@/components/VideoModal";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const filteredProjects = filter === "All" ? PROJECTS : PROJECTS.filter((project) => project.category === filter);

  const changeFilter = (category) => {
    setFilter(category);
  };

  const cardLayout = (project) => {
    const index = PROJECTS.indexOf(project);
    if (index === PROJECTS.length - 1) return "md:col-span-12 md:h-[360px]";
    if (index >= 3 && index <= 5) return "md:col-span-4 md:h-[560px]";
    return "md:col-span-4 md:h-[360px]";
  };

  return (
    <section id="projects" data-testid="projects-section" className="relative bg-white py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="font-mono text-xs uppercase tracking-[0.3em] text-gold">Selected Works</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 font-serif text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">The Reel <span className="italic text-amber-700">2026</span></motion.h2>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((category) => (
              <button key={category} type="button" onClick={() => changeFilter(category)} className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-[background-color,color,border-color] duration-300 ${filter === category ? "border-gold bg-gold text-black" : "border-black/15 text-black hover:border-gold/70 hover:bg-gold hover:text-black"}`}>{category}</button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project, index) => (
              <motion.button
                layout
                type="button"
                key={project.id}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative col-span-1 block h-[420px] overflow-hidden border border-black/10 text-left transition-colors duration-500 hover:border-gold/60 ${cardLayout(project)}`}
              >
                <img src={project.thumbnail} alt={`${project.title} YouTube thumbnail`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <span className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/20" />
                <span className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(10,10,11,0.94),transparent)]" />
                <span className="absolute left-5 top-5 font-mono text-xs tracking-[0.3em] text-gold">{String(PROJECTS.indexOf(project) + 1).padStart(2, "0")}</span>
                <span className="absolute right-5 top-5 flex items-center gap-2 border border-white/20 bg-black/45 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-200 backdrop-blur-sm">YouTube <ArrowUpRight className="h-3 w-3" /></span>
                <span className="absolute inset-0 m-auto flex h-16 w-16 scale-75 items-center justify-center rounded-full border border-gold/70 bg-black/50 opacity-0 backdrop-blur-sm transition-[opacity,transform] duration-500 group-hover:scale-100 group-hover:opacity-100"><Play className="h-5 w-5 fill-gold text-gold" /></span>
                <span className="absolute inset-x-0 bottom-0 block p-6">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-crimson">{project.category} - {project.client}</span>
                  <span className="mt-2 block font-serif text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gold-bright sm:text-2xl">{project.title}</span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
      <VideoModal
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        meta={selectedProject?.client}
        description={selectedProject ? `${selectedProject.category} project by Khalid Ali.` : ""}
        youtubeUrl={selectedProject?.youtubeUrl}
      />
    </section>
  );
}
