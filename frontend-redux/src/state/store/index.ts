import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import { rootReducer, rootSaga } from '@frontend-redux/state'

const sagaMiddleware = createSagaMiddleware()

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

export { getRehydratedStore }
