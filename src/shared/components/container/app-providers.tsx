import { ReactNode } from 'react'

import { ToastStoreContextProvider } from '../../store/toast/provider'
import { ModalStoreContextProvider } from '../../store/modal/provider'
import { ThemeStoreContextProvider } from '../../store/theme/provider'

type AppProvidersProps = {
  children: ReactNode
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeStoreContextProvider>
      <ToastStoreContextProvider>
        <ModalStoreContextProvider>{children}</ModalStoreContextProvider>
      </ToastStoreContextProvider>
    </ThemeStoreContextProvider>
  )
}
