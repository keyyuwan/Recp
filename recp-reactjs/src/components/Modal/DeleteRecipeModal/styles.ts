import styled from "styled-components"

export const ColoredText = styled.span`
  color: var(--red-500);
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  button {
    margin-top: 1.5rem;
    height: 50px;
    width: 100%;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &.cancel {
      background: transparent;
      color: var(--red-400);
      border: 1px solid var(--red-400);
    }

    &.delete {
      background: var(--red-400);
      color: var(--gray-50);
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`
