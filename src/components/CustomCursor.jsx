import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 350, damping: 35, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 350, damping: 35, mass: 0.6 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e) => {
      setHovering(
        Boolean(
          e.target.closest("a, button, [role='button'], input, select, textarea, label")
        )
      );
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color,background-color] duration-300 ${
          hovering
            ? "h-14 w-14 border-crimson/80 bg-crimson/10"
            : "h-7 w-7 border-gold/70 bg-transparent"
        }`}
      />
    </motion.div>
  );
}
