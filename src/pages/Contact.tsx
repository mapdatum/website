import React from 'react';

interface ContactMethod {
  icon: string;
  title: string;
  description: string;
  detail: string;
  note: string;
}

interface Guideline {
  icon: string;
  title: string;
  items: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

const Contact: React.FC = () => {
  const contactMethods: ContactMethod[] = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us a detailed message about your requirements',
      detail: 'hello@mapdatum.com',
      note: 'We typically respond within 24 hours'
    },
    {
      icon: '💬',
      title: 'Schedule a Call',
      description: 'Book a consultation to discuss your needs',
      detail: 'Available weekdays 9 AM - 6 PM IST',
      note: 'Perfect for complex requirements'
    },
    {
      icon: '📄',
      title: 'Request Proposal',
      description: 'Get a detailed proposal for your project',
      detail: 'Custom solutions and pricing',
      note: 'Ideal for enterprise clients'
    }
  ];

  const guidelines: Guideline[] = [
    {
      icon: '🏙️',
      title: 'Geographic Scope',
      items: ['Which cities or regions you need', 'Specific areas or neighborhoods', 'Coverage radius requirements']
    },
    {
      icon: '📍',
      title: 'Data Categories',
      items: ['Types of locations you need', 'Business categories of interest', 'Specific attributes required']
    },
    {
      icon: '🔧',
      title: 'Technical Requirements',
      items: ['Preferred data formats', 'Integration specifications', 'Update frequency needs']
    },
    {
      icon: '📅',
      title: 'Project Details',
      items: ['Timeline and deadlines', 'Budget considerations', 'Volume requirements']
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'What data formats do you provide?',
      answer: 'We provide data in multiple formats including CSV, JSON, GeoJSON, XML, and can accommodate custom formats upon request. All data comes with comprehensive documentation.'
    },
    {
      question: 'How current is your location data?',
      answer: 'Our data is continuously updated through automated processes and manual verification. Update frequency varies by location type and customer requirements.'
    },
    {
      question: 'Can you provide data for specific areas?',
      answer: 'Yes, we can provide data for specific districts, neighborhoods, custom geographic boundaries, or radius-based selections within our covered areas.'
    },
    {
      question: 'Do you offer custom data solutions?',
      answer: 'Absolutely. We specialize in creating custom datasets tailored to specific business requirements, including unique categorizations and data enrichment.'
    },
    {
      question: 'What is your typical delivery timeframe?',
      answer: 'Standard datasets are usually delivered within 3-5 business days. Custom data solutions may take 1-2 weeks depending on complexity and scope.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer various support levels including data updates, technical assistance, and consultation on best practices for data usage.'
    }
  ];

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, isEntering: boolean): void => {
    const target = e.currentTarget;
    if (isEntering) {
      target.style.transform = 'translateY(-5px)';
      target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
      target.style.borderColor = '#3b82f6';
    } else {
      target.style.transform = 'translateY(0)';
      target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
      target.style.borderColor = '#e5e7eb';
    }
  };

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
          }}>Get In Touch</h1>
          <p style={{ 
            fontSize: '1.4rem', 
            maxWidth: '700px', 
            margin: '0 auto',
            color: 'rgba(255,255,255,0.95)',
            textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            fontWeight: '500'
          }}>
            Ready to leverage high-quality location data for your business? Let's discuss your requirements.
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>How to Reach Us</h2>
            <p>Choose the best way to start the conversation</p>
          </div>
          
          <div className="grid grid-3">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className="card" 
                style={{ 
                  textAlign: 'center',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  border: '2px solid #e5e7eb'
                }}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{method.icon}</div>
                <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>{method.title}</h3>
                <p style={{ marginBottom: '1rem', color: '#6b7280' }}>{method.description}</p>
                <div style={{ 
                  backgroundColor: '#f8fafc', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  marginBottom: '0.5rem'
                }}>
                  <strong style={{ color: '#374151' }}>{method.detail}</strong>
                </div>
                <small style={{ color: '#9ca3af', fontStyle: 'italic' }}>{method.note}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="section" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div className="section-title">
            <h2>What to Include in Your Inquiry</h2>
            <p>Help us understand your needs better by providing these details</p>
          </div>
          
          <div className="grid grid-2">
            {guidelines.map((guideline, index) => (
              <div key={index} className="card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ 
                    fontSize: '2rem', 
                    marginRight: '1rem',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#3b82f6',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {guideline.icon}
                  </div>
                  <h3 style={{ color: '#1f2937', margin: 0 }}>{guideline.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {guideline.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={{ 
                      padding: '0.5rem 0',
                      color: '#6b7280',
                      borderBottom: itemIndex < guideline.items.length - 1 ? '1px solid #f3f4f6' : 'none',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{ 
                        color: '#10b981', 
                        marginRight: '0.75rem',
                        fontWeight: 'bold'
                      }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            textAlign: 'center',
            border: 'none',
            padding: '3rem 2rem'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Quick Response Guarantee</h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#d1fae5',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              We understand that time is crucial for your projects. Our team typically responds to all 
              inquiries within 24 hours during business days, often much sooner.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our services</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="card" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ 
                  color: '#1f2937', 
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ 
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    marginRight: '1rem'
                  }}>
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p style={{ 
                  marginLeft: '2.5rem',
                  lineHeight: '1.7',
                  color: '#6b7280'
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            textAlign: 'center',
            color: 'white',
            border: 'none',
            padding: '3rem 2rem'
          }}>
            <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>
              Still Have Questions?
            </h2>
            <p style={{ 
              fontSize: '1.2rem',
              color: '#e2e8f0',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: '1.6'
            }}>
              Don't hesitate to reach out. We're here to help you find the perfect location data 
              solution for your specific needs.
            </p>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
              📧 hello@mapdatum.com
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 