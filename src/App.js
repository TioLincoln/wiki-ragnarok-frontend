import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import { darkTheme, lightTheme } from './theme/themes';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';


const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <GlobalStyle />
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <AppRoutes toggleTheme={toggleTheme} darkMode={darkMode} />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  </ThemeProvider>
  );
};

export default App;
