import styled from "styled-components"

export const Container = styled.div`
  max-width: 1120px;
  height: calc(100vh - 5rem);
  margin: 1rem auto 0;
  padding: 0 2rem;

  h1 {
    color: var(--red-500);
  }
`

export const CardsContainer = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;

  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template: repeat(2, 1fr) / repeat(3, 320px);
    gap: 2rem;
  }
`
