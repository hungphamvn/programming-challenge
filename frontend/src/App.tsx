import React from 'react';
import { Container, GlobalStyle } from './components/GeneratorBoxStyled';
import { Main } from './containers/Main';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Main />
    </Container>
  );
}

export default App;
