import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light;
  color: black;
  background-color: white;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   
}
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}
`;