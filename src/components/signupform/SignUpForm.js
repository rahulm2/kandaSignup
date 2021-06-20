import React from 'react';

import Form from '../../ui-kit/form';
import TextInput from '../../ui-kit/formfield';

/**
 * Conditionally renders the form or success page.
 * Utilising render props pattern.
 * @method
 */
export default function SignUpForm(props) {
	return (
		<Form
			headerName='Sign Up'
			classFields='rounded-3xl shadow-none mt-5 bg-primary p-2 max-w-xl w-3/4 md:p-7 md:mt-24 md:w-auto md:shadow-lg md:p-6'
			handleSubmit={props.handleSubmit}
			handleOnChange={props.handleOnChange}
			formData={props.formData}
			errors={props.errors}
			render={(formData, errors, handleOnChange) =>
				props.formFields.map((formField) => {
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
	);
}
