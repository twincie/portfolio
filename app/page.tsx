const projects = [
  { number: "01", title: "Digital products", description: "Thoughtful web experiences shaped around real people and clear business goals.", tags: ["Strategy", "Design", "Build"] },
  { number: "02", title: "Brand systems", description: "Visual identities and flexible systems that make good ideas easier to recognize.", tags: ["Identity", "Direction", "Systems"] },
  { number: "03", title: "Creative experiments", description: "Small explorations in technology, storytelling, and the spaces between them.", tags: ["Code", "Ideas", "Play"] },
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="wordmark" href="#top" aria-label="Johnson Oyebode, home">JO<span>.</span></a>
      <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a className="nav-cta" href="mailto:oyebodej2@gmail.com">Say hello</a></div>
    </nav>
    <section className="hero shell" id="top">
      <p className="eyebrow">Independent creative · Lagos, Nigeria</p>
      <h1>I turn complex ideas into <em>simple, useful</em> experiences.</h1>
      <div className="hero-bottom"><p>I’m Johnson — a multidisciplinary creator focused on digital products, visual systems, and work that moves people.</p><a className="round-link" href="#work" aria-label="View selected work">↓</a></div>
    </section>
    <section className="work shell" id="work">
      <div className="section-heading"><p className="eyebrow">Selected work</p><p className="aside">A few ways I help ideas take shape.</p></div>
      <div className="project-list">{projects.map((project) => <article className="project" key={project.number}>
        <span className="project-number">{project.number}</span><div><h2>{project.title}</h2><p>{project.description}</p></div>
        <ul aria-label={`${project.title} skills`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      </article>)}</div>
    </section>
    <section className="about shell" id="about"><p className="eyebrow">A little about me</p><div className="about-copy">
      <h2>Curious by nature.<br />Intentional by practice.</h2><div><p>I care about the details that make an experience feel effortless — strong ideas, honest communication, and craft that earns its place.</p><p>Whether I’m shaping a product or telling a story, I bring clarity to the process and leave things better than I found them.</p></div>
    </div></section>
    <footer className="shell"><p className="eyebrow">Have something in mind?</p><a className="footer-link" href="mailto:oyebodej2@gmail.com">Start a conversation</a><div className="footer-bottom"><span>© {new Date().getFullYear()} Johnson Oyebode</span></div></footer>
  </main>;
}
