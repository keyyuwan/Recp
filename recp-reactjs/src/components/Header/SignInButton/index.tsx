import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react"
import { FaGoogle } from "react-icons/fa"
import { FiX } from "react-icons/fi"
import { Container } from "./styles"

interface SignInButtonProps {
  isBackgroundRed: boolean
}

export function SignInButton({ isBackgroundRed }: SignInButtonProps) {
  const { data: session } = useSession()

  return session ? (
    <Container
      isBackgroundRed={isBackgroundRed}
      onClick={() => signOut()}
    >
      <FaGoogle />
      {session.user.name}
      <FiX className="closeIcon" />
    </Container>
  ) : (
    <Container
      isBackgroundRed={isBackgroundRed}
      onClick={() => signIn("google")}
    >
      <FaGoogle />
      Sign In with Google
    </Container>
  )
}
