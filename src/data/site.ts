export const site = {
  name: 'ivc',
  wordmark: 'IVC',
  role: 'Digital artist & builder',
  url: 'https://ivc.lol',
  description:
    'ivc builds digital experiences across audio, video, 3D and interactive media. Hackathon winner, grant recipient, and founder of Fiddy and LegitClub.',
  email: 'ivcained@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/ivcained' },
    { label: 'X', href: 'https://x.com/ivcained' },
    { label: 'Farcaster', href: 'https://warpcast.com/ivc' },
  ],
};

export const hero = {
  line: 'Digital artist & builder. Audio, video, 3D, interactive.',
  meta: 'SIGNAL LIVE · INDIA · EST. 2021',
  cta: { label: "Let's talk", href: 'mailto:ivcained@gmail.com' },
};

export const about = {
  heading: 'Signal over noise.',
  kicker: 'THE OPERATOR',
  body: [
    'ivc is a digital artist and builder. The work runs from immersive audio-visual pieces to interactive NFTs and Web3 applications, and lately to shipping real products: Fiddy, an AI-agent client for Farcaster, and LegitClub, the services studio that funds the experiments.',
    'Hackathons and grants helped along the way. But the prize money was never the point. The point is finding the people who stay after the confetti falls.',
    'Every project is one more chance to push a creative boundary and build something people actually use.',
  ],
};

export type Project = {
  name: string;
  slug: string;
  kind: string;
  year: string;
  status: 'live' | 'archived';
  href: string;
  note: string;
};

export const projects: Project[] = [
  {
    name: 'Fiddy',
    slug: 'fiddy',
    kind: 'AI-agent Farcaster client',
    year: '2026',
    status: 'live',
    href: 'https://fiddy.fun',
    note: 'The lead product. A client where AI agents are first-class citizens of the social graph.',
  },
  {
    name: 'LegitClub',
    slug: 'legitclub',
    kind: 'Services studio',
    year: '2026',
    status: 'live',
    href: 'https://legitclub.com',
    note: 'The studio that pays for the experiments. Agentic services for small businesses.',
  },
  {
    name: 'Surp Router',
    slug: 'surp-router',
    kind: 'x402 LLM gateway',
    year: '2026',
    status: 'live',
    href: 'https://github.com/ivcained/surp-router',
    note: 'Cheapest AI inference on the internet. Pay per request in USDC, no account, no API key.',
  },
  {
    name: 'Onchain POAPs',
    slug: 'poaps',
    kind: 'Farcaster mini app',
    year: '2025',
    status: 'live',
    href: 'https://github.com/ivcained/onchain-poaps-frontend',
    note: 'Attendance proofs on Base, built for the Farcaster feed.',
  },
  {
    name: 'Orange Papers',
    slug: 'orange-papers',
    kind: 'Investigation series',
    year: '2026',
    status: 'live',
    href: 'https://github.com/ivcained/orange-papers-webapp',
    note: 'A long-form, evidence-based series on recovery science and the history of addiction treatment.',
  },
  {
    name: 'ivcained.art',
    slug: 'art',
    kind: 'Art archive',
    year: '2025',
    status: 'archived',
    href: 'https://ivcained-art.vercel.app',
    note: 'The earlier art portfolio. Kept as an artifact of the previous era.',
  },
];

export const readouts = [
  { label: 'PUBLIC REPOS SHIPPED', value: 54, suffix: '' },
  { label: 'YEARS ON GITHUB', value: 5, suffix: '' },
  { label: 'PRODUCTS LIVE', value: 2, suffix: '' },
];

export const collaborate = {
  heading: 'Stay after the confetti.',
  body: [
    'Hackathons end. Grants run out. What matters is the team that is still there on Monday.',
    'Experienced or just starting out: what matters is that you care about the work and the people you are building with. If you want to win, then keep building, say so.',
  ],
  cta: { label: "Get in touch", href: 'mailto:ivcained@gmail.com' },
};
