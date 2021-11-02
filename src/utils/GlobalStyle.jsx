import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
  font-size: 62.5%;
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
}
`

export function GlobalStyle() {
  return <StyledGlobalStyle />
}
