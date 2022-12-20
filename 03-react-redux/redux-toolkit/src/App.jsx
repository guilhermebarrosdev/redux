import { useDispatch, useSelector } from 'react-redux';
import { incrementar, reduzir } from './store/contador';

function App() {
  const state = useSelector((state) => state.total);
  console.log(state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Total: {state}</h1>
      <button onClick={() => dispatch(incrementar())}>incrementar</button>
      <button onClick={() => dispatch(reduzir())}>reduzir</button>
    </>
  );
}

export default App;
