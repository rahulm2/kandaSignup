import React from 'react';

import SignUpContainer from './components/form/SignUpContainer';
import Header from './components/header';

function App() {
    return (
        <>
            <Header />
            <main className="flex justify-center">
                <SignUpContainer />
            </main>
        </>
    );
}

export default App;
