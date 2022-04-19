import { ReactElement } from "react"
import Router from "next/router"
import { useDrawer } from "../../../contexts/DrawerContext"
import { Container } from "./styles"

interface OptionProps {
  icon: ReactElement
  title: string
  href: string
}

export function Option({ icon, title, href }: OptionProps) {
  const { handleClose } = useDrawer()

  function handleRedirectUser() {
    Router.push(href)
    handleClose()
  }

  return (
    <Container onClick={handleRedirectUser}>
      {icon}
      <strong>{title}</strong>
    </Container>
  )
}
