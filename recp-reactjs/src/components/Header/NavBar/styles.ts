import styled from "styled-components"

interface NavContainerProps {
  isBackgroundRed: boolean
}

export const NavContainer = styled.nav<NavContainerProps>`
  margin-left: 4rem;

  a + a {
    margin-left: 2rem;
  }

  a.active {
    border-bottom: 1.5px solid
      ${({ isBackgroundRed }) =>
        isBackgroundRed ? "var(--gray-50)" : "var(--red-400)"};
  }

  @media (max-width: 767px) {
    display: none;
  }
`
