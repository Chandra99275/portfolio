import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Intrusion Detection System",
    date: "Apr 2026",
    category: "Cyber Security",
    icon: "🛡️",
    description:
      "Developed a Python-based Intrusion Detection System to monitor network traffic and identify suspicious activities.",
    features: [
      "Captured and analyzed network packets using Wireshark.",
      "Detected malicious traffic patterns using Python.",
      "Generated real-time alerts for suspicious network activity."
    ],
    tech: [
      "Python",
      "Wireshark",
      "Network Security",
      "Packet Analysis"
    ]
  },


  {
    title: "Secure Login System",
    date: "Nov 2025",
    category: "Web Security",
    icon: "🔐",
    description:
      "Designed and developed a secure web authentication system implementing modern security practices.",
    features: [
      "Implemented password hashing and secure authentication.",
      "Prevented SQL Injection and Cross-Site Scripting attacks.",
      "Added session management and input validation."
    ],
    tech: [
      "React",
      "Node.js",
      "Authentication",
      "Database Security"
    ]
  },


  {
    title: "Fake News Detection System",
    date: "April 2025",
    category: "Machine Learning",
    icon: "🤖",
    description:
      "Machine learning application designed to detect misleading and fake news articles.",
    features: [
      "Applied machine learning algorithms for text classification.",
      "Analyzed news content patterns.",
      "Predicted authenticity of news articles."
    ],
    tech: [
      "Python",
      "Machine Learning",
      "NLP"
    ]
  },


  {
    title: "Personal Financial Management System",
    date: "Nov 2025",
    category: "Full Stack",
    icon: "💰",
    description:
      "Web application for managing personal income, expenses, and financial records.",
    features: [
      "Income and expense tracking.",
      "Financial record management.",
      "User-friendly dashboard interface."
    ],
    tech: [
      "React",
      "JavaScript",
      "Database"
    ]
  },


  {
    title: "Task Manager Application",
    date: "Dec 2025",
    category: "Java Application",
    icon: "📋",
    description:
      "Java-based task management application supporting complete task operations.",
    features: [
      "Create new tasks.",
      "Update existing tasks.",
      "Delete completed tasks."
    ],
    tech: [
      "Java",
      "OOP",
      "File Handling"
    ]
  },


  {
    title: "NexusHR Website",
    date: "2025",
    category: "Web Application",
    icon: "👨‍💼",
    description:
      "Human Resource management website developed using Java technologies.",
    features: [
      "Employee management system.",
      "HR workflow automation.",
      "Modern web interface."
    ],
    tech: [
      "Java",
      "HTML",
      "CSS",
      "Database"
    ]
  }
];


function Projects(){

return(

<div className="projects-page">


<section className="projects-hero">

<h1>
My <span>Projects</span>
</h1>

<p>
A collection of cybersecurity, artificial intelligence,
and full-stack development projects demonstrating
security engineering and software development skills.
</p>

</section>




<section className="projects-grid">


{
projects.map((project,index)=>(


<div 
className="project-card"
key={index}
>


<div className="project-icon">
{project.icon}
</div>



<div className="project-header">

<h2>
{project.title}
</h2>

<span>
{project.date}
</span>

</div>



<p className="category">
{project.category}
</p>



<p className="project-description">
{project.description}
</p>




<h3>
Key Features
</h3>


<ul>

{
project.features.map((item,i)=>(

<li key={i}>
{item}
</li>

))
}

</ul>



<div className="tech-stack">

{
project.tech.map((item,i)=>(

<span key={i}>
{item}
</span>

))
}

</div>



<button className="view-btn">
View Project
</button>



</div>


))

}



</section>


</div>

)

}


export default Projects;