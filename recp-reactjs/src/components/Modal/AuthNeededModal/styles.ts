import styled from "styled-components"

export const Button = styled.button`
  height: 50px;
  width: 100%;
  border-radius: 0.25rem;

  background: var(--red-400);
  color: var(--gray-50);

  margin-top: 1rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
