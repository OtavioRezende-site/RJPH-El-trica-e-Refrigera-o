import React, { useEffect } from 'react';
import { SITE } from '../../config/siteConfig.ts';

interface SEOHeadProps {
  title: string;
  description: string;
  pathname: string;
  schemaType?: 'LocalBusiness' | 'Service' | 'WebPage';
  serviceData?: {
    name: string;
    description: string;
    faqs?: { question: string; answer: string }[];
  };
  noIndex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  pathname,
  schemaType = 'WebPage',
  serviceData,
  noIndex = false
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Handle Robots meta tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.setAttribute('name', 'robots');
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', 'noindex, follow');
    } else if (metaRobots) {
      metaRobots.remove();
    }

    // 4. Update OpenGraph Tags
    const updateMeta = (prop: string, val: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', val);
    };

    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:url', window.location.origin + pathname);

    // 5. Update Twitter tags
    const updateTwitterMeta = (name: string, val: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', val);
    };

    updateTwitterMeta('twitter:title', title);
    updateTwitterMeta('twitter:description', description);

    // 6. Structured Data (JSON-LD)
    const scriptId = 'json-ld-structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemas: object[] = [];

    if (schemaType === 'LocalBusiness') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: SITE.name,
        alternateName: SITE.shortName,
        telephone: SITE.phoneInternational,
        openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 09:00-18:00',
        url: window.location.origin,
        sameAs: [
          SITE.instagram.url,
          SITE.googleBusinessProfile
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SITE.phoneInternational,
          contactType: 'customer service',
          availableLanguage: 'Portuguese'
        }
      });
    }

    if (schemaType === 'Service' && serviceData) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceData.name,
        description: serviceData.description,
        provider: {
          '@type': 'LocalBusiness',
          name: SITE.name,
          telephone: SITE.phoneInternational
        }
      });

      // BreadcrumbList
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Início',
            item: window.location.origin
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Serviços',
            item: `${window.location.origin}/services`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: serviceData.name,
            item: window.location.origin + pathname
          }
        ]
      });

      // FAQPage if questions are present
      if (serviceData.faqs && serviceData.faqs.length > 0) {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: serviceData.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer
            }
          }))
        });
      }
    }

    if (schemas.length > 0) {
      script.text = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
    } else {
      script.text = '';
    }
  }, [title, description, pathname, schemaType, serviceData, noIndex]);

  return null;
};
