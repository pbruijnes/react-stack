import * as authenticationConstants from './constants'
import { authenticationActions, AuthenticationState } from './types'

export const initialState = {
    accessToken: '',
    refreshToken: '',
    isAuthenticated: false,
    isLoading: false,
    grantType: '',
    subdomain: '',
    domain: '',
    error: null,
}

export const authenticationReducer = (
    state: AuthenticationState = initialState,
    action: authenticationActions,
) => {
    switch (action.type) {
        case authenticationConstants.AUTHENTICATE_BASIC:
            return {
                ...state,
                error: null,
            }
        case authenticationConstants.AUTHENTICATE_BASIC_SUCCESS:
            const payload = action.payload
            const { refresh_token, access_token } = payload
            return {
                ...state,
                accessToken: access_token,
                refreshToken: refresh_token,
                isAuthenticated: true,
                isLoading: false,
                error: null,
            }
        case authenticationConstants.AUTHENTICATE_BASIC_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case authenticationConstants.AUTHENTICATE_RESET:
            return {
                ...initialState,
            }
        default:
            return state
    }
}
