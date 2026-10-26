// Central source of truth for website copy, navigation, images, and contact details.
// When moving to Strapi, keep this shape and replace the adapter in lib/content.js.

export const siteContent = {
  brand: {
    name: "VidenBridge",
    tagline: "Research. Protect. Innovate.",
    description:
      "Patent intelligence, market research, and technology watch services for better-informed business decisions.",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: [
        {
          label: "IT Solutions",
          href: "/services/digital-solutions",
          description:
            "Web development, UI/UX design, graphics design, and SEO.",
        },
      ],
    },
    // { label: "Our Approach", href: "/#approach" },
    // { label: "Contact", href: "/contact-us" },
  ],
  contact: {
    email: "enquiries@videnbridge.com",
    phone: "",
    location: "",
  },
  home: {
    heroSlides: [
      {
        eyebrow: "INTELLECTUAL PROPERTY & TECHNOLOGY INTELLIGENCE",
        title: "Bridging Intelligence. Enabling Innovation. Driving Business Growth.",
        description:
          "Transform patent, market and technology insights into strategic business decisions.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=85",
        imageAlt: "Digital global network representing technology intelligence",
        primaryCta: { label: "Explore Our Services", href: "#services" },
        secondaryCta: { label: "Contact Us", href: "/contact-us" },
      },
      {
        eyebrow: "PATENT & MARKET INTELLIGENCE",
        title: "See the Landscape. Find the Opportunity.",
        description:
          "Understand technology developments, competitor strategies and emerging market opportunities with focused research.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
        imageAlt: "Modern glass business buildings",
        primaryCta: { label: "Discover Our Expertise", href: "#services" },
        secondaryCta: { label: "Talk to Our Team", href: "/contact-us" },
      },
      {
        eyebrow: "MONTHLY & QUARTERLY TECHNOLOGY WATCH",
        title: "Anticipate Change. Stay Ahead.",
        description:
          "Stay informed with structured intelligence updates on selected technologies, competitors and industry developments.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=85",
        imageAlt: "Technology circuit board close-up",
        primaryCta: { label: "Explore Technology Watch", href: "#services" },
        secondaryCta: { label: "Send an Enquiry", href: "/contact-us" },
      },
    ],
    intro: {
      eyebrow: "INTELLIGENCE THAT MOVES YOUR BUSINESS FORWARD",
      title: "Turn complex information into clear direction.",
      body:
        "In a rapidly evolving business environment, the ability to identify opportunities, understand competition, and anticipate technological change can make a meaningful difference. VidenBridge brings together patent analysis, market intelligence, and technology monitoring to help businesses understand what is happening today, recognize what is changing, and identify what could matter tomorrow.",
      closing:
        "Our research-driven approach bridges the gap between information and action, supporting decisions across innovation, research and development, intellectual property, and business strategy.",
    },
    servicesHeading: {
      eyebrow: "OUR CORE SERVICES",
      title: "Intelligence built around your business questions",
      body:
        "Research-led services to help you understand innovation, markets, and technology developments.",
    },
    services: [
      {
        number: "01",
        icon: "◎",
        title: "Patent Intelligence",
        subtitle: "Uncover innovation trends. Understand the competitive landscape.",
        description:
          "Explore patent landscapes, evaluate technology developments, benchmark competitors, and identify potential opportunities and risks.",
        points: [
          "Patent Landscape Analysis",
          "Patent Portfolio and Competitor Analysis",
          "Patent Search & Due Diligence",
          "Patent Commercialization",
          "Technology Trend and Innovation Mapping",
          "White-Space and Opportunity Identification",
          "Patent Monitoring and Periodic Updates",
        ],
        linkLabel: "Explore Patent Intelligence",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=85",
        imageAlt: "Digital global network representing patent intelligence",
      },
      {
        number: "02",
        icon: "↗",
        title: "Market Intelligence",
        subtitle: "Understand your market. Identify opportunities. Make informed decisions.",
        description:
          "Tailored market research to assess industry developments, understand competitor positioning, evaluate emerging opportunities, and support evidence-based decisions.",
        points: [
          "Industry and Market Landscape Analysis",
          "Market Trends and Growth Assessment",
          "Competitor Benchmarking and Profiling",
          "Emerging Opportunity Identification",
          "Technology and Market Opportunity Assessment",
        ],
        linkLabel: "Explore Market Research",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
        imageAlt: "Modern glass business buildings representing market intelligence",
      },
      {
        number: "03",
        icon: "⌁",
        title: "Technology Watch",
        subtitle: "Stay informed. Anticipate change. Keep pace with innovation.",
        description:
          "Monthly and quarterly intelligence updates on selected technologies, competitors, and industry developments.",
        points: [
          "Emerging Technology Developments",
          "New Patent Publications and Innovation Activity",
          "Competitor Technology Monitoring",
          "Research and Industry Developments",
          "Key Trends, Opportunities, and Potential Risks",
          "Monthly or Quarterly Intelligence Reports",
        ],
        linkLabel: "Explore Technology Watch",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=85",
        imageAlt: "Technology circuit board close-up representing technology watch",
      },
    ],
    whyUs: [
      {
        title: "Research-Driven Intelligence",
        body: "Structured research and meaningful analysis turn complex information into clear, decision-relevant insights.",
      },
      {
        title: "Tailored to Your Objectives",
        body: "Research can be aligned with your technology domains, business questions, competitive landscape, and reporting requirements.",
      },
      {
        title: "A Forward-Looking Perspective",
        body: "Examine patents, markets, and technology developments to identify important changes and potential opportunities.",
      },
      {
        title: "Periodic Insights",
        body: "Monthly and quarterly technology watch helps maintain visibility into selected technology areas and competitive developments.",
      },
      {
        title: "From Information to Action",
        body: "Organized, analyzed, and clearly presented intelligence supports practical business and innovation decisions.",
      },
    ],
    audiences: [
      "Research & Development Teams",
      "Intellectual Property and Patent Professionals",
      "Innovation and Technology Leaders",
      "Corporate Strategy and Business Development Teams",
      "Product Development and Engineering Teams",
      "Startups, SMEs, and Established Enterprises",
    ],
    approach: [
      {
        number: "01",
        icon: "🎯",
        title: "Understand Your Objectives",
        body: "We begin by understanding your business questions, research scope, technology interests, and desired outcomes.",
      },
      {
        number: "02",
        icon: "🔎",
        title: "Conduct Focused Research",
        body: "We identify and examine relevant patent, technical, market, and industry information based on the agreed scope.",
      },
      {
        number: "03",
        icon: "📊",
        title: "Analyze and Develop Insights",
        body: "We organize findings to highlight relevant patterns, competitive developments, technology trends, and potential opportunities.",
      },
      {
        number: "04",
        icon: "🚀",
        title: "Deliver Decision-Ready Intelligence",
        body: "We present findings in a structured format suited to your requirements, with periodic reporting options for ongoing monitoring engagements.",
      },
    ],
    finalCta: {
      eyebrow: "LET'S WORK TOGETHER",
      title: "Make better decisions with the right intelligence.",
      body:
        "Partner with VidenBridge for Patent Intelligence, Market Research, and Monthly or Quarterly Technology Watch services tailored to your business needs.",
      buttonLabel: "Request a Consultation",
    },
  },
  servicesPage: {
    heading: {
      eyebrow: "OUR SERVICES",
      title: "Intelligence services built around your business questions",
      lead:
        "Each service combines focused research and structured analysis. Explore the overview below or jump straight to the service you need.",
    },
    detail: {
      offeringsLabel: "What We Offer",
      ctaLabel: "Request a Consultation",
    },
    finalCta: {
      eyebrow: "LET'S WORK TOGETHER",
      title: "Not sure which service fits your needs?",
      body:
        "Talk to our team about your research questions — from patent landscapes and market opportunities to ongoing technology monitoring.",
      buttonLabel: "Contact Our Team",
    },
    digitalSolutionsLink: {
      icon: "🌐",
      eyebrow: "IT SolutionS",
      title: "IT Solutions",
      subtitle: "Development. Design. Growth.",
      description:
        "Website development, web and UI/UX design, graphics design, and SEO — everything your brand needs online, delivered by one team.",
      href: "/services/digital-solutions",
      label: "Explore IT Solutions",
    },
  },
  digitalSolutionsPage: {
    metadata: {
      title: "IT Solutions | VidenBridge",
      description:
        "Website development, web and UI/UX design, graphics design, and SEO services to launch and grow your digital presence.",
    },
    heading: {
      eyebrow: "IT SolutionS",
      title: "Everything your business needs to look sharp and grow online",
      lead:
        "From building fast websites and designing clean user experiences to creating brand visuals and improving search rankings — one partner for your entire digital presence.",
    },
    detail: {
      offeringsLabel: "What We Deliver",
      ctaLabel: "Start a Project",
    },
    finalCta: {
      eyebrow: "LET'S BUILD TOGETHER",
      title: "Ready to take your digital presence to the next level?",
      body:
        "Share your idea or project details — we will shape the right mix of development, design, and digital marketing to meet your business goals.",
      buttonLabel: "Discuss Your Project",
    },
    services: [
      {
        number: "01",
        icon: "💻",
        title: "Website Development",
        subtitle: "Fast. Secure. Scalable. Built to grow with your business.",
        description:
          "We build responsive, secure, and performance-optimized websites — from simple business sites and landing pages to corporate multi-page platforms that load fast, rank well, and convert visitors into customers.",
        points: [
          "Business Websites and Landing Pages",
          "Corporate and Multi-page Websites",
          "Mobile-first Responsive Development",
          "Performance and Speed Optimization",
          "Secure SSL and Best-practice Security Setup",
          "CMS Integration for Self-managed Content",
          "SEO-friendly Development Structure",
          "Ongoing Maintenance and Support",
        ],
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000&q=85",
        imageAlt: "Code on a developer screen representing website development",
      },
      {
        number: "02",
        icon: "🖥️",
        title: "Web Design",
        subtitle:
          "Clean layouts and visuals that communicate your brand instantly.",
        description:
          "We design modern, responsive websites that guide visitors naturally from interest to action — balancing brand personality, content clarity, and conversion-focused structure.",
        points: [
          "Modern, Brand-aligned Visual Design",
          "Responsive Layouts for All Devices",
          "Intuitive Content Structure and Navigation",
          "Landing Page Design for Campaigns",
          "Visual Hierarchy and Content Styling",
          "Accessible Design Practices",
          "Multi-page Website Redesigns",
        ],
        image:
          "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=2000&q=85",
        imageAlt: "Designer workspace representing web design",
      },
      {
        number: "03",
        icon: "✏️",
        title: "UI/UX Design",
        subtitle:
          "User experiences designed around real behavior and clarity.",
        description:
          "We shape digital products around real users — researching how they think, mapping their journeys, and turning complexity into simple, enjoyable interfaces for web and mobile.",
        points: [
          "User Research and Behavior Analysis",
          "User Flows and Information Architecture",
          "Wireframes and Interactive Prototypes",
          "Web and Mobile App UI Design",
          "Usability Testing and Iteration",
          "Component-based Design Systems",
          "Design Handoff for Developers",
        ],
        image:
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=2000&q=85",
        imageAlt: "Wireframes and interfaces representing UI/UX design",
      },
      {
        number: "04",
        icon: "🎨",
        title: "Graphics Design",
        subtitle:
          "Brand visuals that make your business memorable everywhere.",
        description:
          "From logos and brand identities to marketing creatives and print materials — we craft visuals that give your business a consistent, professional look across every touchpoint.",
        points: [
          "Logo and Brand Identity Design",
          "Brand Color, Typography, and Guidelines",
          "Social Media Creatives and Ad Banners",
          "Marketing Collateral and Print Design",
          "Presentation and Infographic Design",
          "Product Packaging Design",
          "Editable Source Files and Asset Delivery",
        ],
        image:
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=2000&q=85",
        imageAlt: "Colorful design work representing graphics design",
      },
      {
        number: "05",
        icon: "📈",
        title: "SEO",
        subtitle:
          "Get found on Google by the customers already searching for you.",
        description:
          "We improve how your website ranks and performs on search engines — combining technical fixes, content optimization, and a clear keyword strategy to bring consistent, high-intent traffic.",
        points: [
          "Keyword Research and Search Intent Mapping",
          "On-page SEO for All Key Pages",
          "Technical SEO Audits and Speed Fixes",
          "Content Optimization and Blog SEO",
          "Local SEO with Google Business Profile",
          "Backlink and Authority Building",
          "Monthly Performance Reports and Insights",
        ],
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=85",
        imageAlt: "Analytics charts representing SEO performance",
      },
    ],
  },
  about: {
    hero: {
      eyebrow: "ABOUT US",
      title: "Bridging Innovation and Intellectual Property",
      body:
        "We are a research-driven intelligence partner helping businesses explore innovation, understand markets, and stay informed in a competitive world.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
      imageAlt: "Contemporary glass office building",
    },
    overview: {
      eyebrow: "COMPANY OVERVIEW",
      title: "Insight for confident decisions",
      body:
        "VidenBridge helps organizations navigate complex innovation landscapes through specialized Patent Intelligence, Market Research, and Technology Watch services. We transform extensive technical, patent, and market information into meaningful insights that support informed decision-making, strengthen competitive positioning, and uncover new opportunities for growth.",
      secondBody:
        "Whether you are exploring emerging technologies, evaluating competitors, assessing market potential, or tracking industry developments, our research-driven approach helps you move forward with greater clarity and confidence.",
    },
    principles: [
      {
        number: "01",
        title: "Research with purpose",
        body: "Focus research on the questions, technology domains, and business objectives that matter to each engagement.",
      },
      {
        number: "02",
        title: "Analysis with context",
        body: "Organize patent, market, technical, and industry information to reveal useful patterns and developments.",
      },
      {
        number: "03",
        title: "Insights for action",
        body: "Present findings in a structured, decision-ready format that supports innovation and business strategy.",
      },
    ],
    approachTitle: "Understand. Research. Analyze. Deliver.",
    closingTitle: "Let's bridge the gap between knowledge and opportunity.",
    closingBody:
      "Explore how VidenBridge can support your research, intellectual property, market intelligence, and technology monitoring needs.",
  },
};
