import { useParams } from 'react-router-dom';
const DetalhesItem = () => {
  const { id } = useParams();
  return <h1>Detalhes do Item {id}</h1>;
};
export default DetalhesItem;
