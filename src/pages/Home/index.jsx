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
import Sidebar from '../../components/Sidebar';
import StatDisplay from '../../components/StatDisplay';
import DropTable from '../../components/DropTable';

const Home = () => {
  /*const [simulateError] = useState(true); // ⬅️ usado para simular erro

  if (simulateError) {
    throw new Error('Erro proposital para testar o ErrorBoundary');
  }*/

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const drops = [
    { item: 'Jellopy', chance: '55%' },
    { item: 'Knife', chance: '20%' },
    { item: 'Poring Card', chance: '0.02%' },
  ];

  return (
    <>
      <Header />

      <div style={{ display: 'flex', padding: '32px', gap: '32px' }}>
        <div style={{ flex: 1 }}>
          <h1>Wiki Ragnarok Online - Página Inicial</h1>

          <Input placeholder="Teste de input individual" />
          <br /><br />

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

          <Card>
            <h2>Status do Poring</h2>
            <StatDisplay label="HP" value="2.300" />
            <StatDisplay label="ATK" value="150~200" />
            <StatDisplay label="DEF" value="35" />
          </Card>

          <Card>
            <h2>Drops do Poring</h2>
            <DropTable drops={drops} />
          </Card>

          <br />
          <Button>Exemplo de Botão</Button>
          <br /><br />
          <Link href="https://ratemyserver.net" target="_blank">
            Acessar RateMyServer
          </Link>
          <br /><br />
          <LoadingSpinner />
        </div>

        <Sidebar>
          <label>
            <input type="checkbox" /> MVP
          </label>
          <br />
          <label>
            <input type="checkbox" /> Elemento Fogo
          </label>
        </Sidebar>
      </div>

      <Footer />
    </>
  );
};

export default Home;
