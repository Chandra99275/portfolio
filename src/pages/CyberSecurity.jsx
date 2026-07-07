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
} from "react-icons/fa";

import {
  SiKalilinux,
  SiWireshark,
  SiBurpsuite,
} from "react-icons/si";

import "./CyberSecurity.css";

/* ===========================
   Animation
=========================== */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
    },
  },
};

/* ===========================
   Security Skills
=========================== */

const securitySkills = [
  {
    name: "Ethical Hacking",
    icon: <FaUserSecret />,
    level: 92,
    color: "#00ff88",
  },

  {
    name: "Penetration Testing",
    icon: <FaBug />,
    level: 90,
    color: "#00e5ff",
  },

  {
    name: "Network Security",
    icon: <FaNetworkWired />,
    level: 88,
    color: "#00ff88",
  },

  {
    name: "Web Security",
    icon: <FaShieldAlt />,
    level: 90,
    color: "#00e5ff",
  },

  {
    name: "Python",
    icon: <FaPython />,
    level: 86,
    color: "#FFD43B",
  },

  {
    name: "Linux",
    icon: <FaLinux />,
    level: 91,
    color: "#ffffff",
  },
];

/* ===========================
   Security Tools
=========================== */

const securityTools = [
  "Kali Linux",
  "Nmap",
  "Burp Suite",
  "Wireshark",
  "Metasploit",
  "OWASP ZAP",
  "Hydra",
  "Nikto",
  "SQLMap",
  "Linux",
  "Python",
  "Git",
];

/* ===========================
   Projects
=========================== */

const projects = [
  {
    title: "Intrusion Detection System",

    description:
      "Python-based IDS capable of monitoring network traffic and detecting suspicious activities in real time.",

    tech:
      "Python • Wireshark • Networking",
  },

  {
    title: "Secure Login System",

    description:
      "Authentication system implementing password hashing, session management and secure coding practices.",

    tech:
      "HTML • CSS • JavaScript • Security",
  },
];

/* ===========================
   Statistics
=========================== */

const stats = [

  {
    number: "2",
    title: "Internships",
  },

  {
    number: "12+",
    title: "Security Tools",
  },

  {
    number: "20+",
    title: "Labs Completed",
  },

  {
    number: "100+",
    title: "Practice Hours",
  },

];

/* ===========================
   Component
=========================== */

export default function CyberSecurity() {
  return (
        <div className="cyber-page">

      {/* ================= HERO ================= */}

      <section className="cyber-hero">

        <motion.div
          className="hero-left"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >

          <span className="hero-tag">
            Cyber Security Portfolio
          </span>

          <h1>
            Protecting Systems
            <span> Securing the Digital World</span>
          </h1>

          <p>
            Passionate Cyber Security enthusiast with hands-on
            experience in penetration testing, vulnerability
            assessment, ethical hacking and secure application
            development using industry-standard security tools.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              View Projects
            </button>

            <button className="secondary-btn">
              Download Resume
            </button>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
        >

          <div className="hero-circle">
            <FaShieldAlt />
          </div>

        </motion.div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="about-section">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <h2>
            About My Cyber Security Journey
          </h2>

          <p>
            I am passionate about Cyber Security and Ethical
            Hacking. My focus is on identifying security
            vulnerabilities, strengthening applications, and
            protecting systems against cyber threats.
          </p>

          <p>
            During my internships, I gained practical experience
            in network security, vulnerability assessment,
            reconnaissance, packet analysis, and web application
            security testing using professional security tools.
          </p>

        </motion.div>

      </section>

      {/* ================= SECURITY TOOLS ================= */}

      <section className="tools-section">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Security Tools
        </motion.h2>

        <div className="tools-grid">

          {securityTools.map((tool, index) => (

            <motion.div
              key={index}
              className="tool-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
            >

              <FaTerminal className="tool-icon" />

              <span>{tool}</span>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section className="skills-section">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Cyber Security Skills
        </motion.h2>

        <div className="skills-container">

          {securitySkills.map((skill, index) => (

            <motion.div
              key={index}
              className="skill-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
            >

              <div
                className="skill-icon"
                style={{
                  color: skill.color,
                }}
              >
                {skill.icon}
              </div>

              <div className="skill-info">

                <div className="skill-header">

                  <span>{skill.name}</span>

                  <span>{skill.level}%</span>

                </div>

                <div className="progress">

                  <motion.div
                    className="progress-fill"
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>
            {/* ================= INTERNSHIPS ================= */}

      <section className="internships-section">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Cyber Security Internships
        </motion.h2>

        <div className="internship-container">

          <motion.div
            className="internship-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          >

            <div className="internship-icon">
              <FaShieldAlt />
            </div>

            <div className="internship-content">

              <h3>Cyber Security Intern</h3>

              <h4>Remote</h4>

              <span>June 2025 – August 2025</span>

              <ul>

                <li>
                  Learned core concepts of network security,
                  firewalls and threat mitigation strategies.
                </li>

                <li>
                  Gained hands-on exposure to enterprise-level
                  security practices and cybersecurity tools.
                </li>

                <li>
                  Assisted in identifying security risks and
                  implementing security best practices.
                </li>

              </ul>

            </div>

          </motion.div>

          <motion.div
            className="internship-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          >

            <div className="internship-icon">
              <FaBug />
            </div>

            <div className="internship-content">

              <h3>AISECT</h3>

              <h4>Cyber Security Intern (Remote)</h4>

              <span>05 Jun 2025 – 06 Aug 2025</span>

              <ul>

                <li>
                  Performed vulnerability assessments on web
                  applications and network environments.
                </li>

                <li>
                  Conducted reconnaissance using Nmap and
                  OSINT techniques.
                </li>

                <li>
                  Analyzed network traffic using Wireshark
                  to identify suspicious activities.
                </li>

                <li>
                  Practiced web application security testing
                  using Burp Suite in Kali Linux.
                </li>

              </ul>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section className="projects-section">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Cyber Security Projects
        </motion.h2>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              className="project-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >

              <div className="project-icon">
                <FaProjectDiagram />
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="project-tech">
                {project.tech}
              </span>

              {project.title === "Intrusion Detection System" && (

                <ul className="project-list">

                  <li>Captured and analyzed packets using Wireshark.</li>

                  <li>Detected malicious traffic using Python.</li>

                  <li>Generated real-time alerts.</li>

                </ul>

              )}

              {project.title === "Secure Login System" && (

                <ul className="project-list">

                  <li>Password hashing implementation.</li>

                  <li>Prevented SQL Injection attacks.</li>

                  <li>Prevented Cross-Site Scripting (XSS).</li>

                  <li>Implemented session management.</li>

                  <li>Added secure input validation.</li>

                </ul>

              )}

              <button className="project-btn">

                View Details

                <FaArrowRight />

              </button>

            </motion.div>

          ))}

        </div>

      </section>
            {/* ================= CERTIFICATIONS ================= */}

      <section className="certifications-section">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Certifications & Training
        </motion.h2>

        <div className="certifications-grid">

          <motion.div
            className="certificate-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          >
            <FaCertificate className="certificate-icon" />

            <h3>Cyber Security Internship</h3>

            <p>
              Successfully completed a Cyber Security Internship,
              gaining practical exposure to vulnerability assessment,
              penetration testing and network security.
            </p>

          </motion.div>

          <motion.div
            className="certificate-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          >
            <FaCertificate className="certificate-icon" />

            <h3>Intel Academy Cyber Security Training</h3>

            <p>
              Completed Cyber Security training coordinated with
              Intel Academy, focusing on enterprise security
              practices and ethical hacking concepts.
            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= ACHIEVEMENTS ================= */}

      <section className="achievements-section">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Achievements
        </motion.h2>

        <div className="achievement-grid">

          <div className="achievement-card">

            <FaShieldAlt />

            <h3>2</h3>

            <p>Cyber Security Internships</p>

          </div>

          <div className="achievement-card">

            <FaBug />

            <h3>20+</h3>

            <p>Security Labs Completed</p>

          </div>

          <div className="achievement-card">

            <FaLock />

            <h3>10+</h3>

            <p>Security Tools</p>

          </div>

          <div className="achievement-card">

            <FaUserSecret />

            <h3>100+</h3>

            <p>Hours of Practice</p>

          </div>

        </div>

      </section>

      {/* ================= STATISTICS ================= */}

      <section className="statistics-section">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Cyber Security Statistics
        </motion.h2>

        <div className="stats-grid">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              className="stat-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
            >

              <h2>{item.number}</h2>

              <p>{item.title}</p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================= TIMELINE ================= */}

      <section className="timeline-section">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Career Timeline
        </motion.h2>

        <div className="timeline">

          <div className="timeline-item">

            <span className="year">
              2025
            </span>

            <div className="timeline-content">

              <h3>Cyber Security Intern</h3>

              <p>
                Learned enterprise security concepts, network
                security fundamentals, firewalls and threat
                mitigation strategies.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <span className="year">
              2025
            </span>

            <div className="timeline-content">

              <h3>AISECT Internship</h3>

              <p>
                Performed vulnerability assessments, OSINT,
                reconnaissance, packet analysis and web
                application security testing.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <span className="year">
              2026
            </span>

            <div className="timeline-content">

              <h3>Intrusion Detection System</h3>

              <p>
                Developed a Python-based IDS capable of
                monitoring traffic and generating real-time
                alerts for suspicious activities.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="cta-section">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >

          <h2>
            Securing the Digital Future
          </h2>

          <p>
            Passionate about Ethical Hacking, Network Security,
            Penetration Testing and Secure Software Development.
            I continuously improve my skills to build safer
            digital systems and resilient applications.
          </p>

          <button className="cta-btn">
            Contact Me
          </button>

        </motion.div>

      </section>

    </div>
  );
}