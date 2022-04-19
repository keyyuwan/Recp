import { createContext, ReactNode, useContext, useState } from "react"

interface DrawerContextData {
  isOpen: boolean
  handleOpen: () => void
  handleClose: () => void
}

interface DrawerProviderProps {
  children: ReactNode
}

const DrawerContext = createContext({} as DrawerContextData)

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawer = () => useContext(DrawerContext)
