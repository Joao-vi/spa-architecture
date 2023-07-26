import { ReactNode } from 'react'

type ToastProps = {
  children: ReactNode
}

export const Toast = (props: ToastProps) => {
  return <div>{props.children}</div>
}
