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
      <section className="hero" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '6rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: '4rem', 
            marginBottom: '1.5rem',
            color: 'white',
            textShadow: '0 4px 12px rgba(0,0,0,0.6)',
            fontWeight: '900'
          }}>About MapDatum</h1>
          <p style={{ 
            fontSize: '1.4rem', 
            maxWidth: '700px', 
            margin: '0 auto',
            color: 'rgba(255,255,255,0.95)',
            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            fontWeight: '500'
          }}>
            Building the future of location intelligence through curated, high-quality data solutions.
          </p>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '3.5rem', color: '#1f2937' }}>🎯 Our Mission</h2>
            <p style={{ fontSize: '1.3rem', color: '#6b7280' }}>
              Empowering businesses with precise location intelligence
            </p>
          </div>
          
          <div className="grid grid-2" style={{ alignItems: 'stretch', gap: '4rem' }}>
            <div className="card" style={{ 
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: 'none',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '2rem',
                padding: '1rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '16px',
                color: 'white'
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  marginRight: '1rem'
                }}>🎯</div>
                <div>
                  <h3 style={{ 
                    color: 'white', 
                    margin: '0 0 0.5rem 0',
                    fontSize: '1.3rem'
                  }}>Our Vision</h3>
                  <p style={{ 
                    color: 'rgba(255,255,255,0.9)', 
                    margin: 0,
                    fontSize: '0.9rem'
                  }}>Transforming decision making</p>
                </div>
              </div>
              
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#374151' }}>
                  We envision a world where every business decision is powered by accurate, comprehensive location intelligence. Our mission is to democratize access to high-quality geospatial data.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#6b7280', marginBottom: '2rem' }}>
                  By bridging the gap between raw mapping data and actionable business insights, we enable organizations to make informed decisions that drive growth and innovation.
                </p>
                
                {/* Core Values */}
                <div style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                  padding: '1.5rem',
                  borderRadius: '12px'
                }}>
                  <h4 style={{ 
                    color: '#1f2937', 
                    marginBottom: '1rem',
                    fontSize: '1.1rem',
                    fontWeight: '700'
                  }}>Our Core Values</h4>
                  <div style={{ display: 'grid', gap: '0.8rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: '0.8rem', fontSize: '1.2rem' }}>✨</span>
                      <span style={{ color: '#374151', fontSize: '0.95rem' }}>Quality over quantity in every dataset</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: '0.8rem', fontSize: '1.2rem' }}>🤝</span>
                      <span style={{ color: '#374151', fontSize: '0.95rem' }}>Partnership-driven approach with clients</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: '0.8rem', fontSize: '1.2rem' }}>🚀</span>
                      <span style={{ color: '#374151', fontSize: '0.95rem' }}>Continuous innovation in data solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card location-card" style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
              color: 'white', 
              border: 'none',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Floating map elements */}
              <div style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                fontSize: '2rem',
                opacity: 0.2,
                animation: 'float 6s ease-in-out infinite'
              }}>📍</div>
              <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '15%',
                fontSize: '1.5rem',
                opacity: 0.2,
                animation: 'float 8s ease-in-out infinite',
                animationDelay: '-3s'
              }}>🌍</div>
              
              <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '2rem',
                  padding: '1rem',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    marginRight: '1rem'
                  }}>🗺️</div>
                  <div>
                    <h3 style={{ 
                      color: 'white', 
                      margin: '0 0 0.5rem 0',
                      fontSize: '1.3rem'
                    }}>Our Approach</h3>
                    <p style={{ 
                      color: 'rgba(255,255,255,0.9)', 
                      margin: 0,
                      fontSize: '0.9rem'
                    }}>Data-driven methodology</p>
                  </div>
                </div>
                
                <p style={{ 
                  color: 'rgba(255,255,255,0.95)', 
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  marginBottom: '2rem'
                }}>
                  We follow a rigorous process that combines automated data collection with human verification, ensuring each dataset meets our high standards for accuracy and completeness.
                </p>
                
                {/* Process Steps */}
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    color: 'white', 
                    marginBottom: '1.5rem',
                    fontSize: '1.1rem',
                    fontWeight: '700'
                  }}>Our Process</h4>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    <div style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '1rem',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ 
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '50%',
                          width: '24px',
                          height: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '0.8rem',
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}>1</span>
                        <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>Source & Aggregate</span>
                      </div>
                      <p style={{ 
                        color: 'rgba(255,255,255,0.8)', 
                        fontSize: '0.85rem',
                        margin: 0,
                        paddingLeft: '2rem'
                      }}>
                        Collect from multiple trusted platforms
                      </p>
                    </div>
                    
                    <div style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '1rem',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ 
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '50%',
                          width: '24px',
                          height: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '0.8rem',
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}>2</span>
                        <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>Validate & Enrich</span>
                      </div>
                      <p style={{ 
                        color: 'rgba(255,255,255,0.8)', 
                        fontSize: '0.85rem',
                        margin: 0,
                        paddingLeft: '2rem'
                      }}>
                        Clean, verify, and enhance data quality
                      </p>
                    </div>
                    
                    <div style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '1rem',
                      borderRadius: '12px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ 
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '50%',
                          width: '24px',
                          height: '24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '0.8rem',
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}>3</span>
                        <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>Package & Deliver</span>
                      </div>
                      <p style={{ 
                        color: 'rgba(255,255,255,0.8)', 
                        fontSize: '0.85rem',
                        margin: 0,
                        paddingLeft: '2rem'
                      }}>
                        Format for easy integration and use
                      </p>
                    </div>
                  </div>
                </div>
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

      {/* Enhanced What We Cover Section */}
      <section className="section data-visualization" style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative'
      }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '3.5rem', color: '#1f2937' }}>🗺️ What We Cover</h2>
            <p style={{ fontSize: '1.3rem', color: '#6b7280' }}>
              Comprehensive location data across diverse business categories
            </p>
          </div>
          
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'stretch' }}>
            <div className="card" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: 'none',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '2rem',
                padding: '1rem',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                borderRadius: '16px',
                color: 'white'
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  marginRight: '1rem'
                }}>📊</div>
                <div>
                  <h3 style={{ 
                    color: 'white', 
                    margin: '0 0 0.5rem 0',
                    fontSize: '1.3rem'
                  }}>Data Categories</h3>
                  <p style={{ 
                    color: 'rgba(255,255,255,0.9)', 
                    margin: 0,
                    fontSize: '0.9rem'
                  }}>8 major business sectors</p>
                </div>
              </div>
              
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#6b7280' }}>
                  Our datasets encompass a comprehensive range of location types across multiple categories:
                </p>
                
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {capabilities.slice(0, 4).map((item, index) => (
                    <div key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      padding: '1rem',
                      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                      borderRadius: '12px',
                      border: '1px solid rgba(102, 126, 234, 0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateX(10px)';
                      e.target.style.borderColor = '#667eea';
                      e.target.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateX(0)';
                      e.target.style.borderColor = 'rgba(102, 126, 234, 0.1)';
                      e.target.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)';
                    }}>
                      <div style={{ 
                        width: '12px',
                        height: '12px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '50%',
                        marginRight: '1rem',
                        flexShrink: 0
                      }}></div>
                      <span style={{ 
                        color: '#374151', 
                        fontWeight: '500',
                        fontSize: '1rem'
                      }}>{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* Additional categories */}
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
                  borderRadius: '12px',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}>
                  <h4 style={{ 
                    color: '#1f2937', 
                    marginBottom: '1rem',
                    fontSize: '1rem',
                    fontWeight: '700'
                  }}>Additional Categories</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.8rem' }}>
                    {capabilities.slice(4).map((item, index) => (
                      <div key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        fontSize: '0.9rem',
                        color: '#374151'
                      }}>
                        <span style={{ 
                          color: '#10b981', 
                          marginRight: '0.5rem',
                          fontSize: '0.8rem'
                        }}>•</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="card location-card" style={{ 
              background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', 
              border: 'none',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Map grid pattern overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 
                  'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.3,
                pointerEvents: 'none'
              }}></div>
              
              <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '2rem',
                  padding: '1rem',
                  background: 'rgba(255,255,255,0.7)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    marginRight: '1rem'
                  }}>🗺️</div>
                  <div>
                    <h3 style={{ 
                      color: '#1f2937', 
                      margin: '0 0 0.5rem 0',
                      fontSize: '1.3rem'
                    }}>Coverage Areas</h3>
                    <p style={{ 
                      color: '#6b7280', 
                      margin: 0,
                      fontSize: '0.9rem'
                    }}>Comprehensive geographic reach</p>
                  </div>
                </div>
                
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: '1.1rem', 
                  lineHeight: '1.7',
                  marginBottom: '2rem'
                }}>
                  From local businesses to major institutions, our data covers the full spectrum 
                  of location types that matter to your business.
                </p>
                
                {/* Geographic Coverage */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    color: '#1f2937', 
                    marginBottom: '1rem',
                    fontSize: '1.1rem',
                    fontWeight: '700'
                  }}>Geographic Scope</h4>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    <div style={{
                      background: 'rgba(255,255,255,0.7)',
                      padding: '1rem',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>🏙️</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#1f2937', fontSize: '0.95rem' }}>Metropolitan Areas</div>
                        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Major urban centers with high POI density</div>
                      </div>
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.7)',
                      padding: '1rem',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>🏘️</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#1f2937', fontSize: '0.95rem' }}>Suburban Regions</div>
                        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Residential and commercial districts</div>
                      </div>
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.7)',
                      padding: '1rem',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>🛣️</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#1f2937', fontSize: '0.95rem' }}>Transit Corridors</div>
                        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Transportation hubs and routes</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Data Quality Metrics */}
                <div style={{
                  background: 'rgba(255,255,255,0.7)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{ 
                    color: '#1f2937', 
                    marginBottom: '1rem',
                    fontSize: '1rem',
                    fontWeight: '700'
                  }}>Quality Assurance</h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: '900', 
                        color: '#667eea',
                        marginBottom: '0.3rem'
                      }}>99%</div>
                      <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Accuracy Rate</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: '900', 
                        color: '#667eea',
                        marginBottom: '0.3rem'
                      }}>24h</div>
                      <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Update Cycle</div>
                    </div>
                  </div>
                </div>
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