const About = () => {
  return (
    <>
      <div className="container-fluid padding-side text-white">
        <div className="row gap-5 flex-column align-items-center">
          <div className="col-lg-9">
            <h1
              className="banner-size fw-medium display-1"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              About me <span className="text-primary"> Anil </span>
            </h1>
            <p
              className="fs-4 fst-italic my-4"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              Turning Ideas into Functional & Scalable Solutions
            </p>
            <p data-aos="fade-up" data-aos-duration="1400">
              With a passion for coding and an design, I specialize in
              developing high-performance web applications. From front-end magic
              to back-end logic, I create solutions that are user-friendly,
              responsive, and secure.
            </p>
            <div
              className="process-content container mt-5"
              data-aos="fade-up"
              data-aos-duration="1400"
              style={{ textAlign: "justify" }}
            >
              <div
                id="counter"
                className="row"
                style={{ justifyContent: "center" }}
              >
                <div className="col-lg-3 col-6 ">
                  <div className="d-flex align-items-center">
                    <h4
                      className="counter-value text-primary fw-bold display-3 banner-size"
                      data-count="25"
                    >
                      10
                    </h4>
                    <span className="text-primary display-5">+</span>
                  </div>
                  <p className="text-uppercase mb-0">years experience</p>
                </div>
                {/* <div className="col-lg-3 col-6 ">
                  <div className="d-flex align-items-center">
                    <h4
                      className="counter-value text-primary fw-bold display-3 banner-size"
                      data-count="390"
                    >
                      5
                    </h4>
                    <span className="text-primary display-5">+</span>
                  </div>
                  <p className="text-uppercase mb-0">Satisfied clients</p>
                </div> */}
                <div className="col-lg-3 col-6 ">
                  <div className="d-flex align-items-center">
                    <h4
                      className="counter-value text-primary fw-bold display-3 banner-size"
                      data-count="550"
                    >
                      10
                    </h4>
                    <span className="text-primary display-5">+</span>
                  </div>
                  <p className="text-uppercase mb-0">Projects delivered</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="mt-5" data-aos="fade-up" data-aos-duration="1400">
              <div className="mt-4">
                <div
                  className="about-info mb-5"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3 className="display-3 mb-4">Skills</h3>
                  <div className="row">
                    <div className="col-lg-4 mb-3">
                      <h4 className="display-6">Frontend</h4>
                      <p>HTML, CSS, JavaScript (React, Angular)</p>
                    </div>
                    <div className="col-lg-4 mb-3">
                      <h4 className="display-6">Backend</h4>
                      <p>Node.js, Express</p>
                    </div>
                    <div className="col-lg-4 mb-3">
                      <h4 className="display-6">Database</h4>
                      <p>MongoDB</p>
                    </div>
                    <div className="col-lg-4 mb-3">
                      <h4 className="display-6">Tools</h4>
                      <p>Git, Docker, Jenkin, Azure, Firebase</p>
                    </div>
                  </div>
                </div>
                <div
                  className="about-info mb-5"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3 className="display-3 mb-4">Experience</h3>
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <h4 className="display-6">Iris Software, Inc., Noida</h4>
                      <p className="text-primary mb-1">
                        (Senior Software Engineer)
                      </p>
                      <p className="text-primary mb-1">2022 - Present</p>
                      <p>
                        I develop scalable web applications using Node.js,
                        React, and Angular. I focus on backend development, API
                        design, and UI implementation, ensuring seamless
                        integration and performance.
                      </p>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <h4 className="display-6">
                        EdgeVerve Systems Limited, Bengaluru
                      </h4>
                      <p className="text-primary mb-1">(Technical Analyst)</p>
                      <p className="text-primary mb-1">2016 - 2022</p>
                      <p>
                        Experienced in low-code/no-code development, automation,
                        and machine learning. Built application with Loopback
                        and PolymerJS and worked on Alfresco-based document
                        management system. Developed automation tools for
                        release note generation and patch deployment.
                      </p>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <h4 className="display-6">
                        Nexm Software Pvt. Ltd., Bangalore
                      </h4>
                      <p className="text-primary mb-1">(Software Engineer)</p>
                      <p className="text-primary mb-1">2015 - 2016</p>
                      <p>
                        Experienced in mobile app development, enhancing the
                        Follow Chess app with real-time event streaming and game
                        analysis for 100K+ users. Integrated Stockfish chess
                        engine to improved move analysis and optimizing
                        performance and enhancing the iOS user experience.
                      </p>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <h4 className="display-6">
                        Innotical Solutions Pvt. Ltd., Noida
                      </h4>
                      <p className="text-primary mb-1">(Game Developer)</p>
                      <p className="text-primary mb-1">2013 - 2015</p>
                      <p>
                        Experienced Game Developer with expertise in
                        cross-platform mobile game development using C++
                        (Cocos2d-x). Skilled in game mechanics, performance
                        optimization, and interactive user experiences.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="about-info mb-5"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3 className="display-3 mb-4">Education</h3>
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <h4 className="display-6">
                        Bachelors in Technology, Computer Science
                      </h4>
                      <p className="text-primary mb-1">2008 - 2012</p>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <h4 className="display-6">
                        Senior Secondary Education (12th)
                      </h4>
                      <p className="text-primary mb-1">2007 - 2008</p>
                    </div>
                  </div>
                </div>
                {/* <div
                  className="about-info mb-5"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h3 className="display-3 mb-4">Interest</h3>
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <h4 className="display-6">Photography</h4>
                      <p>Capturing moments that inspire creativity.</p>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <h4 className="display-6">Sketching</h4>
                      <p>Pen and paper concepts before digital execution.</p>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <h4 className="display-6">Traveling</h4>
                      <p>
                        Exploring cultures and landscapes to fuel design ideas.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
