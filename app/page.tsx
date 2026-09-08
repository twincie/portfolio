import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const projects = [
  { number: "01", title: "Banking Platform Backend", description: "A secure Spring Boot and MySQL backend supporting authentication, transactions, history, and role-based access.", tags: ["Java", "Spring Boot", "MySQL"] },
  { number: "02", title: "Comprehensive Fee Service", description: "A backend service for managing and calculating configurable fees across different transaction types.", tags: ["Java", "Spring Boot", "Microservices"] },
  { number: "03", title: "Max Music Player", description: "A Python desktop music player with a custom interface and dynamic playlist support.", tags: ["Python", "Desktop", "UI"] },
];

const experience = [
  { company: "Remita Payment Services Ltd", role: "Backend Engineer", period: "Jan 2024 — Present" },
  { company: "Independent Contractor", role: "Freelance Software Engineer", period: "Dec 2022 — Dec 2023" },
  { company: "Pan-African Equipment Group", role: "IT Support & Networking Intern", period: "May 2022 — Nov 2022" },
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="wordmark" href="#top" aria-label="Johnson Oyebode, home">JO<span>.</span></a>
      <div className="nav-actions"><div className="nav-links"><a href="#work">Projects</a><a href="#experience">Experience</a><a href="#about">About</a><a className="nav-cta" href="mailto:oyebodej2@gmail.com">Say hello</a></div><ThemeToggle /></div>
    </nav>
    <section className="hero shell" id="top">
      <p className="eyebrow">Backend Engineer · Lagos, Nigeria</p>
      <h1>I build <em>secure, scalable</em> systems that perform.</h1>
      <div className="hero-bottom"><div><p>I’m Johnson — a backend engineer specializing in Java, Python, APIs, and production-ready microservices for fintech and beyond.</p><div className="hero-actions"><a className="resume-link" href="/Johnson-Oyebode-CV.pdf" download>Download my CV <span aria-hidden="true">↓</span></a><a className="profile-link" href="https://github.com/twincie" target="_blank" rel="noreferrer">GitHub</a><a className="profile-link" href="https://linkedin.com/in/johnson-oyebode-3a9b4b237" target="_blank" rel="noreferrer">LinkedIn</a></div></div><a className="round-link" href="#work" aria-label="View selected projects">↓</a></div>
    </section>
    <section className="work shell" id="work">
      <div className="section-heading"><p className="eyebrow">Selected projects</p><p className="aside">Backend engineering, machine learning, and useful software.</p></div>
      <div className="project-list">{projects.map((project) => <article className="project" key={project.number}>
        <span className="project-number">{project.number}</span><div><h2>{project.title}</h2><p>{project.description}</p></div>
        <ul aria-label={`${project.title} technologies`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      </article>)}</div>
    </section>
    <section className="experience shell" id="experience">
      <div className="section-heading"><p className="eyebrow">Experience</p></div>
      <div className="experience-list">{experience.map((item) => <article className="experience-item" key={item.company}>
        <div><h2>{item.company}</h2><p className="role">{item.role}</p></div><p className="period">{item.period}</p>
      </article>)}</div>
    </section>
    <section className="about shell" id="about"><div className="about-intro"><p className="eyebrow">A little about me</p><Image className="portrait" src="/johnson-oyebode-hd.jpg" alt="Portrait of Johnson Oyebode" width={150} height={150} /></div><div className="about-copy">
      <h2>Clean architecture.<br />Real-world impact.</h2><div><p>I enjoy turning complex requirements into dependable backend systems. My work spans REST APIs, microservices, transaction processing, automation, and applied machine learning.</p><p>My core toolkit includes Java, Spring Boot, Python, Flask, Node.js, PostgreSQL, MySQL, MongoDB, Docker, CI/CD, JWT, and OAuth2.</p><a className="about-resume" href="/Johnson-Oyebode-CV.pdf" download>Download full CV <span aria-hidden="true">↓</span></a></div>
    </div></section>
    <footer className="shell"><p className="eyebrow">Have something in mind?</p><a className="footer-link" href="mailto:oyebodej2@gmail.com"><span>Start a conversation</span><span className="email-action"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5h18v11H3zM4 7.5l8 6 8-6" /></svg><span>Email me</span></span></a><div className="footer-bottom"><span>© {new Date().getFullYear()} Johnson Oyebode</span><span><a href="https://linkedin.com/in/johnson-oyebode-3a9b4b237" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://github.com/twincie" target="_blank" rel="noreferrer">GitHub</a></span></div></footer>
  </main>;
}
