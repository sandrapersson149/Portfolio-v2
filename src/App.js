import Home from './components/Home';
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Work Sans', sans-serif;
  }
`


function App() {
  return (
    <div >
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
