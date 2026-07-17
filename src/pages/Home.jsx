import "./Home.css";
import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaPython,
  FaLinux,
  FaShieldAlt,
    FaEnvelope,

} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
} from "react-icons/si";


function Home() {

  const webSkills = [
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
  ];

  const cyberSkills = [
    "Kali Linux",
    "Nmap",
    "Burp Suite",
    "Metasploit",
    "Wireshark",
    "OWASP",
    "Linux",
    "Python",
    "Docker",
    "Git",
  ];

  return (
    <div className="home">

      {/* Background */}

      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">
          Mahesh<span>.</span>
        </div>

        <ul className="nav-links">

          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <Link to="/web-development" className="hero-btn">
  Explore Web Development
</Link>
          </li>

          <li>
            <Link to="/cyber-security" className="hero-btn">
  Explore Cyber Security
</Link>
          </li>

          <li>
            <Link to="/projects">
  Projects
</Link>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>

        </ul>

      </nav>

      {/* Hero */}

    <section className="hero">

  {/* TOP SECTION (Left content comes first) */}
  <div className="hero-left">

    <p className="hello">
      👋 Hello, I'm
    </p>

    <h1 className="hero-title small-text">

      Chandramahesh

      <span className="small-text">
        Full Stack Developer
      </span>

      <span className="and small-text">
        &
      </span>

      <span className="small-text">
        Cyber Security Analyst
      </span>

    </h1>

    <p className="hero-text small-text">

      Passionate Full Stack Developer and Cyber Security Analyst
      building secure, scalable web applications while performing
      penetration testing, vulnerability assessment and ethical
      hacking using modern security tools.

    </p>

    <div className="hero-buttons">

      <Link className="primary-btn" to="/projects">
        View Projects
        <FaArrowRight />
      </Link>

    
    </div>

    <div className="social-icons">

  {/* GitHub */}
  <a
    href="https://github.com/Chandra99275"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    title="GitHub"
  >
    <FaGithub />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/chandramaheshgoud-yarlagadda-25393b368/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    title="LinkedIn"
  >
    <FaLinkedin />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/__chandramahesh.__/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    title="Instagram"
  >
    <FaInstagram />
  </a>

  {/* Email */}
  <a
    href="mailto:chandramahesh9193@gmail.com"
    aria-label="Email"
    title="Email"
  >
    <FaEnvelope />
  </a>

</div>
  </div>

  {/* BOTTOM SECTION (Right content comes below) */}
  <div className="hero-right">

    <div className="glass-card">

      <div className="card-title">
        <FaShieldAlt />
        <h2>Skills & Technologies</h2>
      </div>

      <div className="web-box">

        <h3 id="web">Web Development</h3>

        <div className="web-grid">

          {webSkills.map((item, index) => (
            <div className="web-card" key={index}>
              <div className="icon">{item.icon}</div>
              <p>{item.name}</p>
            </div>
          ))}

        </div>
      </div>

      <div className="cyber-box">

        <h3 id="cyber">Cyber Security</h3>

        <div className="cyber-grid">

          {cyberSkills.map((item, index) => (
            <div className="cyber-card" key={index}>
              <FaLinux />
              <span>{item}</span>
            </div>
          ))}

        </div>

      </div>

    </div>

  </div>

</section>
            {/* ==========================
          Featured Skills
      ========================== */}

      <section className="featured-skills">

        <h2>What I Do</h2>

        <div className="feature-grid">

          <div className="feature-card">

            <FaReact className="feature-icon" />

            <h3>Frontend Development</h3>

            <p>
              Building responsive and interactive web applications
              using React, JavaScript, HTML5 and CSS3 with
              modern UI/UX practices.
            </p>

          </div>

          <div className="feature-card">

            <FaNodeJs className="feature-icon" />

            <h3>Backend Development</h3>

            <p>
              Developing scalable REST APIs using Node.js,
              Express.js, MongoDB and MySQL with secure
              authentication and database design.
            </p>

          </div>

          <div className="feature-card">

            <FaShieldAlt className="feature-icon" />

            <h3>Cyber Security</h3>

            <p>
              Performing penetration testing, vulnerability
              assessment, web security analysis and ethical hacking
              using Kali Linux and professional security tools.
            </p>

          </div>

        </div>

      </section>

      {/* ==========================
          Statistics
      ========================== */}

      <section className="stats">

        <div className="stat-box">
          <h1>20+</h1>
          <p>Projects Completed</p>
        </div>

        <div className="stat-box">
          <h1>15+</h1>
          <p>Technologies</p>
        </div>

        <div className="stat-box">
          <h1>10+</h1>
          <p>Security Tools</p>
        </div>

        <div className="stat-box">
          <h1>100%</h1>
          <p>Learning Passion</p>
        </div>

      </section>

      {/* ==========================
          Why Hire Me
      ========================== */}

      <section className="about-section">

        <h2>
          Why Work With Me?
        </h2>

        <p>

          I combine Full Stack Web Development with
          Cyber Security expertise to build applications
          that are not only modern and scalable but also
          secure against common vulnerabilities.

        </p>

        <div className="about-grid">

          <div className="about-card">
            ✅ Secure Web Applications
          </div>

          <div className="about-card">
            ✅ MERN Stack Development
          </div>

          <div className="about-card">
            ✅ Penetration Testing
          </div>

          <div className="about-card">
            ✅ API Development
          </div>

          <div className="about-card">
            ✅ Vulnerability Assessment
          </div>

          <div className="about-card">
            ✅ Continuous Learning
          </div>

        </div>

      </section>

      {/* ==========================
          Call To Action
      ========================== */}

      <section className="cta">

        <h2>

          Let's Build Secure &
          Modern Applications

        </h2>

        <p>

          Interested in working together?
          Let's create secure web solutions,
          innovative projects and impactful
          digital experiences.

        </p>

        <Link
          className="cta-btn"
          to="/projects"
        >

          Explore My Projects

          <FaArrowRight />

        </Link>

      </section>

      {/* ==========================
          Footer
      ========================== */}

      <footer className="footer">

        <h2>

          Chandra Mahesh.

        </h2>

        <p>

          Full Stack Developer |
          Cyber Security Analyst

        </p>

        <div className="footer-icons">

  <a
    href="https://github.com/Chandra99275"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    title="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/chandramaheshgoud-yarlagadda-25393b368/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    title="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://www.instagram.com/__chandramahesh.__/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    title="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="mailto:chandramahesh9193@gmail.com"
    aria-label="Email"
    title="Email"
  >
    <FaEnvelope />
  </a>

</div>

        <p className="copyright">

          © {new Date().getFullYear()} Mahesh.
          All Rights Reserved.

        </p>

      </footer>

    </div>
  );
}

export default Home;