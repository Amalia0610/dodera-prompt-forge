import type { LucideIcon } from "lucide-react";

// ── Services ────────────────────────────────────────────

export interface Service {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    /** Short bullet points shown in the navbar mega-menu. */
    highlights: string[];
    /** URL path for the service page */
    href: string;
}

// ── Process ─────────────────────────────────────────────

export interface ProcessStep {
    icon: LucideIcon;
    title: string;
    description: string;
}

// ── Navigation ──────────────────────────────────────────

export interface NavLink {
    label: string;
    href: string;
}

export interface FooterLinkGroup {
    heading: string;
    links: NavLink[];
}

// ── Social Media ────────────────────────────────────────

export interface SocialLink {
    label: string;
    href: string;
    icon: LucideIcon;
}

// ── Terminal ────────────────────────────────────────────

export interface TerminalLine {
    type: "input" | "output" | "success" | "error";
    text: string;
}
