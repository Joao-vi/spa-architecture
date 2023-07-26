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
