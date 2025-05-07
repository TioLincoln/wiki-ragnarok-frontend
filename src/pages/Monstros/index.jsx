import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Card from '../../components/Card';
import LoadingSpinner from '../../components/LoadingSpinner';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
`;

const MonstroCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  overflow: hidden;
  padding: 16px;
  text-align: center;
  transition: background 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

const Nome = styled.h3`
  margin: 12px 0 6px;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const BotaoLink = styled(Link)`
  font-size: 0.9rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin: 0 auto 12px;
`;

const FiltroToggle = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 12px;

  &:hover {
    background: ${({ theme }) => theme.colors.border};
  }
`;

const FiltroContainer = styled.div`
  margin-top: 8px;
  display: ${({ visivel }) => (visivel ? 'block' : 'none')};
`;

const Sidebar = styled.div`
  width: 250px;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  padding-left: 16px;
`;

const PaginacaoTexto = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

const Monstros = () => {
  const [monstros, setMonstros] = useState([]);
  const [monstrosFiltrados, setMonstrosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState('');
  const [pagina, setPagina] = useState(1);
  const [hpMin, setHpMin] = useState('');
  const [hpMax, setHpMax] = useState('');
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const itensPorPagina = 6;

  useEffect(() => {
    setLoading(true);

    api
      .get('/monstros?_sort=id&_order=asc')
      .then((res) => {
        let resultado = res.data;

        // Filtros
        if (hpMin) resultado = resultado.filter((m) => m.hp >= Number(hpMin));
        if (hpMax) resultado = resultado.filter((m) => m.hp <= Number(hpMax));
        if (busca)
          resultado = resultado.filter((m) =>
            m.nome.toLowerCase().includes(busca.toLowerCase())
          );

        setMonstros(resultado);
        setPagina(1);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [busca, hpMin, hpMax]);

  useEffect(() => {
    const start = (pagina - 1) * itensPorPagina;
    const end = start + itensPorPagina;
    setMonstrosFiltrados(monstros.slice(start, end));
  }, [pagina, monstros]);

  const handleBusca = (valor) => {
    setBusca(valor);
  };

  const totalPaginas = Math.ceil(monstros.length / itensPorPagina);

  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ flex: 1 }}>
        <h1>Monstros</h1>
        <SearchBar onSearch={handleBusca} />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Grid>
              {monstrosFiltrados.length > 0 ? (
                monstrosFiltrados.map((m) => (
                  <MonstroCard key={m.id}>
                    <Image
                      src={`/monstros/${m.id}.png`}
                      alt={m.nome}
                      onError={(e) => (e.target.style.display = 'none')}
                    />
                    <Nome>{m.nome}</Nome>
                    <BotaoLink to={`/monstros/${m.id}`}>Ver detalhes</BotaoLink>
                  </MonstroCard>
                ))
              ) : (
                <p>Nenhum monstro encontrado.</p>
              )}
            </Grid>

            <Pagination
              currentPage={pagina}
              totalPages={totalPaginas || 1}
              onPageChange={setPagina}
              renderPageText={(current, total) => (
                <PaginacaoTexto>
                  Página {current} de {total}
                </PaginacaoTexto>
              )}
            />
          </>
        )}
      </div>

      <Sidebar>
        <h2>Filtros</h2>

        <FiltroToggle onClick={() => setMostrarFiltros(!mostrarFiltros)}>
          🧪 Filtro de HP
        </FiltroToggle>

        <FiltroContainer visivel={mostrarFiltros}>
          <label>HP Mínimo:</label>
          <input
            type="number"
            value={hpMin}
            onChange={(e) => setHpMin(e.target.value)}
            style={{ width: '100%', marginBottom: '8px' }}
          />
          <label>HP Máximo:</label>
          <input
            type="number"
            value={hpMax}
            onChange={(e) => setHpMax(e.target.value)}
            style={{ width: '100%' }}
          />
        </FiltroContainer>
      </Sidebar>
    </div>
  );
};

export default Monstros;
