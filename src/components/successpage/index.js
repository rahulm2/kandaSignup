import React from 'react';

export default function SignUpSuccessFul() {
	return (
		<div className='grid justify-center items-center w-50 rounded-3xl shadow-none mt-5 bg-primary p-2 max-w-xl md:p-7 md:mt-24 md:w-auto md:shadow-lg md:p-6 '>
			<h2>You're all set!</h2>
			<button
				data-testid='resubmit-button'
				className='btn-blue'
				type='submit'
			>
				Try Again
			</button>
		</div>
	);
}
