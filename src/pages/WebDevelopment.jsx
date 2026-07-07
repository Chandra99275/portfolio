import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCode,
  FaArrowRight,
  FaAward,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
} from "react-icons/si";

import "./WebDevelopment.css";

/* =======================
   Animation
======================= */

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

/* =======================
   Skills
======================= */

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    level: 98,
    color: "#E44D26",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    level: 96,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: 94,
    color: "#F7DF1E",
  },
  {
    name: "React.js",
    icon: <FaReact />,
    level: 95,
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    level: 90,
    color: "#3C873A",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    level: 89,
    color: "#ffffff",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    level: 88,
    color: "#47A248",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    level: 86,
    color: "#00758F",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    level: 92,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    level: 94,
    color: "#ffffff",
  },
];

/* =======================
   Projects
======================= */

const projects = [
  {
    title: "Farmer to Customer Marketplace",
    description:
      "A MERN stack marketplace connecting farmers directly with customers.",
    tech: "React • Node • Express • MongoDB",
  },

  {
    title: "Premium Portfolio",
    description:
      "Modern animated portfolio with responsive UI and glassmorphism effects.",
    tech: "React • CSS • Framer Motion",
  },

  {
    title: "Hot Wheels Website",
    description:
      "Premium animated landing page with interactive UI and smooth effects.",
    tech: "HTML • CSS • JavaScript",
  },
];

/* =======================
   Statistics
======================= */

const stats = [
  {
    number: "20+",
    title: "Projects",
  },

  {
    number: "3",
    title: "Internships",
  },

  {
    number: "10+",
    title: "Certificates",
  },

  {
    number: "1000+",
    title: "Coding Hours",
  },
];

/* =======================
   Component
======================= */

export default function WebDevelopment() {
  return (
        <div className="web-page">

      {/* ================= HERO ================= */}

      <section className="web-hero">

        <motion.div
          className="hero-left"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >

          <span className="hero-tag">
            Full Stack Development
          </span>

          <h1>
            Building Modern
            <span> Web Applications</span>
          </h1>

          <p>
            Passionate Full Stack Developer specializing in
            React.js, Node.js, Express.js and MongoDB.
            I develop responsive, scalable and secure
            web applications with modern UI/UX.
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

            <FaLaptopCode />

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
            About My Journey
          </h2>

          <p>

            I am passionate about developing modern,
            responsive and scalable web applications.
            My experience includes frontend development,
            backend development, REST API integration,
            authentication systems and database design.

          </p>

          <p>

            Through internships and personal projects,
            I have worked extensively with the MERN Stack,
            building production-ready applications while
            following clean coding practices.

          </p>

        </motion.div>

      </section>

      {/* ================= TECH STACK ================= */}

      <section className="tech-stack">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Technology Stack
        </motion.h2>

        <div className="stack-grid">

          <div className="stack-card">
            <FaHtml5 />
            <span>HTML5</span>
          </div>

          <div className="stack-card">
            <FaCss3Alt />
            <span>CSS3</span>
          </div>

          <div className="stack-card">
            <FaJs />
            <span>JavaScript</span>
          </div>

          <div className="stack-card">
            <FaReact />
            <span>React.js</span>
          </div>

          <div className="stack-card">
            <FaNodeJs />
            <span>Node.js</span>
          </div>

          <div className="stack-card">
            <SiExpress />
            <span>Express.js</span>
          </div>

          <div className="stack-card">
            <SiMongodb />
            <span>MongoDB</span>
          </div>

          <div className="stack-card">
            <SiMysql />
            <span>MySQL</span>
          </div>

          <div className="stack-card">
            <FaGitAlt />
            <span>Git</span>
          </div>

          <div className="stack-card">
            <FaGithub />
            <span>GitHub</span>
          </div>

          <div className="stack-card">
            <SiTailwindcss />
            <span>Tailwind CSS</span>
          </div>

          <div className="stack-card">
            <SiBootstrap />
            <span>Bootstrap</span>
          </div>

          <div className="stack-card">
            <SiFirebase />
            <span>Firebase</span>
          </div>

        </div> </section>

      {/* ================= SKILLS ================= */}

      <section className="skills-section">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Professional Skills
        </motion.h2>

        <div className="skills-container">

          {skills.map((skill, index) => (

            <motion.div
              className="skill-card"
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
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

      {/* ================= FEATURED PROJECTS ================= */}

      <section className="projects-section">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Featured Projects
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

                <FaCode />

              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="project-tech">
                {project.tech}
              </span>

              <button className="project-btn">

                View Project

                <FaArrowRight />

              </button>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================= INTERNSHIPS ================= */}

      <section className="internships">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          Professional Experience
        </motion.h2>

        <div className="internship-container">

          <motion.div
            className="internship-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          >

            <div className="internship-icon">

              <FaServer />

            </div>

            <div className="internship-content">

              <h3>Cognify</h3>

              <h4>Full Stack Development Intern</h4>

              <span>
                October 2025 – November 2025
              </span>

              <ul>

                <li>
                  Developed scalable MERN applications.
                </li>

                <li>
                  Implemented REST APIs.
                </li>

                <li>
                  Fixed bugs and improved performance.
                </li>

                <li>
                  Worked in an Agile environment.
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

              <FaLaptopCode />

            </div>

            <div className="internship-content">

              <h3>Infyntrek Technologies</h3>

              <h4>Web Development Intern</h4>

              <span>
                September 2025 – December 2025
              </span>

              <ul>

                <li>
                  Developed responsive React applications.
                </li>

                <li>
                  Integrated REST APIs.
                </li>

                <li>
                  Built reusable UI components.
                </li>

                <li>
                  Improved frontend performance.
                </li>

              </ul>

            </div>

          </motion.div>

        </div>

      </section>
            {/* ================= CERTIFICATIONS ================= */}

      <section className="certifications-section">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <div className="certifications-grid">

          <motion.div
            className="certificate-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          >
            <FaCertificate className="certificate-icon" />
            <h3>Full Stack Web Development</h3>
            <p>
              Completed hands-on training in modern web
              development using the MERN Stack.
            </p>
          </motion.div>

          <motion.div
            className="certificate-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          >
            <FaCertificate className="certificate-icon" />
            <h3>Cyber Security Internship</h3>
            <p>
              Successfully completed Cyber Security
              Internship at Zaalima Development.
            </p>
          </motion.div>

          <motion.div
            className="certificate-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
          >
            <FaCertificate className="certificate-icon" />
            <h3>Intel Academy Training</h3>
            <p>
              Completed Cyber Security Training in
              coordination with Intel Academy.
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
            <FaAward />
            <h3>20+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="achievement-card">
            <FaRocket />
            <h3>3</h3>
            <p>Professional Internships</p>
          </div>

          <div className="achievement-card">
            <FaCertificate />
            <h3>10+</h3>
            <p>Technical Certifications</p>
          </div>

          <div className="achievement-card">
            <FaCode />
            <h3>1000+</h3>
            <p>Hours of Coding</p>
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
          Development Statistics
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
            <span className="year">2025</span>

            <div className="timeline-content">
              <h3>Infyntrek Technologies</h3>
              <p>
                Started Web Development Internship and
                developed React applications.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="year">2025</span>

            <div className="timeline-content">
              <h3>Cognify</h3>
              <p>
                Worked as a Full Stack Development
                Intern on MERN applications.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="year">2026</span>

            <div className="timeline-content">
              <h3>Zaalima Development</h3>
              <p>
                Completed Cyber Security Internship
                and Intel Academy Training.
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
            Let's Build Something Amazing Together
          </h2>

          <p>
            I'm always excited to collaborate on
            innovative web applications and
            full-stack projects.
          </p>

          <button className="cta-btn">
            Contact Me
          </button>

        </motion.div>

      </section>

    </div>
  );
}