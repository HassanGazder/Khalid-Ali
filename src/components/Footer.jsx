import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/data/portfolio";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer data-testid="footer-section" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-gold"
        >
          Next Project
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl font-serif text-4xl font-bold leading-[1.05] tracking-tight text-zinc-950 sm:text-6xl"
        >
          Let's cut something
          <br />
          <span className="italic text-gold">timeless</span> together.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <button
            data-testid="footer-contact-button"
            onClick={() => navigate("/contact")}
            className="group flex items-center gap-3 bg-gold px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-black transition-[background-color] duration-300 hover:bg-gold-bright"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
          <a
            data-testid="footer-email-link"
            href={`mailto:${CONTACT_INFO.email}`}
            className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-700 underline decoration-gold/50 underline-offset-8 transition-colors duration-300 hover:text-amber-700"
          >
            {CONTACT_INFO.email}
          </a>
        </motion.div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] tracking-[0.2em] text-zinc-500">
            © 2026 KHALID ALI — DUBAI, UAE
          </p>
          <div className="flex gap-5">
            {[
              { icon: Instagram, label: "Instagram", id: "social-instagram" },
              { icon: Youtube, label: "YouTube", id: "social-youtube" },
              { icon: Linkedin, label: "LinkedIn", id: "social-linkedin" },
              { icon: Mail, label: "Email", id: "social-email" },
            ].map(({ icon: Icon, label, id }) => (
              <a
                key={id}
                data-testid={id}
                href={
                  id === "social-email"
                    ? `mailto:${CONTACT_INFO.email}`
                    : id === "social-linkedin"
                      ? CONTACT_INFO.linkedin
                      : id === "social-instagram"
                        ? CONTACT_INFO.instagram
                        : CONTACT_INFO.youtube
                }
                target={id === "social-email" ? undefined : "_blank"}
                rel={id === "social-email" ? undefined : "noreferrer"}
                aria-label={label}
                className="text-zinc-500 transition-colors duration-300 hover:text-gold"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
