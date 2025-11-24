import { SlackMetrics } from '@/types';

export const mockMetrics: SlackMetrics = {
  totalMessages: 217,
  totalEmojiReactions: 41,
  mostActiveMember: {
    name: 'Lingala',
    messageCount: 42,
    avatar: 'https://avatars.slack-edge.com/2025-03-17/8614645842754_b5e7b4405ded6d39cdb5_192.jpg',
  },
  mostActiveChannel: {
    name: '#internal-glean',
    messageCount: 34,
  },
  mostPopularPost: {
    text: 'Can we take master to prod?\n<@U06BF23F1T5|Himanshu> <@U08JJGWGULE|dhawal> <@U08NVJC15GF|Srujan>\n<https://github.com/ComposioHQ/hermes/pull/7111>',
    author: 'Lingala',
    channel: '#pod-platform',
    timestamp: '2025-11-24T00:00:00Z',
    reactions: 3,
    replies: 6,
    totalEngagement: 9,
  },
};
