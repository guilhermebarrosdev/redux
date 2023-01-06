import '../src/App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Content from './components/Content';
import Header from './components/Header';
import { autoLogin } from './store/login';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin);
  }, [dispatch]);

  return (
    <div className='container'>
      <Header />
      <Content />
    </div>
  );
}

export default App;
