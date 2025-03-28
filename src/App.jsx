import Aos from "aos";
import "./App.css";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollTop";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Nav />
      <section id="hero" className="padding-small position-relative">
        <ScrollToTop />
        <Outlet />
      </section>
    </>
  );
}

export default App;
