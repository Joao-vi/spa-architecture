import { ReactNode, createContext, useContext, useState } from 'react'

import { ThemeStore, Theme } from './types'
import { initialState } from '.'

interface ThemeStoreContextProviderProps {
  children: ReactNode
}

const Context = createContext<ThemeStore | undefined>(undefined)

const ThemeStoreContextProvider = (props: ThemeStoreContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialState)

  const value: ThemeStore = {
    theme,
    setTheme: (theme) => setTheme(theme),
  }

  return <Context.Provider value={value}>{props.children}</Context.Provider>
}

const useThemeStoreContext = () => {
  const ctx = useContext(Context)
  if (!ctx) throw new Error('')

  return ctx
}

export { ThemeStoreContextProvider, useThemeStoreContext }
