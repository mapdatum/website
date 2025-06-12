import React from 'react';
import { Link } from 'react-router-dom';
import POIGlobe from '../components/POIGlobe';
import CTASection from '../components/CTASection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';

const Home: React.FC = () => {
  const challenges = [
    {
      problem: "Outdated Location Data",
      solution: "Real-time verified updates every 24 hours",
      icon: "🔄"
    },
    {
      problem: "Manual Data Maintenance & Cleansing",
      solution: "We fully automate cleansing & enrichment so you don’t have to",
      icon: "🧹"
    },
    {
      problem: "Poor Data Accuracy",
      solution: "99.9% accuracy with ground-truth validation",
      icon: "🎯"
    }
  ];

  const useCases = [
    {
      title: "Retail & E-commerce",
      description: "Optimize delivery routes, analyze market density, identify expansion opportunities",
      icon: "🛍️",
      metrics: "85K+ retail POIs"
    },
    {
      title: "Financial Services",
      description: "ATM placement, branch optimization, competitor analysis",
      icon: "🏦",
      metrics: "45K+ financial POIs"
    },
    {
      title: "Real Estate",
      description: "Property valuation, neighborhood analysis, amenity mapping",
      icon: "🏠",
      metrics: "500K+ location insights"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-primary-100 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              500K+ locations verified in real-time
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              India's Most Accurate<br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Location Intelligence
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Power your business with precision POI data across 15+ major Indian cities.
              From hyperlocal insights to enterprise-scale location intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/data"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-50 transition-colors shadow-lg"
              >
                See Live Data Demo
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2 2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11l4-4h8a2 2 0 002-2z" />
                </svg>
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-primary-600 transition-colors">
                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch 2-min Demo
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Live Data Showcase */}
      <POIGlobe />

      {/* Problem-Solution Section */}
      <ProblemSolutionSection challenges={challenges} />

      {/* Use Cases & Industry Applications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powering India's Leading Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprises, our location intelligence drives better business decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  {useCase.metrics}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Data-Driven Teams</h3>
              <p className="text-gray-600">Real metrics from real businesses using our data</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">500K+</div>
                <div className="text-gray-600 text-sm">Verified POIs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
                <div className="text-gray-600 text-sm">Major Cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">99.9%</div>
                <div className="text-gray-600 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">24h</div>
                <div className="text-gray-600 text-sm">Update Cycle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonial */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-primary-100 text-sm font-medium mb-8">
              <svg className="w-4 h-4 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Powered by cutting-edge geospatial technology
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              "Finally, location data that actually works for Indian businesses"
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our precision location intelligence has helped companies save millions in operational costs,
              optimize delivery routes, and make smarter expansion decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/data"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-50 transition-colors shadow-lg"
              >
                Explore Sample Data
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m5 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-primary-600 transition-colors"
              >
                Start Free Trial
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Blended Design */}
      <CTASection
        variant="primary"
        title="Ready to upgrade your location intelligence?"
        description="Stop making decisions based on outdated data. Get started with India's most accurate location intelligence platform."
        features={['Free sample data included', 'Setup in under 24 hours']}
        primaryButton={{
          text: 'Get Your Custom Quote',
          href: '/contact',
          type: 'link'
        }}
        secondaryButton={{
          text: 'Browse All Data',
          href: '/data',
          type: 'link'
        }}
      />
    </div>
  );
};

export default Home;