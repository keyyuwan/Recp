import styled from "styled-components"

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem 2rem;

  .country {
    margin-top: 2rem;
    text-align: center;

    h1 {
      color: var(--red-500);
    }

    @media (min-width: 768px) {
      img {
        width: 430px;
        height: 260px;
      }
    }
  }
`

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
