import "./Contact.css";

const LINKS = [
  { label: "Email", value: "anilsingh.singh09@gmail.com", href: "mailto:anilsingh.singh09@gmail.com", icon: "#material-symbols--mail-outline" },
  { label: "LinkedIn", value: "in/anilsingh09", href: "https://linkedin.com/in/anilsingh09", icon: "#teenyicons--linkedin-outline" },
  { label: "GitHub", value: "github.com/Singhak", href: "https://github.com/Singhak", icon: "#icon-park-outline--github" },
  { label: "Stack Overflow", value: "singhak", href: "https://stackoverflow.com/users/2110245/singhak", icon: "#stackoverflow" },
  { label: "Location", value: "Ghaziabad, Uttar Pradesh, India", icon: "#akar-icons--location" },
];

const Contact = () => {
  return (
    <div className="container-fluid padding-side text-white">
      <div className="page">
        <h1 className="page-title" data-aos="fade-up">
          Let&apos;s build <span className="gradient-text">together</span>
        </h1>
        <p className="page-lead" data-aos="fade-up">
          Hiring a tech lead, or starting something and need someone who can own
          the engineering? Send me a note. I reply fast.
        </p>

        <div className="cta-row" data-aos="fade-up">
          <a href="mailto:anilsingh.singh09@gmail.com" className="cta cta-primary">
            Email me
          </a>
          <a
            href="https://linkedin.com/in/anilsingh09"
            target="_blank"
            rel="noopener noreferrer"
            className="cta cta-ghost"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="card-grid mt-5">
          {LINKS.map((l) => {
            const inner = (
              <>
                <svg width="30" height="30" className="flex-shrink-0">
                  <use xlinkHref={l.icon}></use>
                </svg>
                <span>
                  <small>{l.label}</small>
                  {l.value}
                </span>
              </>
            );
            return l.href ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                data-aos="fade-up"
              >
                {inner}
              </a>
            ) : (
              <div key={l.label} className="contact-card" data-aos="fade-up">
                {inner}
              </div>
            );
          })}
        </div>

        <p className="mt-5" style={{ color: "var(--muted)" }}>
          &copy; {new Date().getFullYear()} Anil Kumar
        </p>
      </div>
    </div>
  );
};

export default Contact;
