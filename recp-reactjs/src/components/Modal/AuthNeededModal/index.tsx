import { Modal } from "../index"
import { Button } from "./styles"

interface AuthNeededModalProps {
  isOpen: boolean
  handleClose: () => void
}

export function AuthNeededModal({
  isOpen,
  handleClose,
}: AuthNeededModalProps) {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <h1>You need to authenticate to access the Recipe</h1>
      <Button onClick={handleClose}>OK</Button>
    </Modal>
  )
}
