import React from 'react';
/**
 * Initial context to maintain global state
 */
export const StateContext = React.createContext();

/**
 * Initial context to dispatch actions
 */
export const DispatchContext = React.createContext();

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
  }
};
