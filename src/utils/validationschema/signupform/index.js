import * as yup from 'yup';

/**
 * Validation schema for the signup form
 */
let ValidationSchema = yup.object().shape({
	firstName: yup.string().required('First Name is required.'),
	lastName: yup.string().required('Last Name is required.'),
	email: yup
		.string()
		.email('Email must be valid.')
		.required('Email is required.'),
	password: yup.string().required('Please enter your Password.'),
	confirmPassword: yup
		.string()
		.required('Please confirm your Password.')
		.when('password', {
			is: (password) => (password && password.length > 0 ? true : false),
			then: yup
				.string()
				.oneOf([yup.ref('password')], "Password doesn't match")
		})
});

export default ValidationSchema;
