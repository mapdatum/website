import React from 'react';
import { Link } from 'react-router-dom';

interface City {
  name: string;
  icon: string;
  coords: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface Stat {
  number: string;
  label: string;
  icon: string;
}

interface UseCase {
  title: string;
  description: string;
  icon: string;
  gradient: string;
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

  const features: Feature[] = [
    {
      icon: '📍',
      title: 'Precise Location Data',
      description: 'GPS-accurate coordinates and comprehensive address information for every point of interest, verified through multiple mapping sources.',
      color: '#3b82f6'
    },
    {
      icon: '🗺️',
      title: 'Multi-Source Validation',
      description: 'Cross-referenced data from OpenStreetMap, Google Places, and local surveys ensuring maximum accuracy and completeness.',
      color: '#10b981'
    },
    {
      icon: '⚡',
      title: 'API-Ready Formats',
      description: 'Structured data in JSON, CSV, GeoJSON formats with consistent schemas, ready for immediate integration into your systems.',
      color: '#f59e0b'
    }
  ];

  const stats: Stat[] = [
    { number: '10+', label: 'Cities Mapped', icon: '🏙️' },
    { number: '100K+', label: 'Data Points', icon: '📍' },
    { number: '24hrs', label: 'Response Time', icon: '⚡' },
    { number: '99%', label: 'Data Accuracy', icon: '🎯' }
  ];

  const useCases: UseCase[] = [
    {
      title: 'Business Intelligence',
      description: 'Market research, competitor analysis, and location-based insights for strategic decision making',
      icon: '📊',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'App Development',
      description: 'Location-based mobile and web applications with reliable POI data integration',
      icon: '📱',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Logistics & Delivery',
      description: 'Route optimization, service area mapping, and delivery network planning',
      icon: '🚚',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Real Estate Analytics',
      description: 'Property valuation, location scoring, and neighborhood analysis tools',
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  return (
    <div>
      {/* Geometric background */}
      <div className="geometric-bg"></div>

      {/* Enhanced Hero Section with Map Theme */}
      <section className="hero" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating map pins */}
        <div className="floating-map-pin" style={{ 
          position: 'absolute', 
          top: '15%', 
          left: '10%', 
          fontSize: '2rem',
          animation: 'float 6s ease-in-out infinite',
          opacity: 0.3,
          zIndex: 1
        }}>📍</div>
        <div className="floating-map-pin" style={{ 
          position: 'absolute', 
          top: '25%', 
          right: '15%', 
          fontSize: '1.8rem',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '-2s',
          opacity: 0.3,
          zIndex: 1
        }}>🗺️</div>
        <div className="floating-map-pin" style={{ 
          position: 'absolute', 
          bottom: '20%', 
          left: '20%', 
          fontSize: '2.2rem',
          animation: 'float 7s ease-in-out infinite',
          animationDelay: '-4s',
          opacity: 0.3,
          zIndex: 1
        }}>🌍</div>

        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ 
              fontSize: '4.5rem', 
              marginBottom: '2rem',
              filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
              animation: 'mapPinBounce 3s ease-in-out infinite'
            }} className="map-pin">🗺️</div>
            <h1 style={{ 
              color: 'white', 
              fontSize: '4rem', 
              marginBottom: '2rem',
              textShadow: '0 4px 12px rgba(0,0,0,0.6)',
              fontWeight: '900',
              letterSpacing: '-2px'
            }}>
              Discover Places with Purpose
            </h1>
            <p style={{ 
              fontSize: '1.4rem', 
              lineHeight: '1.8',
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '1rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              fontWeight: '500'
            }}>
              MapDatum delivers curated, high-quality location datasets tailored for real-world applications—starting with categorized POI data from India's major cities.
            </p>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '3.5rem',
              fontFamily: 'Courier New, monospace'
            }} className="coordinate-text">
              Structured, enriched, and ready to use. 📊 JSON | CSV | GeoJSON
            </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                to="/contact" 
                className="btn" 
                style={{ 
                  backgroundColor: 'white',
                  color: '#667eea',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  padding: '1.2rem 3rem',
                  boxShadow: '0 8px 32px rgba(255,255,255,0.3)',
                  borderRadius: '16px',
                  textTransform: 'none',
                  letterSpacing: '0px'
                }}
              >
                🚀 Get Started Today
              </Link>
              <Link 
                to="/about" 
                className="btn" 
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.4)',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  padding: '1.2rem 3rem',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  textTransform: 'none',
                  letterSpacing: '0px'
                }}
              >
                📖 Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Map Grid Background */}
      <section className="section map-grid-bg" style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
        padding: '4rem 0',
        position: 'relative'
      }}>
        <div className="container">
          <div className="grid grid-4" style={{ 
            gap: '2.5rem'
          }}>
            {stats.map((stat, index) => (
              <div key={index} className="card location-card" style={{ 
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(102, 126, 234, 0.1)',
                borderRadius: '24px',
                padding: '3rem 2rem'
              }}>
                <div style={{ 
                  fontSize: '3.5rem', 
                  marginBottom: '1.5rem',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}>{stat.icon}</div>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: '900', 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem',
                  letterSpacing: '-1px'
                }}>
                  {stat.number}
                </div>
                <p style={{ 
                  color: '#6b7280', 
                  fontWeight: '600', 
                  margin: 0,
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section with Coordinates */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '3.5rem', color: '#1f2937' }}>📍 Currently Covering Top Indian Cities</h2>
            <p style={{ fontSize: '1.3rem', color: '#6b7280' }}>
              Comprehensive location data covering major metropolitan areas with precise coordinates
            </p>
          </div>
          
          <div className="cities-grid" style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.5rem',
            margin: '4rem 0'
          }}>
            {cities.map((city, index) => (
              <div key={index} className="card location-card" style={{
                textAlign: 'center',
                background: index % 3 === 0 
                  ? 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
                  : index % 3 === 1
                  ? 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
                  : 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
                border: 'none',
                borderRadius: '24px',
                padding: '2rem 1rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: '1rem',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}>{city.icon}</div>
                <h3 style={{ 
                  color: '#1f2937', 
                  margin: '0 0 0.5rem 0', 
                  fontWeight: '700',
                  fontSize: '1.2rem'
                }}>{city.name}</h3>
                <div style={{
                  fontSize: '0.8rem',
                  fontFamily: 'Courier New, monospace',
                  color: '#6b7280',
                  background: 'rgba(255,255,255,0.7)',
                  padding: '0.3rem 0.5rem',
                  borderRadius: '6px',
                  margin: '0.5rem 0'
                }}>{city.coords}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Map Theme */}
      <section className="section data-visualization" style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative'
      }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '3.5rem', color: '#1f2937' }}>🎯 Why Choose MapDatum?</h2>
            <p style={{ fontSize: '1.3rem', color: '#6b7280' }}>
              The advantages that set us apart in location data excellence
            </p>
          </div>
          
          <div className="grid grid-3">
            {features.map((feature, index) => (
              <div key={index} className="card location-card" style={{ 
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                padding: '3rem 2rem',
                border: `3px solid ${feature.color}`,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '6px',
                  background: `linear-gradient(90deg, ${feature.color}, ${feature.color}aa)`
                }}></div>
                <div style={{ 
                  fontSize: '4rem', 
                  marginBottom: '2rem',
                  filter: `drop-shadow(0 4px 8px ${feature.color}22)`
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  color: '#1f2937', 
                  marginBottom: '1.5rem', 
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  lineHeight: '1.8', 
                  color: '#6b7280',
                  fontSize: '1.1rem'
                }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section with Perfect 2x2 Grid */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '3.5rem', color: '#1f2937' }}>🚀 Perfect for Every Use Case</h2>
            <p style={{ fontSize: '1.3rem', color: '#6b7280' }}>
              Versatile location data solutions for diverse business needs
            </p>
          </div>
          
          <div className="grid grid-4" style={{ gap: '2.5rem' }}>
            {useCases.map((useCase, index) => (
              <div key={index} className="card" style={{ 
                background: useCase.gradient,
                color: 'white',
                border: 'none',
                borderRadius: '24px',
                padding: '3rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    marginRight: '1.5rem',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {useCase.icon}
                  </div>
                  <h3 style={{ 
                    color: 'white', 
                    margin: 0, 
                    fontSize: '1.6rem',
                    fontWeight: '700'
                  }}>
                    {useCase.title}
                  </h3>
                </div>
                <p style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  lineHeight: '1.8',
                  fontSize: '1.2rem',
                  margin: 0
                }}>
                  {useCase.description}
                </p>
                
                {/* Map coordinate pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '100%',
                  height: '100%',
                  opacity: 0.1,
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                  animation: 'float 20s linear infinite'
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section data-visualization" style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative'
      }}>
        <div className="container">
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            textAlign: 'center',
            color: 'white',
            border: 'none',
            borderRadius: '32px',
            padding: '5rem 3rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              animation: 'float 30s infinite linear'
            }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ 
                fontSize: '5rem', 
                marginBottom: '2rem',
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
                animation: 'mapPinBounce 3s infinite'
              }}>📍</div>
              <h2 style={{ 
                color: 'white', 
                fontSize: '3.5rem', 
                marginBottom: '2rem',
                textShadow: '0 8px 32px rgba(0,0,0,0.3)',
                fontWeight: '900',
                letterSpacing: '-1px'
              }}>
                Ready to Map Your Success?
              </h2>
              <p style={{ 
                fontSize: '1.4rem', 
                maxWidth: '800px', 
                margin: '0 auto 3.5rem',
                color: '#e2e8f0',
                lineHeight: '1.8',
                textShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}>
                Contact us today to discuss your location data requirements and get access to our 
                comprehensive datasets. Let's build location-intelligent solutions together.
              </p>
              <Link 
                to="/contact" 
                className="btn"
                style={{ 
                  backgroundColor: 'white',
                  color: '#667eea',
                  fontWeight: '800',
                  fontSize: '1.3rem',
                  padding: '1.5rem 4rem',
                  boxShadow: '0 12px 48px rgba(255,255,255,0.3)',
                  borderRadius: '16px',
                  textTransform: 'none',
                  letterSpacing: '0px'
                }}
              >
                🗺️ Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 