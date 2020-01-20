import * as usersConstants from './constants'

export interface User {
    id: number | null
    firstname: string
    lastname: string
    username: string
}

export interface UserState {
    current: User | null
    isLoading: boolean
    error: UserError | null
}

export interface UserError {
    error_description: string
    error: string
}

export type usersActions =
    | {
          type: typeof usersConstants.USERS_SET_CURRENT
          payload: User
      }
    | {
          type: typeof usersConstants.USERS_RESET
      }
