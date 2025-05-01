// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { GlobalStyle } from './theme/GlobalStyle';
import ErrorBoundary from './components/ErrorBoundary'; // Local Correto do ErrorBoundary

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary>
        <Router>
          <AppRoutes />
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
