type ToastType = (typeof ToastTypeMap)[keyof typeof ToastTypeMap]

export type Toast = {
  id: string
  createdAt: string
  message: string
  type: ToastType
  duration: number
}

export type AddToastProps = {
  message: string
  type: ToastType
  duration?: number
  replaceAll?: boolean
}

type SetToastsProp = (state: Toasts) => Toasts

type Toasts = Record<string, Toast>

export interface ToastStore {
  // State
  toasts: Toasts

  // Methods
  setToasts(prop: SetToastsProp): void
}

const ToastTypeMap = {
  Warning: 'warning',
  Error: 'error',
  Info: 'info',
  Success: 'success',
  Loading: 'loading',
} as const

export const initialState: Toasts = {}
