import React from 'react';

interface MemberCardProps {
  name: string;
  messageCount: number;
  avatar?: string;
}

export default function MemberCard({ name, messageCount, avatar }: MemberCardProps) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="bg-[#2C2D30] rounded-[8px] p-5 border border-[#3D3E42] hover:bg-[#323338] hover:border-[#4A4C52] transition-all duration-150">
      <h3 className="text-[#9E9EA0] text-[13px] font-medium uppercase tracking-[0.5px] mb-4">
        Most Active Member
      </h3>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-[4px] bg-[#1264A3] flex items-center justify-center text-white font-semibold text-[15px] flex-shrink-0 shadow-sm">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full rounded-[4px] object-cover" />
          ) : (
            initials
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-[15px] mb-1 truncate leading-tight">{name}</h4>
          <p className="text-[#9E9EA0] text-[15px] font-normal">
            <span className="text-white font-bold text-[18px]">{messageCount.toLocaleString()}</span>{' '}
            messages sent
          </p>
        </div>
      </div>
    </div>
  );
}

