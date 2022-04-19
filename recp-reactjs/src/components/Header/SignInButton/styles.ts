import styled from "styled-components"

interface ContainerProps {
  isBackgroundRed: boolean
}

export const Container = styled.button<ContainerProps>`
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ isBackgroundRed }) =>
    isBackgroundRed ? "var(--gray-50)" : "var(--red-500)"};
  color: ${({ isBackgroundRed }) =>
    isBackgroundRed ? "var(--red-500)" : "var(--gray-50)"};

  height: 3rem;
  border-radius: 3rem;
  padding: 0 1.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    height: 20px;
    width: 20px;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  svg.closeIcon {
    margin-left: 1rem;
  }
`
