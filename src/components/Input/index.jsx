import React from 'react';
import PropTypes from 'prop-types';

import 'components/Input/styles/styles.css';

const Input = ({ id, label, placeholder, data, onInputChange }) => (
  <div className="input">
    <label htmlFor={id} className="input__label">
      {label}
    </label>
    <input
      id={id}
      className="input__window"
      type="text"
      placeholder={placeholder}
      value={data}
      onChange={onInputChange}
    />
  </div>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  label: 'input default input',
  placeholder: '',
  data: '',
};

export default Input;
