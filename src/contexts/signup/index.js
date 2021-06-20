import React, { useReducer } from 'react';
import {
	SignUpFormDispatchContext,
	SignUpFormStateContext,
	initialState
} from '../../store/signupform';
import reducer from '../../store/signupform/reducer';
import SignUpFormContainer from '../../components/signupform';

/**
 * Wraps the Signup form with context
 * @method
 */
export default function SignUpFormContextProvider() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<SignUpFormStateContext.Provider value={state}>
			<SignUpFormDispatchContext.Provider value={dispatch}>
				<SignUpFormContainer />
			</SignUpFormDispatchContext.Provider>
		</SignUpFormStateContext.Provider>
	);
}
