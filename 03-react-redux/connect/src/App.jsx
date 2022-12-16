import { connect } from 'react-redux';

const incrementar = () => ({ type: 'incrementar' });

function App({ contador, incrementar }) {
  return (
    <>
      <h1>Total: {contador} </h1>
      <button onClick={incrementar}>incrementar</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return { contador: state };
};

const mapDispatchToProps = { incrementar };

export default connect(mapStateToProps, mapDispatchToProps)(App);
