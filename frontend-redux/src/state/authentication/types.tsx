import * as authenticationConstants from './constants'

// @todo fix response with underscore
export interface Authentication {
    access_token: string
    refresh_token: string
}

export enum GrantType {
    Password = 'password',
}
export interface Credentials {
    username: string
    password: string
    domain: string
    subdomain: string
    grantType: GrantType.Password
}

export interface AuthenticationError {
    error_description: string
    error: string
}

export interface AuthenticationState {
    accessToken: string
    refreshToken: string
    isAuthenticated: boolean
    isLoading: boolean
    grantType: string
    subdomain: string
    domain: string
    error: AuthenticationError | null
}

export type authenticationActions =
    | {
          type: typeof authenticationConstants.AUTHENTICATE_BASIC
          payload: Credentials
      }
    | {
          type: typeof authenticationConstants.AUTHENTICATE_BASIC_SUCCESS
          payload: Authentication
      }
    | {
          type: typeof authenticationConstants.AUTHENTICATE_BASIC_FAILURE
          payload: AuthenticationError
      }
    | { type: typeof authenticationConstants.AUTHENTICATE_LOGOUT }
    | { type: typeof authenticationConstants.AUTHENTICATE_REFRESH_TOKEN }
    | { type: typeof authenticationConstants.AUTHENTICATE_RESET }
    | {
          type: typeof authenticationConstants.AUTHENTICATE_REFRESH_TOKEN_FAILURE
          payload: AuthenticationError
      }
    | { type: typeof authenticationConstants.AUTHENTICATE_SET_TOKEN; payload: string }
