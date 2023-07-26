import { ReactNode } from 'react'

type ModalProps = {
  children: ReactNode
}

export const Modal = (props: ModalProps) => {
  return <div>{props.children}</div>
}
