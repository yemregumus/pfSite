// Contact.js
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Container, Form, Button, Alert } from "react-bootstrap";

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
    <Container>
      <h1 className="mt-5">Contact Me</h1>
      {submitted ? (
        <Alert variant="success" className="mt-3">
          Thank you for your message! I&apos;ll get back to you as soon as possible. <br />
          Additionally you can try to contact me through social media too! :)
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
}
