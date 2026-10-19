export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'saas' | 'ecommerce' | 'modernization';
  categories?: ('saas' | 'ecommerce' | 'modernization')[];
  company: string;
  timeline: string;
  role: string;
  liveUrl?: string;
  playStoreUrl?: string;
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
  skills: { name: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  level: string;
  details: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Azeem Aijaz',
    title: 'Senior Full Stack Software Developer',
    experienceYears: '6+',
    location: 'India',
    email: 'azeemaijaz24@gmail.com',
    phone: '+91 75998 80746',
    github: 'https://github.com/azmajz',
    githubUsername: 'azmajz',
    availabilityStatus: 'Available for full-time senior engineering appointments, technical leadership pods, and hybrid/remote arrangements.',
    summary:
      'Senior Full Stack Software Developer with 6+ years of professional experience building, modernizing, and scaling SaaS, high-traffic e-commerce, and enterprise web applications. Core expertise in Nuxt/Vue (SSR), React, Next.js (SSR), C# / ASP.NET Core Web APIs, legacy ASP.NET MVC / VB.NET modernization, and MS SQL Server (T-SQL Stored Procedure Optimization). Experienced in Claude AI & LLM tooling, zero-downtime Strangler Fig migrations via IIS ARR, AWS Cloud infrastructure (EC2 with Application Load Balancer, S3, SES), Linux (Ubuntu), Ionic Capacitor mobile apps, and e-commerce growth telemetry (Google Merchant Center, Facebook Pixel, GA4 / Gtag).',
  },
  metrics: [
    { label: 'Schools Supported in North America', value: '4,000+', context: 'EZChildTrack Cloud SaaS' },
    { label: 'Years of Production Engineering', value: '6+ Yrs', context: 'SaaS, E-Commerce & Cloud' },
    { label: 'MCA Academic Honors', value: 'Grade A+', context: 'AKTU Lucknow Distinction' },
    { label: 'Engineering Team Leadership', value: '8+ Devs', context: 'Mentored & Code Audited' },
  ],
  skillCategories: [
    {
      title: 'Backend, APIs & Architecture',
      description: 'High-throughput RESTful services, enterprise .NET, micro-services, legacy modernization, and reverse proxies.',
      skills: [
        { name: 'C# / ASP.NET Core Web API' },
        { name: 'ASP.NET MVC & VB.NET WebForms (Legacy MainApp)' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'Strangler Fig Pattern & Micro-Services' },
        { name: 'Nest.js' },
        { name: 'Laravel (PHP)' },
        { name: 'PHP OOP / CodeIgniter' },
        { name: 'REST API Design & Integration' },
      ],
    },
    {
      title: 'Frontend & Mobile Engineering',
      description: 'Server-Side Rendering, reactive component design, mobile hybrid apps, and automated UI testing.',
      skills: [
        { name: 'Nuxt.js (SSR / Nuxt 4)' },
        { name: 'Vue.js (Vue 3 / Composition)' },
        { name: 'React.js' },
        { name: 'Next.js (SSR)' },
        { name: 'TypeScript' },
        { name: 'JavaScript (ES6+)' },
        { name: 'Tailwind CSS' },
        { name: 'Bootstrap' },
        { name: 'Ionic Capacitor (Mobile Apps)' },
        { name: 'Vitest / Unit Testing' },
        { name: 'Alpine.js' },
        { name: 'HTML5 & CSS3' },
      ],
    },
    {
      title: 'Cloud, DevOps & Production Servers',
      description: 'AWS cloud infrastructure (EC2, ALB, S3, SES), reverse proxy routing, and Linux production servers.',
      skills: [
        { name: 'Linux (Ubuntu)' },
        { name: 'AWS Cloud Infrastructure (EC2, ALB)' },
        { name: 'AWS S3 & SES (Notifications & Email)' },
        { name: 'IIS, web.config & ARR Reverse Proxy' },
        { name: 'Vite & Webpack' },
        { name: 'NGINX & Apache' },
        { name: 'Git & Agile / Scrum SDLC' },
        { name: 'Lighthouse & Core Web Vitals' },
        { name: 'Multi-Localization (i18n) & WCAG' },
      ],
    },
    {
      title: 'Databases, Growth Telemetry & AI',
      description: 'Relational T-SQL query tuning, analytics tracking, Google Merchant Center, and Claude AI integration.',
      skills: [
        { name: 'Claude AI & LLM Workflows (Claude 3.5 Sonnet)' },
        { name: 'Google Merchant Center (Feeds)' },
        { name: 'Facebook Pixel & Conversion Tracking' },
        { name: 'Google Analytics (GA4 / Gtag)' },
        { name: 'Technical SEO Optimization for E-Commerce' },
        { name: 'MS SQL Server' },
        { name: 'T-SQL Stored Procedures & Tuning' },
        { name: 'Query Optimization & Indexing' },
        { name: 'MySQL' },
        { name: 'MongoDB (Document Engine)' },
        { name: 'Firestore' },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: 'ezchildtrack',
      title: 'EZChildTrack Childcare SaaS Platform',
      subtitle: 'Mission-critical enterprise childcare management platform supporting 4,000+ schools across North America',
      category: 'saas',
      categories: ['saas', 'modernization'],
      company: 'Origent Technologies',
      timeline: 'July 2024 – Present',
      role: 'Software Tech Analyst (Full Stack Development)',
      liveUrl: 'https://www.ezchildtrack.com',
      description:
        'Architected and implemented enterprise-grade frontend modules and backend API services for EZChildTrack. Developed modern Parent Portal, Parent Application, Activity & Attendance, One-Time Application, and Admin Portal systems while orchestrating the migration of legacy monolith MainApp components into Nuxt 4 SSR with C# ASP.NET Core Web APIs.',
      problem:
        'Serving 4,000+ schools required sustained high throughput during seasonal back-to-school registration surges, while legacy ASP.NET WebForms (ASPX/VB.NET) MainApp modules suffered from viewstate overhead, sluggish rendering, and high maintenance overhead.',
      solution:
        'Applied the Strangler Fig migration pattern with IIS ARR (Application Request Routing) reverse proxying to incrementally replace monolithic legacy screens with high-performance Nuxt 4 (SSR) and Nuxt UI interfaces backed by decoupled C# ASP.NET Core Web APIs and highly optimized MSSQL T-SQL stored procedures.',
      impactMetrics: [
        { label: 'Active School Reach', value: '4,000+ Schools' },
        { label: 'Architecture Strategy', value: 'Strangler Fig + ARR' },
        { label: 'Core Tech Stack', value: 'Nuxt 4 + .NET Core' },
        { label: 'Testing Suite', value: 'Vitest Unit Tests' },
      ],
      tags: ['SaaS', 'Enterprise', 'SSR', 'IIS ARR', 'MSSQL T-SQL', 'C# .NET Core', 'Modernization'],
      techStack: [
        'C# ASP.NET Core Web API',
        'Nuxt 4 (SSR)',
        'Vue.js',
        'Legacy MainApp (ASP.NET MVC / VB.NET)',
        'MS SQL Server (T-SQL SPs)',
        'IIS & ARR Reverse Proxy',
        'Vitest',
        'Tailwind CSS & Bootstrap',
        'Vite',
      ],
      features: [
        'Multi-tenant Parent Portal for student registration, automated billing, and document submission',
        'Parent Application and One-Time Application workflow with robust validation and status tracking',
        'Real-time Activity & Attendance tracking module for school administrators and staff',
        'Admin Portal modernization using Nuxt 4, Nuxt UI, and SSR streaming',
        'IIS web.config Application Request Routing (ARR) for seamless zero-downtime path proxying',
        'Complex MS SQL Server T-SQL stored procedure optimizations reducing query execution times',
        'Automated unit testing with Vitest ensuring frontend regression safety',
        'Comprehensive i18n localization support and WCAG accessibility compliance',
      ],
      architectureNotes:
        'Configured IIS ARR (Application Request Routing) reverse proxying in web.config to transparently route modern endpoints to Nuxt 4 SSR while preserving legacy routes on the MainApp monolith without user session disruption.',
    },
    {
      id: 'bullionstore-au',
      title: 'BullionStore Australia (Web & Mobile App)',
      subtitle: 'High-traffic precious metals trading platform with live market pricing, KYC compliance & mobile app',
      category: 'ecommerce',
      categories: ['ecommerce', 'modernization'],
      company: 'Agami Technologies',
      timeline: '2021 – June 2024',
      role: 'Senior Full Stack Developer & Tech Lead',
      liveUrl: 'https://bullionstore.com.au/',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.bullionstoreaustralia.app&hl=en_IN&pli=1',
      description:
        'Led the full replatforming and development of BullionStore Australia from Laravel (Bagisto) to a custom Node.js (Express) + Vue SSR (Nuxt) architecture. Deployed the native mobile app on Google Play Store using Ionic Capacitor, led and mentored a team of 8+ developers, integrated Google Merchant Center product feeds, Facebook Pixel conversion tracking, GA4 / Gtag analytics, and regulatory KYC identity verification with automated Xero accounting.',
      problem:
        'The legacy PHP platform struggled with real-time precious metal spot price fluctuations, slow checkout transactions, missing marketing feed automation, and manual anti-money laundering (AML/KYC) compliance checks for high-value transactions.',
      solution:
        'Engineered an event-driven Node.js backend with Nuxt SSR storefront, deployed an Ionic Capacitor mobile app to Google Play Store, integrated GBG GreenID for instant automated KYC identity verification, synced order ledgers into Xero via REST APIs, automated Google Merchant Center XML feeds & Facebook Pixel conversion events, and provisioned high-availability AWS EC2 instances fronted by Application Load Balancers (ALB), S3 media storage, and Amazon SES for transactional notifications & newsletter broadcasts.',
      impactMetrics: [
        { label: 'Platform Migration', value: 'Laravel → Nuxt + Node' },
        { label: 'Mobile App', value: 'Google Play Store' },
        { label: 'Growth & Telemetry', value: 'Merchant Center + FB Pixel' },
        { label: 'Cloud Architecture', value: 'AWS EC2 + ALB + S3 + SES' },
      ],
      tags: ['E-Commerce', 'FinTech', 'Ionic Capacitor', 'AWS EC2 & ALB', 'Amazon SES & S3', 'Google Merchant'],
      techStack: [
        'Vue.js (Nuxt SSR)',
        'Node.js & Express.js',
        'Ionic Capacitor (Google Play)',
        'AWS EC2 & ALB',
        'Amazon S3',
        'Amazon SES (Email & Newsletter)',
        'Google Merchant Center',
        'Facebook Pixel',
        'GA4 / Gtag',
        'GBG GreenID KYC',
        'Xero Accounting API',
        'MySQL',
        'Tailwind CSS',
      ],
      features: [
        'Server-Side Rendered (Nuxt) storefront delivering sub-second initial paint times and top SEO indexation',
        'BullionStore Mobile App launched on Google Play Store built with Ionic Capacitor and push notifications',
        'Role-based multi-tier administrative portal for catalog, pricing margins, order auditing, and dispatch',
        'Google Merchant Center product synchronization feed and Facebook Pixel purchase event tracking',
        'GBG (GreenID) KYC verification integration for real-time customer identification on high-value precious metals',
        'Bi-directional Xero accounting integration for automated invoice generation, reconciliation, and tax ledgers',
        'AWS Cloud infrastructure: EC2 instances fronted by Application Load Balancers (ALB), Amazon S3 asset storage, and Amazon SES for automated customer notifications & newsletter campaigns',
      ],
      architectureNotes:
        'Cached dynamic spot gold/silver price feeds using in-memory layers with fallback to persistent databases, protecting checkout pipelines during volatile financial market hours.',
    },
    {
      id: 'fat-shop',
      title: 'F.A.T E-Commerce Platform',
      subtitle: 'Modern high-conversion fashion and apparel e-commerce store with seamless checkout',
      category: 'ecommerce',
      categories: ['ecommerce'],
      company: 'Agami Technologies',
      timeline: '2022 – 2024',
      role: 'Senior Full Stack Developer',
      liveUrl: 'https://www.f-a-t.shop/',
      description:
        'Architected and implemented responsive storefront flows, dynamic product filtering, secure payment processing, Google Analytics (GA4 / Gtag) funnels, and administrative inventory controls for F.A.T.',
      problem:
        'Needed an ultra-fast shopping experience with responsive media galleries, dynamic collection filtering, and reliable mobile checkout with accurate marketing attribution.',
      solution:
        'Developed modular frontend components with Vue.js/React and optimized backend catalog endpoints, ensuring sub-second response times, Facebook Pixel event pipelines, and smooth conversions.',
      impactMetrics: [
        { label: 'Storefront', value: 'f-a-t.shop Live' },
        { label: 'Performance', value: 'Sub-second Loads' },
        { label: 'Marketing Telemetry', value: 'Pixel + GA4 Gtag' },
        { label: 'Domain', value: 'Fashion E-Commerce' },
      ],
      tags: ['E-Commerce', 'Vue.js', 'Node.js', 'Docker', 'SEO Telemetry'],
      techStack: ['Vue.js', 'React.js', 'Node.js', 'Express.js', 'Docker', 'Google Analytics (Gtag)', 'Facebook Pixel', 'Tailwind CSS', 'MySQL'],
      features: [
        'Fast-loading visual catalog with responsive image galleries and variant selectors',
        'Dynamic cart and checkout pipelines with multi-currency handling',
        'Technical SEO optimization for high-ranking search snippets and rich product schema',
        'Production Docker deployment ensuring consistent build parity across environments',
      ],
    },
    {
      id: 'numismatix-au',
      title: 'Numismatix Australia',
      subtitle: 'Specialized numismatics and rare collectible coins e-commerce marketplace',
      category: 'ecommerce',
      categories: ['ecommerce'],
      company: 'Agami Technologies',
      timeline: '2022 – 2023',
      role: 'Full Stack Developer',
      description:
        'Engineered specialized cataloging and auction/sale mechanisms for rare numismatics collectible coins with historical provenance metadata, high-resolution zoomable imagery, and secure checkout.',
      problem:
        'Numismatic collectors require granular grading metadata, condition certifications, and zoomable microscopic coin image views with zero latency.',
      solution:
        'Built dedicated attribute filtering pipelines, Google Merchant Center product syndication, and image optimization layers with Node.js and Vue.js.',
      impactMetrics: [
        { label: 'Market Domain', value: 'Numismatics Australia' },
        { label: 'Image Engine', value: 'High-Res Asset Delivery' },
        { label: 'Backend', value: 'Node.js API' },
        { label: 'Containerization', value: 'Docker' },
      ],
      tags: ['E-Commerce', 'Numismatics', 'Node.js', 'Vue.js'],
      techStack: ['Vue.js', 'Node.js', 'Express.js', 'MySQL', 'Docker', 'AWS S3', 'Technical SEO'],
      features: [
        'Specialized coin grading and historical provenance metadata schemas',
        'Fast faceted search across coin era, mint, mintage numbers, and metal purity',
        'Secure payment gateway integrations and order fulfillment tracking',
      ],
    },
    {
      id: 'fusion24x7-crm',
      title: 'Fusion24X7 Smart CRM & Real-Time Chat',
      subtitle: 'High-concurrency business operations CRM with real-time dynamic messaging stream',
      category: 'saas',
      categories: ['saas'],
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
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'REST APIs', 'Tailwind CSS'],
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
      id: 'mubkhar-sandibad',
      title: 'Mubkhar Luxury Perfumes & Sandibad E-Commerce',
      subtitle: 'International multi-localized luxury fragrance e-commerce and shopping platforms',
      category: 'ecommerce',
      categories: ['ecommerce', 'modernization'],
      company: 'Rexcel IT Services',
      timeline: 'Oct 2020 – 2021',
      role: 'Full Stack Software Developer',
      liveUrl: 'https://mubkhar.com/',
      description:
        'Engineered full-stack features for Mubkhar (mubkhar.com), a prominent luxury fragrance brand operating across multi-locale international markets, and Sandibad (sandibad.com). Built custom OpenCart to WooCommerce catalog migration plugins and fitness membership platforms.',
      problem:
        'Mubkhar required multi-localization across different Middle Eastern regions and languages (currency, translations, regional payment gateways), while retail clients required seamless catalog migrations between OpenCart and WooCommerce.',
      solution:
        'Engineered multi-locale currency and translation layers, integrated regional payment gateways, implemented technical SEO metadata, and built a custom automated OpenCart-to-WooCommerce catalog import tool.',
      impactMetrics: [
        { label: 'Live Global Store', value: 'mubkhar.com' },
        { label: 'Marketplace', value: 'sandibad.com' },
        { label: 'Migration Tool', value: 'OpenCart → WooCommerce' },
        { label: 'Localization', value: 'Multi-Locale & Multi-Currency' },
      ],
      tags: ['E-Commerce', 'Multi-Locale', 'OpenCart', 'WooCommerce', 'PHP OOP'],
      techStack: ['PHP (OOP)', 'MySQL', 'OpenCart', 'WordPress / WooCommerce', 'CodeIgniter', 'JavaScript', 'Tailwind CSS', 'Technical SEO'],
      features: [
        'Multi-locale international storefront for Mubkhar with dynamic RTL/LTR language support',
        'Sandibad e-commerce portal development and checkout optimization',
        'Custom OpenCart -> WooCommerce automated catalog, category, and order import plugin',
        'InShape Fitness and Yusuf Fitness custom membership and session booking systems',
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
        'Contributing to EZChildTrack (ezchildtrack.com), a cloud-based childcare management SaaS platform used by 4,000+ schools across North America. Developing enterprise modules and modernizing legacy monolith applications into Nuxt 4 SSR, C# ASP.NET Core, and IIS ARR reverse proxy architectures with Vitest automation.',
      bullets: [
        'Contributing to EZChildTrack (https://www.ezchildtrack.com), a cloud-based childcare management SaaS platform used by 4,000+ schools across North America.',
        'Engineered backend services and APIs using C#, ASP.NET Core Web APIs, and Node.js APIs with MS SQL Server, leveraging T-SQL stored procedures optimization, input validations, and performance tuning.',
        'Contributed to the large legacy MainApp monolith application (ASP.NET MVC, VB.NET web forms) by adding new features while ensuring stability and backward compatibility.',
        'Actively driving legacy system modernization by developing the new Admin Portal using Nuxt 4 and Nuxt UI (SSR) following a Strangler Fig pattern with micro-services architecture.',
        'Developed and enhanced multiple enterprise-grade UI modules including Admin Portal, Parent Portal, Parent Application, Activity & Attendance, One-Time Application, and MainApp using Nuxt (SSR) and Vue.js.',
        'Configured IIS web.config Application Request Routing (ARR) reverse proxying to route requests between modern Nuxt 4 SSR modules and legacy MainApp endpoints with zero downtime.',
        'Developed reusable UI components using React.js and integrated REST APIs to support scalable and maintainable frontend architecture.',
        'Wrote robust automated frontend unit tests using Vitest to prevent regressions and improve build stability.',
        'Leveraged Claude AI and modern LLM workflows to accelerate architectural prototyping, code refactoring, and test case generation.',
        'Improved application performance through frontend optimizations, caching strategies, and build tool configuration (Vite/Webpack), reducing initial load times.',
        'Ensured responsive and accessible UI development following WCAG standards, localization (i18n), and cross-browser compatibility.',
      ],
      techStack: [
        'C# ASP.NET Core Web API',
        'ASP.NET MVC & VB.NET WebForms (Legacy MainApp)',
        'Nuxt 4 (SSR)',
        'Vue.js',
        'MS SQL Server (T-SQL SPs)',
        'IIS ARR Reverse Proxy',
        'Claude AI & LLM Workflows',
        'Vitest',
        'React.js',
        'Tailwind CSS & Bootstrap',
        'Vite',
      ],
      keyHighlight: 'Modernizing core modules for 4,000+ schools via Nuxt 4 SSR, C# .NET Core & ARR Proxy',
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
        'Led frontend and full-stack development across high-traffic e-commerce, mobile applications, and enterprise CRM platforms. Mentored and led a team of 8+ developers, migrated platforms, and deployed cloud infrastructure on AWS (EC2 with Application Load Balancer, S3, and SES).',
      bullets: [
        'Worked on BullionStore Australia (https://bullionstore.com.au/), a high-traffic precious metals e-commerce platform built with Vue SSR (Nuxt) and Node.js (Express).',
        'Developed and launched the BullionStore Mobile App on Google Play Store built with Ionic Capacitor for Android/iOS cross-platform users.',
        'Led the full migration of the BullionStore platform from Laravel (Bagisto) to Node.js + Nuxt, including full storefront and role-based admin panel.',
        'Led and mentored a team of 8+ developers, providing technical guidance, conducting code reviews, and ensuring adherence to best practices and milestone deliveries.',
        'Architected AWS cloud infrastructure with EC2 instances behind Application Load Balancers (ALB), Amazon S3 for media storage, and Amazon SES for automated notifications and newsletters.',
        'Configured Google Merchant Center feeds, Facebook Pixel conversion tracking, and Google Analytics (GA4 / Gtag) for e-commerce attribution and Lighthouse SEO optimization.',
        'Worked on F.A.T e-commerce platform (https://www.f-a-t.shop/) and Numismatix Australia collectible coins platform.',
        'Developed Web Admin Portals & Fusion24X7 (Smart CRM) using React.js, implementing role-based dashboards and operational workflows.',
        'Built a real-time Chat Application using React.js, Node.js (Express API), and MongoDB, enabling dynamic messaging and interactive UI updates.',
        'Integrated third-party systems including Xero accounting and GBG (GreenID) KYC, ensuring secure AML-compliant transactions.',
        'Designed and deployed AWS infrastructure (EC2, RDS, S3, SES, Route 53) for scalable and production-ready environments on Linux (Ubuntu).',
        'Contributed to Begenius app (Google Play Store) and Nediaz, a recruitment and networking platform (Vue.js, Node.js, MongoDB).',
      ],
      techStack: [
        'Vue.js (Nuxt SSR)',
        'Node.js & Express.js',
        'Ionic Capacitor (Google Play)',
        'AWS (EC2, ALB, S3, SES)',
        'Google Merchant Center & FB Pixel',
        'GA4 / Gtag SEO',
        'React.js',
        'AWS RDS & Linux (Ubuntu)',
        'MongoDB',
        'Xero & GBG KYC APIs',
      ],
      keyHighlight: 'Led 8+ engineer pod; replatformed BullionStore + Play Store app; AWS EC2, ALB, S3 & SES architecture',
    },
    {
      id: 'rexcel',
      role: 'Software Developer',
      company: 'Rexcel IT Services Pvt. Ltd.',
      companyType: 'IT & Software Development Services',
      location: 'Noida, Uttar Pradesh, India',
      period: 'Oct 2020 – 2021',
      durationLabel: '1 Year',
      isCurrent: false,
      summary:
        'Full-stack engineering of international multi-localized e-commerce stores, fitness platforms, and custom WooCommerce migration plugins using PHP (OOP), MySQL, CodeIgniter, OpenCart, and modern styling.',
      bullets: [
        'Started October 8, 2020, delivering 5+ custom e-commerce, fitness, and commercial business platforms 15% ahead of schedule on average.',
        'Worked on Mubkhar (https://mubkhar.com/), a luxury fragrance brand with multi-locale international storefronts, dynamic regional localization, and technical SEO optimization.',
        'Engineered Sandibad e-commerce marketplace (https://sandibad.com/) and checkout workflows.',
        'Built a custom OpenCart to WooCommerce automated catalog import plugin, migrating products, variants, categories, and media assets.',
        'Developed InShape Fitness and Yusuf Fitness platforms with member subscription management and session scheduling.',
        'Developed backend APIs using PHP (OOP) and MySQL, ensuring efficient data normalization and query speeds.',
        'Built responsive UIs using JavaScript, jQuery, HTML, CSS, Bootstrap, and Tailwind CSS.',
      ],
      techStack: [
        'PHP (OOP)',
        'MySQL',
        'OpenCart',
        'WordPress & WooCommerce',
        'CodeIgniter',
        'Tailwind CSS',
        'JavaScript',
        'Technical SEO',
      ],
      keyHighlight: 'Delivered multi-locale Mubkhar.com, Sandibad.com, and OpenCart → WooCommerce migration tool',
    },
    {
      id: 'mag-studios',
      role: 'Web Developer',
      company: 'MAG Studios',
      companyType: 'Digital & Software Solutions Agency',
      location: 'Delhi NCR, India',
      period: 'Aug 2020 – Sept 2020',
      durationLabel: 'Initial Experience',
      isCurrent: false,
      summary:
        'Joined on August 8, 2020, contributing to web interface development, client feature enhancements, and backend scripting across early production web initiatives.',
      bullets: [
        'Contributed to web development and UI enhancements for client commercial platforms.',
        'Assisted with frontend styling, JavaScript interactivity, and backend database integrations.',
        'Participated in code reviews and Agile sprint planning workflows.',
      ],
      techStack: ['JavaScript', 'HTML5 & CSS3', 'PHP', 'MySQL', 'Git'],
      keyHighlight: 'Initial professional software development role starting August 8, 2020',
    },
  ] as ExperienceItem[],
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Dr. A. P. J. Abdul Kalam Technical University, Lucknow',
      period: '2019 – 2021',
      grade: 'Grade A+ (First Class with Distinction)',
      level: 'Postgraduate Degree',
      details: 'Specialization in Advanced Computer Applications, Software Engineering, Database Systems, and Distributed Computing.',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Chaudhary Charan Singh University, Meerut',
      period: '2016 – 2019',
      grade: 'Grade A (First Class)',
      level: 'Undergraduate Degree',
      details: 'Core foundation in Data Structures, Object-Oriented Programming, Web Technologies, and Database Management.',
    },
  ] as EducationItem[],
  architecturePlaybook: [
    {
      title: 'Strangler Fig Pattern & ARR Reverse Proxy Modernization',
      subtitle: 'Modernizing Enterprise Monoliths Without System Downtime',
      badge: 'Architecture Pattern',
      overview:
        'A battle-tested methodology for incrementally replacing legacy ASP.NET WebForms/MVC MainApp monoliths with modern Nuxt 4 SSR micro-frontends and C# ASP.NET Core stateless Web APIs.',
      stages: [
        { step: '01', name: 'IIS ARR Reverse Proxy', desc: 'Configure IIS web.config Application Request Routing (ARR) to transparently inspect URL routes—forwarding new /admin and /parent paths to Nuxt 4 SSR while preserving /legacy on the MainApp monolith.' },
        { step: '02', name: 'Decouple T-SQL & APIs', desc: 'Decouple tightly coupled stored procedures into stateless C# ASP.NET Core Web API endpoints using DTOs, FluentValidation, and clean domain boundaries.' },
        { step: '03', name: 'Nuxt 4 SSR & Vitest', desc: 'Construct accessible, responsive UI modules using Nuxt 4 SSR with Vue 3 / React components, reducing bundle payload and verifying stability via automated Vitest suites and Claude AI workflows.' },
        { step: '04', name: 'Decommission Legacy Views', desc: 'Once all user journeys (Parent Portal, Attendance, Billing, Waitlist) are verified on the new stack, safely retire the legacy ASPX/VB.NET views.' },
      ],
    },
    {
      title: 'High-Concurrency E-Commerce & AWS Cloud Scalability',
      subtitle: 'BullionStore Australia Architectural Blueprints',
      badge: 'Production Engineering',
      overview:
        'Techniques used to handle rapid financial spot price fluctuations, mobile app cross-platform parity with Ionic Capacitor, marketing telemetry feeds, and AWS infrastructure (EC2 behind Application Load Balancers, S3, and SES).',
      stages: [
        { step: '01', name: 'SSR Dynamic Cache', desc: 'Nuxt SSR with edge caching delivers sub-second initial paint and top search engine indexation.' },
        { step: '02', name: 'Automated AML/KYC', desc: 'GBG GreenID KYC integration verifies customer identity in real time before payment capture, meeting strict AML regulations.' },
        { step: '03', name: 'Ionic Capacitor Mobile', desc: 'Cross-platform native mobile app compiled with Ionic Capacitor and deployed directly to Google Play Store.' },
        { step: '04', name: 'AWS EC2 & Load Balancers', desc: 'EC2 instances fronted by Application Load Balancers (ALB) on Linux (Ubuntu), with S3 media asset storage, and Amazon SES for automated customer notifications & newsletter broadcasts.' },
      ],
    },
  ],
};
