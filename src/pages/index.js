import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Card, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Headshot from "../img/headshot.jpg";

export default function Home() {
  const [animationInitiated, setAnimationInitiated] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const textParts = [{ text: "Hi I'm Yunus", tag: "h1", style: { fontSize: "2em" } }, { text: "a student specializing in Computer Programming and Analysis at Seneca College." }, { text: "Currently on the path to becoming a full-stack software developer, I anticipate graduating in October 2024." }, { text: "As I refine my skills, I look forward to presenting and showcasing my work here.", tag: "p" }];

  useEffect(() => {
    if (!animationInitiated) {
      // Start animation for the next text part after a delay
      const timeout = setTimeout(() => {
        setTextIndex((prevIndex) => prevIndex + 1);
      }, 2400); // Adjust the delay as needed

      return () => clearTimeout(timeout);
    }
  }, [animationInitiated, textIndex]);

  return (
    <Row>
      <Col md={2}>
        <Image
          src={Headshot} // Path to your image in the public folder
          alt="My Image"
          width={220} // Set the desired width
          height={250} // Set the desired height
          priority
        />
      </Col>
      <Col md={10}>
        <div>
          {textParts.slice(0, textIndex + 1).map((part, index) => (
            <TypeAnimation
              key={index}
              sequence={[part.text]}
              speed={{ type: "keyStrokeDelayInMs", value: 20 }}
              cursor={false}
              wrapper={part.tag || "div"}
              style={part.style || { fontSize: "1em" }}
              onComplete={() => {
                if (index === textParts.length + 1) {
                  // Set initiated to true when the last part completes
                  setAnimationInitiated(true);
                }
              }}
            />
          ))}
        </div>
      </Col>
    </Row>
  );
}
