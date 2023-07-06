import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    margin: 8px;
    gap: 20px;
  }
`;

export default GlobalStyle;