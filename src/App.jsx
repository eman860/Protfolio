import { useEffect, useMemo, useState } from 'react';
import './App.css';
import profileImage from './assets/photo2.jfif';
import ResumeModal from './ResumeModal';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const roles = ['Full-Stack Developer', 'Java | JSP', 'Web Developer', 'Problem Solver'];

const skillCategories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database & Cloud' },
  { id: 'tools', label: 'Tools & AI' },
];

const allSkills = [
  {
    name: 'HTML5',
    category: 'frontend',
    color: '#E44D26',
    glowColor: 'rgba(228, 77, 38, 0.35)',
    tag: 'Structure',
    icon: (
      <svg viewBox="0 0 32 32" width="38" height="38">
        <path fill="#E44D26" d="M5 2l2.3 24.8L16 30l8.7-3.2L27 2H5z"/>
        <path fill="#F16529" d="M16 4.3v23.2l6.7-2.4 1.9-20.8H16z"/>
        <path fill="#EBEBEB" d="M16 11.6h-5.6l.4 4.2H16v-4.2zm0 8.4l-.1.1-3.6-1-.2-2.7H8.5l.4 5.3 7.1 2v-3.7z"/>
        <path fill="#FFFFFF" d="M16 11.6h5.6l-.5 5.8H16v-5.8zm0 8.4v3.7l7.1-2 .1-.9.7-7.6H16v2.6h2.7l-.3 3.2-2.4.9z"/>
      </svg>
    ),
  },
  {
    name: 'CSS3',
    category: 'frontend',
    color: '#264DE4',
    glowColor: 'rgba(38, 77, 228, 0.35)',
    tag: 'Styling',
    icon: (
      <svg viewBox="0 0 32 32" width="38" height="38">
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
    color: '#F7DF1E',
    glowColor: 'rgba(247, 223, 30, 0.35)',
    tag: 'Scripting',
    icon: (
      <svg viewBox="0 0 32 32" width="38" height="38">
        <rect width="32" height="32" rx="6" fill="#F7DF1E"/>
        <path d="M10 22.5c.8 1.1 2 1.8 3.5 1.8 1.8 0 3.1-1.1 3.1-3.5v-8.8h-3.1v8.8c0 .8-.4 1.3-1.1 1.3-.6 0-1.1-.5-1.4-1.1L10 22.5zm10.2.4c1.1 1.1 2.8 1.9 4.9 1.9 3.5 0 5.7-1.9 5.7-4.8 0-2.7-1.7-3.8-4.1-4.8-1.6-.7-2.4-1.1-2.4-2.2 0-1 .8-1.7 2.1-1.7 1.1 0 2.1.5 2.9 1.3l1.8-2c-1.1-1.1-2.7-1.7-4.6-1.7-3.3 0-5.2 1.9-5.2 4.4 0 2.5 1.6 3.8 3.9 4.8 1.6.6 2.5 1.3 2.5 2.4 0 1.1-.9 1.9-2.4 1.9-1.4 0-2.5-.6-3.3-1.7l-1.8 2z" fill="#111111"/>
      </svg>
    ),
  },
  {
    name: 'React',
    category: 'frontend',
    color: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.35)',
    tag: 'UI Library',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="38" height="38">
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
    name: 'Java',
    category: 'backend',
    color: '#FB923C',
    glowColor: 'rgba(251, 146, 60, 0.35)',
    tag: 'Core Language',
    icon: (
      <svg viewBox="0 0 32 32" width="38" height="38">
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
    name: 'Python',
    category: 'backend',
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    tag: 'Core Language',
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none">
        <path d="M11.9 1.1c-4.3 0-4.1 1.9-4.1 1.9l.01 2h4.2v.6H5.8S2 5.2 2 9.6c0 4.4 3.3 4.2 3.3 4.2h2v-2.8s-.1-3.3 3.3-3.3h5.6s3.2.1 3.2-3.1c0-3.3-2.9-3.5-2.9-3.5h-2.6zm-2.4 2.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" fill="#38BDF8"/>
        <path d="M12.1 22.9c4.3 0 4.1-1.9 4.1-1.9l-.01-2h-4.2v-.6h6.2s3.8.4 3.8-4c0-4.4-3.3-4.2-3.3-4.2h-2v2.8s.1 3.3-3.3 3.3H7.8s-3.2-.1-3.2 3.1c0 3.3 2.9 3.5 2.9 3.5h2.6zm2.4-2.1a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" fill="#FACC15"/>
      </svg>
    ),
  },
  {
    name: 'MySQL',
    category: 'database',
    color: '#00758F',
    glowColor: 'rgba(0, 117, 143, 0.35)',
    tag: 'RDBMS',
    icon: (
      <svg viewBox="0 0 32 32" width="38" height="38" fill="#00758F">
        <path d="M28.7 15.6c-.7-1.8-2.2-3.1-4-3.8.3-.9.4-1.9.2-2.8-.3-1.3-1.3-2.3-2.6-2.6-1.8-.4-3.5.5-4.4 1.9-1.5-.5-3.1-.4-4.5.3-2.4 1.2-3.8 3.7-3.6 6.3.1 1 .5 2 1.1 2.8-1.5 1.1-2.4 2.8-2.4 4.7 0 1.2.4 2.4 1.2 3.3-1.8.4-3.6.4-5.3-.1-1.1-.3-1.8.5-1.5 1.5.3.9 1.3 1.5 2.3 1.4 3.7.1 7.4-.9 10.5-2.8 1.9-1.2 3.3-3 4-5.1.8.2 1.6.3 2.5.1 1.8-.3 3.3-1.5 4-3.1 1.5-.4 2.7-1.6 2.5-3.1zm-8.8-5.3c.7-.6 1.8-.8 2.6-.4.5.3.8.8.8 1.4 0 .8-.5 1.6-1.3 1.8-.9.3-1.9 0-2.5-.7-.4-.6-.3-1.5.4-2.1zm-1.8 8.9c-.8 2.1-2.4 3.8-4.4 4.8-1.4.7-3 .9-4.5.7-.6-.1-.9-.6-.9-1.1 0-.6.4-1.1 1-1.2 1.8-.3 3.4-1.2 4.5-2.6.9-1.1 1.3-2.5 1.2-3.9-.1-1.8.8-3.5 2.3-4.5 1.1-.7 2.4-.8 3.6-.5.4.1.7.4.7.8 0 .4-.2.8-.6.9-1.2.4-2.2 1.3-2.6 2.5-.5 1.3-.4 2.8.2 4 .2.4.1.8-.2 1.1-.1.1-.2.2-.3.2z"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    category: 'database',
    color: '#47A248',
    glowColor: 'rgba(71, 162, 72, 0.35)',
    tag: 'NoSQL Database',
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38">
        <path fill="#47A248" d="M12 1.5s-.2.2-.4.4C10.2 3.6 5 8.9 5 14.5c0 4.1 2.7 7.5 6.6 8.3.3.1.5-.1.5-.4V1.5z"/>
        <path fill="#499D4A" d="M12 1.5v20.9c.1 0 .2 0 .4-.1 3.9-.8 6.6-4.2 6.6-8.3 0-5.6-5.2-10.9-6.6-12.1-.2-.2-.4-.4-.4-.4z"/>
        <path fill="#FFFFFF" opacity="0.3" d="M12 2.5v19.5c.1-.1.2-.1.3-.2 3.5-.9 5.7-4.1 5.7-7.8 0-4.8-4.5-9.6-6-11.5z"/>
        <path fill="#3FA037" d="M11.6 22.8c-.3.4-.6.8-.7 1.2h2.2c-.1-.4-.4-.8-.7-1.2h-.8z"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    category: 'backend',
    color: '#68BD45',
    glowColor: 'rgba(104, 189, 69, 0.35)',
    tag: 'Runtime',
    icon: (
      <svg viewBox="0 0 32 32" width="38" height="38">
        <path fill="#83CD29" d="M16 2.8l11.5 6.6-11.5 6.6-11.5-6.6L16 2.8z"/>
        <path fill="#417E38" d="M27.5 9.4v13.2L16 29.2V16l11.5-6.6z"/>
        <path fill="#68BD45" d="M4.5 9.4L16 16v13.2L4.5 22.6V9.4z"/>
      </svg>
    ),
  },
  {
    name: 'PHP',
    category: 'backend',
    color: '#777BB4',
    glowColor: 'rgba(119, 123, 180, 0.35)',
    tag: 'Server Scripting',
    icon: (
      <svg viewBox="0 0 48 32" width="44" height="30">
        <ellipse cx="24" cy="16" rx="23" ry="14" fill="#777BB4"/>
        <path fill="#FFFFFF" d="M11.5 10h5.2c2.5 0 4.1 1.2 4.1 3.2 0 2.2-1.8 3.5-4.3 3.5h-2.1l-1.3 5.3h-2.9l2.3-12zm4.3 4.6c1 0 1.7-.5 1.7-1.4 0-.8-.5-1.2-1.5-1.2h-2l-.6 2.6h2.4zM24.8 10h2.9l-1.2 5.1h4.2l1.2-5.1h2.9l-2.8 12h-2.9l1.3-4.8h-4.2l-1.3 4.8h-2.9l2.8-12zM36.5 10h5.2c2.5 0 4.1 1.2 4.1 3.2 0 2.2-1.8 3.5-4.3 3.5h-2.1l-1.3 5.3h-2.9l2.3-12zm4.3 4.6c1 0 1.7-.5 1.7-1.4 0-.8-.5-1.2-1.5-1.2h-2l-.6 2.6h2.4z"/>
      </svg>
    ),
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    color: '#F05032',
    glowColor: 'rgba(240, 80, 50, 0.35)',
    tag: 'Version Control',
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="#FFFFFF">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'VS Code',
    category: 'tools',
    color: '#007ACC',
    glowColor: 'rgba(0, 122, 204, 0.35)',
    tag: 'IDE',
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none">
        <path d="M17.6 2.3l-8.5 7.8-5.3-4-2 1 4.7 4.9-4.7 4.9 2 1 5.3-4 8.5 7.8c.8.7 2 .2 2-.9V3.2c0-1.1-1.2-1.6-2-.9z" fill="#007ACC"/>
        <path d="M17 7.2L11.4 12 17 16.8V7.2z" fill="#1F9CF0"/>
      </svg>
    ),
  },
  {
    name: 'Supabase',
    category: 'database',
    color: '#3ECF8E',
    glowColor: 'rgba(62, 207, 142, 0.35)',
    tag: 'Backend & DB',
    icon: (
      <svg viewBox="0 0 109 113" width="38" height="38" fill="none">
        <path d="M65.4 110.8c-2.3 3-7.2 1.4-7.3-2.5l-1.3-44.6h42.1c4.8 0 7.4 5.6 4.3 9.3L65.4 110.8z" fill="#3ECF8E"/>
        <path d="M43.7 2.1c2.3-3 7.2-1.4 7.3 2.5l1.3 44.6H10.2c-4.8 0-7.4-5.6-4.3-9.3L43.7 2.1z" fill="#3ECF8E"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    category: 'tools',
    color: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.25)',
    tag: 'Deployment',
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="#FFFFFF">
        <path d="M12 2L24 22H0L12 2z"/>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    color: '#336791',
    glowColor: 'rgba(51, 103, 145, 0.35)',
    tag: 'SQL Database',
    icon: (
      <svg viewBox="0 0 64 64" width="38" height="38">
        <path fill="#336791" d="M32 2C15.4 2 2 15.4 2 32c0 8.2 3.3 15.6 8.7 21l3.5-3.5C9.4 44.9 6.5 38.8 6.5 32 6.5 17.9 17.9 6.5 32 6.5S57.5 17.9 57.5 32c0 6.8-2.9 12.9-7.7 17.5l3.5 3.5C58.7 47.6 62 40.2 62 32 62 15.4 48.6 2 32 2z"/>
        <path fill="#336791" d="M38.5 16.5c-4.5 0-8.8 1.8-11.8 4.7-2.3-1.6-5.1-2.5-8.2-2.5-6.8 0-12.4 4.8-13.8 11.2 1.4 1 3 1.8 4.7 2.3.6-4.5 4.5-8 9.1-8 2.2 0 4.2.8 5.7 2.1l2.5 2.1-1.3 3c-.8 1.8-1.2 3.7-1.2 5.7v13.4h5.5V37.1c0-1.5.3-3 .9-4.4l1.1-2.5 2.4 1.4c1.3.8 2.8 1.2 4.4 1.2 4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm0 11.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
      </svg>
    ),
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    color: '#7952B3',
    glowColor: 'rgba(121, 82, 179, 0.35)',
    tag: 'CSS Framework',
    icon: (
      <svg viewBox="0 0 32 32" width="38" height="38">
        <rect width="32" height="32" rx="7" fill="#7952B3"/>
        <path fill="#FFFFFF" d="M12.5 7h5c2.4 0 4 1.2 4 3 0 1.2-.7 2.2-1.8 2.6 1.4.4 2.3 1.6 2.3 3.1 0 2.2-1.8 3.3-4.5 3.3h-5V7zm3 5h1.7c.9 0 1.6-.5 1.6-1.3 0-.7-.7-1.2-1.6-1.2h-1.7v2.5zm0 4.5v2.7h2c1 0 1.8-.5 1.8-1.4 0-.8-.8-1.3-1.8-1.3h-2z"/>
      </svg>
    ),
  },
  {
    name: 'JSP & Servlets',
    category: 'backend',
    color: '#22D3EE',
    glowColor: 'rgba(34, 211, 238, 0.35)',
    tag: 'Enterprise Java',
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="#22D3EE">
        <path d="M4 4h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 8h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm2-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      </svg>
    ),
  },
  {
    name: 'AI & Deep Learning',
    category: 'tools',
    color: '#E879F9',
    glowColor: 'rgba(232, 121, 249, 0.35)',
    tag: 'Machine Learning',
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="#E879F9">
        <path d="M12 2a2 2 0 0 1 2 2c0 .7-.4 1.4-1 1.7V8h2.3a2 2 0 0 1 1.7-1 2 2 0 0 1 2 2 2 2 0 0 1-1.7 1H17v4h.3a2 2 0 0 1 1.7-1 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-1.7-1H15v2.3a2 2 0 0 1 1 1.7 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-.7.4-1.4 1-1.7V18H9.7a2 2 0 0 1-1.7 1 2 2 0 0 1-2-2 2 2 0 0 1 1.7-1H9v-4H8.7a2 2 0 0 1-1.7 1 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 1.7 1H9V7.7a2 2 0 0 1-1-1.7 2 2 0 0 1 2-2 2 2 0 0 1 2 2c0 .7-.4 1.4-1 1.7V10h4V5.7a2 2 0 0 1-1-1.7 2 2 0 0 1 2-2zm-1 9v2h2v-2h-2z"/>
      </svg>
    ),
  },
  {
    name: 'C / C++',
    category: 'backend',
    color: '#00599C',
    glowColor: 'rgba(0, 89, 156, 0.35)',
    tag: 'Systems & DSA',
    icon: (
      <svg viewBox="0 0 32 32" width="38" height="38">
        <path fill="#00599C" d="M16 2.5l11.5 6.6v13.8L16 29.2 4.5 22.9V9.1L16 2.5z"/>
        <path fill="#004482" d="M16 2.5l11.5 6.6v13.8L16 16.5V2.5z" opacity="0.3"/>
        <path fill="#FFFFFF" d="M16 10.5c-3.1 0-5 2.2-5 5.5s1.9 5.5 5 5.5c1.8 0 3.2-.8 4-1.9l-1.8-1.3c-.6.7-1.3 1.1-2.2 1.1-1.7 0-2.8-1.3-2.8-3.4s1.1-3.4 2.8-3.4c.9 0 1.6.4 2.2 1.1l1.8-1.3c-.8-1.1-2.2-1.8-4-1.8zm5.5 4h1v1.5h1.5v1H22.5v1.5h-1V17H20v-1h1.5v-1.5zm4.5 0h1v1.5h1.5v1H27v1.5h-1V17h-1.5v-1H26v-1.5z"/>
      </svg>
    ),
  },
  {
    name: 'DSA',
    category: 'tools',
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    tag: 'Algorithms',
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="8" height="8" rx="2"/>
        <rect x="14" y="2" width="8" height="8" rx="2"/>
        <rect x="8" y="14" width="8" height="8" rx="2"/>
        <line x1="6" y1="10" x2="6" y2="12"/>
        <line x1="18" y1="10" x2="18" y2="12"/>
        <line x1="6" y1="12" x2="18" y2="12"/>
        <line x1="12" y1="12" x2="12" y2="14"/>
      </svg>
    ),
  },
];

const marqueeSkills = [
  '⚡ React',
  '☕ Java & JSP',
  '🐍 Python',
  '✨ JavaScript',
  '🌐 HTML5 & CSS3',
  '🟢 Node.js',
  '🍃 MongoDB',
  '🗄️ MySQL & PostgreSQL',
  '⚙️ C / C++',
  '🧩 Data Structures',
  '⚡ Supabase',
  '▲ Vercel',
  '🎨 Bootstrap',
  '🐙 Git & GitHub',
  '🧠 AI & Deep Learning',
  '💻 VS Code',
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

const experiences = [
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
      'Built, evaluated, and validated predictive machine learning architectures on structured datasets',
      'Implemented automated data cleaning, normalization, and feature extraction pipelines',
      'Participated in collaborative remote technical sprints, code reviews, and experiment benchmarks',
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
      'Architected normalized relational MySQL schema with indexed queries for fast appointment dispatch',
      'Developed server-side business logic and secure session management using Java Servlets & JSP',
      'Implemented dynamic client-side forms and responsive dashboards for staff & visitors',
    ],
    skills: ['Java', 'JSP & Servlets', 'MySQL', 'JDBC', 'Bootstrap', 'HTML5/CSS3'],
  },
];

const educationList = [
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
      'Object-Oriented Programming (Java/C++)',
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
  { href: 'mailto:imman6230@gmail.com', label: '📧', title: 'Email', value: 'imman6230@gmail.com' },
  { href: 'tel:+918610072497', label: '📞', title: 'Phone', value: '+91 8610072497' },
  { href: 'https://www.linkedin.com/in/imman-10im', label: '💼', title: 'LinkedIn', value: 'LinkedIn' },
  { href: 'https://github.com/eman860', label: '🐙', title: 'GitHub', value: 'GitHub' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
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

      <header className={`header-wrapper ${navbarScrolled ? 'scrolled' : ''}`}>
        <nav id="navbar" className="nav-island">
          <a href="#hero" className="brand-logo" onClick={() => setMenuOpen(false)}>
            <div className="brand-badge">
              <span>&lt;/&gt;</span>
            </div>
            <div className="brand-text-wrap">
              <span className="brand-name">
                Imman<span className="brand-accent">.dev</span>
              </span>
              <span className="brand-status">
                <span className="status-dot-pulse" />
                Available for hire
              </span>
            </div>
          </a>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className="nav-item-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a
              href="https://github.com/eman860"
              target="_blank"
              rel="noreferrer"
              className="nav-icon-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/imman-10im"
              target="_blank"
              rel="noreferrer"
              className="nav-linkedin-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span className="btn-text">LinkedIn</span>
            </a>

            <button
              className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
              id="mobileMenuBtn"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle Navigation Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

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

              <div className="about-actions">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setResumeOpen(true)}
                  title="Open ATS Resume Viewer"
                >
                  <span>📄</span> View Resume
                </button>
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
                className="skill-card reveal visible"
                key={skill.name}
                title={`${skill.name}${skill.tag ? ` • ${skill.tag}` : ''}`}
                style={{ '--skill-color': skill.color, '--skill-glow': skill.glowColor }}
              >
                <div className="skill-icon-wrap">
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
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
          <div className="section-header">
            <h2 className="section-title">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subtitle">
              Industry internships focused on enterprise full-stack Java architecture and AI engineering workflows
            </p>
          </div>

          <div className="experience-cards-grid">
            {experiences.map((exp) => (
              <div
                className="xp-card glass-card reveal"
                key={exp.role + exp.company}
                style={{ '--xp-accent': exp.accentColor }}
              >
                <div className="xp-card-header">
                  <div
                    className="xp-icon-badge"
                    style={{ borderColor: `${exp.accentColor}55`, background: `${exp.accentColor}18` }}
                  >
                    <span>{exp.icon}</span>
                  </div>
                  <div className="xp-header-info">
                    <div className="xp-meta-row">
                      <span className="xp-badge" style={{ color: exp.accentColor, borderColor: `${exp.accentColor}40` }}>
                        {exp.badge}
                      </span>
                      <span className="xp-period-tag">{exp.period}</span>
                    </div>
                    <h3 className="xp-role-title">{exp.role}</h3>
                    <div className="xp-company-row">
                      <span className="xp-company-name">{exp.company}</span>
                      <span className="xp-dot">•</span>
                      <span className="xp-location">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="xp-card-body">
                  <p className="xp-summary">{exp.summary}</p>

                  <div className="xp-highlights-list">
                    <span className="xp-highlights-heading">Key Contributions:</span>
                    <ul>
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="xp-skills-wrap">
                    {exp.skills.map((skill) => (
                      <span className="xp-skill-pill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="resume-callout-card glass-card reveal">
            <div className="callout-content">
              <div className="callout-icon-wrap">
                <span>📄</span>
              </div>
              <div>
                <h4 className="callout-title">Looking for my complete resume?</h4>
                <p className="callout-sub">
                  Download the official ATS-friendly PDF or inspect my comprehensive credential sheet interactively.
                </p>
              </div>
            </div>
            <div className="callout-actions">
              <button type="button" className="btn btn-primary" onClick={() => setResumeOpen(true)}>
                <span>👁️</span> View Full Resume
              </button>
              <a href="/resume.pdf" download="Imman_Resume.pdf" className="btn btn-outline">
                <span>📥</span> Download PDF
              </a>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="section-header">
            <h2 className="section-title">
              Academic <span className="gradient-text">Education</span>
            </h2>
            <p className="section-subtitle">
              Formal university milestones, computer science coursework, and scholastic performance
            </p>
          </div>

          <div className="education-cards-grid">
            {educationList.map((edu) => (
              <div
                className="edu-card glass-card reveal"
                key={edu.degree}
                style={{ '--edu-accent': edu.accentColor }}
              >
                <div className="edu-top-row">
                  <div
                    className="edu-icon-badge"
                    style={{ borderColor: `${edu.accentColor}55`, background: `${edu.accentColor}18` }}
                  >
                    <span>{edu.icon}</span>
                  </div>
                  <div className="edu-status-badge">
                    <span
                      className="status-live-dot"
                      style={{ background: edu.accentColor, boxShadow: `0 0 10px ${edu.accentColor}` }}
                    />
                    <span>{edu.status}</span>
                  </div>
                </div>

                <div className="edu-main-info">
                  <span className="edu-period-pill">{edu.period}</span>
                  <h3 className="edu-degree-title">{edu.degree}</h3>
                  <h4 className="edu-institution-name">{edu.institution}</h4>
                </div>

                <div
                  className="edu-score-banner"
                  style={{ background: `${edu.accentColor}12`, borderColor: `${edu.accentColor}35` }}
                >
                  <div className="score-val" style={{ color: edu.accentColor }}>
                    {edu.grade}
                  </div>
                  <div className="score-sub">{edu.gradeSub}</div>
                </div>

                <p className="edu-desc">{edu.description}</p>

                <div className="edu-coursework-section">
                  <span className="coursework-title">Core Areas & Coursework:</span>
                  <div className="coursework-pills">
                    {edu.coursework.map((course) => (
                      <span className="course-pill" key={course}>
                        {course}
                      </span>
                    ))}
                  </div>
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
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="social-link"
                    title={`${item.title}: ${item.value || ''}`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <a
                  href="mailto:imman6230@gmail.com"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#e4e4e7', fontSize: '0.92rem' }}
                >
                  <span style={{ fontSize: '1.1rem' }}>📧</span> imman6230@gmail.com
                </a>
                <a
                  href="tel:+918610072497"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: '#e4e4e7', fontSize: '0.92rem' }}
                >
                  <span style={{ fontSize: '1.1rem' }}>📞</span> +91 8610072497
                </a>
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

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default App;
