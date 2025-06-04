import React from 'react';
import { Link } from 'react-router-dom';

interface City {
  name: string;
  icon: string;
  coords: string;
}

interface Stat {
  number: string;
  label: string;
  icon: string;
}

const Home: React.FC = () => {
  const cities: City[] = [
    { name: 'Mumbai', icon: '🏙️', coords: '19.0760°N, 72.8777°E' },
    { name: 'Delhi', icon: '🏛️', coords: '28.7041°N, 77.1025°E' },
    { name: 'Bangalore', icon: '💻', coords: '12.9716°N, 77.5946°E' },
    { name: 'Hyderabad', icon: '🌆', coords: '17.3850°N, 78.4867°E' },
    { name: 'Chennai', icon: '🏖️', coords: '13.0827°N, 80.2707°E' },
    { name: 'Kolkata', icon: '🎭', coords: '22.5726°N, 88.3639°E' },
    { name: 'Pune', icon: '🎓', coords: '18.5204°N, 73.8567°E' },
    { name: 'Ahmedabad', icon: '🏭', coords: '23.0225°N, 72.5714°E' },
    { name: 'Jaipur', icon: '🏰', coords: '26.9124°N, 75.7873°E' },
    { name: 'Surat', icon: '💎', coords: '21.1702°N, 72.8311°E' }
  ];

  const stats: Stat[] = [
    { number: '10+', label: 'Cities Mapped', icon: '🏙️' },
    { number: '100K+', label: 'Data Points', icon: '📍' },
    { number: '24hrs', label: 'Response Time', icon: '⚡' },
    { number: '99%', label: 'Data Accuracy', icon: '🎯' }
  ];

  const poiCategories = {
    lowDensity: [
      { name: 'Airports', icon: '✈️', description: 'Major airports and airfields' },
      { name: 'Stadiums', icon: '🏟️', description: 'Sports venues and stadiums' },
      { name: 'Universities', icon: '🎓', description: 'Higher education institutions' },
      { name: 'Power Plants', icon: '⚡', description: 'Energy generation facilities' },
      { name: 'Dams', icon: '🏞️', description: 'Water management infrastructure' },
    ],
    mediumDensity: [
      { name: 'Hospitals', icon: '🏥', description: 'Healthcare facilities' },
      { name: 'Schools', icon: '🏫', description: 'Educational institutions' },
      { name: 'Shopping Malls', icon: '🏬', description: 'Retail centers' },
      { name: 'Religious Places', icon: '🛕', description: 'Places of worship' },
      { name: 'Parks & Gardens', icon: '🌳', description: 'Recreational green spaces' },
      { name: 'Police Stations', icon: '👮', description: 'Law enforcement facilities' },
    ],
    highDensity: [
      { name: 'Restaurants', icon: '🍽️', description: 'Dining establishments' },
      { name: 'Fuel Stations', icon: '⛽', description: 'Petrol and gas stations' },
      { name: 'ATMs', icon: '🏧', description: 'Banking services' },
      { name: 'Pharmacies', icon: '💊', description: 'Medical stores' },
      { name: 'Gyms & Fitness', icon: '🏋️', description: 'Fitness centers' },
      { name: 'Salons & Spas', icon: '💇', description: 'Beauty and wellness' },
      { name: 'General Stores', icon: '🛍️', description: 'Local retail shops' },
    ],
  };

  const valueProps = [
    {
      title: "Data Quality",
      description: "Meticulously curated and verified POI data that you can trust for critical business decisions",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Precision & Speed",
      description: "Accurate location coordinates and rich metadata delivered in formats ready for immediate integration",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Local Expertise",
      description: "Deep understanding of Indian markets with local insights that global datasets often miss",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const deliveryMethods = [
    {
      title: "Amazon S3",
      description: "Direct delivery to your S3 buckets with automated uploads and versioning",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.5 4.5C14.6 4.5 16.5 5.9 17 7.9L17.8 7.7C18.9 7.4 20 8.1 20.3 9.2C20.6 10.3 19.9 11.4 18.8 11.7L17.9 12L18 12.5C18 13.9 16.9 15 15.5 15H7C5.3 15 4 13.7 4 12S5.3 9 7 9H7.3L7.8 8.3C8.9 6.9 10.6 6 12.5 6V4.5Z" />
        </svg>
      )
    },
    {
      title: "Google Cloud Storage",
      description: "Seamless integration with GCS buckets and Google Cloud ecosystem",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9M19 9H14V4H19V9Z" />
        </svg>
      )
    },
    {
      title: "Azure Blob Storage",
      description: "Enterprise-grade delivery to Microsoft Azure with security compliance",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17M2 12L12 17L22 12" />
        </svg>
      )
    },
    {
      title: "FTP/SFTP",
      description: "Secure file transfer to your existing infrastructure and systems",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      )
    },
    {
      title: "Data Dumps",
      description: "Complete datasets delivered as compressed files in your preferred format",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "REST API",
      description: "Real-time data access through our robust API platform (Coming Soon)",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Discover Places with Purpose
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              MapDatum provides expertly curated location datasets for major Indian cities. Our comprehensive POI data includes businesses, services, facilities, and key locations—all sourced and enriched from trusted mapping platforms and refined by our data experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors shadow-lg"
              >
                Get Started
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-white opacity-5 rounded-full"></div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MapDatum?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference between raw data and expertly curated, enriched location intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary-600">{prop.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Professional Redesign */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Trusted by Data-Driven Organizations</h2>
            <p className="text-primary-100 max-w-2xl mx-auto">Delivering excellence through verified metrics and proven performance</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {index === 0 && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-primary-100 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cities Currently Covered</h2>
            <p className="text-gray-600">Major Indian metropolitan areas with comprehensive POI datasets</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {cities.map((city, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-2">{city.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{city.name}</h3>
                <p className="text-xs text-gray-500">{city.coords}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POI Coverage Section */}

      {/* POI Coverage Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Current Coverage: India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive POI datasets across top 12-15 cities, categorized by density and type
            </p>
          </div>

          {/* POI Categories Grid */}
          <div className="space-y-12">
            {/* Low Density */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-gray-900">📦 Low Density</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {poiCategories.lowDensity.map((poi, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <div className="text-2xl mb-2">{poi.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1">{poi.name}</h4>
                    <p className="text-sm text-gray-600">{poi.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Medium Density */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-gray-900">📦 Medium Density</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                {poiCategories.mediumDensity.map((poi, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <div className="text-2xl mb-2">{poi.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1">{poi.name}</h4>
                    <p className="text-sm text-gray-600">{poi.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* High Density */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-gray-900">📦 High Density</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
                {poiCategories.highDensity.map((poi, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <div className="text-2xl mb-2">{poi.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1">{poi.name}</h4>
                    <p className="text-sm text-gray-600">{poi.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Delivery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Flexible Data Delivery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your data delivered exactly how you need it, when you need it. We support all major cloud platforms and delivery methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliveryMethods.map((method, index) => (
              <div key={index} className={`bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow relative ${method.comingSoon ? 'border-2 border-secondary-200' : ''}`}>
                {method.comingSoon && (
                  <div className="absolute top-4 right-4 bg-secondary-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Coming Soon
                  </div>
                )}
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <span className={`${method.comingSoon ? 'text-secondary-600' : 'text-primary-600'}`}>
                    {method.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>

          {/* Delivery Features */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Delivery Features & Guarantees
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Secure Transfer</h4>
                  <p className="text-sm text-gray-600">End-to-end encryption for all data transfers</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Automated Updates</h4>
                  <p className="text-sm text-gray-600">Scheduled delivery of updated datasets</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Multiple Formats</h4>
                  <p className="text-sm text-gray-600">JSON, CSV, GeoJSON, and custom formats</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
                  <p className="text-sm text-gray-600">Technical support for integration and delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today to explore our data offerings or request customized datasets for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors shadow-lg"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
            <a
              href="mailto:hello@mapdatum.com"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 