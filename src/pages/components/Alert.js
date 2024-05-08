/**
 * Represents an alert component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.type - The type of alert (e.g. 'success', 'error').
 * @param {string} props.text - The text to display in the alert.
 * @returns {JSX.Element} React element representing the alert component.
 */
const Alert = ({ type, text }) => {
  return (
    <div className={`alert ${type}`}>
      <p>{text}</p>
    </div>
  );
};

export default Alert;
