import "./Home.css";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaShieldAlt,
  FaTerminal,
  FaCode,
  FaLock,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiKalilinux,
  SiPython,
} from "react-icons/si";

function Home() {
  const webSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ];

  const cyberSkills = [
    { name: "Kali Linux", icon: <SiKalilinux /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Nmap", icon: <FaTerminal /> },
    { name: "Burp Suite", icon: <FaShieldAlt /> },
  ];

  return (
    <div className="premium-portfolio">
      {/* Dynamic Background Mesh Light Effects */}
      <div className="ambient-glow glow-violet"></div>
      <div className="ambient-glow glow-steel"></div>

      {/* Floating Header */}
      <header className="header-wrapper">
        <nav className="glass-nav">
          <div className="logo">
            Chandra Mahesh<span className="dot">.</span>
          </div>
          <div className="nav-links">
            <a href="/" className="active">Home</a>
            <Link to="/web-development">Web Dev</Link>
            <Link to="/cyber-security">Cyber Security</Link>
            <Link to="/projects">Projects</Link>
          </div>
          <a href="#contact" className="contact-btn">Let's Connect</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-status">
          <span className="pulse"></span> Available for Select Opportunities
        </div>

        <h1 className="hero-heading">
          Full-Stack Architect <br />
          <span className="gradient-text">& Cyber Security Analyst</span>
        </h1>

        <p className="hero-subline">
          I craft robust digital experiences and secure modern web ecosystems with precision, performance, and defense-in-depth principles.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="action-btn primary">
            Explore Work <FaArrowRight />
          </Link>
          <a href="mailto:chandramahesh9193@gmail.com" className="action-btn secondary">
            Get in Touch
          </a>
        </div>

        {/* Social Icons Strip */}
        <div className="social-strip">
          <a href="https://github.com/Chandra99275" target="_blank" rel="noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/chandramaheshgoud-yarlagadda-25393b368/" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/__chandramahesh.__/" target="_blank" rel="noreferrer" title="Instagram">
            <FaInstagram />
          </a>
          <a href="mailto:chandramahesh9193@gmail.com" title="Email">
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="main-content">
        
        {/* Full Spectrum Bento Tools & Capabilities Section */}
        <section className="content-block wide-spectrum">
          <div className="block-header text-center">
            <span className="tag">TECHNICAL SPECTRUM</span>
            <h2>Tools & Capabilities</h2>
            <p className="section-subtext">
              A comprehensive breakdown of technologies I leverage for full-stack engineering and security operations.
            </p>
          </div>

          <div className="spectrum-bento-grid">
            {/* Full Stack Bento Card */}
            <div className="bento-card fullstack-card">
              <div className="card-top">
                <div className="icon-box violet"><FaCode /></div>
                <div className="card-heading-group">
                  <h3>Full-Stack Development</h3>
                  <span className="badge-tech">Engineering</span>
                </div>
              </div>
              
              <p className="panel-desc">
                Architecting scalable web applications with high-performance APIs, responsive client-side interfaces, and relational/NoSQL data persistence.
              </p>
              
              <div className="skill-tags">
                {webSkills.map((skill, index) => (
                  <div className="skill-chip violet-glow-hover" key={index}>
                    <span className="chip-icon violet">{skill.icon}</span>
                    <span className="chip-label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cyber Security Bento Card */}
            <div className="bento-card cyber-card">
              <div className="card-top">
                <div className="icon-box steel"><FaShieldAlt /></div>
                <div className="card-heading-group">
                  <h3>Cyber Security & Testing</h3>
                  <span className="badge-sec">SecOps</span>
                </div>
              </div>

              <p className="panel-desc">
                Auditing web applications for OWASP Top 10 vulnerabilities, conducting threat assessments, and hardening microservice infrastructure.
              </p>

              <div className="skill-tags">
                {cyberSkills.map((skill, index) => (
                  <div className="skill-chip steel-glow-hover" key={index}>
                    <span className="chip-icon steel">{skill.icon}</span>
                    <span className="chip-label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas Grid */}
        <section className="content-block wide-spectrum">
          <div className="block-header text-center">
            <span className="tag">SPECIALIZATION</span>
            <h2>Core Practice Areas</h2>
          </div>

          <div className="focus-grid">
            <div className="glass-card">
              <div className="card-icon"><FaReact /></div>
              <h4>Frontend Systems</h4>
              <p>Responsive, lightning-fast UIs engineered using React, component systems, and modern styling.</p>
            </div>

            <div className="glass-card">
              <div className="card-icon"><FaNodeJs /></div>
              <h4>Backend Engineering</h4>
              <p>Scalable REST microservices, database schema engineering, and hardened authorization setups.</p>
            </div>

            <div className="glass-card">
              <div className="card-icon"><FaLock /></div>
              <h4>Security Testing</h4>
              <p>Proactive security audits, vulnerability exploitation assessments, and application hardening.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer-section" id="contact">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>Chandra Mahesh<span className="dot">.</span></h3>
            <p>Full Stack Developer & Security Analyst</p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/Chandra99275" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/chandramaheshgoud-yarlagadda-25393b368/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/__chandramahesh.__/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="mailto:chandramahesh9193@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Chandra Mahesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;