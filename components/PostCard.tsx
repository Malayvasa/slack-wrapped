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
    <div className="bg-[#350D36] rounded-lg p-6 border border-[#522653] hover:bg-[#3F0E40] transition-colors">
      <h3 className="text-[#D1D2D3] text-sm font-medium uppercase tracking-wide mb-4">
        Most Popular Post
      </h3>
      
      <div className="bg-[#2B0C2D] rounded-lg p-4 border border-[#522653] mb-4">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#611F69] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
            {authorAvatar ? (
              <img src={authorAvatar} alt={author} className="w-full h-full rounded-full object-cover" />
            ) : (
              initials
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white font-semibold">{author}</span>
              <span className="text-[#9E9EA0] text-sm">
                {formattedDate} at {formattedTime}
              </span>
            </div>
            <div className="text-[#9E9EA0] text-sm mb-2">
              <span className="text-[#D1D2D3]">#{channel}</span>
            </div>
            <p className="text-[#D1D2D3] text-sm leading-relaxed whitespace-pre-wrap break-words">
              {text}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-[#9E9EA0]">💬</span>
          <span className="text-white font-semibold">{replies}</span>
          <span className="text-[#9E9EA0]">replies</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#9E9EA0]">👍</span>
          <span className="text-white font-semibold">{reactions}</span>
          <span className="text-[#9E9EA0]">reactions</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-[#9E9EA0]">Total engagement:</span>
          <span className="text-white font-bold text-lg">{totalEngagement}</span>
        </div>
      </div>
    </div>
  );
}

