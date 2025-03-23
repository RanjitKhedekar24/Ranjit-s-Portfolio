import "./Project.modules.css";
import Card from "../Card/Card";
import mt from "../../assets/Images/mt.png";
import calk from "../../assets/Images/calk.png";
import hotel from "../../assets/Images/hotel.png";
import br from "../../assets/Images/br.png";
import cb from "../../assets/Images/cb.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  useGSAP(() => {
    // Title animation with bounce effect
    gsap.from("#project h1", {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.3)",
      scrollTrigger: {
        trigger: "#project",
        scroll: "body",
        scrub: 1,
        start: "top 80%",
        end: "top 40%",
      },
    });

    // Animate each card individually with staggered effect
    gsap.utils.toArray(".card").forEach((card, i) => {
      gsap.from(card, {
        x: i % 2 === 0 ? -100 : 100, // Alternate left and right
        y: 50,
        opacity: 0,
        rotation: i % 2 === 0 ? -5 : 5, // Slight rotation
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".slider",
          scroll: "body",
          scrub: 1,
          start: "top 85%",
          end: "top 35%",
        },
      });
    });

    // Add a cool effect to the slider
    gsap.to(".slider", {
      backgroundPosition: "100% 50%",
      ease: "none",
      scrollTrigger: {
        trigger: "#project",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Add a floating animation to cards
    const floatAnimation = () => {
      gsap.to(".card", {
        y: "+=10",
        duration: 2,
        ease: "sine.inOut",
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
      });
    };

    floatAnimation();
  });

  return (
    <>
      <div id="project">
        <h1>MY PROJECTS</h1>
        <div className="slider">
          <Card
            title="Maths Tool"
            image={mt}
            projectUrl="https://maths-tool.vercel.app/"
          />
          <Card
            title="Hotel Website"
            image={hotel}
            projectUrl="https://hotel-web-git-main-ranjit-khedekars-projects.vercel.app/"
          />
          <Card
            title="Project 4"
            image={br}
            projectUrl="https://yourprojectlink.com/project4"
          />
          <Card
            title="Calculator"
            image={calk}
            projectUrl="https://react-calculator-sigma-ivory.vercel.app/"
          />
          <Card
            title="Project 5"
            image={cb}
            projectUrl="https://yourprojectlink.com/project5"
          />
        </div>
      </div>
    </>
  );
}

export default Project;
