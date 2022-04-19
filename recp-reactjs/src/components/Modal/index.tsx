import { ReactNode, useEffect } from "react"
import ReactModal from "react-modal"

interface ModalProps {
  isOpen: boolean
  handleClose: () => void
  children: ReactNode
}

export function Modal({ isOpen, handleClose, children }: ModalProps) {
  useEffect(() => {
    ReactModal.setAppElement("body")
  }, [])

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      {children}
    </ReactModal>
  )
}
