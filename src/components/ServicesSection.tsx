import { motion } from "framer-motion";
import { Cpu, Code2, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
      <div className="absolute inset-0 grid-bg-sm" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            What We Build
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Engineering that <span className="text-primary">ships</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.04]"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.04]">
                <s.icon className="size-6 text-primary" />
              </div>
              <h3 className="mb-1 text-xl font-bold">{s.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{s.subtitle}</p>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-white/[0.08] bg-white/[0.03] text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
