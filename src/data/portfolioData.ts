export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'saas' | 'ecommerce' | 'modernization';
  company: string;
  timeline: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  techStack: string[];
  features: string[];
  architectureNotes?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyType: string;
  location: string;
  period: string;
  durationLabel: string;
  isCurrent: boolean;
  summary: string;
  bullets: string[];
  techStack: string[];
  keyHighlight?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Proficient'; highlight?: boolean }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  level: string;
  details: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Azeem Aijaz',
    title: 'Senior Full Stack Software Developer',
    experienceYears: '5+',
    location: 'Gurugram, Haryana, India',
    email: 'azeemaijaz24@gmail.com',
    phone: '+91 75998 80746',
    github: 'https://github.com/azmajz',
    githubUsername: 'azmajz',
    availabilityStatus: 'Open to Senior / Lead Full Stack Engineering Roles',
    summary:
      'Senior Full Stack Software Developer with 5+ years of experience building and maintaining large-scale SaaS, e-commerce, and enterprise web applications. Strong expertise in Nuxt/Vue (SSR), React, Next.js (SSR), Node.js, Express.js, ASP.NET 6 Web API, and MS SQL Server, with proven experience modernizing legacy systems, designing scalable APIs, optimizing performance, and deploying production applications on AWS. Adept at working across the full SDLC in Agile environments and delivering stable, high-quality solutions for real-world business platforms.',
  },
  metrics: [
    { label: 'Schools Supported in North America', value: '4,000+', context: 'EZChildTrack Cloud SaaS' },
    { label: 'Years of Enterprise Production Experience', value: '5+ Yrs', context: 'SaaS, E-Commerce & Modernization' },
    { label: 'Master of Computer Applications (MCA)', value: '85.7%', context: 'AKTU Lucknow Honors' },
    { label: 'Developers Mentored & Coached', value: '4 Devs', context: 'Architecture & Code Quality' },
  ],
  skillCategories: [
    {
      title: 'Frontend Engineering',
      description: 'Server-Side Rendering, modern component architectures, state systems, and responsive accessible design.',
      skills: [
        { name: 'Nuxt.js (SSR / Nuxt 4)', level: 'Expert', highlight: true },
        { name: 'Vue.js (Vue 3 / Composition)', level: 'Expert', highlight: true },
        { name: 'React.js', level: 'Expert', highlight: true },
        { name: 'Next.js (SSR)', level: 'Advanced', highlight: true },
        { name: 'TypeScript', level: 'Expert', highlight: true },
        { name: 'JavaScript (ES6+)', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Expert' },
        { name: 'Alpine.js', level: 'Advanced' },
        { name: 'HTML5 & CSS3', level: 'Expert' },
        { name: 'Bootstrap', level: 'Advanced' },
      ],
    },
    {
      title: 'Backend & APIs',
      description: 'Scalable REST APIs, service decoupling, microservice adapters, and real-time backend systems.',
      skills: [
        { name: 'Node.js', level: 'Expert', highlight: true },
        { name: 'Express.js', level: 'Expert', highlight: true },
        { name: 'ASP.NET 6 Web API', level: 'Expert', highlight: true },
        { name: 'Nest.js', level: 'Advanced' },
        { name: 'ASP.NET MVC (Legacy Modernization)', level: 'Advanced' },
        { name: 'REST API Design & Integration', level: 'Expert' },
        { name: 'Laravel (PHP)', level: 'Advanced' },
        { name: 'PHP OOP / CodeIgniter', level: 'Proficient' },
      ],
    },
    {
      title: 'Databases & Performance',
      description: 'Relational data modeling, stored procedure optimization, indexing, and NoSQL real-time document stores.',
      skills: [
        { name: 'MS SQL Server', level: 'Expert', highlight: true },
        { name: 'Stored Procedures & Tuning', level: 'Expert', highlight: true },
        { name: 'MySQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced', highlight: true },
        { name: 'Firestore', level: 'Proficient' },
        { name: 'Query Optimization & Indexing', level: 'Expert' },
      ],
    },
    {
      title: 'Cloud, DevOps & Tooling',
      description: 'AWS production services, containerization, web servers, build tools, and high-performance bundle delivery.',
      skills: [
        { name: 'AWS (EC2, RDS, S3, SES, Route 53)', level: 'Advanced', highlight: true },
        { name: 'Vite & Webpack Tooling', level: 'Expert', highlight: true },
        { name: 'Docker', level: 'Advanced' },
        { name: 'NGINX / Apache', level: 'Advanced' },
        { name: 'Azure & IIS', level: 'Proficient' },
        { name: 'Git & Agile / Scrum SDLC', level: 'Expert' },
        { name: 'Lighthouse & Core Web Vitals', level: 'Expert' },
        { name: 'Accessibility (WCAG) & i18n', level: 'Advanced' },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: 'ezchildtrack',
      title: 'EZChildTrack Childcare SaaS Platform',
      subtitle: 'Mission-critical enterprise childcare management platform supporting 4,000+ schools across North America',
      category: 'saas',
      company: 'Origent Technologies',
      timeline: 'July 2024 – Present',
      role: 'Full Stack Tech Analyst',
      description:
        'Architected and implemented enterprise-grade frontend modules and backend API services for EZChildTrack. Developed modern Parent Portal, Registration, Attendance, and Waitlist systems while orchestrating the migration of legacy monolith components into Nuxt 4 SSR with ASP.NET 6 Web APIs.',
      problem:
        'Serving 4,000+ schools required high throughput during seasonal back-to-school registration surges, while legacy ASP.NET WebForms (ASPX/ASPX.VB) modules suffered from sluggish rendering, tight coupling, and difficult UI maintenance.',
      solution:
        'Applied the Strangler Fig migration pattern to incrementally replace monolithic legacy screens with high-performance Nuxt 4 (SSR) and Nuxt UI interfaces backed by decoupled ASP.NET 6 Web APIs and highly tuned MS SQL stored procedures.',
      impactMetrics: [
        { label: 'Active School Reach', value: '4,000+ Schools' },
        { label: 'Architecture Strategy', value: 'Strangler Fig Pattern' },
        { label: 'Stack Integration', value: 'Nuxt 4 SSR + .NET 6' },
        { label: 'Target Market', value: 'North America K-12' },
      ],
      tags: ['SaaS', 'Enterprise', 'SSR', 'High Throughput'],
      techStack: [
        'Nuxt 4 (SSR)',
        'Vue.js',
        'ASP.NET 6 Web API',
        'Node.js API',
        'MS SQL Server',
        'React.js',
        'Nuxt UI',
        'Vite',
      ],
      features: [
        'Multi-tenant Parent Portal for student registration, billing, and document submission',
        'Real-time Activity & Attendance tracking module for school administrators and staff',
        'Automated Waitlist and One-Time Enrollment workflows handling seasonal peak traffic',
        'Complex MS SQL Server stored procedures with rigorous input validations and parameter tuning',
        'Component library built with React.js and Vue 3 for reuse across distributed enterprise portals',
        'Comprehensive i18n localization support and WCAG accessibility compliance',
      ],
      architectureNotes:
        'Designed an API gateway proxying legacy ASPX routes to new Nuxt 4 SSR endpoints, enabling zero-downtime migration of individual portals without impacting live school billing or student records.',
    },
    {
      id: 'bullionstore-au',
      title: 'BullionStore Australia',
      subtitle: 'High-traffic precious metals trading & e-commerce platform with live market pricing and KYC compliance',
      category: 'ecommerce',
      company: 'Agami Technologies',
      timeline: '2021 – June 2024',
      role: 'Senior Full Stack Developer & Tech Lead',
      description:
        'Led the full replatforming and development of BullionStore Australia from Laravel (Bagisto) to a custom Node.js (Express) + Vue SSR (Nuxt) architecture. Oversaw a 4-developer engineering pod and integrated regulatory KYC identity verification and automated Xero accounting.',
      problem:
        'The legacy PHP platform struggled with real-time precious metal spot price fluctuations, slow checkout transactions, and manual anti-money laundering (AML/KYC) compliance checks for high-value transactions.',
      solution:
        'Engineered an event-driven Node.js backend with Nuxt SSR storefront, integrated GBG GreenID for instant automated KYC identity verification, synced order ledgers into Xero via REST APIs, and deployed fault-tolerant AWS infrastructure.',
      impactMetrics: [
        { label: 'Platform Migration', value: 'Laravel → Nuxt + Node' },
        { label: 'Team Leadership', value: '4 Developers Led' },
        { label: 'Regulatory Integration', value: 'GBG GreenID KYC' },
        { label: 'AWS Deployments', value: 'EC2, RDS, S3, Route53' },
      ],
      tags: ['E-Commerce', 'FinTech', 'AWS', 'Team Lead'],
      techStack: [
        'Vue.js (Nuxt SSR)',
        'Node.js',
        'Express.js',
        'AWS EC2 / RDS / S3',
        'GBG GreenID KYC',
        'Xero Accounting API',
        'MySQL',
        'Tailwind CSS',
      ],
      features: [
        'Server-Side Rendered (Nuxt) storefront delivering sub-second initial paint times and high SEO rankings',
        'Role-based multi-tier administrative portal for catalog, pricing margins, order auditing, and dispatch',
        'GBG (GreenID) KYC verification integration for real-time customer identification on high-value precious metals',
        'Bi-directional Xero accounting integration for automated invoice generation, reconciliation, and tax ledgers',
        'Lighthouse optimization program improving mobile performance, Google Merchant Center feed synchronization, and conversion tracking',
        'Full AWS cloud infrastructure provisioning including Route 53 DNS, S3 media buckets, and SES transactional email',
      ],
      architectureNotes:
        'Cached dynamic spot gold/silver price feeds using in-memory layers with fallback to persistent databases, protecting checkout pipelines during volatile financial market hours.',
    },
    {
      id: 'fusion24x7-crm',
      title: 'Fusion24X7 Smart CRM & Real-time Chat',
      subtitle: 'High-concurrency business operations CRM with real-time dynamic messaging stream',
      category: 'saas',
      company: 'Agami Technologies',
      timeline: '2022 – 2024',
      role: 'Full Stack Engineer & Module Architect',
      description:
        'Developed Web Admin Portals and the Fusion24X7 Smart CRM suite using React.js. Created a low-latency real-time Chat Application backed by Node.js (Express) and MongoDB to streamline business-to-customer communication.',
      problem:
        'Internal customer service agents required instant synchronization of customer inquiries across shift transfers without refreshing browser windows or losing session context.',
      solution:
        'Engineered dynamic real-time event streaming using Node.js and MongoDB with optimistic UI updates in React.js, accompanied by granular role-based dashboard permissions.',
      impactMetrics: [
        { label: 'Communication Protocol', value: 'Real-time WebSocket / SSE' },
        { label: 'State Management', value: 'Optimistic React UI' },
        { label: 'Data Store', value: 'MongoDB Document Engine' },
        { label: 'Security Model', value: 'Role-Based Dashboards' },
      ],
      tags: ['CRM', 'Real-time', 'React', 'MongoDB'],
      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs',
        'Tailwind CSS',
      ],
      features: [
        'Role-based administrative dashboards for multi-tier user authorization and activity audits',
        'Real-time chat client supporting active presence, typing signals, and instant message notifications',
        'Asynchronous data synchronization with resilient fallback during network interruptions',
        'Customer inquiry tracking pipeline with automated ticket assignment and status history',
      ],
      architectureNotes:
        'Implemented indexed MongoDB query schemas for chat history pagination and audit logs, ensuring queries remain under 25ms under heavy concurrency.',
    },
    {
      id: 'strangler-pattern-migration',
      title: 'Legacy Monolith to Nuxt 4 Architecture Modernization',
      subtitle: 'Zero-downtime strangler-pattern transition from ASP.NET MVC / ASPX to Nuxt 4 SSR & ASP.NET 6',
      category: 'modernization',
      company: 'Origent Technologies',
      timeline: '2024 – Present',
      role: 'Architecture Modernization Contributor',
      description:
        'Formulated and executed the phased replacement of monolithic legacy ASP.NET WebForms (ASPX/VB) applications by developing a greenfield Admin Portal using Nuxt 4 and Nuxt UI (SSR) connected to ASP.NET 6 Web APIs.',
      problem:
        'Monolithic ASP.NET codebases contained years of intertwined business logic and stateful ViewState payloads, creating high friction for new feature rollouts and mobile accessibility.',
      solution:
        'Extracted core domains into stateless ASP.NET 6 REST endpoints and constructed modern Nuxt 4 SSR micro-frontends, allowing gradual cutover of portal routes with continuous operational uptime.',
      impactMetrics: [
        { label: 'Migration Technique', value: 'Strangler Fig Pattern' },
        { label: 'Target Framework', value: 'Nuxt 4 + Nuxt UI' },
        { label: 'Downtime Incurred', value: '0 Minutes (Zero Downtime)' },
        { label: 'Legacy Core', value: 'ASPX / ASPX.VB Modernized' },
      ],
      tags: ['Modernization', 'Architecture', 'Nuxt 4', '.NET 6'],
      techStack: [
        'Nuxt 4 (SSR)',
        'Nuxt UI',
        'ASP.NET 6 Web API',
        'MS SQL Server',
        'TypeScript',
        'Vite',
      ],
      features: [
        'Strangler-pattern routing layer routing incoming URLs to either legacy ASPX or modern Nuxt 4 endpoints',
        'Shared authentication session validation across legacy session cookies and modern JWT bearer tokens',
        'Drastic reduction in client bundle payload sizes through Vite code-splitting and asset tree-shaking',
        'Creation of comprehensive internal deployment documentation and performance guidelines for the engineering department',
      ],
      architectureNotes:
        'Decoupled monolithic stored procedures into domain-specific data access layers with parameterized SQL execution and transaction isolation.',
    },
    {
      id: 'nediaz-platform',
      title: 'Nediaz Recruitment & Networking Platform',
      subtitle: 'Professional recruitment ecosystem connecting candidates, employers, and industry networks',
      category: 'saas',
      company: 'Agami Technologies',
      timeline: '2022 – 2023',
      role: 'Full Stack Developer',
      description:
        'Contributed across frontend and backend for Nediaz, building interactive candidate profiles, company discovery engines, and recruiter workflows with Vue.js, Node.js, and MongoDB.',
      problem:
        'Job seekers and recruiters required high-speed profile filtering across diverse geographic locations, skill tags, and compensation bands without reload latency.',
      solution:
        'Developed performant Vue.js search interfaces integrated with aggregated MongoDB pipeline endpoints and asynchronous REST services.',
      impactMetrics: [
        { label: 'Frontend Stack', value: 'Vue.js + REST Integration' },
        { label: 'Database Design', value: 'Aggregated Mongo Pipelines' },
        { label: 'Domain', value: 'Recruitment & Networking' },
        { label: 'Experience Tier', value: 'Full Stack Engineering' },
      ],
      tags: ['Recruitment', 'Vue.js', 'MongoDB', 'Networking'],
      techStack: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'CSS3'],
      features: [
        'Candidate profile builder with skill assessment metrics and resume asset management',
        'Recruiter dashboard for candidate pipeline tracking, interview scheduling, and feedback rounds',
        'Responsive mobile-first navigation and clean interface layout',
      ],
    },
    {
      id: 'inshape-mubkhar',
      title: 'InShape Fitness & Mubkhar E-Commerce Portals',
      subtitle: 'Custom e-commerce and member management platforms with tailored payment gateways',
      category: 'ecommerce',
      company: 'Rexcel IT Services',
      timeline: '2020 – 2021',
      role: 'Full Stack Software Developer',
      description:
        'Delivered 5+ custom e-commerce, fitness membership, and commercial business platforms 15% ahead of schedule on average using PHP (OOP), CodeIgniter, OpenCart, and PrestaShop.',
      problem:
        'Retail and fitness clients needed customized checkout funnels, membership recurrence billing, and inventory sync across physical and digital storefronts.',
      solution:
        'Built secure REST APIs, custom WooCommerce plugins, and database schemas with optimized relational joins in MySQL.',
      impactMetrics: [
        { label: 'Projects Delivered', value: '5+ Custom Platforms' },
        { label: 'Delivery Speed', value: '15% Ahead of Schedule' },
        { label: 'Core Engines', value: 'CodeIgniter, OpenCart, PrestaShop' },
        { label: 'Database Engine', value: 'MySQL (OOP PHP)' },
      ],
      tags: ['E-Commerce', 'PHP OOP', 'MySQL', 'APIs'],
      techStack: ['PHP (OOP)', 'MySQL', 'CodeIgniter', 'OpenCart', 'PrestaShop', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
      features: [
        'Custom membership portal for InShape Fitness with session bookings and attendance tracking',
        'Mubkhar luxury fragrance e-commerce store built on OpenCart with custom payment gateways',
        'Custom WordPress / WooCommerce plugin development integrating mobile API endpoints',
      ],
    },
  ] as Project[],
  experience: [
    {
      id: 'origent',
      role: 'Software Tech Analyst (Full Stack Development)',
      company: 'Origent Technologies',
      companyType: 'Product-Based SaaS Company',
      location: 'Gurugram, Haryana, India',
      period: 'July 2024 – Present',
      durationLabel: 'Current Role',
      isCurrent: true,
      summary:
        'Contributing to EZChildTrack, a cloud-based childcare management SaaS platform used by 4,000+ schools across North America. Modernizing enterprise legacy applications into modern Nuxt 4 SSR and ASP.NET 6 architectures.',
      bullets: [
        'Contributing to EZChildTrack, a cloud-based childcare management SaaS platform used by 4,000+ schools across North America.',
        'Developed and enhanced multiple enterprise-grade UI modules including Parent Portal, Parent Applications, Activity & Attendance, One-Time Enrollment, and Waitlist using Nuxt (SSR) and Vue, ensuring responsive design, cross-browser compatibility, and accessibility best practices.',
        'Built and optimized backend services using ASP.NET 6 Web API, Node.js API with MS SQL Server, leveraging stored procedures, validations, and performance tuning.',
        'Contributed to a large legacy ASP.NET MVC application (ASPX / ASPX.VB) by adding new features while ensuring stability and backward compatibility.',
        'Actively involved in modernizing legacy systems by developing a new Admin Portal using Nuxt 4 and Nuxt UI (SSR) following a strangler-pattern migration approach.',
        'Developed reusable UI components using React.js and integrated REST APIs to support scalable and maintainable frontend architecture.',
        'Worked extensively with React.js applications, handling REST API integration, asynchronous data flows, and state management.',
        'Improved application performance and build stability through frontend optimizations, caching strategies, and build tool configuration (Vite/Webpack), reducing initial load times.',
        'Created internal technical documentation and shared research on React/Vue/Nuxt deployment, reusable architecture, and performance optimization strategies.',
        'Ensured responsive and accessible UI development following accessibility standards, localization (i18n), and cross-browser compatibility.',
      ],
      techStack: [
        'Nuxt 4 (SSR)',
        'Vue.js',
        'React.js',
        'ASP.NET 6 Web API',
        'ASP.NET MVC (ASPX)',
        'MS SQL Server',
        'Node.js',
        'Vite',
        'TypeScript',
      ],
      keyHighlight: 'Modernizing core modules for 4,000+ North American schools using Nuxt 4 & .NET 6',
    },
    {
      id: 'agami',
      role: 'Senior Software Developer',
      company: 'Agami Technologies Pvt. Ltd.',
      companyType: 'Technology Solutions & Product Engineering',
      location: 'Greater Noida, Uttar Pradesh, India',
      period: '2021 – June 2024',
      durationLabel: '3 Years',
      isCurrent: false,
      summary:
        'Led frontend and full-stack development across high-traffic e-commerce and enterprise CRM platforms. Mentored developer teams, migrated platforms, and deployed cloud infrastructure on AWS.',
      bullets: [
        'Developed various frontend applications using React.js, Vue.js, and Alpine.js, delivering responsive and high-performance user interfaces.',
        'Worked on BullionStore Australia, a high-traffic precious metals e-commerce platform built with Vue SSR (Nuxt) and Node.js (Express).',
        'Led migration of the platform from Laravel (Bagisto) to Node.js + Nuxt, including full storefront and role-based admin panel.',
        'Led and mentored a team of 4 developers, providing technical guidance, conducting code reviews, and ensuring adherence to best practices and timely delivery of project milestones.',
        'Worked on Web Admin Portals & Fusion24X7 (Smart CRM) using React.js, implementing role-based dashboards and management features for internal business operations.',
        'Developed a real-time Chat Application using React.js, Node.js (Express API), and MongoDB, enabling dynamic messaging and interactive UI updates.',
        'Integrated third-party systems including Xero accounting and GBG (GreenID) KYC, ensuring secure and reliable API integrations.',
        'Designed and deployed AWS infrastructure (EC2, RDS, S3, SES, Route 53) for scalable and production-ready environments.',
        'Improved SEO and performance through Lighthouse-based optimizations, Google Merchant Center setup, and Facebook Pixel integration.',
        'Contributed to Nediaz, a recruitment and business networking platform, working across frontend and backend using Vue.js, Node.js, and MongoDB, along with REST API integrations.',
      ],
      techStack: [
        'React.js',
        'Vue.js (Nuxt SSR)',
        'Node.js',
        'Express.js',
        'MongoDB',
        'AWS (EC2, RDS, S3)',
        'Xero API',
        'GBG KYC',
        'Alpine.js',
      ],
      keyHighlight: 'Led 4-engineer team; replatformed high-traffic e-commerce to Nuxt SSR + Node.js on AWS',
    },
    {
      id: 'rexcel',
      role: 'Software Developer',
      company: 'Rexcel IT Services Pvt. Ltd.',
      companyType: 'IT & Software Development Services',
      location: 'Noida, Uttar Pradesh, India',
      period: '2020 – 2021',
      durationLabel: '1 Year',
      isCurrent: false,
      summary:
        'Full-stack engineering of custom e-commerce and business platforms using PHP OOP, MySQL, CodeIgniter, OpenCart, PrestaShop, and modern frontend styling.',
      bullets: [
        'Delivered 5+ custom e-commerce, fitness, and business platforms as a full-stack developer, completing projects 15% ahead of schedule on average.',
        'Built responsive UIs using JavaScript, jQuery, HTML, CSS, Bootstrap, and Tailwind CSS.',
        'Worked on projects like InShape Fitness (CodeIgniter, MySQL) and Mubkhar (OpenCart - PHP), along with multiple e-commerce platforms built on OpenCart and PrestaShop.',
        'Developed backend APIs using PHP (OOP), and MySQL, ensuring efficient data handling and integrations.',
        'Developed and customized WordPress (WooCommerce) plugins and themes, integrating REST APIs for web and mobile applications.',
      ],
      techStack: [
        'PHP (OOP)',
        'MySQL',
        'CodeIgniter',
        'OpenCart',
        'PrestaShop',
        'WordPress / WooCommerce',
        'Tailwind CSS',
        'JavaScript',
      ],
      keyHighlight: 'Delivered 5+ platforms 15% ahead of schedule with custom PHP & MySQL architectures',
    },
  ] as ExperienceItem[],
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Dr. A. P. J. Abdul Kalam Technical University, Lucknow',
      period: '2019 – 2021',
      score: '85.7% (First Class with Distinction)',
      level: 'Postgraduate Degree',
      details: 'Specialization in Advanced Computer Applications, Software Engineering, Database Systems, and Distributed Computing.',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Chaudhary Charan Singh University, Meerut',
      period: '2016 – 2019',
      score: '76% (First Class)',
      level: 'Undergraduate Degree',
      details: 'Core foundation in Data Structures, Object-Oriented Programming, Web Technologies, and Database Management.',
    },
  ] as EducationItem[],
  architecturePlaybook: [
    {
      title: 'Strangler Fig Pattern Migration',
      subtitle: 'Modernizing Enterprise Monoliths Without System Downtime',
      badge: 'Architecture Pattern',
      overview:
        'A battle-tested methodology for incrementally replacing legacy ASP.NET WebForms/MVC monoliths with modern Nuxt 4 SSR micro-frontends and ASP.NET 6 stateless Web APIs.',
      stages: [
        { step: '01', name: 'Intercept & Route', desc: 'Deploy a reverse proxy (or edge routing) that directs existing traffic to the monolith while routing new portal paths to the Nuxt 4 app.' },
        { step: '02', name: 'Extract Domain APIs', desc: 'Decouple tightly coupled stored procs into clean ASP.NET 6 Web API endpoints using DTOs, validations, and clean boundaries.' },
        { step: '03', name: 'Build Modern UI', desc: 'Construct accessible, responsive UI modules using Nuxt 4 SSR with Vue 3 / React components, reducing client-side bundle size.' },
        { step: '04', name: 'Decommission Monolith', desc: 'Once all user journeys (Parent Portal, Attendance, Billing) are verified on the new stack, decommission the legacy ASPX views.' },
      ],
    },
    {
      title: 'High-Concurrency E-Commerce Scalability',
      subtitle: 'BullionStore Australia Architectural Blueprints',
      badge: 'Production Engineering',
      overview:
        'Techniques used to handle rapid financial price fluctuations and high-value transactional integrity on AWS.',
      stages: [
        { step: '01', name: 'SSR Dynamic Cache', desc: 'Nuxt SSR with edge caching ensures instant first contentful paint and top search engine indexation.' },
        { step: '02', name: 'Automated Compliance', desc: 'GBG GreenID KYC integration verifies identity before payment capture, meeting strict AML regulations.' },
        { step: '03', name: 'Ledger Synchronization', desc: 'Asynchronous event bus pushes settled orders into Xero accounting, preventing rate-limit throttling.' },
        { step: '04', name: 'AWS Cloud Resilience', desc: 'EC2 application tier with automated RDS PostgreSQL/MySQL replicas and S3 asset delivery with Route 53 failover.' },
      ],
    },
  ],
};
