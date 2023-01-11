import { useDispatch, useSelector } from 'react-redux';
import { incrementar, reduzir } from '../store/contador';

const Contador = () => {
  const contador = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(reduzir())}>-</button>
      <button onClick={() => dispatch(incrementar())}>+</button>
      <p>{contador}</p>
    </div>
  );
};

export default Contador;
