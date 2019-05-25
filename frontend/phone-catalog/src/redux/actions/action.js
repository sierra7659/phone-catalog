
export const FETCH_PHONES_PENDING = 'FETCH_PHONES_PENDING';
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS';
export const FETCH_PHONES_ERROR = 'FETCH_PHONES_ERROR';

export function fetchPhonesPending() {
    return {
        type: FETCH_PHONES_PENDING
    }
}

export function fetchPhonesSuccess(phones) {
    return {
        type: FETCH_PHONES_SUCCESS,
        phones: phones
    }
}

export function fetchPhonesError(error) {
    return {
        type: FETCH_PHONES_ERROR,
        error: error
    }
}