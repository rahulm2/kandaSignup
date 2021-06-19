import React, { useContext, useCallback } from 'react';

import Form from '../../ui-kit/form';
import SignUpSuccessFul from '../successpage/SignUpSuccessFul';
import TextInput from '../../ui-kit/formfield/TextInput';
import {
	SignUpFormStateContext,
	SignUpFormDispatchContext
} from '../../store/signupform';
import ValidationSchema from '../../utils/validationschema/schema';
import {
	CHANGE_FIELD_VALUE,
	CHANGE_ERROR_VALUE,
	IS_FORM_VALID
} from '../../constants';

/**
 * Conditionally renders the form or success page.
 * Utilising render props pattern.
 * @method
 */
export default function SignUpForm() {
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
		<Form
			headerName='Sign Up'
			classFields='rounded-3xl shadow-none mt-5 bg-primary p-2 max-w-xl w-3/4 md:p-7 md:mt-24 md:w-auto md:shadow-lg md:p-6'
			handleSubmit={handleSubmit}
			handleOnChange={handleOnChange}
			formData={formData}
			errors={errors}
			render={(formData, errors, handleOnChange) =>
				formFields.map((formField) => {
					return (
						<TextInput
							key={formField.fieldName}
							classField={formField.className}
							label={formField.label}
							type={formField.type}
							name={formField.fieldName}
							value={formData[formField.fieldName]}
							onChange={handleOnChange}
							errorText={errors[formField.fieldName]}
							data-testid={formField.fieldName}
						/>
					);
				})
			}
		/>
	) : (
		<SignUpSuccessFul />
	);
}
