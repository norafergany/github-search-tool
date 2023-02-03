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

  .stats {
    background-color: ${({theme}) => theme.highlightBackground};


  }


  .devfinder-brand {
    font-family: 'Space Mono Bold', sans-serif;
  }


  .avatar {
    max-width: 70%;
    height: auto;
    //max-width: 5em;
    //width: 7em;
    //height:7em;
    //max-height: 7em;
    //max-width:7em;
    //width: 7em; 
    //height: 7em; 
    //top: 0; 
    //left: 0;
    //width: 100%; 
    //height: 100%;
    //object-fit: cover;
    //height:60%;
  }


  #error-message {
    background-color: #fff;
    border:none;
    color:red;
  }
  
  .search-input {
    border:none;
  }
  
  #disable-search {
    opacity: 50%;
  }
  
  .search-button {
    background-color: #0079FF;
  }
  


`