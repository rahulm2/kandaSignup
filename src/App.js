import React from 'react';

import SignUpFormContainer from './components/signupform/SignUpFormContainer';
import Header from './components/header';

function App() {
	return (
		<>
			<Header />
			<main className='flex justify-center'>
				<SignUpFormContainer />
			</main>
		</>
	);
}

export default App;
