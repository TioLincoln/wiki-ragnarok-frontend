import React from 'react';

// ⬇️ importa os componentes corretamente
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import Link from '../../components/UI/Link';

const Home = () => {
  return (
    <>
      <Header />

      <div style={{ padding: '32px' }}>
        <h1>Wiki Ragnarok Online - Página Inicial</h1>

        <Input placeholder="Pesquisar..." />
        <br /><br />

        <Button>Buscar</Button>
        <br /><br />

        <Card>
          <h2>Exemplo de Card</h2>
          <p>Este é um conteúdo dentro de um card personalizado.</p>
        </Card>

        <Link href="https://ratemyserver.net" target="_blank">
          Acessar RateMyServer
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Home;
