import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CustomButton = ({ href, text, type = "button", onClick, openInNewTab = false }) => {
  const buttonProps = {
    whileHover: { scale: 1.1, backgroundColor: "black", color: "white" },
    whileTap: { scale: 0.9 },
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.1 },
    className: "menu-button font-semibold py-2 px-6 rounded-full shadow-lg cursor-pointer",
    style: { backgroundColor: "white", color: "black" },
    onClick: onClick,
  };

  const buttonComponent = (
    <motion.button {...buttonProps} type={type}>
      {text}
    </motion.button>
  );

  return href ? (
    openInNewTab ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonComponent}
      </a>
    ) : (
      <Link href={href} passHref>
        {buttonComponent}
      </Link>
    )
  ) : (
    buttonComponent
  );
};

export default CustomButton;
