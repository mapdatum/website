import React from 'react';

// POI Marker with Pulse
export const POIMarker = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="24" fill="#1147F1" className="animate-pulse"/>
    <circle cx="60" cy="60" r="16" fill="white"/>
    <circle cx="60" cy="60" r="8" fill="#1147F1"/>
    <circle cx="60" cy="60" r="32" stroke="#1147F1" strokeWidth="2" strokeDasharray="4 4"/>
    <circle cx="60" cy="60" r="40" stroke="#1147F1" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="4 4"/>
  </svg>
);

// Data Flow Lines
export const DataFlowLines = () => (
  <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M10 50 C40 50, 60 20, 90 20 C120 20, 140 80, 170 80 L190 80" 
      stroke="#1147F1" 
      strokeWidth="2"
      className="animate-draw"
    />
    <circle cx="190" cy="80" r="4" fill="#1147F1"/>
    <circle cx="90" cy="20" r="4" fill="#1147F1"/>
    <circle cx="10" cy="50" r="4" fill="#1147F1"/>
  </svg>
);

// Location Grid
export const LocationGrid = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 0V160M80 0V160M120 0V160M0 40H160M0 80H160M0 120H160" stroke="#E2E8F0" strokeWidth="1"/>
    <circle cx="80" cy="80" r="8" fill="#1147F1"/>
    <circle cx="40" cy="120" r="6" fill="#1147F1" fillOpacity="0.6"/>
    <circle cx="120" cy="40" r="6" fill="#1147F1" fillOpacity="0.6"/>
  </svg>
);

// Geo Fence
export const GeoFence = () => (
  <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 20L120 70L70 120L20 70L70 20Z" stroke="#1147F1" strokeWidth="2"/>
    <circle cx="70" cy="70" r="30" stroke="#1147F1" strokeWidth="2" strokeDasharray="4 4"/>
    <circle cx="70" cy="70" r="8" fill="#1147F1"/>
  </svg>
);

// Data Points
export const DataPoints = () => (
  <svg width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="90" r="6" fill="#1147F1"/>
    <circle cx="60" cy="40" r="6" fill="#1147F1"/>
    <circle cx="90" cy="70" r="6" fill="#1147F1"/>
    <circle cx="120" cy="30" r="6" fill="#1147F1"/>
    <circle cx="150" cy="60" r="6" fill="#1147F1"/>
    <path d="M30 90L60 40L90 70L120 30L150 60" stroke="#1147F1" strokeWidth="1" strokeDasharray="4 4"/>
  </svg>
);

// Location Analytics
export const LocationAnalytics = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="60" width="20" height="80" rx="4" fill="#1147F1" fillOpacity="0.2"/>
    <rect x="50" y="40" width="20" height="100" rx="4" fill="#1147F1" fillOpacity="0.4"/>
    <rect x="80" y="20" width="20" height="120" rx="4" fill="#1147F1" fillOpacity="0.6"/>
    <rect x="110" y="50" width="20" height="90" rx="4" fill="#1147F1" fillOpacity="0.8"/>
    <path d="M20 40C50 40 80 80 140 20" stroke="#1147F1" strokeWidth="2"/>
  </svg>
);

// Add some animations to your tailwind.config.js
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  theme: {
    extend: {
      animation: {
        'draw': 'draw 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        draw: {
          '0%': { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 },
        },
      },
    },
  },
};