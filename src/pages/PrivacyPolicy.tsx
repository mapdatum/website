import React, { useState, useEffect } from 'react';
import { COMPANY_CONFIG } from '../config/company';

const PrivacyPolicy: React.FC = () => {
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
              Privacy{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-primary-100 mb-4 max-w-3xl mx-auto">
            How we collect, use, and protect your information
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
            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            <p className="text-gray-600">
              At {COMPANY_CONFIG.name}, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website or use our services. We are committed
              to protecting your personal information and being transparent about how we handle it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Information We Collect</h2>
            <p className="text-gray-600">
              When you interact with our website and services, we collect information in two main ways: information you provide
              directly to us, and information we collect automatically.
            </p>
            
            <p className="text-gray-600 mt-4">
              When you create an account, request a demo, or contact us, you may provide us with personal information such as
              your name, email address, and company details. This information helps us provide you with our services and
              maintain communication with you.
            </p>

            <p className="text-gray-600 mt-4">
              We also automatically collect certain technical information when you visit our website. This includes your IP
              address, browser type, operating system, and information about how you use our website. This data helps us
              understand how visitors interact with our site and improve your experience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">How We Use Your Information</h2>
            <p className="text-gray-600">
              Your information helps us provide and improve our services. We primarily use it to maintain and enhance your
              experience with our platform, process your requests, and communicate important updates. If you've given us
              permission, we may also send you marketing communications about our products and services.
            </p>

            <p className="text-gray-600 mt-4">
              We analyze usage patterns to improve our website's functionality and user experience. This includes
              understanding which features are most valuable to our users and identifying areas for improvement.
              All processing of your data is done in compliance with relevant data protection laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Data Security</h2>
            <p className="text-gray-600">
              We implement industry-standard security measures to protect your personal information. This includes
              encryption, secure servers, and regular security assessments. While we take these precautions seriously,
              it's important to note that no method of electronic transmission or storage is 100% secure.
            </p>

            <p className="text-gray-600 mt-4">
              Our team regularly reviews our security practices to ensure we're providing the best possible protection
              for your data. We also maintain internal policies and training to ensure your information is handled
              responsibly by our staff.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Third-Party Services</h2>
            <p className="text-gray-600">
              We work with trusted third-party service providers to help us operate our website and deliver our services.
              These providers may have access to your information only to perform specific tasks on our behalf and are
              obligated to protect your data. We carefully select our partners and require them to maintain high
              privacy and security standards.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Your Rights</h2>
            <p className="text-gray-600">
              You maintain control over your personal information. You can access, update, or request deletion of your
              data at any time. You also have the right to object to certain types of processing and can withdraw any
              consent you've previously given.
            </p>

            <p className="text-gray-600 mt-4">
              To exercise any of these rights or learn more about how we handle your data, please contact us using
              the information below. We'll respond to your request within the timeframe specified by applicable law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy or our privacy practices, we're here to help.
              You can reach our privacy team at{' '}
              <a href={`mailto:${COMPANY_CONFIG.contact.email.primary}`} className="text-primary-600 hover:text-primary-700">
                {COMPANY_CONFIG.contact.email.primary}
              </a>. We aim to respond to all privacy-related inquiries promptly and thoroughly.
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

export default PrivacyPolicy;