import { useState } from 'react';
import Photos from './store/Components/Photos';

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      {toggle && <Photos />}
    </>
  );
}

export default App;
