import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Container } from "../ui/Container";
import { GlassCard } from "../ui/GlassCard";
import { MagneticButton } from "../ui/MagneticButton";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../../lib/icons";
import { fadeUp, staggerContainer } from "../../lib/motion";

export function Contact({ contact, personal, socials }) {
  const initialForm = useMemo(
    () => contact.fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}),
    [contact.fields]
  );
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `${contact.formEndpoint}?subject=${subject}&body=${body}`;
  };

  return (
    <Container id="contact">
      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white/[0.045] p-6 shadow-soft backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="absolute inset-0 -z-10 bg-mesh opacity-70" />
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow={contact.eyebrow} title={contact.title} description={contact.description} />
            <motion.div
              className="mt-8 space-y-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contact.quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  variants={fadeUp}
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl border border-line bg-black/[0.18] px-4 py-4 text-cloud transition hover:border-mint/40 hover:bg-white/[0.06]"
                >
                  <span className="inline-flex items-center gap-3">
                    <Icon name={link.icon} className="h-5 w-5 text-mint" />
                    {link.label}
                  </span>
                  <Icon name="ArrowUpRight" className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-black/[0.18] text-mist transition hover:text-cloud"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <GlassCard whileHover={false} className="bg-ink/64">
            <form onSubmit={handleSubmit} className="space-y-5">
              {contact.fields.map((field) => (
                <label key={field.name} className="block">
                  <span className="mb-2 block text-sm font-semibold text-cloud">{field.label}</span>
                  {field.type === "textarea" ? (
                    <textarea
                      value={form[field.name]}
                      onChange={(event) => setForm((value) => ({ ...value, [field.name]: event.target.value }))}
                      placeholder={field.placeholder}
                      required
                      rows="6"
                      className="w-full resize-none rounded-2xl border border-line bg-white/[0.05] px-4 py-3 text-cloud outline-none transition placeholder:text-mist/55 focus:border-mint/50"
                    />
                  ) : (
                    <input
                      type={field.type}
                      value={form[field.name]}
                      onChange={(event) => setForm((value) => ({ ...value, [field.name]: event.target.value }))}
                      placeholder={field.placeholder}
                      required
                      className="h-12 w-full rounded-2xl border border-line bg-white/[0.05] px-4 text-cloud outline-none transition placeholder:text-mist/55 focus:border-mint/50"
                    />
                  )}
                </label>
              ))}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <MagneticButton type="submit" icon="Send">
                  Send message
                </MagneticButton>
                <p className="text-sm text-mist">{personal.availability}</p>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </Container>
  );
}
