import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { AI_VIDEOS } from "@/data/portfolio";
import { VideoModal } from "@/components/VideoModal";

export default function AIVideos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="relative bg-zinc-950 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          AI <span className="italic text-gold">Edits</span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {AI_VIDEOS.map((video, index) => (
            <motion.button
              type="button"
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[9/14] overflow-hidden bg-black text-left ring-0 transition-shadow duration-500 hover:ring-1 hover:ring-gold/70"
            >
              <img
                src={video.thumbnail}
                alt={`${video.title} YouTube thumbnail`}
                loading="lazy"
                className="absolute -inset-1 h-[calc(100%+0.5rem)] w-[calc(100%+0.5rem)] scale-[1.16] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.22]"
              />
              <span className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />
              <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 to-transparent" />
              <span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.25em] text-gold sm:left-5 sm:top-5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="absolute right-4 top-4 hidden items-center gap-1.5 border border-white/20 bg-black/45 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:flex">
                YouTube <ArrowUpRight className="h-3 w-3" />
              </span>
              <span className="absolute inset-0 m-auto flex h-14 w-14 scale-75 items-center justify-center rounded-full border border-gold/70 bg-black/50 opacity-0 backdrop-blur-sm transition-[opacity,transform] duration-500 group-hover:scale-100 group-hover:opacity-100">
                <Play className="h-5 w-5 fill-gold text-gold" />
              </span>
              <span className="absolute inset-x-0 bottom-0 block p-4 sm:p-5">
                <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-crimson">AI Visual Production</span>
                <span className="mt-1.5 block font-serif text-lg font-semibold text-white transition-colors duration-300 group-hover:text-gold sm:text-xl">
                  {video.title}
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <VideoModal
        open={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        title={selectedVideo?.title}
        meta="AI Edits"
        description="AI-assisted cinematic visual production by Khalid Ali."
        youtubeUrl={selectedVideo?.youtubeUrl}
      />
    </section>
  );
}
