import { ModalStore, OpenModalProps } from './types'
import { generateId } from '../../infra'
import { useModalStoreContext } from './provider'

export const initialState: ModalStore['modals'] = {}

export const useModal = () => {
  const { modals, setModals } = useModalStoreContext()

  const addModal = ({ replaceAll = false, ...rest }: OpenModalProps) => {
    setModals((state) => {
      if (replaceAll) {
        return { [generateId()]: rest }
      }

      return {
        ...state,
        [generateId()]: rest,
      }
    })
  }

  const deleteModal = (id: string) => {
    setModals((state) => {
      const newState = { ...state }
      delete newState[id]

      return newState
    })
  }

  const deleteAllModals = () => {
    setModals({})
  }

  return {
    modals,
    addModal,
    deleteModal,
    deleteAllModals,
  }
}
