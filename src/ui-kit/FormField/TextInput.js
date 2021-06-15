import React from 'react';
import './TextInput.scss';

/**
 * Returns form field
 * @method
 * @param {name, label, errorText, ...rest} - input event variables
 */
function FormField({ name, label, errorText, ...rest }) {
  return (
    <div id={name} className="textInput-container">
      <label htmlFor={name}>{label}</label>
      <input name={name} {...rest} />
      {errorText && <p>{errorText}</p>}
    </div>
  );
}

export default FormField;
