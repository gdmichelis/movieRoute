import "./Button.css";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default function Button({
  children,
  color,
  bgColor,
  onClick,
  type = "button",
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="button"
      style={{ color: color, backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
}
