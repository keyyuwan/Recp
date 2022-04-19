import styled from "styled-components"

export const Container = styled.div`
  margin-top: 2rem;
  text-align: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .user-info {
    margin-top: 1rem;

    h1 {
      color: var(--red-500);
    }

    p {
      color: var(--gray-500);
    }
  }
`
