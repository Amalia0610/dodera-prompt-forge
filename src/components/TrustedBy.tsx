import { motion } from "framer-motion";
import { TRUSTED_LOGOS } from "@/config/site";
import { fadeIn, viewportOnce } from "@/lib/animations";

export function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="border-y border-border/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {TRUSTED_LOGOS.map((name, i) => (
            <motion.span
              key={name}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="select-none text-lg font-bold tracking-tight text-muted-foreground/30 transition-colors hover:text-muted-foreground/60"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
