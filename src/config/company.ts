/**
 * MapDatum Company Configuration
 * Centralized configuration for all company details, contact information, and branding
 * 
 * Update this file to change company information across the entire website
 */

export const COMPANY_CONFIG = {
  // Basic Company Information
  name: 'MapDatum',
  tagline: 'Discover Places with Purpose',
  description: 'Expertly curated location datasets for major Indian cities. Comprehensive POI data sourced and enriched from trusted mapping platforms.',
  
  // Extended Company Details
  fullDescription: 'MapDatum provides expertly curated location datasets for major Indian cities. Our comprehensive POI data includes businesses, services, facilities, and key locations—all sourced and enriched from trusted mapping platforms and refined by our data experts.',
  
  // Contact Information
  contact: {
    email: {
      primary: 'hello@mapdatum.com',
      support: 'support@mapdatum.com',
      sales: 'sales@mapdatum.com',
      partnerships: 'partnerships@mapdatum.com'
    },
    phone: {
      primary: '+91 98765 43210'
    },
    whatsapp: {
      number: '+918765598189',
      internationalFormat: '+91 87655 98189'
    },
    address: {
      street: '123 Tech Park Drive',
      area: 'Electronic City',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560100',
      country: 'India',
      full: '123 Tech Park Drive, Electronic City, Bangalore, Karnataka 560100, India'
    }
  },

  // Social Media Links
  social: {
    linkedin: {
      url: 'https://linkedin.com/company/mapdatum',
      handle: '@MapDatum'
    },
    twitter: {
      url: 'https://twitter.com/mapdatum',
      handle: '@MapDatum'
    },
    facebook: {
      url: 'https://facebook.com/mapdatum',
      handle: '@MapDatum'
    },
    instagram: {
      url: 'https://instagram.com/mapdatum',
      handle: '@MapDatum'
    },
    github: {
      url: 'https://github.com/mapdatum',
      handle: '@MapDatum'
    }
  },

  // Business Information
  business: {
    founded: '2024',
    headquarters: 'Bangalore, India',
    type: 'Private Limited Company',
    gst: 'GST123456789',
    cin: 'CIN123456789',
    pan: 'PAN123456789'
  },

  // Website Information
  website: {
    domain: 'mapdatum.com',
    url: 'https://mapdatum.com',
    supportEmail: 'support@mapdatum.com',
    version: '1.0.0'
  },

  // Coverage Information
  coverage: {
    countries: ['India'],
    cities: [
      { name: 'Mumbai', coords: '19.0760°N, 72.8777°E', icon: '🏙️' },
      { name: 'Delhi', coords: '28.7041°N, 77.1025°E', icon: '🏛️' },
      { name: 'Bangalore', coords: '12.9716°N, 77.5946°E', icon: '💻' },
      { name: 'Hyderabad', coords: '17.3850°N, 78.4867°E', icon: '🌆' },
      { name: 'Chennai', coords: '13.0827°N, 80.2707°E', icon: '🏖️' },
      { name: 'Kolkata', coords: '22.5726°N, 88.3639°E', icon: '🎭' },
      { name: 'Pune', coords: '18.5204°N, 73.8567°E', icon: '🎓' },
      { name: 'Ahmedabad', coords: '23.0225°N, 72.5714°E', icon: '🏭' },
      { name: 'Jaipur', coords: '26.9124°N, 75.7873°E', icon: '🏰' },
      { name: 'Surat', coords: '21.1702°N, 72.8311°E', icon: '💎' }
    ],
    totalPOIs: '500K+',
    categories: 22
  },

  // Statistics
  stats: [
    { number: '500K+', label: 'POIs Mapped', icon: 'building' },
    { number: '15+', label: 'Cities Covered', icon: 'map' },
    { number: '99.9%', label: 'Data Accuracy', icon: 'accuracy' },
    { number: '24hrs', label: 'Update Cycle', icon: 'clock' }
  ],

  // Legal Information
  legal: {
    copyright: `© ${new Date().getFullYear()} MapDatum. All rights reserved.`,
    privacyPolicyUrl: '/privacy-policy',
    termsOfServiceUrl: '/terms-of-service',
    cookiePolicyUrl: '/cookie-policy',
    disclaimerUrl: '/disclaimer'
  },

  // SEO & Meta Information
  seo: {
    title: 'MapDatum - Curated Location Data for Indian Cities',
    description: 'Get high-quality POI datasets for top Indian cities. Expertly curated location intelligence for businesses, analytics, and mapping platforms.',
    keywords: [
      'POI data',
      'location intelligence',
      'Indian cities',
      'geospatial data',
      'mapping data',
      'location datasets',
      'business intelligence',
      'geographic information'
    ],
    author: 'MapDatum Team',
    ogImage: '/images/og-image.png',
    twitterCard: 'summary_large_image'
  },

  // Navigation
  navigation: {
    main: [
      { name: 'Home', path: '/' },
      { name: 'Data', path: '/data' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' }
    ],
    footer: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Cookie Policy', path: '/cookie-policy' }
    ]
  },

  // Email Templates for Quick Actions
  emailTemplates: {
    sampleRequest: {
      subject: 'Sample Data Request',
      body: `Hi MapDatum team,

I'd like to request sample data for evaluation.

City/Region of interest:
POI categories needed:
Use case:

Thank you!`
    },
    partnership: {
      subject: 'Partnership Inquiry',
      body: `Hi MapDatum team,

I'm interested in exploring partnership opportunities.

Company:
Partnership type:
Proposed collaboration:

Looking forward to discussing further!`
    },
    customDataset: {
      subject: 'Custom Dataset Request',
      body: `Hi MapDatum team,

I need a custom dataset with the following requirements:

Geographic area:
POI categories:
Data format preference:
Timeline:
Budget range:

Please let me know about feasibility and pricing.`
    },
    support: {
      subject: 'Technical Support',
      body: `Hi MapDatum team,

I need technical support with:

Issue description:
Data format:
Integration platform:
Error details (if any):

Thank you!`
    }
  }
} as const;

// Helper functions for easy access
export const getCompanyName = () => COMPANY_CONFIG.name;
export const getCompanyTagline = () => COMPANY_CONFIG.tagline;
export const getPrimaryEmail = () => COMPANY_CONFIG.contact.email.primary;
export const getPrimaryPhone = () => COMPANY_CONFIG.contact.phone.primary;
export const getWhatsAppLink = () => `https://wa.me/${COMPANY_CONFIG.contact.whatsapp.number}`;
export const getLinkedInUrl = () => COMPANY_CONFIG.social.linkedin.url;
export const getCopyright = () => COMPANY_CONFIG.legal.copyright;

// Email template generators
export const generateEmailUrl = (templateKey: keyof typeof COMPANY_CONFIG.emailTemplates) => {
  const template = COMPANY_CONFIG.emailTemplates[templateKey];
  const encodedSubject = encodeURIComponent(template.subject);
  const encodedBody = encodeURIComponent(template.body);
  return `mailto:${COMPANY_CONFIG.contact.email.primary}?subject=${encodedSubject}&body=${encodedBody}`;
};

// Social media URL generators
export const getSocialMediaUrls = () => {
  return Object.entries(COMPANY_CONFIG.social).map(([platform, info]) => ({
    platform,
    url: info.url,
    handle: info.handle
  }));
};

export default COMPANY_CONFIG; 