import { ReactNode, createContext, useContext, useState } from 'react'
import { ToastStore, initialState } from './types'

type ToastStoreContextProvider = {
  children: ReactNode
}
const Context = createContext<ToastStore | undefined>(undefined)

export const ToastStoreContextProvider = (props: ToastStoreContextProvider) => {
  // Store (Global-React)
  const [toasts, setToasts] = useState(initialState)

  const value: ToastStore = {
    toasts,
    setToasts: (prop) => setToasts(prop),
  }

  return <Context.Provider value={value}>{props.children}</Context.Provider>
}

export const useToastStoreContext = () => {
  const store = useContext(Context)
  if (!store) throw new Error('')

  return store
}
