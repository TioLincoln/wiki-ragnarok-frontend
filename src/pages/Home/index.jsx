import React, { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import Link from '../../components/UI/Link';
import SearchBar from '../../components/SearchBar';
import LoadingSpinner from '../../components/LoadingSpinner';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Simulando dados paginados
  const data = [
    'Poring',
    'Drops',
    'Lunatic',
    'Fabre',
    'Pupa',
    'Mandragora',
    'Thief Bug',
    'Willow',
    'Creamy',
    'Roda Frog',
  ];

  // Calcular dados visíveis nesta página
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <Header />
      <div style={{ padding: '32px' }}>
        <h1>Wiki Ragnarok Online - Página Inicial</h1>

        <SearchBar onSearch={(term) => console.log('Pesquisando:', term)} />
        <br />

        {currentItems.map((name, index) => (
          <Card key={index}>
            <h2>{name}</h2>
            <p>Informações sobre o monstro {name}...</p>
          </Card>
        ))}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />

        <br />
        <Button>Exemplo de Botão</Button>
        <br /><br />
        <Link href="https://ratemyserver.net" target="_blank">
          Acessar RateMyServer
        </Link>
        <br /><br />
        <LoadingSpinner />
      </div>
      <Footer />
    </>
  );
};

export default Home;
