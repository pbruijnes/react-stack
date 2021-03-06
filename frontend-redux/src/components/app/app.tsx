import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { ThemeContext } from '@frontend-redux/context'
import { Routes } from '@frontend-redux/routes'
import { getRehydratedStore } from '@frontend-redux/state/store'

export const App = () => {
    const { store, persistor } = getRehydratedStore()

    const [dark, setDark] = useState(false)
    const toggleTheme = () => {
        setDark(!dark)
    }

    const initialTheme = { isDark: dark, toggleTheme }

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeContext.Provider value={initialTheme}>
                    <Routes />
                </ThemeContext.Provider>
            </PersistGate>
        </Provider>
    )
}
