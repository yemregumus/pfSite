import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MainNav from "@/pages/components/MainNav";
import Footer from "./Footer";
import MatrixRainingCode from "./MatrixRain";

export default function Layout(props) {
  const [fontSize, setFontSize] = useState(20); // Initial font size in pixels

  useEffect(() => {
    // Function to update font size based on viewport width
    const updateFontSize = () => {
      const viewportWidth = window.innerWidth;
      const newFontSize = Math.max(12, Math.min(viewportWidth / 60, 15)); // Adjust the divisor and range as needed
      setFontSize(newFontSize);
    };

    // Call the updateFontSize function when the window is resized
    window.addEventListener("resize", updateFontSize);

    // Call the updateFontSize function on initial render
    updateFontSize();

    // Remove the event listener on component unmount to prevent memory leaks
    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
  }, []);

  return (
    <>
      <br />
      <br />
      <MatrixRainingCode />
      <MainNav />
      <Container className="custom-container" style={{ fontSize: `${fontSize}px` }}>
        {props.children}
      </Container>

      <br />
      <Footer />
    </>
  );
}
