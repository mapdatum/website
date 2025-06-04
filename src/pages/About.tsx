import React from 'react';
import { Link } from 'react-router-dom';

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
              About MapDatum
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              We're on a mission to provide the highest quality location data solutions for India's rapidly growing digital ecosystem.
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
              Driven by a passion for precision and powered by innovation, we're building India's most trusted location intelligence platform
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
                To become India's most trusted provider of location intelligence, empowering businesses and developers with accurate, enriched, and actionable geographic data that drives innovation and growth.
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
                MapDatum bridges the gap between raw location data and business-ready intelligence. We transform scattered geographic information into structured, verified, and enriched datasets that businesses can rely on.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for India's Digital Future</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Starting with comprehensive coverage of India's top 12-15 cities, we understand the unique challenges and opportunities in the Indian market. Our deep local knowledge combined with cutting-edge technology ensures data that truly serves India's growing digital ecosystem.
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
                MapDatum Curated Data
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Geospatial Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of geographic information systems, spatial data processing, and location intelligence.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge data processing pipelines, quality assurance systems, and delivery infrastructure.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Market Knowledge</h3>
              <p className="text-gray-600">
                Intimate understanding of Indian business ecosystems, cultural nuances, and market dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our commitment to excellence in location data solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Growth - Elegant Redesign */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Commitment to Continuous Improvement
              </h2>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed max-w-4xl mx-auto">
                We're constantly evolving our methodologies, expanding our coverage, and enhancing our data quality.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Future Expansion Plans */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-3xl"></div>
              
              <div className="relative p-12">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Future Expansion Plans</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">Strategic initiatives shaping the future of location intelligence</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">Geographic Coverage</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">Expanding to cover <span className="font-semibold text-blue-700">50+ cities</span> across India and neighboring South Asian markets</p>
                    </div>
                  </div>

                  <div className="group">
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border border-emerald-200/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">Data Categories</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">Adding specialized datasets for <span className="font-semibold text-emerald-700">real estate, transportation, and infrastructure</span></p>
                    </div>
                  </div>

                  <div className="group">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">Analytics Platform</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">Developing <span className="font-semibold text-purple-700">business intelligence tools</span> for location-based insights</p>
                    </div>
                  </div>

                  <div className="group">
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl border border-teal-200/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">API Services</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">Real-time data access</span> through advanced API and integration platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Partner with MapDatum
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join us in building the future of location intelligence in India. Let's discuss how our curated data can accelerate your business goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors shadow-lg"
          >
            Get in Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About; 