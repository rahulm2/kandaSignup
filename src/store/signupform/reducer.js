import {
    CHANGE_FIELD_VALUE,
    CHANGE_ERROR_VALUE,
    IS_FORM_VALID
} from '../../constants';

/**
 * Reducer to update state based on action type
 */
export default function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_FIELD_VALUE: {
            const currentFormData = { ...state.formData };
            currentFormData[payload?.name] = payload?.value;
            return { ...state, formData: currentFormData };
        }
        case CHANGE_ERROR_VALUE: {
            return { ...state, errors: payload };
        }
        case IS_FORM_VALID: {
            return { ...state, isFormValid: payload };
        }
        default:
            return state;
    }
}
