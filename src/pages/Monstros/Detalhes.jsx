import { useParams } from 'react-router-dom';
const DetalhesMonstro = () => {
  const { id } = useParams();
  return <h1>Detalhes do Monstro {id}</h1>;
};
export default DetalhesMonstro;
