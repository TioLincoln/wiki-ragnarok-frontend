import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ toggleTheme, darkMode }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <div style={{ padding: '32px' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
