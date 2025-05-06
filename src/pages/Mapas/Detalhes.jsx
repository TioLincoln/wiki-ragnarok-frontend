import { useParams } from 'react-router-dom';
const DetalhesMapa = () => {
  const { id } = useParams();
  return <h1>Detalhes do Mapa {id}</h1>;
};
export default DetalhesMapa;
