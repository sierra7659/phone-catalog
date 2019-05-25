import { FETCH_PHONES_PENDING, FETCH_PHONES_SUCCESS, FETCH_PHONES_ERROR } from '../actions/action'

const initialState = {
    pending: false,
    phones: [],
    error: null
}

export default function phonesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PHONES_PENDING:
            return {
                ...state,
                pending: true
            }
            case FETCH_PHONES_SUCCESS:
                return {
                    ...state,
                    pending: false,
                    phones: action.phones
                }
            case FETCH_PHONES_ERROR:
                return {
                    ...state,
                    pending: false,
                    error: action.error
                }
            default:
                return state;
    }
}

export const getPhones = state => state.phones;
export const getPhonesPending = state => state.pending;
export const getPhonesError = state => state.error;
