import { useSession } from "next-auth/react"
import { ActiveLink } from "../ActiveLink"
import { NavContainer } from "./styles"

interface NavBarProps {
  isBackgroundRed: boolean
}

export function NavBar({ isBackgroundRed }: NavBarProps) {
  const { data: session } = useSession()

  return (
    <NavContainer isBackgroundRed={isBackgroundRed}>
      <ActiveLink activeClassName="active" href="/recipes">
        <a>Recipes</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/countries">
        <a>Countries</a>
      </ActiveLink>
      {session && (
        <ActiveLink activeClassName="active" href="/profile">
          <a>Profile</a>
        </ActiveLink>
      )}
    </NavContainer>
  )
}
