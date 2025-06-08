import React from 'react';
import { COMPANY_CONFIG, generateEmailUrl } from '../config/company';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      title: 'Email Us',
      description: 'Drop us a line and we\'ll get back to you within 24 hours',
      value: COMPANY_CONFIG.contact.email.primary,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: `mailto:${COMPANY_CONFIG.contact.email.primary}`,
      buttonText: 'Send Email'
    },
    {
      title: 'WhatsApp',
      description: 'Message us directly for quick questions and support',
      value: COMPANY_CONFIG.contact.phone.primary,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.513"/>
        </svg>
      ),
      href: `https://wa.me/${COMPANY_CONFIG.contact.whatsapp.number}`,
      buttonText: 'Message on WhatsApp'
    },
    {
      title: 'LinkedIn',
      description: 'Connect with us professionally for partnerships and collaborations',
      value: COMPANY_CONFIG.social.linkedin.handle,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      ),
      href: COMPANY_CONFIG.social.linkedin.url,
      buttonText: 'Connect on LinkedIn'
    }
  ];

  const quickActions = [
    {
      title: 'Request Sample Data',
      description: 'Get a sample of our POI datasets for your evaluation',
      icon: '📊',
      href: generateEmailUrl('sampleRequest')
    },
    {
      title: 'Partnership Inquiry',
      description: `Explore collaboration opportunities with ${COMPANY_CONFIG.name}`,
      icon: '🤝',
      href: generateEmailUrl('partnership')
    },
    {
      title: 'Custom Dataset Request',
      description: 'Need data for specific cities or custom requirements?',
      icon: '🎯',
      href: generateEmailUrl('customDataset')
    },
    {
      title: 'Technical Support',
      description: 'Get help with data integration and technical questions',
      icon: '🛠️',
      href: generateEmailUrl('support')
    }
  ];

  const useCases = [
    {
      title: 'Custom Datasets',
      description: 'Need data for specific cities or categories? We can create tailored datasets for your requirements.',
      icon: '🎯'
    },
    {
      title: 'API Integration',
      description: 'Interested in real-time data access? Ask about our API services and integration support.',
      icon: '🔗'
    },
    {
      title: 'Partnership Opportunities',
      description: 'Looking to collaborate or integrate our data into your platform? Let\'s explore partnerships.',
      icon: '🤝'
    },
    {
      title: 'Data Quality Questions',
      description: 'Have specific requirements about data accuracy, formats, or update frequency? We\'re here to help.',
      icon: '❓'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Consistent with Home */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-primary-100 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              24-hour response guarantee • Enterprise support
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get in{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to enhance your applications with high-quality location data? 
              We'd love to discuss your requirements and show you what {COMPANY_CONFIG.name} can offer.
            </p>
          </div>
        </div>

        {/* Floating Elements - Same as Home */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Preferred Way to Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help and respond to all inquiries within 24 hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary-600">{method.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{method.description}</p>
                <p className="text-primary-600 font-medium mb-6">{method.value}</p>
                <a
                  href={method.href}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {method.buttonText}
                </a>
              </div>
            ))}
          </div>

          {/* Response Time Guarantee */}
          <div className="bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24-Hour Response Guarantee</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that time is crucial for your projects. Our team responds to all inquiries within 24 hours during business days, often much sooner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jump straight to what you need with our pre-made email templates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow block"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{action.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{action.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{action.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How Can We Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're building the next big app or need data for research, we're here to support your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">{useCase.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our data and services
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What data formats do you provide?
              </h3>
              <p className="text-gray-600">
                We deliver data in multiple formats including JSON, CSV, and GeoJSON to suit different integration needs and applications.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How frequently is your data updated?
              </h3>
              <p className="text-gray-600">
                Our datasets are continuously monitored and updated. Most POI categories are refreshed monthly, while high-change categories like restaurants and retail stores are updated more frequently.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can you provide data for specific cities or regions?
              </h3>
              <p className="text-gray-600">
                Absolutely! While we currently focus on {COMPANY_CONFIG.coverage.countries[0]}'s top {COMPANY_CONFIG.coverage.cities.length} cities, we can create custom datasets for specific geographic areas based on your requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What makes {COMPANY_CONFIG.name} different from free data sources?
              </h3>
              <p className="text-gray-600">
                Our data goes through rigorous verification, enrichment, and quality assurance processes. Unlike raw open data, our datasets are cleaned, structured, and enhanced with business intelligence that's ready for immediate use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Don't let poor quality data hold back your projects. Contact us today and discover the {COMPANY_CONFIG.name} difference.
          </p>
          <a
            href={`mailto:${COMPANY_CONFIG.contact.email.primary}`}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors shadow-lg"
          >
            Email Us Now
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact; 