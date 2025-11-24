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
    <div className="bg-[#350D36] rounded-lg p-6 border border-[#522653] hover:bg-[#3F0E40] transition-colors">
      <h3 className="text-[#D1D2D3] text-sm font-medium uppercase tracking-wide mb-4">
        Most Active Member
      </h3>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#611F69] flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            initials
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-xl mb-1 truncate">{name}</h4>
          <p className="text-[#9E9EA0] text-sm">
            <span className="text-white font-bold text-lg">{messageCount.toLocaleString()}</span>{' '}
            messages sent
          </p>
        </div>
      </div>
    </div>
  );
}

