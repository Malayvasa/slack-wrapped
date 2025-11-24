import { SlackMetrics } from '@/types';

export const mockMetrics: SlackMetrics = {
  totalMessages: 228,
  totalEmojiReactions: 36,
  mostActiveMember: {
    name: 'Lingala',
    messageCount: 43,
    avatar: '',
  },
  mostActiveChannel: {
    name: '#pod-platform',
    messageCount: 25,
  },
  mostPopularPost: {
    text: 'can someone switch on bugbot for mercury? cc: <@U08FHET2FQE|Jitesh>',
    author: 'Samvit',
    authorAvatar: '',
    channel: '#help',
    timestamp: '2025-11-24T00:00:00Z',
    reactions: 0,
    replies: 3,
    totalEngagement: 3,
  },
};
