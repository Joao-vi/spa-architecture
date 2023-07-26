import { useToast } from '../../store/toast'
import { Toast } from '../ui/toast/toast'

export const Toasts = () => {
  const { toasts, deleteToast } = useToast()
  const parsed = Object.entries(toasts)

  return parsed.map(([id, toast]) => (
    <Toast key={id}>
      <button onClick={() => deleteToast(id)}>close</button>

      {JSON.stringify(toast)}
    </Toast>
  ))
}
