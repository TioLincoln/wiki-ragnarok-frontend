import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Adicione mais rotas aqui futuramente */}
    </Routes>
  );
};

export default AppRoutes;
