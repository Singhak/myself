import { ReactTyped } from "react-typed";
import { Link, NavLink } from "react-router-dom";

const STATS = [
  { value: "10+", label: "Years building software" },
  { value: "100K+", label: "Users on a shipped mobile app" },
  { value: "4", label: "Companies, from games to banking" },
  { value: "7", label: "Products I built and shipped" },
];

const FEATURED = [
  {
    tag: "Open source",
    title: "nodeui",
    text: "Embedded, local-only developer console for Node.js apps. Runtime observability for Express and NestJS.",
    href: "https://github.com/Singhak/nodeui",
  },
  {
    tag: "Open source",
    title: "dev-skills",
    text: "Six agent skills that make a coding agent work like a senior fullstack engineer: TDD, security on every change, evidence-based reports.",
    href: "https://github.com/Singhak/dev-skills",
  },
  {
    tag: "Live product",
    title: "SheetDXF",
    text: "Instant laser-cutting quotes in the browser: drop a DXF, get cut length, pierces and scrap yield.",
    href: "https://sheetdxf.com",
  },
];

const Home = () => {
  return (
    <div className="container-fluid padding-side text-white">
      <div className="page">
        <div className="hero">
          <div className="status-pill" data-aos="fade-up">
            <span className="status-dot" />
            Open to Tech Lead / Founding Engineer roles
          </div>

          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
            Anil Kumar
            <br />
            <span className="gradient-text">I ship products, not just code.</span>
          </h1>

          <div className="hero-role text-primary" data-aos="fade-up" data-aos-delay="200">
            <ReactTyped
              strings={[
                "Tech Lead @ Iris Software",
                "Full Stack: Node.js, React, Angular",
                "I take ideas from zero to production",
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1800}
              loop
            />
          </div>

          <p className="hero-sub" data-aos="fade-up" data-aos-delay="300">
            10+ years across games, mobile, banking and SaaS. I lead small teams,
            own the architecture end to end, and I&apos;m comfortable being the
            first engineer in the room. I&apos;ve built and shipped my own products too.
          </p>

          <div className="cta-row" data-aos="fade-up" data-aos-delay="400">
            <NavLink to="../contact" className="cta cta-primary">
              Let&apos;s talk
              <svg width="20" height="20">
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </NavLink>
            <NavLink to="../portfolio" className="cta cta-ghost">
              See my work
            </NavLink>
            <a
              href="https://linkedin.com/in/anilsingh09"
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-ghost"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Singhak"
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-ghost"
            >
              GitHub
            </a>
          </div>

          <div className="stats" data-aos="fade-up" data-aos-delay="500">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="section-title" data-aos="fade-up">
          Recently <span className="gradient-text">building</span>
        </h2>
        <div className="card-grid">
          {FEATURED.map((f) => (
            <a
              key={f.title}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              data-aos="fade-up"
            >
              <span className="card-tag">{f.tag}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <span className="card-link">View project →</span>
            </a>
          ))}
        </div>
        <p className="mt-4" data-aos="fade-up">
          <Link to="../milestone" className="card-link">
            All products I&apos;ve shipped →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
