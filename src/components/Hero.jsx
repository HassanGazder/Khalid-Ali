import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

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

export default function Hero({ onContact }) {
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
      className="relative flex min-h-[110vh] flex-col justify-end overflow-hidden"
    >
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 bg-black"
      >
        <img
          className="hero-portrait-zoom h-full w-full object-cover object-[58%_35%]"
          src="/Khalid.JPEG"
          alt=""
          aria-hidden="true"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(10,10,11,0.86),rgba(10,10,11,0.5)_42%,rgba(10,10,11,0.08)_70%,rgba(10,10,11,0.42))]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 62% 34%, transparent 24%, rgba(10,10,11,0.2) 60%, rgba(10,10,11,0.72) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(10,10,11,0.9),transparent)]" />

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
            className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.3em] text-gold"
          >
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-crimson" />
            Dubai-Based Video Editor & Graphic Designer
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            data-testid="hero-timecode"
            className="hidden items-center gap-2 border border-white/20 bg-black/25 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-zinc-300 backdrop-blur-sm sm:flex"
          >
            <MapPin className="h-3 w-3 text-gold" />
            DXB {time} GST
          </motion.span>
        </div>

        <motion.h1
          variants={lineContainer}
          initial="hidden"
          animate="show"
          className="max-w-xl font-serif text-3xl font-bold leading-[1.04] tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {TITLE_LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span variants={lineVariant} className="block">
                {i === 1 ? (
                  <>
                    STORIES <span className="italic text-gold">in</span> MOTION
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
            <a
              data-testid="hero-play-reel-button"
              href="/khalid.pdf"
              download
              className="group flex items-center gap-3 bg-gold px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-black transition-[background-color] duration-300 hover:bg-gold-bright"
            >
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download CV
            </a>
            <button
              data-testid="hero-contact-button"
              onClick={onContact}
              className="group flex items-center gap-2 border border-white/70 bg-white px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-black transition-[border-color,background-color] duration-300 hover:border-gold hover:bg-gold hover:text-black"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div data-testid="hero-stats" className="flex gap-10">
            {[
              ["120+", "Video Projects"],
              ["40+", "Brands"],
              ["7", "Years in Post"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="font-serif text-3xl font-bold text-gold sm:text-4xl">
                  {value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-300">
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
