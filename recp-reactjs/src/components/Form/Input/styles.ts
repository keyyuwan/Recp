import styled from "styled-components"

interface ContainerProps {
  isIngredientInput: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${({ isIngredientInput }) =>
    isIngredientInput &&
    `
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    width: 100%;
  `}

  label {
    color: var(--red-400);
    font-weight: 700;
  }

  input,
  textarea {
    width: 100%;
    background: 0;
    border-radius: 8px;
    border: 2px solid var(--red-400);
    outline: 0;
  }

  input {
    height: 40px;
    padding: 0 1rem;
  }

  textarea {
    resize: none;
    padding: 1rem;
  }
`
