import styled from "styled-components"

export const Container = styled.div`
  margin-top: 1rem;

  img {
    width: 100%;
    height: 240px;
    border-radius: 5px;

    @media (min-width: 768px) {
      height: 400px;
    }
  }

  h1 {
    margin-top: 0.5rem;
    color: var(--red-500);
  }

  p {
    color: var(--gray-500);
  }
`
