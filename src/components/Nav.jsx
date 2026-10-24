import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import "./Nav.css";

const LINKS = [
  { to: "home", label: "Home", icon: "#home" },
  { to: "about", label: "About", icon: "#person" },
  { to: "portfolio", label: "Work", icon: "#layout" },
  { to: "milestone", label: "Products", icon: "#pajamas--work" },
  { to: "contact", label: "Contact", icon: "#contact" },
];

const SOCIALS = [
  { href: "https://github.com/Singhak", label: "GitHub", icon: "#icon-park-outline--github" },
  { href: "https://linkedin.com/in/anilsingh09", label: "LinkedIn", icon: "#teenyicons--linkedin-outline" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        id="header-nav"
        className={`site-header fixed-top ${scrolled ? "is-scrolled" : ""}`}
      >
        <div className="container-fluid padding-side site-header-inner">
          <NavLink className="brand" to="home" aria-label="Anil Kumar, home">
            <img src={logo} alt="" />
            <span className="brand-text">
              Anil Kumar
              <small>Tech Lead · Full Stack</small>
            </span>
          </NavLink>


          <div className="header-actions">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="header-icon"
              >
                <svg width="22" height="22">
                  <use xlinkHref={s.icon}></use>
                </svg>
              </a>
            ))}
            <a href="mailto:anilsingh.singh09@gmail.com" className="header-cta">
              Hire me
            </a>
          </div>
        </div>
      </header>

      {/* Side nav on desktop, bottom tab bar on mobile */}
      <nav id="side-nav" className="navbar-side" aria-label="Primary">
        <ul className="navbar-nav">
          {LINKS.map((l) => (
            <li className="nav-item" key={l.to}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active social-icon" : "nav-link social-icon"
                }
                to={l.to}
              >
                <svg width="22" height="22">
                  <use xlinkHref={l.icon}></use>
                </svg>
                <span className="nav-label">{l.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
