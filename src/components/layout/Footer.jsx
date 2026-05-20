import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "../../lib/icons";

export function Footer({ footer, personal, socials }) {
  return (
    <footer className="relative px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <motion.p
            className="font-display text-xl font-semibold text-cloud"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {footer.signature}
          </motion.p>
          <p className="mt-2 text-sm text-mist">
            {footer.copyright} &copy; {new Date().getFullYear()} {personal.name}.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/[0.04] text-mist transition hover:border-mint/40 hover:text-cloud"
              aria-label={social.label}
            >
              <Icon name={social.icon} className="h-4 w-4" />
            </a>
          ))}
          <a href="#top" className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-2 text-sm font-semibold text-cloud transition hover:border-mint/40">
            {footer.backToTopLabel}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
