import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import Card from '../../components/Card';
import StatDisplay from '../../components/StatDisplay';
import DropTable from '../../components/DropTable';
import LoadingSpinner from '../../components/LoadingSpinner';

const DetalhesMonstro = () => {
  const { id } = useParams();
  const [monstro, setMonstro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/monstros/${id}`)
      .then((res) => setMonstro(res.data))
      .catch(() => setMonstro(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!monstro) return <p>Monstro não encontrado.</p>;

  return (
    <div>
      <h1>{monstro.nome}</h1>

      <Card>
        <h2>Status</h2>
        <StatDisplay label="HP" value={monstro.hp} />
        <StatDisplay label="ATK" value={monstro.atk} />
        <StatDisplay label="DEF" value={monstro.def || '—'} />
      </Card>

      <Card>
        <h2>Possíveis Drops</h2>
        <DropTable
          drops={
            monstro.drops || [
              { item: 'Jellopy', chance: '55%' },
              { item: 'Apple', chance: '15%' },
            ]
          }
        />
      </Card>
    </div>
  );
};

export default DetalhesMonstro;
