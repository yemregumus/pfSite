import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import PortfolioSS from "../img/portfolio.jpg";
import PythonBoardGameSS from "../img/pygame.jpg";
import MovieLibrarySS from "../img/movielib.jpg";
import MuseumOfArtSS from "../img/mmoany.jpg";
import MuseumOfArtBackendSS from "../img/mmoanybackend.jpg";
import PfBackendSS from "../img/pfbackend.jpg";
import FragmentsUISs from "../img/fragmentsUI.jpg";
import FragmentsBackendSS from "../img/fragmentsMS.jpg";

const Portfolio = () => {
  const projects = [
    {
      name: "My Portfolio Website",
      description: "Built with React.JS, Next.JS, TailwindCSS, Framer-Motion",
      githubRepo: "https://github.com/yemregumus/pfSite",
      imagePath: PortfolioSS,
    },
    {
      name: "Python Board Game",
      description: "DSA Project, this is a two player board game. Implemented with Python.",
      githubRepo: "https://github.com/yemregumus/pythonBoardGame",
      imagePath: PythonBoardGameSS,
    },
    {
      name: "Movie Library Website",
      description: "Built with React and Next.js, interface for viewing movie details.",
      githubRepo: "https://github.com/yemregumus/WEB422-Assignment3",
      imagePath: MovieLibrarySS,
    },
    {
      name: "Museum of Art New York Website",
      description: "Built with React, Next.js, and React Bootstrap. responsive user interface for browsing art collections.",
      githubRepo: "https://github.com/yemregumus/WEB422-Assignment6",
      imagePath: MuseumOfArtSS,
    },
    {
      name: "Museum of Art New York Website Backend",
      description: "This backend server, built with Express.js, facilitates user authentication and data management for a web application.",
      githubRepo: "https://github.com/yemregumus/a6Backend",
      imagePath: MuseumOfArtBackendSS,
    },
    {
      name: "Backend for My Portfolio Website's Contact Page",
      description: "This backend server, built with Node.js and Express.js, facilitates communication between clients and a designated email recipient. ",
      githubRepo: "https://github.com/yemregumus/pfContactAPI",
      imagePath: PfBackendSS,
    },
    {
      name: "Fragments MicroService UI (Frontend)",
      description: "This UI provides an intuitive interface for creating, editing, and deleting fragments.",
      githubRepo: "https://github.com/yemregumus/fragments-ui",
      imagePath: FragmentsUISs,
    },
    {
      name: "Fragments MicroService UI (Backend)",
      description: "The fragments microservice facilitates the management of text, image, and JSON data fragments within a distributed system.",
      githubRepo: "https://github.com/yemregumus/fragments",
      imagePath: FragmentsBackendSS,
    },
  ];

  return (
    <motion.section initial={{ opacity: 0, filter: "blur(20px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.5 }} className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-lg mt-4 mb-10" style={{ minHeight: "70vh" }} id="contact">
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
                imagePath={project.imagePath} // Use imageSrc instead of imagePath
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
