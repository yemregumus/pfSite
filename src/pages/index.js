import Rabbit from "../img/white-rabbit.gif";
import WhiteRabbit from "./components/WhiteRabbit";
import { motion } from "framer-motion";

export default function Home() {
  const textSequence = ["Neo: Hello?", 2000, "Morpheus: Hello, Neo. Do you know who this is?", 2000, "Neo: Morpheus?", 2000, "Morpheus: Yes. I've been looking for you, Neo.", 2000, "Morpheus: I don't know if you're ready to see what I want to show you, but unfortunately, you and I have run out of time.", 2000, "Morpheus: They're coming for you, Neo, and I don't know what they're going to do.", 2000, "Neo: Who's coming for me?", 2000, "Morpheus: Stand up and see for yourself.", 2000, "Neo: What, right now?", 2000, "Morpheus: Yes, now.", 2000, "The Matrix has you...", 2000, "Follow the white rabbit.", 2000];

  return (
    <>
      <motion.section initial={{ opacity: 0, filter: "blur(20px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.5 }} className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-lg " id="home">
        <div className="container mx-auto flex flex-col pb-10 md:pb-40 items-center justify-center h-screen px-6">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="text-4xl md:text-4xl lg:text-7xl font-bold text-white mb-6  text-center">
            Welcome to My Portfolio
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="text-lg md:text-xl lg:text-3xl text-white mb-10 text-center">
            I was expecting you.
          </motion.p>
        </div>
      </motion.section>
      <div className="fixed-bottom-container mb-10">
        <WhiteRabbit textSequence={textSequence} rabbitSrc={Rabbit} />
      </div>
    </>
  );
}
