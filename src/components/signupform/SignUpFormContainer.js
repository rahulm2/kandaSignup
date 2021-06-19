import React, { useReducer } from 'react';
import {
	SignUpFormDispatchContext,
	SignUpFormStateContext,
	initialState
} from '../../store/signupform';
import reducer from '../../store/signupform/reducer';
import SignUpForm from './SignUpForm';

/**
 * Wraps the Signup form with context
 * @method
 */
export default function SignUpFormContainer() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<SignUpFormStateContext.Provider value={state}>
			<SignUpFormDispatchContext.Provider value={dispatch}>
				<SignUpForm />
			</SignUpFormDispatchContext.Provider>
		</SignUpFormStateContext.Provider>
	);
}
