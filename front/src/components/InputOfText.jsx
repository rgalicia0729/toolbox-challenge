import React from 'react';
import PropTypes from 'prop-types';

const InputOfText = ({ text, palindrome }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-text">
        <input className="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input" defaultChecked={palindrome} />
      </div>
      <input type="text" className="form-control" aria-label="Text input with checkbox" value={text} readOnly />
    </div>
  );
};

InputOfText.defaultProps = {
  text: '',
  palindrome: false
}

InputOfText.propTypes = {
  text: PropTypes.string,
  palindrome: PropTypes.bool
}

export default InputOfText;
