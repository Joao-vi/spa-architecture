import { createContext, ReactNode, useState, useContext } from 'react'
import { ModalStore } from './types'
import { initialState } from '.'

export const Context = createContext<ModalStore | undefined>(undefined)
export const ModalStoreContextProvider = (props: { children: ReactNode }) => {
  // Store
  const [modals, setModals] = useState(initialState)

  const value: ModalStore = {
    modals,
    setModals: (cbOrState) => setModals(cbOrState),
  }

  return <Context.Provider value={value}>{props.children}</Context.Provider>
}
export const useModalStoreContext = () => {
  const store = useContext(Context)
  if (!store) throw new Error('')

  return store
}
