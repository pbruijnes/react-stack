import React from 'react'

interface ThemeContextProps {
    isDark: boolean
    toggleTheme: () => void
}
export const ThemeContext = React.createContext<ThemeContextProps>(null)
