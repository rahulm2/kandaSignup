import React, { useCallback, useContext } from 'react';

import ValidationSchema from '../../utils/validationschema/schema';
import {
    CHANGE_FIELD_VALUE,
    CHANGE_ERROR_VALUE,
    IS_FORM_VALID
} from '../../constants';
import { FormDispatchContext, FormStateContext } from '../../store/form';

/**
 * Renders the form for kanda
 * @method
 */
const Form = function (props) {
    const dispatch = useContext(FormDispatchContext);
    const { formData, errors } = useContext(FormStateContext);

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
                    dispatch({
                        type: IS_FORM_VALID,
                        payload: true
                    });
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
        <>
            <h2>Sign Up</h2>
            <form method="post" onSubmit={handleSubmit}>
                {props.render(formData, errors, handleOnChange)}
                <button
                    data-testid="submit-button"
                    className="btn-blue"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default Form;
