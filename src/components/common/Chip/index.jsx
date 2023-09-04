import "./styles.css";
import PropTypes from "prop-types";

const Chip = ({ label }) => <p className="chip">{label}</p>;

Chip.propTypes = {
  label: PropTypes.string.isRequired,
};
export default Chip;
