import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Headshot from "../img/headshot.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Yunus Gumus</title>
      </Head>
      <div className={styles.imageContainer}>
        <Image
          src={Headshot} // Path to your image in the public folder
          alt="My Image"
          width={220} // Set the desired width
          height={250} // Set the desired height
        />
        <div>
          <h1 className="hello">Hello, I&apos;m Yunus </h1>
          <p className="par">
            a student specializing in Computer Programming and Analysis at Seneca College .
            <br />
            Currently on the path to becoming a full-stack software developer, I anticipate graduating in October 2024.
            <br />
            As I refine my skills, I look forward to presenting and showcasing my work here.
          </p>
        </div>
      </div>
    </>
  );
}
