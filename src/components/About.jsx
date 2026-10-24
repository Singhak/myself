const SKILLS = [
  { title: "Frontend", items: ["React", "Angular", "JavaScript", "TypeScript", "HTML / CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "NestJS", "Loopback", "REST APIs", "Python", "Java"] },
  { title: "Data", items: ["MongoDB", "Firebase"] },
  { title: "AI & ML", items: ["LLM APIs (Gemini, OpenRouter)", "AI-powered product features", "Prompt engineering", "Claude Code", "Agent skills", "Machine learning (Python)", "ML model deployment (Flask)"] },
  { title: "Cloud & DevOps", items: ["Docker", "Jenkins", "Azure", "AWS", "Git"] },
];

const EXPERIENCE = [
  {
    company: "Iris Software, Noida",
    role: "Tech Lead",
    dates: "2022 – Present",
    text: "Own backend, API design and UI delivery for transaction-management platforms built with Node.js, React and Angular. Lead developers, review architecture and keep performance and integration solid.",
  },
  {
    company: "EdgeVerve Systems, Bengaluru",
    role: "Technical Analyst",
    dates: "2016 – 2022",
    text: "Built a low-code platform (Loopback + PolymerJS), led a team of four on an Alfresco document-management system for an Australian bank, and shipped automation and ML tooling.",
  },
  {
    company: "Nexm Software, Bangalore",
    role: "Software Engineer",
    dates: "2015 – 2016",
    text: "Mobile engineer on Follow Chess (100K+ downloads): real-time event streaming, game analysis and Stockfish integration on iOS.",
  },
  {
    company: "Innotical Solutions, Noida",
    role: "Game Developer",
    dates: "2013 – 2015",
    text: "Led a team of three building cross-platform mobile games in C++ (Cocos2d-x) with social leaderboards.",
  },
];

const About = () => {
  return (
    <div className="container-fluid padding-side text-white">
      <div className="page">
        <h1 className="page-title" data-aos="fade-up">
          About <span className="gradient-text">me</span>
        </h1>
        <p className="page-lead" data-aos="fade-up">
          I started in game development, moved through mobile and banking
          platforms, and now lead full-stack teams. That range means I can pick
          up a product problem, choose the right stack, and see it through to
          production.
        </p>

        <h2 className="section-title" data-aos="fade-up">Skills</h2>
        <div className="skill-grid">
          {SKILLS.map((g) => (
            <div className="skill-card" key={g.title} data-aos="fade-up">
              <h4>{g.title}</h4>
              <ul className="chips">
                {g.items.map((i) => (
                  <li className="chip" key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="section-title" data-aos="fade-up">Experience</h2>
        <div className="timeline">
          {EXPERIENCE.map((e) => (
            <div className="timeline-item" key={e.company} data-aos="fade-up">
              <div className="timeline-head">
                <h3>{e.company}</h3>
                <span className="timeline-date">{e.dates}</span>
              </div>
              <div className="timeline-role">{e.role}</div>
              <p className="mb-0" style={{ color: "var(--muted)" }}>{e.text}</p>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2 className="section-title" data-aos="fade-up">Education</h2>
            <div className="skill-card" data-aos="fade-up">
              <h4 className="text-white">B.Tech, Computer Science</h4>
              <span className="timeline-date">2008 – 2012</span>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="section-title" data-aos="fade-up">Certifications</h2>
            <div className="skill-card" data-aos="fade-up">
              <ul className="chips">
                <li className="chip">Microsoft AZ-900</li>
                <li className="chip">AWS Cloud Practitioner (CLF-C01)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
