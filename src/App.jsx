import { useEffect, useMemo, useState } from 'react';
import './App.css';
import profileImage from './assets/photo2.jfif';

const navLinks = [
  { href: '#hero', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const roles = ['Full-Stack Developer', 'Java | JSP', 'Web Developer', 'Problem Solver'];

const skillGroups = [
  {
    title: '💻 Programming Languages',
    skills: [
      { name: 'Python', value: 80 },
      { name: 'JavaScript', value: 75 },
      { name: 'Java', value: 70 },
    ],
  },
  {
    title: '🌐 Web Technologies',
    skills: [
      { name: 'HTML', value: 85 },
      { name: 'CSS', value: 78 },
      { name: 'Bootstrap', value: 65 },
    ],
  },
  {
    title: '🛠️ Tools & Technologies',
    skills: [
      { name: 'Git & GitHub', value: 70 },
      { name: 'VS Code', value: 90 },
      { name: 'SQL', value: 60 },
    ],
  },
];

const projects = [
  {
    title: 'Hospital Appointment Booking System',
    description:
      'Developed the Apollo Hospital Appointment Booking System, a full-stack Java application enabling patients to book appointments with real-time scheduling and record management.',
    tags: ['JSP', 'Java', 'SQL', 'Gemini AI'],
    meta: 'June 2026',
    links: [{ href: '#projects', label: '📄 Details' }],
    icon: '🏥',
    featured: true,
  },
  {
    title: 'E-commerce Website',
    description:
      'Developed a responsive e-commerce website with product listings, cart functionality, and a smooth user experience.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { href: 'https://e-commerce-shop-website-project-g5t.vercel.app/', label: '🔗 live' },
      { href: 'https://github.com/eman860/E-commerce-shop-website-project', label: '📂 Source Code' },
    ],
    icon: '🌐',
  },
  {
    title: 'To-do list',
    description:
      'Built a simple to-do list application that allows users to add, edit, and delete tasks, helping manage daily activities efficiently.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { href: 'https://to-do-list-theta-ecru-33.vercel.app/', label: '🔗 live' },
      { href: 'https://github.com/eman860/TO-DO-List', label: '📂 Source Code' },
    ],
    icon: '📝',
  },
  {
    title: 'Tuition Website',
    description:
      'Created a tuition website that provides information about tutoring services, subjects offered, and contact details for prospective students.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
    links: [
      { href: 'https://tuition-website-opb1.vercel.app/', label: '🔗 live' },
      { href: 'https://github.com/eman860/tuition-website', label: '📂 Source Code' },
    ],
    icon: '📚',
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
  { href: 'https://www.instagram.com/_x.i7m.__/?__pwa=1', label: '📸', title: 'Instagram' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [skillWidths, setSkillWidths] = useState({});

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

  useEffect(() => {
    const skillObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const updatedWidths = {};
            skillGroups.forEach((group) => {
              group.skills.forEach((skill) => {
                updatedWidths[skill.name] = skill.value;
              });
            });
            setSkillWidths(updatedWidths);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    const target = document.querySelector('#skills');
    if (target) skillObserver.observe(target);
    return () => skillObserver.disconnect();
  }, []);

  const progressStyles = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(skillWidths).map(([name, width]) => [name, { width: `${width}%` }])
      ),
    [skillWidths]
  );

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
          <a href="https://github.com/eman860" target="_blank" rel="noreferrer" className="nav-github">
            <span>🐙</span> GitHub
          </a>
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
                  <div className="stat-value">3</div>
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
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="glass-card reveal" key={group.title}>
                <h3 style={{ marginBottom: '1rem' }}>{group.title}</h3>
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.value}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill" style={progressStyles[skill.name] || { width: 0 }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className={`glass-card project-card reveal ${project.featured ? 'featured' : ''}`} key={project.title}>
                <div className="project-image">{project.icon}</div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.meta && <div className="project-meta">{project.meta}</div>}
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="project-link">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
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
