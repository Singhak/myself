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
          Explore What I&apos;ve
          <span className="text-primary"> Created </span>
        </h1>
        <div
          className="about-info mb-5"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="row">
            {/* First Card */}
            <div
              className={`${styles.div_container} col-lg-6 mb-3 d-flex flex-column`}
            >
              <div className="flex-grow-1">
                <img src={cflock} alt="Image 1" className={styles.image} />
                <p className="m-3">
                  An Angular and Firebase-based application designed for doctors
                  to manage clinics across multiple locations. It allows doctors
                  to manage patient and employee records, create and delete
                  records, and prescribe medications directly through the app.
                </p>
              </div>
              <div
                className="btn rounded-pill button text-white p-2 btn-outline-secondary d-flex align-items-center justify-content-center"
                onClick={() => openIt("https://oursolutioncafe.web.app/")}
              >
                <span> Explore </span>
                <svg
                  className="arrow-right text-white p-1"
                  width="28"
                  height="28"
                >
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </div>
            </div>

            {/* Second Card */}
            <div
              className={`${styles.div_container} col-lg-6 mb-3 d-flex flex-column`}
            >
              <div className="flex-grow-1">
                <img src={singhak} alt="Image 1" className={styles.image} />
                <p className="m-3">
                  This is my personal technical blog where I share insights from
                  my learning and experiences. Whenever I discover something
                  valuable or solve a programming issue, I document it here to
                  assist others and maintain a record of my solutions.
                </p>
              </div>
              <div
                className="btn rounded-pill button text-white p-2 btn-outline-secondary d-flex align-items-center justify-content-center"
                onClick={() => openIt("https://singhak.in")}
              >
                <span> Explore </span>
                <svg
                  className="arrow-right text-white p-1"
                  width="28"
                  height="28"
                >
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1200">
            <div className="row">
              <div
                className={`${styles.div_container} col-lg-6 mb-3 d-flex flex-column`}
              >
                <div className="flex-grow-1">
                  <img src={oneStep} alt="Image 1" className={styles.image} />
                  <p className="m-3">
                    This Angular and Firebase-based application is designed for
                    writers and readers to share and engage with literary
                    content. Users can write and publish poems or stories,
                    explore works by others, and provide comments and feedback.
                  </p>
                </div>
                <div
                  className="btn rounded-pill button text-white p-2 btn-outline-secondary d-flex align-items-center justify-content-center"
                  onClick={() => openIt("https://talesoftales.com/")}
                >
                  <span> Explore </span>
                  <svg
                    className="arrow-right text-white p-1"
                    width="28"
                    height="28"
                  >
                    <use xlinkHref="#arrow-right"></use>
                  </svg>
                </div>
              </div>
              <div
                className={`${styles.div_container} col-lg-6 mb-3 d-flex flex-column`}
                onClick={() => openIt("https://storywalla.com/")}
              >
                <div className="flex-grow-1">
                  <img src={storywala} alt="Image 1" className={styles.image} />
                  <p className="m-3">
                    I This Angular and Firebase-based application is designed
                    for writers and readers to share and engage with literary
                    content. Users can write and publish poems or stories,
                    explore works by others, and provide comments and feedback.
                  </p>
                </div>
                <div
                  className="btn rounded-pill button text-white p-2 btn-outline-secondary d-flex align-items-center justify-content-center"
                  onClick={() => openIt("https://storywalla.com/")}
                >
                  <span> Explore </span>
                  <svg
                    className="arrow-right text-white p-1"
                    width="28"
                    height="28"
                  >
                    <use xlinkHref="#arrow-right"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
