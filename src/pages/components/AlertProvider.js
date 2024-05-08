import React, { createContext, useState, useContext } from "react";
import Alert from "./Alert";

const AlertContext = createContext();

/**
 * Custom hook to access the AlertContext.
 *
 * @returns {Object} The value from the AlertContext.
 */
export const useAlert = () => useContext(AlertContext);

/**
 * Provider component for managing alerts within the application.
 *
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} React element representing the alert provider component.
 */
const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  /**
   * Displays an alert with the specified type and text, then hides it after 5 seconds.
   *
   * @param {string} type - The type of alert (e.g. 'success', 'error').
   * @param {string} text - The text to display in the alert.
   */
  const showAlert = (type, text) => {
    setAlert({ type, text });
    setTimeout(() => {
      setAlert(null);
    }, 5000); // Hide alert after 5 seconds
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && <Alert type={alert.type} text={alert.text} />}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
