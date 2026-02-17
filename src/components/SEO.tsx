import { Helmet } from "react-helmet-async";
import { SITE, DEFAULT_META } from "@/config/seo";

export interface SEOProps {
    /** Page title – appended with site name unless `rawTitle` is true. */
    title?: string;
    /** When true the title is used as-is without appending the site name. */
    rawTitle?: boolean;
    description?: string;
    keywords?: readonly string[];
    /** Canonical path (relative, e.g. "/" or "/about"). Defaults to "/". */
    canonical?: string;
    /** OG image URL – absolute or relative to public/. */
    ogImage?: string;
    /** OG type. Defaults to "website". */
    ogType?: string;
    /** Optional JSON-LD structured data objects to inject. */
    structuredData?: Record<string, unknown>[];
    /** Do not index this page. */
    noIndex?: boolean;
}

/**
 * Reusable SEO `<head>` manager.
 *
 * Renders all meta, Open Graph, Twitter Card, canonical, and
 * JSON-LD tags via `react-helmet-async`.
 */
export function SEO({
    title,
    rawTitle = false,
    description = DEFAULT_META.description,
    keywords = DEFAULT_META.keywords,
    canonical = "/",
    ogImage = SITE.ogImage,
    ogType = "website",
    structuredData = [],
    noIndex = false,
}: SEOProps) {
    const pageTitle = title
        ? rawTitle
            ? title
            : `${title} | ${SITE.name}`
        : DEFAULT_META.title;

    const canonicalUrl = `${SITE.url}${canonical === "/" ? "" : canonical}`;
    const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${SITE.url}${ogImage}`;

    return (
        <Helmet>
            {/* ── Core ──────────────────────────────────────────── */}
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(", ")} />
            <meta name="author" content={SITE.name} />
            <link rel="canonical" href={canonicalUrl} />

            {noIndex && <meta name="robots" content="noindex,nofollow" />}

            {/* ── Open Graph ────────────────────────────────────── */}
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content={SITE.name} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`${SITE.name} – ${SITE.tagline}`} />
            <meta property="og:locale" content={SITE.locale} />

            {/* ── Twitter Card ──────────────────────────────────── */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={SITE.social.twitter} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImageUrl} />
            <meta name="twitter:image:alt" content={`${SITE.name} – ${SITE.tagline}`} />

            {/* ── Structured Data (JSON-LD) ─────────────────────── */}
            {structuredData.map((data, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(data)}
                </script>
            ))}
        </Helmet>
    );
}
