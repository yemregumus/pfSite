import React, { useState } from "react";
import { useRouter } from "next/router";
import { Container, Form, Row, Col, Alert } from "react-bootstrap";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import CustomButton from "./components/CustomButton";
import Rabbit from "../img/white-rabbit.gif";
import WhiteRabbit from "./components/WhiteRabbit";
import { useAlert } from "./components/AlertProvider";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const { showAlert } = useAlert();

  const textSequence = ["Neo: Hello?", 2000, "Morpheus: Hello, Neo. Do you know who this is?", 2000, "Neo: Morpheus?", 2000, "Morpheus: Yes. I've been looking for you, Neo.", 2000, "Morpheus: I don't know if you're ready to see what I want to show you, but unfortunately, you and I have run out of time.", 2000, "Morpheus: They're coming for you, Neo, and I don't know what they're going to do.", 2000, "Neo: Who's coming for me?", 2000, "Morpheus: Stand up and see for yourself.", 2000, "Neo: What, right now?", 2000, "Morpheus: Yes, now.", 2000, "The Matrix has you...", 2000, "Follow the white rabbit.", 2000];

  const handleShowAlert = () => {
    console.log("Showing alert...");
    showAlert("Success", "Message received! I'll get back to you soon.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    try {
      const formspreeEndpoint = "https://pfcontactapi.onrender.com/send-email";
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  React.useEffect(() => {
    if (submitted) {
      const redirectTimer = setTimeout(() => {
        router.push("/contact");
      }, 5000);

      return () => clearTimeout(redirectTimer);
    }
  }, [submitted]);

  return (
    <>
      <motion.section initial={{ opacity: 0, filter: "blur(20px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.5 }} className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-lg flex items-center justify-center mt-4" style={{ minHeight: "70vh" }} id="contact">
        <motion.div className="container flex flex-col items-center justify-center">
          <Container className="">
            <Row>
              <Col md={12} className="text-center text-white">
                <h1>Contact Me</h1>
                <hr style={{ width: "50%", color: "black", marginTop: "10px", marginBottom: "30px", marginLeft: "auto", marginRight: "auto" }} />

                <div className="text-center text-white font-bold text-1xl md:text-1xl lg:text-2xl">
                  <Link href="https://github.com/yemregumus" passHref target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="github-icon" fontSize="large" style={{ marginRight: "10px", color: "#black", cursor: "pointer" }} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/jonasgumusyyz/" passHref target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className="linkedin-icon" fontSize="large" style={{ marginRight: "10px", color: "#white", cursor: "pointer" }} />
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <Form onSubmit={handleSubmit} className=" text-white">
                  <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="formMessage">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={8} value={message} onChange={(e) => setMessage(e.target.value)} />
                  </Form.Group>
                  <br />
                  <CustomButton text="Get In Touch" type="submit" />
                </Form>
                {/* Success alert positioned near the button */}
                {submitted && (
                  <Alert variant="success" className="position-absolute" style={{ bottom: "0.1px", left: "50%", transform: "translateX(-50%)" }}>
                    Message received! I&apos;ll get back to you soon.
                  </Alert>
                )}
              </Col>
              <Col md={7} className="d-flex align-items-center text-white text-1xl md:text-1xl lg:text-2xl font-bold text-white mb-6 ">
                If you have any questions or ideas that you want to share, please do not hesitate to contact me. <br />
                <br />
                This form will send me an email and a notification to my smartwatch so I will be noticed!
                <br />
              </Col>
            </Row>
          </Container>
        </motion.div>
      </motion.section>

      <div className="fixed-bottom-container mb-10 hidden md:block">
        <WhiteRabbit textSequence={textSequence} rabbitSrc={Rabbit} />
      </div>
    </>
  );
}
