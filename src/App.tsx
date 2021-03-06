import React, { FC } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

const App: FC = () => {
  return (
    <Main>
      <Header />
    </Main>
  );
};

export default App;
