import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 dot-bg opacity-20" />
      <div className="absolute inset-0 glow-red" style={{ "--glow-x": "50%", "--glow-y": "50%" } as React.CSSProperties} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <p className="label-caps mb-4">Ready to Build?</p>
        <h2 className="heading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Stop searching for talent.
          <br />
          <span className="text-gradient-red">Start shipping code.</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
          Book a free 30-minute architecture call. We'll audit your project and
          tell you exactly what it takes to ship.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@dodera.dev"
            className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_hsl(1_97%_44%/0.35)] hover:bg-primary/90"
          >
            Book Architecture Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:hello@dodera.dev"
            className="rounded-xl border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:border-foreground/20"
          >
            Send a Brief
          </a>
        </div>
      </motion.div>
    </section>
  );
}
