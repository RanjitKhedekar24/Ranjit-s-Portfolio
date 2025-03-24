import React, { useState, useEffect } from "react";
import "./Nav.modules.css";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Register the GSAP plugin
gsap.registerPlugin(useGSAP);

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [expanded, setExpanded] = useState(false);

  // Optimize scroll event with throttling
  useEffect(() => {
    const handleScroll = () => {
      if (!window.requestAnimationFrame) {
        setTimeout(findActiveSection, 300);
      } else {
        window.requestAnimationFrame(findActiveSection);
      }
    };

    const findActiveSection = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setExpanded(false); // Close the menu when a link is clicked
  };

  // Optimize GSAP animations for mobile
  useGSAP(
    () => {
      // Check if we're on mobile
      const isMobile = window.innerWidth < 768;

      let tl = gsap.timeline();
      // Simpler animations for mobile
      if (isMobile) {
        tl.from(".navbar h1", {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        });
        tl.from("#basic-navbar-nav .nav-link", {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
          stagger: 0.1,
        });
      } else {
        // Full animations for desktop
        tl.from(".navbar h1", {
          y: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        });
        tl.from("#basic-navbar-nav .nav-link", {
          y: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.2,
        });
      }
    },
    { scope: document.body }
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Navbar expand="md" fixed="top" expanded={expanded} className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="one">
          <h1>Portfolio</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("home")}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("about")}
            >
              About
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-link ${
                activeLink === "project" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("project")}
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("contact")}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
