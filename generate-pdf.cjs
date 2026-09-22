const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function buildPDF() {
  const streamLines = [
    'q',
    // Header
    'BT',
    '/F1 18 Tf 0 0 0 rg 1 0 0 1 40 806 Tm (EMAN A) Tj',
    '/F2 8.5 Tf 0.25 0.25 0.25 rg 1 0 0 1 40 792 Tm (imman6230@gmail.com  |  +91 8610072497  |  LinkedIn  |  GitHub  |  Portfolio) Tj',
    'ET',
    '0.75 0.75 0.75 RG 0.75 w 40 782 m 555 782 l S',

    // Summary
    'BT /F1 10.5 Tf 0 0 0 rg 1 0 0 1 40 766 Tm (SUMMARY) Tj ET',
    '0.85 0.85 0.85 RG 0.5 w 40 762 m 555 762 l S',
    'BT',
    '/F2 8.5 Tf 0.15 0.15 0.15 rg',
    '1 0 0 1 40 749 Tm (Full-stack developer in training with hands-on experience in Java, JSP, Servlets, MySQL, and JavaScript. Built and shipped a hospital) Tj',
    '1 0 0 1 40 738 Tm (appointment booking system end-to-end using REST-style CRUD operations and OOP principles during an internship. Currently) Tj',
    '1 0 0 1 40 727 Tm (strengthening Data Structures & Algorithms in Java for placement readiness, with a growing GitHub portfolio and working knowledge) Tj',
    '1 0 0 1 40 716 Tm (of Agile development practices.) Tj',
    'ET',

    // Skills
    'BT /F1 10.5 Tf 0 0 0 rg 1 0 0 1 40 699 Tm (SKILLS) Tj ET',
    '0.85 0.85 0.85 RG 0.5 w 40 695 m 555 695 l S',
    'BT',
    '/F1 8.5 Tf 0.1 0.1 0.1 rg 1 0 0 1 40 682 Tm (Programming Languages: ) Tj',
    '/F2 8.5 Tf 0.2 0.2 0.2 rg 1 0 0 1 150 682 Tm (JavaScript | Java | Python | SQL) Tj',
    '/F1 8.5 Tf 0.1 0.1 0.1 rg 1 0 0 1 40 670 Tm (Web Development: ) Tj',
    '/F2 8.5 Tf 0.2 0.2 0.2 rg 1 0 0 1 130 670 Tm (HTML | CSS | Bootstrap | JSP) Tj',
    '/F1 8.5 Tf 0.1 0.1 0.1 rg 1 0 0 1 300 670 Tm (Concepts: ) Tj',
    '/F2 8.5 Tf 0.2 0.2 0.2 rg 1 0 0 1 350 670 Tm (OOP | Data Structures & Algorithms) Tj',
    '/F1 8.5 Tf 0.1 0.1 0.1 rg 1 0 0 1 40 658 Tm (Databases: ) Tj',
    '/F2 8.5 Tf 0.2 0.2 0.2 rg 1 0 0 1 95 658 Tm (SQL | Supabase) Tj',
    '/F1 8.5 Tf 0.1 0.1 0.1 rg 1 0 0 1 200 658 Tm (OS: ) Tj',
    '/F2 8.5 Tf 0.2 0.2 0.2 rg 1 0 0 1 222 658 Tm (Linux | Windows) Tj',
    '/F1 8.5 Tf 0.1 0.1 0.1 rg 1 0 0 1 320 658 Tm (Version Control & Tools: ) Tj',
    '/F2 8.5 Tf 0.2 0.2 0.2 rg 1 0 0 1 430 658 Tm (Git | GitHub | VS Code) Tj',
    'ET',

    // Projects
    'BT /F1 10.5 Tf 0 0 0 rg 1 0 0 1 40 641 Tm (PROJECTS) Tj ET',
    '0.85 0.85 0.85 RG 0.5 w 40 637 m 555 637 l S',

    'BT',
    '/F1 9 Tf 0.1 0.1 0.1 rg 1 0 0 1 40 624 Tm (Hospital Appointment Booking System) Tj',
    '/F2 8.5 Tf 0.35 0.35 0.35 rg 1 0 0 1 498 624 Tm (June/2026) Tj',
    '/F3 8 Tf 0.35 0.35 0.35 rg 1 0 0 1 40 613 Tm (Tech Stack: JSP | Java | HTML | SQL | Gemini AI) Tj',
    '/F2 8.5 Tf 0.2 0.2 0.2 rg',
    '1 0 0 1 40 602 Tm (- Developed the Apollo Hospital Appointment Booking System, a full-stack Java application enabling) Tj',
    '1 0 0 1 40 592 Tm (  patients to book appointments with real-time scheduling and record management.) Tj',

    '/F1 9 Tf 0.1 0.1 0.1 rg 1 0 0 1 40 577 Tm (Billing Management System) Tj',
    '/F2 8.5 Tf 0.35 0.35 0.35 rg 1 0 0 1 503 577 Tm (Aug/2025) Tj',
    '/F3 8 Tf 0.35 0.35 0.35 rg 1 0 0 1 40 566 Tm (Tech Stack: HTML | JavaScript | SQL) Tj',
    '/F2 8.5 Tf 0.2 0.2 0.2 rg',
    '1 0 0 1 40 555 Tm (- Designed a billing management system with automated invoice generation, tax calculation, and) Tj',
    '1 0 0 1 40 545 Tm (  customer transaction tracking for efficient business billing.) Tj',

    '/F1 9 Tf 0.1 0.1 0.1 rg 1 0 0 1 40 530 Tm (E-Commerce Shopping Website) Tj',
    '/F2 8.5 Tf 0.35 0.35 0.35 rg 1 0 0 1 504 530 Tm (Sep/2024) Tj',
    '/F3 8 Tf 0.35 0.35 0.35 rg 1 0 0 1 40 519 Tm (Tech Stack: HTML | CSS | Basic JavaScript | Bootstrap) Tj',
    '/F2 8.5 Tf 0.2 0.2 0.2 rg',
    '1 0 0 1 40 508 Tm (- Designed an e-commerce shopping website with product browsing, cart management, and secure user) Tj',
    '1 0 0 1 40 498 Tm (  authentication for a seamless online shopping experience.) Tj',
    'ET',

    // Experience
    'BT /F1 10.5 Tf 0 0 0 rg 1 0 0 1 40 481 Tm (EXPERIENCE) Tj ET',
    '0.85 0.85 0.85 RG 0.5 w 40 477 m 555 477 l S',

    'BT',
    '/F1 9 Tf 0.1 0.1 0.1 rg 1 0 0 1 40 464 Tm (NEURA GLOBAL, Artificial Intelligence Intern) Tj',
    '/F2 8.5 Tf 0.35 0.35 0.35 rg 1 0 0 1 430 464 Tm (Feb/2026 - Mar/2026 | Remote) Tj',
    '/F2 8.5 Tf 0.2 0.2 0.2 rg',
    '1 0 0 1 40 453 Tm (- Built and trained machine learning models as part of the AI internship, gaining hands-on experience) Tj',
    '1 0 0 1 40 443 Tm (  with model development and evaluation workflows.) Tj',
    '1 0 0 1 40 433 Tm (- Worked remotely in a collaborative environment, applying core ML concepts to real-world AI problems.) Tj',

    '/F1 9 Tf 0.1 0.1 0.1 rg 1 0 0 1 40 418 Tm (NEXTGEN, Java Full Stack Developer Intern) Tj',
    '/F2 8.5 Tf 0.35 0.35 0.35 rg 1 0 0 1 458 418 Tm (Jun/2026 - Jul/2026) Tj',
    '/F2 8.5 Tf 0.2 0.2 0.2 rg',
    '1 0 0 1 40 407 Tm (- Developed a full-stack hospital appointment booking application for Apollo Hospital using Java,) Tj',
    '1 0 0 1 40 397 Tm (  JSP/Servlets, and MySQL, covering both frontend and backend.) Tj',
    '1 0 0 1 40 387 Tm (- Designed the database schema and JSP-based dynamic pages to handle appointment scheduling,) Tj',
    '1 0 0 1 40 377 Tm (  patient records, and end-to-end booking workflows.) Tj',
    'ET',

    // Education
    'BT /F1 10.5 Tf 0 0 0 rg 1 0 0 1 40 360 Tm (EDUCATION) Tj ET',
    '0.85 0.85 0.85 RG 0.5 w 40 356 m 555 356 l S',

    'BT',
    '/F1 9 Tf 0.1 0.1 0.1 rg 1 0 0 1 40 343 Tm (B.E. Computer Science and Engineering Pursuing, Annai Mira College Of Engineering And Tech) Tj',
    '/F2 8.5 Tf 0.35 0.35 0.35 rg 1 0 0 1 528 343 Tm (2027) Tj',
    '/F2 8.5 Tf 0.25 0.25 0.25 rg 1 0 0 1 40 332 Tm (CGPA: 8.20 \\(Till 5th Sem\\)) Tj',

    '/F1 9 Tf 0.1 0.1 0.1 rg 1 0 0 1 40 318 Tm (HSC, GVC HR SEC SCHOOL) Tj',
    '/F2 8.5 Tf 0.35 0.35 0.35 rg 1 0 0 1 528 318 Tm (2023) Tj',
    '/F2 8.5 Tf 0.25 0.25 0.25 rg 1 0 0 1 40 307 Tm (Score: 70%) Tj',
    'ET',

    // Achievements
    'BT /F1 10.5 Tf 0 0 0 rg 1 0 0 1 40 290 Tm (ACHIEVEMENTS) Tj ET',
    '0.85 0.85 0.85 RG 0.5 w 40 286 m 555 286 l S',

    'BT',
    '/F1 9 Tf 0.1 0.1 0.1 rg 1 0 0 1 40 273 Tm (Detection of Eye Diseases Using Deep Learning and Transfer Learning Approaches) Tj',
    '/F2 8.5 Tf 0.35 0.35 0.35 rg 1 0 0 1 528 273 Tm (2025) Tj',
    '/F3 8 Tf 0.35 0.35 0.35 rg 1 0 0 1 40 262 Tm (Third International Conference on Cyber and Information Security \\(ICCIS-3.0\\)) Tj',
    '/F2 8.5 Tf 0.2 0.2 0.2 rg',
    '1 0 0 1 40 251 Tm (Presented a research paper, \\"Detection of Eye Diseases Using Deep Learning and Transfer Learning Approaches,\\") Tj',
    '1 0 0 1 40 241 Tm (at ICCIS-3.0 2025, organized by the PG Dept of Data Science, Dwaraka Doss Goverdhan Doss Vaishnav College) Tj',
    '1 0 0 1 40 231 Tm (\\(DDGDVC\\), held on 09.09.2025.) Tj',
    'ET',

    // Problem Solving
    'BT /F1 10.5 Tf 0 0 0 rg 1 0 0 1 40 214 Tm (PROBLEM SOLVING) Tj ET',
    '0.85 0.85 0.85 RG 0.5 w 40 210 m 555 210 l S',
    'BT /F2 8.5 Tf 0.2 0.2 0.2 rg 1 0 0 1 40 197 Tm (Solved 25+ DSA problems in Java \\(Arrays, Strings, Hashing\\)) Tj ET',

    // Certifications
    'BT /F1 10.5 Tf 0 0 0 rg 1 0 0 1 40 180 Tm (CERTIFICATIONS) Tj ET',
    '0.85 0.85 0.85 RG 0.5 w 40 176 m 555 176 l S',
    'BT /F2 8.5 Tf 0.2 0.2 0.2 rg 1 0 0 1 40 163 Tm (Programming in Java: Udemy   |   Programming in Python: Udemy   |   Full Stack Development: Intern) Tj ET',
    'Q'
  ];

  const streamContent = streamLines.join('\n');
  const streamLength = Buffer.byteLength(streamContent, 'utf-8');

  const objects = [];

  // obj 1: Catalog
  objects.push(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`);

  // obj 2: Pages
  objects.push(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`);

  // obj 3: Page
  objects.push(`3 0 obj\n<<\n  /Type /Page\n  /Parent 2 0 R\n  /MediaBox [0 0 595.28 841.89]\n  /Resources <<\n    /Font <<\n      /F1 4 0 R\n      /F2 5 0 R\n      /F3 6 0 R\n    >>\n  >>\n  /Contents 7 0 R\n>>\nendobj\n`);

  // obj 4: F1 Helvetica-Bold
  objects.push(`4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`);

  // obj 5: F2 Helvetica
  objects.push(`5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`);

  // obj 6: F3 Helvetica-Oblique
  objects.push(`6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>\nendobj\n`);

  // obj 7: Contents Stream
  objects.push(`7 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj\n`);

  const header = '%PDF-1.4\n';
  let body = '';
  const offsets = [];

  let currentOffset = Buffer.byteLength(header, 'utf-8');

  for (let i = 0; i < objects.length; i++) {
    offsets.push(currentOffset);
    body += objects[i];
    currentOffset += Buffer.byteLength(objects[i], 'utf-8');
  }

  const startxref = currentOffset;

  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 0; i < offsets.length; i++) {
    const offStr = String(offsets[i]).padStart(10, '0');
    xref += `${offStr} 00000 n \n`;
  }

  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;

  const fullPdf = header + body + xref + trailer;
  fs.writeFileSync(path.join(publicDir, 'resume.pdf'), fullPdf, 'utf-8');
  console.log('Successfully generated public/resume.pdf!');
}

buildPDF();
