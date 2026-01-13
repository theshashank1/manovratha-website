import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    keywords?: string;
    type?: 'website' | 'article' | 'service';
}

const SITE_URL = 'https://manovratha.in';

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    image = "/logo.svg",
    url,
    keywords = "mental health, therapy, counseling, psychology, wellness, India, mental healthcare, psychologist, psychiatrist, counselor, Manovratha",
    type = "website"
}) => {
    const siteTitle = "Manovratha | Healing Minds";
    const fullTitle = title === "Home" ? siteTitle : `${title} | Manovratha`;
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : SITE_URL);
    const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    // Organization JSON-LD structured data
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Manovratha Mental Health Services",
        "alternateName": "Manovratha",
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo.svg`,
        "description": "A holistic global mental health sanctuary for professionals, institutions, and every mind that matters.",
        "foundingDate": "2023",
        "slogan": "Healing Minds",
        "sameAs": [
            "https://www.linkedin.com/company/manovratha/",
            "https://www.instagram.com/manovratha/",
            "https://x.com/manovratha"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "wellbeing@manovratha.in",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        }
    };

    // WebPage JSON-LD for search engines
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": fullTitle,
        "url": currentUrl,
        "description": description,
        "publisher": {
            "@type": "Organization",
            "name": "Manovratha Mental Health Services",
            "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/logo.svg`
            }
        },
        "inLanguage": "en-IN",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Manovratha",
            "url": SITE_URL
        }
    };

    // Breadcrumb schema for navigation
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": SITE_URL
            },
            title !== "Home" && {
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": currentUrl
            }
        ].filter(Boolean)
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <html lang="en-IN" />
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
            <meta name="theme-color" content="#5A7A58" />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:image:alt" content={`${title} - Manovratha`} />
            <meta property="og:site_name" content="Manovratha" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImage} />
            <meta name="twitter:image:alt" content={`${title} - Manovratha`} />
            <meta name="twitter:site" content="@manovratha" />
            <meta name="twitter:creator" content="@manovratha" />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(webPageSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
