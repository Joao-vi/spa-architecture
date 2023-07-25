import { useState } from 'react'

type ModalProps = {
  title: string
  content: React.ReactNode
  isOpen: boolean
}

export interface DialogStore {
  // State
  modalStack: Map<string, ModalProps>

  // Methods
  setModalStack(modal: ModalProps): void
}

const initialState: DialogStore['modalStack'] = new Map()

const useDialog = () => {
  // Store
  const [modalStack, setModalStack] = useState(initialState)

  const openModal = (
    props: {
      replace?: boolean
    } & ModalProps
  ) => {
    if (props.replace) {
      setModalStack((state) => state.clear())
    }
  }
}
