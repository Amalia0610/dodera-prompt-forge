import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Cpu, Code2, FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <nav aria-label="Main navigation" className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" aria-label="Dodera Software — Home" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-black text-primary-foreground">D</span>
          </div>
          <span className="text-lg font-bold tracking-tight">
            DODERA
            <span className="ml-1 font-light text-muted-foreground">SOFTWARE</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
              Services
              <ChevronDown
                className={`size-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full z-50 mt-2 w-[640px]"
                >
                  <div className="rounded-lg border border-white/[0.08] bg-background/95 p-6 shadow-xl backdrop-blur-xl">
                    <div className="grid grid-cols-3 gap-6">
                      {services.map((s) => (
                        <div key={s.title}>
                          <div className="mb-3 flex items-center gap-2">
                            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                              <s.icon className="size-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold">{s.title}</p>
                              <p className="text-[11px] text-muted-foreground">{s.desc}</p>
                            </div>
                          </div>
                          <ul className="space-y-1.5">
                            {s.items.map((item) => (
                              <li
                                key={item}
                                className="cursor-pointer text-xs text-muted-foreground transition-colors hover:text-foreground"
                              >
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

          <a href="#process" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Process
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Contact
          </a>

          <Button size="sm" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border/50 bg-card/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-6 py-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Services
              </p>
              {services.map((s) => (
                <a
                  key={s.title}
                  href="#services"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
                    <s.icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-foreground">{s.title}</span>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                </a>
              ))}

              <div className="my-3 h-px bg-border" />

              <a
                href="#process"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                Process
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                Contact
              </a>

              <div className="pt-3">
                <Button className="w-full" size="sm" asChild>
                  <a href="#contact" onClick={() => setMobileOpen(false)}>Get Started</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
