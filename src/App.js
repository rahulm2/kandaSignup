import React from 'react';

import Header from './components/header';
import SignUpFormContextProvider from './contexts/signup';

function App() {
	return (
		<>
			<Header />
			<main className='flex justify-center'>
				<SignUpFormContextProvider />
			</main>
		</>
	);
}

export default App;
