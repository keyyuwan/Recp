import styled, { keyframes } from "styled-components"

const slide = keyframes`
    from {
        transform: translateX(-100%);
    } to {
        transform: translateX(0);
    }
`

export const Container = styled.aside`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;

  width: 160px;
  padding: 1rem;

  background: var(--red-500);

  display: flex;
  flex-direction: column;

  animation: ${slide} 0.4s;

  .close-button {
    margin-left: auto;
    cursor: pointer;
  }
`

export const Nav = styled.nav`
  margin-top: 2rem;

  div + div {
    margin-top: 3rem;
  }
`
