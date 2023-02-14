import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({ onClick, children }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
