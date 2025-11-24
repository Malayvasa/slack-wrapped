import React from 'react';

interface PostCardProps {
  text: string;
  author: string;
  authorAvatar?: string;
  channel: string;
  timestamp: string;
  reactions: number;
  replies: number;
  totalEngagement: number;
}

export default function PostCard({
  text,
  author,
  authorAvatar,
  channel,
  timestamp,
  reactions,
  replies,
  totalEngagement,
}: PostCardProps) {
  const initials = author
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <div className="bg-[#2C2D30] rounded-[8px] p-5 border border-[#3D3E42] hover:bg-[#323338] hover:border-[#4A4C52] transition-all duration-150">
      <h3 className="text-[#9E9EA0] text-[13px] font-medium uppercase tracking-[0.5px] mb-4">
        Most Popular Post
      </h3>
      
      <div className="bg-[#1A1D21] rounded-[4px] p-4 border border-[#2C2D30] mb-4">
        <div className="flex items-start gap-3 mb-2">
          <div className="w-9 h-9 rounded-[4px] bg-[#1264A3] flex items-center justify-center text-white font-semibold text-[13px] flex-shrink-0">
            {authorAvatar ? (
              <img src={authorAvatar} alt={author} className="w-full h-full rounded-[4px] object-cover" />
            ) : (
              initials
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-semibold text-[15px] leading-tight">{author}</span>
              <span className="text-[#9E9EA0] text-[13px] font-normal">
                {formattedDate} at {formattedTime}
              </span>
            </div>
            <div className="text-[#9E9EA0] text-[13px] mb-2 font-normal">
              <span className="text-[#D1D2D3]">#{channel}</span>
            </div>
            <p className="text-[#D1D2D3] text-[15px] leading-[1.46668] whitespace-pre-wrap break-words font-normal">
              {text}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-[13px]">
        <div className="flex items-center gap-1.5">
          <span className="text-[#9E9EA0]">💬</span>
          <span className="text-white font-semibold">{replies}</span>
          <span className="text-[#9E9EA0] font-normal">replies</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[#9E9EA0]">👍</span>
          <span className="text-white font-semibold">{reactions}</span>
          <span className="text-[#9E9EA0] font-normal">reactions</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-[#9E9EA0] font-normal">Total engagement:</span>
          <span className="text-white font-bold text-[16px]">{totalEngagement}</span>
        </div>
      </div>
    </div>
  );
}

