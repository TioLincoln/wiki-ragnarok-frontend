import { useParams } from 'react-router-dom';
const DetalhesGuia = () => {
  const { id } = useParams();
  return <h1>Detalhes do Guia {id}</h1>;
};
export default DetalhesGuia;
