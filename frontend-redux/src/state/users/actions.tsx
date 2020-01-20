import * as usersConstants from './constants'
import { usersActions } from './types'

export const usersSetCurrent = (payload): usersActions => ({
    type: usersConstants.USERS_SET_CURRENT,
    payload,
})

export const usersReset = (): usersActions => ({
    type: usersConstants.USERS_RESET,
})
