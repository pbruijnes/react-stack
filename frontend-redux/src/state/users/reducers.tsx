import * as usersConstants from './constants'
import { usersActions, UserState } from './types'

export const initialState = {
    current: null,
    isLoading: false,
    error: null,
}

export const userReducer = (state: UserState = initialState, action: usersActions) => {
    switch (action.type) {
        case usersConstants.USERS_SET_CURRENT:
            return {
                ...state,
                current: action.payload,
            }
        case usersConstants.USERS_RESET:
            return {
                ...initialState,
            }
        default:
            return state
    }
}
