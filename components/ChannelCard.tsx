import React from 'react';

interface ChannelCardProps {
  name: string;
  messageCount: number;
}

export default function ChannelCard({ name, messageCount }: ChannelCardProps) {
  return (
    <div className="bg-[#2C2D30] rounded-[8px] p-5 border border-[#3D3E42] hover:bg-[#323338] hover:border-[#4A4C52] transition-all duration-150">
      <h3 className="text-[#9E9EA0] text-[13px] font-medium uppercase tracking-[0.5px] mb-4">
        Most Active Channel
      </h3>
      <div className="flex items-center gap-2">
        <div className="text-[#9E9EA0] text-[18px] font-semibold">#</div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-[15px] mb-1 truncate leading-tight">{name}</h4>
          <p className="text-[#9E9EA0] text-[15px] font-normal">
            <span className="text-white font-bold text-[18px]">{messageCount.toLocaleString()}</span>{' '}
            messages
          </p>
        </div>
      </div>
    </div>
  );
}

