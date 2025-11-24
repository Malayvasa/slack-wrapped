import { SlackMetrics } from '@/types';

export const mockMetrics: SlackMetrics = {
  totalMessages: 207,
  totalEmojiReactions: 61,
  mostActiveMember: {
    name: 'Lingala',
    messageCount: 46,
    avatar: 'https://avatars.slack-edge.com/2025-03-17/8614645842754_b5e7b4405ded6d39cdb5_192.jpg',
  },
  mostActiveChannel: {
    name: '#internal-glean',
    messageCount: 58,
  },
  mostPopularPost: {
    text: 'Hi everyone! Please welcome Pranjali to the team! She will be working on Recruiting & HR stuff here at Composio! Previously she has worked at ShopOS, Rippling & CRED.',
    author: 'Karan Vaidya',
    channel: '#general',
    timestamp: '2025-11-19T08:35:45Z',
    reactions: 36,
    replies: 0,
    totalEngagement: 36,
  },
};
