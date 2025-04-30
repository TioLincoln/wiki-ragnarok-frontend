import React from 'react';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import Link from '../../components/UI/Link';

const Home = () => {
  return (
    <div style={{ padding: '32px' }}>
      <h1>Wiki Ragnarok Online - Página Inicial</h1>
      <Input placeholder="Pesquisar..." />
      <br /><br />
      <Button>Buscar</Button>
      <br /><br />
      <Link href="https://ratemyserver.net" target="_blank">Abrir RateMyServer</Link>
    </div>
  );
};

export default Home;
