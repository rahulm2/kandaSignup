import React from 'react';
/**
 * Initial context to maintain global state
 */
export const FormStateContext = React.createContext();

/**
 * Initial context to dispatch actions
 */
export const FormDispatchContext = React.createContext();

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
            className: 'block relative my-1.5 mr-1.5 p-4 md:inline-block'
        },
        {
            fieldName: 'lastName',
            label: 'Last Name',
            type: 'text',
            className: 'block relative my-1.5 mr-1.5 p-4 md:inline-block'
        },
        {
            fieldName: 'email',
            label: 'Email',
            type: 'email',
            className: 'block relative my-1.5 mr-1.5 p-4'
        },
        {
            fieldName: 'password',
            label: 'Password',
            type: 'password',
            className: 'block  relative my-1.5 mr-1.5 p-4 md:inline-block'
        },
        {
            fieldName: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
            className: 'block relative my-1.5 mr-1.5 p-4 md:inline-block'
        }
    ]
};
