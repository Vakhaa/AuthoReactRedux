
const initialState = {
    currentUser: {},
    failed: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SIGNUP_FAIELD':
            return { ...state, failed: action.payload }
        case 'SIGNUP_SUCCES':
            return { ...state, failed: action.payload }
        case 'LOGIN_FAIELD':
            return { ...state, failed: action.payload }
        case 'LOGIN_SUCCES':
            return {...state, failed: action.payload }
        case 'LOGIN_USER':
            return {
                ...state, currentUser: action.payload
            }
        case 'LOGOUT_USER':
            return { ...state, currentUser: {} }
        case 'LOGOUT_SUCCES':
            return { ...state, failed: action.payload }
        default:
            return state;
    }
}