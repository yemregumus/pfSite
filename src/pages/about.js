import { motion } from "framer-motion";
import Rabbit from "../img/white-rabbit.gif";
import WhiteRabbit from "./components/WhiteRabbit";
import CustomButton from "./components/CustomButton";
import Image from "next/image";
import Headshot from "/src/img/headshot.jpg";

export default function AboutMe() {
  const textSequence = ["Neo: Hello?", 2000, "Morpheus: Hello, Neo. Do you know who this is?", 2000, "Neo: Morpheus?", 2000, "Morpheus: Yes. I've been looking for you, Neo.", 2000, "Morpheus: I don't know if you're ready to see what I want to show you, but unfortunately, you and I have run out of time.", 2000, "Morpheus: They're coming for you, Neo, and I don't know what they're going to do.", 2000, "Neo: Who's coming for me?", 2000, "Morpheus: Stand up and see for yourself.", 2000, "Neo: What, right now?", 2000, "Morpheus: Yes, now.", 2000, "The Matrix has you...", 2000, "Follow the white rabbit.", 2000];

  return (
    <>
      <br />
      <motion.section initial={{ opacity: 0, filter: "blur(20px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.5 }} className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-lg mt-1 flex items-center justify-center" style={{ minHeight: "70vh" }} id="about">
        <div className="container flex flex-col items-center justify-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="text-4xl md:text-4xl lg:text-4xl font-bold text-white text-center">
            About Yunus
          </motion.h1>
          <div className="mb-10 className= mb-10 hidden md:block">
            <Image
              src={Headshot} // Path to your headshot photo
              alt="Headshot"
              width={200} // Adjust width and height as needed
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="about-me-box">
            <p className="aboutMeP ">In my private life I am passionate individual about technology, working out, cooking, and self-improvement. In professional life I&apos;m a dedicated developer who thrives on learning and consistently improving. My strength lies in swiftly grasping new technologies and crafting efficient, organized, and easily comprehensible code to ensure top-notch products. Moreover, I excel in stakeholder communication, adeptly translating their needs into elegant and accessible solutions. My ambition extends to mastering Full Stack Development, complemented by expertise in UI/UX Design, Cloud Computing, and DevOps.</p>
          </div>
          <br />
          <div className="buttons-container">
            <CustomButton href="/portfolio" text="My Projects" />
            <CustomButton href="/contact" text="Contact Me" />
            <CustomButton href="https://buymeacoffee.com/yunusgumus" text="Buy Me a Coffee" />
          </div>
        </div>
      </motion.section>
      <div className="fixed-bottom-container mb-10 hidden md:block">
        <WhiteRabbit textSequence={textSequence} rabbitSrc={Rabbit} />
      </div>
    </>
  );
}
