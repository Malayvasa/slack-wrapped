'use client';

import { mockMetrics } from '@/data/mockData';
import MetricCard from '@/components/MetricCard';
import MemberCard from '@/components/MemberCard';
import ChannelCard from '@/components/ChannelCard';
import PostCard from '@/components/PostCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1D21] text-white">
      {/* Header - mimicking Slack sidebar */}
      <header className="bg-[#350D36] border-b border-[#522653] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-[#350D36] font-bold text-lg">S</span>
            </div>
            <h1 className="text-xl font-bold text-white">Slack Wrapped</h1>
            <span className="text-[#9E9EA0] text-sm ml-auto">Week Summary</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Your Workspace Stats
          </h2>
          <p className="text-[#9E9EA0] text-sm md:text-base">
            A week in review • {new Date().toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <MetricCard
            title="Total Messages"
            value={mockMetrics.totalMessages}
            subtitle="Messages sent across all channels"
            icon={<span className="text-xl">💬</span>}
          />
          <MetricCard
            title="Emoji Reactions"
            value={mockMetrics.totalEmojiReactions}
            subtitle="Total reactions given"
            icon={<span className="text-xl">😊</span>}
          />
        </div>

        {/* Member and Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <MemberCard
            name={mockMetrics.mostActiveMember.name}
            messageCount={mockMetrics.mostActiveMember.messageCount}
            avatar={mockMetrics.mostActiveMember.avatar}
          />
          <ChannelCard
            name={mockMetrics.mostActiveChannel.name}
            messageCount={mockMetrics.mostActiveChannel.messageCount}
          />
        </div>

        {/* Most Popular Post */}
        <div className="mb-8">
          <PostCard
            text={mockMetrics.mostPopularPost.text}
            author={mockMetrics.mostPopularPost.author}
            authorAvatar={mockMetrics.mostPopularPost.authorAvatar}
            channel={mockMetrics.mostPopularPost.channel}
            timestamp={mockMetrics.mostPopularPost.timestamp}
            reactions={mockMetrics.mostPopularPost.reactions}
            replies={mockMetrics.mostPopularPost.replies}
            totalEngagement={mockMetrics.mostPopularPost.totalEngagement}
          />
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-[#522653]">
          <p className="text-[#9E9EA0] text-sm">
            Generated with ❤️ using Next.js
          </p>
        </footer>
      </main>
    </div>
  );
}
