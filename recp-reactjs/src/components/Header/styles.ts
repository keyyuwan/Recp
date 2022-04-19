import styled from "styled-components"

interface ContainerProps {
  isBackgroundRed: boolean
}

export const Container = styled.header<ContainerProps>`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 5;

  transition: background 0.2s;

  ${({ isBackgroundRed }) =>
    isBackgroundRed &&
    `
     background: var(--red-500);
     opacity: 0.9;
     color: var(--gray-50);
     border-radius: 0 0 5px 5px;
  `}

  h1 {
    font-size: 2rem;
    cursor: pointer;
  }
`

export const DrawerButton = styled.div`
  cursor: pointer;

  svg {
    margin-right: 1.5rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
