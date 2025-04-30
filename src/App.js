// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { GlobalStyle } from './theme/GlobalStyle';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
