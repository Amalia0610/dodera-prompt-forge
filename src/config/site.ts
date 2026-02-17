/**
 * Central data store for the entire site.
 *
 * Every piece of copy, every link list, every data array that appears in more
 * than one component (or is likely to grow) lives here.  Components import
 * only what they render — zero duplicated literals.
 */

import {
    Cpu,
    Code2,
    FileText,
    Search,
    Layers,
    Zap,
    Handshake,
} from "lucide-react";

import type {
    Service,
    ProcessStep,
    NavLink,
    FooterLinkGroup,
    TerminalLine,
} from "@/types";

// ── Company ─────────────────────────────────────────────

export const COMPANY = {
    name: "Dodera Software",
    legalName: "Dodera Software S.R.L.",
    email: "office@doderasoft.com",
    url: "https://doderasoft.com",
    location: "Romania · International",
    tagline:
        "Mission-critical software and AI development from Romania, serving clients internationally.",
} as const;

// ── Services ────────────────────────────────────────────

export const SERVICES: Service[] = [
    {
        icon: Cpu,
        title: "AI Development",
        subtitle: "MCP Servers & Autonomous Agents",
        description:
            "We design and deploy production-grade MCP servers and autonomous agent systems that integrate seamlessly with your existing infrastructure.",
        tags: ["MCP Architecture", "Agent Systems", "AI Pipelines"],
        highlights: [
            "Custom MCP Server Architecture",
            "Autonomous Agent Systems",
            "AI-Ready Infrastructure",
        ],
    },
    {
        icon: Code2,
        title: "Custom Software",
        subtitle: "SaaS · Enterprise · MVP",
        description:
            "From founder MVPs to enterprise platforms. We build with .NET, Laravel, and Nuxt — battle-tested stacks for mission-critical applications.",
        tags: [".NET", "Laravel", "Nuxt", "Full-Stack"],
        highlights: [
            "Full-Stack SaaS Platforms",
            "Enterprise Applications",
            "MVP to Production",
        ],
    },
    {
        icon: FileText,
        title: "Smart Documentation",
        subtitle: "Institutional Knowledge Indexing",
        description:
            "Index your entire codebase for AI context. We build documentation systems that make your institutional knowledge searchable and actionable.",
        tags: ["Codebase Indexing", "Knowledge Graphs", "AI Context"],
        highlights: [
            "Codebase Indexing for AI",
            "Knowledge Base Systems",
            "Context-Aware Documentation",
        ],
    },
];

// ── Process steps ───────────────────────────────────────

export const PROCESS_STEPS: ProcessStep[] = [
    {
        icon: Search,
        title: "Audit",
        description:
            "Deep-dive into your codebase, infrastructure, and business goals to identify opportunities and risks.",
    },
    {
        icon: Layers,
        title: "Architecture",
        description:
            "Design a robust, scalable architecture with clear milestones and technical specifications.",
    },
    {
        icon: Zap,
        title: "Agile Sprint",
        description:
            "Rapid, iterative development cycles with continuous delivery and stakeholder feedback loops.",
    },
    {
        icon: Handshake,
        title: "Handover",
        description:
            "Complete documentation, knowledge transfer, and ongoing support to ensure long-term success.",
    },
];

// ── Navigation ──────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
];

// ── Footer ──────────────────────────────────────────────

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
    {
        heading: "Company",
        links: [
            { label: "Services", href: "#services" },
            { label: "Process", href: "#process" },
            { label: "Contact", href: "#contact" },
        ],
    },
    {
        heading: "Legal",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
        ],
    },
];

// ── Trusted-by logos ────────────────────────────────────

export const TRUSTED_LOGOS: string[] = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Stripe",
    "Vercel",
];

// ── Terminal lines ──────────────────────────────────────

export const TERMINAL_LINES: TerminalLine[] = [
    { type: "input", text: "dodera deploy --target production" },
    { type: "output", text: "▸ Building application..." },
    { type: "output", text: "▸ Running 247 tests — all passed ✓" },
    { type: "output", text: "▸ Optimizing bundle — 63% smaller" },
    { type: "output", text: "▸ Deploying to 3 regions..." },
    { type: "success", text: "✓ Deployed successfully in 4.2s" },
    { type: "input", text: "dodera status" },
    { type: "success", text: "✓ All systems operational — 99.99% uptime" },
];
