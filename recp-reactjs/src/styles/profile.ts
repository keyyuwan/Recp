import styled from "styled-components"

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem 2rem;
`

export const RegisterRecipeButton = styled.button`
  position: fixed;
  right: 80px;
  bottom: 80px;
  border-radius: 9999px;
  height: 50px;
  padding: 0 1.5rem;

  background: var(--red-500);
  color: var(--gray-50);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  &:hover {
    transform: translateY(-15%);
  }

  svg {
    margin-right: 1rem;
  }
`
