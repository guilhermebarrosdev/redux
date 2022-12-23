import { useDispatch, useSelector } from 'react-redux';
import { incrementar, reduzir } from './store/contador';
import { abrir, fechar } from './store/modal';

function App() {
  const { contador, modal } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      {modal && <h1>Total: {contador}</h1>}
      <button onClick={() => dispatch(reduzir())}>reduzir</button>
      <button onClick={() => dispatch(incrementar())}>incrementar</button>
      <button onClick={() => dispatch(fechar())}>fechar</button>
      <button onClick={() => dispatch(abrir())}>abrir</button>
    </>
  );
}

export default App;
