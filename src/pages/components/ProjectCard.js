import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Component representing a project card with interactive hover effects.
 *
 * @param {Object} props - The props object.
 * @param {string} props.name - The name of the project.
 * @param {string} props.description - The description of the project.
 * @param {string} props.githubRepo - The link to the GitHub repository of the project.
 * @param {string} props.deploymentLink - The link to the deployed version of the project.
 * @param {string} props.imagePath - The path to the image representing the project.
 * @returns {JSX.Element} React element representing the project card component.
 */

const ProjectCard = ({ name, description, githubRepo, deploymentLink, imagePath }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div className="project-card-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <motion.div
        className="project-card"
        whileHover={{ scaleY: 1.2, height: "auto", marginBottom: "35px", marginTop: "35px", transition: { duration: 0.5 } }} //hover effect
        initial={{ scale: 1, height: "18rem" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image src={imagePath} alt={name} width={300} height={200} />
        <div>
          <h3 className="card-title text-xl font-bold mb-4">{name}</h3>
          <p className="text-gray-600 mb-6" style={{ display: isHovered ? "block" : "none" }}>
            {description}
          </p>
        </div>
        <div className="flex space-x-4">
          <a href={githubRepo} className="text-green-500 font-semibold hover:text-green-600" target="_blank" rel="noopener noreferrer">
            Link To GitHub Repo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
