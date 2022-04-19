import styled from "styled-components"

export const Container = styled.div`
  max-width: 1120px;
  margin: 1rem auto 0;
  padding: 0 2rem;

  h1 {
    color: var(--red-500);
  }
`

export const CardsContainer = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template: 1fr / repeat(3, 320px);
    justify-content: center;
    gap: 2rem;
  }
`
