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

// Globe with POIs
export const GlobeWithPOIs = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Globe base */}
    <circle cx="80" cy="80" r="60" stroke="#1147F1" strokeWidth="2" fill="white" fillOpacity="0.1"/>
    <ellipse cx="80" cy="80" rx="60" ry="20" stroke="#1147F1" strokeWidth="2" strokeDasharray="4 4"/>
    <path d="M20 80h120" stroke="#1147F1" strokeWidth="2" strokeDasharray="4 4"/>
    <path d="M80 20v120" stroke="#1147F1" strokeWidth="2" strokeDasharray="4 4"/>
    {/* POI Markers */}
    <circle cx="100" cy="60" r="4" fill="#1147F1" className="animate-pulse"/>
    <circle cx="65" cy="95" r="4" fill="#1147F1" className="animate-pulse"/>
    <circle cx="110" cy="85" r="4" fill="#1147F1" className="animate-pulse"/>
  </svg>
);

// Search Radius
export const SearchRadius = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="80" cy="80" r="40" stroke="#1147F1" strokeWidth="2"/>
    <circle cx="80" cy="80" r="60" stroke="#1147F1" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 4"/>
    <circle cx="80" cy="80" r="20" stroke="#1147F1" strokeWidth="2" strokeOpacity="0.8"/>
    <path d="M80 60L80 100M60 80L100 80" stroke="#1147F1" strokeWidth="2"/>
  </svg>
);

// Route Optimization
export const RouteOptimization = () => (
  <svg width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="6" fill="#1147F1"/>
    <circle cx="150" cy="110" r="6" fill="#1147F1"/>
    {/* Multiple route options */}
    <path d="M30 30C70 30,110 110,150 110" stroke="#1147F1" strokeWidth="2" strokeOpacity="0.3"/>
    <path d="M30 30C70 70,110 70,150 110" stroke="#1147F1" strokeWidth="2"/>
    <path d="M30 30C70 110,110 30,150 110" stroke="#1147F1" strokeWidth="2" strokeOpacity="0.3"/>
  </svg>
);

// Heatmap
export const Heatmap = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="160" height="160" fill="url(#heatmap-gradient)"/>
    <defs>
      <radialGradient id="heatmap-gradient" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#1147F1" stopOpacity="0.8"/>
        <stop offset="50%" stopColor="#1147F1" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#1147F1" stopOpacity="0.1"/>
      </radialGradient>
    </defs>
  </svg>
);

// Cluster Analysis
export const ClusterAnalysis = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cluster 1 */}
    <circle cx="60" cy="60" r="30" fill="#1147F1" fillOpacity="0.1"/>
    <circle cx="50" cy="50" r="4" fill="#1147F1"/>
    <circle cx="60" cy="70" r="4" fill="#1147F1"/>
    <circle cx="70" cy="50" r="4" fill="#1147F1"/>
    {/* Cluster 2 */}
    <circle cx="110" cy="100" r="25" fill="#1147F1" fillOpacity="0.1"/>
    <circle cx="100" cy="90" r="4" fill="#1147F1"/>
    <circle cx="110" cy="110" r="4" fill="#1147F1"/>
    <circle cx="120" cy="95" r="4" fill="#1147F1"/>
  </svg>
);

// Data Synchronization
export const DataSync = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 80C40 55.2,60.2 35,85 35C109.8 35,130 55.2,130 80" 
          stroke="#1147F1" strokeWidth="2" className="animate-spin-slow"/>
    <path d="M130 80C130 104.8,109.8 125,85 125C60.2 125,40 104.8,40 80" 
          stroke="#1147F1" strokeWidth="2" strokeDasharray="4 4"/>
    <circle cx="40" cy="80" r="6" fill="#1147F1"/>
    <circle cx="130" cy="80" r="6" fill="#1147F1"/>
  </svg>
);

// Coverage Map
export const CoverageMap = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20h120v120h-120z" stroke="#E2E8F0" strokeWidth="1"/>
    <path d="M40 40h80v80h-80z" stroke="#E2E8F0" strokeWidth="1"/>
    <path d="M60 60h40v40h-40z" stroke="#E2E8F0" strokeWidth="1"/>
    <circle cx="80" cy="80" r="30" fill="#1147F1" fillOpacity="0.1"/>
    <circle cx="80" cy="80" r="20" fill="#1147F1" fillOpacity="0.2"/>
    <circle cx="80" cy="80" r="10" fill="#1147F1" fillOpacity="0.3"/>
  </svg>
);

// Location Timeline
export const LocationTimeline = () => (
  <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="50" x2="160" y2="50" stroke="#E2E8F0" strokeWidth="2"/>
    <circle cx="40" cy="50" r="6" fill="#1147F1"/>
    <circle cx="80" cy="50" r="6" fill="#1147F1"/>
    <circle cx="120" cy="50" r="6" fill="#1147F1"/>
    <circle cx="160" cy="50" r="6" fill="#1147F1"/>
    <path d="M40 50v-20M80 50v-30M120 50v-15M160 50v-25" stroke="#1147F1" strokeWidth="2"/>
  </svg>
);

// Geofence Alerts
export const GeofenceAlerts = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 30L130 80L80 130L30 80L80 30Z" stroke="#1147F1" strokeWidth="2"/>
    <circle cx="80" cy="80" r="8" fill="#1147F1" className="animate-ping"/>
    <path d="M80 50L80 70M80 90L80 110" stroke="#1147F1" strokeWidth="4"/>
    <circle cx="80" cy="80" r="4" fill="#1147F1"/>
  </svg>
);

// Data Quality
export const DataQuality = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 120L70 80L100 100L130 40" stroke="#1147F1" strokeWidth="2"/>
    <circle cx="70" cy="80" r="4" fill="#1147F1"/>
    <circle cx="100" cy="100" r="4" fill="#1147F1"/>
    <circle cx="130" cy="40" r="4" fill="#1147F1"/>
    <path d="M30 30L130 30M30 80L130 80M30 130L130 130" 
          stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4"/>
    <text x="140" y="35" fill="#1147F1" fontSize="12">99%</text>
    <text x="140" y="85" fill="#1147F1" fontSize="12">95%</text>
    <text x="140" y="135" fill="#1147F1" fontSize="12">90%</text>
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
        'spin-slow': 'spin 3s linear infinite',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
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