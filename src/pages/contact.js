import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Form, Alert, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if name, email, and message are not empty
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // Send data to Formspree
    const formspreeEndpoint = "https://friendly-red-shirt.cyclic.app/send-email"; // Replace with your actual Formspree endpoint
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitted(true);
        // You can handle success, e.g., show a success message or redirect the user
      } else {
        // Handle error
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={12} className="text-center mb-4">
            <h1>Contact Me</h1>
            <hr style={{ width: "50%", color: "black", marginTop: "10px", marginBottom: "30px", marginLeft: "auto", marginRight: "auto" }} />
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            {submitted ? (
              <Alert variant="success" className="mt-3">
                Thank you for your message! I&apos;ll get back to you as soon as possible. <br />
                Additionally, you can try to contact me through social media too! :)
              </Alert>
            ) : (
              <Form onSubmit={handleSubmit} className="mt-3">
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
                  <Form.Control as="textarea" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
                </Form.Group>
                <br />

                <Button variant="contained" startIcon={<SendIcon />} type="submit">
                  Get In Touch
                </Button>
              </Form>
            )}
          </Col>
          <Col md={7} className="d-flex align-items-center">
            If you have any questions or ideas that you want to share, please do not hesitate to contact me. <br />
            <br />
            This form will send me an email and a notification to my smartwatch so I will be noticed!
            <br />
            <br /> But if you want, you can also follow/connect/contact me from my social media accounts:)
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Link href="https://www.instagram.com/defianttdh/" passHref>
        <InstagramIcon fontSize="large" style={{ marginRight: "10px", color: "#E4405F", cursor: "pointer" }} />
      </Link>
      <Link href="https://www.facebook.com/bebekbeyin/" passHref>
        <FacebookIcon fontSize="large" style={{ marginRight: "10px", color: "#1877F2", cursor: "pointer" }} />
      </Link>
      <Link href="https://github.com/yemregumus" passHref>
        <GitHubIcon fontSize="large" style={{ marginRight: "10px", color: "#1877F2", cursor: "pointer" }} />
      </Link>
      <Link href="https://www.linkedin.com/in/jonasgumusyyz/" passHref>
        <LinkedInIcon fontSize="large" style={{ marginRight: "10px", color: "#1877F2", cursor: "pointer" }} />
      </Link>
      <Link href="https://twitter.com/jonashaveandhas" passHref>
        <TwitterIcon fontSize="large" style={{ marginRight: "10px", color: "#1877F2", cursor: "pointer" }} />
      </Link>
    </>
  );
}
