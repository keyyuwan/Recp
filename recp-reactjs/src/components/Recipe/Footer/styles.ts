import styled from "styled-components"

export const Container = styled.footer`
  margin-top: 4rem;

  .wrapper {
    text-align: center;
    margin-top: 2rem;

    img {
      margin-top: 1rem;
      width: 80px;
      height: 80px;
    }

    img.author-image {
      border-radius: 50%;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .link-children {
      cursor: pointer;

      p:hover {
        text-decoration: underline;
      }
    }
  }
`
