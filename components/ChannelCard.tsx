import React from 'react';

interface ChannelCardProps {
  name: string;
  messageCount: number;
}

export default function ChannelCard({ name, messageCount }: ChannelCardProps) {
  return (
    <div className="bg-[#350D36] rounded-lg p-6 border border-[#522653] hover:bg-[#3F0E40] transition-colors">
      <h3 className="text-[#D1D2D3] text-sm font-medium uppercase tracking-wide mb-4">
        Most Active Channel
      </h3>
      <div className="flex items-center gap-3">
        <div className="text-[#9E9EA0] text-xl font-bold">#</div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-xl mb-1 truncate">{name}</h4>
          <p className="text-[#9E9EA0] text-sm">
            <span className="text-white font-bold text-lg">{messageCount.toLocaleString()}</span>{' '}
            messages
          </p>
        </div>
      </div>
    </div>
  );
}

