import React from 'react';
import { Link } from 'react-router-dom';

const Data: React.FC = () => {

  const poiCategories = {
    lowDensity: [
      { name: 'Airports', icon: '✈️', description: 'Major airports and airfields', count: '650+', coverage: 'All India' },
      { name: 'Stadiums', icon: '🏟️', description: 'Sports venues and stadiums', count: '1,200+', coverage: 'All India' },
      { name: 'Universities', icon: '🎓', description: 'Higher education institutions', count: '2,800+', coverage: 'All India' },
      { name: 'Power Plants', icon: '⚡', description: 'Energy generation facilities', count: '450+', coverage: 'All India' },
      { name: 'Dams', icon: '🏞️', description: 'Water management infrastructure', count: '850+', coverage: 'All India' },
    ],
    mediumDensity: [
      { name: 'Hospitals', icon: '🏥', description: 'Healthcare facilities', count: '8,500+', coverage: 'Top 5 States' },
      { name: 'Schools', icon: '🏫', description: 'Educational institutions', count: '25,000+', coverage: 'Top 5 States' },
      { name: 'Shopping Malls', icon: '🏬', description: 'Retail centers', count: '2,200+', coverage: 'Top 5 States' },
      { name: 'Religious Places', icon: '🛕', description: 'Places of worship', count: '35,000+', coverage: 'Top 5 States' },
      { name: 'Parks & Gardens', icon: '🌳', description: 'Recreational green spaces', count: '4,500+', coverage: 'Top 5 States' },
      { name: 'Police Stations', icon: '👮', description: 'Law enforcement facilities', count: '1,800+', coverage: 'Top 5 States' },
    ],
    highDensity: [
      { name: 'Restaurants', icon: '🍽️', description: 'Dining establishments', count: '45,000+', coverage: 'Top 15 Cities' },
      { name: 'Fuel Stations', icon: '⛽', description: 'Petrol and gas stations', count: '8,500+', coverage: 'Top 15 Cities' },
      { name: 'ATMs', icon: '🏧', description: 'Banking services', count: '28,000+', coverage: 'Top 15 Cities' },
      { name: 'Pharmacies', icon: '💊', description: 'Medical stores', count: '15,500+', coverage: 'Top 15 Cities' },
      { name: 'Gyms & Fitness', icon: '🏋️', description: 'Fitness centers', count: '5,200+', coverage: 'Top 15 Cities' },
      { name: 'Salons & Spas', icon: '💇', description: 'Beauty and wellness', count: '12,000+', coverage: 'Top 15 Cities' },
      { name: 'General Stores', icon: '🛍️', description: 'Local retail shops', count: '78,000+', coverage: 'Top 15 Cities' },
    ],
  };

  const deliveryMethods = [
    {
      title: "Amazon S3",
      description: "Direct delivery to your S3 buckets with automated uploads and versioning",
      features: ["Automated uploads", "Version control", "Custom bucket regions", "Scheduled delivery"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.5 4.5C14.6 4.5 16.5 5.9 17 7.9L17.8 7.7C18.9 7.4 20 8.1 20.3 9.2C20.6 10.3 19.9 11.4 18.8 11.7L17.9 12L18 12.5C18 13.9 16.9 15 15.5 15H7C5.3 15 4 13.7 4 12S5.3 9 7 9H7.3L7.8 8.3C8.9 6.9 10.6 6 12.5 6V4.5Z" />
        </svg>
      )
    },
    {
      title: "Google Cloud Storage",
      description: "Seamless integration with GCS buckets and Google Cloud ecosystem",
      features: ["GCS integration", "BigQuery ready", "Cloud Functions triggers", "Multi-region support"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9M19 9H14V4H19V9Z" />
        </svg>
      )
    },
    {
      title: "Azure Blob Storage",
      description: "Enterprise-grade delivery to Microsoft Azure with security compliance",
      features: ["Azure integration", "AD authentication", "Compliance ready", "Hot/Cold storage"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17M2 12L12 17L22 12" />
        </svg>
      )
    },
    {
      title: "FTP/SFTP",
      description: "Secure file transfer to your existing infrastructure and systems",
      features: ["Secure protocols", "Custom schedules", "Compression options", "Resume support"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      )
    },
    {
      title: "Data Dumps",
      description: "Complete datasets delivered as compressed files in your preferred format",
      features: ["Multiple formats", "Compression options", "Custom filtering", "One-time or recurring"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "REST API",
      description: "Real-time data access through our robust API platform (Coming Soon)",
      features: ["Real-time queries", "GraphQL support", "Rate limiting", "API analytics"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      comingSoon: true
    }
  ];

  const dataFormats = [
    { name: 'JSON', description: 'Structured data format perfect for APIs and applications' },
    { name: 'CSV', description: 'Simple, universally compatible format for data analysis' },
    { name: 'GeoJSON', description: 'Geographic data format for mapping and GIS applications' },
    { name: 'Shapefile', description: 'Industry standard for GIS and spatial analysis' },
    { name: 'KML', description: 'Google Earth compatible format for visualization' },
    { name: 'Excel', description: 'Spreadsheet format for business users' }
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
              Tiered coverage across All India • Top 5 States • Top 15 Cities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Location Data for{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                India
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Explore our tiered POI datasets - from complete national infrastructure coverage to detailed city-level business data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-50 transition-colors shadow-lg"
              >
                Request Sample Data
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m5 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <a
                href="#coverage"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-primary-600 transition-colors"
              >
                View Coverage
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements - Same as Home */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Coverage Overview - Premium & Consistent */}
      <section id="coverage" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23667eea\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-gray-700 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              Intelligent Coverage Architecture
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Tiered Data 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Intelligence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our sophisticated coverage model delivers the right level of detail for every business need - 
              from national infrastructure insights to hyperlocal business intelligence
            </p>
          </div>

          {/* Progressive Coverage Visualization - Equal Heights */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-yellow-200 to-purple-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
              {/* Tier 1: National Coverage */}
              <div className="group h-full">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-green-200 transform group-hover:-translate-y-2 h-full flex flex-col">
                  {/* Tier Indicator */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Tier 1
                  </div>
                  
                  {/* Coverage Stats */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🇮🇳</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">National Scale</h3>
                    <p className="text-green-600 font-semibold">Infrastructure & Landmarks</p>
                  </div>

                  {/* Metrics - Flex Grow */}
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-700">Coverage</span>
                      <span className="text-sm font-bold text-green-600">All India</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-700">Data Points</span>
                      <span className="text-sm font-bold text-green-600">6,000+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-700">Categories</span>
                      <span className="text-sm font-bold text-green-600">5 Types</span>
                    </div>
                  </div>

                  {/* Coverage Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>Coverage Density</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 text-center mt-auto">
                    Complete national infrastructure mapping across all 28 states and 8 union territories
                  </p>
                </div>
              </div>

              {/* Tier 2: State Coverage */}
              <div className="group h-full">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-yellow-200 transform group-hover:-translate-y-2 h-full flex flex-col">
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Tier 2
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🏛️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">State Focus</h3>
                    <p className="text-orange-600 font-semibold">Public Services & Community</p>
                  </div>

                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-700">Coverage</span>
                      <span className="text-sm font-bold text-orange-600">Top 5 States</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-700">Data Points</span>
                      <span className="text-sm font-bold text-orange-600">77,000+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-700">Categories</span>
                      <span className="text-sm font-bold text-orange-600">6 Types</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>Coverage Density</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>

                  {/* State Pills */}
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {['Maharashtra', 'Karnataka', 'Delhi', 'Tamil Nadu', 'Gujarat'].map((state, index) => (
                      <span key={index} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                        {state}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 text-center mt-auto">
                    Comprehensive public services data across India's economic powerhouse states
                  </p>
                </div>
              </div>

              {/* Tier 3: City Coverage */}
              <div className="group h-full">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-purple-200 transform group-hover:-translate-y-2 h-full flex flex-col">
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Tier 3
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🏙️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Hyperlocal</h3>
                    <p className="text-purple-600 font-semibold">Business Intelligence</p>
                  </div>

                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-700">Coverage</span>
                      <span className="text-sm font-bold text-purple-600">Top 15 Cities</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-700">Data Points</span>
                      <span className="text-sm font-bold text-purple-600">192,000+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-700">Categories</span>
                      <span className="text-sm font-bold text-purple-600">7 Types</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>Coverage Density</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <div className="text-xs text-gray-500 mb-2">Metro Coverage</div>
                    <div className="grid grid-cols-3 gap-1 text-xs">
                      {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'].map((city, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded text-center">
                          {city}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">+9 more cities</p>
                  </div>

                  <p className="text-sm text-gray-600 text-center mt-auto">
                    Granular business data for India's major metropolitan centers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Stats - Light & Elegant */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-3xl p-8 border border-gray-200 shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-gray-700 text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Complete Coverage Overview
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-blue-600 mb-2">275K+</div>
                  <div className="text-sm text-gray-600 font-medium">Total Data Points</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-green-600 mb-2">18</div>
                  <div className="text-sm text-gray-600 font-medium">POI Categories</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">99.8%</div>
                  <div className="text-sm text-gray-600 font-medium">Accuracy Rate</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl font-bold text-purple-600 mb-2">24h</div>
                  <div className="text-sm text-gray-600 font-medium">Update Cycle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POI Categories - Complete with Fixed Alignment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Point of Interest Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of our POI categories and their coverage levels
            </p>
          </div>

          <div className="space-y-12">
            {/* Low Density POIs */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Low Density POIs</h3>
                </div>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                  🇮🇳 All India Coverage
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {poiCategories.lowDensity.map((poi, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col h-full">
                    <div className="text-2xl mb-2">{poi.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">{poi.name}</h4>
                    <p className="text-xs text-gray-600 mb-2 flex-grow">{poi.description}</p>
                    <div className="text-green-600 font-bold text-sm mb-2">{poi.count}</div>
                    <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded text-center whitespace-nowrap mt-auto">
                      {poi.coverage}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medium Density POIs - Fixed Height */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Medium Density POIs</h3>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                  🏛️ Top 5 States
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {poiCategories.mediumDensity.map((poi, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col h-full">
                    <div className="text-2xl mb-2">{poi.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">{poi.name}</h4>
                    <p className="text-xs text-gray-600 mb-2 flex-grow">{poi.description}</p>
                    <div className="text-orange-600 font-bold text-sm mb-2">{poi.count}</div>
                    <div className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded text-center whitespace-nowrap mt-auto">
                      {poi.coverage}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* High Density POIs - Fixed Height */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900">High Density POIs</h3>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                  🏙️ Top 15 Cities
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-4">
                {poiCategories.highDensity.map((poi, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col h-full">
                    <div className="text-2xl mb-2">{poi.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">{poi.name}</h4>
                    <p className="text-xs text-gray-600 mb-2 flex-grow">{poi.description}</p>
                    <div className="text-purple-600 font-bold text-sm mb-2">{poi.count}</div>
                    <div className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded text-center whitespace-nowrap mt-auto">
                      {poi.coverage}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Formats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Supported Data Formats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your data in the format that works best for your use case and technical requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataFormats.map((format, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{format.name}</h3>
                <p className="text-gray-600">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Delivery Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Flexible Data Delivery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose how you want to receive your data. We support all major cloud platforms and delivery methods.
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
                <p className="text-gray-600 mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Delivery Features */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
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
            Ready to Access Our Complete Dataset?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific data requirements and get a custom quote for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors shadow-lg"
            >
              Get Custom Quote
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
            <a
              href="mailto:hello@mapdatum.com"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Data; 