import { useModal } from '../../store/modal'
import { Modal } from '../ui/modal/modal'

export const Modals = () => {
  const { modals, deleteModal } = useModal()
  const parsed = Object.entries(modals)

  return parsed.map(([id, modal]) => (
    <Modal key={id}>
      <p>{modal.title}</p>
      <button onClick={() => deleteModal(id)}>close</button>

      {modal.content}
    </Modal>
  ))
}
