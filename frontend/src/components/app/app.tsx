import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Routes } from '@frontend/routes'
import { getRehydratedStore } from '@frontend/state/store'

export const App = () => {
    const { store, persistor } = getRehydratedStore()

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes />
            </PersistGate>
        </Provider>
    )
}
