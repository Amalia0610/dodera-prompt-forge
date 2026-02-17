import { motion } from "framer-motion";
import { Search, Layers, Zap, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Audit",
    desc: "Deep-dive into your codebase, infrastructure, and business goals to identify opportunities and risks.",
  },
  {
    icon: Layers,
    num: "02",
    title: "Architecture",
    desc: "Design a robust, scalable architecture with clear milestones and technical specifications.",
  },
  {
    icon: Zap,
    num: "03",
    title: "Agile Sprint",
    desc: "Rapid, iterative development cycles with continuous delivery and stakeholder feedback loops.",
  },
  {
    icon: Handshake,
    num: "04",
    title: "Handover",
    desc: "Complete documentation, knowledge transfer, and ongoing support to ensure long-term success.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-32">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 glow-red" style={{ "--glow-x": "30%", "--glow-y": "70%" } as React.CSSProperties} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="label-caps mb-4">How We Work</p>
          <h2 className="heading-tight text-3xl sm:text-4xl md:text-5xl text-foreground">
            From zero to <span className="text-gradient-red">production</span>
          </h2>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Connector line */}
          <div className="absolute top-8 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] hidden h-px bg-gradient-to-r from-primary/40 via-border to-secondary/40 md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="label-caps text-primary">{step.num}</span>
              <h3 className="mt-2 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
