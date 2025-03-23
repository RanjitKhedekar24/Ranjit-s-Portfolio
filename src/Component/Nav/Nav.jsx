import React, { useState, useEffect } from "react";
import "./Nav.modules.css";
import { Link } from "react-scroll";
import { Navbar, Nav as BootstrapNav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Register the GSAP plugin
gsap.registerPlugin(useGSAP);

function Nav() {
  useGSAP(
    () => {
      let tl = gsap.timeline();
      // Use more specific selectors to avoid null target errors
      tl.from(".navbar h1", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.2, // Add a small delay to ensure DOM is ready
      });
      tl.from("#basic-navbar-nav .nav-link", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      });
    },
    { scope: document.body }
  ); // Add a scope to ensure elements are found

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
    <>
      <Navbar expand="md" fixed="top" bg="dark" variant="dark">
        <Container>
          <Link
            to="home"
            duration={500}
            smooth={true}
            className="one d-flex align-items-center"
          >
            <h1>PORTFOLIO</h1>
          </Link>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleMenu}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <BootstrapNav className="ms-auto">
              <BootstrapNav.Item>
                <Link
                  to="home"
                  duration={500}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  onClick={closeMenu}
                  className="nav-link"
                >
                  Home
                </Link>
              </BootstrapNav.Item>

              <BootstrapNav.Item>
                <Link
                  to="about"
                  duration={500}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  onClick={closeMenu}
                  className="nav-link"
                >
                  About
                </Link>
              </BootstrapNav.Item>

              <BootstrapNav.Item>
                <Link
                  to="project"
                  duration={500}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  onClick={closeMenu}
                  className="nav-link"
                >
                  Projects
                </Link>
              </BootstrapNav.Item>

              <BootstrapNav.Item>
                <Link
                  to="contact"
                  duration={500}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  onClick={closeMenu}
                  className="nav-link"
                >
                  Contact
                </Link>
              </BootstrapNav.Item>
            </BootstrapNav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
