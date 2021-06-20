import React, { useContext, useCallback } from 'react';

import SignUpForm from './SignUpForm';
import SignUpSuccessFul from '../successpage';
import {
	SignUpFormStateContext,
	SignUpFormDispatchContext
} from '../../store/signupform';
import ValidationSchema from '../../utils/validationschema/signupform';
import {
	CHANGE_FIELD_VALUE,
	CHANGE_ERROR_VALUE,
	IS_FORM_VALID
} from '../../constants';

/**
 * Wraps the Signup form with context
 * @method
 */
export function SignUpFormContainer() {
	const { isFormValid, formFields, formData, errors } = useContext(
		SignUpFormStateContext
	);
	const dispatch = useContext(SignUpFormDispatchContext);

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
	return !isFormValid ? (
		<SignUpForm
			handleSubmit={handleSubmit}
			handleOnChange={handleOnChange}
			formFields={formFields}
			formData={formData}
			errors={errors}
		/>
	) : (
		<SignUpSuccessFul />
	);
}
