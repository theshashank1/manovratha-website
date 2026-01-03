import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    keywords?: string;
}

const SITE_URL = 'https://manovratha.in';

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    image = "/logo.svg",
    url,
    keywords = "mental health, therapy, counseling, psychology, wellness, India, mental healthcare, psychologist, psychiatrist, counselor, Manovratha"
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
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo.svg`,
        "description": "A holistic global mental health sanctuary for professionals, institutions, and every mind that matters.",
        "sameAs": [
            "https://www.linkedin.com/company/manovratha/",
            "https://www.instagram.com/manovratha/",
            "https://x.com/manovratha"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "wellbeing@manovratha.in",
            "contactType": "customer service"
        }
    };

    // WebSite JSON-LD for search engines
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Manovratha",
        "url": SITE_URL,
        "description": description,
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${SITE_URL}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:site_name" content="Manovratha" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImage} />
            <meta name="twitter:site" content="@manovratha" />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
