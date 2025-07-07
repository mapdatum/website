import React, { useState, useEffect } from 'react';
import { COMPANY_CONFIG } from '../config/company';

const CookiePolicy: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Cookie{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-primary-100 mb-4 max-w-3xl mx-auto">
              How we use cookies and similar technologies
            </p>
            <p className="text-sm text-primary-200">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
            <p className="text-gray-600">
              Cookies are small text files that websites place on your device to help them remember information
              about you and your preferences. They're widely used across the internet to make websites work more
              efficiently and provide valuable information to website owners about how their sites are being used.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">How We Use Cookies</h2>
            <p className="text-gray-600">
              At {COMPANY_CONFIG.name}, we use cookies and similar technologies to enhance your experience on our
              website and improve our services. Our cookies serve several essential functions, from keeping you
              logged in to helping us understand how you interact with our platform.
            </p>

            <p className="text-gray-600 mt-4">
              Essential cookies are necessary for our website to function properly. They enable core features like
              secure access to your account and remembering your preferences. Performance cookies help us understand
              how visitors use our site, collecting anonymous data that helps us improve our website's structure and
              content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Types of Cookies We Use</h2>
            <p className="text-gray-600">
              We use both first-party cookies (set by us) and third-party cookies (set by our trusted partners).
              First-party cookies are essential for basic website functionality and remembering your preferences.
              They help us provide a seamless experience as you navigate our site.
            </p>

            <p className="text-gray-600 mt-4">
              Third-party cookies support additional features like analytics, marketing, and social media
              integration. These cookies help us understand how our website is being used and allow us to improve
              our services. They may also enable features like sharing content on social media or processing
              secure payments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Cookie Duration</h2>
            <p className="text-gray-600">
              The cookies we use have different lifespans. Session cookies are temporary and are deleted when you
              close your browser. They help us track your movements from page to page, ensuring a smooth browsing
              experience. Persistent cookies remain on your device for a set period or until you delete them
              manually. These cookies help us remember your preferences and provide a more personalized experience
              on return visits.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Managing Cookies</h2>
            <p className="text-gray-600">
              You have full control over how cookies are used when you visit our website. Most web browsers allow
              you to manage cookie preferences through their settings. You can choose to accept or decline cookies,
              and you can delete existing cookies at any time. However, please note that disabling certain cookies
              may impact the functionality of our website.
            </p>

            <p className="text-gray-600 mt-4">
              To manage cookies in your browser, you can typically find these settings in the 'Preferences' or
              'Settings' menu. Each browser handles cookie management slightly differently, but you'll usually
              find these options under Privacy and Security settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Updates to This Policy</h2>
            <p className="text-gray-600">
              As we continue to improve our services and adapt to new technologies, we may update this Cookie
              Policy. Any changes will be reflected on this page, and significant updates will be communicated
              through appropriate channels. We encourage you to periodically review this policy to stay informed
              about how we use cookies to improve your experience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about how we use cookies or need help managing your cookie preferences,
              please contact our team at{' '}
              <a href={`mailto:${COMPANY_CONFIG.contact.email.primary}`} className="text-primary-600 hover:text-primary-700">
                {COMPANY_CONFIG.contact.email.primary}
              </a>. We're happy to provide additional information about our cookie practices and help you make
              informed choices about your privacy.
            </p>
          </article>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-primary-600 text-white p-2 rounded-full shadow-lg hover:bg-primary-700 transition-opacity ${
          showBackToTop ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default CookiePolicy; 