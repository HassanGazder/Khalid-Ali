import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { scrollToId } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "Projects", hash: "#projects", testId: "nav-link-projects" },
  { label: "Experience", hash: "#experience", testId: "nav-link-experience" },
  { label: "Skills", hash: "#skills", testId: "nav-link-skills" },
  { label: "Services", hash: "#services", testId: "nav-link-services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToHash = (hash) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(hash), 250);
    } else {
      scrollToId(hash);
    }
  };

  const goHome = () => {
    setOpen(false);
    if (location.pathname !== "/") navigate("/");
    else if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
        scrolled
          ? "border-black/10 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-black/10 bg-white/95 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          data-testid="nav-logo"
          onClick={goHome}
          className="group flex items-baseline gap-2 text-left"
        >
          <span className="font-serif text-xl font-bold tracking-wide text-zinc-950 transition-colors duration-300 group-hover:text-gold">
            KHALID ALI
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-gold">
            // DXB
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.hash}
              data-testid={link.testId}
              onClick={() => goToHash(link.hash)}
              className="group relative font-mono text-xs uppercase tracking-[0.2em] text-zinc-600 transition-colors duration-300 hover:text-zinc-950"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-[width] duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            data-testid="nav-link-contact"
            onClick={() => {
              setOpen(false);
              navigate("/contact");
            }}
            className="group flex items-center gap-1.5 border border-gold/60 px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-gold transition-[background-color,color] duration-300 hover:bg-gold hover:text-black"
          >
            Contact Us
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="text-zinc-950 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-black/10 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.hash}
                  data-testid={`mobile-${link.testId}`}
                  onClick={() => goToHash(link.hash)}
                  className="py-3 text-left font-serif text-2xl text-zinc-800 transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </button>
              ))}
              <button
                data-testid="mobile-nav-link-contact"
                onClick={() => {
                  setOpen(false);
                  navigate("/contact");
                }}
                className="py-3 text-left font-serif text-2xl text-gold"
              >
                Contact Us
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
