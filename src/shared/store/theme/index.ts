import { useEffect } from 'react'

import { localStorage } from '../../infra'
import { useThemeStoreContext } from './provider'
import { Theme, ThemeMap } from './types'

export const initialState = () => {
  const persistedTheme = localStorage.get<Theme>('theme')

  return persistedTheme || ThemeMap.System
}

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

export const usePrefersColorScheme = () => {
  const { changeTheme } = useTheme()

  useEffect(() => {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    const setTheme = (e: MediaQueryListEvent | MediaQueryList): void =>
      changeTheme(e.matches ? ThemeMap.Dark : ThemeMap.Light)

    setTheme(colorScheme)
    colorScheme.addEventListener('change', setTheme)

    return () => {
      colorScheme.removeEventListener('change', setTheme)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
