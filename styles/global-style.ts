import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 2.2vw;
    /* scroll-behavior: smooth; */
  }

  @media screen and (min-width: 450px) {
    html {
      font-size: 10px;
    }
  }

  body {
    overflow-x: hidden;

    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    p:lang(ko), label:lang(ko) {
      font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    }
    
    p:lang(en){
      font-family: 'SF Pro Display', 'Roboto', sans-serif;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  input, textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;

    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 1.5rem;
    color: #000;
    caret-color: #0004f3;

    // textarea 크기 자동조절 막기
    resize: none;

    &::placeholder {
      color: #1a1a1a;
      opacity: 0.3;
    }

    // 자동완성 배경색 지우기
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s;
    }

    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
     -webkit-appearance: none;
     margin: 0;
   }
 }

 textarea:focus, input:focus {
    outline: none;
  }
  
`;

export default GlobalStyle;
