import oneStep from "../assets/images/talesoftales.jpg";
import cflock from "../assets/images/cflock.png";
import storywala from "../assets/images/storywala.png";
import singhak from "../assets/images/singhak.jpg";
import styles from "./Milestone.module.css";
const Milestone = () => {
  function openIt(link) {
    window.open(link, "_blank");
  }
  return (
    <div className="container-fluid padding-side text-white col-lg-9">
      <div className="row flex-column align-items-center">
        <h1
          className="banner-size fw-medium display-3 mb-3 mt-3"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          See What I&apos;ve<span className="text-primary"> Built </span>
        </h1>
        <div
          className="about-info mb-5"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="row">
            <div
              className={`${styles.div_container} col-lg-6 mb-3`}
              onClick={() => openIt("https://oursolutioncafe.web.app/")}
            >
              <img src={cflock} alt="Image 1" className={styles.image} />
              <p className="m-3">
                An Angular and Firebase-based application designed for doctors
                to manage clinics across multiple locations. It allows patient
                record creation and enables doctors to prescribe medications
                directly through the app.
              </p>
            </div>
            <div
              className={`${styles.div_container} col-lg-6 mb-3`}
              onClick={() => openIt("https://singhak.in")}
            >
              <img src={singhak} alt="Image 1" className={styles.image} />
              <p className="m-3">
                This is my personal technical blog, where I share articles based
                on my learning and experiences. Whenever I read something
                insightful or solve a programming challenge, I document it here
                to help others and keep a record of my solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1200">
            <div className="row">
              <div
                className={`${styles.div_container} col-lg-6 mb-3`}
                onClick={() => openIt("https://talesoftales.com/")}
              >
                <img src={oneStep} alt="Image 1" className={styles.image} />
                <p className="m-3">
                  This Angular and Firebase-based application is designed for
                  writers and readers to share and engage with literary content.
                  Users can write and publish poems or stories, explore works by
                  others, and provide comments and feedback.
                </p>
              </div>
              <div
                className={`${styles.div_container} col-lg-6 mb-3`}
                onClick={() => openIt("https://storywalla.com/")}
              >
                <img src={storywala} alt="Image 1" className={styles.image} />
                <p className="m-3">
                  I This Angular and Firebase-based application is designed for
                  writers and readers to share and engage with literary content.
                  Users can write and publish poems or stories, explore works by
                  others, and provide comments and feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
