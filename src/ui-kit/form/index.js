import React from 'react';

/**
 * Renders the form for kanda
 * @method
 */
const Form = function ({
	classFields,
	headerName = 'Form',
	formData,
	errors,
	render,
	handleOnChange,
	handleSubmit
}) {
	/**
	 * Event Handler for submit form
	 * @method
	 * @param {Object} event - event
	 */
	const handleFormSubmit = (event) => {
		handleSubmit(event);
	};

	/**
	 * On Change Handler for input change
	 * @method
	 * @param {Object} event - event
	 */
	const handleInputChange = (event) => {
		handleOnChange(event);
	};

	return (
		<div className={classFields}>
			<h2 className='mb-8'>{headerName}</h2>
			<form method='post' onSubmit={handleFormSubmit}>
				{render(formData, errors, handleInputChange)}
				<button
					data-testid='submit-button'
					className='btn-blue'
					type='submit'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
