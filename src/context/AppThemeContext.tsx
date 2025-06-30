import { createContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/styled'
import type { AppThemeContextProps } from '@/types/appThemeContext';

// eslint-disable-next-line react-refresh/only-export-components
export const AppThemeContext = createContext<AppThemeContextProps | undefined>(undefined);
export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
    const savedTheme =  localStorage.getItem('theme')
    const [appTheme, setAppTheme] = useState(savedTheme ?? 'light')

    const toggleTheme = () =>{
        setAppTheme((prevTheme) => (prevTheme === 'light' ? 'dark' :'light'))
    }

    useEffect(()=>{
        localStorage.setItem('theme', appTheme)
    })

    return (
        <AppThemeContext value={{appTheme, toggleTheme}}>
            <ThemeProvider theme={appTheme === 'light' ?  lightTheme : darkTheme  }>
                {children}
            </ThemeProvider>
        </AppThemeContext>
    )
}