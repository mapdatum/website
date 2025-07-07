import React, { useState, useEffect } from 'react';
import { COMPANY_CONFIG } from '../config/company';

const TermsOfService: React.FC = () => {
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
              Terms of{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-primary-100 mb-4 max-w-3xl mx-auto">
              The rules and guidelines for using our services
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
            <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
            <p className="text-gray-600">
              By accessing or using {COMPANY_CONFIG.name}'s services, you agree to be bound by these Terms of Service.
              If you disagree with any part of these terms, you may not access our services. These terms outline your
              rights and responsibilities when using our platform.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Use License</h2>
            <p className="text-gray-600">
              When you use our services, we grant you a limited, non-exclusive, and non-transferable license to access
              and use our platform. This license allows you to use our services for your internal business purposes,
              download data according to your subscription plan, and integrate our services with your applications as
              permitted by your specific license terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Restrictions</h2>
            <p className="text-gray-600">
              To maintain the integrity of our services and protect our intellectual property, there are certain
              activities that are not permitted. You may not modify or create derivative works from our services,
              attempt to reverse engineer any part of our platform, or remove any proprietary notices. Additionally,
              sharing, reselling, or redistributing our data without explicit authorization is prohibited.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Your Responsibilities</h2>
            <p className="text-gray-600">
              As a user of our services, you play a crucial role in maintaining the security and proper use of our
              platform. This includes providing accurate account information, keeping your credentials secure, and
              implementing reasonable security measures to protect any data you access through our services.
            </p>

            <p className="text-gray-600 mt-4">
              You are also responsible for ensuring your use of our services complies with all applicable laws and
              regulations. We expect you to promptly report any unauthorized use or security breaches you discover.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Intellectual Property</h2>
            <p className="text-gray-600">
              Our services, including all content, features, and functionality, are owned by {COMPANY_CONFIG.name} and
              are protected by intellectual property laws. Your use of our services does not grant you ownership of
              any intellectual property rights in our services or the content you access.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Data Usage</h2>
            <p className="text-gray-600">
              We provide our data services on an "as is" basis, focusing on accuracy and reliability. However, you are
              responsible for evaluating and verifying the suitability of our data for your specific needs. We
              recommend implementing appropriate validation processes for your use cases.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Termination</h2>
            <p className="text-gray-600">
              We reserve the right to terminate or suspend access to our services if we determine there has been a
              violation of these terms. Upon termination, your license to use our services will end immediately, and
              you must cease all use of our platform and data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Limitation of Liability</h2>
            <p className="text-gray-600">
              While we strive to provide reliable services, we cannot guarantee uninterrupted access or complete
              accuracy of our data. To the extent permitted by law, we limit our liability for any damages arising
              from your use of our services, including indirect or consequential damages.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Changes to Terms</h2>
            <p className="text-gray-600">
              Our services continue to evolve, and we may need to update these terms to reflect changes in our
              practices or legal requirements. We will notify you of significant changes and provide an opportunity
              to review the updated terms before they take effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about these Terms of Service or need clarification about any aspect of our
              platform, please reach out to our team at{' '}
              <a href={`mailto:${COMPANY_CONFIG.contact.email.primary}`} className="text-primary-600 hover:text-primary-700">
                {COMPANY_CONFIG.contact.email.primary}
              </a>. We're here to help ensure you understand your rights and responsibilities when using our services.
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

export default TermsOfService; 