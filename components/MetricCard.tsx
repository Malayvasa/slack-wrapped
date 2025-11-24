import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function MetricCard({ 
  title, 
  value, 
  subtitle, 
  icon,
  className = '' 
}: MetricCardProps) {
  return (
    <div className={`bg-[#350D36] rounded-lg p-6 border border-[#522653] hover:bg-[#3F0E40] transition-colors ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-[#D1D2D3] text-sm font-medium uppercase tracking-wide">
          {title}
        </h3>
        {icon && <div className="text-[#D1D2D3]">{icon}</div>}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      {subtitle && (
        <p className="text-[#9E9EA0] text-sm mt-2">{subtitle}</p>
      )}
    </div>
  );
}

