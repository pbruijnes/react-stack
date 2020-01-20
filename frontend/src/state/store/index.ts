import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import { initState, rootReducer, rootSaga } from '@frontend/state'

const sagaMiddleware = createSagaMiddleware()

// Used in POC 2 - With initial state rehydrated from localstorage
const getRehydratedStore = (key = 'root') => {
    const persistConfig = {
        key,
        storage,
    }
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
    const persistor = persistStore(store)

    sagaMiddleware.run(rootSaga)

    return { store, persistor }
}

// Used in POC 1 - With initial state loaded from base.html.twig
const getSimpleStore = ({ initial }) => {
    const { users, authentication, products } = initial

    // Initial State
    const initialState = {
        users: { ...initState.users, ...users },
        authentication: { ...initState.authentication, ...authentication },
        products: { ...initState.products, ...products }
    }

    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)
    return store
}

export { getSimpleStore, getRehydratedStore }
