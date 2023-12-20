import React from "react";
import useTypingAnimation from "../../hooks/useTypingAnimation";

export default function About() {
  const words = ["<h2>Curious about who am I? :)</h2> <br/><p>I&apos;m a passionate and dedicated software developer. I&apos;m currently pursuing a degree in Computer Programming and Analysis at Seneca College.</p><br/><p>My journey into the world of programming began with a curiosity to understand how software works and a desire to create innovative solutions. As a student, I&apos;ve had the opportunity to explore various technologies, frameworks, and programming languages, and I&apos;m continuously expanding my skill set.</p><br/><p>I am particularly interested in full-stack web development and software development, and I enjoy working on projects that involve both front-end and back-end technologies. My goal is to become a proficient and well-rounded software developer, and I&apos;m excited about the challenges and learning opportunities that come with this journey.</p><br/><p>Outside of coding, I love reading, watching movies, playing online games, fishing, running and fitness. Whether it&apos;s solving coding problems, building web applications, or exploring new technologies, I&apos;m always eager to take on new challenges and enhance my abilities.</p><br/><p>Thank you for visiting my website! Feel free to explore my portfolio and projects. If you have any questions or would like to connect, don&apos;t hesitate to reach out.</p>"];
  const speed = 10;
  const delay = 2000;

  useTypingAnimation(words, speed, delay);
  return (
    <>
      <div className="word"></div>
    </>
  );
}
