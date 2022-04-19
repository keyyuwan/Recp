import styled from "styled-components"

interface ContainerProps {
  recipeOwnerIsUserAuth: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 280px;
  border-radius: 5px;
  background: var(--red-500);
  color: var(--gray-50);

  transition: transform 0.5s;

  ${({ recipeOwnerIsUserAuth }) =>
    recipeOwnerIsUserAuth &&
    `
    position: relative;
  `}

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  img.food {
    width: 100%;
    height: 160px;
    border-radius: 5px 5px 0 0;
  }

  .card-info {
    padding: 1rem 1.5rem;

    .country {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        height: 24px;
        width: 32px;
      }
    }

    .user {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
      }
    }

    .user:hover,
    .country:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    & + & {
      margin: 0;
    }
  }
`

export const DeleteIconButton = styled.button`
  position: absolute;
  top: -0.7rem;
  right: -0.7rem;

  height: 36px;
  width: 36px;
  border-radius: 50%;

  background: var(--red-400);
  font-size: 0; // aligns the icon to the center

  svg {
    color: var(--gray-50);
  }
`
