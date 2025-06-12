import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <section className="relative" style={{padding: 0}}>
      {/* Section Separator - Top Wave */}
      <div className="absolute top-100 left-0 right-0 h-20 overflow-hidden -translate-y-1" style={{zIndex: 1000}}>
        <svg
          viewBox="0 0 2880 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full`}
          style={{color: isPrimary ? '#1e40af' : '#1e40af'}}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Main Section Content */}
      <div className={`relative pt-32 pb-24 ${
        isPrimary 
          ? 'bg-gradient-to-br from-primary-50 via-white to-blue-50'
          : 'bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900'
      }`}>
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-primary-200/40 mix-blend-multiply blur-3xl animate-blob" />
          <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-blue-200/40 mix-blend-multiply blur-3xl animate-blob animation-delay-2000" />
          
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, ${isPrimary ? '#4F46E5' : '#fff'} 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Badge */}
            <div className={`inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium mb-8 ${
              isPrimary 
                ? 'bg-white shadow-md shadow-primary-100/50 text-primary-700' 
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
            }`}>
              <div className={`w-2 h-2 rounded-full mr-2 ${
                isPrimary ? 'bg-primary-500 animate-pulse' : 'bg-green-400 animate-pulse'
              }`} />
              Built with advanced data science for Indian markets
            </div>
            
            {/* Title */}
            <h2 className={`text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight ${
              isPrimary ? 'text-gray-900' : 'text-white'
            }`}>
              {title}
            </h2>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
                isPrimary ? 'text-gray-600' : 'text-blue-100'
              }`}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          {features && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center p-6 rounded-2xl transition-all duration-300 ${
                    isPrimary 
                      ? 'bg-white shadow-lg hover:shadow-xl border border-gray-100' 
                      : 'bg-white/10 border border-white/20 hover:bg-white/15'
                  }`}
                >
                  <div className={`flex items-center gap-4 ${isPrimary ? 'text-gray-700' : 'text-white'}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isPrimary 
                        ? 'bg-gradient-to-br from-primary-100 to-blue-100'
                        : 'bg-white/20'
                    }`}>
                      <svg className={`w-6 h-6 ${
                        isPrimary ? 'text-primary-600' : 'text-white'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium">{feature}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary Button */}
            {primaryButton.type === 'external' ? (
              <a
                href={primaryButton.href}
                className={`group relative inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  isPrimary 
                    ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white hover:shadow-lg hover:shadow-primary-500/25'
                    : 'bg-white text-primary-900 hover:shadow-lg hover:shadow-white/25'
                }`}
              >
                <motion.span
                  initial={false}
                  animate={{ x: 0 }}
                  whileHover={{ x: -4 }}
                >
                  {primaryButton.text}
                </motion.span>
                <motion.svg
                  initial={false}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ x: 4, opacity: 1 }}
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </a>
            ) : (
              <Link
                to={primaryButton.href}
                className={`group relative inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  isPrimary 
                    ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white hover:shadow-lg hover:shadow-primary-500/25'
                    : 'bg-white text-primary-900 hover:shadow-lg hover:shadow-white/25'
                }`}
              >
                <motion.span
                  initial={false}
                  animate={{ x: 0 }}
                  whileHover={{ x: -4 }}
                >
                  {primaryButton.text}
                </motion.span>
                <motion.svg
                  initial={false}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ x: 4, opacity: 1 }}
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </Link>
            )}
            
            {/* Secondary Button */}
            {secondaryButton && (
              secondaryButton.type === 'external' ? (
                <a
                  href={secondaryButton.href}
                  className={`group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                    isPrimary 
                      ? 'bg-white border-2 border-gray-200 text-gray-600 hover:border-primary-200 hover:text-primary-600'
                      : 'border-2 border-white/30 text-white hover:bg-white/10'
                  }`}
                >
                  {secondaryButton.text}
                </a>
              ) : (
                <Link
                  to={secondaryButton.href}
                  className={`group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                    isPrimary 
                      ? 'bg-white border-2 border-gray-200 text-gray-600 hover:border-primary-200 hover:text-primary-600'
                      : 'border-2 border-white/30 text-white hover:bg-white/10'
                  }`}
                >
                  {secondaryButton.text}
                </Link>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Section Separator - Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden translate-y-1">
        <svg
          viewBox="0 0 2880 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full rotate-180`}
          style={{color: isPrimary ? '#1e40af' : '#1e40af'}}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default CTASection;