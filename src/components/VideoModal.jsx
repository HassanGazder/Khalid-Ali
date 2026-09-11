import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export const VideoModal = ({ open, onClose, title, meta, description, tags }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        data-testid="video-modal"
        className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8"
      >
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        />
        <motion.div
          initial={{ scale: 0.94, y: 28, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.96, y: 12, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl border border-white/10 bg-coal"
        >
          <button
            data-testid="modal-close-button"
            onClick={onClose}
            aria-label="Close"
            className="absolute -top-11 right-0 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-300 hover:text-gold"
          >
            Close <X className="h-4 w-4" />
          </button>
          <video
            className="aspect-video w-full bg-black object-cover"
            src="/showreel-video.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-serif text-2xl font-semibold text-white">
                {title}
              </h3>
              {meta && (
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
                  {meta}
                </span>
              )}
            </div>
            {description && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
                {description}
              </p>
            )}
            {tags && (
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-gold/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
