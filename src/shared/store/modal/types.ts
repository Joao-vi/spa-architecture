export type Modal = {
  title: string
  content: React.ReactNode
  isOpen: boolean
}

type Modals = Record<string, Modal>
type SetModalsProps = Modals | ((state: Modals) => Modals)

export interface ModalStore {
  // State
  modals: Modals

  // Methods
  setModals(modal: SetModalsProps): void
}

export type OpenModalProps = {
  replaceAll?: boolean
} & Modal
