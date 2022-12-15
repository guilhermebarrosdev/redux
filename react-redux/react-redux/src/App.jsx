import { useDispatch, useSelector } from 'react-redux';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <>
      <h1>Total: {state}</h1>
      <button onClick={() => dispatch({ type: 'incrementar' })}>
        incrementar
      </button>
    </>
  );
}

export default App;
