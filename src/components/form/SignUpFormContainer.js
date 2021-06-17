import React, { useContext } from 'react';

import Form from './SignUpComponent';
import SignUpSuccessFul from '../successpage/SignUpSuccessFul';
import TextInput from '../../ui-kit/FormField/TextInput';
import { FormStateContext } from '../../store/form';

/**
 * Conditionally renders the form or success page.
 * Utilising render props pattern.
 * @method
 */
export default function SignUpFormContainer() {
    const { isFormValid, formFields } = useContext(FormStateContext);
    return (
        <div className="rounded-3xl shadow-none mt-5 bg-primary p-2 max-w-xl w-3/4 md:p-7 md:mt-24 md:w-auto md:shadow-lg md:p-6">
            {!isFormValid ? (
                <Form
                    render={(formData, errors, handleOnChange) =>
                        formFields.map((formField) => {
                            return (
                                <TextInput
                                    key={formField.fieldName}
                                    classField={formField.className}
                                    label={formField.label}
                                    type={formField.type}
                                    name={formField.fieldName}
                                    value={formData.fieldName}
                                    onChange={handleOnChange}
                                    errorText={errors.fieldName}
                                    data-testid={formField.fieldName}
                                />
                            );
                        })
                    }
                />
            ) : (
                <SignUpSuccessFul />
            )}
        </div>
    );
}
