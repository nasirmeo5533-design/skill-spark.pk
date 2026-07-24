export interface Course {
  slug: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  duration: string;
  format: string;
  level: "Beginner" | "Intermediate" | "All Levels";
  shortDescription: string;
  fullDescription: string;
  learningOutcomes: string[];
  curriculum: { moduleTitle: string; lessons: string[] }[];
  audience: string[];
  instructor: string;
  image: string;
  icon: string;
}

export const courses: Course[] = [
  {
    slug: "generative-ai-mastery",
    title: "Generative AI Mastery",
    category: "Generative AI",
    price: 5000,
    originalPrice: 15000,
    duration: "4 Weeks",
    format: "Live Sessions + Recorded Videos + Lifetime Access",
    level: "All Levels",
    shortDescription:
      "Master ChatGPT, Gemini & Claude for real business applications and content generation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    icon: "🤖",
    fullDescription:
      "Unlock the full potential of generative AI tools like ChatGPT, Gemini, and Claude. This course takes you from basics to advanced workflows, teaching you how to use AI for content creation, business automation, and problem-solving. You'll learn prompt engineering, content generation workflows, and how to integrate AI into your daily business operations. Unlike theoretical courses, every lesson is built around real-world use cases from e-commerce and digital marketing — skills you can apply immediately to earn online or boost your career.",
    learningOutcomes: [
      "Navigate and utilize ChatGPT, Gemini, and Claude effectively",
      "Write prompts that generate high-quality, business-ready content",
      "Create AI-powered workflows for content marketing",
      "Automate repetitive tasks using generative AI",
      "Build AI-assisted strategies for social media and email marketing",
      "Understand AI limitations and ethical usage",
    ],
    curriculum: [
      {
        moduleTitle: "Introduction to Generative AI",
        lessons: [
          "What is Generative AI and how it works",
          "Overview of ChatGPT, Gemini, and Claude",
          "Setting up your AI workspace",
        ],
      },
      {
        moduleTitle: "Prompt Engineering Fundamentals",
        lessons: [
          "Writing effective prompts",
          "Understanding context and tone",
          "Advanced prompt techniques",
        ],
      },
      {
        moduleTitle: "Content Generation workflows",
        lessons: [
          "Blog posts and articles",
          "Social media content",
          "Email marketing copy",
        ],
      },
      {
        moduleTitle: "Business Applications",
        lessons: [
          "AI for customer support",
          "Market research with AI",
          "Competitor analysis workflows",
        ],
      },
      {
        moduleTitle: "Advanced Techniques",
        lessons: [
          "Multi-turn conversations",
          "AI for data analysis",
          "Building custom AI workflows",
        ],
      },
    ],
    audience: [
      "Content creators looking to scale production",
      "Digital marketers wanting to leverage AI",
      "Business owners automating workflows",
      "Freelancers adding AI to their service offerings",
      "Students exploring AI career opportunities",
    ],
    instructor: "Abeer Nasir",
  },
  {
    slug: "ai-automation-agents",
    title: "AI Automation & AI Agents (No-Code)",
    category: "AI Automation",
    price: 5000,
    originalPrice: 15000,
    duration: "5 Weeks",
    format: "Live Sessions + Recorded Videos + Lifetime Access",
    level: "Beginner",
    shortDescription:
      "Build automated workflows and AI agents without writing a single line of code.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop",
    icon: "⚡",
    fullDescription:
      "Learn to build powerful automation workflows and AI agents using no-code tools. This course is designed for entrepreneurs, marketers, and freelancers who want to automate repetitive tasks, create intelligent chatbots, and build AI-powered systems — all without programming knowledge. You'll work with real business use cases from e-commerce brands, learning how to set up lead generation bots, customer support agents, and marketing automation flows. Every workflow you build in this course is something you can deploy for clients or your own business immediately.",
    learningOutcomes: [
      "Build AI automation workflows without coding",
      "Create intelligent chatbots for customer support",
      "Set up lead generation automation systems",
      "Connect multiple apps and services with AI",
      "Design AI agent architectures for business use",
      "Deploy and manage no-code AI solutions",
    ],
    curriculum: [
      {
        moduleTitle: "Introduction to AI Automation",
        lessons: [
          "What is AI automation and why it matters",
          "Overview of no-code AI tools",
          "Setting up your automation workspace",
        ],
      },
      {
        moduleTitle: "Building Your First Workflow",
        lessons: [
          "Understanding triggers and actions",
          "Creating simple automation flows",
          "Testing and debugging workflows",
        ],
      },
      {
        moduleTitle: "AI Agents for Business",
        lessons: [
          "Building customer support chatbots",
          "Lead generation agents",
          "Sales qualification bots",
        ],
      },
      {
        moduleTitle: "Advanced Automation Patterns",
        lessons: [
          "Multi-step workflows",
          "Conditional logic and branching",
          "Error handling and optimization",
        ],
      },
      {
        moduleTitle: "Real-World Deployments",
        lessons: [
          "E-commerce automation case studies",
          "Client project walkthroughs",
          "Scaling your automation services",
        ],
      },
    ],
    audience: [
      "Entrepreneurs wanting to automate business processes",
      "Marketers looking to scale campaigns",
      "Freelancers adding automation services",
      "Small business owners with repetitive tasks",
      "Anyone interested in AI without coding background",
    ],
    instructor: "Abeer Nasir",
  },
  {
    slug: "prompt-engineering-masterclass",
    title: "Prompt Engineering Masterclass",
    category: "Prompt Engineering",
    price: 5000,
    originalPrice: 15000,
    duration: "3 Weeks",
    format: "Live Sessions + Recorded Videos + Lifetime Access",
    level: "All Levels",
    shortDescription:
      "Write prompts that consistently produce accurate, business-ready AI outputs.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    icon: "✍️",
    fullDescription:
      "Prompt engineering is the most valuable skill in the AI era. This masterclass teaches you how to communicate effectively with AI models to get precise, useful outputs every time. You'll learn frameworks for writing prompts across different use cases — from content creation and code generation to data analysis and creative tasks. The course covers advanced techniques like chain-of-thought prompting, few-shot learning, and system prompt design. With hands-on exercises based on real business scenarios, you'll develop the intuition to craft prompts that deliver results.",
    learningOutcomes: [
      "Master prompt engineering frameworks and techniques",
      "Write prompts for content, code, and analysis tasks",
      "Implement chain-of-thought and few-shot prompting",
      "Design system prompts for consistent AI behavior",
      "Optimize prompts for different AI models",
      "Build a personal prompt library for business use",
    ],
    curriculum: [
      {
        moduleTitle: "Prompt Engineering Foundations",
        lessons: [
          "How AI models process prompts",
          "Key principles of effective prompting",
          "Common prompt mistakes to avoid",
        ],
      },
      {
        moduleTitle: "Core Prompting Techniques",
        lessons: [
          "Zero-shot and few-shot prompting",
          "Chain-of-thought reasoning",
          "Role-playing and persona prompts",
        ],
      },
      {
        moduleTitle: "Advanced Prompt Strategies",
        lessons: [
          "System prompt design",
          "Prompt chaining and decomposition",
          "Handling edge cases and errors",
        ],
      },
      {
        moduleTitle: "Business Application Prompts",
        lessons: [
          "Marketing content prompts",
          "Data analysis prompts",
          "Customer communication prompts",
        ],
      },
    ],
    audience: [
      "Anyone using ChatGPT, Gemini, or Claude regularly",
      "Content creators wanting better AI outputs",
      "Developers integrating AI into applications",
      "Marketers using AI for campaign creation",
      "Professionals seeking AI productivity gains",
    ],
    instructor: "Abeer Nasir",
  },
  {
    slug: "meta-ads-mastery",
    title: "Meta Ads Mastery — Facebook & Instagram",
    category: "Meta Ads",
    price: 5000,
    originalPrice: 15000,
    duration: "6 Weeks",
    format: "Live Sessions + Recorded Videos + Lifetime Access",
    level: "Intermediate",
    shortDescription:
      "Master Facebook & Instagram ads with real case studies — including 30 sales on a PKR 1,000 budget.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    icon: "📈",
    fullDescription:
      "Learn to create, manage, and optimize Meta Ads campaigns that actually convert. This course is built around real results — including a case study where we generated 30 qualified sales for an e-commerce brand on just PKR 1,000 ad spend. You'll master campaign structure, audience research, creative testing, and budget optimization. Unlike generic courses, every strategy is tested on live campaigns for Pakistani e-commerce brands, particularly in the perfume and beauty D2C space. By the end, you'll have the skills to run profitable ad campaigns for clients or your own business.",
    learningOutcomes: [
      "Set up and structure Meta Ads campaigns for conversions",
      "Research and target profitable audiences",
      "Create compelling ad creatives that convert",
      "Optimize campaigns for maximum ROI on small budgets",
      "Analyze campaign data and make data-driven decisions",
      "Scale winning campaigns profitably",
    ],
    curriculum: [
      {
        moduleTitle: "Meta Ads Fundamentals",
        lessons: [
          "Understanding the Meta Ads ecosystem",
          "Setting up your ads manager",
          "Campaign structure and objectives",
        ],
      },
      {
        moduleTitle: "Audience Research & Targeting",
        lessons: [
          "Creating detailed audience personas",
          "Custom audiences and lookalikes",
          "Interest and behavior targeting",
        ],
      },
      {
        moduleTitle: "Ad Creative & Copywriting",
        lessons: [
          "Writing high-converting ad copy",
          "Designing scroll-stopping visuals",
          "Video ads and carousel formats",
        ],
      },
      {
        moduleTitle: "Campaign Optimization",
        lessons: [
          "A/B testing strategies",
          "Budget allocation and scaling",
          "Reading and interpreting analytics",
        ],
      },
      {
        moduleTitle: "Real Case Studies",
        lessons: [
          "PKR 1,000 → 30 sales case study",
          "E-commerce campaign walkthroughs",
          "Common mistakes and how to avoid them",
        ],
      },
      {
        moduleTitle: "Scaling & Client Management",
        lessons: [
          "Scaling profitable campaigns",
          "Reporting to clients",
          "Managing multiple ad accounts",
        ],
      },
    ],
    audience: [
      "Digital marketers wanting to master paid ads",
      "E-commerce store owners running their own ads",
      "Freelancers offering Meta Ads services",
      "Business owners looking to reduce ad costs",
      "Marketing students seeking practical skills",
    ],
    instructor: "Abeer Nasir",
  },
  {
    slug: "shopify-store-setup",
    title: "Shopify Store Setup & Optimization",
    category: "Shopify",
    price: 5000,
    originalPrice: 15000,
    duration: "4 Weeks",
    format: "Live Sessions + Recorded Videos + Lifetime Access",
    level: "Beginner",
    shortDescription:
      "Build and optimize a Shopify store from scratch for D2C brands with proven CRO strategies.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    icon: "🛒",
    fullDescription:
      "Learn to build professional Shopify stores that convert visitors into customers. This course covers everything from initial setup to advanced conversion rate optimization (CRO). You'll learn how to choose the right theme, set up product pages that sell, configure payment gateways for Pakistani customers, and optimize your store for maximum conversions. Based on real experience setting up and optimizing stores for perfume and beauty D2C brands, every strategy in this course is proven to work in the Pakistani e-commerce market.",
    learningOutcomes: [
      "Set up a professional Shopify store from scratch",
      "Choose and customize themes for maximum conversions",
      "Optimize product pages with proven CRO techniques",
      "Configure payment gateways for Pakistani customers",
      "Set up shipping and tax configurations",
      "Implement SEO basics for Shopify stores",
    ],
    curriculum: [
      {
        moduleTitle: "Shopify Fundamentals",
        lessons: [
          "Understanding Shopify's ecosystem",
          "Choosing the right plan",
          "Initial store setup and configuration",
        ],
      },
      {
        moduleTitle: "Theme Selection & Customization",
        lessons: [
          "Choosing a high-converting theme",
          "Customizing your store design",
          "Mobile optimization essentials",
        ],
      },
      {
        moduleTitle: "Product Page Optimization",
        lessons: [
          "Writing product descriptions that sell",
          "Product photography best practices",
          "Social proof and trust signals",
        ],
      },
      {
        moduleTitle: "Payments & Operations",
        lessons: [
          "Setting up payment gateways for Pakistan",
          "Shipping and fulfillment setup",
          "Tax and legal considerations",
        ],
      },
    ],
    audience: [
      "Aspiring e-commerce entrepreneurs",
      "Existing store owners wanting to improve conversions",
      "Freelancers offering Shopify setup services",
      "D2C brand owners in Pakistan",
      "Anyone wanting to start an online business",
    ],
    instructor: "Abeer Nasir",
  },
  {
    slug: "ai-content-creation",
    title: "AI-Powered Content Creation for Social Media",
    category: "Content Creation",
    price: 5000,
    originalPrice: 15000,
    duration: "3 Weeks",
    format: "Live Sessions + Recorded Videos + Lifetime Access",
    level: "All Levels",
    shortDescription:
      "Use AI tools to produce marketing content, captions, and ad creatives at scale.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
    icon: "✨",
    fullDescription:
      "Transform your content creation process with AI. This course teaches you how to use AI tools to produce high-quality marketing content, social media captions, ad creatives, and visual assets at scale. You'll learn workflows that let you create weeks of content in hours, maintain brand consistency, and optimize content for engagement. Based on real experience creating AI-assisted content for e-commerce brands, you'll learn practical techniques that save time while maintaining quality.",
    learningOutcomes: [
      "Create AI-powered content workflows for social media",
      "Generate engaging captions and copy with AI",
      "Design ad creatives using AI tools",
      "Build content calendars with AI assistance",
      "Maintain brand voice consistency at scale",
      "Optimize content for different platforms",
    ],
    curriculum: [
      {
        moduleTitle: "AI Content Fundamentals",
        lessons: [
          "Overview of AI content tools",
          "Setting up your AI content workflow",
          "Brand voice and consistency with AI",
        ],
      },
      {
        moduleTitle: "Social Media Content",
        lessons: [
          "Instagram caption generation",
          "LinkedIn thought leadership content",
          "Twitter/X thread creation",
        ],
      },
      {
        moduleTitle: "Visual Content with AI",
        lessons: [
          "AI-generated graphics and thumbnails",
          "Ad creative generation",
          "Video content with AI tools",
        ],
      },
    ],
    audience: [
      "Social media managers",
      "Content creators and influencers",
      "Digital marketers managing brand accounts",
      "Freelancers offering content services",
      "Business owners handling their own marketing",
    ],
    instructor: "Abeer Nasir",
  },
  {
    slug: "digital-marketing-bootcamp",
    title: "Complete Digital Marketing Bootcamp",
    category: "Digital Marketing",
    price: 5000,
    originalPrice: 15000,
    duration: "8 Weeks",
    format: "Live Sessions + Recorded Videos + Lifetime Access",
    level: "Beginner",
    shortDescription:
      "Master SEO, social media, paid ads, and strategy fundamentals in one comprehensive bootcamp.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    icon: "🎯",
    fullDescription:
      "This comprehensive bootcamp covers all essential digital marketing skills you need to succeed online. From SEO and social media marketing to paid advertising and strategic planning, you'll learn the complete digital marketing stack. The course is designed for beginners who want to build a solid foundation, as well as intermediate marketers looking to fill gaps in their knowledge. Every module includes practical exercises based on real Pakistani market scenarios, ensuring you can apply what you learn immediately.",
    learningOutcomes: [
      "Understand the complete digital marketing landscape",
      "Implement SEO strategies for Pakistani markets",
      "Manage social media marketing campaigns",
      "Create and optimize paid advertising campaigns",
      "Develop comprehensive marketing strategies",
      "Measure and analyze marketing performance",
    ],
    curriculum: [
      {
        moduleTitle: "Digital Marketing Foundations",
        lessons: [
          "The digital marketing ecosystem",
          "Understanding your target audience",
          "Setting marketing objectives and KPIs",
        ],
      },
      {
        moduleTitle: "Search Engine Optimization",
        lessons: [
          "Keyword research for Pakistani markets",
          "On-page SEO fundamentals",
          "Local SEO strategies",
        ],
      },
      {
        moduleTitle: "Social Media Marketing",
        lessons: [
          "Platform selection and strategy",
          "Content planning and scheduling",
          "Community management",
        ],
      },
      {
        moduleTitle: "Paid Advertising",
        lessons: [
          "Introduction to paid ads",
          "Google Ads basics",
          "Meta Ads fundamentals",
        ],
      },
      {
        moduleTitle: "Analytics & Optimization",
        lessons: [
          "Setting up analytics tracking",
          "Reading marketing reports",
          "Data-driven optimization",
        ],
      },
    ],
    audience: [
      "Complete beginners wanting to learn digital marketing",
      "Career changers entering marketing",
      "Small business owners doing their own marketing",
      "Students studying marketing",
      "Professionals wanting to update their skills",
    ],
    instructor: "Abeer Nasir",
  },
  {
    slug: "ecommerce-dtc-growth",
    title: "E-commerce & D2C Brand Growth",
    category: "Digital Marketing",
    price: 5000,
    originalPrice: 15000,
    duration: "5 Weeks",
    format: "Live Sessions + Recorded Videos + Lifetime Access",
    level: "Intermediate",
    shortDescription:
      "Real case-study-driven course on scaling perfume and beauty D2C brands online.",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=500&fit=crop",
    icon: "🚀",
    fullDescription:
      "Learn to scale e-commerce and D2C brands using proven strategies from the perfume and beauty industry. This course is built entirely around real case studies and results from working with Pakistani D2C brands. You'll learn customer acquisition strategies, retention tactics, and growth frameworks that have been tested in live campaigns. From setting up your first ad campaign to building a scalable marketing machine, every lesson is grounded in actual results — not theory.",
    learningOutcomes: [
      "Understand D2C brand growth strategies",
      "Build customer acquisition funnels",
      "Implement retention and loyalty programs",
      "Scale advertising profitably",
      "Optimize the customer journey for conversions",
      "Analyze and improve marketing ROI",
    ],
    curriculum: [
      {
        moduleTitle: "D2C Fundamentals",
        lessons: [
          "Understanding the D2C model",
          "Pakistani e-commerce landscape",
          "Choosing your niche and products",
        ],
      },
      {
        moduleTitle: "Customer Acquisition",
        lessons: [
          "Building acquisition funnels",
          "Meta Ads for e-commerce",
          "Google Shopping setup",
        ],
      },
      {
        moduleTitle: "Conversion Optimization",
        lessons: [
          "Landing page optimization",
          "Checkout flow improvements",
          "A/B testing for e-commerce",
        ],
      },
      {
        moduleTitle: "Retention & Growth",
        lessons: [
          "Email marketing for repeat purchases",
          "SMS and WhatsApp marketing",
          "Building brand loyalty",
        ],
      },
      {
        moduleTitle: "Scaling Strategies",
        lessons: [
          "Scaling ad spend profitably",
          "Expanding product lines",
          "Multi-channel growth strategies",
        ],
      },
    ],
    audience: [
      "E-commerce store owners",
      "D2C brand founders",
      "Marketing managers at e-commerce companies",
      "Freelancers serving e-commerce clients",
      "Aspiring e-commerce entrepreneurs",
    ],
    instructor: "Abeer Nasir",
  },
  {
    slug: "freelancing-client-acquisition",
    title: "Freelancing & Client Acquisition for AI/Marketing Services",
    category: "Freelancing",
    price: 5000,
    originalPrice: 15000,
    duration: "4 Weeks",
    format: "Live Sessions + Recorded Videos + Lifetime Access",
    level: "All Levels",
    shortDescription:
      "Learn to package and sell your AI and marketing skills as freelance services and land clients.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop",
    icon: "💼",
    fullDescription:
      "Turn your AI and marketing skills into a thriving freelance business. This course teaches you how to package your services, find clients, price your work, and build a sustainable freelancing career. You'll learn proven client acquisition strategies, proposal writing techniques, and how to position yourself as an expert in the growing AI services market. Based on real experience freelancing in Pakistan's AI and digital marketing space, you'll get actionable advice that works in the local market.",
    learningOutcomes: [
      "Package AI and marketing skills into sellable services",
      "Create compelling freelancer profiles and portfolios",
      "Write proposals that win clients",
      "Price your services for maximum profitability",
      "Build long-term client relationships",
      "Scale from freelancer to agency",
    ],
    curriculum: [
      {
        moduleTitle: "Freelancing Foundations",
        lessons: [
          "Choosing your niche and services",
          "Building your freelancer profile",
          "Portfolio creation strategies",
        ],
      },
      {
        moduleTitle: "Client Acquisition",
        lessons: [
          "Finding clients on platforms and cold outreach",
          "Writing winning proposals",
          "Building referral networks",
        ],
      },
      {
        moduleTitle: "Pricing & Proposals",
        lessons: [
          "Pricing strategies for AI services",
          "Creating professional proposals",
          "Handling objections and negotiations",
        ],
      },
      {
        moduleTitle: "Client Management",
        lessons: [
          "Onboarding new clients",
          "Project management and communication",
          "Building long-term relationships",
        ],
      },
    ],
    audience: [
      "AI and marketing professionals wanting to freelance",
      "Students looking to earn while studying",
      "Career changers entering the AI/marketing space",
      "Existing freelancers wanting to add AI services",
      "Anyone wanting to build an online income",
    ],
    instructor: "Abeer Nasir",
  },
  {
    slug: "ai-chatbot-development",
    title: "AI Chatbot & Virtual Assistant Development",
    category: "AI Automation",
    price: 5000,
    originalPrice: 15000,
    duration: "4 Weeks",
    format: "Live Sessions + Recorded Videos + Lifetime Access",
    level: "Intermediate",
    shortDescription:
      "Build intelligent chatbots and virtual assistants for customer support and lead generation.",
    image: "https://images.unsplash.com/photo-1531746790095-e5995f3bb1d6?w=800&h=500&fit=crop",
    icon: "💬",
    fullDescription:
      "Learn to build AI-powered chatbots and virtual assistants that handle customer support, generate leads, and automate business communications. This course covers both no-code and low-code approaches, teaching you how to design conversational flows, integrate with business systems, and deploy chatbots that actually work. You'll build real chatbots for e-commerce scenarios, learning how to handle common customer queries, qualify leads, and even process orders through conversational interfaces.",
    learningOutcomes: [
      "Design and build AI chatbots for business use",
      "Create conversational flows for customer support",
      "Implement lead generation chatbots",
      "Integrate chatbots with websites and messaging platforms",
      "Train and optimize chatbot responses",
      "Deploy and manage chatbot solutions",
    ],
    curriculum: [
      {
        moduleTitle: "Chatbot Fundamentals",
        lessons: [
          "Understanding AI chatbot technology",
          "Choosing the right chatbot platform",
          "Designing conversational flows",
        ],
      },
      {
        moduleTitle: "Building Customer Support Bots",
        lessons: [
          "Handling common customer queries",
          "FAQ automation",
          "Escalation to human agents",
        ],
      },
      {
        moduleTitle: "Lead Generation Chatbots",
        lessons: [
          "Qualifying leads through conversation",
          "Capturing lead information",
          "Integrating with CRM systems",
        ],
      },
      {
        moduleTitle: "Advanced Features",
        lessons: [
          "Natural language processing basics",
          "Multi-language support",
          "Analytics and optimization",
        ],
      },
    ],
    audience: [
      "Business owners wanting to automate customer support",
      "Marketing professionals building lead gen tools",
      "Developers interested in conversational AI",
      "Customer service managers",
      "Entrepreneurs building AI-powered products",
    ],
    instructor: "Abeer Nasir",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getCoursesByCategory(category: string): Course[] {
  return courses.filter((course) => course.category === category);
}

export function getCategories(): string[] {
  return [...new Set(courses.map((course) => course.category))];
}
