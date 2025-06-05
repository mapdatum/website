import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_CONFIG } from '../config/company';

const About: React.FC = () => {
  const advantages = [
    {
      title: "Expert Curation",
      description: "Our data experts manually verify and enrich each POI entry, ensuring accuracy and completeness that raw open data can't match.",
      icon: "🎯"
    },
    {
      title: "Quality Assurance",
      description: "Multi-stage validation process including automated checks, manual verification, and continuous monitoring for data integrity.",
      icon: "✅"
    },
    {
      title: "Rich Attributes",
      description: "Beyond basic location data, we provide detailed attributes like business hours, contact information, categories, and local insights.",
      icon: "📊"
    },
    {
      title: "Regular Updates",
      description: "Continuous maintenance and updates ensure your applications always have the most current and accurate location information.",
      icon: "🔄"
    }
  ];

  const values = [
    {
      title: "Data Integrity",
      description: "We believe that quality data is the foundation of successful location-based applications.",
      icon: "🛡️"
    },
    {
      title: "Customer Success",
      description: "Your success with location data drives our commitment to excellence and continuous improvement.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "We continuously explore new ways to enhance and deliver location intelligence solutions.",
      icon: "💡"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About {COMPANY_CONFIG.name}
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              We're on a mission to provide the highest quality location data solutions for {COMPANY_CONFIG.coverage.countries[0]}'s rapidly growing digital ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Redesigned */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Story & Purpose
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by a passion for precision and powered by innovation, we're building {COMPANY_CONFIG.coverage.countries[0]}'s most trusted location intelligence platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become {COMPANY_CONFIG.coverage.countries[0]}'s most trusted provider of location intelligence, empowering businesses and developers with accurate, enriched, and actionable geographic data that drives innovation and growth.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {COMPANY_CONFIG.name} bridges the gap between raw location data and business-ready intelligence. We transform scattered geographic information into structured, verified, and enriched datasets that businesses can rely on.
              </p>
            </div>
          </div>

          {/* India Focus Section */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for {COMPANY_CONFIG.coverage.countries[0]}'s Digital Future</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Starting with comprehensive coverage of {COMPANY_CONFIG.coverage.countries[0]}'s top {COMPANY_CONFIG.coverage.cities.length} cities, we understand the unique challenges and opportunities in the Indian market. Our deep local knowledge combined with cutting-edge technology ensures data that truly serves {COMPANY_CONFIG.coverage.countries[0]}'s growing digital ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Curated Data Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Curated Data vs. Raw Open Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the critical difference between raw data sources and expertly curated location intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Raw Data */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-red-500 mr-3">⚠️</span>
                Raw Open Data
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Inconsistent data quality and completeness
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Missing or outdated business information
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Requires extensive cleaning and validation
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Limited attribute richness
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  No quality assurance or support
                </li>
              </ul>
            </div>

            {/* Curated Data */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-green-500 mr-3">✅</span>
                {COMPANY_CONFIG.name} Curated Data
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Verified accuracy and completeness
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Rich business attributes and metadata
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Ready-to-use structured formats
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Enhanced with local insights
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Continuous updates and support
                </li>
              </ul>
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Expertise in Geospatial Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings together years of experience in geospatial data, technology, and the Indian market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the {COMPANY_CONFIG.name} Difference?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join forward-thinking businesses who trust {COMPANY_CONFIG.name} for their location data needs. Let's discuss how our curated datasets can power your next innovation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors shadow-lg"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 