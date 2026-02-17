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

// ── Terminal ────────────────────────────────────────────

export interface TerminalLine {
    type: "input" | "output" | "success" | "error";
    text: string;
}
