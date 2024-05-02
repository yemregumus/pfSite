import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ name, description, githubRepo, deploymentLink, imagePath }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div className="project-card" whileHover={{ scale: 1.05, height: "auto" }} initial={{ scale: 1, height: "18rem" }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={imagePath} alt={name} />
      <div>
        <h3 className="text-xl font-bold mb-4">{name}</h3>
        <p className="text-gray-600 mb-6" style={{ display: isHovered ? "block" : "none" }}>
          {description}
        </p>
      </div>
      <div className="flex space-x-4">
        <a href={githubRepo} className="text-green-500 font-semibold hover:text-green-600">
          GitHub Repo
        </a>
        <a href={deploymentLink} className="text-green-500 font-semibold hover:text-green-600">
          Deployment Link
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
