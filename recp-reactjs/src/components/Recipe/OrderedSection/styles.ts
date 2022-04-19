import styled from "styled-components"

export const Container = styled.div`
  margin-top: 2rem;

  h2 {
    font-size: 2rem;
    color: var(--red-400);
  }

  ol {
    margin-top: 1rem;
    padding-left: 1rem;
    list-style: none;
    counter-reset: li;

    li {
      font-size: 1.5rem;
      line-height: 2.5rem;

      &.prep-step {
        padding-bottom: 1.2rem;
        margin-bottom: 1.2rem;
        border-bottom: 1px solid var(--gray-500);

        &:last-child {
          border-bottom: none;
        }
      }
    }

    li::before {
      content: counter(li);
      color: var(--red-400);
      display: inline-block;
      width: 1em;
      margin: 0 1rem -1em 0;
      counter-increment: li;
    }
  }
`
