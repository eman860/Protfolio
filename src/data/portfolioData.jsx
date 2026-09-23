import React from 'react';

export const personalInfo = {
  name: 'Imman',
  fullName: 'Eman A (Imman)',
  role: 'Software Developer & AI Enthusiast',
  headline: "Hi, I'm Imman.",
  subheadline: 'Software Developer building modern web experiences, intelligent applications & digital products.',
  status: 'Available for opportunities',
  location: 'Tamil Nadu, India',
  email: 'imman6230@gmail.com',
  phone: '+91 8610072497',
  github: 'https://github.com/eman860',
  linkedin: 'https://www.linkedin.com/in/imman-10im',
  resumeUrl: '/resume.pdf',
  aboutStatement: "I don't just write code. I build experiences.",
  aboutDescription:
    'Computer Science & Engineering student at Annai Mira College of Engineering and Technology (CGPA 8.20). Passionate about full-stack engineering, robust backend architecture with Java and Python, and modern interactive UI design. Continuously strengthening Data Structures & Algorithms and exploring applied AI/ML applications.',
};

export const kineticRoles = [
  'Full Stack Developer',
  'AI Enthusiast',
  'Frontend Developer',
  'Software Engineer',
  'Problem Solver',
];

export const statistics = [
  { value: '6+', label: 'Shipped Projects', icon: '🚀' },
  { value: '15+', label: 'Core Technologies', icon: '⚡' },
  { value: '25+', label: 'DSA Problems Solved', icon: '🧩' },
  { value: '2', label: 'Industry Internships', icon: '💼' },
  { value: '1', label: 'Conference Paper (ICCIS-3.0)', icon: '🔬' },
  { value: '8.20', label: 'B.E. CSE CGPA', icon: '🎓' },
];

export const skillCategories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'programming', label: 'Programming' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Tools / Platforms' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'cloud', label: 'Cloud / Networking' },
];

export const allSkills = [
  // --- FRONTEND ---
  {
    name: 'HTML',
    category: 'frontend',
    level: 'Advanced',
    color: '#E44D26',
    glowColor: 'rgba(228, 77, 38, 0.4)',
    tag: 'Semantic Markup',
    description: 'Accessible semantic structures, modern HTML5 APIs, SEO best practices, and clean DOM trees.',
    icon: (
      <svg viewBox="0 0 32 32" width="34" height="34">
        <path fill="#E44D26" d="M5 2l2.3 24.8L16 30l8.7-3.2L27 2H5z"/>
        <path fill="#F16529" d="M16 4.3v23.2l6.7-2.4 1.9-20.8H16z"/>
        <path fill="#EBEBEB" d="M16 11.6h-5.6l.4 4.2H16v-4.2zm0 8.4l-.1.1-3.6-1-.2-2.7H8.5l.4 5.3 7.1 2v-3.7z"/>
        <path fill="#FFFFFF" d="M16 11.6h5.6l-.5 5.8H16v-5.8zm0 8.4v3.7l7.1-2 .1-.9.7-7.6H16v2.6h2.7l-.3 3.2-2.4.9z"/>
      </svg>
    ),
  },
  {
    name: 'CSS',
    category: 'frontend',
    level: 'Advanced',
    color: '#264DE4',
    glowColor: 'rgba(38, 77, 228, 0.4)',
    tag: 'Responsive Styling',
    description: 'Flexbox, CSS Grid, keyframes, transitions, custom properties, glassmorphism, and responsive layouts.',
    icon: (
      <svg viewBox="0 0 32 32" width="34" height="34">
        <path fill="#1572B6" d="M5 2l2.3 24.8L16 30l8.7-3.2L27 2H5z"/>
        <path fill="#33A9DC" d="M16 4.3v23.2l6.7-2.4 1.9-20.8H16z"/>
        <path fill="#EBEBEB" d="M16 11.6h-5.6l.4 4.2H16v-4.2zm-5.4 6.3h2.6l.2 2.1 2.6.7V24l-4.9-1.4-.5-4.7z"/>
        <path fill="#FFFFFF" d="M16 11.6h5.6l-.4 4.2H16v-4.2zm0 6.3h5l-.5 5.5-4.5 1.3V21l2.4-.7.2-2.4H16v-2z"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    level: 'Advanced',
    color: '#F7DF1E',
    glowColor: 'rgba(247, 223, 30, 0.4)',
    tag: 'ES6+ & DOM',
    description: 'Asynchronous event handling, DOM manipulation, promises, closures, and modern client-side scripting.',
    icon: (
      <svg viewBox="0 0 32 32" width="34" height="34">
        <rect width="32" height="32" rx="6" fill="#F7DF1E"/>
        <path d="M10 22.5c.8 1.1 2 1.8 3.5 1.8 1.8 0 3.1-1.1 3.1-3.5v-8.8h-3.1v8.8c0 .8-.4 1.3-1.1 1.3-.6 0-1.1-.5-1.4-1.1L10 22.5zm10.2.4c1.1 1.1 2.8 1.9 4.9 1.9 3.5 0 5.7-1.9 5.7-4.8 0-2.7-1.7-3.8-4.1-4.8-1.6-.7-2.4-1.1-2.4-2.2 0-1 .8-1.7 2.1-1.7 1.1 0 2.1.5 2.9 1.3l1.8-2c-1.1-1.1-2.7-1.7-4.6-1.7-3.3 0-5.2 1.9-5.2 4.4 0 2.5 1.6 3.8 3.9 4.8 1.6.6 2.5 1.3 2.5 2.4 0 1.1-.9 1.9-2.4 1.9-1.4 0-2.5-.6-3.3-1.7l-1.8 2z" fill="#111111"/>
      </svg>
    ),
  },
  {
    name: 'React',
    category: 'frontend',
    level: 'Advanced',
    color: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.4)',
    tag: 'Component Architecture',
    description: 'Functional components, hooks, state lifecycle, context API, and modular responsive web applications.',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="34" height="34">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    level: 'Advanced',
    color: '#7952B3',
    glowColor: 'rgba(121, 82, 179, 0.4)',
    tag: 'UI Toolkit',
    description: 'Grid systems, responsive utility classes, navbars, modals, and rapid dashboard scaffolding.',
    icon: (
      <svg viewBox="0 0 32 32" width="34" height="34">
        <rect width="32" height="32" rx="7" fill="#7952B3"/>
        <path fill="#FFFFFF" d="M12.5 7h5c2.4 0 4 1.2 4 3 0 1.2-.7 2.2-1.8 2.6 1.4.4 2.3 1.6 2.3 3.1 0 2.2-1.8 3.3-4.5 3.3h-5V7zm3 5h1.7c.9 0 1.6-.5 1.6-1.3 0-.7-.7-1.2-1.6-1.2h-1.7v2.5zm0 4.5v2.7h2c1 0 1.8-.5 1.8-1.4 0-.8-.8-1.3-1.8-1.3h-2z"/>
      </svg>
    ),
  },

  // --- BACKEND ---
  {
    name: 'Node.js',
    category: 'backend',
    level: 'Proficient',
    color: '#68BD45',
    glowColor: 'rgba(104, 189, 69, 0.4)',
    tag: 'Server Runtime',
    description: 'Asynchronous event-driven backend services, RESTful API routing, and npm package integration.',
    icon: (
      <svg viewBox="0 0 32 32" width="34" height="34">
        <path fill="#83CD29" d="M16 2.8l11.5 6.6-11.5 6.6-11.5-6.6L16 2.8z"/>
        <path fill="#417E38" d="M27.5 9.4v13.2L16 29.2V16l11.5-6.6z"/>
        <path fill="#68BD45" d="M4.5 9.4L16 16v13.2L4.5 22.6V9.4z"/>
      </svg>
    ),
  },
  {
    name: 'PHP',
    category: 'backend',
    level: 'Proficient',
    color: '#777BB4',
    glowColor: 'rgba(119, 123, 180, 0.4)',
    tag: 'Server Scripting',
    description: 'Server-side application processing, database query handling, session management, and backend scripting.',
    icon: (
      <svg viewBox="0 0 48 32" width="40" height="28">
        <ellipse cx="24" cy="16" rx="23" ry="14" fill="#777BB4"/>
        <path fill="#FFFFFF" d="M11.5 10h5.2c2.5 0 4.1 1.2 4.1 3.2 0 2.2-1.8 3.5-4.3 3.5h-2.1l-1.3 5.3h-2.9l2.3-12zm4.3 4.6c1 0 1.7-.5 1.7-1.4 0-.8-.5-1.2-1.5-1.2h-2l-.6 2.6h2.4zM24.8 10h2.9l-1.2 5.1h4.2l1.2-5.1h2.9l-2.8 12h-2.9l1.3-4.8h-4.2l-1.3 4.8h-2.9l2.8-12zM36.5 10h5.2c2.5 0 4.1 1.2 4.1 3.2 0 2.2-1.8 3.5-4.3 3.5h-2.1l-1.3 5.3h-2.9l2.3-12zm4.3 4.6c1 0 1.7-.5 1.7-1.4 0-.8-.5-1.2-1.5-1.2h-2l-.6 2.6h2.4z"/>
      </svg>
    ),
  },
  {
    name: 'JSP',
    category: 'backend',
    level: 'Advanced',
    color: '#22D3EE',
    glowColor: 'rgba(34, 211, 238, 0.4)',
    tag: 'Java Server Pages',
    description: 'Dynamic server-side view generation, expression language, tag libraries, and MVC rendering.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="#22D3EE">
        <path d="M4 4h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 8h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm2-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      </svg>
    ),
  },
  {
    name: 'Servlet',
    category: 'backend',
    level: 'Advanced',
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    tag: 'Java Controllers',
    description: 'HTTP request/response handling, session control, filter chains, and routing in Java enterprise backends.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#38BDF8" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <circle cx="7" cy="8" r="1" fill="#38BDF8"/>
      </svg>
    ),
  },
  {
    name: 'JDBC',
    category: 'backend',
    level: 'Advanced',
    color: '#FB923C',
    glowColor: 'rgba(251, 146, 60, 0.4)',
    tag: 'Database Connectivity',
    description: 'Direct SQL execution, connection pooling, transactions, PreparedStatement safety, and ResultSet parsing.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#FB923C" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },

  // --- PROGRAMMING ---
  {
    name: 'Python',
    category: 'programming',
    level: 'Advanced',
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    tag: 'AI & Backend',
    description: 'Data pipelines, deep learning scripts, desktop automation, numerical computation, and system utilities.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="none">
        <path d="M11.9 1.1c-4.3 0-4.1 1.9-4.1 1.9l.01 2h4.2v.6H5.8S2 5.2 2 9.6c0 4.4 3.3 4.2 3.3 4.2h2v-2.8s-.1-3.3 3.3-3.3h5.6s3.2.1 3.2-3.1c0-3.3-2.9-3.5-2.9-3.5h-2.6zm-2.4 2.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" fill="#38BDF8"/>
        <path d="M12.1 22.9c4.3 0 4.1-1.9 4.1-1.9l-.01-2h-4.2v-.6h6.2s3.8.4 3.8-4c0-4.4-3.3-4.2-3.3-4.2h-2v2.8s.1 3.3-3.3 3.3H7.8s-3.2-.1-3.2 3.1c0 3.3 2.9 3.5 2.9 3.5h2.6zm2.4-2.1a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" fill="#FACC15"/>
      </svg>
    ),
  },
  {
    name: 'Java',
    category: 'programming',
    level: 'Advanced',
    color: '#FB923C',
    glowColor: 'rgba(251, 146, 60, 0.4)',
    tag: 'Enterprise OOP',
    description: 'Object-oriented programming, data structures, multithreading, collections framework, and clean design patterns.',
    icon: (
      <svg viewBox="0 0 32 32" width="34" height="34">
        <path fill="#5382A1" d="M11.2 25.4c4.3.4 8.7.2 12.8-.7 1.4-.3 2.8.6 3.1 2 .1.4.1.8 0 1.2-5.4 1.5-11.2 1.6-16.7.4-1.4-.3-2.3-1.7-2-3.1.2-.9.8-1.5 1.7-1.7l1.1 1.9z"/>
        <path fill="#5382A1" d="M9.8 21.9c5.1.5 10.3.3 15.3-.6 1.2-.2 2.4.5 2.7 1.7.2.9-.2 1.8-1 2.2-5.7 1.2-11.6 1.3-17.4.3-1.1-.2-1.9-1.2-1.7-2.3.2-.8.8-1.4 1.6-1.5l.5.2z"/>
        <path fill="#E76F00" d="M17.4 14.8c1.7 1.9.8 3.7.8 3.7s3.8-2 2-4.5c-1.8-2.5-3.3-3.7 4.5-7.7-6.5 1.9-8.8 5.7-7.3 8.5z"/>
        <path fill="#5382A1" d="M22.5 28.9c-3.1.8-7.5.9-11.4.3-1.6-.3-.6-1.4.4-1.5 3.8-.4 7.8-.4 11.2.5.8.2.4.6-.2.7z"/>
        <path fill="#E76F00" d="M14.9 3.1c-3.4 3.9 2 7.1-.5 11.4 4.4-4.2 1.8-8 .5-11.4z"/>
        <path fill="#5382A1" d="M25.6 22.8c2.2-.9 3.4-2.8 3.1-4.7-.4-2.3-2.8-3.7-6.2-3.8.8.8 1.4 1.8 1.7 2.9 1.7.2 2.9.9 3.1 1.8.2 1.1-.9 2.2-2.7 2.7.3.4.7.8 1 1.1z"/>
      </svg>
    ),
  },
  {
    name: 'C',
    category: 'programming',
    level: 'Proficient',
    color: '#A8B9CC',
    glowColor: 'rgba(168, 185, 204, 0.4)',
    tag: 'Core Systems',
    description: 'Structured programming, pointer arithmetic, memory management, and low-level computational fundamentals.',
    icon: (
      <svg viewBox="0 0 32 32" width="34" height="34">
        <path fill="#283593" d="M16 2.5l11.5 6.6v13.8L16 29.2 4.5 22.9V9.1L16 2.5z"/>
        <path fill="#FFFFFF" d="M16 10.5c-3.1 0-5 2.2-5 5.5s1.9 5.5 5 5.5c1.8 0 3.2-.8 4-1.9l-1.8-1.3c-.6.7-1.3 1.1-2.2 1.1-1.7 0-2.8-1.3-2.8-3.4s1.1-3.4 2.8-3.4c.9 0 1.6.4 2.2 1.1l1.8-1.3c-.8-1.1-2.2-1.8-4-1.8z"/>
      </svg>
    ),
  },
  {
    name: 'C++',
    category: 'programming',
    level: 'Proficient',
    color: '#00599C',
    glowColor: 'rgba(0, 89, 156, 0.4)',
    tag: 'OOP & Performance',
    description: 'Object-oriented programming, standard template library (STL), algorithmic problem solving, and data structures.',
    icon: (
      <svg viewBox="0 0 32 32" width="34" height="34">
        <path fill="#00599C" d="M16 2.5l11.5 6.6v13.8L16 29.2 4.5 22.9V9.1L16 2.5z"/>
        <path fill="#FFFFFF" d="M16 10.5c-3.1 0-5 2.2-5 5.5s1.9 5.5 5 5.5c1.8 0 3.2-.8 4-1.9l-1.8-1.3c-.6.7-1.3 1.1-2.2 1.1-1.7 0-2.8-1.3-2.8-3.4s1.1-3.4 2.8-3.4c.9 0 1.6.4 2.2 1.1l1.8-1.3c-.8-1.1-2.2-1.8-4-1.8zm5.5 4h1v1.5h1.5v1H22.5v1.5h-1V17H20v-1h1.5v-1.5zm4.5 0h1v1.5h1.5v1H27v1.5h-1V17h-1.5v-1H26v-1.5z"/>
      </svg>
    ),
  },

  // --- DATABASE ---
  {
    name: 'MySQL',
    category: 'database',
    level: 'Advanced',
    color: '#00758F',
    glowColor: 'rgba(0, 117, 143, 0.4)',
    tag: 'Relational Database',
    description: 'Schema normalization, complex SQL joins, index optimization, constraints, and transactional integrity.',
    icon: (
      <svg viewBox="0 0 32 32" width="34" height="34" fill="#00758F">
        <path d="M28.7 15.6c-.7-1.8-2.2-3.1-4-3.8.3-.9.4-1.9.2-2.8-.3-1.3-1.3-2.3-2.6-2.6-1.8-.4-3.5.5-4.4 1.9-1.5-.5-3.1-.4-4.5.3-2.4 1.2-3.8 3.7-3.6 6.3.1 1 .5 2 1.1 2.8-1.5 1.1-2.4 2.8-2.4 4.7 0 1.2.4 2.4 1.2 3.3-1.8.4-3.6.4-5.3-.1-1.1-.3-1.8.5-1.5 1.5.3.9 1.3 1.5 2.3 1.4 3.7.1 7.4-.9 10.5-2.8 1.9-1.2 3.3-3 4-5.1.8.2 1.6.3 2.5.1 1.8-.3 3.3-1.5 4-3.1 1.5-.4 2.7-1.6 2.5-3.1zm-8.8-5.3c.7-.6 1.8-.8 2.6-.4.5.3.8.8.8 1.4 0 .8-.5 1.6-1.3 1.8-.9.3-1.9 0-2.5-.7-.4-.6-.3-1.5.4-2.1zm-1.8 8.9c-.8 2.1-2.4 3.8-4.4 4.8-1.4.7-3 .9-4.5.7-.6-.1-.9-.6-.9-1.1 0-.6.4-1.1 1-1.2 1.8-.3 3.4-1.2 4.5-2.6.9-1.1 1.3-2.5 1.2-3.9-.1-1.8.8-3.5 2.3-4.5 1.1-.7 2.4-.8 3.6-.5.4.1.7.4.7.8 0 .4-.2.8-.6.9-1.2.4-2.2 1.3-2.6 2.5-.5 1.3-.4 2.8.2 4 .2.4.1.8-.2 1.1-.1.1-.2.2-.3.2z"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    category: 'database',
    level: 'Proficient',
    color: '#47A248',
    glowColor: 'rgba(71, 162, 72, 0.4)',
    tag: 'NoSQL Document Store',
    description: 'Document collections, BSON schemas, aggregation pipelines, flexible modeling, and JSON query operations.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34">
        <path fill="#47A248" d="M12 1.5s-.2.2-.4.4C10.2 3.6 5 8.9 5 14.5c0 4.1 2.7 7.5 6.6 8.3.3.1.5-.1.5-.4V1.5z"/>
        <path fill="#499D4A" d="M12 1.5v20.9c.1 0 .2 0 .4-.1 3.9-.8 6.6-4.2 6.6-8.3 0-5.6-5.2-10.9-6.6-12.1-.2-.2-.4-.4-.4-.4z"/>
        <path fill="#FFFFFF" opacity="0.3" d="M12 2.5v19.5c.1-.1.2-.1.3-.2 3.5-.9 5.7-4.1 5.7-7.8 0-4.8-4.5-9.6-6-11.5z"/>
        <path fill="#3FA037" d="M11.6 22.8c-.3.4-.6.8-.7 1.2h2.2c-.1-.4-.4-.8-.7-1.2h-.8z"/>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    level: 'Proficient',
    color: '#336791',
    glowColor: 'rgba(51, 103, 145, 0.4)',
    tag: 'Relational DBMS',
    description: 'ACID compliance, relational schema design, advanced indexing, and structured SQL operations.',
    icon: (
      <svg viewBox="0 0 64 64" width="34" height="34">
        <path fill="#336791" d="M32 2C15.4 2 2 15.4 2 32c0 8.2 3.3 15.6 8.7 21l3.5-3.5C9.4 44.9 6.5 38.8 6.5 32 6.5 17.9 17.9 6.5 32 6.5S57.5 17.9 57.5 32c0 6.8-2.9 12.9-7.7 17.5l3.5 3.5C58.7 47.6 62 40.2 62 32 62 15.4 48.6 2 32 2z"/>
        <path fill="#336791" d="M38.5 16.5c-4.5 0-8.8 1.8-11.8 4.7-2.3-1.6-5.1-2.5-8.2-2.5-6.8 0-12.4 4.8-13.8 11.2 1.4 1 3 1.8 4.7 2.3.6-4.5 4.5-8 9.1-8 2.2 0 4.2.8 5.7 2.1l2.5 2.1-1.3 3c-.8 1.8-1.2 3.7-1.2 5.7v13.4h5.5V37.1c0-1.5.3-3 .9-4.4l1.1-2.5 2.4 1.4c1.3.8 2.8 1.2 4.4 1.2 4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm0 11.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
      </svg>
    ),
  },
  {
    name: 'Supabase',
    category: 'database',
    level: 'Proficient',
    color: '#3ECF8E',
    glowColor: 'rgba(62, 207, 142, 0.4)',
    tag: 'BaaS & Postgres',
    description: 'Managed PostgreSQL, authentication, real-time database listeners, and RESTful query endpoints.',
    icon: (
      <svg viewBox="0 0 109 113" width="34" height="34" fill="none">
        <path d="M65.4 110.8c-2.3 3-7.2 1.4-7.3-2.5l-1.3-44.6h42.1c4.8 0 7.4 5.6 4.3 9.3L65.4 110.8z" fill="#3ECF8E"/>
        <path d="M43.7 2.1c2.3-3 7.2-1.4 7.3 2.5l1.3 44.6H10.2c-4.8 0-7.4-5.6-4.3-9.3L43.7 2.1z" fill="#3ECF8E"/>
      </svg>
    ),
  },

  // --- TOOLS / PLATFORMS ---
  {
    name: 'Git',
    category: 'tools',
    level: 'Advanced',
    color: '#F05032',
    glowColor: 'rgba(240, 80, 50, 0.4)',
    tag: 'Version Control',
    description: 'Distributed branch management, commit histories, merge conflict resolution, and local repository tracking.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="#F05032">
        <path d="M2.6 10.6l8.8-8.8a2.5 2.5 0 0 1 3.5 0l1.8 1.8-2.3 2.3a2.4 2.4 0 0 0-1.8-.3l-2.1-2.1v5.7a2.4 2.4 0 0 0 .5 4.6 2.4 2.4 0 0 0 2.4-2.4v-3.1l2.3-2.3 5.7 5.7a2.5 2.5 0 0 1 0 3.5l-8.8 8.8a2.5 2.5 0 0 1-3.5 0l-8.8-8.8a2.5 2.5 0 0 1 0-3.5z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    category: 'tools',
    level: 'Advanced',
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.4)',
    tag: 'Collaboration',
    description: 'Remote repository hosting, pull requests, project tracking, issue management, and CI workflow actions.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="#FFFFFF">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    category: 'tools',
    level: 'Advanced',
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.4)',
    tag: 'Cloud Deployment',
    description: 'Instant preview deployments, edge networks, continuous deployment pipelines, and global CDN delivery.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="#FFFFFF">
        <path d="M12 2L24 22H0L12 2z"/>
      </svg>
    ),
  },

  // --- AI / ML ---
  {
    name: 'AI',
    category: 'ai',
    level: 'Advanced',
    color: '#818CF8',
    glowColor: 'rgba(129, 140, 248, 0.4)',
    tag: 'Artificial Intelligence',
    description: 'Applied artificial intelligence systems, prompt architectures, automated reasoning, and API integrations.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="#818CF8">
        <path d="M12 2a2 2 0 0 1 2 2c0 .7-.4 1.4-1 1.7V8h2.3a2 2 0 0 1 1.7-1 2 2 0 0 1 2 2 2 2 0 0 1-1.7 1H17v4h.3a2 2 0 0 1 1.7-1 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-1.7-1H15v2.3a2 2 0 0 1 1 1.7 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-.7.4-1.4 1-1.7V18H9.7a2 2 0 0 1-1.7 1 2 2 0 0 1-2-2 2 2 0 0 1 1.7-1H9v-4H8.7a2 2 0 0 1-1.7 1 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 1.7 1H9V7.7a2 2 0 0 1-1-1.7 2 2 0 0 1 2-2 2 2 0 0 1 1.7 1H9V10h4V5.7a2 2 0 0 1-1-1.7 2 2 0 0 1 2-2zm-1 9v2h2v-2h-2z"/>
      </svg>
    ),
  },
  {
    name: 'Machine Learning',
    category: 'ai',
    level: 'Advanced',
    color: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    tag: 'Predictive Modeling',
    description: 'Feature engineering, dataset preprocessing, supervised learning, model benchmarking, and evaluation metrics.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#A855F7" strokeWidth="2">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    name: 'Deep Learning',
    category: 'ai',
    level: 'Advanced',
    color: '#E879F9',
    glowColor: 'rgba(232, 121, 249, 0.4)',
    tag: 'Neural Networks & CNN',
    description: 'Convolutional neural networks, transfer learning, medical imaging classification, and loss optimization.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#E879F9" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
        <line x1="10" y1="6.5" x2="14" y2="6.5"/>
        <line x1="10" y1="17.5" x2="14" y2="17.5"/>
        <line x1="6.5" y1="10" x2="6.5" y2="14"/>
        <line x1="17.5" y1="10" x2="17.5" y2="14"/>
      </svg>
    ),
  },

  // --- CLOUD / NETWORKING ---
  {
    name: 'Cloud',
    category: 'cloud',
    level: 'Proficient',
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    tag: 'Cloud Infrastructure',
    description: 'Cloud hosting principles, serverless compute, global content delivery, and scalable deployment pipelines.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#38BDF8" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    name: 'SDN',
    category: 'cloud',
    level: 'Proficient',
    color: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    tag: 'Software Defined Networks',
    description: 'Decoupled network control plane architecture, programmable forwarding rules, and network virtualization.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#06B6D4" strokeWidth="2">
        <rect x="2" y="2" width="6" height="6" rx="1"/>
        <rect x="16" y="2" width="6" height="6" rx="1"/>
        <rect x="9" y="16" width="6" height="6" rx="1"/>
        <line x1="5" y1="8" x2="12" y2="16"/>
        <line x1="19" y1="8" x2="12" y2="16"/>
      </svg>
    ),
  },
  {
    name: 'Network Security',
    category: 'cloud',
    level: 'Proficient',
    color: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    tag: 'Security & Integrity',
    description: 'Secure communication protocols, access control policies, encryption standards, and threat prevention.',
    icon: (
      <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#10B981" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <circle cx="12" cy="11" r="2" fill="#10B981"/>
      </svg>
    ),
  },
];

export const marqueeSkills = [
  '⚡ React',
  '☕ Java',
  '🐍 Python',
  '✨ JavaScript',
  '🌐 HTML & CSS',
  '🟢 Node.js',
  '🗄️ MySQL',
  '🐘 PostgreSQL',
  '🍃 MongoDB',
  '⚡ Supabase',
  '▲ Vercel',
  '🎨 Bootstrap',
  '🐙 Git & GitHub',
  '🧠 AI & Deep Learning',
  '☁️ Cloud & SDN',
];

export const projects = [
  {
    id: '01',
    number: '01',
    title: 'E-Commerce Shopping Website',
    category: 'Frontend & E-Commerce',
    badge: 'Live Application',
    tagline: 'High-performance interactive shopping experience with dynamic cart, catalog search & instant filtering.',
    problem:
      'Online shoppers demand fast-loading product views, instant search and category filtering, and reliable shopping cart persistence across browsing sessions.',
    process:
      'Engineered an interactive frontend featuring modular DOM rendering, structured product catalogs, real-time cart recalculations, and persistent browser storage.',
    architecture:
      'Responsive multi-page storefront architecture utilizing HTML5, CSS3, JavaScript event handling, and continuous edge deployment on Vercel.',
    solution:
      'Built a complete digital storefront with dynamic product cards, instant category filtering, quantity adjustments, and a responsive mobile-first checkout layout.',
    result:
      'Delivered a lightweight, highly responsive shopping site with zero-latency cart updates deployed live on Vercel.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Vercel'],
    highlights: ['Interactive Cart Engine', 'Instant Product Filters', 'Mobile-First Layout', 'Live Vercel Deployment'],
    accentColor: '#F59E0B',
    accentGlow: 'rgba(245, 158, 11, 0.35)',
    icon: '🛍️',
    featured: true,
    github: 'https://github.com/eman860/E-commerce-shop-website-project',
    liveUrl: 'https://e-commerce-shop-website-project-g5t.vercel.app/',
  },
  {
    id: '02',
    number: '02',
    title: 'Hospital Appointment Management System',
    category: 'Enterprise Java & Full-Stack',
    badge: 'Flagship Internship Project',
    tagline: 'Enterprise healthcare scheduling platform with real-time queues & normalized MySQL database.',
    problem:
      'Manual hospital appointment tracking and walk-in congestion caused extended patient wait times, double-booking errors, and administrative bottlenecks.',
    process:
      'Researched clinical appointment workflows during an internship at NEXTGEN. Normalized a relational MySQL database to handle doctors, departments, time slots, and patient history.',
    architecture:
      'MVC Architecture with Java Servlets handling business controller logic, JSP rendering dynamic views, and JDBC connection pools.',
    solution:
      'Engineered an end-to-end web portal enabling verified patients to browse doctor availability by specialty, schedule appointments without collisions, track queues, and view medical histories.',
    result:
      'Eliminated scheduling conflicts in simulated testing, streamlined multi-role authorization (Patient, Doctor, Admin), and packaged a clean responsive Bootstrap UI.',
    techStack: ['Java', 'JSP', 'Servlet', 'JDBC', 'MySQL', 'Bootstrap'],
    highlights: ['Doctor Scheduling', 'Real-time Queue Tracking', 'Role-Based Access', 'JDBC Connection Pooling'],
    accentColor: '#06B6D4',
    accentGlow: 'rgba(6, 182, 212, 0.35)',
    icon: '🏥',
    featured: true,
    github: 'https://github.com/eman860',
    liveUrl: null,
  },
  {
    id: '03',
    number: '03',
    title: 'NeuroBill — Billing Application',
    category: 'Automation & Software',
    badge: 'Enterprise Software',
    tagline: 'Automated billing, instant tax calculation, stock management & PDF invoice generator.',
    problem:
      'Small and medium enterprises struggle with fragmented paper invoices, manual tax calculations, and untracked inventory levels leading to revenue leaks.',
    process:
      'Modeled product catalogs, tax rules, and customer ledger databases. Designed a fast workflow with instant transaction commits.',
    architecture:
      'Python application layer connected to a normalized MySQL relational backend with cryptographic password hashing and automated PDF invoice generation.',
    solution:
      'Developed a comprehensive billing suite featuring live subtotal/tax computing, barcode-style SKU lookup, automated inventory deductions, and instant printable invoices.',
    result:
      'Shipped an open-source enterprise billing tool that accelerates checkout time and keeps stock balances synchronized in real time.',
    techStack: ['Python', 'MySQL', 'ReportLab (PDF)', 'Database Triggers'],
    highlights: ['Instant Invoicing', 'Stock Level Alerts', 'PDF Invoice Export', 'Role-Based Authentication'],
    accentColor: '#10B981',
    accentGlow: 'rgba(16, 185, 129, 0.35)',
    icon: '🧾',
    featured: false,
    github: 'https://github.com/eman860/NEURO_BILLL',
    liveUrl: null,
  },
  {
    id: '04',
    number: '04',
    title: 'Tuition Website',
    category: 'Web Application',
    badge: 'Live Application',
    tagline: 'Modern educational academy portal with curriculum schedules, faculty directory & lead capture.',
    problem:
      'Local academies face difficulties communicating subject syllabi, faculty qualifications, and class schedules to prospective students and parents.',
    process:
      'Structured curriculum modules, admission contact forms, and faculty credential showcases into a clean, trustworthy educational layout.',
    architecture:
      'Semantic HTML, CSS layout grids, JavaScript form validation, and responsive mobile presentation deployed to Vercel.',
    solution:
      'Designed an accessible web portal allowing prospective students to explore courses, review exam prep schedules, and submit direct admission inquiries.',
    result:
      'Increased engagement for student inquiries with an elegant responsive design live on Vercel.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    highlights: ['Direct Lead Capture', 'Curriculum Showcase', 'Accessible Hierarchy', 'Live Deployed'],
    accentColor: '#EC4899',
    accentGlow: 'rgba(236, 72, 153, 0.35)',
    icon: '📚',
    featured: false,
    github: 'https://github.com/eman860/tuition-website',
    liveUrl: 'https://tuition-website-opb1.vercel.app/',
  },
  {
    id: '05',
    number: '05',
    title: 'Visual Magic / Text-to-Audio',
    category: 'AI & Audio Processing',
    badge: 'Audio AI Utility',
    tagline: 'Intelligent text-to-speech engine converting text inputs into clear synthetic voice audio.',
    problem:
      'Reading long texts, study materials, or documentation on screen causes eye fatigue and limits accessibility for auditory learners.',
    process:
      'Researched phonetic text processing, speech synthesis models, and audio streaming pipelines to create an intuitive audio reader.',
    architecture:
      'Text parsing and normalization engine coupled with speech synthesis models and interactive audio playback controls.',
    solution:
      'Built a straightforward utility enabling users to enter or paste text documents and instantly synthesize and listen to natural audio output.',
    result:
      'Demonstrated practical application of speech synthesis pipelines and accessible user-interface controls.',
    techStack: ['Python', 'AI', 'JavaScript', 'Audio Synthesis'],
    highlights: ['Text-to-Speech Engine', 'Audio Playback Controls', 'Accessibility Focus', 'Synthetic Voice Output'],
    accentColor: '#8B5CF6',
    accentGlow: 'rgba(139, 92, 246, 0.35)',
    icon: '🎙️',
    featured: false,
    github: 'https://github.com/eman860',
    liveUrl: null,
  },
  {
    id: '06',
    number: '06',
    title: 'Enhanced Diagnostics with Imaging AI',
    category: 'AI & Deep Learning Research',
    badge: 'ICCIS-3.0 Conference Paper',
    tagline: 'Detection of Eye Diseases Using Deep Learning & Transfer Learning (Presented at ICCIS-3.0 Conference).',
    problem:
      'Early diagnosis of preventable eye diseases (such as diabetic retinopathy, glaucoma, and cataracts) is hindered by a shortage of specialized ophthalmologists in rural regions.',
    process:
      'Collected and preprocessed clinical retinal image datasets, applied image normalization, data augmentation, and tested deep convolutional transfer learning architectures.',
    architecture:
      'Convolutional Neural Networks (CNNs) fine-tuned via Transfer Learning with customized classification layers and rigorous confusion matrix benchmarking.',
    solution:
      'Trained and evaluated deep learning models to automatically classify retinal conditions from fundus photography, presenting findings at an international academic conference.',
    result:
      'Successfully presented at the Third International Conference on Cyber and Information Security (ICCIS-3.0) on 09.09.2025, demonstrating high classification accuracy.',
    techStack: ['Python', 'Deep Learning', 'Machine Learning', 'CNN', 'OpenCV'],
    highlights: ['ICCIS-3.0 Conference Presentation', 'Medical Imaging AI', 'Data Augmentation', 'High Diagnostic Accuracy'],
    accentColor: '#A855F7',
    accentGlow: 'rgba(168, 85, 247, 0.35)',
    icon: '👁️',
    featured: true,
    github: 'https://github.com/eman860/eye_project',
    liveUrl: null,
  },
  {
    id: '07',
    number: '07',
    title: 'Interactive To-Do List & Task Manager',
    category: 'Web Application',
    badge: 'Live Application',
    tagline: 'Zero-latency task management app with persistent local storage, priority tagging & micro-animations.',
    problem:
      'Over-complicated productivity tools with slow cloud syncing distract users from completing daily critical priorities.',
    process:
      'Focused on zero-latency task entry, keyboard shortcuts (Enter to add, Esc to cancel), intuitive status toggles, and localStorage persistence.',
    architecture:
      'Lightweight JavaScript event architecture with DOM mutation listeners, custom CSS variables, and fluid completion animations.',
    solution:
      'Built a focused task management web app supporting category badges, priority levels, task filtering (All, Active, Completed), and one-click data clear.',
    result:
      'A clean, distraction-free productivity utility deployed live on Vercel with zero runtime dependencies and instant feedback.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Vercel'],
    highlights: ['Zero Latency', 'Priority Filters', 'Persistent Data', 'Smooth Transitions'],
    accentColor: '#3B82F6',
    accentGlow: 'rgba(59, 130, 246, 0.35)',
    icon: '📝',
    featured: false,
    github: 'https://github.com/eman860/TO-DO-List',
    liveUrl: 'https://to-do-list-theta-ecru-33.vercel.app/',
  },
  {
    id: '08',
    number: '08',
    title: 'Connect 4 Interactive Game',
    category: 'Game & Web Application',
    badge: 'Interactive Web Game',
    tagline: 'Classic turn-based 4-in-a-row strategy game with dynamic grid rendering and win-condition validation.',
    problem:
      'Implementing clean turn-based board games requires handling 2D matrix state, vertical chip drop physics, and 4-way diagonal win-checking without UI lag.',
    process:
      'Modeled the 7x6 board matrix, wrote algorithmic directional checks (horizontal, vertical, diagonal positive/negative), and added interactive hover animations.',
    architecture:
      'Event-driven JavaScript game loop manipulating DOM board cells with clean CSS keyframe animations for gravity drop simulations.',
    solution:
      'Engineered a fully playable Connect 4 game supporting two-player local play, win/draw state modals, round restarts, and turn indicators.',
    result:
      'Demonstrates algorithmic matrix manipulation, state tracking, and interactive gaming UI built with vanilla technologies.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Algorithms'],
    highlights: ['Matrix State Management', '4-Way Victory Detection', 'Gravity Animations', 'Responsive Game Board'],
    accentColor: '#EF4444',
    accentGlow: 'rgba(239, 68, 68, 0.35)',
    icon: '🔴',
    featured: false,
    github: 'https://github.com/eman860',
    liveUrl: null,
  },
];

export const experiences = [
  {
    role: 'Artificial Intelligence Intern',
    company: 'NEURA GLOBAL',
    location: 'Remote',
    period: 'Feb 2026 – Mar 2026',
    badge: 'AI & Data Intelligence',
    icon: '🤖',
    accentColor: '#A855F7',
    summary:
      'Engineered and fine-tuned machine learning models as part of an industry AI internship. Gained hands-on experience in training workflows, dataset pipelines, and model evaluation metrics.',
    responsibilities: [
      'Built, evaluated, and validated predictive machine learning architectures on structured datasets.',
      'Implemented automated data cleaning, normalization, and feature extraction pipelines in Python.',
      'Participated in collaborative remote technical sprints, code reviews, and experiment benchmarks.',
    ],
    skills: ['Python', 'Machine Learning', 'Deep Learning', 'Data Preprocessing', 'Model Evaluation', 'Git'],
  },
  {
    role: 'Java Full Stack Developer Intern',
    company: 'NEXTGEN',
    location: 'Chennai / Hybrid',
    period: 'Jun 2026 – Jul 2026',
    badge: 'Enterprise Full-Stack',
    icon: '☕',
    accentColor: '#06B6D4',
    summary:
      'Engineered an end-to-end Hospital Appointment Booking System using core Java, Servlets/JSP, and MySQL. Designed robust database architectures and responsive patient/doctor portals.',
    responsibilities: [
      'Architected normalized relational MySQL schema with indexed queries for fast appointment dispatch.',
      'Developed server-side business logic and secure session management using Java Servlets & JSP.',
      'Implemented dynamic client-side forms and responsive dashboards for staff & visitors using Bootstrap.',
    ],
    skills: ['Java', 'JSP & Servlets', 'MySQL', 'JDBC', 'Bootstrap', 'HTML5/CSS3'],
  },
];

export const educationList = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Annai Mira College Of Engineering And Tech',
    period: '2023 – 2027',
    status: 'Currently Pursuing',
    icon: '🎓',
    accentColor: '#06B6D4',
    grade: 'CGPA: 8.20',
    gradeSub: 'Till 5th Semester',
    description:
      'Undergoing comprehensive undergraduate engineering training with a robust focus on software design, data structures, algorithms, and full-stack software development.',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java / C++)',
      'Database Management Systems (RDBMS)',
      'Operating Systems & System Design',
      'Computer Networks',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'GVC Higher Secondary School',
    period: '2021 – 2023',
    status: 'Completed',
    icon: '🏫',
    accentColor: '#10B981',
    grade: 'Score: 70%',
    gradeSub: 'State Board Curriculum',
    description:
      'Completed Higher Secondary Education in the science and biology discipline with strong fundamentals in mathematics, analytical reasoning, and scientific methodology.',
    coursework: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
  },
];

export const achievements = [
  {
    title: 'Detection of Eye Diseases Using Deep Learning and Transfer Learning Approaches',
    category: 'International Research Conference',
    badge: 'ICCIS-3.0 Presentation',
    description:
      'Presented the research paper at the Third International Conference on Cyber and Information Security (ICCIS-3.0), organized by DDGDVC on 09.09.2025.',
    link: 'https://github.com/eman860/eye_project',
    date: 'September 2025',
  },
];

export const certifications = [
  { name: 'Programming in Java', issuer: 'Udemy', badge: 'Core Language' },
  { name: 'Programming in Python', issuer: 'Udemy', badge: 'Core Language' },
  { name: 'Full Stack Development', issuer: 'Internship Program', badge: 'Industry Training' },
];

export const dsaSummary = {
  solvedCount: '25+',
  language: 'Java',
  platforms: ['LeetCode / Core DSA Practice'],
  topics: ['Arrays', 'Strings', 'Hashing', 'Object-Oriented Design', 'Time Complexity'],
};

export const contacts = [
  {
    id: 'email',
    href: 'mailto:imman6230@gmail.com',
    icon: '📧',
    title: 'Email',
    value: 'imman6230@gmail.com',
    copyable: true,
  },
  {
    id: 'phone',
    href: 'tel:+918610072497',
    icon: '📞',
    title: 'Phone',
    value: '+91 8610072497',
    copyable: true,
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/imman-10im',
    icon: '💼',
    title: 'LinkedIn',
    value: 'linkedin.com/in/imman-10im',
    isExternal: true,
  },
  {
    id: 'github',
    href: 'https://github.com/eman860',
    icon: '🐙',
    title: 'GitHub',
    value: 'github.com/eman860',
    isExternal: true,
  },
];

export const aiKnowledgeBase = [
  {
    keywords: ['project', 'work', 'portfolio', 'built', 'apps'],
    answer:
      "Imman has built 6+ key projects, including:\n1. 🏥 **Hospital Appointment Booking System** (Java, JSP, Servlets, MySQL, Gemini AI)\n2. 👁️ **Detection of Eye Diseases Using Deep Learning** (ICCIS-3.0 Conference Paper)\n3. 🧾 **Neuro Bill** (Python & MySQL Automated Billing Suite)\n4. 🛍️ **Modern E-Commerce Store** (JavaScript & CSS on Vercel)\n5. 📝 **Interactive To-Do List** (JavaScript & Local Storage)\n6. 📚 **Tuition Academy Website** (Education Portal on Vercel)",
  },
  {
    keywords: ['java', 'jsp', 'servlet', 'backend', 'hospital'],
    answer:
      "Java is one of Imman's strongest areas! He built an end-to-end **Hospital Appointment Booking System** during his Java Full-Stack Internship at NEXTGEN using Java, JSP, Servlets, and MySQL. He also holds a verified Udemy certification in Java and actively solves DSA problems in Java.",
  },
  {
    keywords: ['ai', 'machine learning', 'deep learning', 'ml', 'eye', 'research', 'paper', 'iccis'],
    answer:
      "Imman was an **Artificial Intelligence Intern at NEURA GLOBAL** (Feb–Mar 2026), working on ML pipelines and evaluation. Additionally, he authored and presented a research paper on **'Detection of Eye Diseases Using Deep Learning and Transfer Learning Approaches'** at the ICCIS-3.0 International Conference.",
  },
  {
    keywords: ['react', 'frontend', 'ui', 'javascript', 'css'],
    answer:
      "Yes! Imman builds interactive user interfaces with **React**, modern **JavaScript (ES6+)**, semantic **HTML5**, and responsive **CSS3**. He emphasizes clean design systems, subtle micro-animations, glassmorphism, and mobile responsiveness.",
  },
  {
    keywords: ['internship', 'experience', 'company', 'work history'],
    answer:
      "Imman has completed two industry internships:\n1. **Artificial Intelligence Intern** at NEURA GLOBAL (Remote, Feb–Mar 2026)\n2. **Java Full Stack Developer Intern** at NEXTGEN (Chennai / Hybrid, Jun–Jul 2026)",
  },
  {
    keywords: ['education', 'college', 'degree', 'cgpa', 'university', 'study'],
    answer:
      "Imman is pursuing his **B.E. in Computer Science and Engineering** at Annai Mira College of Engineering and Technology (2023–2027) with an impressive **CGPA of 8.20** through his 5th semester. He completed his HSC at GVC Higher Secondary School with 70%.",
  },
  {
    keywords: ['contact', 'email', 'phone', 'hire', 'reach', 'linkedin', 'github'],
    answer:
      "You can contact Imman directly:\n• **Email**: imman6230@gmail.com\n• **Phone**: +91 8610072497\n• **LinkedIn**: [linkedin.com/in/imman-10im](https://www.linkedin.com/in/imman-10im)\n• **GitHub**: [github.com/eman860](https://github.com/eman860)",
  },
  {
    keywords: ['resume', 'cv', 'pdf', 'download'],
    answer:
      "You can download Imman's official ATS-friendly resume anytime by clicking 'Download Resume' or viewing the interactive Resume modal on this website!",
  },
  {
    keywords: ['dsa', 'leetcode', 'problem solving', 'algorithms'],
    answer:
      "Imman actively practices Data Structures and Algorithms in **Java**, having solved **25+ core problems** focusing on Arrays, Strings, and Hashing.",
  },
];
