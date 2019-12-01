import React from 'react';
import PropTypes from 'prop-types';

import 'components/Button/styles/styles.css';

const Button = ({ children, customClassName }) => {
  return (
    <div
      className={`${
        customClassName ? `button-wrapper ${customClassName}` : 'button-wrapper'
      }`}
    >
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  customClassName: PropTypes.string,
};

Button.defaultProps = {
  customClassName: '',
};

export default Button;
