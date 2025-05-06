import { useSearchParams } from 'react-router-dom';
const Busca = () => {
  const [params] = useSearchParams();
  const query = params.get('q');
  return <h1>Resultados da busca: {query}</h1>;
};
export default Busca;
