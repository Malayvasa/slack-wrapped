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
    <div className={`bg-[#2C2D30] rounded-[8px] p-5 border border-[#3D3E42] hover:bg-[#323338] hover:border-[#4A4C52] transition-all duration-150 ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-[#D1D2D3] text-[13px] font-medium uppercase tracking-[0.5px] text-[#9E9EA0]">
          {title}
        </h3>
        {icon && <div className="text-[#9E9EA0] opacity-80">{icon}</div>}
      </div>
      <div className="text-[36px] md:text-[42px] font-bold text-white mb-1 leading-none tracking-tight">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      {subtitle && (
        <p className="text-[#9E9EA0] text-[15px] mt-2 font-normal leading-normal">{subtitle}</p>
      )}
    </div>
  );
}

