import styled from "styled-components"

export const Recipes = styled.div`
  margin-top: 4rem;

  h2.title {
    font-size: 2rem;
    color: var(--red-400);
  }

  .recipes-cards-container {
    margin-top: 2rem;

    @media (min-width: 768px) {
      display: grid;
      grid-template: 1fr / repeat(3, 320px);
      justify-content: center;
      gap: 2rem;
    }
  }
`
