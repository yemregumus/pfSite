import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Custom button component with optional link functionality and animations.
 *
 * @param {Object} props - The props object.
 * @param {string} props.href - The URL to link to, if provided.
 * @param {string} props.text - The text to display on the button.
 * @param {string} [props.type="button"] - The type of the button.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @param {boolean} [props.openInNewTab=false] - Whether to open the link in a new tab.
 * @returns {JSX.Element} React element representing the custom button component.
 */
const CustomButton = ({ href, text, type = "button", onClick, openInNewTab = false }) => {
  const buttonProps = {
    whileHover: { scale: 1.1, backgroundColor: "black", color: "white" },
    whileTap: { scale: 0.9 },
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.1 },
    className: "menu-button font-semibold py-2 px-4 sm:px-2 rounded-full shadow-lg cursor-pointer text-sm sm:text-base",
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
