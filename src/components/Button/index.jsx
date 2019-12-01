import React from 'react';
import PropTypes from 'prop-types';

import 'components/Button/styles/styles.css';

const Button = ({ children, top, right, bottom, left }) => {
  const margins = {
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
  };
  return (
    <div className="button-wrapper" style={margins}>
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
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
};

Button.defaultProps = {
  top: '',
  right: '',
  bottom: '',
  left: '',
};

export default Button;
