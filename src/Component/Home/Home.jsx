import "./Home.modules.css";
import man from "../../assets/Images/man.png";
import { Typewriter } from "react-simple-typewriter";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { FaCode, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Register the GSAP plugin
gsap.registerPlugin(useGSAP);

function Home() {
  useGSAP(
    () => {
      let tl1 = gsap.timeline({ delay: 0.5 }); // Add a delay to ensure DOM is ready

      // Use more specific selectors with #home prefix to avoid null target errors
      tl1.from("#home .line1", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      tl1.from("#home .line2", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      tl1.from("#home .line3", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      tl1.from("#home .typewriter", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      tl1.from("#home .tech-icons", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      tl1.from("#home .cta-buttons", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });

      // Make sure the image exists before animating
      const manImage = document.querySelector("#home #man");
      if (manImage) {
        gsap.from(manImage, {
          x: 280,
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
          delay: 0.5,
        });
      }
    },
    { scope: document.body }
  ); // Add a scope to ensure elements are found

  return (
    <>
      <div id="home">
        <div className="lefthome">
          <div className="homedetails">
            <div className="line1">I'M</div>
            <div className="line2">Ranjit Khedekar</div>
            <div className="line3">
              <FaCode className="title-icon" /> FULL-STACK WEB DEVELOPER
            </div>
            <div className="typewriter">
              <span className="typewriter-prefix">Specialized in </span>
              <Typewriter
                words={[
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "Express.js",
                  "Bootstrap",
                  "JavaScript",
                  "HTML/CSS",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <div className="tech-icons">
              <FaReact className="tech-icon react-icon" title="React.js" />
              <FaNodeJs className="tech-icon node-icon" title="Node.js" />
              <FaDatabase className="tech-icon db-icon" title="MongoDB" />
            </div>
            <div className="cta-buttons">
              <a href="#contact" className="contact-btn">
                <FaEnvelope className="btn-icon" /> Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/11ox8WDNXGnl_4frLcyQEkSN7ICGoXxXL/view?usp=drive_link"
                className="resume-btn"
              >
                <FaDownload className="btn-icon" /> Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="righthome">
          <img src={man} alt="" id="man" />
        </div>
      </div>
    </>
  );
}
export default Home;
