import { NavLink } from "react-router-dom";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="container-fluid padding-side text-white">
        <div className="row flex-column align-items-center">
          <div>
            <h1
              className="banner-size fw-medium display-1 mb-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Let’s work <span className="text-primary">Together</span>
            </h1>
            {/* <p data-aos="fade-up" data-aos-duration="1400">
              Bringing your ideas to life with clean, efficient, and scalable
              code.{" "}
            </p> */}
          </div>
          <div
            className="col-lg-9 mt-2"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <ul className="contact-list">
              <li className="list-item">
                <svg width="48" height="48">
                  <use xlinkHref="#akar-icons--location"></use>
                </svg>
                <span className="contact-text place">
                  Ghaziabad, Uttar Pradesh
                </span>
              </li>

              <li className="list-item">
                <svg width="48" height="48">
                  <use xlinkHref="#gridicons--phone"></use>
                </svg>
                <span className="contact-text phone">
                  <NavLink href="tel:+91-9968641965" title="Give me a call">
                    (+91) 9968641965
                  </NavLink>
                </span>
              </li>

              <li className="list-item">
                <svg className="social-icon" width="48" height="48">
                  <use xlinkHref="#material-symbols--mail-outline"></use>
                </svg>
                <span className="contact-text gmail">
                  <NavLink href="mailto:#" title="Send me an email">
                    anilsingh.singh09@gmail.com
                  </NavLink>
                </span>
              </li>
            </ul>
            <hr />
            <ul className="social-media-list">
              <li>
                <a
                  href="https://github.com/Singhak"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="contact-icon"
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
                  className="contact-icon"
                >
                  <svg className="social-icon" width="32" height="32">
                    <use xlinkHref="#teenyicons--linkedin-outline"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/2110245/singhak"
                  rel="noreferrer"
                  target="_blank"
                  className="contact-icon"
                >
                  <svg className="social-icon" width="32" height="32">
                    <use xlinkHref="#material-symbols--mail-outline"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="mailto:anilsingh.singh09@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                  className="contact-icon"
                >
                  <svg className="social-icon" width="32" height="32">
                    <use xlinkHref="#stackoverflow"></use>
                  </svg>
                </a>
              </li>
            </ul>
            <hr />

            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
