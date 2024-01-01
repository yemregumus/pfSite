import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [animationInitiated, setAnimationInitiated] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const textParts = [{ text: "Curious about who am I? :)", tag: "h2", style: { fontSize: "2em" } }, { text: "I'm a passionate and dedicated software developer." }, { text: "My journey into the world of programming began with a curiosity to understand how software works and a desire to create innovative solutions." }, { text: "As a student, I've had the opportunity to explore various technologies, frameworks, and programming languages, and I'm continuously expanding my skill set." }, { text: "I am particularly interested in full-stack web development and software development, and I enjoy working on projects that involve both front-end and back-end technologies." }, { text: "My goal is to become a proficient and well-rounded software developer, and I'm excited about the challenges and learning opportunities that come with this journey.", tag: "p" }];

  useEffect(() => {
    if (!animationInitiated) {
      // Start animation for the next text part after a delay
      const timeout = setTimeout(() => {
        setTextIndex((prevIndex) => prevIndex + 1);
      }, 2300); // Adjust the delay as needed

      return () => clearTimeout(timeout);
    }
  }, [animationInitiated, textIndex]);

  return (
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
  );
}
