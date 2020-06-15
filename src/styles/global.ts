import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    overflow: hidden;
    background: #312e38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    color: #FFF;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
