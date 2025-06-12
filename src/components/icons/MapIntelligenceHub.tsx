import React from 'react';

export const MapIntelligenceHub = () => (
  <svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="activeArea" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1147F1" stopOpacity="0.1" />
        <stop offset="50%" stopColor="#1147F1" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#1147F1" stopOpacity="0.1" />
      </linearGradient>
    </defs>

    {/* India Map Outline - Simplified for illustration */}
    <path 
      d="M400 80 L450 100 L480 150 L500 200 L480 250 L450 300 L400 320 L350 300 L320 250 L300 200 L320 150 L350 100 Z" 
      stroke="#1147F1" 
      strokeWidth="2"
      fill="url(#activeArea)"
      className="animate-pulse-slow"
    />

    {/* Major Cities */}
    {[
      { name: "Delhi", x: 400, y: 150, size: "large" },
      { name: "Mumbai", x: 350, y: 250, size: "large" },
      { name: "Bangalore", x: 380, y: 280, size: "large" },
      { name: "Hyderabad", x: 390, y: 260, size: "large" },
      { name: "Chennai", x: 410, y: 290, size: "large" },
      { name: "Kolkata", x: 460, y: 200, size: "large" },
      // Tier 2 cities
      { name: "Pune", x: 360, y: 240, size: "medium" },
      { name: "Ahmedabad", x: 340, y: 200, size: "medium" },
      { name: "Jaipur", x: 370, y: 170, size: "medium" },
    ].map((city) => (
      <g key={city.name}>
        {/* City Marker */}
        <circle 
          cx={city.x} 
          cy={city.y} 
          r={city.size === "large" ? 4 : 3}
          fill="#1147F1"
        />
        {/* Pulse Effect */}
        <circle 
          cx={city.x} 
          cy={city.y} 
          r={city.size === "large" ? 8 : 6}
          fill="#1147F1"
          fillOpacity="0.2"
          className="animate-ping"
        />
        {/* City Name */}
        <text
          x={city.x + 10}
          y={city.y + 5}
          fill="#1147F1"
          fontSize={city.size === "large" ? "12" : "10"}
          className="font-medium"
        >
          {city.name}
        </text>
      </g>
    ))}

    {/* Live Data Indicators */}
    <g className="animate-pulse">
      {[
        { label: "500K+ POIs", x: 200, y: 100 },
        { label: "15+ Cities", x: 200, y: 150 },
        { label: "99.9% Accuracy", x: 200, y: 200 },
        { label: "24h Updates", x: 200, y: 250 },
      ].map((stat, i) => (
        <g key={i}>
          <line 
            x1={stat.x - 20} 
            y1={stat.y} 
            x2={stat.x - 5} 
            y2={stat.y} 
            stroke="#1147F1" 
            strokeWidth="2"
          />
          <text
            x={stat.x}
            y={stat.y + 5}
            fill="#1147F1"
            fontSize="14"
            className="font-semibold"
          >
            {stat.label}
          </text>
        </g>
      ))}
    </g>

    {/* Category Coverage */}
    <g>
      {[
        "Retail", "Finance", "Healthcare", "Education",
        "Transport", "Government", "Entertainment"
      ].map((category, i) => (
        <g key={category} transform={`translate(600, ${100 + i * 40})`}>
          <circle 
            cx="0" 
            cy="0" 
            r="4" 
            fill="#1147F1" 
          />
          <text
            x="15"
            y="5"
            fill="#1147F1"
            fontSize="14"
            className="font-medium"
          >
            {category}
          </text>
          {/* Connection Line */}
          <path
            d={`M-20 0 C-50 0, -100 ${-50 + i * 15}, -150 ${-50 + i * 15}`}
            stroke="#1147F1"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="animate-draw"
          />
        </g>
      ))}
    </g>

    {/* Active Area Indicators */}
    <g className="animate-pulse">
      {[...Array(5)].map((_, i) => (
        <circle
          key={i}
          cx={400}
          cy={200}
          r={50 + i * 30}
          stroke="#1147F1"
          strokeWidth="0.5"
          strokeDasharray="4 4"
          fill="none"
        />
      ))}
    </g>
  </svg>
);

// Add these new animations to your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'draw': 'draw 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        draw: {
          '0%': { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 },
        },
      },
    },
  },
}; 