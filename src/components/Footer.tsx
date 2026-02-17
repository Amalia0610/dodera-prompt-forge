import { Separator } from "@/components/ui/separator";
import { Globe, Mail, MapPin, Heart } from "lucide-react";

const links = {
  company: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer role="contentinfo">
      <Separator />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-black text-primary-foreground">D</span>
              </div>
              <span className="text-lg font-bold tracking-tight">
                DODERA
                <span className="ml-1 font-light text-muted-foreground">SOFTWARE</span>
              </span>
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Mission-critical software and AI development from Romania, serving
              clients internationally.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:office@doderasoft.com"
                aria-label="Send us an email at office@doderasoft.com"
                className="flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
                office@doderasoft.com
              </a>
              <a
                href="https://doderasoft.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit doderasoft.com"
                className="flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground"
              >
                <Globe className="size-4" />
                doderasoft.com
              </a>
              <div className="flex items-center gap-2 text-foreground/70">
                <MapPin className="size-4" />
                Romania · International
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Company
            </p>
            <ul className="space-y-2.5">
              {links.company.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Legal
            </p>
            <ul className="space-y-2.5">
              {links.legal.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dodera Software. All rights reserved.
        </p>
        <p className="flex items-center gap-1 text-xs text-muted-foreground">
          Made with <Heart className="size-3 animate-pulse fill-primary text-primary" /> by
          Dodera Software
        </p>
      </div>
    </footer>
  );
}
