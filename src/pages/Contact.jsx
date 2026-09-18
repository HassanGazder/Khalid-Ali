import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { MapPin, Mail, MessageCircle, Linkedin, Loader2, Send, CheckCircle2 } from "lucide-react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import { CONTACT_INFO, PROJECT_TYPES, BUDGETS } from "@/data/portfolio";

const inputClasses =
  "w-full border border-black/15 bg-white px-4 py-3 text-sm text-zinc-950 placeholder:text-zinc-400 outline-none transition-[border-color,box-shadow] duration-300 focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)]";

const labelClasses =
  "mb-2 block font-mono text-[11px] uppercase tracking-[0.25em] text-gold";

export default function Contact() {
  const [state, submitToFormspree] = useForm("xbgllwrk");

  const handleSubmit = submitToFormspree;

  const infoItems = [
    { icon: MapPin, label: "Studio", value: CONTACT_INFO.location, id: "info-location" },
    { icon: Mail, label: "Email", value: CONTACT_INFO.email, id: "info-email" },
    { icon: MessageCircle, label: "WhatsApp", value: CONTACT_INFO.whatsapp, id: "info-whatsapp" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/khalik006", id: "info-linkedin" },
  ];

  return (
    <div data-testid="contact-page" className="min-h-screen">
      <Seo
        title="Contact — Khalid Ali, Video Editor in Dubai"
        siteName="Khalid Ali"
        description="Start a project with Khalid Ali — Dubai-based video editor and graphic designer. Available for regional and remote worldwide productions."
      />
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-gold"
        >
          Contact
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-[1.05] tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl"
        >
          Start a project <span className="italic text-gold">with Khalid</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-zinc-700"
        >
          Based in Dubai, UAE — available for regional and remote worldwide
          projects. Tell me about your film and I'll reply within 24 hours.
        </motion.p>

        <div className="mt-16 grid gap-14 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-5"
          >
            <div className="border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-semibold text-zinc-950">
                Studio Details
              </h2>
              <div className="mt-8 space-y-7">
                {infoItems.map(({ icon: Icon, label, value, id }) => (
                  <div key={id} data-testid={id} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-gold/30 text-gold">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                        {label}
                      </p>
                      <p className="mt-1 text-sm text-zinc-800">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            data-testid="contact-form"
            onSubmit={handleSubmit}
            className="border border-black/10 bg-white p-8 shadow-sm lg:col-span-7"
          >
            {state.succeeded ? (
              <div className="flex min-h-[430px] flex-col items-center justify-center text-center" role="status">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-amber-700">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h2 className="mt-6 font-serif text-3xl font-semibold text-zinc-950">
                  Thank you for reaching out.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600">
                  Your enquiry has been sent successfully. Khalid will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className={labelClasses}>
                  Your Name *
                </label>
                <input
                  id="fullName"
                  data-testid="input-full-name"
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Sarah Al-Mansoor"
                  className={inputClasses}
                />
                <ValidationError prefix="Name" field="fullName" errors={state.errors} className="mt-2 block text-xs text-crimson" />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address *
                </label>
                <input
                  id="email"
                  data-testid="input-email"
                  type="email"
                  name="email"
                  required
                  placeholder="sarah@brand.com"
                  className={inputClasses}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 block text-xs text-crimson" />
              </div>
              <div>
                <label htmlFor="company" className={labelClasses}>
                  Company / Brand
                </label>
                <input
                  id="company"
                  data-testid="input-company"
                  type="text"
                  name="company"
                  placeholder="e.g. Red Bull ME / Agency"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number *
                </label>
                <input
                  id="phone"
                  data-testid="input-phone"
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="e.g. +971 50 123 4567"
                  className={inputClasses}
                />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-2 block text-xs text-crimson" />
              </div>
              <div>
                <label htmlFor="projectType" className={labelClasses}>
                  Project Type
                </label>
                <select
                  id="projectType"
                  data-testid="select-project-type"
                  name="projectType"
                  defaultValue=""
                  className={`${inputClasses} appearance-none`}
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="budget" className={labelClasses}>
                  Estimated Budget (USD)
                </label>
                <select
                  id="budget"
                  data-testid="select-budget"
                  name="budget"
                  defaultValue=""
                  className={`${inputClasses} appearance-none`}
                >
                  <option value="" disabled>
                    Select a budget range
                  </option>
                  {BUDGETS.map((b) => (
                    <option key={b} value={b} className="bg-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClasses}>
                  Project Details & Timeline *
                </label>
                <textarea
                  id="message"
                  data-testid="textarea-message"
                  rows={5}
                  name="message"
                  required
                  placeholder="Tell us about your project goals, references, and delivery date..."
                  className={`${inputClasses} resize-none`}
                />
                <ValidationError prefix="Project details" field="message" errors={state.errors} className="mt-2 block text-xs text-crimson" />
              </div>
            </div>

            <button
              data-testid="submit-button"
              type="submit"
              disabled={state.submitting}
              className="group mt-8 flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-black transition-[background-color,opacity] duration-300 hover:bg-gold-bright disabled:opacity-60 sm:w-auto"
            >
              {state.submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  Send Enquiry
                </>
              )}
            </button>
              </>
            )}
          </motion.form>
        </div>
      </main>
    </div>
  );
}
