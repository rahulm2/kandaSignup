import React, { useMemo } from 'react';

/**
 * Returns memoized form field
 * @method
 * @param {name, label, errorText, ...rest} - input event variables
 */
function TextInput({ name, label, errorText, value, ...rest }) {
    const child = useMemo(
        () => (
            <TextInputBase
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
function TextInputBase({ name, label, errorText, ...rest }) {
    return (
        <div id={name} className="my-1.5 mr-1.5">
            <label className="block text-tiny font-medium" htmlFor={name}>
                {label}
            </label>
            <input name={name} {...rest} />
            <i class="fa fa-instagram icon"></i>
            {errorText && (
                <p className="mt-0.5 text-xs text-error">{errorText}</p>
            )}
        </div>
    );
}

export default TextInput;
