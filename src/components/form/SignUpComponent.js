import React, { useCallback, useContext, useState } from 'react';
import FormField from '../../ui-kit/FormField/TextInput';
import ValidationSchema from '../../utils/validationschema/schema';
import { CHANGE_FIELD_VALUE, CHANGE_ERROR_VALUE } from '../../constants';
import { DispatchContext, StateContext } from '../../utils/store';
import './SignUpComponent.scss';

/**
 * Renders the form for kanda
 * @method
 */
const Form = function () {
  const dispatch = useContext(DispatchContext);
  const { formData, errors } = useContext(StateContext);
  const [formSuccessful, setFormSuccessful] = useState(false);

  /**
   * Event Handler for submit form
   * @async
   * @method
   * @param {String} event - event
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
   * @param {String} event - event
   */
  const handleOnChange = (event) => {
    dispatch({
      type: CHANGE_FIELD_VALUE,
      payload: { name: event.target.name, value: event.target.value }
    });
  };

  return (
    <div className="main-container">
      {!formSuccessful ? (
        <>
          <h2>Kanda Exam</h2>
          <form method="post" onSubmit={handleSubmit}>
            <div className="display-inline-block">
              <FormField
                className="firstName"
                label="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleOnChange}
                errorText={errors.firstName}
                data-testid="firstName"
              />
              <FormField
                className="lastName"
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleOnChange}
                errorText={errors.lastName}
                data-testid="lastName"
              />
            </div>
            <FormField
              className="email"
              label="Email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              errorText={errors.email}
              data-testid="email"
            />
            <div className="display-inline-block">
              <FormField
                className="password"
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleOnChange}
                errorText={errors.password}
                data-testid="password"
              />
              <FormField
                className="confirmPassword"
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleOnChange}
                errorText={errors.confirmPassword}
                data-testid="confPassword"
              />
            </div>
            <button
              data-testid="submit-button"
              className="submit-button"
              type="submit"
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <h1> Thank You! </h1>
      )}
    </div>
  );
};

export default Form;