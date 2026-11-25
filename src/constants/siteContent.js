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
    { label: "Industries", href: "/industries" },
    {
      label: "Services",
      href: "/services",
      children: [
        {
          label: "Patent Intelligence",
          href: "/services#patent-intelligence",
          description:
            "Patent landscapes, competitor analysis, and due diligence searches.",
        },
        {
          label: "Market Intelligence",
          href: "/services#market-intelligence",
          description:
            "Market research and competitive intelligence for better decisions.",
        },
        {
          label: "Technology Watch",
          href: "/services#technology-watch",
          description:
            "Monthly and quarterly monitoring of technologies and competitors.",
        },
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
          "/image/hero-technology-network.jpg",
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
          "/image/team-strategy.jpg",
        imageAlt: "Team analyzing strategy in a modern office",
        primaryCta: { label: "Discover Our Expertise", href: "#services" },
        secondaryCta: { label: "Talk to Our Team", href: "/contact-us" },
      },
      {
        eyebrow: "MONTHLY & QUARTERLY TECHNOLOGY WATCH",
        title: "Anticipate Change. Stay Ahead.",
        description:
          "Stay informed with structured intelligence updates on selected technologies, competitors and industry developments.",
        image:
          "/image/circuit-board.jpg",
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
        icon: "target",
        title: "Patent Intelligence",
        subtitle: "Uncover innovation trends. Understand the competitive landscape.",
        description:
          "Explore patent landscapes, evaluate technology developments, benchmark competitors, and identify potential opportunities and risks.",
        points: [
          {
            title: "Patent Landscape Analysis",
            icon: "map",
            
          },
          {
            title: "Patent Portfolio and Competitor Analysis",
            icon: "building",
            // items: [
            //   "Competitor portfolio benchmarking",
            //   "Filing activity and R&D positioning",
            //   "Portfolio strength and quality indicators",
            //   "Collaboration and licensing signals",
            // ],
          },
          {
            title: "Patent Search & Due Diligence",
            icon: "search",
            items: [
              "Patentability & Prior Art Search",
              "Patent Validity & Invalidity Search",
              "Freedom to Operate (FTO) Search",
              "Design Patent & Industrial Design Search",
              "Assignee Based Search"
            ],
          },
          {
            title: "Patent Commercialization",
            icon: "briefcase",
            // items: [
            //   "Licensing opportunity identification",
            //   "Potential buyers and collaborators",
            //   "Claims-to-application mapping",
            //   "Market readiness assessment",
            // ],
          },
          {
            title: "Technology Trend and Innovation Mapping",
            icon: "trend",
            // items: [
            //   "Emerging technology signals",
            //   "Innovation lifecycle stage assessment",
            //   "Key innovators and research institutions",
            // ],
          },
          {
            title: "White-Space and Opportunity Identification",
            icon: "bulb",
            // items: [
            //   "Unexplored technology areas",
            //   "Gap analysis against competitor portfolios",
            //   "R&D and filing opportunity recommendations",
            // ],
          },
          {
            title: "Patent Monitoring and Periodic Updates",
            icon: "refresh",
            // items: [
            //   "Competitor publication tracking",
            //   "Technology and assignee alerts",
            //   "Monthly or quarterly digest reports",
            // ],
          },
        ],
        linkLabel: "Explore Patent Intelligence",
        image:
          "/image/hero-technology-network.jpg",
        imageAlt: "Digital global network representing patent intelligence",
      },
      {
        number: "02",
        icon: "trend",
        title: "Market Intelligence",
        subtitle: "Understand your market. Identify opportunities. Make informed decisions.",
        description:
          "Tailored market research to assess industry developments, understand competitor positioning, evaluate emerging opportunities, and support evidence-based decisions.",
        points: [
          {
            title: "Industry and Market Landscape Analysis",
            icon: "globe",
            // items: [
            //   "Market structure and segmentation",
            //   "Value chain and ecosystem mapping",
            //   "Regional market overview",
            // ],
          },
          {
            title: "Market Trends and Growth Assessment",
            icon: "chart",
            // items: [
            //   "Market size and growth indicators",
            //   "Demand drivers and restraints",
            //   "Technology adoption trends",
            // ],
          },
          {
            title: "Competitor Benchmarking and Profiling",
            icon: "scale",
            // items: [
            //   "Key player profiles and strategies",
            //   "Product and service comparison",
            //   "Strengths and positioning analysis",
            // ],
          },
          {
            title: "Emerging Opportunity Identification",
            icon: "rocket",
            // items: [
            //   "New market entry points",
            //   "Unmet needs and customer gaps",
            //   "Partnership and investment signals",
            // ],
          },
          {
            title: "Technology and Market Opportunity Assessment",
            icon: "compass",
            // items: [
            //   "Technology readiness vs market fit",
            //   "Risk and opportunity comparison",
            //   "Go-to-market recommendations",
            // ],
          },
        ],
        linkLabel: "Explore Market Research",
        image:
          "/image/market-charts.jpg",
        imageAlt: "Analytics charts and graphs representing market intelligence",
      },
      {
        number: "03",
        icon: "activity",
        title: "Technology Watch",
        subtitle: "Stay informed. Anticipate change. Keep pace with innovation.",
        description:
          "Monthly and quarterly intelligence updates on selected technologies, competitors, and industry developments.",
        points: [
          {
            title: "Emerging Technology Developments",
            icon: "flask",
            // items: [
            //   "New technology announcements",
            //   "Research breakthroughs",
            //   "Prototype and product launches",
            // ],
          },
          {
            title: "New Patent Publications and Innovation Activity",
            icon: "file",
            // items: [
            //   "Recent publications in focus domains",
            //   "Filing and grant activity",
            //   "Notable innovator movements",
            // ],
          },
          {
            title: "Competitor Technology Monitoring",
            icon: "radar",
            // items: [
            //   "Competitor R&D activity",
            //   "Product and strategy updates",
            //   "Partnership and funding moves",
            // ],
          },
          {
            title: "Research and Industry Developments",
            icon: "microscope",
            // items: [
            //   "Academic and research publications",
            //   "Regulatory and standards updates",
            //   "Industry events and collaborations",
            // ],
          },
          {
            title: "Key Trends, Opportunities, and Potential Risks",
            icon: "alert",
            // items: [
            //   "Trend synthesis from period data",
            //   "Opportunity signals",
            //   "Risk and disruption indicators",
            // ],
          },
          {
            title: "Monthly or Quarterly Intelligence Reports",
            icon: "calendar",
            // items: [
            //   "Structured executive summary",
            //   "Visual charts and landscape maps",
            //   "Action-oriented recommendations",
            // ],
          },
        ],
        linkLabel: "Explore Technology Watch",
        image:
          "/image/circuit-board.jpg",
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
        icon: "target",
        title: "Understand Your Objectives",
        body: "We begin by understanding your business questions, research scope, technology interests, and desired outcomes.",
      },
      {
        number: "02",
        icon: "search",
        title: "Conduct Focused Research",
        body: "We identify and examine relevant patent, technical, market, and industry information based on the agreed scope.",
      },
      {
        number: "03",
        icon: "chart",
        title: "Analyze and Develop Insights",
        body: "We organize findings to highlight relevant patterns, competitive developments, technology trends, and potential opportunities.",
      },
      {
        number: "04",
        icon: "rocket",
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
      icon: "globe",
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
    whyUs: {
      eyebrow: "WHY CHOOSE US?",
      title: "Your Trusted Partner for Digital Growth",
      body:
        "We combine creativity, technology, and strategy to deliver smart digital solutions that help your business grow and stand out.",
      points: [
        {
          title: "Expertise Across Services",
          body: "Complete IT and digital solutions under one roof.",
        },
        {
          title: "Creative Approach",
          body: "Unique designs that make your brand stand out.",
        },
        {
          title: "User-Focused Design",
          body: "Seamless and engaging digital experiences.",
        },
        {
          title: "Growth-Driven Strategy",
          body: "SEO solutions to improve your online visibility.",
        },
        {
          title: "Quality & Reliability",
          body: "High-quality work with dedicated support.",
        },
      ],
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
        icon: "monitor",
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
          "/image/website-development.jpg",
        imageAlt: "Code on a developer screen representing website development",
      },
      {
        number: "02",
        icon: "layout",
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
          "/image/web-design.jpg",
        imageAlt: "Designer workspace representing web design",
      },
      {
        number: "03",
        icon: "pen",
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
          "/image/ui-ux-design.jpg",
        imageAlt: "Wireframes and interfaces representing UI/UX design",
      },
      {
        number: "04",
        icon: "layers",
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
          "/image/graphics-design.jpg",
        imageAlt: "Colorful design work representing graphics design",
      },
      {
        number: "05",
        icon: "trend",
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
          "/image/seo-analytics.jpg",
        imageAlt: "Analytics charts representing SEO performance",
      },
    ],
  },
  industriesPage: {
    metadata: {
      title: "Industries We Serve | VidenBridge",
      description:
        "Explore the industries VidenBridge supports through Patent Intelligence, Market Intelligence, Technology Watch and Digital Solutions.",
    },
    slides: [
      {
        eyebrow: "INDUSTRIES WE SERVE",
        title: "Industries We Serve",
        tagline: "Connecting Industry Knowledge with Innovation and Intelligence",
        description:
          "Every industry faces unique challenges, evolving technologies, and changing market dynamics. VidenBridge helps businesses navigate these complexities through specialized Patent Intelligence, Market Intelligence, Technology Watch, and Digital Solutions.",
        image: "/image/office-glass-building.jpg",
        imageAlt: "Modern glass office building representing industry expertise",
        primaryCta: { label: "Explore Our Expertise", href: "#industries" },
        secondaryCta: { label: "Discuss Your Industry Needs", href: "/contact-us" },
      },
      {
        eyebrow: "INDUSTRIES WE SERVE — 02",
        title: "Automotive & Mobility",
        tagline: "Driving Innovation in the Future of Mobility",
        description:
          "The automotive industry is experiencing a significant transformation driven by electric vehicles, autonomous driving, connected mobility, advanced manufacturing, and sustainable transportation. VidenBridge supports manufacturers, technology developers, and suppliers through patent research, technology monitoring, and market intelligence.",
        image: "/image/hero-technology-network.jpg",
        imageAlt: "Digital network representing automotive technology intelligence",
        primaryCta: { label: "Explore Automotive", href: "#automotive" },
        secondaryCta: { label: "Discuss Your Industry Needs", href: "/contact-us" },
      },
      {
        eyebrow: "INDUSTRIES WE SERVE — 03",
        title: "Healthcare & Medical Devices",
        tagline: "Advancing Healthcare Through Technology Intelligence",
        description:
          "Healthcare innovation continues to evolve through medical devices, digital health technologies, diagnostic solutions, medical imaging, and advanced treatment systems. VidenBridge helps healthcare innovators explore patent landscapes, identify emerging technologies, and understand market developments.",
        image: "/image/team-strategy.jpg",
        imageAlt: "Team analyzing healthcare technology strategy",
        primaryCta: { label: "Explore Healthcare", href: "#healthcare" },
        secondaryCta: { label: "Discuss Your Industry Needs", href: "/contact-us" },
      },
      {
        eyebrow: "INDUSTRIES WE SERVE — 04",
        title: "IT & Telecommunications",
        tagline: "Navigating the Rapid Evolution of Digital Technologies",
        description:
          "The information technology and telecommunications sectors are continuously evolving through artificial intelligence, cloud computing, cybersecurity, connected devices, and next-generation communication networks. VidenBridge provides technology intelligence, patent research, and market insights.",
        image: "/image/circuit-board.jpg",
        imageAlt: "Technology circuit board representing IT innovation",
        primaryCta: { label: "Explore IT & Telecom", href: "#it-telecommunications" },
        secondaryCta: { label: "Discuss Your Industry Needs", href: "/contact-us" },
      },
    ],
    overview: {
      eyebrow: "INDUSTRY OVERVIEW",
      title: "Industry Expertise Across Diverse Sectors.",
      body:
        "We work across diverse industries, understanding their technological developments, competitive environments, and evolving business requirements. Our research-driven approach helps organizations identify emerging opportunities, evaluate innovation landscapes, monitor competitors, and make informed strategic decisions.",
      closing:
        "From emerging technologies and intellectual property developments to competitive landscapes and market opportunities, we transform complex information into actionable insights that support smarter decisions, strengthen innovation strategies, and drive sustainable business growth.",
    },
    heading: {
      eyebrow: "INDUSTRIES WE SERVE",
      title: "Supporting Innovation Across Industries",
      lead:
        "Select an industry to explore its technology landscape and focus areas.",
    },
    detailHeading: {
      eyebrow: "DETAILED INDUSTRY EXPERTISE",
      title: "Knowledge for the sectors shaping tomorrow.",
      lead:
        "Explore the technology domains and market developments where focused research and intelligence can support better-informed decisions.",
    },
    industries: [
      {
        number: "01",
        anchorId: "automotive",
        icon: "trend",
        title: "Automotive & Mobility",
        subtitle: "Driving Innovation in the Future of Mobility",
        description:
          "The automotive industry is experiencing a significant transformation driven by electric vehicles, autonomous driving, connected mobility, advanced manufacturing, and sustainable transportation. As technology continues to reshape vehicle design and mobility solutions, businesses must stay informed about emerging innovations and competitive developments.",
        description2:
          "VidenBridge supports automotive manufacturers, technology developers, suppliers, and innovators through patent research, technology monitoring, and market intelligence.",
        focus: [
          "Electric Vehicles (EVs) & Hybrid Technologies",
          "Battery Systems & Energy Storage",
          "Autonomous & Connected Vehicles",
          "Advanced Driver Assistance Systems (ADAS)",
          "Automotive Electronics & Software",
          "Lightweight Materials & Vehicle Engineering",
          "Smart Mobility & Transportation Solutions",
        ],
      },
      {
        number: "02",
        anchorId: "healthcare",
        icon: "activity",
        title: "Healthcare & Medical Devices",
        subtitle: "Advancing Healthcare Through Technology Intelligence",
        description:
          "Healthcare innovation continues to evolve through medical devices, digital health technologies, diagnostic solutions, medical imaging, and advanced treatment systems. Understanding technological advancements and the competitive landscape is essential for organizations developing next-generation healthcare solutions.",
        description2:
          "VidenBridge helps healthcare innovators and medical technology businesses explore patent landscapes, identify emerging technologies, and understand market developments.",
        focus: [
          "Medical Devices & Equipment",
          "Diagnostic & Imaging Technologies",
          "Digital Health & Telemedicine",
          "Wearable Healthcare Technologies",
          "Surgical Instruments & Robotics",
          "Remote Patient Monitoring",
          "Healthcare Technology Innovation",
        ],
      },
      {
        number: "03",
        anchorId: "pharma",
        icon: "flask",
        title: "Pharmaceuticals & Biotechnology",
        subtitle: "Supporting Breakthroughs in Pharmaceutical and Biotech Innovation",
        description:
          "The pharmaceutical and biotechnology industries are driven by continuous research, scientific discoveries, and evolving intellectual property landscapes. Organizations must navigate complex patent environments, emerging research trends, competitive developments, and commercialization opportunities.",
        description2:
          "VidenBridge provides research and intelligence support to help pharmaceutical companies, biotechnology firms, and research organizations understand innovation trends and make informed strategic decisions.",
        focus: [
          "Drug Discovery & Development",
          "Pharmaceutical Formulations",
          "Biologics & Biosimilars",
          "Biotechnology Innovations",
          "Gene & Cell-Based Technologies",
          "Vaccines & Therapeutic Solutions",
          "Pharmaceutical Patent Landscapes",
        ],
      },
      {
        number: "04",
        anchorId: "electronics",
        icon: "monitor",
        title: "Electronics & Semiconductors",
        subtitle: "Empowering the Next Generation of Electronic Innovation",
        description:
          "The electronics and semiconductor industries are at the center of technological advancement. Rapid developments in chip architecture, electronic components, artificial intelligence hardware, sensors, and advanced semiconductor manufacturing are creating new opportunities and competitive challenges.",
        description2:
          "VidenBridge helps businesses monitor technology developments, analyze patent activity, and understand the competitive landscape across electronic and semiconductor technologies.",
        focus: [
          "Semiconductor Devices & Chip Design",
          "Integrated Circuits & Microprocessors",
          "Advanced Packaging Technologies",
          "Sensors & Electronic Components",
          "Artificial Intelligence Hardware",
          "Consumer Electronics",
          "Printed & Flexible Electronics",
        ],
      },
      {
        number: "05",
        anchorId: "materials",
        icon: "layers",
        title: "Chemicals & Advanced Materials",
        subtitle: "Exploring Innovation in Chemical and Material Science",
        description:
          "Advancements in chemical engineering and material science are transforming industries through the development of high-performance materials, advanced polymers, specialty chemicals, and sustainable alternatives. Identifying emerging technologies and understanding intellectual property developments are essential for maintaining competitiveness.",
        description2:
          "VidenBridge supports businesses in exploring innovation trends, evaluating patent landscapes, and identifying opportunities across chemical and material technologies.",
        focus: [
          "Specialty & Industrial Chemicals",
          "Advanced Polymers & Composites",
          "Nanotechnology & Nanomaterials",
          "Sustainable & Bio-Based Materials",
          "Coatings & Surface Technologies",
          "Advanced Functional Materials",
          "Material Recycling & Recovery",
        ],
      },
      {
        number: "06",
        anchorId: "energy",
        icon: "bulb",
        title: "Energy & Renewable Technologies",
        subtitle: "Powering the Transition Toward Sustainable Energy",
        description:
          "The global energy landscape is evolving through renewable energy adoption, energy storage innovation, electrification, and clean technology development. Businesses must continuously evaluate technological progress, market opportunities, and emerging competitive trends.",
        description2:
          "VidenBridge helps organizations monitor energy innovations, explore patent developments, and understand the evolving renewable energy and sustainability landscape.",
        focus: [
          "Solar & Photovoltaic Technologies",
          "Wind Energy Systems",
          "Battery & Energy Storage Solutions",
          "Hydrogen & Fuel Cell Technologies",
          "Smart Grids & Energy Management",
          "Electric Power Generation",
          "Clean Energy & Carbon Reduction Technologies",
        ],
      },
      {
        number: "07",
        anchorId: "it-telecommunications",
        icon: "globe",
        title: "Information Technology & Telecommunications",
        subtitle: "Navigating the Rapid Evolution of Digital Technologies",
        description:
          "The information technology and telecommunications sectors are continuously evolving through artificial intelligence, cloud computing, cybersecurity, connected devices, and next-generation communication networks. Staying ahead requires continuous monitoring of technology developments and competitive activity.",
        description2:
          "VidenBridge provides technology intelligence, patent research, and market insights that help businesses understand emerging digital innovations and identify new opportunities.",
        focus: [
          "Artificial Intelligence & Machine Learning",
          "Cloud Computing & Data Technologies",
          "Cybersecurity & Information Security",
          "Internet of Things (IoT)",
          "5G & Next-Generation Networks",
          "Software & Enterprise Technologies",
          "Blockchain & Distributed Systems",
        ],
      },
      {
        number: "08",
        anchorId: "aerospace",
        icon: "rocket",
        title: "Aerospace & Defence",
        subtitle: "Supporting Innovation in Advanced Aerospace Technologies",
        description:
          "Aerospace and defence technologies are advancing through developments in propulsion systems, advanced materials, avionics, autonomous systems, satellite technologies, and engineering solutions. Understanding these developments is essential for organizations operating in highly technology-driven and competitive environments.",
        description2:
          "VidenBridge supports technology research and competitive intelligence initiatives to help businesses understand emerging innovations and technological developments.",
        focus: [
          "Aircraft & Aerospace Engineering",
          "Propulsion & Engine Technologies",
          "Satellite & Space Technologies",
          "Autonomous Aerial Systems",
          "Advanced Aerospace Materials",
          "Avionics & Navigation Systems",
          "Defence & Security Technologies",
        ],
      },
      {
        number: "09",
        anchorId: "manufacturing",
        icon: "building",
        title: "Manufacturing & Industrial Engineering",
        subtitle: "Transforming Industrial Capabilities Through Innovation",
        description:
          "Manufacturing and industrial engineering are undergoing significant changes through automation, robotics, smart manufacturing, industrial IoT, and advanced production technologies. Businesses must understand evolving technologies and competitive developments to improve efficiency and maintain their market position.",
        description2:
          "VidenBridge helps industrial organizations explore technology advancements, analyze patent activity, and identify opportunities for innovation and operational improvement.",
        focus: [
          "Industrial Automation & Robotics",
          "Smart Manufacturing & Industry 4.0",
          "Advanced Manufacturing Processes",
          "Industrial Equipment & Machinery",
          "Additive Manufacturing & 3D Printing",
          "Predictive Maintenance Technologies",
          "Process Optimization & Engineering",
        ],
      },
      {
        number: "10",
        anchorId: "consumer",
        icon: "briefcase",
        title: "Consumer Goods, Retail & Packaging",
        subtitle: "Understanding Consumer Trends and Product Innovation",
        description:
          "Consumer goods, retail, and packaging businesses operate in rapidly changing markets shaped by evolving customer expectations, product innovation, sustainability, and digital transformation. Understanding consumer preferences, market movements, and competitive strategies is essential for developing successful products and strengthening brand positioning.",
        description2:
          "VidenBridge supports businesses through market research, competitive intelligence, patent analysis, and technology monitoring to help identify emerging trends and innovation opportunities.",
        focus: [
          "Consumer Product Innovation",
          "Food & Beverage Technologies",
          "Sustainable & Smart Packaging",
          "Personal Care & Cosmetics",
          "Retail & E-commerce Technologies",
          "Product Design & Development",
          "Consumer Market & Competitor Analysis",
        ],
      },
    ],
    capabilitiesHeading: {
      eyebrow: "OUR CAPABILITIES",
      title: "Intelligence and digital solutions that move businesses forward.",
      lead:
        "Regardless of the industry, businesses need reliable information, technological awareness, and effective digital capabilities to remain competitive. VidenBridge combines specialized research and technology-focused services to support organizations at different stages of their business and innovation journeys.",
    },
    capabilities: [
      {
        number: "01",
        tag: "RESEARCH",
        icon: "target",
        title: "Patent Intelligence",
        body:
          "Understand the intellectual property landscape, analyze patent activity, identify technological trends, and explore innovation opportunities through structured patent research and analysis.",
      },
      {
        number: "02",
        tag: "MARKET",
        icon: "chart",
        title: "Market Intelligence",
        body:
          "Gain insights into industry developments, market dynamics, competitor strategies, customer trends, and emerging business opportunities to support informed decision-making.",
      },
      {
        number: "03",
        tag: "MONITORING",
        icon: "activity",
        title: "Technology Watch",
        body:
          "Stay informed about emerging technologies, competitor innovations, research developments, and industry advancements through continuous technology monitoring and intelligence reporting.",
      },
      {
        number: "04",
        tag: "DIGITAL",
        icon: "monitor",
        title: "Digital Solutions",
        body:
          "Strengthen your digital presence through website development, web design, UI/UX design, graphic design, and SEO solutions aligned with your business objectives.",
      },
    ],
    why: {
      eyebrow: "WHY VIDENBRIDGE?",
      title: "Your partner in research, innovation and digital growth.",
      body:
        "Every industry has its own challenges, but the need for reliable intelligence and informed decision-making remains universal.",
      body2:
        "At VidenBridge, we combine research-driven thinking, industry awareness, and technology-focused capabilities to help businesses move forward with greater clarity and confidence.",
      points: [
        {
          title: "Industry-Oriented Approach",
          body: "We consider the unique technological, competitive, and business requirements of different industry sectors.",
        },
        {
          title: "Research-Driven Insights",
          body: "We transform complex patent, market, and technology information into structured insights that support strategic decisions.",
        },
        {
          title: "Innovation-Focused Perspective",
          body: "We help businesses understand emerging developments, evaluate opportunities, and stay informed about technological advancements.",
        },
        {
          title: "Integrated Capabilities",
          body: "Our combination of intelligence research and digital solutions provides support across multiple business requirements.",
        },
        {
          title: "Business-Focused Solutions",
          body: "We align our research and digital capabilities with practical business objectives and evolving organizational needs.",
        },
      ],
    },
    finalCta: {
      eyebrow: "LET'S EXPLORE NEW OPPORTUNITIES TOGETHER",
      title: "Turn Industry Challenges into Opportunities for Growth.",
      body:
        "Whether you are exploring a new technology, evaluating a competitive landscape, monitoring industry developments, or strengthening your digital presence, VidenBridge is ready to support your business objectives. Let's discuss your industry requirements and discover how our intelligence and digital capabilities can help you move forward.",
      buttonLabel: "Talk to Our Experts",
    },
  },
  about: {
    hero: {
      eyebrow: "ABOUT US",
      title: "Bridging Innovation and Intellectual Property",
      body:
        "We are a research-driven intelligence partner helping businesses explore innovation, understand markets, and stay informed in a competitive world.",
      image:
        "/image/office-interior.jpg",
      imageAlt: "Modern bright office interior",
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
  