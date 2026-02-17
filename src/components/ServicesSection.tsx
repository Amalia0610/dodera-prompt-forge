import { motion } from "framer-motion";
import { Cpu, Code2, FileText, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI Development",
    subtitle: "MCP Servers & Autonomous Agents",
    description:
      "We design and deploy production-grade MCP servers and autonomous agent systems that integrate seamlessly with your existing infrastructure.",
    tags: ["MCP Architecture", "Agent Systems", "AI Pipelines"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    subtitle: "SaaS · Enterprise · MVP",
    description:
      "From founder MVPs to enterprise platforms. We build with .NET, Laravel, and Nuxt — battle-tested stacks for mission-critical applications.",
    tags: [".NET", "Laravel", "Nuxt", "Full-Stack"],
  },
  {
    icon: FileText,
    title: "Smart Documentation",
    subtitle: "Institutional Knowledge Indexing",
    description:
      "Index your entire codebase for AI context. We build documentation systems that make your institutional knowledge searchable and actionable.",
    tags: ["Codebase Indexing", "Knowledge Graphs", "AI Context"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32">
      <div className="absolute inset-0 dot-bg opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="label-caps mb-4">What We Build</p>
          <h2 className="heading-tight text-3xl sm:text-4xl md:text-5xl text-foreground">
            Engineering that <span className="text-gradient-red">ships</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card shine-border group cursor-pointer p-8 transition-all duration-300 hover:border-primary/20"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-1 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{s.subtitle}</p>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground/80">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-accent px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
