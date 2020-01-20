import { combineReducers, Reducer } from 'redux'
import { all } from 'redux-saga/effects'

import { authenticationReducer, authenticationTypes } from '@frontend-redux/state/authentication'
import { productsReducer, productsTypes } from '@frontend-redux/state/products'
import { usersReducer, usersTypes } from '@frontend-redux/state/users'


import watchAuthenticationActions from './authentication/sagas'
import watchProductsActions from './products/sagas'
import watchUsersActions from './users/sagas'

export interface AppState {
    authentication: authenticationTypes.AuthenticationState
    users: usersTypes.UserState
    products: productsTypes.ProductsState
}

export function* rootSaga() {
    yield all([
        watchAuthenticationActions(),
        watchProductsActions(),
        watchUsersActions(),
    ])
}

export const rootReducer: Reducer = combineReducers({
    authentication: authenticationReducer.authenticationReducer,
    users: usersReducer.userReducer,
    products: productsReducer.productsReducer,
})

export const initState = {
    users: usersReducer.initialState,
    authentication: authenticationReducer.initialState,
    products: productsReducer.initialState
}
