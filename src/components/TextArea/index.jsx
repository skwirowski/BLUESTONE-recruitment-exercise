import React from 'react';
import PropTypes from 'prop-types';

import 'components/TextArea/styles/styles.css';

const TextArea = ({
  id,
  label,
  placeholder,
  data,
  onInputChange,
  rows,
  cols,
}) => (
  <div className="textarea">
    <label htmlFor={id} className="textarea__label">
      {label}
    </label>
    <textarea
      id={id}
      className="textarea__window"
      placeholder={placeholder}
      value={data}
      onChange={onInputChange}
      rows={rows}
      cols={cols}
    />
  </div>
);

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cols: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextArea.defaultProps = {
  label: 'input default input',
  placeholder: '',
  data: '',
  rows: 5,
  cols: 50,
};

export default TextArea;
