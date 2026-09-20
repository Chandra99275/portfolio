import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaBug,
  FaLock,
  FaNetworkWired,
  FaLinux,
  FaPython,
  FaTerminal,
  FaUserSecret,
  FaCertificate,
  FaProjectDiagram,
  FaArrowRight,
  FaEnvelope,
  FaDownload,
  FaCode,
} from "react-icons/fa";
import {
  SiKalilinux,
  SiWireshark,
  SiBurpsuite,
} from "react-icons/si";

import "./CyberSecurity.css";

/* ===========================
   Animation Variants
=========================== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* ===========================
   Data Configs (Metallic Blue Theme Palette)
=========================== */
const securitySkills = [
  { name: "Ethical Hacking", icon: <FaUserSecret />, level: 92, color: "#00d2ff" },
  { name: "Penetration Testing", icon: <FaBug />, level: 90, color: "#3a7bd5" },
  { name: "Network Security", icon: <FaNetworkWired />, level: 88, color: "#4facfe" },
  { name: "Web Security", icon: <FaShieldAlt />, level: 90, color: "#00f2fe" },
  { name: "Python", icon: <FaPython />, level: 86, color: "#61a0ff" },
  { name: "Linux", icon: <FaLinux />, level: 91, color: "#e2e8f0" },
];

const securityTools = [
  { name: "Kali Linux", icon: <SiKalilinux /> },
  { name: "Wireshark", icon: <SiWireshark /> },
  { name: "Burp Suite", icon: <SiBurpsuite /> },
  { name: "Nmap", icon: <FaTerminal /> },
  { name: "Metasploit", icon: <FaBug /> },
  { name: "OWASP ZAP", icon: <FaShieldAlt /> },
  { name: "Hydra", icon: <FaLock /> },
  { name: "Nikto", icon: <FaTerminal /> },
  { name: "SQLMap", icon: <FaCode /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Git", icon: <FaTerminal /> },
];

const projects = [
  {
    title: "Intrusion Detection System",
    description: "Python-based IDS capable of monitoring network traffic and detecting suspicious activities in real time.",
    tech: ["Python", "Wireshark", "Networking"],
    highlights: [
      "Captured and analyzed packets using Wireshark",
      "Detected malicious traffic patterns using Python",
      "Generated real-time defensive security alerts",
    ],
  },
  {
    title: "Secure Login System",
    description: "Authentication system implementing password hashing, session management, and secure coding practices.",
    tech: ["JavaScript", "Node.js", "Security"],
    highlights: [
      "Implemented BCrypt password hashing",
      "Mitigated SQL Injection (SQLi) & Cross-Site Scripting (XSS)",
      "Enforced secure session management & input validation",
    ],
  },
];

const stats = [
  { number: "2", title: "Internships Completed" },
  { number: "12+", title: "Security Tools Mastered" },
  { number: "20+", title: "Hands-on Security Labs" },
  { number: "100+", title: "Hours of Practical Hacking" },
];

export default function CyberSecurity() {
  return (
    <div className="cyber-page">
      {/* Background Overlay */}
      <div className="cyber-bg-overlay" />

      {/* ================= HERO ================= */}
      <section className="cyber-hero">
        <motion.div
          className="hero-left"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <span className="hero-tag">
            <span className="dot"></span> Cyber Security Portfolio
          </span>

          <h1>
            Protecting Systems,
            <span className="highlight"> Securing Digital Assets</span>
          </h1>

          <p>
            Passionate Cyber Security specialist with hands-on experience in
            penetration testing, vulnerability assessment, ethical hacking, and
            building secure software architectures.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects <FaArrowRight />
            </a>
            <button className="secondary-btn">
              Download Resume <FaDownload />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-circle-container">
            <div className="radar-sweep" />
            <div className="hero-circle">
              <FaShieldAlt />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-section">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="glass-card about-card"
        >
          <h2 className="section-title">About My Cybersecurity Mission</h2>
          <p>
            I focus on proactively identifying vulnerabilities, fortifying applications against malicious exploitation, and helping organizations maintain strong security postures.
          </p>
          <p>
            Through my practical internship experiences, I have engaged in end-to-end vulnerability assessments, OSINT reconnaissance, packet inspections, and web application pentesting using industry-standard environments like Kali Linux.
          </p>
        </motion.div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="skills-section">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Core Proficiencies
        </motion.h2>

        <motion.div
          className="skills-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {securitySkills.map((skill, index) => (
            <motion.div key={index} className="glass-card skill-card" variants={fadeUp}>
              <div className="skill-header">
                <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  style={{
                    background: `linear-gradient(90deg, #1e3c72 0%, ${skill.color} 100%)`
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= SECURITY TOOLS ================= */}
      <section className="tools-section">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Security Arsenal & Tools
        </motion.h2>

        <motion.div
          className="tools-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {securityTools.map((tool, index) => (
            <motion.div key={index} className="glass-card tool-card" variants={fadeUp}>
              <div className="tool-icon">{tool.icon}</div>
              <span>{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= INTERNSHIPS ================= */}
      <section className="internships-section">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Practical Experience
        </motion.h2>

        <div className="internship-container">
          <motion.div
            className="glass-card internship-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="internship-icon">
              <FaShieldAlt />
            </div>
            <div className="internship-content">
              <h3>Cyber Security Intern</h3>
              <div className="internship-meta">
                <span className="badge">Remote</span>
                <span className="date">June 2025 – August 2025</span>
              </div>
              <ul>
                <li>Studied network security concepts, firewall architectures, and threat mitigation strategies.</li>
                <li>Gained hands-on experience with enterprise security software and defense practices.</li>
                <li>Analyzed software architecture to spot operational security risks.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="glass-card internship-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="internship-icon">
              <FaBug />
            </div>
            <div className="internship-content">
              <h3>Cyber Security Intern</h3>
              <div className="internship-meta">
                <span className="company">AISECT (Remote)</span>
                <span className="date">05 Jun 2025 – 06 Aug 2025</span>
              </div>
              <ul>
                <li>Executed vulnerability assessments on diverse target web apps and local network nodes.</li>
                <li>Conducted targeted reconnaissance utilizing Nmap and structured OSINT methodologies.</li>
                <li>Analyzed active packet captures in Wireshark to locate anomaly vectors.</li>
                <li>Practiced web application pentesting with Burp Suite on Kali Linux.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="projects-section" id="projects">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Featured Security Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card project-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="project-header">
                <div className="project-icon">
                  <FaProjectDiagram />
                </div>
                <h3>{project.title}</h3>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-tech-tags">
                {project.tech.map((techItem, i) => (
                  <span key={i} className="tech-tag">
                    {techItem}
                  </span>
                ))}
              </div>

              <ul className="project-list">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <button className="project-btn">
                View Details <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CERTIFICATIONS & ACHIEVEMENTS ================= */}
      <section className="certifications-section">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Certifications & Training
        </motion.h2>

        <div className="certifications-grid">
          <motion.div
            className="glass-card certificate-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <FaCertificate className="certificate-icon" />
            <h3>Cyber Security Internship Certificate</h3>
            <p>
              Demonstrated proficiency in real-world security practices, vulnerability identification, and mitigation strategies.
            </p>
          </motion.div>

          <motion.div
            className="glass-card certificate-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <FaCertificate className="certificate-icon" />
            <h3>Intel Academy Security Training</h3>
            <p>
              Completed training curated in coordination with Intel Academy, covering core ethical hacking principles and infrastructure security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="statistics-section">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card stat-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2>{item.number}</h2>
              <p>{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">
        <motion.div
          className="glass-card cta-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Securing the Digital Frontier</h2>
          <p>
            Open to full-time cybersecurity opportunities, security research, and penetration testing projects. Let's collaborate to make your digital environment resilient.
          </p>
          <button className="cta-btn">
            Get In Touch <FaEnvelope />
          </button>
        </motion.div>
      </section>
    </div>
  );
}