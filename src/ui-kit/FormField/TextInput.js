import React, { useMemo } from 'react';
import './TextInput.scss';

/**
 * Returns memoized form field
 * @method
 * @param {name, label, errorText, ...rest} - input event variables
 */
function FormField({ name, label, errorText, value, ...rest }) {
  const child = useMemo(
    () => (
      <FormFieldBase
        name={name}
        label={label}
        value={value}
        errorText={errorText}
        {...rest}
      />
    ),
    [value, errorText]
  );

  return <>{child}</>;
}
/**
 * Returns form field
 * @method
 * @param {name, label, errorText, ...rest} - input event variables
 */
function FormFieldBase({ name, label, errorText, ...rest }) {
  console.log('rerender ' + name);
  return (
    <div id={name} className="textInput-container">
      <label htmlFor={name}>{label}</label>
      <input name={name} {...rest} />
      {errorText && <p>{errorText}</p>}
    </div>
  );
}

export default FormField;
