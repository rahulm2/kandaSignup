import React, { useReducer } from 'react';
import {
    FormDispatchContext,
    FormStateContext,
    initialState
} from '../../store/form';
import reducer from '../../store/form/reducer';
import SignUpFormContainer from '../../components/form/SignUpFormContainer';

/**
 * Wraps the Signup form with context
 * @method
 */
export default function SignUpContainer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <FormStateContext.Provider value={state}>
            <FormDispatchContext.Provider value={dispatch}>
                <SignUpFormContainer />
            </FormDispatchContext.Provider>
        </FormStateContext.Provider>
    );
}
