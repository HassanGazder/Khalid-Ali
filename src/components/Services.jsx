import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/portfolio";

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative bg-coal py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-gold"
            >
              Services & Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              What I <span className="italic text-gold">Deliver</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-sm text-sm leading-relaxed text-zinc-500"
          >
            From first assembly to final master — a complete post-production
            pipeline under one roof in Dubai.
          </motion.p>
        </div>

        <div className="mt-14">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              data-testid={`service-item-${service.number}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group grid gap-4 border-t border-white/10 px-2 py-10 transition-colors duration-500 last:border-b hover:bg-white/[0.03] sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-6"
            >
              <span className="font-mono text-sm tracking-[0.3em] text-crimson transition-colors duration-500 group-hover:text-gold sm:col-span-1">
                {service.number}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-white transition-colors duration-500 group-hover:text-gold-bright sm:col-span-5 sm:text-3xl">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:col-span-5">
                {service.description}
              </p>
              <span className="hidden justify-end sm:col-span-1 sm:flex">
                <ArrowUpRight className="h-6 w-6 text-zinc-600 transition-[color,transform] duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
