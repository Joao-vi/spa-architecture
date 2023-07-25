import { localStorage } from '../../infra'
import { useThemeStoreContext } from './provider'

export type Theme = (typeof ThemeMap)[keyof typeof ThemeMap]

export interface ThemeStore {
  // State
  theme: Theme

  // Methods
  setTheme(theme: Theme): void
}

export const ThemeMap = {
  Light: 'light',
  Dark: 'dark',
  System: 'system',
} as const

export const initialState: ThemeStore['theme'] = ThemeMap.System

export const useTheme = () => {
  const { theme, setTheme } = useThemeStoreContext()

  const changeTheme = (theme: Theme) => {
    setTheme(theme)
    localStorage.set('theme', theme)
  }

  return {
    theme,
    changeTheme,
  }
}
