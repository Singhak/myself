import logo from "../assets/images/infinity.png";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav
        id="header-nav"
        className="navbar navbar-expand-lg z-1 fixed-top header-container"
        data-bs-theme="dark"
      >
        <div className="container-fluid padding-side">
          <NavLink className="navbar-brand" href="index.html">
            <img src={logo} alt="logo" style={{ height: "50px" }} />
          </NavLink>
          <div
            className="offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-body justify-content-end">
              <ul className="d-flex list-unstyled justify-content-center mt-2">
                <li>
                  <a
                    href="mailto:anilsingh.singh09@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                    className="contact-icon ms-4"
                  >
                    <svg className="social-icon" width="32" height="32">
                      <use xlinkHref="#material-symbols--mail-outline"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Singhak"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="contact-icon ms-4"
                  >
                    <svg className="social-icon" width="32" height="32">
                      <use xlinkHref="#icon-park-outline--github"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/anilsingh09"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="contact-icon ms-4 me-3"
                  >
                    <svg className="social-icon" width="32" height="32">
                      <use xlinkHref="#teenyicons--linkedin-outline"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav
        id="side-nav"
        className="navbar-side p-2 p-lg-3 me-lg-5 z-1 text-center"
        data-bs-theme="dark"
      >
        <ul className="navbar-nav">
          <li className="nav-item" title="Home">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active social-icon"
                  : "nav-link social-icon"
              }
              aria-current="page"
              to={"/"}
            >
              <svg width="24" height="24">
                <use xlinkHref="#home"></use>
              </svg>
            </NavLink>
          </li>
          <li className="nav-item" title="About Me">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active social-icon"
                  : "nav-link social-icon"
              }
              to={"/about"}
            >
              <svg width="24" height="24">
                <use xlinkHref="#person"></use>
              </svg>
            </NavLink>
          </li>
          <li className="nav-item" title="My Work">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active social-icon"
                  : "nav-link social-icon"
              }
              to={"/portfolio"}
            >
              <svg width="24" height="24">
                <use xlinkHref="#layout"></use>
              </svg>
            </NavLink>
          </li>
          <li className="nav-item" title="Milestones">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active social-icon"
                  : "nav-link social-icon"
              }
              to={"/milestone"}
            >
              <svg width="24" height="24">
                <use xlinkHref="#pajamas--work"></use>
              </svg>
            </NavLink>
          </li>
          <li className="nav-item" title="Connect With Me">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link active social-icon"
                  : "nav-link social-icon"
              }
              to={"/contact"}
            >
              <svg width="24" height="24">
                <use xlinkHref="#contact"></use>
              </svg>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
