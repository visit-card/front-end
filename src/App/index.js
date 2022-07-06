import React from 'react';
import Menu from './menu';
import Content from './content';

import { GlobalStyle } from '../global/style';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { themes } from '../theme';

import './style.css';

const App = () => {
  const theme = useSelector(state => state.theme);

  return <ThemeProvider theme={themes[theme]}>
    <GlobalStyle />
    <div className="App">
      <Menu />
      <Content />
    </div>
  </ThemeProvider>
};

export default App;
