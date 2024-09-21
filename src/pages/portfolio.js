import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import PortfolioSS from "../img/portfolio.jpg";
import PythonBoardGameSS from "../img/pygame.jpg";
import MovieLibrarySS from "../img/movielib.jpg";
import MuseumOfArtSS from "../img/mmoany.jpg";
import MuseumOfArtBackendSS from "../img/mmoanyBackend.jpg";
import PfBackendSS from "../img/pfBackend.jpg";
import FragmentsUISs from "../img/fragmentsUI.jpg";
import FragmentsBackendSS from "../img/fragmentsMS.jpg";
import IntellicyclesSS from "../img/intellicycles.jpg";
import WorldCountriesAppSS from "../img/worldcountries.jpg";
import IntelliSuiteSS from "../img/intellisuite.jpg";
import InsuranceAppSS from "../img/insuranceApp.jpg";

const Portfolio = () => {
  const projects = [
    {
      name: "Insurance Claim Management Application",
      description: "The application is built using ASP.NET Core Razor Pages for a robust web framework and C# for backend logic. Entity Framework Core simplifies database interactions with MySQL for reliable data storage, Git and GitHub for version control, ensuring effective change tracking and collaboration.",
      githubRepo: "https://github.com/yemregumus/insuranceClaimManagementApp",
      imagePath: InsuranceAppSS,
    },
    {
      name: "IntelliSuite AI SaaS",
      description: "The project leverages Next.js and React to build a modern web application that is efficient and user-friendly. With the integration of libraries like Shadcn, Axios, React Hook Form, and Radix UI, the application is designed for high performance and accessibility. The use of Tailwind CSS allows for rapid UI development with a focus on consistency, while TypeScript enhances code safety and maintainability.",
      githubRepo: "https://github.com/yemregumus/intellisuite",
      imagePath: IntelliSuiteSS,
    },
    {
      name: "World Countries App",
      description: "The project leverages Angular and Ionic for building a cross-platform application that can run on web and mobile devices, utilizing Capacitor for native capabilities. It includes comprehensive scripts for building, serving, testing, and linting, ensuring a smooth development workflow.",
      githubRepo: "https://github.com/yemregumus/MobileApp-Dev/tree/main/WorldCountriesApp/world-countries-app",
      imagePath: WorldCountriesAppSS,
    },
    {
      name: "IntelliCycles Calendar App",
      description: "Built with Node.js, Express, PostgreSQL, Bcrypt, JWT, Passport.js, Nodemon, Jest, Supertest in the Backend and for the Frontend Stack: React, Vite, Axios, Emotion, FullCalendar, Bootstrap, Moment.js, React Router DOM, Tailwind CSS, ESLint.",
      githubRepo: "https://github.com/yemregumus/IntelliCycles",
      imagePath: IntellicyclesSS,
    },

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
                imagePath={project.imagePath} // Use imagePath instead
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
