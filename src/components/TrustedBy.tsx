import { motion } from "framer-motion";

const logos = [
  "Google", "Microsoft", "Amazon", "Meta", "Stripe", "Vercel",
];

export default function TrustedBy() {
  return (
    <section className="relative border-y border-border/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="label-caps mb-10 text-center">Trusted by forward-thinking teams</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-lg font-bold tracking-tight text-muted-foreground/40 transition-colors hover:text-muted-foreground/70 select-none"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
