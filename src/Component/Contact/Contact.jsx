import "./Contact.modules.css";
import con from "../../assets/Images/contact.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { IoSend } from "react-icons/io5";

function Contact() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false,
  });
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setFormStatus({
        message: "Please fill in all fields",
        isError: true,
        isSubmitting: false,
      });
      return;
    }

    setFormStatus({
      message: "",
      isError: false,
      isSubmitting: true,
    });

    emailjs
      .sendForm(
        "service_sl2yjvk",
        "template_aa60kqb",
        form.current,
        "gsEoC7WLxwzrD3QuJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus({
            message: "Message sent successfully!",
            isError: false,
            isSubmitting: false,
          });
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setFormStatus({
            message: "Failed to send message. Please try again.",
            isError: true,
            isSubmitting: false,
          });
        }
      );
  };

  return (
    <div id="contact" className="py-5">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="section-heading mb-1">Contact Me</h2>
            <p className="section-subheading">
              Let's work together on your next project
            </p>
          </Col>
        </Row>
        <Row className="contact-container g-4">
          <Col lg={5} className="leftcontact">
            <div className="contact-info-card">
              <img src={con} alt="Contact" className="contact-image mb-4" />
              <div className="contact-details">
                <h4 className="mb-3">Get In Touch</h4>
                <div className="contact-item">
                  <MdEmail className="contact-icon" />
                  <span>khedekarranjit5@gmail.com</span>
                </div>
                <div className="contact-item">
                  <MdPhone className="contact-icon" />
                  <span>+91 8390699155</span>
                </div>
                <div className="contact-item">
                  <MdLocationOn className="contact-icon" />
                  <span>Pune, India</span>
                </div>
                <div className="social-links mt-4">
                  <a
                    href="https://github.com/RanjitKhedekar24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ranjit-khedekar-3055662ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/ranjit_5_9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7} className="rightcontact d-flex align-items-center">
            <Form className="contact-form" ref={form} onSubmit={sendEmail}>
              <h3 className="mb-4 text-center contact-heading">
                Send a Message
              </h3>

              {formStatus.message && (
                <div
                  className={`alert ${
                    formStatus.isError ? "alert-danger" : "alert-success"
                  } mb-3`}
                >
                  {formStatus.message}
                </div>
              )}

              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="user_name"
                className="form-input mb-3"
                value={formData.user_name}
                onChange={handleChange}
              />

              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="user_email"
                className="form-input mb-3"
                value={formData.user_email}
                onChange={handleChange}
              />

              <Form.Control
                as="textarea"
                placeholder="Enter your message here"
                style={{ height: "150px" }}
                name="message"
                className="form-input mb-3"
                value={formData.message}
                onChange={handleChange}
              />

              <Button
                variant="primary"
                type="submit"
                className="submit-btn w-100"
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <IoSend className="me-2" /> Send Message
                  </>
                )}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
