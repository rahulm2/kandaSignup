import React, { useCallback, useContext, useState } from 'react';
import TextInput from '../../ui-kit/FormField/TextInput';
import ValidationSchema from '../../utils/validationschema/schema';
import { CHANGE_FIELD_VALUE, CHANGE_ERROR_VALUE } from '../../constants';
import { FormDispatchContext, FormStateContext } from '../../store/form';

/**
 * Renders the form for kanda
 * @method
 */
const Form = function () {
    const dispatch = useContext(FormDispatchContext);
    const { formData, errors, formFields } = useContext(FormStateContext);

    const [formSuccessful, setFormSuccessful] = useState(false);

    /**
     * Event Handler for submit form
     * @async
     * @method
     * @param {Object} event - event
     */
    const handleSubmit = useCallback(
        async (event) => {
            event.preventDefault();
            try {
                const isValid = await ValidationSchema.validate(formData, {
                    abortEarly: false
                });
                if (isValid) {
                    setFormSuccessful(true);
                }
            } catch (err) {
                const errors = {};
                err.inner.forEach((error) => {
                    errors[error.path] = error.message;
                });
                dispatch({
                    type: CHANGE_ERROR_VALUE,
                    payload: errors
                });
            }
        },
        [formData, dispatch]
    );

    /**
     * On Change Handler for input change
     * @method
     * @param {Object} event - event
     */
    const handleOnChange = useCallback(
        (event) => {
            dispatch({
                type: CHANGE_FIELD_VALUE,
                payload: { name: event.target.name, value: event.target.value }
            });
        },
        [dispatch]
    );

    return (
        <div className="rounded-3xl shadow-none mt-5 bg-primary p-2 max-w-xl w-3/4 md:p-7 md:mt-24 md:w-auto md:shadow-lg md:p-6">
            {!formSuccessful ? (
                <>
                    <h2>Sign Up</h2>
                    <form method="post" onSubmit={handleSubmit}>
                        {formFields.map((formField) => {
                            return (
                                <TextInput
                                    key={formField.fieldName}
                                    classField={formField.className}
                                    label={formField.label}
                                    type={formField.type}
                                    name={formField.fieldName}
                                    value={formData.fieldName}
                                    onChange={handleOnChange}
                                    errorText={errors.fieldName}
                                    data-testid={formField.fieldName}
                                />
                            );
                        })}
                        <button
                            data-testid="submit-button"
                            className="btn-blue"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </>
            ) : (
                <div className="grid justify-center items-center w-50">
                    <h2>You're all set!</h2>
                    <button
                        data-testid="resubmit-button"
                        className="btn-blue"
                        type="submit"
                    >
                        Try Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default Form;
