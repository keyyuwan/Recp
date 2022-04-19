import styled from "styled-components"

export const Container = styled.div`
  max-width: 1120px;
  height: calc(100% - 5rem);
  margin: 0 auto;
  padding: 0 2rem;
  padding-bottom: 2rem;

  img {
    width: 320px;
    height: 320px;

    @media (min-width: 768px) {
      width: 400px;
    }
  }
`

interface SectionProps {
  alternate?: boolean
}

export const Section = styled.section<SectionProps>`
  text-align: center;

  p {
    color: var(--gray-500);
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: ${({ alternate }) =>
      alternate ? "row-reverse" : "row"};
    align-items: center;
    justify-content: center;
    gap: 4rem;

    .description {
      max-width: 400px;
    }
  }
`
