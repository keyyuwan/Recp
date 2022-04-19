import { useEffect, useState } from "react"
import Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai"
import { useDrawer } from "../../contexts/DrawerContext"
import { NavBar } from "./NavBar"
import { SignInButton } from "./SignInButton"
import { Drawer } from "../Drawer"
import { Container, DrawerButton } from "./styles"

export function Header() {
  const [isBackgroundRed, setIsBackgroundRed] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", addFixedPositon)

    return () => {
      window.removeEventListener("scroll", addFixedPositon)
    }
  })

  function addFixedPositon() {
    const scrollTop = window.scrollY

    scrollTop >= 100
      ? setIsBackgroundRed(true)
      : setIsBackgroundRed(false)
  }

  const { handleOpen } = useDrawer()

  return (
    <Container isBackgroundRed={isBackgroundRed}>
      <DrawerButton onClick={handleOpen}>
        <AiOutlineMenu size={24} />
      </DrawerButton>

      <Link href="/">
        <h1>RECP</h1>
      </Link>

      <NavBar isBackgroundRed={isBackgroundRed} />

      <SignInButton isBackgroundRed={isBackgroundRed} />
    </Container>
  )
}
