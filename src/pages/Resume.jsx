import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-page">

      <h1>My Resume</h1>

      <p>
        Select a resume based on the role you are hiring for.
      </p>

      <div className="resume-grid">

        <div className="resume-card">

          <h2>💻 Web Development</h2>

          <iframe
            src="/resumes/Web_Development_Resume.pdf"
            title="Web Resume"
          ></iframe>

          <a
            href="/resumes/Web_Development_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="view-btn"
          >
            Open Full Screen
          </a>

        </div>

        <div className="resume-card">

          <h2>🔐 Cyber Security</h2>

          <iframe
            src="/resumes/Cyber_Security_Resume.pdf"
            title="Cyber Resume"
          ></iframe>

          <a
            href="/resumes/Cyber_Security_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="view-btn"
          >
            Open Full Screen
          </a>

        </div>

      </div>
    </div>
  );
}