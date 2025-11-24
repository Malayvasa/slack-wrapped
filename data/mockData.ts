import { SlackMetrics } from '@/types';

export const mockMetrics: SlackMetrics = {
  totalMessages: 1247,
  totalEmojiReactions: 3421,
  mostActiveMember: {
    name: 'Sarah Chen',
    messageCount: 189,
  },
  mostActiveChannel: {
    name: '#general',
    messageCount: 456,
  },
  mostPopularPost: {
    text: '🚀 Excited to announce our Q4 product launch! We\'ve been working hard on new features that will revolutionize how teams collaborate. What are you most excited about?',
    author: 'Alex Johnson',
    channel: '#announcements',
    timestamp: '2024-01-15T10:30:00Z',
    reactions: 87,
    replies: 23,
    totalEngagement: 110,
  },
};

