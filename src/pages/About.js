import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const values = [
    {
      icon: '🎯',
      title: 'Accuracy First',
      description: 'We prioritize data accuracy and validation to ensure you receive reliable, trustworthy location information.'
    },
    {
      icon: '🚀',
      title: 'Innovation Driven',
      description: 'Continuously improving our data collection and enrichment processes using cutting-edge technologies.'
    },
    {
      icon: '🤝',
      title: 'Customer Focus',
      description: 'We work closely with our clients to understand their unique requirements and deliver tailored solutions.'
    },
    {
      icon: '🌍',
      title: 'Global Vision',
      description: 'Starting locally, thinking globally. Our goal is to provide comprehensive location data worldwide.'
    }
  ];

  const capabilities = [
    'Business listings and commercial establishments',
    'Educational institutions and training centers',
    'Healthcare facilities and medical services',
    'Retail locations and shopping centers',
    'Hospitality and entertainment venues',
    'Transportation and infrastructure',
    'Government and public services',
    'Financial institutions and services'
  ];

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>About MapDatum</h1>
          <p>Building the future of location intelligence through curated, high-quality data solutions.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 style={{ color: '#1f2937', marginBottom: '1.5rem' }}>Our Mission</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                MapDatum specializes in providing high-quality, curated location datasets for businesses, 
                developers, and organizations. We believe that accurate, comprehensive location data is 
                the foundation for informed decision-making in today's digital world.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                Our team carefully sources, validates, and enriches data from multiple reliable platforms 
                to ensure you receive the most comprehensive and up-to-date location intelligence available.
              </p>
            </div>
            
            <div className="card" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none' }}>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
                <h3 style={{ color: 'white', marginBottom: '1rem' }}>10+ Cities</h3>
                <p style={{ color: '#e2e8f0', fontSize: '1.1rem' }}>
                  Currently covering major metropolitan areas with plans for rapid global expansion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-2">
            {values.map((value, index) => (
              <div key={index} className="card" style={{ 
                textAlign: 'center', 
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: '#1f2937', marginBottom: '2rem' }}>What We Cover</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#6b7280' }}>
                Our datasets encompass a comprehensive range of location types across multiple categories:
              </p>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {capabilities.map((item, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    padding: '0.75rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <span style={{ 
                      color: '#10b981', 
                      fontWeight: 'bold', 
                      marginRight: '0.75rem',
                      fontSize: '1.1rem'
                    }}>✓</span>
                    <span style={{ color: '#374151', fontWeight: '500' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', border: 'none' }}>
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🗺️</div>
                <h3 style={{ color: '#1f2937', marginBottom: '1rem', fontSize: '1.5rem' }}>
                  Comprehensive Coverage
                </h3>
                <p style={{ color: '#6b7280', fontSize: '1.1rem', lineHeight: '1.7' }}>
                  From local businesses to major institutions, our data covers the full spectrum 
                  of location types that matter to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="section" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Approach to Data Quality</h2>
            <p>How we ensure the highest standards of accuracy and reliability</p>
          </div>
          
          <div className="grid grid-3">
            <div className="card" style={{ textAlign: 'center', border: '2px solid #3b82f6' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ color: '#1f2937' }}>Source Verification</h3>
              <p>
                We carefully select and verify data from multiple trusted mapping platforms 
                and authoritative sources.
              </p>
            </div>
            
            <div className="card" style={{ textAlign: 'center', border: '2px solid #10b981' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ color: '#1f2937' }}>Data Enrichment</h3>
              <p>
                Our team adds value through validation, categorization, and enrichment 
                processes to provide clean, structured datasets.
              </p>
            </div>

            <div className="card" style={{ textAlign: 'center', border: '2px solid #f59e0b' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔄</div>
              <h3 style={{ color: '#1f2937' }}>Continuous Updates</h3>
              <p>
                Regular monitoring and updates ensure our data remains current and 
                reflects real-world changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            textAlign: 'center',
            color: 'white',
            border: 'none',
            padding: '3rem 2rem'
          }}>
            <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Work With Us?</h2>
            <p style={{ 
              fontSize: '1.2rem', 
              maxWidth: '600px', 
              margin: '0 auto 2rem',
              color: '#e2e8f0',
              lineHeight: '1.6'
            }}>
              Whether you're building an application, conducting market research, or need location 
              intelligence for your business, we're here to help with your data requirements.
            </p>
            <Link 
              to="/contact" 
              className="btn" 
              style={{ 
                backgroundColor: 'white',
                color: '#667eea',
                fontWeight: '600',
                fontSize: '1.1rem',
                padding: '1rem 2rem'
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 