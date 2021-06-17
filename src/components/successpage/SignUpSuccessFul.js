import React from 'react';

export default function SignUpSuccessFul() {
    return (
        <div className="grid justify-center items-center w-50">
            <h2>You're all set!</h2>
            <button
                data-testid="resubmit-button"
                className="btn-blue"
                type="submit"
            >
                Try Again
            </button>
        </div>
    );
}
