import { useEffect, useMemo, useState } from 'react';
import './App.css';
import profileImage from './assets/photo2.jfif';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const roles = ['Full-Stack Developer', 'Java | JSP', 'Web Developer', 'Problem Solver'];

const skillCategories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'languages', label: 'Programming' },
  { id: 'web', label: 'Web & UI' },
  { id: 'backend', label: 'Backend & DB' },
  { id: 'tools', label: 'Tools & AI' },
];

const allSkills = [
  {
    name: 'Python',
    category: 'languages',
    level: 'Advanced',
    dots: 5,
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    tag: 'Core Language',
    desc: 'Data Structures, AI/ML model development, Automation scripts',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M11.9 1.1c-4.3 0-4.1 1.9-4.1 1.9l.01 2h4.2v.6H5.8S2 5.2 2 9.6c0 4.4 3.3 4.2 3.3 4.2h2v-2.8s-.1-3.3 3.3-3.3h5.6s3.2.1 3.2-3.1c0-3.3-2.9-3.5-2.9-3.5h-2.6zm-2.4 2.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" fill="#38BDF8"/>
        <path d="M12.1 22.9c4.3 0 4.1-1.9 4.1-1.9l-.01-2h-4.2v-.6h6.2s3.8.4 3.8-4c0-4.4-3.3-4.2-3.3-4.2h-2v2.8s.1 3.3-3.3 3.3H7.8s-3.2-.1-3.2 3.1c0 3.3 2.9 3.5 2.9 3.5h2.6zm2.4-2.1a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" fill="#FACC15"/>
      </svg>
    ),
  },
  {
    name: 'Java',
    category: 'languages',
    level: 'Proficient',
    dots: 4,
    color: '#FB923C',
    glowColor: 'rgba(251, 146, 60, 0.25)',
    tag: 'Core Language',
    desc: 'Object-Oriented Programming, JSP, Servlets, Data Structures',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#FB923C">
        <path d="M8.8 19.4s-.8.5 1 .7c2.2.3 3.4.2 5.9-.2 0 0 .8.5 1.8.3-4.6 1.8-10.4.3-8.7-.8zm-.6-2.5s-1 .8 1 .9c2.6.2 4.9.3 8.3-.3 0 0 .6.4 1.3.4-5.3 1.5-12.7.5-10.6-1zm4-3.7c1.3 1.3-.3 2.6-.3 2.6s3.5-1.8 1.9-3.7c-1.6-1.8-3.1-2.7 4.2-5.7-5.9 1.4-8 4.2-5.8 6.8zm5.5 3.9c-2.4.6-5.8.7-8.8.2-1.3-.2-.5-1 .3-1.1 3-.3 6.1-.3 8.8.4.6.1.3.4-.3.5zM12.4 2C9.7 5.1 14 7.6 12 11c3.5-3.3 1.4-6.3.4-9z"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    category: 'languages',
    level: 'Advanced',
    dots: 4,
    color: '#FACC15',
    glowColor: 'rgba(250, 204, 21, 0.25)',
    tag: 'Web & Scripts',
    desc: 'Modern ES6+, Async/Await, DOM manipulation, Dynamic APIs',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#FACC15">
        <path d="M3 3h18v18H3V3zm13.7 13.9c-.8 1.4-2 2.2-3.8 2.2-2.8 0-4.3-1.7-4.3-4.1 0-2.6 1.7-4.2 4.4-4.2 1.4 0 2.5.5 3.2 1.3l-1.3 1.3c-.5-.6-1.1-.9-1.9-.9-1.4 0-2.3.9-2.3 2.5 0 1.5.8 2.4 2.2 2.4.9 0 1.5-.4 1.9-.9v-1.1h-2v-1.7h3.6v3.5zM8.5 15.6c0 1.9-.9 2.8-2.6 2.8-.8 0-1.6-.3-2.1-.8l1-1.3c.4.3.7.5 1.1.5.6 0 1-.4 1-1.2V11H8.5v4.6z"/>
      </svg>
    ),
  },
  {
    name: 'HTML5',
    category: 'web',
    level: 'Advanced',
    dots: 5,
    color: '#F97316',
    glowColor: 'rgba(249, 115, 22, 0.25)',
    tag: 'Semantic Markup',
    desc: 'Clean markup hierarchy, SEO best practices, Accessibility standards',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M4.2 2.5l1.6 17.5 6.2 1.7 6.2-1.7 1.6-17.5H4.2z" fill="#E34F26"/>
        <path d="M12 4.1v16l4.9-1.4 1.3-14.6H12z" fill="#EF652A"/>
        <path d="M12 7.7H8l.3 3.3h3.7v-3.3zm0 6.6H9.7l-.2-2.2H8l.4 4.5 3.6 1v-3.3zm0-6.6h4l-.4 4.5H12v-2.2h1.6l.2-2.3H12v-0zm0 6.6v3.3l3.6-1 .4-4.5h-4z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'CSS3',
    category: 'web',
    level: 'Advanced',
    dots: 4,
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    tag: 'Styling & Layouts',
    desc: 'Flexbox, CSS Grid layouts, Glassmorphism, Responsive animations',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M4.2 2.5l1.6 17.5 6.2 1.7 6.2-1.7 1.6-17.5H4.2z" fill="#1572B6"/>
        <path d="M12 4.1v16l4.9-1.4 1.3-14.6H12z" fill="#33A9DC"/>
        <path d="M12 7.7H8l.3 3.3h3.7v-3.3zm0 6.6H9.7l-.2-2.2H8l.4 4.5 3.6 1v-3.3zm0-6.6h4l-.4 4.5H12v-2.2h1.6l.2-2.3H12v-0zm0 6.6v3.3l3.6-1 .4-4.5h-4z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'Bootstrap',
    category: 'web',
    level: 'Proficient',
    dots: 4,
    color: '#C084FC',
    glowColor: 'rgba(192, 132, 252, 0.25)',
    tag: 'UI Framework',
    desc: 'Rapid UI prototyping, Grid systems, Custom interactive components',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#A855F7">
        <path d="M5.5 2h13a3.5 3.5 0 0 1 3.5 3.5v13a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 18.5v-13A3.5 3.5 0 0 1 5.5 2zm5 4.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h4c2.2 0 3.5-1.1 3.5-2.7 0-1.1-.7-2-1.7-2.3 1-.3 1.5-1.2 1.5-2.1 0-1.6-1.3-2.9-3.3-2.9h-4zm2 2.2h1.8c.8 0 1.4.5 1.4 1.3 0 .7-.6 1.3-1.4 1.3h-1.8V8.7zm0 4.4h2.1c.9 0 1.6.6 1.6 1.4s-.7 1.4-1.6 1.4h-2.1v-2.8z"/>
      </svg>
    ),
  },
  {
    name: 'JSP & Servlets',
    category: 'backend',
    level: 'Proficient',
    dots: 4,
    color: '#22D3EE',
    glowColor: 'rgba(34, 211, 238, 0.25)',
    tag: 'Enterprise Java',
    desc: 'MVC architecture, Session authentication, Java backend endpoints',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#22D3EE">
        <path d="M4 4h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 8h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm2-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      </svg>
    ),
  },
  {
    name: 'SQL / MySQL',
    category: 'backend',
    level: 'Proficient',
    dots: 4,
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    tag: 'Database Management',
    desc: 'Schema design, complex join queries, constraints, data integrity',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#38BDF8">
        <path d="M12 2C6.5 2 2 3.3 2 5v14c0 1.7 4.5 3 10 3s10-1.3 10-3V5c0-1.7-4.5-3-10-3zm0 2c4.4 0 8 1 8 1.5S16.4 7 12 7 4 6 4 5.5 7.6 4 12 4zm0 6c4.4 0 8-1 8-1.5V12c0 .6-3.6 1.5-8 1.5S4 12.6 4 12v-1.5c0 .5 3.6 1.5 8 1.5zm0 6c4.4 0 8-1 8-1.5V18c0 .6-3.6 1.5-8 1.5S4 18.6 4 18v-1.5c0 .5 3.6 1.5 8 1.5z"/>
      </svg>
    ),
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    level: 'Advanced',
    dots: 4,
    color: '#F43F5E',
    glowColor: 'rgba(244, 63, 94, 0.25)',
    tag: 'Version Control',
    desc: 'Branching, PRs, version control workflows, collaborative projects',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#F43F5E">
        <path d="M21.6 10.9L13.1 2.4a2.4 2.4 0 0 0-3.4 0L7.3 4.8l3.3 3.3a2.9 2.9 0 0 1 3.7 3.7l3.2 3.2a2.9 2.9 0 1 1-1.7 1.7l-3-3a2.9 2.9 0 0 1-3.7-3.7L5.8 6.7 2.4 10.1a2.4 2.4 0 0 0 0 3.4l8.5 8.5a2.4 2.4 0 0 0 3.4 0l7.3-7.3a2.4 2.4 0 0 0 0-3.8z"/>
      </svg>
    ),
  },
  {
    name: 'VS Code',
    category: 'tools',
    level: 'Expert',
    dots: 5,
    color: '#0284C7',
    glowColor: 'rgba(2, 132, 199, 0.25)',
    tag: 'IDE & Environment',
    desc: 'Live Server, debugging suites, extension ecosystems, custom snippets',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#0284C7">
        <path d="M17.6 2.3l-8.5 7.8-5.3-4-2 1 4.7 4.9-4.7 4.9 2 1 5.3-4 8.5 7.8c.8.7 2 .2 2-.9V3.2c0-1.1-1.2-1.6-2-.9zm-.6 14.5l-5.6-4.8 5.6-4.8v9.6z"/>
      </svg>
    ),
  },
  {
    name: 'AI & Deep Learning',
    category: 'tools',
    level: 'Proficient',
    dots: 4,
    color: '#E879F9',
    glowColor: 'rgba(232, 121, 249, 0.25)',
    tag: 'Machine Learning',
    desc: 'Transfer Learning, Ocular disease classification, ICCIS research',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#E879F9">
        <path d="M12 2a2 2 0 0 1 2 2c0 .7-.4 1.4-1 1.7V8h2.3a2 2 0 0 1 1.7-1 2 2 0 0 1 2 2 2 2 0 0 1-1.7 1H17v4h.3a2 2 0 0 1 1.7-1 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-1.7-1H15v2.3a2 2 0 0 1 1 1.7 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-.7.4-1.4 1-1.7V18H9.7a2 2 0 0 1-1.7 1 2 2 0 0 1-2-2 2 2 0 0 1 1.7-1H9v-4H8.7a2 2 0 0 1-1.7 1 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 1.7 1H9V7.7a2 2 0 0 1-1-1.7 2 2 0 0 1 2-2 2 2 0 0 1 2 2c0 .7-.4 1.4-1 1.7V10h4V5.7a2 2 0 0 1-1-1.7 2 2 0 0 1 2-2zm-1 9v2h2v-2h-2z"/>
      </svg>
    ),
  },
];

const marqueeSkills = [
  '⚡ Python',
  '☕ Java & JSP',
  '✨ JavaScript',
  '🌐 HTML5 & CSS3',
  '🎨 Bootstrap',
  '🗄️ MySQL',
  '🐙 Git & GitHub',
  '🧠 Deep Learning',
  '💻 VS Code',
  '🧩 Data Structures',
  '🚀 Full-Stack Development',
];

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack & Java' },
  { id: 'ai', label: 'AI & Research' },
  { id: 'web', label: 'Web Applications' },
];

const projects = [
  {
    title: 'Hospital Appointment Booking System',
    category: 'fullstack',
    subtitle: 'Enterprise Full-Stack Java Platform',
    badge: '⭐ Flagship Internship Project',
    route: 'app://apollo-hospital-booking',
    description:
      'Engineered a complete hospital appointment booking platform enabling real-time doctor availability scheduling, patient queue tracking, medical records management, and AI triage assistance.',
    tags: ['Java', 'JSP / Servlets', 'MySQL', 'Gemini AI', 'Bootstrap'],
    highlights: ['Doctor Scheduling', 'Real-time Queues', 'Gemini AI Integration'],
    accentColor: '#06B6D4',
    accentGlow: 'rgba(6, 182, 212, 0.3)',
    icon: '🏥',
    featured: true,
    links: [
      { href: '#contact', label: '💬 Inquire Details', primary: true },
      { href: 'https://github.com/eman860', label: '📂 GitHub Profile' },
    ],
  },
  {
    title: 'Detection of Eye Diseases Using Deep Learning',
    category: 'ai',
    subtitle: 'Medical Computer Vision & Research',
    badge: '🔬 ICCIS-3.0 Conference Paper',
    route: 'research://ocular-disease-detection',
    description:
      'Trained deep learning and transfer learning architectures to classify ocular diseases with high diagnostic accuracy. Research paper presented at the ICCIS-3.0 International Conference.',
    tags: ['Python', 'Deep Learning', 'Transfer Learning', 'AI / ML', 'Research'],
    highlights: ['ICCIS-3.0 Presentation', 'High Diagnostic Accuracy', 'Transfer Learning'],
    accentColor: '#A855F7',
    accentGlow: 'rgba(168, 85, 247, 0.3)',
    icon: '👁️',
    featured: true,
    links: [
      { href: 'https://github.com/eman860/eye_project', label: '📂 View Research Code', primary: true },
    ],
  },
  {
    title: 'Neuro Bill - Smart Billing System',
    category: 'fullstack',
    subtitle: 'Automated Invoice & Inventory Suite',
    badge: '💼 Enterprise Software',
    route: 'app://neuro-bill-system',
    description:
      'Developed an intelligent billing and invoice automation system with instant tax calculations, stock inventory alerts, PDF export, secure authentication, and database logging.',
    tags: ['Python', 'MySQL', 'Authentication', 'Invoice Engine'],
    highlights: ['Instant Invoicing', 'Stock Control', 'Role-based Auth'],
    accentColor: '#10B981',
    accentGlow: 'rgba(16, 185, 129, 0.3)',
    icon: '🧾',
    links: [
      { href: 'https://github.com/eman860/NEURO_BILLL', label: '📂 View Source Code', primary: true },
    ],
  },
  {
    title: 'Modern E-Commerce Store',
    category: 'web',
    subtitle: 'Responsive Online Shopping Platform',
    badge: '🌐 Live Application',
    route: 'https://e-commerce-shop-website-project-g5t.vercel.app',
    description:
      'Built a fast, interactive online store with category filters, smooth product search, live shopping cart calculations, checkout workflows, and mobile-first design.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    highlights: ['Interactive Cart', 'Instant Search', 'Mobile Responsive'],
    accentColor: '#F59E0B',
    accentGlow: 'rgba(245, 158, 11, 0.3)',
    icon: '🛍️',
    links: [
      { href: 'https://e-commerce-shop-website-project-g5t.vercel.app/', label: '🚀 Live Demo', primary: true },
      { href: 'https://github.com/eman860/E-commerce-shop-website-project', label: '📂 Source Code' },
    ],
  },
  {
    title: 'Interactive To-Do & Task Manager',
    category: 'web',
    subtitle: 'Productivity & Activity Planner',
    badge: '🌐 Live Application',
    route: 'https://to-do-list-theta-ecru-33.vercel.app',
    description:
      'Created an intuitive task manager featuring local storage data persistence, category priority tags, task status toggles, and snappy micro-animations.',
    tags: ['JavaScript', 'Local Storage', 'CSS Animations'],
    highlights: ['Persistent Storage', 'Priority Tags', 'Zero Latency'],
    accentColor: '#3B82F6',
    accentGlow: 'rgba(59, 130, 246, 0.3)',
    icon: '📝',
    links: [
      { href: 'https://to-do-list-theta-ecru-33.vercel.app/', label: '🚀 Live Demo', primary: true },
      { href: 'https://github.com/eman860/TO-DO-List', label: '📂 Source Code' },
    ],
  },
  {
    title: 'Tuition & Education Academy Website',
    category: 'web',
    subtitle: 'Educational Service & Lead Portal',
    badge: '🌐 Live Application',
    route: 'https://tuition-website-opb1.vercel.app',
    description:
      'Designed a responsive tutoring academy web portal showcasing subject curriculums, faculty credentials, tuition schedules, and direct student registration inquiry forms.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Python'],
    highlights: ['Lead Capture', 'Curriculum Guide', 'Responsive UI'],
    accentColor: '#EC4899',
    accentGlow: 'rgba(236, 72, 153, 0.3)',
    icon: '📚',
    links: [
      { href: 'https://tuition-website-opb1.vercel.app/', label: '🚀 Live Demo', primary: true },
      { href: 'https://github.com/eman860/tuition-website', label: '📂 Source Code' },
    ],
  },
];

const timelineItems = [
  {
    year: '2023 - 27 - Present',
    title: "Bachelor's in Computer Science",
    place: 'AMCET',
    description:
      'Currently pursuing my degree with focus on software engineering, data structures, and web development.',
    extra: 'CGPA-8.50',
  },
  {
    year: '2021 - 23',
    title: 'Higher Secondary Education',
    place: 'G V C',
    description:
      'Completed Higher Secondary Education in the Biology group, with a strong foundation in biology, physics, chemistry, and mathematics.',
    extra: '70%',
  },
];

const achievements = [
  {
    title: 'Detection of Eye Diseases Using Deep Learning and Transfer Learning Approaches',
    description:
      'Presented the research paper at the Third International Conference on Cyber and Information Security (ICCIS-3.0), organized by DDGDVC on 09.09.2025.',
    link: 'https://github.com/eman860/eye_project',
  },
];

const certifications = [
  'Programming in Java — Udemy',
  'Programming in Python — Udemy',
  'Full Stack Development — Internship',
];

const contacts = [
  { href: 'https://www.linkedin.com/in/imman-10im', label: '💼', title: 'LinkedIn' },
  { href: 'https://github.com/eman860', label: '🐙', title: 'GitHub' },
  { href: 'https://mail.google.com/mail/u/0/?hl=en#inbox', label: '📧', title: 'Email' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProjectCategory, setActiveProjectCategory] = useState('all');

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return allSkills;
    return allSkills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  const filteredProjects = useMemo(() => {
    if (activeProjectCategory === 'all') return projects;
    return projects.filter((project) => project.category === activeProjectCategory);
  }, [activeProjectCategory]);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 50);
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let timeout;
    const currentRole = roles[currentRoleIndex];
    const nextText = isDeleting
      ? currentRole.slice(0, typingText.length - 1)
      : currentRole.slice(0, typingText.length + 1);

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && nextText === currentRole) {
      timeout = window.setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && nextText === '') {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 500);
    } else {
      timeout = window.setTimeout(() => {
        setTypingText(nextText);
      }, delay);
    }

    return () => window.clearTimeout(timeout);
  }, [typingText, currentRoleIndex, isDeleting]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.08,
    };

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, .stagger').forEach((el) => {
      revealObserver.observe(el);
    });

    return () => revealObserver.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon!`);
    form.reset();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="geometric-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-pattern" />
      </div>

      <nav id="navbar" className={navbarScrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <a href="#hero" className="logo">
            Imman
          </a>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="mobile-menu-btn" id="mobileMenuBtn" onClick={() => setMenuOpen((open) => !open)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <main>
        <section id="hero">
          <div className="hero-badge">
            <span className="status-dot" />
            <span> Welcome_To_My_Portfolio</span>
          </div>
          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">Imman</span>
          </h1>
          <h2 className="hero-subtitle">Full-Stack Developer | Java | Web Development</h2>
          <div className="typewriter-container">
            <span className="typewriter">{typingText}</span>
          </div>
          <p className="hero-description">
            Computer Science Engineering student building practical full-stack applications with Java, JSP, Servlets, SQL, and JavaScript.
            Currently strengthening Data Structures & Algorithms and working on real-world applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>🚀</span> View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>📧</span> Contact Me
            </a>
          </div>
          <div className="scroll-indicator" aria-hidden="true">
            <span className="mouse" />
            <span className="arrow">⌄</span>
          </div>
        </section>

        <section id="about">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="about-content reveal">
            <div className="about-image">
              <img src={profileImage} alt="Imman" />
            </div>
            <div className="about-text glass-card">
              <h3>Computer Science Student & Full-Stack Developer</h3>
              <p>
                Full-stack developer in training with experience in Java, JSP/Servlets, MySQL, and JavaScript. Built a full-stack hospital appointment booking system during an
                internship. Strengthening Data Structures & Algorithms and actively contributing to practical projects.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-value" data-suffix="+">
                    25+
                  </div>
                  <div className="stat-label">DSA Problems</div>
                </div>
                <div className="stat">
                  <div className="stat-value" data-suffix="+">
                    6+
                  </div>
                  <div className="stat-label">Key Projects</div>
                </div>
                <div className="stat">
                  <div className="stat-value">B.E.</div>
                  <div className="stat-label">CSE (Pursuing)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="section-header">
            <h2 className="section-title">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive toolkit for building full-stack applications, intelligent algorithms, and responsive interfaces
            </p>
          </div>

          {/* Infinite Scrolling Marquee Ticker */}
          <div className="skills-marquee-wrap">
            <div className="skills-marquee-track">
              {marqueeSkills.concat(marqueeSkills).map((item, idx) => (
                <span className="marquee-chip" key={idx}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="skills-filter-container">
            {skillCategories.map((cat) => {
              const count = cat.id === 'all' ? allSkills.length : allSkills.filter((s) => s.category === cat.id).length;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`skill-tab-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                >
                  {cat.label}
                  <span className="tab-badge">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {filteredSkills.map((skill) => (
              <div
                className="skill-card glass-card reveal visible"
                key={skill.name}
                style={{ '--skill-color': skill.color, '--skill-glow': skill.glowColor }}
              >
                {/* Left: icon */}
                <div className="skill-icon-wrap" style={{ background: skill.glowColor, borderColor: `${skill.color}40` }}>
                  {skill.icon}
                </div>

                {/* Right: info */}
                <div className="skill-right">
                  <div className="skill-row-top">
                    <div>
                      <h3 className="skill-name">{skill.name}</h3>
                      <span className="skill-category-tag">{skill.tag}</span>
                    </div>
                    <span className="skill-level-badge" style={{ color: skill.color }}>
                      {skill.level}
                    </span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: `${(skill.dots / 5) * 100}%`,
                        background: `linear-gradient(90deg, ${skill.color}, var(--accent-purple))`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="section-header">
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              Production full-stack applications, international research papers, and responsive web tools
            </p>
          </div>

          {/* Project Filter Tabs */}
          <div className="projects-filter-container">
            {projectCategories.map((cat) => {
              const count = cat.id === 'all' ? projects.length : projects.filter((p) => p.category === cat.id).length;
              const isActive = activeProjectCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`skill-tab-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveProjectCategory(cat.id)}
                  type="button"
                >
                  {cat.label}
                  <span className="tab-badge">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div
                className={`project-card glass-card reveal visible ${project.featured ? 'featured-card' : ''}`}
                key={project.title}
                style={{ '--proj-color': project.accentColor }}
              >
                {/* Card Header */}
                <div className="proj-card-header">
                  <div className="proj-icon-circle" style={{ background: project.accentGlow, borderColor: `${project.accentColor}40` }}>
                    <span>{project.icon}</span>
                  </div>
                  <div className="proj-header-meta">
                    <span className="proj-category-pill" style={{ color: project.accentColor, borderColor: `${project.accentColor}40` }}>
                      {project.subtitle}
                    </span>
                    {project.featured && (
                      <span className="proj-featured-badge">★ Featured</span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="proj-card-body">
                  <h3 className="proj-card-title">{project.title}</h3>
                  <p className="proj-card-desc">{project.description}</p>

                  {/* Tech Tags */}
                  <div className="proj-tags-wrap">
                    {project.tags.map((tag) => (
                      <span className="proj-tech-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Card Footer — Links */}
                <div className="proj-card-footer">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className={link.primary ? 'proj-link-primary' : 'proj-link-secondary'}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Metrics Strip */}
          <div className="projects-metric-strip glass-card reveal">
            <div className="metric-box">
              <span className="metric-number gradient-text">6+</span>
              <span className="metric-title">Shipped Projects</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-box">
              <span className="metric-number gradient-text">1</span>
              <span className="metric-title">Published Research Paper</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-box">
              <span className="metric-number gradient-text">Full-Stack</span>
              <span className="metric-title">Java & Web Architecture</span>
            </div>
          </div>
        </section>

        <section id="experience">
          <h2 className="section-title">
            Experience / <span className="gradient-text">Internships</span>
          </h2>
          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-content">
                <span className="timeline-year">Feb 2026 – Mar 2026</span>
                <h3 className="timeline-title">Artificial Intelligence Intern</h3>
                <p className="timeline-place">NEURA GLOBAL — Remote</p>
                <p className="timeline-description">
                  Built and trained machine learning models as part of the AI internship, gaining hands-on experience with model development and evaluation workflows. Worked in a remote,
                  collaborative environment applying ML concepts to real problems.
                </p>
              </div>
            </div>
            <div className="timeline-item reveal">
              <div className="timeline-content">
                <span className="timeline-year">Jun 2026 – Jul 2026</span>
                <h3 className="timeline-title">Java Full Stack Developer Intern</h3>
                <p className="timeline-place">NEXTGEN</p>
                <p className="timeline-description">
                  Developed a full-stack hospital appointment booking application using Java, JSP/Servlets, and MySQL. Designed the database schema and dynamic JSP pages to handle appointment scheduling and patient records.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="timeline">
            {timelineItems.map((item) => (
              <div className="timeline-item reveal" key={item.year + item.title}>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <p className="timeline-description">{item.description}</p>
                  <p className="timeline-description">{item.extra}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements">
          <h2 className="section-title">
            Research & <span className="gradient-text">Achievements</span>
          </h2>
          {achievements.map((item) => (
            <div className="glass-card reveal" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.link && (
                <div style={{ marginTop: '1rem' }}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    📂 View Research Code (GitHub)
                  </a>
                </div>
              )}
            </div>
          ))}
        </section>

        <section id="problem-solving">
          <h2 className="section-title">
            Problem Solving & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="glass-card reveal">
            <div className="stats-grid">
              <div className="stat">
                <div className="stat-value" data-suffix="+">
                  25+
                </div>
                <div className="stat-label">DSA Problems Solved (Java)</div>
              </div>
              <div style={{ marginLeft: '2rem' }}>
                <h4>Topics</h4>
                <p>Arrays, Strings, Hashing</p>
              </div>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <h4>Certifications</h4>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="contact-container">
            <div className="contact-info reveal">
              <h3>Let's Connect!</h3>
              <p>
                I'm always open to discussing new projects, opportunities, or just having a chat about technology and coding.
              </p>
              <div className="social-links">
                {contacts.map((item) => (
                  <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="social-link" title={item.title}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <form className="contact-form glass-card reveal" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                ✉️ Send Message
              </button>
            </form>
          </div>
        </section>

        <footer>
          <p>
            © 2024 <span className="gradient-text">Imman</span>. Built with passion and code.
          </p>
        </footer>
      </main>

      <button id="backToTop" title="Back to top" aria-label="Back to top" className={showTop ? 'visible' : ''} onClick={scrollToTop}>
        ⬆
      </button>
    </div>
  );
}

export default App;
