import styles from "./Chip.module.css";

import PropTypes from "prop-types";

const Chip = ({ label }) => <p className={styles.chip}>{label}</p>;

Chip.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Chip;
