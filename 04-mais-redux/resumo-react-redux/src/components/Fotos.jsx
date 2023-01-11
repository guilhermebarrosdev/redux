import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFotos, selectOverFiveYears } from '../store/fotos';

const Fotos = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.fotos);
  const fotos = useSelector(selectOverFiveYears);

  useEffect(() => {
    dispatch(fetchFotos(1));
  }, [dispatch]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (fotos)
    return (
      <ul>
        {fotos.map((foto) => (
          <li key={foto.id}>
            {foto.title} | {foto.idade}
          </li>
        ))}
      </ul>
    );
  else return null;
};

export default Fotos;
