import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Monstros from './pages/Monstros';
import DetalhesMonstro from './pages/Monstros/Detalhes';
import Itens from './pages/Itens';
import DetalhesItem from './pages/Itens/Detalhes';
import Mapas from './pages/Mapas';
import DetalhesMapa from './pages/Mapas/Detalhes';
import Guias from './pages/Guias';
import DetalhesGuia from './pages/Guias/Detalhes';
import Busca from './pages/Busca';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/monstros" element={<Monstros />} />
      <Route path="/monstros/:id" element={<DetalhesMonstro />} />
      <Route path="/itens" element={<Itens />} />
      <Route path="/itens/:id" element={<DetalhesItem />} />
      <Route path="/mapas" element={<Mapas />} />
      <Route path="/mapas/:id" element={<DetalhesMapa />} />
      <Route path="/guias" element={<Guias />} />
      <Route path="/guias/:id" element={<DetalhesGuia />} />
      <Route path="/busca" element={<Busca />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
