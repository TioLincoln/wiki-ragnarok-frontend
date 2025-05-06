import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../../components/Card';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Link } from 'react-router-dom';

const Monstros = () => {
  const [monstros, setMonstros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/monstros')
      .then((res) => setMonstros(res.data))
      .catch((err) => console.error('Erro ao carregar monstros:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h1>Lista de Monstros</h1>
      {monstros.map((m) => (
        <Card key={m.id}>
          <h2>{m.nome}</h2>
          <p>HP: {m.hp}</p>
          <p>ATK: {m.atk}</p>
          <Link to={`/monstros/${m.id}`}>Ver detalhes</Link>
        </Card>
      ))}
    </div>
  );
};

export default Monstros;
