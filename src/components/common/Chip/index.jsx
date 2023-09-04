import "./styles.css";
import PropTypes from "prop-types";

Chip.propTypes = {
  label: PropTypes.string.isRequired,
};

const Chip = ({ label }) => <p className="chip">{label}</p>;

export default Chip;
