import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Austin Jones — Solutions Architect",
  author: "Austin Jones",
  description:
    "Technical leader with 6+ years of experience in fintech and financial services, focused on enterprise integrations, API design, and solution delivery. Strong background in bridging business goals with engineering execution. Skilled in Python, SaaS platforms, and developer experience. Known for driving successful implementations with top-tier financial institutions and mentoring technical teams.",
  lang: "en",
  siteLogo: "https://media.licdn.com/dms/image/v2/C4E03AQFqzy6DiSkF-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1649624512231?e=1754524800&v=beta&t=Nw-W7B09H1tOq38HF6CnClqs1Fney-VBX13wzfxkDZ4",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/austin-jones-262097a0/" },
    { text: "Github", href: "https://github.com/Austin-Jones" },
  ],
  socialImage: "/share.png",
  canonicalURL: "https://www.austinwjones.com/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Austin Jones",
    specialty: "Manager, Solutions Architecture",
    summary:
      "Technical leader with 6+ years of experience in fintech and financial services, focused on enterprise integrations, API design, and solution delivery.",
    email: "96austin.j@gmail.com",
  },
  experience: [
    {
      company: "Alloy",
      position: "Manager, Solutions Architecture",
      startDate: "Apr 2025",
      endDate: "Current",
      summary: [
        "Manage and develop a team of 5 Solutions Architects supporting enterprise client delivery.",
"Drive architecture strategy for large financial institutions, ensuring scalable and compliant integrations.",
"Lead cross-functional collaboration with Product, Engineering, and GTM to unblock delivery risks.",
"Establish best practices for client onboarding, implementation documentation, and partner enablement.",
      ],
    },
    {
      company: "Alloy",
      position: "Senior Solutions Architect",
      startDate: "Oct 2023",
      endDate: "Apr 2025",
      summary: [
        "Led technical discovery and implementation for top 20 financial institutions using Alloy’s API platform.",
        "Improved API schema and developer documentation, reducing integration time.",
        "Mentored 4 Solutions Architects and guided career development and technical growth.",
        "Partnered with Sales on RFPs and technical evaluations for $1M+ enterprise deals.",
        "Standardized use of Amazon MWAA to deliver automated client reporting workflows."
        
      ],
    },
    {
      company: "Alloy",
      position: "Solutions Architect II",
      startDate: "Mar 2022",
      endDate: "Oct 2023",
      summary:[
        "Aligned product features with client needs, providing technical input to roadmap planning.",
"Delivered partner training sessions and technical workshops to reduce support overhead.",
"Contributed production-level code to SDKs and custom integrations.",
"Deployed client-specific ML models using AWS Lambda for real-time decisioning."
]
    },
    {
      company: "Honor Credit Union",
      position: "Solutions Architect",
      startDate: "Nov 2020",
      endDate: "Mar 2022",
      summary:[
        "Led technology solutions for internal and member-facing systems aligned with strategic goals.",
"Built a TensorFlow-powered chatbot resolving 50% of member inquiries.",
"Championed RPA initiatives to increase support channel throughput and reduce manual tasks."

]
    },
    {
      company: "Honor Credit Union",
      position: "Front-End Web Developer",
      startDate: "Aug 2019",
      endDate: "Nov 2020",
      summary:[
        "Reduced load times by 72% through caching and front-end performance improvements.",
"Maintained compliance with GDPR and CCPA requirements for member data.",
"Built React-based internal tools for staff productivity."

]
    },
    {
      company: "Shepherd Hardware",
      position: "Business System Analyst",
      startDate: "Aug 2018",
      endDate: "Aug 2019",
      summary:[
        "Developed an API to bridge legacy ERP with modern analytics dashboards.",
"Integrated e-commerce sites with inventory systems for real-time stock visibility."
]
    },
  ],
  projects: [
    {
      name: "VendorFlow",
      summary: "Centralize documents, automate renewals, and stay compliant—without the spreadsheet chaos.",
      linkPreview: "https://vendorflow.app/",
      linkSource: "https://medium.com/@96austin.j/how-i-built-vendorflow-a-solo-developers-journey-to-launching-a-b2b-saas-260f92d65669",
      image: "/app-screen.webp",
    },
    {
      name: "Focus Tasks | VS Code Extension",
      summary: "Focus Tasks helps you stay productive by keeping your top priorities front and center — right inside VS Code.",
      linkPreview: "https://marketplace.visualstudio.com/items?itemName=AustinCodes.focus-tasks&ssr=false#overview",
      linkSource: "https://medium.com/@96austin.j/how-i-built-a-vs-code-extension-to-stay-focused-and-how-you-can-too-88801e36e934",
      image: "/vs-code.png",
    },
  ],
  about: {
    description: `
      Experienced Solutions Architect specializing in the financial space with a proven track record in designing and implementing robust solutions. I possess extensive knowledge in fraud prevention, integrations, and system architecture, enabling me to effectively analyze complex business requirements and translate them into scalable, secure, and innovative solutions.
    `,
    image: "https://media.licdn.com/dms/image/v2/C4E03AQFqzy6DiSkF-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1649624512231?e=1754524800&v=beta&t=Nw-W7B09H1tOq38HF6CnClqs1Fney-VBX13wzfxkDZ4",
  },
};

// #5755ff
