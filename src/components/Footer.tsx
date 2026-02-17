import { Separator } from "@/components/ui/separator";
import { Globe, Mail, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { COMPANY, FOOTER_LINK_GROUPS, SOCIAL_LINKS } from "@/config/site";

export function Footer() {
  return (
    <footer role="contentinfo">
      <Separator />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {COMPANY.tagline}
            </p>

            {/* Social Media Icons */}
            <div className="mb-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all hover:border-white/[0.15] hover:bg-white/[0.08]"
                >
                  <social.icon className="size-4 text-muted-foreground/60 transition-colors hover:text-muted-foreground" />
                </a>
              ))}
            </div>

            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${COMPANY.email}`}
                aria-label={`Send us an email at ${COMPANY.email}`}
                className="flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${COMPANY.url}`}
                className="flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground"
              >
                <Globe className="size-4" />
                {COMPANY.url.replace("https://", "")}
              </a>
              <div className="flex items-center gap-2 text-foreground/70">
                <MapPin className="size-4" />
                {COMPANY.location}
              </div>
            </div>
          </div>

          {/* Link groups */}
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group.heading}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/") || l.href.startsWith("/#") ? (
                      <Link
                        to={l.href}
                        className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1 text-xs text-muted-foreground">
          Made with <Heart className="size-3 animate-pulse fill-primary text-primary" /> by
          {" "}{COMPANY.name}
        </p>
      </div>
    </footer>
  );
}
