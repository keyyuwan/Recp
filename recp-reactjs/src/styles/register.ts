import styled from "styled-components"

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;

  .content {
    margin-top: 2rem;

    h1 {
      color: var(--red-500);
    }

    img {
      margin-top: 1.5rem;
      width: 240px;
      height: 240px;
    }

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 1rem;

      img {
        margin-top: 2rem;
        width: 280px;
        height: 280px;
      }
    }

    @media (min-width: 1024px) {
      grid-template-columns: 480px 1fr;

      img {
        width: 320px;
        height: 320px;
      }
    }
  }
`

export const Form = styled.form`
  margin-top: 2rem;

  > div + div {
    margin-top: 1.5rem;
  }

  > header {
    margin: 3rem 0 1rem;
  }

  button.register {
    margin: 2rem 0;
    height: 50px;
    width: 100%;
    border-radius: 8px;

    font-weight: 700;

    background: var(--red-500);
    color: var(--gray-50);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const CountyField = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    color: var(--red-400);
    font-weight: 700;
  }

  select {
    background: 0;
    height: 40px;
    border-radius: 8px;
    border: 2px solid var(--red-400);
    outline: 0;
    padding: 0 1rem;
  }
`
