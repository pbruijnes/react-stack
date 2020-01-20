import storage from 'redux-persist/lib/storage'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { doAuthenticateBasic } from '../../api'
import { productsReset } from '../products/actions'
import { usersReset, usersSetCurrent } from '../users/actions'
import { authenticateBasicFailure, authenticateBasicSuccess, authenticateReset } from './actions'
import * as authenticationConstants from './constants'
import { Credentials } from './types'

export function* authenticationBasic(action: { type: string; payload: Credentials }) {
    try {
        const {
            data: {
                access_token,
                refresh_token,
                initial: {
                    users: { current },
                },
            },
        } = yield call(doAuthenticateBasic, action.payload)

        // Used in token based authentication calls
        storage.setItem('access_token', access_token)

        yield put(authenticateBasicSuccess({ access_token, refresh_token }))
        yield put(usersSetCurrent(current))
    } catch (error) {
        yield put(authenticateBasicFailure(error.response.data))
    }
}

export function* authenticationLogout() {
    yield put(authenticateReset())
    yield put(usersReset())
    yield put(productsReset())
}

export default function* watchAuthenticationActions() {
    yield all([
        takeLatest(authenticationConstants.AUTHENTICATE_BASIC, authenticationBasic),
        takeLatest(authenticationConstants.AUTHENTICATE_LOGOUT, authenticationLogout),
    ])
}
