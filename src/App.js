import React, { useReducer } from 'react';

import Form from './components/form/SignUpComponent';
import { DispatchContext, StateContext, initialState } from './store';
import reducer from './store/reducer';

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <div className="flex justify-center items-center h-screen">
                    <Form />
                </div>
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

export default App;
