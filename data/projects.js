/* ============================================================
   PROJECTS DATA — Sachin Rathnayaka
   Updated from GitHub repositories
   ============================================================ */

window.SR_PROJECTS = [

  /* ============================================================
     01 — GARMENT INVENTORY MANAGEMENT SYSTEM
     ============================================================ */
  {
    id: "garment-inventory",
    title: "Garment Inventory Management System",
    category: "full-stack",
    categories: ["full-stack", "web"],
    categoryLabel: "Full Stack",
    featured: true,
    wide: false,
    short: "A complete garment inventory and business management system designed to manage products, categories, inventory, warehouses, suppliers, purchases, production, quality control, sales orders, customers, employees, attendance, barcode/QR, reports, notifications and user roles.",
    image: "assets/images/projects/garment-inventory/cover.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/SIRATHNAYAKA/garment-inventory",
    live: null,
    overview: "A modern web-based inventory and business management system designed for garment businesses. Manage products, inventory, suppliers, purchases, production, quality control, sales, employees, warehouses, reports and more from one centralized platform.",
    problem: "Managing garment inventory across products, categories, warehouses, suppliers, purchases, production, quality control, sales orders and employees typically requires many disconnected tools and manual processes.",
    solution: "A single web-based system that centralises the entire operation — with role-based access, barcode/QR support, notifications and reporting — so the business can track everything from one place.",
    features: [
      "Dashboard with business overview",
      "Product & category management",
      "Warehouse and stock tracking",
      "Supplier and purchase management",
      "Production and BOM management",
      "Quality control workflows",
      "Sales orders and customer records",
      "Employee management with attendance",
      "Barcode / QR support",
      "Reports and notifications",
      "User roles and permissions",
      "System settings"
    ],
    role: "Full stack development — database design, backend logic in PHP, frontend interface in HTML/CSS/JavaScript.",
    challenges: "Designing a data model flexible enough to handle many interconnected entities (products, warehouses, purchases, production, sales) while keeping the interface clear for non-technical staff.",
    outcome: "A working, deployable system that covers the complete garment business workflow end to end.",
    screenshots: [
      "assets/images/projects/garment-inventory/shot-1.jpg",
      "assets/images/projects/garment-inventory/shot-2.jpg",
      "assets/images/projects/garment-inventory/shot-3.jpg"
    ]
  },

  /* ============================================================
     02 — ONLINE JOB PORTAL
     ============================================================ */
  {
    id: "online-job-portal",
    title: "Online Job Portal",
    category: "full-stack",
    categories: ["full-stack", "web"],
    categoryLabel: "Full Stack",
    featured: true,
    wide: false,
    short: "A web-based recruitment platform that connects job seekers with employers and provides an organized job application workflow.",
    image: "assets/images/projects/online-job-portal/cover.jpg",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/SIRATHNAYAKA/Online-Job-Protal",
    live: null,
    overview: "A job marketplace platform connecting job seekers with employers through structured job listings, company profiles and applications.",
    problem: "Job seekers and employers need a structured, easy-to-navigate platform where listings are categorised and applications are trackable.",
    solution: "A PHP/MySQL job portal with separate flows for job seekers, employers and administrators, including search, filtering, applications and administrative moderation.",
    features: [
      "Job search and filtering",
      "Job categories and regions",
      "User registration & login",
      "Employer management",
      "Job posting and applications",
      "Saved jobs",
      "User profiles",
      "Admin dashboard",
      "Job & application management"
    ],
    role: "Full stack development — backend logic, database schema, frontend interface and admin panel.",
    challenges: "Designing clean separation between job seeker, employer and admin views while keeping the database structure simple and query-efficient.",
    outcome: "A functional job portal demonstrating end-to-end application flow from posting to application.",
    screenshots: [
      "assets/images/projects/online-job-portal/shot-1.jpg",
      "assets/images/projects/online-job-portal/shot-2.jpg"
    ]
  },

  /* ============================================================
     03 — ELECTRICITY BILLING MANAGEMENT SYSTEM
     ============================================================ */
  {
    id: "electricity-billing",
    title: "Electricity Billing Management System",
    category: "full-stack",
    categories: ["full-stack", "web"],
    categoryLabel: "Full Stack",
    featured: true,
    wide: false,
    short: "A web-based electricity billing system for managing customers, meters, bills, payments, and billing records.",
    image: "assets/images/projects/placeholder.svg",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/SIRATHNAYAKA/Electricity-Billing-System",
    live: null,
    overview: "A web-based electricity billing system designed to manage customers, meters, bill generation, payments and billing records for utility management.",
    problem: "Managing electricity customers, meter readings, bill generation and payment tracking manually leads to errors and inefficiency.",
    solution: "A centralized web system that handles the complete billing lifecycle — from meter reading to bill generation to payment tracking.",
    features: [
      "Customer management",
      "Meter management",
      "Bill generation",
      "Payment management",
      "Billing records",
      "Meter reading management",
      "Billing reports",
      "User authentication",
      "Admin management"
    ],
    role: "Full stack development.",
    challenges: "Handling accurate bill calculations, payment tracking and record-keeping across many customers and billing cycles.",
    outcome: "A working billing system that streamlines utility management for electricity providers.",
    screenshots: []
  },

  

  /* ============================================================
     04 — PERSONAL DEVELOPER PORTFOLIO
     ============================================================ */
  {
    id: "premium-portfolio",
    title: "Personal Developer Portfolio",
    category: "web",
    categories: ["web", "uiux"],
    categoryLabel: "Web Development",
    featured: true,
    wide: false,
    short: "A modern personal portfolio website created to showcase development, design skills, projects, and professional profile.",
    image: "assets/images/projects/placeholder.svg",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/SIRATHNAYAKA/premium-portfolio",
    live: "https://sirathnayaka.github.io/premium-portfolio/",
    overview: "A premium personal portfolio built from scratch with a focus on modern UI, responsive design and smooth animations.",
    problem: "Generic portfolio templates rarely communicate a developer's real design sense or engineering ability.",
    solution: "A hand-built, GitHub Pages-compatible portfolio using semantic HTML, modular CSS and vanilla JavaScript.",
    features: [
      "Modern UI",
      "Responsive design",
      "Project showcase",
      "About section",
      "Skills section",
      "Contact section",
      "GitHub integration",
      "Smooth animations"
    ],
    role: "Design and development — everything from layout to JavaScript.",
    challenges: "Keeping the motion rich but performant on low-end devices and ensuring accessibility in a highly animated layout.",
    outcome: "A portfolio that loads fast, looks premium and stays maintainable.",
    screenshots: []
  },

  /* ============================================================
     05 — BOOKSHOP MANAGEMENT SYSTEM
     ============================================================ */
  {
    id: "bookshop-management",
    title: "Bookshop Management System",
    category: "academic",
    categories: ["academic", "other"],
    categoryLabel: "Academic",
    featured: true,
    wide: false,
    short: "A bookshop management system built to handle book inventory, sales transactions, and customer records.",
    image: "assets/images/projects/placeholder.svg",
    technologies: ["MS Access", "Database Design"],
    github: "https://github.com/SIRATHNAYAKA/Bookshop-Management-System",
    live: null,
    overview: "A bookshop management system designed to manage book inventory, sales, and customer information.",
    problem: "Bookshops need an organized way to track inventory, sales and customer records without relying on manual systems.",
    solution: "A database-driven management system with modules for book records, sales and customer management.",
    features: [
      "Book inventory management",
      "Sales transactions",
      "Customer records",
      "Sales reporting"
    ],
    role: "Database design and system development.",
    challenges: "Designing a clean database schema for bookshop operations and maintaining data integrity.",
    outcome: "A functional management system demonstrating database design and business logic.",
    screenshots: []
  },

  /* ============================================================
     06 — GARMENT EMPLOYEE MANAGEMENT SYSTEM
     ============================================================ */
  {
    id: "garment-employee",
    title: "Garment Employee Management System",
    category: "academic",
    categories: ["academic", "other"],
    categoryLabel: "Academic",
    featured: true,
    wide: false,
    short: "An employee management system designed for garment industry operations — handling employee records, departments and attendance.",
    image: "assets/images/projects/placeholder.svg",
    technologies: ["MS Access", "Database Design"],
    github: "https://github.com/SIRATHNAYAKA/Garment-Employee-Management-System",
    live: null,
    overview: "An employee management system for garment industry operations, handling employee records, departments and attendance.",
    problem: "Garment factories need structured systems for managing employee information and attendance across departments.",
    solution: "A database management system with employee profiles, department organization and attendance tracking.",
    features: [
      "Employee records",
      "Department management",
      "Attendance tracking",
      "Employee reporting"
    ],
    role: "Database design and system development.",
    challenges: "Modelling employee and department relationships cleanly while keeping data consistent.",
    outcome: "A working employee management system for garment industry use.",
    screenshots: []
  },

  /* ============================================================
     07 — BANK MANAGEMENT SYSTEM
     ============================================================ */
  {
    id: "bank-management",
    title: "Bank Management System",
    category: "academic",
    categories: ["academic", "other"],
    categoryLabel: "Academic",
    featured: true,
    wide: false,
    short: "A bank management system for handling customer accounts, transactions, and banking operations.",
    image: "assets/images/projects/placeholder.svg",
    technologies: ["Java", "MS Access", "Database Design"],
    github: "https://github.com/SIRATHNAYAKA/Bank-Management-System--master",
    live: null,
    overview: "A bank management system designed to handle customer accounts, transactions and core banking operations.",
    problem: "Banking operations require secure, organized systems for managing accounts and transactions.",
    solution: "A management system with modules for customer accounts, deposits, withdrawals and transaction history.",
    features: [
      "Customer account management",
      "Deposits and withdrawals",
      "Transaction history",
      "Account reporting"
    ],
    role: "System development and database design.",
    challenges: "Handling transactional data accurately and maintaining account balance integrity.",
    outcome: "A functional banking management system demonstrating transactional logic.",
    screenshots: []
  },

  /* ============================================================
     08 — BLACK STUDIO (CREATIVE BRAND)
     ============================================================ */
  {
    id: "black-studio",
    title: "BLACK STUDIO — Creative Brand",
    category: "other",
    categories: ["other", "uiux"],
    categoryLabel: "Creative Brand",
    featured: true,
    wide: false,
    short: "A creative digital brand focused on graphic design, branding, web design, and digital creative services.",
    image: "assets/images/projects/placeholder.svg",
    technologies: ["Photoshop", "Illustrator", "Figma", "Canva"],
    github: null,
    live: null,
    overview: "Black Studio is a creative digital brand focused on graphic design, branding, web design, and digital creative services.",
    problem: "Businesses and individuals need cohesive visual identity and digital design work that connects brand and technology.",
    solution: "A creative practice offering end-to-end design services — from logo and brand identity to web design and UI/UX.",
    features: [
      "Graphic Design",
      "Logo Design",
      "Brand Identity",
      "Social Media Designs",
      "Website Design",
      "UI/UX Design",
      "Promotional Designs",
      "Web Development"
    ],
    role: "Founder & Creative Director — responsible for all design and creative direction.",
    challenges: "Building a cohesive creative brand that bridges traditional graphic design with modern web development.",
    outcome: "An active creative practice delivering design solutions for clients and personal projects.",
    screenshots: []
  }

];