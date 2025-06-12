import React from 'react';
import { Link } from 'react-router-dom';
import POIGlobe from '../components/POIGlobe';
import CTASection from '../components/CTASection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const challenges = [
    {
      problem: "Outdated Location Data",
      solution: "Real-time verified updates every 24 hours",
      icon: "🔄"
    },
    {
      problem: "Manual Data Maintenance & Cleansing",
      solution: "We fully automate cleansing & enrichment so you don't have to",
      icon: "🧹"
    },
    {
      problem: "Poor Data Accuracy",
      solution: "99.9% accuracy with ground-truth validation",
      icon: "🎯"
    }
  ];

  const categoryTaxonomy = {
    'Finance': {
      icon: '🏦',
      metrics: '45K+ POIs',
      highlight: '99.9% accuracy',
      subcategories: ['ATMs', 'Banks', 'Credit Unions', 'Insurance', 'Financial Services']
    },
    'Healthcare': {
      icon: '🏥',
      metrics: '35K+ POIs',
      highlight: 'Real-time updates',
      subcategories: ['Hospitals', 'Clinics', 'Pharmacies', 'Medical Labs', 'Dental']
    },
    'Food & Dining': {
      icon: '🍽️',
      metrics: '85K+ POIs',
      highlight: 'Hourly updates',
      subcategories: ['Restaurants', 'Cafes', 'Bars', 'Food Courts', 'Bakeries']
    },
    'Shopping': {
      icon: '🛍️',
      metrics: '150K+ POIs',
      highlight: '15+ cities',
      subcategories: ['Malls', 'Retail Stores', 'Supermarkets', 'Markets', 'Shops']
    },
    'Transportation': {
      icon: '🚉',
      metrics: '25K+ POIs',
      highlight: 'Live tracking',
      subcategories: ['Airports', 'Train Stations', 'Bus Stops', 'Metro', 'Parking']
    },
    'Education': {
      icon: '🎓',
      metrics: '30K+ POIs',
      highlight: 'Verified data',
      subcategories: ['Schools', 'Universities', 'Colleges', 'Libraries', 'Training Centers']
    },
    'Entertainment': {
      icon: '🎭',
      metrics: '20K+ POIs',
      highlight: 'Events data',
      subcategories: ['Cinemas', 'Theaters', 'Museums', 'Parks', 'Stadiums']
    },
    'Accommodation': {
      icon: '🏨',
      metrics: '15K+ POIs',
      highlight: 'Occupancy data',
      subcategories: ['Hotels', 'Resorts', 'Guest Houses', 'Hostels', 'Service Apartments']
    },
    'Worship': {
      icon: '🕌',
      metrics: '10K+ POIs',
      highlight: 'Cultural insights',
      subcategories: ['Temples', 'Churches', 'Mosques', 'Synagogues', 'Shrines']
    }
  };

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
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="inline-block text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-5">
              Location Intelligence for{" "}
              <span className="bg-[linear-gradient(to_right,#0ea5e9,theme(colors.primary.600))] bg-clip-text text-transparent">
                Every Industry
              </span>
            </h2>


            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From retail to healthcare, finance to entertainment—we provide precise POI data
              across all major sectors in India.
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.entries(categoryTaxonomy).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary-50 text-2xl">
                    {data.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{category}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-primary-600 font-medium">{data.metrics}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-green-600 font-medium">{data.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Subcategories */}
                <div className="flex flex-wrap gap-2">
                  {data.subcategories.map((subcat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex px-2.5 py-1 bg-gray-50 text-gray-600 text-sm rounded-lg
                               transition-colors duration-200 hover:bg-primary-50 hover:text-primary-700"
                    >
                      {subcat}
                    </span>
                  ))}
                </div>

                {/* Hover accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-500 to-blue-500 
                               rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent" />

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">500K+</div>
                <div className="text-gray-600 font-medium">Total POIs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Major Cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-gray-600 font-medium">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">24h</div>
                <div className="text-gray-600 font-medium">Update Cycle</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof & Testimonial */}
      {/* <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
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
      </section> */}

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