import { useEffect } from "react";
import $ from "jquery";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Headshot from "../img/headshot.jpg";
import useTypingAnimation from "../../hooks/useTypingAnimation";

export default function Home() {
  const words1 = ["<h1>Hi I'm Yunus</h1> <p>a student specializing in Computer Programming and Analysis at Seneca College.<br/> Currently on the path to becoming a full-stack software developer, I anticipate graduating in October 2024.<br/> As I refine my skills, I look forward to presenting and showcasing my work here.</p>"];
  const speed = 25;
  const delay = 2000;

  useTypingAnimation(words1, speed, delay);

  return (
    <>
      <Head>
        <title>Yunus Gumus</title>
      </Head>
      <div className="container">
        <Image
          src={Headshot} // Path to your image in the public folder
          alt="My Image"
          width={220} // Set the desired width
          height={250} // Set the desired height
          priority
        />

        <div className="word"></div>
      </div>
    </>
  );
}
