import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  /* body width 이상 */
  @media (min-width: 1201px) {
    html {
      font-size: 10px;
    }

    body {
      overflow: hidden !important;
    }
  }

  /* body width */
  @media screen and (max-width: 1200px) {
    html {
      font-size: 0.833vw;
    }
  }

  @media screen and (max-width: 520px) {
    html {
      font-size: 2vw;
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
    /* ios 인풋 입력 */
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
