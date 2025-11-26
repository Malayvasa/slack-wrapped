import { SlackMetrics } from '@/types';

export const mockMetrics: SlackMetrics = {
  totalMessages: 259,
  totalEmojiReactions: 54,
  mostActiveMember: {
    name: 'rohan',
    messageCount: 44,
    avatar: '',
  },
  mostActiveChannel: {
    name: '#internal-glean',
    messageCount: 59,
  },
  mostPopularPost: {
    text: '<@U060JRCKZ8R|Karthikeya> can u help?',
    author: 'Abhishek',
    authorAvatar: '',
    channel: '#eng-support',
    timestamp: '2025-11-26T00:00:00Z',
    reactions: 0,
    replies: 8,
    totalEngagement: 8,
  },
};
