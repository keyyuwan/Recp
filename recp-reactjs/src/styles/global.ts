import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;

        --gray-50: #f0f2f5;
        --gray-500: #808080;

        --red-400: rgb(220, 20, 60, 0.9);
        --red-500: #b00020;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--gray-50);
    }

    body, input, textarea, button, select {
        font: 500 1rem Poppins, sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    button {
        cursor: pointer;
        border: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 1.5rem;

        @media (min-width: 768px) {
            padding: 0;
        }
  }

    .modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--gray-50);
        padding: 2rem;
        /* position: relative; */
        border-radius: 0.25rem;

        h1 {
            font-size: 2rem;
        }
  }
`
