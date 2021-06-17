import React from 'react';

/**
 * Returns form field
 * @method
 * @param {name, label, errorText, ...rest} - input event variables
 */
function TextInput({ name, label, errorText, classField, ...rest }) {
    return (
        <div id={name} className={classField}>
            <label className="block text-tiny font-medium" htmlFor={name}>
                {label}
            </label>
            <input name={name} {...rest} />
            {errorText && (
                <p className="absolute top-22 left-0 mt-0.5 text-xs text-error">
                    {errorText}
                </p>
            )}
        </div>
    );
}

export default TextInput;
