import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import { darkTheme, lightTheme } from './theme/themes';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ErrorBoundary>
        <Router>
          <AppRoutes toggleTheme={toggleTheme} darkMode={darkMode} />
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
