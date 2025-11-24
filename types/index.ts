export interface SlackMetrics {
  totalMessages: number;
  totalEmojiReactions: number;
  mostActiveMember: {
    name: string;
    avatar?: string;
    messageCount: number;
  };
  mostActiveChannel: {
    name: string;
    messageCount: number;
  };
  mostPopularPost: {
    text: string;
    author: string;
    authorAvatar?: string;
    channel: string;
    timestamp: string;
    reactions: number;
    replies: number;
    totalEngagement: number;
  };
}

