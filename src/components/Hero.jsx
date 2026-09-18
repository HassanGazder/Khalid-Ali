import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowUpRight, MapPin } from "lucide-react";

const TITLE_LINES = [
  "CRAFTING CINEMATIC",
  "STORIES IN MOTION",
  "DUBAI & WORLDWIDE",
];

const lineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
};

const lineVariant = {
  hidden: { y: "115%" },
  show: {
    y: "0%",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const useDubaiTime = () => {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dubai",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

export default function Hero({ onPlayReel, onContact }) {
  const ref = useRef(null);
  const time = useDubaiTime();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <section
      ref={ref}
      data-testid="hero-section"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden"
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 bg-white"
      >
        <img
          className="hero-portrait-zoom h-full w-full object-cover object-[58%_35%]"
          src="/Khalid.JPEG"
          alt=""
          aria-hidden="true"
        />
      </motion.div>
      <div className="absolute inset-0 bg-white/30" />
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(255,255,255,0.76)_44%,rgba(255,255,255,0.2)_72%,rgba(255,255,255,0.58))]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 62% 36%, transparent 18%, rgba(255,255,255,0.18) 52%, rgba(255,255,255,0.78) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,#ffffff,transparent)]" />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8"
      >
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            data-testid="hero-eyebrow"
            className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.3em] text-amber-700"
          >
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-crimson" />
            Dubai-Based Video Editor & Graphic Designer
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            data-testid="hero-timecode"
            className="hidden items-center gap-2 border border-black/15 bg-white/60 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-zinc-700 backdrop-blur-sm sm:flex"
          >
            <MapPin className="h-3 w-3 text-gold" />
            DXB {time} GST
          </motion.span>
        </div>

        <motion.h1
          variants={lineContainer}
          initial="hidden"
          animate="show"
          className="font-serif text-4xl font-bold leading-[1.02] tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl"
        >
          {TITLE_LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span variants={lineVariant} className="block">
                {i === 1 ? (
                  <>
                    STORIES <span className="italic text-amber-700">in</span> MOTION
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="flex flex-wrap items-center gap-4">
            <button
              data-testid="hero-play-reel-button"
              onClick={onPlayReel}
              className="group flex items-center gap-3 bg-gold px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-black transition-[background-color] duration-300 hover:bg-gold-bright"
            >
              <Play className="h-4 w-4 fill-black transition-transform duration-300 group-hover:scale-125" />
              Play Showreel
            </button>
            <button
              data-testid="hero-contact-button"
              onClick={onContact}
              className="group flex items-center gap-2 border border-zinc-900/30 bg-white/40 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-950 backdrop-blur-sm transition-[border-color,color,background-color] duration-300 hover:border-crimson hover:bg-white/75 hover:text-crimson"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div data-testid="hero-stats" className="flex gap-10">
            {[
              ["120+", "Projects Cut"],
              ["40+", "Brands"],
              ["7", "Years in Post"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-serif text-3xl font-bold text-amber-700 sm:text-4xl">
                  {value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-700">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
