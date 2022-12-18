import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    font-family: 'Space Mono', monospace;
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  .search-results {
    background: ${({theme}) => theme.searchText};
  }

  .search-box {
    background: ${({theme}) => theme.searchText};

  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.text};

  }

  h1 {
    font-family: 'Space Mono Bold', monospace;
  }

  .theme-button {
    border: none;
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
  }

  .info-icon {
    color: ${({theme}) => theme.icon};

  }


  .devfinder-brand {
    font-family: 'Space Mono Bold', sans-serif;
  }


  .avatar {
    max-width: 10rem;
  }


  #error-message {
    background-color: #fff;
    border:none;
  }
  
  .search-input {
    border:none;
  }

`