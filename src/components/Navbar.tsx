import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Cpu, Code2, FileText, Menu, X } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI Development",
    desc: "MCP Servers & Autonomous Agents",
    items: ["Custom MCP Server Architecture", "Autonomous Agent Systems", "AI-Ready Infrastructure"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "SaaS, Enterprise .NET/Laravel/Nuxt",
    items: ["Full-Stack SaaS Platforms", "Enterprise Applications", "MVP to Production"],
  },
  {
    icon: FileText,
    title: "Smart Documentation",
    desc: "Institutional Knowledge Indexing",
    items: ["Codebase Indexing for AI", "Knowledge Base Systems", "Context-Aware Documentation"],
  },
];

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-black text-primary-foreground">D</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            DODERA<span className="font-light text-muted-foreground ml-1">SOFTWARE</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full z-50 mt-2 w-[640px] -translate-x-1/2"
                >
                  <div className="glass-card shine-border p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {services.map((s) => (
                        <div key={s.title}>
                          <div className="mb-3 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                              <s.icon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground">{s.title}</p>
                              <p className="text-[11px] text-muted-foreground">{s.desc}</p>
                            </div>
                          </div>
                          <ul className="space-y-1.5">
                            {s.items.map((item) => (
                              <li key={item} className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#process" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Process</a>
          <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</a>
          <a
            href="#contact"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_24px_hsl(1_97%_44%/0.3)]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border/50 md:hidden bg-background"
          >
            <div className="space-y-4 px-6 py-6">
              <p className="label-caps">Services</p>
              {services.map((s) => (
                <div key={s.title} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <s.icon className="h-4 w-4 text-primary" />
                  {s.title}
                </div>
              ))}
              <a href="#process" className="block text-sm text-muted-foreground">Process</a>
              <a href="#contact" className="block text-sm text-muted-foreground">Contact</a>
              <a href="#contact" className="inline-block rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
