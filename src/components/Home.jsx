import { ReactTyped } from "react-typed";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid padding-side text-white">
        <div className="row align-items-center">
          <div className="col-lg-10 ms-lg-5">
            <h1
              className="banner-size fw-medium display-1 h1height"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              Hi, I&apos;m ANIL KUMAR
              <br />
              <ReactTyped
                strings={[
                  "A Full Stack Developer",
                  "A MERN Stack Developer",
                  "A MEAN Stack Developer",
                  "A Problem Solver",
                ]}
                typeSpeed={150}
                backSpeed={80}
                className="text-primary"
                loop
              ></ReactTyped>
            </h1>
            <p className="fs-5" data-aos="fade-up" data-aos-duration="1600">
              I craft seamless digital experiences with clean, efficient, and
              scalable code. Let&apos;s build something amazing together.
            </p>
            <NavLink
              to={"../portfolio"}
              excat
              className="btn rounded-pill button text-white mt-4 position-relative pe-5 btn-outline-secondary"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <span> Explore My Work </span>
              <div className="position-absolute top-50 end-0 translate-middle-y me-3">
                <svg
                  className="arrow-right text-white p-1"
                  width="28"
                  height="28"
                >
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
