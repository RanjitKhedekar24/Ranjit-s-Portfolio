import "./About.modules.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    // Skip complex animations on mobile
    if (isMobile) {
      gsap.from(".aboutdetails h1, .aboutdetails ul li, .myinfo h1, .myinfo p", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
        }
      });
      return;
    }

    // Full animations for desktop
    gsap.from(".circle", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
    gsap.from(".line", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
    gsap.from(".aboutdetails h1", {
      x: -100,
      opacity: 0,
      duration: 1.5,
      stagger: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
      },
    });
    gsap.from(".aboutdetails ul li", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails ul li",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
      },
    });
    gsap.from(".myinfo h1", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".myinfo h1",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
      },
    });
    gsap.from(".myinfo p", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".myinfo p",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
      },
    });
  });

  return (
    <>
      <div id="about">
        <div className="leftabout">
          {!isMobile && (
            <div className="circleline">
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="line"></div>
            </div>
          )}
          <div className="aboutdetails">
            <div className="personalinfo">
              <h1>Personal Info</h1>
              <ul>
                <li>
                  <span>Name:</span>Ranjit Khedekar
                </li>
                <li>
                  <span>Age:</span>21
                </li>
                <li>
                  <span>Email:</span>Khedekarranjit5@gmail.com
                </li>
                <li>
                  <span>Language Known:</span>English,Hindi,Marathi
                </li>
              </ul>
            </div>
            <div className="education">
              <h1>Education</h1>
              <ul>
                <li>
                  <span>Degree:</span>BSc
                </li>
                <li>
                  <span>Branch:</span>Information Technology
                </li>
                <li>
                  <span>Year:</span>2023-2024
                </li>
                <li>
                  <span>CGPA:</span>7.8
                </li>
              </ul>
            </div>
            <div className="skills">
              <h1>Skills</h1>
              <ul>
                <li>
                  <span>HTML/CSS</span>
                </li>
                <li>
                  <span>JavaScript</span>
                </li>
                <li>
                  <span>React</span>
                </li>
                <li>
                  <span>Node.js</span>
                </li>
                <li>
                  <span>Express.js</span>
                </li>
                <li>
                  <span>MongoDB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rightabout">
          <div className="myinfo">
            <h1>About Me</h1>
            <p>
              I hold a Bachelor's degree in Information Technology and am a
              certified Full Stack Web Developer with strong expertise in
              software development,web technologies and decision-making. I
              possess advanced skills in analyzing complex problems and
              implementing effective solutions,leveraging my technical knowledge
              and proficiency in modern programming languages. My background
              includes successful projects where I demonstrated my ability to
              efficiently manage multiple tasks,deliver quality results on time,
              and make informed decisions under pressure. I am committed to
              continuous learning and contributing to innovative IT solutions in
              a dynamic work environment,always striving to stay ahead of
              emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
