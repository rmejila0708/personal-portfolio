export const profile = {
  name: "Ricky Mejila",
  fullName: "Ricky T. Mejila",
  title: "Creative Marketing & AI Automation Specialist",
  location: "Philippines",
  email: "rtm0708@yahoo.com",
  linkedin: "https://linkedin.com/in/rickymejila",
  tagline:
    "I build the systems that turn AI into finished content, working websites, and pipelines that don't need babysitting.",
  summary:
    "Creative marketing and AI automation specialist with hands-on experience across content production, video editing, social media, graphic design, website management, lead generation, CRM operations, and AI-powered workflow development. I use large language models, APIs, Model Context Protocol integrations, and automation platforms to accelerate content production, support conversions, and reduce repetitive work.",
};

export const expertise = [
  {
    title: "Content & Creative",
    blurb:
      "Video editing, short-form content, Reels, podcast editing, motion graphics, graphic design, pitch decks, marketing collateral.",
  },
  {
    title: "Marketing & Social",
    blurb:
      "Social media management, content strategy, content calendars, lead generation, email marketing, website content and design.",
  },
  {
    title: "AI & Workflow Automation",
    blurb:
      "LLM-powered workflows, ChatGPT, Claude Code, Model Context Protocol (MCP), API integrations, automated content production, workflow orchestration.",
  },
  {
    title: "CRM & Marketing Operations",
    blurb:
      "Monday.com, HubSpot CRM, GoHighLevel, Zapier, lead routing, pipeline management, automated follow-up processes.",
  },
];

export const tools = [
  "Adobe Premiere Pro",
  "After Effects",
  "Photoshop",
  "Illustrator",
  "InDesign",
  "DaVinci Resolve",
  "Canva",
  "Affinity Suite",
  "Camtasia",
  "ChatGPT",
  "Claude Code",
  "Zapier",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  clients?: { name: string; period: string; bullets: string[] }[];
};

export const experience: Experience[] = [
  {
    company: "RevUp Now AI",
    role: "Content & Automation Specialist",
    period: "August 2023 – 2026",
    bullets: [
      "Design AI-powered workflows using ChatGPT, Claude Code, MCP integrations, APIs, and automation platforms.",
      "Built an end-to-end system that automates blog production, social media posts, graphic generation, and SEO tasks.",
      "Connect AI tools with marketing and CRM systems to move content, leads, and information between platforms, accelerating delivery and reducing manual work.",
      "Build workflows using Monday.com, HubSpot, GoHighLevel, and Zapier for content management, lead routing, CRM organization, and automated follow-up.",
    ],
    clients: [
      {
        name: "MicroMain",
        period: "August 2023 – 2026",
        bullets: [
          "Support lead generation, content marketing, website improvements, social media, and campaign execution for a CMMS and EAM software company.",
          "Generated and nurtured leads through content and training campaigns, helping convert prospects into customers.",
          "Improved the website's performance score through content, functionality, and optimization work.",
          "Expanded social media exposure through consistent branded content, promotional videos, and short-form video production.",
        ],
      },
      {
        name: "eProject Direct",
        period: "June 2024 – 2026",
        bullets: [
          "Create short- and long-form videos for real estate marketing, including property showcases and platform-specific Reels.",
          "Produce content for Instagram, Facebook, TikTok, LinkedIn, and other social channels.",
          "Design flyers, brochures, print collateral, pitch decks, and client-facing presentation materials.",
          "Design and maintain the company website while supporting its brand presence and social media activity.",
        ],
      },
      {
        name: "Marker Law",
        period: "January 2026 – 2026",
        bullets: [
          "Manage social media content planning and scheduling across digital platforms.",
          "Edit Reels and other short-form videos that support brand visibility and audience engagement.",
          "Organize content and maintain consistency across active marketing campaigns and channels.",
        ],
      },
    ],
  },
  {
    company: "Reading Achievement Partners",
    role: "Marketing Manager",
    period: "May 2023 – June 2023",
    bullets: [
      "Managed LinkedIn and Instagram content creation, planning, and scheduling.",
      "Produced promotional videos and maintained website content, including e-commerce functionality.",
    ],
  },
  {
    company: "MillionaireMindcast.com",
    role: "Video Editor & Graphic Designer",
    period: "June 2022 – January 2023",
    bullets: [
      "Edited video podcast episodes and repurposed content for YouTube, Instagram, and TikTok.",
      "Designed branded graphics, thumbnails, logos, motion graphics, and promotional materials.",
    ],
  },
  {
    company: "Corcoran Pacific Properties",
    role: "Listing Concierge",
    period: "May 2021 – June 2022",
    bullets: [
      "Supported real estate agents with listing marketing, promotional content, and documentation.",
      "Created listing assets, managed MLS entries, edited property photos, and supported email marketing campaigns.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "San Sebastian College-Recoletos",
  location: "Cavite City, Philippines",
  period: "2000–2004",
};

export const languages = ["English", "Filipino"];

export type WebsiteSample = {
  title: string;
  url: string;
  displayUrl: string;
  image: string;
};

export const websiteSamples: WebsiteSample[] = [
  {
    title: "eProject Direct",
    url: "https://www.eprojectdirect.com/",
    displayUrl: "eprojectdirect.com",
    image: "/work/eproject-direct-site.jpg",
  },
  {
    title: "MicroMain",
    url: "https://micromain.com/",
    displayUrl: "micromain.com",
    image: "/work/micromain-site.jpg",
  },
];

export type BlogSample = {
  title: string;
  excerpt: string;
  image: string;
  link: string;
  tag: string;
};

export type SocialSample = {
  image: string;
  caption: string;
};

export type SocialGroup = {
  client: string;
  samples: SocialSample[];
};

export const socialGroups: SocialGroup[] = [
  {
    client: "RevUp Now AI",
    samples: [
      { image: "/social/behind-the-scenes.jpg", caption: "Trade-business awareness · Facebook/Instagram" },
      { image: "/social/plumbing-burst-pipe.jpg", caption: "Emergency-hook ad concept · Plumbing" },
      { image: "/social/not-an-ai-agency.jpg", caption: "Positioning post · \"we're a partner, not a tool\"" },
      { image: "/social/change-orders.jpg", caption: "Pain-point hook · Construction" },
      { image: "/social/pricing-transparency.jpg", caption: "Objection-handling · Pricing transparency" },
      { image: "/social/hvac-after-hours.jpg", caption: "Vertical campaign · HVAC after-hours" },
    ],
  },
  {
    client: "MicroMain",
    samples: [
      { image: "/social/micromain-social-1.jpg", caption: "Demo-objection post · \"not a feature tour\"" },
      { image: "/social/micromain-social-2.jpg", caption: "Educational carousel · Reactive maintenance & inventory" },
      { image: "/social/micromain-social-3.jpg", caption: "Product walkthrough · Asset QR/barcode scanning" },
    ],
  },
];

export type VideoSample = {
  title: string;
  src: string;
  poster: string;
  aspect?: "9/16" | "16/9";
};

export type VideoGroup = {
  client: string;
  videos: VideoSample[];
};

export const videoGroups: VideoGroup[] = [
  {
    client: "RevUp Now AI",
    videos: [
      {
        title: "What Is RevUp Now AI",
        src: "/videos/what-is-revup-now-ai.mp4",
        poster: "/videos/what-is-revup-now-ai-poster.jpg",
      },
      {
        title: "Podcast — Episode 1",
        src: "/videos/podcast-ep1.mp4",
        poster: "/videos/podcast-ep1-poster.jpg",
      },
      {
        title: "Walking the Dog",
        src: "/videos/walking-the-dog.mp4",
        poster: "/videos/walking-the-dog-poster.jpg",
      },
    ],
  },
  {
    client: "eProject Direct",
    videos: [
      {
        title: "LIST Sotheby's Realty — RealTrends Recognition",
        src: "/videos/eproject-list-sothebys.mp4",
        poster: "/videos/eproject-list-sothebys-poster.jpg",
        aspect: "16/9",
      },
      {
        title: "Web Promo",
        src: "/videos/eproject-web-promo.mp4",
        poster: "/videos/eproject-web-promo-poster.jpg",
        aspect: "16/9",
      },
      {
        title: "eProject Direct Ad",
        src: "/videos/eproject-ad-2.mp4",
        poster: "/videos/eproject-ad-2-poster.jpg",
      },
    ],
  },
  {
    client: "Marker Law",
    videos: [
      {
        title: "What to Ask a WC Adjuster",
        src: "/videos/marker-law-wc-adjuster.mp4",
        poster: "/videos/marker-law-wc-adjuster-poster.jpg",
      },
      {
        title: "PT Recovery Has a Soundtrack",
        src: "/videos/marker-law-pt-recovery.mp4",
        poster: "/videos/marker-law-pt-recovery-poster.jpg",
      },
      {
        title: "Top 5 Best Guitar Solos Ever",
        src: "/videos/marker-law-top-5-solo.mp4",
        poster: "/videos/marker-law-top-5-solo-poster.jpg",
      },
    ],
  },
];

export type WorkflowStage = {
  title: string;
  description: string;
  tools: string[];
};

export const workflowStages: WorkflowStage[] = [
  {
    title: "Trigger & Topic Select",
    description:
      "A weekly scheduled job wakes the pipeline headlessly and picks the next unused topic from a maintained content queue.",
    tools: ["Windows Task Scheduler", "PowerShell"],
  },
  {
    title: "Write & Illustrate",
    description:
      "Claude Code writes the full article in the brand's voice and template, then generates a custom hero image to match.",
    tools: ["Claude Code", "Higgsfield (nano_banana_pro)"],
  },
  {
    title: "Publish Draft",
    description:
      "The finished post and image are pushed live as a WordPress draft through a purpose-built MCP server — no manual copy-paste.",
    tools: ["WordPress", "Revi MCP"],
  },
  {
    title: "Quality Gate",
    description:
      "A deterministic, zero-token validator checks word count, structure, and banned phrases before any human ever sees the draft.",
    tools: ["PowerShell validator"],
  },
  {
    title: "Create Review Task",
    description:
      "A ClickUp task is created with the full article as Markdown plus a downloadable, pixel-accurate HTML preview attached.",
    tools: ["ClickUp API"],
  },
  {
    title: "Notify Reviewer",
    description:
      "The reviewer gets pinged directly in Microsoft Teams with a one-click link straight to the review task.",
    tools: ["Microsoft Teams", "Graph API"],
  },
  {
    title: "Approve & Repurpose",
    description:
      "Once approved, the post goes live and gets automatically repurposed into social posts across four platforms.",
    tools: ["GoHighLevel", "Facebook", "Instagram", "LinkedIn", "TikTok"],
  },
];

export const blogSamples: BlogSample[] = [
  {
    title: "Storm Damage and Insurance Supplements: The Roofing Paperwork Problem Nobody's Solved",
    excerpt:
      "Xactimate prices what you tell it to price — it doesn't catch what you forgot, chase a quiet adjuster, or answer the phone during a storm surge.",
    image: "https://revupnow.ai/wp-content/uploads/2026/08/Roofing-paperworks-.png",
    link: "https://revupnow.ai/storm-damage-roofing-insurance-supplements/",
    tag: "Roofing",
  },
  {
    title: "The Change Order Problem: What It Actually Is, and Why Contractors Lose Money on It",
    excerpt:
      "A homeowner asks for one more outlet. Everyone nods. Six weeks later nobody agrees on what was approved.",
    image: "https://revupnow.ai/wp-content/uploads/2026/08/Document-the-change.png",
    link: "https://revupnow.ai/change-order-problem-construction/",
    tag: "Construction",
  },
  {
    title: "AI vs. Hiring an Office Manager: What Actually Costs Less?",
    excerpt:
      "Before you post the job listing, it's worth asking what you're actually hiring for — a person, or the work getting done.",
    image: "https://revupnow.ai/wp-content/uploads/2026/08/AI-systems-vs-hiring-managers.png",
    link: "https://revupnow.ai/ai-vs-hiring-office-manager/",
    tag: "AI Operations",
  },
  {
    title: "Why HVAC Jobs Sit Unbilled for Days — and What It Is Actually Costing You",
    excerpt:
      "A technician finishes a job at 4:45 PM. The invoice doesn't go out until the following Tuesday. Here's what that delay actually costs.",
    image: "https://revupnow.ai/wp-content/uploads/2026/07/Invoicing.png",
    link: "https://revupnow.ai/hvac-dispatch-to-invoice-automation/",
    tag: "HVAC",
  },
];
