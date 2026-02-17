import { useParams, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { SERVICE_PAGES } from "@/config/services";
import { SITE } from "@/config/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";

/**
 * Dynamic service page — resolves the :slug param
 * and renders the corresponding service content.
 */
const ServicePage = () => {
    const { slug } = useParams<{ slug: string }>();
    const data = slug ? SERVICE_PAGES[slug] : undefined;

    if (!data) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title={data.metaTitle}
                description={data.metaDescription}
                keywords={data.keywords}
                canonical={data.canonical}
                structuredData={[
                    breadcrumbSchema([
                        { name: "Home", url: SITE.url },
                        { name: "Services", url: `${SITE.url}/#services` },
                        { name: data.heroLabel, url: `${SITE.url}${data.canonical}` },
                    ]),
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
