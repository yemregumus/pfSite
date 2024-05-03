import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import PortfolioSS from "../img/portfolio.jpg";

const Portfolio = () => {
  const projects = [
    {
      name: "My Portfolio Website",
      description: "React.JS, Next.JS, TailwindCSS, Framer-Motion",
      githubRepo: "https://github.com/yemregumus/pfSite",
      imageSrc: PortfolioSS,
      deploymentLink: "",
    },
    {
      name: "Python Board Game",
      description: "DSA Project, this is a two player board game. Implemented with Python.",
      githubRepo: "https://github.com/yemregumus/pythonBoardGame",
      imageSrc: "",
      deploymentLink: "",
    },
    {
      name: "Movie Library Website",
      description: "React and Next.js, interface for viewing movie details.",
      githubRepo: "https://github.com/yemregumus/WEB422-Assignment3",
      imageSrc: "",
      deploymentLink: "",
    },
    {
      name: "Museum of Art New York Website",
      description: "React, Next.js, and React Bootstrap. responsive user interface for browsing art collections.",
      githubRepo: "https://github.com/yemregumus/WEB422-Assignment6",
      imageSrc: "",
      deploymentLink: "",
    },
    {
      name: "Museum of Art New York Website Backend",
      description: "This backend server, built with Express.js, facilitates user authentication and data management for a web application.",
      githubRepo: "https://github.com/yemregumus/a6Backend",
      imageSrc: "",
      deploymentLink: "",
    },
    {
      name: "Backend for My Portfolio Website's Contact Page",
      description: "This backend server, built with Node.js and Express.js, facilitates communication between clients and a designated email recipient. ",
      githubRepo: "https://github.com/yemregumus/pfContactAPI",
      imageSrc: "",
      deploymentLink: "",
    },
    {
      name: "Fragments MicroService UI (Frontend)",
      description: "This UI provides an intuitive interface for creating, editing, and deleting fragments.",
      githubRepo: "https://github.com/yemregumus/fragments-ui",
      imageSrc: "",
      deploymentLink: "",
    },
    {
      name: "Fragments MicroService UI (Backend)",
      description: "The fragments microservice facilitates the management of text, image, and JSON data fragments within a distributed system.",
      githubRepo: "https://github.com/yemregumus/fragments",
      imageSrc: "",
      deploymentLink: "",
    },
  ];

  return (
    <motion.section initial={{ opacity: 0, filter: "blur(20px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.5 }} className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-lg mt-4" style={{ minHeight: "70vh" }} id="contact">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <motion.h2 className="text-3xl md:text-5xl font-bold text-white">Projects</motion.h2>
          </div>
        </div>

        <div className="row mt-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <ProjectCard
                name={project.name}
                description={project.description}
                githubRepo={project.githubRepo}
                deploymentLink={project.deploymentLink}
                imageSrc={project.imageSrc} // Use imageSrc instead of imagePath
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
