import React, { useReducer } from 'react';
import {
    FormDispatchContext,
    FormStateContext,
    initialState
} from '../../store/form';
import reducer from '../../store/form/reducer';
import Form from './SignUpComponent';

export default function SignUpContainer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <FormStateContext.Provider value={state}>
            <FormDispatchContext.Provider value={dispatch}>
                <Form />
            </FormDispatchContext.Provider>
        </FormStateContext.Provider>
    );
}
