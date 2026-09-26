import { motion } from "framer-motion";
import { ArrowUpRight, Check, Clapperboard, Scissors, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PACKAGES = [
  {
    number: "01",
    name: "Essential Edit",
    label: "For ready-to-edit footage",
    icon: Scissors,
    description:
      "Professional post-production for brands, realtors and creators who already have the footage and need it turned into premium content.",
    features: [
      "Professional video editing",
      "AI-assisted editing & enhancement",
      "Color correction & cinematic grading",
      "Audio cleanup & sound design",
      "Motion graphics & branded titles",
      "Reels, TikTok & YouTube formats",
      "Captions & social-ready exports",
      "Two revision rounds",
    ],
  },
  {
    number: "02",
    name: "Content Partner",
    label: "Most popular",
    icon: Users,
    featured: true,
    description:
      "A complete monthly content solution for brands that need consistent, high-quality content without managing multiple creatives.",
    features: [
      "Monthly video content production",
      "Reels, TikTok & YouTube content",
      "AI-powered content creation",
      "Podcast shooting & editing",
      "Photography & campaign visuals",
      "Social media design support",
      "Motion graphics & promotional videos",
      "Content planning & creative direction",
      "Priority production scheduling",
      "Ongoing creative consultation",
    ],
  },
  {
    number: "03",
    name: "Cinematic Brand",
    label: "For brands & campaigns",
    icon: Clapperboard,
    description:
      "Complete creative production for brands, real estate projects and campaigns that need premium visual storytelling.",
    features: [
      "Creative direction & concept development",
      "Shot planning & production guidance",
      "Cinematic videography in Dubai",
      "Advanced video editing & color grading",
      "AI video generation & visual enhancement",
      "Motion graphics & title design",
      "Professional sound design & music",
      "Social media cutdowns & master exports",
      "Three revision rounds",
    ],
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative overflow-hidden bg-[#07090c] pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center font-mono text-xs uppercase tracking-[0.3em] text-gold"
        >
          Creative Packages
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Choose your level of <span className="italic text-gold">creative support.</span>
        </motion.h2>

        <div className="mt-20 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {PACKAGES.map((servicePackage, index) => {
            const Icon = servicePackage.icon;

            return (
              <motion.article
                key={servicePackage.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  borderRadius: "36px",
                  backgroundColor: servicePackage.featured ? "#0d0d0e" : "#fbf9f4",
                  color: servicePackage.featured ? "#ffffff" : "#18181b",
                }}
                className={`relative flex min-h-full flex-col overflow-hidden border px-7 pb-7 pt-7 sm:px-9 sm:pb-8 sm:pt-8 ${
                  servicePackage.featured
                    ? "border-gold/70 shadow-[0_20px_55px_rgba(24,18,5,0.3)] lg:-mb-3 lg:-mt-5"
                    : "border-black/10 shadow-[0_12px_35px_rgba(50,42,20,0.06)]"
                }`}
              >
                <div className="flex min-h-10 items-start justify-between gap-5">
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <span
                      style={{ color: servicePackage.featured ? "#d4d4d8" : "#3f3f46" }}
                      className="font-mono text-sm tracking-[0.15em]"
                    >
                      {servicePackage.number}
                    </span>
                    <span
                      style={{ backgroundColor: servicePackage.featured ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.15)" }}
                      className="h-px max-w-16 flex-1"
                    />
                  </div>
                  <span
                    style={{
                      backgroundColor: servicePackage.featured ? "#d4af37" : "transparent",
                      color: servicePackage.featured ? "#000000" : "#18181b",
                    }}
                    className={`flex max-w-[13rem] items-center gap-2 rounded-full border px-4 py-2 font-mono text-[9px] font-medium uppercase leading-tight tracking-[0.2em] ${
                      servicePackage.featured
                        ? "border-gold bg-gold text-black"
                        : "border-black/20 text-zinc-900"
                    }`}
                  >
                    {servicePackage.featured && <Star className="h-3 w-3 fill-black" />}
                    {servicePackage.label}
                  </span>
                </div>

                <span
                  className={`mt-8 flex h-14 w-14 items-center justify-center rounded-[12px] border ${
                    servicePackage.featured
                      ? "border-gold/50 text-gold"
                      : "border-gold/35 bg-gold/[0.06] text-zinc-900"
                  }`}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </span>

                <h3
                  style={{
                    color: servicePackage.featured ? "#ffffff" : "#18181b",
                    fontSize: "clamp(2.8rem, 3.1vw, 3.5rem)",
                    lineHeight: 0.88,
                  }}
                  className="mt-4 max-w-[17rem] font-serif font-semibold tracking-tight"
                >
                  {servicePackage.name.split(" ").map((word, wordIndex) => (
                    <span key={word} className="block">
                      {servicePackage.featured && wordIndex === 1 ? (
                        <span style={{ color: "#d4af37" }}>{word}</span>
                      ) : (
                        word
                      )}
                    </span>
                  ))}
                </h3>

                <p
                  style={{ color: servicePackage.featured ? "#d4d4d8" : "#3f3f46" }}
                  className="mt-5 min-h-[5.5rem] text-sm leading-relaxed sm:text-[15px]"
                >
                  {servicePackage.description}
                </p>

                <ul className="mt-4 flex-1 space-y-2.5 pb-10">
                  {servicePackage.features.map((feature) => (
                    <li
                      key={feature}
                      style={{ color: servicePackage.featured ? "#e4e4e7" : "#3f3f46" }}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f2c956] text-black">
                        <Check className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className={`group mt-auto flex w-full items-center justify-center gap-3 rounded-full px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 ${
                    servicePackage.featured
                      ? "bg-gold text-black hover:bg-gold-bright"
                      : "bg-zinc-950 text-white hover:bg-black"
                  }`}
                >
                  Discuss this package
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
