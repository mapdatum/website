import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  variant?: 'primary' | 'secondary';
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
    type?: 'link' | 'external';
  };
  secondaryButton?: {
    text: string;
    href: string;
    type?: 'link' | 'external';
  };
  features?: string[];
}

const CTASection: React.FC<CTASectionProps> = ({
  variant = 'primary',
  title,
  description,
  primaryButton,
  secondaryButton,
  features
}) => {
  const isPrimary = variant === 'primary';

  return (
    <section className={`py-20 ${isPrimary ? 'bg-gradient-to-br from-blue-50 via-white to-purple-50' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
            isPrimary 
              ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700' 
              : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 animate-pulse ${isPrimary ? 'bg-blue-500' : 'bg-green-400'}`}></div>
            Built with advanced data science for Indian markets
          </div>
          
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 leading-tight ${
            isPrimary ? 'text-gray-900' : 'text-white'
          }`}>
            {title}
          </h2>
          
          <p className={`text-xl mb-10 max-w-3xl mx-auto leading-relaxed ${
            isPrimary ? 'text-gray-600' : 'text-blue-100'
          }`}>
            {description}
          </p>
        </div>

        {/* Features Grid */}
        {features && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className={`flex items-center justify-center p-6 rounded-xl shadow-sm transition-all duration-300 ${
                isPrimary 
                  ? 'bg-white border border-gray-100 hover:shadow-md hover:border-blue-200' 
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
              }`}>
                <div className={`flex items-center ${isPrimary ? 'text-gray-700' : 'text-white'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    isPrimary 
                      ? index === 0 ? 'bg-green-100' : 'bg-blue-100'
                      : index === 0 ? 'bg-green-500/20' : 'bg-blue-500/20'
                  }`}>
                    <svg className={`w-5 h-5 ${
                      isPrimary 
                        ? index === 0 ? 'text-green-600' : 'text-blue-600'
                        : index === 0 ? 'text-green-400' : 'text-blue-400'
                    }`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryButton.type === 'external' ? (
            <a
              href={primaryButton.href}
              className={`group relative inline-flex items-center px-8 py-4 font-semibold rounded-lg shadow-lg transition-all duration-300 ${
                isPrimary 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transform hover:-translate-y-0.5'
                  : 'bg-white text-blue-600 hover:bg-gray-50'
              }`}
            >
              <span>{primaryButton.text}</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ) : (
            <Link
              to={primaryButton.href}
              className={`group relative inline-flex items-center px-8 py-4 font-semibold rounded-lg shadow-lg transition-all duration-300 ${
                isPrimary 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transform hover:-translate-y-0.5'
                  : 'bg-white text-blue-600 hover:bg-gray-50'
              }`}
            >
              <span>{primaryButton.text}</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
          
          {secondaryButton && (
            secondaryButton.type === 'external' ? (
              <a
                href={secondaryButton.href}
                className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-300 ${
                  isPrimary 
                    ? 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                    : 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm'
                }`}
              >
                {secondaryButton.text}
              </a>
            ) : (
              <Link
                to={secondaryButton.href}
                className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-300 ${
                  isPrimary 
                    ? 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
                    : 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm'
                }`}
              >
                {secondaryButton.text}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection; 