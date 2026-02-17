import { motion } from "framer-motion";
import { Search, Layers, Zap, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Audit",
    desc: "Deep-dive into your codebase, infrastructure, and business goals to identify opportunities and risks.",
  },
  {
    icon: Layers,
    title: "Architecture",
    desc: "Design a robust, scalable architecture with clear milestones and technical specifications.",
  },
  {
    icon: Zap,
    title: "Agile Sprint",
    desc: "Rapid, iterative development cycles with continuous delivery and stakeholder feedback loops.",
  },
  {
    icon: Handshake,
    title: "Handover",
    desc: "Complete documentation, knowledge transfer, and ongoing support to ensure long-term success.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-heading" className="relative py-32">
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            How We Work
          </p>
          <h2 id="process-heading" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            From zero to <span className="text-primary">production</span>
          </h2>
        </motion.div>

        <div className="relative grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Connector line */}
          <div className="absolute left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] top-8 hidden h-px border-t border-dashed border-border md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto mb-5 flex size-14 items-center justify-center rounded-xl border border-border bg-card">
                <step.icon className="size-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
