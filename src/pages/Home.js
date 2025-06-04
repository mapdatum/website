import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const cities = [
    { name: 'Mumbai', icon: '🏙️' },
    { name: 'Delhi', icon: '🏛️' },
    { name: 'Bangalore', icon: '💻' },
    { name: 'Hyderabad', icon: '🌆' },
    { name: 'Chennai', icon: '🏖️' },
    { name: 'Kolkata', icon: '🎭' },
    { name: 'Pune', icon: '🎓' },
    { name: 'Ahmedabad', icon: '🏭' },
    { name: 'Jaipur', icon: '🏰' },
    { name: 'Surat', icon: '💎' }
  ];

  const features = [
    {
      icon: '🎯',
      title: 'High-Quality Location Data',
      description: 'Comprehensive datasets covering various location types including businesses, services, and points of interest across major metropolitan areas.',
      color: '#3b82f6'
    },
    {
      icon: '🚀',
      title: 'Reliable Data Sources',
      description: 'Sourced and enriched from trusted mapping platforms, ensuring accuracy and up-to-date information for your projects.',
      color: '#10b981'
    },
    {
      icon: '⚡',
      title: 'Ready-to-Use Format',
      description: 'Clean, structured data in multiple formats ready for integration into your applications and business intelligence systems.',
      color: '#f59e0b'
    }
  ];

  const stats = [
    { number: '10+', label: 'Cities Covered', icon: '🏙️' },
    { number: '50K+', label: 'Data Points', icon: '📍' },
    { number: '24hrs', label: 'Response Time', icon: '⚡' },
    { number: '99%', label: 'Data Accuracy', icon: '🎯' }
  ];

  const useCases = [
    {
      title: 'Business Intelligence',
      description: 'Market research and competitive analysis',
      icon: '📊',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'App Development',
      description: 'Location-based mobile and web applications',
      icon: '📱',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Logistics & Delivery',
      description: 'Route optimization and service area mapping',
      icon: '🚚',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Real Estate',
      description: 'Property valuation and location scoring',
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #43e97b 100%)'
    }
  ];

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="hero" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '5rem 0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🗺️</div>
            <h1 style={{ 
              color: 'white', 
              fontSize: '3.5rem', 
              marginBottom: '1.5rem',
              textShadow: '0 4px 6px rgba(0,0,0,0.3)'
            }}>
              Curated Location Data Solutions
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              lineHeight: '1.7',
              color: '#e2e8f0',
              marginBottom: '3rem'
            }}>
              MapDatum provides high-quality, curated location datasets for major cities. 
              Our comprehensive data includes businesses, services, facilities, and key locations—all 
              sourced and enriched from reliable mapping platforms.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                to="/contact" 
                className="btn" 
                style={{ 
                  backgroundColor: 'white',
                  color: '#667eea',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  padding: '1rem 2.5rem',
                  boxShadow: '0 4px 15px rgba(255,255,255,0.3)'
                }}
              >
                Get Started
              </Link>
              <Link 
                to="/about" 
                className="btn" 
                style={{ 
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  padding: '1rem 2.5rem'
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ backgroundColor: '#f9fafb', padding: '3rem 0' }}>
        <div className="container">
          <div className="grid" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {stats.map((stat, index) => (
              <div key={index} className="card" style={{ 
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default',
                border: '2px solid #e5e7eb'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px)';
                e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                e.target.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
                e.target.style.borderColor = '#e5e7eb';
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{stat.icon}</div>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <p style={{ color: '#6b7280', fontWeight: '500', margin: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5rem', color: '#1f2937' }}>Currently Covering Top Indian Cities</h2>
            <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>
              Comprehensive location data covering major metropolitan areas
            </p>
          </div>
          
          <div className="cities-grid" style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            margin: '3rem 0'
          }}>
            {cities.map((city, index) => (
              <div key={index} className="card" style={{
                textAlign: 'center',
                background: index % 2 === 0 
                  ? 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
                  : 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                border: 'none',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{city.icon}</div>
                <h3 style={{ color: '#1f2937', margin: 0, fontWeight: '600' }}>{city.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5rem', color: '#1f2937' }}>Why Choose MapDatum?</h2>
            <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>
              The advantages that set us apart in location data excellence
            </p>
          </div>
          
          <div className="grid grid-3">
            {features.map((feature, index) => (
              <div key={index} className="card" style={{ 
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                border: `3px solid ${feature.color}`,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px)';
                e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  backgroundColor: feature.color
                }}></div>
                <div style={{ 
                  fontSize: '3.5rem', 
                  marginBottom: '1.5rem',
                  filter: `hue-rotate(${index * 120}deg)`
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ color: '#1f2937', marginBottom: '1rem', fontSize: '1.4rem' }}>
                  {feature.title}
                </h3>
                <p style={{ lineHeight: '1.7', color: '#6b7280' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5rem', color: '#1f2937' }}>Perfect for Every Use Case</h2>
            <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>
              Versatile data solutions for diverse business needs
            </p>
          </div>
          
          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {useCases.map((useCase, index) => (
              <div key={index} className="card" style={{ 
                background: useCase.gradient,
                color: 'white',
                border: 'none',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    marginRight: '1rem',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {useCase.icon}
                  </div>
                  <h3 style={{ color: 'white', margin: 0, fontSize: '1.4rem' }}>
                    {useCase.title}
                  </h3>
                </div>
                <p style={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  lineHeight: '1.6',
                  fontSize: '1.1rem',
                  margin: 0
                }}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            textAlign: 'center',
            color: 'white',
            border: 'none',
            padding: '4rem 2rem',
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
              backgroundSize: '20px 20px',
              animation: 'float 20s infinite linear'
            }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🚀</div>
              <h2 style={{ 
                color: 'white', 
                fontSize: '3rem', 
                marginBottom: '1.5rem',
                textShadow: '0 4px 6px rgba(0,0,0,0.3)'
              }}>
                Ready to Get Started?
              </h2>
              <p style={{ 
                fontSize: '1.3rem', 
                maxWidth: '700px', 
                margin: '0 auto 3rem',
                color: '#e2e8f0',
                lineHeight: '1.7'
              }}>
                Contact us today to discuss your location data requirements and get access to our 
                comprehensive datasets. Let's build something amazing together.
              </p>
              <Link 
                to="/contact" 
                className="btn"
                style={{ 
                  backgroundColor: 'white',
                  color: '#667eea',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  padding: '1.2rem 3rem',
                  boxShadow: '0 8px 25px rgba(255,255,255,0.3)',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(255,255,255,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255,255,255,0.3)';
                }}
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 