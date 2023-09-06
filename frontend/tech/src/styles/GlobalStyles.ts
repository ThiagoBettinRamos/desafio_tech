import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    --color-purple: #131325;
    --color-purple-2: #948BFC;
    --color-white: #FFFFFF;
    --color-red: #BA1910;
    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-purple);
    color: var(--color-white);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;