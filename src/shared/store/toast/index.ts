import { generateId } from '../../infra'
import { AddToastProps, Toast } from './types'
import { useToastStoreContext } from './provider'

export const useToast = () => {
  const {toasts,setToasts} = useToastStoreContext()

  // Use-cases || Business Logic
  const addToast = (props: AddToastProps) => {
    const toast: Toast = {
      id: generateId(),
      createdAt: new Date().toISOString(),
      message: props.message,
      type: props.type,
      duration: props.duration || 3000,
    }

    setToasts((state) =>
      props.replaceAll ? { [toast.id]: toast } : { ...state, [toast.id]: toast }
    )
  }

  const deleteToast = (id: string) => {
    setToasts((state) => {
      const newState = { ...state }
      delete newState[id]
      return newState
    })
  }

  return {
    toasts,
    addToast,
    deleteToast,
  }
}
