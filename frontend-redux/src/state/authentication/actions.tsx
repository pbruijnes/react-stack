import * as authenticationConstants from './constants'
import { Authentication, authenticationActions, AuthenticationError, Credentials } from './types'

export const authenticateBasic = (payload: Credentials): authenticationActions => ({
    type: authenticationConstants.AUTHENTICATE_BASIC,
    payload,
})

export const authenticateBasicFailure = (payload: AuthenticationError): authenticationActions => ({
    type: authenticationConstants.AUTHENTICATE_BASIC_FAILURE,
    payload,
})

export const authenticateBasicSuccess = (payload: Authentication): authenticationActions => ({
    type: authenticationConstants.AUTHENTICATE_BASIC_SUCCESS,
    payload,
})

export const authenticateLogout = (): authenticationActions => ({
    type: authenticationConstants.AUTHENTICATE_LOGOUT,
})

export const authenticateReset = (): authenticationActions => ({
    type: authenticationConstants.AUTHENTICATE_RESET,
})

export const authenticateSetToken = (payload: string): authenticationActions => ({
    type: authenticationConstants.AUTHENTICATE_SET_TOKEN,
    payload,
})

export const authenticateRefreshToken = (): authenticationActions => ({
    type: authenticationConstants.AUTHENTICATE_REFRESH_TOKEN,
})

export const authenticateRefreshTokenFailure = (
    payload: AuthenticationError,
): authenticationActions => ({
    type: authenticationConstants.AUTHENTICATE_REFRESH_TOKEN_FAILURE,
    payload,
})
