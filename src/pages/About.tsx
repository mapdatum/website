import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_CONFIG } from '../config/company';

const About: React.FC = () => {
  const stats = [
    { number: "275K+", label: "Data Points", description: "Verified locations" },
    { number: "99.8%", label: "Accuracy", description: "Quality assured" },
    { number: "15", label: "Cities", description: "Coverage areas" },
    { number: "24h", label: "Updates", description: "Refresh cycle" }
  ];

  const capabilities = [
    {
      title: "Geospatial Intelligence",
      description: "Advanced algorithms process millions of geographic data points with precision validation pipelines",
      features: ["Machine Learning Validation", "Real-time Processing", "Spatial Analytics"],
      metric: "99.8% Accuracy",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
        </svg>
      )
    },
    {
      title: "Data Engineering",
      description: "Scalable infrastructure handling massive datasets with enterprise-grade performance and reliability",
      features: ["Auto-scaling Systems", "Quality Assurance", "API Infrastructure"],
      metric: "24/7 Processing",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      )
    },
    {
      title: "Market Intelligence",
      description: "Deep understanding of Indian business patterns, regional nuances, and local market dynamics",
      features: ["Local Expertise", "Business Intelligence", "Regional Analysis"],
      metric: "15+ Cities",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const values = [
    {
      title: "Engineering Excellence",
      description: "Every system is built with precision, scalability, and performance as core principles",
      icon: "⚡",
      highlight: "Precision First"
    },
    {
      title: "Data Integrity", 
      description: "Rigorous validation ensures enterprise-grade reliability in every data point we deliver",
      icon: "🛡️",
      highlight: "Quality Assured"
    },
    {
      title: "Innovation Drive",
      description: "Continuously pushing boundaries with AI, machine learning, and advanced geospatial technology",
      icon: "🚀",
      highlight: "Future Ready"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Same style */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-primary-100 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Building India's Location Intelligence Infrastructure
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {COMPANY_CONFIG.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Engineering the future of location intelligence through precision data science and advanced geospatial technology
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Stats Overview - Sophisticated Layout */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* Company Story - Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Engineering Precision 
                    <span className="block text-primary-600">at Scale</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {COMPANY_CONFIG.name} transforms India's complex geographic data landscape into 
                    enterprise-ready intelligence through cutting-edge technology and deep market understanding.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-600">
                      <strong className="text-gray-900">Born from necessity:</strong> India's digital transformation 
                      required location data that truly understood local market complexity and business patterns.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-600">
                      <strong className="text-gray-900">Built for scale:</strong> Our systems process millions 
                      of data points daily, delivering enterprise-grade accuracy and real-time updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-primary-600 rounded-2xl mx-auto flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600 mb-2">Engineered for India</div>
                      <p className="text-gray-700">
                        Purpose-built systems understanding the unique challenges of Indian markets, 
                        from tier-1 metros to emerging urban centers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities - Advanced Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Technical Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade infrastructure delivering location intelligence at scale
            </p>
          </div>

          <div className="space-y-12">
            {capabilities.map((capability, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                        <span className="text-primary-600">{capability.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{capability.title}</h3>
                        <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mt-1">
                          {capability.metric}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {capability.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  {/* Remove the visual entirely - let the content speak for itself */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission - Side by Side Premium */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-xl text-primary-100 leading-relaxed">
                  To become India's definitive location intelligence platform, empowering businesses 
                  with precision-engineered data that drives innovation and growth across the digital economy.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-100 rounded-full -ml-16 -mb-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  To transform raw geographic information into enterprise-ready intelligence through 
                  advanced data science, rigorous quality assurance, and deep understanding of Indian market dynamics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Premium Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Engineering Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundational principles that guide our technology and business decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-6">{value.icon}</div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                        {value.highlight}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 