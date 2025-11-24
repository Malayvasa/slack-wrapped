# Slack Wrapped

A beautiful, Slack-themed single-page website showcasing your Slack workspace metrics and statistics.

## Features

- 📊 **Total Messages Sent** - Track all messages across your workspace
- 😊 **Total Emoji Reactions** - See total reactions given
- 👤 **Most Active Member** - Identify your most engaged team member
- 📢 **Most Active Channel** - Find your busiest channel
- 🔥 **Most Popular Post** - Discover the post with the most engagement (replies + reactions)

## Design

The website mimics Slack's channel interface with:
- Slack's signature purple color scheme (#350D36, #1A1D21)
- Mobile-optimized responsive design
- Clean, modern UI matching Slack's aesthetic
- Smooth hover effects and transitions

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
slack-wrapped/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/
│   ├── MetricCard.tsx  # Reusable metric card component
│   ├── MemberCard.tsx  # Most active member display
│   ├── ChannelCard.tsx # Most active channel display
│   └── PostCard.tsx    # Most popular post display
├── data/
│   └── mockData.ts     # Mock data for demonstration
└── types/
    └── index.ts        # TypeScript type definitions
```

## Customization

To use your own Slack data:

1. Replace the mock data in `data/mockData.ts` with your actual metrics
2. Or integrate with the Slack API to fetch real-time data
3. Update the `SlackMetrics` interface in `types/index.ts` if needed

## Technologies

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library

## License

MIT
