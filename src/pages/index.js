import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Card, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Headshot from "../img/headshot.jpg";
import Rabbit from "../img/white-rabbit.gif";
import WhiteRabbit from "./components/WhiteRabbit";

export default function Home() {
  const [animationInitiated, setAnimationInitiated] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const textParts = [{ text: "Hi I'm Yunus", tag: "h1" }, { text: "a student specializing in Computer Programming and Analysis at Seneca College." }, { text: "Currently on the path to becoming a full-stack software developer, I anticipate graduating in October 2024." }, { text: "As I refine my skills, I look forward to presenting and showcasing my work here.", tag: "p" }, { text: "With a fervent devotion akin to Neo's pursuit of the elusive white rabbit, my fascination with technology has guided me into the realm of software development. Like a seeker of truth in the Matrix, I thrive on curiosity and meticulous attention to detail. Much like Neo's journey, my path has been one of discovery, leading me to unravel the complexities of code and algorithms. As a devoted fan of The Matrix, I find inspiration in its narrative of awakening and the power of knowledge. This passion fuels my endeavors, driving me to excel in my craft and embrace the ever-evolving landscape of technology.", tag: "p" }];

  useEffect(() => {
    if (!animationInitiated) {
      // Start animation for the next text part after a delay
      const timeout = setTimeout(() => {
        setTextIndex((prevIndex) => prevIndex + 1);
      }, 2400); // Adjust the delay as needed

      return () => clearTimeout(timeout);
    }
  }, [animationInitiated, textIndex]);

  const textSequence = ["Neo: Hello?", 2000, "Morpheus: Hello, Neo. Do you know who this is?", 2000, "Neo: Morpheus?", 2000, "Morpheus: Yes. I've been looking for you, Neo.", 2000, "Morpheus: I don't know if you're ready to see what I want to show you, but unfortunately, you and I have run out of time.", 2000, "Morpheus: They're coming for you, Neo, and I don't know what they're going to do.", 2000, "Neo: Who's coming for me?", 2000, "Morpheus: Stand up and see for yourself.", 2000, "Neo: What, right now?", 2000, "Morpheus: Yes, now.", 2000, "The Matrix has you...", 2000, "Follow the white rabbit.", 2000];

  return (
    <>
      <Card className="bg-dark text-white card-main p-4 mb-3">
        <Card.Body>
          <Card.Title className="text-center d-none d-md-block">Welcome to My Portfolio!</Card.Title>
          <Card.Text className="text-center d-none d-md-block">Here you can learn more about me and my projects.</Card.Text>
          <Row>
            <Col md={2} className="d-none d-md-block">
              <div className="mr-3">
                <Image alt="headshot" src={Headshot} width={220} height={250} priority />
              </div>
            </Col>
            <Col md={10}>
              {textParts.slice(0, textIndex + 1).map((part, index) => (
                <TypeAnimation
                  key={index}
                  sequence={[part.text]}
                  speed={{ type: "keyStrokeDelayInMs", value: 20 }}
                  cursor={false}
                  wrapper={part.tag || "div"}
                  style={part.style}
                  onComplete={() => {
                    if (index === textParts.length + 1) {
                      setAnimationInitiated(true);
                    }
                  }}
                />
              ))}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <WhiteRabbit textSequence={textSequence} rabbitSrc={Rabbit} />
    </>
  );
}
