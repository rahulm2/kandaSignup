import React from 'react';
/**
 * Initial context to maintain global state
 */
export const SignUpFormStateContext = React.createContext();

/**
 * Initial context to dispatch actions
 */
export const SignUpFormDispatchContext = React.createContext();

/**
 * Initial state of the application
 */
export const initialState = {
	formData: {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	},
	errors: {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	},
	formFields: [
		{
			fieldName: 'firstName',
			label: 'First Name',
			type: 'text',
			className: 'md:inline-block'
		},
		{
			fieldName: 'lastName',
			label: 'Last Name',
			type: 'text',
			className: ' md:inline-block'
		},
		{
			fieldName: 'email',
			label: 'Email',
			type: 'email'
		},
		{
			fieldName: 'password',
			label: 'Password',
			type: 'password',
			className: 'md:inline-block'
		},
		{
			fieldName: 'confirmPassword',
			label: 'Confirm Password',
			type: 'password',
			className: 'md:inline-block'
		}
	]
};
