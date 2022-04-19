import styled from "styled-components"

export const Container = styled.div`
  padding: 0.5rem;
  border-radius: 5px;

  width: 160px;
  height: 160px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  transition: transform 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  img {
    width: 120px;
    height: 120px;
  }

  @media (min-width: 768px) {
    width: 280px;
    height: 280px;
    padding-bottom: 1rem;

    img {
      width: 240px;
      height: 180px;
    }
  }
`
