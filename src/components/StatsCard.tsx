import React from 'react';
import { motion } from 'framer-motion';

interface StatsCardProps {
  number: string;
  label: string;
  trend: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ number, label, trend }) => (
  <div className="text-center group">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="mb-2"
    >
      <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
        {number}
      </div>
    </motion.div>
    <div className="text-gray-900 font-medium mb-2">{label}</div>
    <div className="text-sm text-primary-600 opacity-0 transform -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      {trend}
    </div>
  </div>
);

export default StatsCard;