import React, { useEffect, useRef, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';
import './POIGlobe.css';

const POIGlobe = ({ 
  className = ''
}) => {
  const poiData = useMemo(() => [
    { 
      name: "Red Fort", 
      lat: 28.6562, 
      lng: 77.2410, 
      city: "Delhi", 
      country: "India", 
      category: "Historical Site", 
      description: "UNESCO World Heritage Site with verified coordinates and comprehensive metadata",
      accuracy: "99.9%",
      dataPoints: "847",
      icon: "🏛️"
    },
    { 
      name: "Gateway of India", 
      lat: 18.9220, 
      lng: 72.8347, 
      city: "Mumbai", 
      country: "India", 
      category: "Monument", 
      description: "Iconic arch monument with enriched location intelligence and crowd analytics",
      accuracy: "99.8%",
      dataPoints: "1,240",
      icon: "🏛️"
    },
    { 
      name: "Hawa Mahal", 
      lat: 26.9239, 
      lng: 75.8267, 
      city: "Jaipur", 
      country: "India", 
      category: "Palace", 
      description: "Pink city landmark with architectural metadata and tourism insights",
      accuracy: "99.7%",
      dataPoints: "623",
      icon: "🏰"
    },
    { 
      name: "Mysore Palace", 
      lat: 12.3052, 
      lng: 76.6552, 
      city: "Mysore", 
      country: "India", 
      category: "Royal Palace", 
      description: "Royal heritage site with event data and visitor pattern analysis",
      accuracy: "99.6%",
      dataPoints: "789",
      icon: "👑"
    },
    { 
      name: "Victoria Memorial", 
      lat: 22.5448, 
      lng: 88.3426, 
      city: "Kolkata", 
      country: "India", 
      category: "Memorial", 
      description: "Cultural landmark with enriched arts-centric taxonomy and footfall metrics",
      accuracy: "99.8%",
      dataPoints: "934",
      icon: "🏛️"
    },
    { 
      name: "Charminar", 
      lat: 17.3616, 
      lng: 78.4747, 
      city: "Hyderabad", 
      country: "India", 
      category: "Monument", 
      description: "Historic monument with market proximity data and cultural event mapping",
      accuracy: "99.9%",
      dataPoints: "1,156",
      icon: "🕌"
    }
  ], []);

  const globeEl = useRef();
  const [currentPOIIndex, setCurrentPOIIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-cycle through POIs every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPOIIndex(prev => (prev + 1) % poiData.length);
        setTimeout(() => setIsTransitioning(false), 200);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, [poiData.length]);

  // Smooth camera transition
  useEffect(() => {
    if (globeEl.current && poiData[currentPOIIndex]) {
      const poi = poiData[currentPOIIndex];
      globeEl.current.pointOfView({ 
        lat: poi.lat, 
        lng: poi.lng, 
        altitude: 1.8
      }, 2000);
    }
  }, [currentPOIIndex, poiData]);

  const currentPOI = poiData[currentPOIIndex];

  return (
    <section className={`poi-showcase-section ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Precision Mapping Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertly curated POI datasets with verified coordinates, enriched metadata, 
            and comprehensive business intelligence for India's major cities.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Globe Section */}
          <div className="relative">
            <div className="globe-container">
              <Globe
                ref={globeEl}
                width={500}
                height={500}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundColor="rgba(0,0,0,0)"
                
                // Custom HTML markers
                htmlElementsData={[currentPOI]}
                htmlLat="lat"
                htmlLng="lng"
                htmlAltitude={0.01}
                htmlElement={() => {
                  const el = document.createElement('div');
                  el.innerHTML = `
                    <div class="modern-marker">
                      <div class="marker-dot"></div>
                      <div class="marker-ring"></div>
                      <div class="marker-pulse"></div>
                    </div>
                  `;
                  el.style.pointerEvents = 'none';
                  return el;
                }}
                
                // Disable interactions - correct properties for react-globe.gl
                enablePointerInteraction={false}
                
                // Atmosphere
                atmosphereColor="#667eea"
                atmosphereAltitude={0.12}
                
                // Auto-rotate
                autoRotate={true}
                autoRotateSpeed={0.3}
                
                // Additional controls to disable interaction
                onGlobeReady={() => {
                  if (globeEl.current) {
                    // Disable controls after globe is ready
                    globeEl.current.controls().enabled = false;
                    globeEl.current.controls().enableZoom = false;
                    globeEl.current.controls().enablePan = false;
                    globeEl.current.controls().enableRotate = false;
                    globeEl.current.controls().enableDamping = false;
                  }
                }}
              />
              
              {/* Live indicator */}
              <div className="live-indicator">
                <div className="live-dot"></div>
                <span>Live Data</span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div className={`poi-details-card ${isTransitioning ? 'transitioning' : ''}`}>
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="category-badge">
                  {currentPOI?.category}
                </span>
                <span className="accuracy-indicator">
                  ✓ {currentPOI?.accuracy} Accurate
                </span>
              </div>

              {/* Main Info */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentPOI?.icon} {currentPOI?.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {currentPOI?.city}, {currentPOI?.country}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {currentPOI?.description}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">
                    {currentPOI?.dataPoints}
                  </div>
                  <div className="text-sm text-gray-600">Data Points</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">
                    {currentPOI?.accuracy}
                  </div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">24h</div>
                  <div className="text-sm text-gray-600">Updated</div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {poiData.map((_, index) => (
                    <div 
                      key={index}
                      className={`progress-dot ${index === currentPOIIndex ? 'active' : ''}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {currentPOIIndex + 1} of {poiData.length} locations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default POIGlobe;
