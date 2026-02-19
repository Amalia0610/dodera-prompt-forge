import { useParams, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { SERVICE_PAGES } from "@/config/services";
import { SITE } from "@/config/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";

/**
 * Dynamic service page - resolves the :slug (and optional :parentSlug) param
 * and renders the corresponding service content.
 */
const ServicePage = () => {
    const { slug, parentSlug } = useParams<{ slug: string; parentSlug?: string }>();

    // Build the lookup key: "parent/child" for nested routes, "slug" for parent routes
    const key = parentSlug && slug ? `${parentSlug}/${slug}` : slug;
    const data = key ? SERVICE_PAGES[key] : undefined;

    if (!data) {
        return <Navigate to="/404" replace />;
    }

    // Build breadcrumb items
    const breadcrumbItems: { name: string; url: string }[] = [
        { name: "Home", url: SITE.url },
        { name: "Services", url: `${SITE.url}/#services` },
    ];

    // If this is a child service, add parent to breadcrumbs
    if (data.parentSlug) {
        const parentData = SERVICE_PAGES[data.parentSlug];
        if (parentData) {
            breadcrumbItems.push({
                name: parentData.heroLabel,
                url: `${SITE.url}/services/${data.parentSlug}`,
            });
        }
    }

    breadcrumbItems.push({
        name: data.heroLabel,
        url: `${SITE.url}${data.canonical}`,
    });

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title={data.metaTitle}
                description={data.metaDescription}
                keywords={data.keywords}
                canonical={data.canonical}
                structuredData={[
                    breadcrumbSchema(breadcrumbItems),
                    ...(data.faqs.length > 0
                        ? [faqSchema(data.faqs)]
                        : []),
                ]}
            />
            <Navbar />
            <main>
                <ServicePageLayout data={data} />
            </main>
            <Footer />
        </div>
    );
};

export default ServicePage;
