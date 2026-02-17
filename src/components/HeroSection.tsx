import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Performance", "Scalability", "Security", "Innovation"];
const longestWord = "Performance"; // reserve space

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 dot-bg opacity-40" />
      <div className="absolute inset-0 glow-red" />
      <div className="absolute inset-0 glow-blue" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="label-caps mb-6">Mission-Critical Engineering</p>

          <h1 className="heading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
            Digital Services.{" "}
            <br className="sm:hidden" />
            Built for{" "}
            {/* Fixed-width container to prevent layout shift */}
            <span className="relative inline-block text-left align-bottom">
              {/* Invisible longest word to reserve space */}
              <span className="invisible font-bold">{longestWord}.</span>
              {/* Animated word */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0 text-gradient-red"
                >
                  {words[index]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We architect bespoke software, AI infrastructure, and intelligent documentation
            systems for teams that refuse to compromise.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_hsl(1_97%_44%/0.35)] hover:bg-primary/90"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="rounded-xl border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:border-foreground/20"
            >
              View Services
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5"
          >
            <div className="h-2 w-1 rounded-full bg-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
