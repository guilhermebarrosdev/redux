const INCREMENTAR_TEMPO = 'alunos/INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'contador/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'contador/MODIFICAR_EMAIL';

export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (email) => ({
  type: MODIFICAR_EMAIL,
  payload: email,
});

const initialState = {
  nome: 'Guilherme Barros',
  email: 'wingui3@gmail.com',
  diasRestantes: 120,
};

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestantes++;
      break;
    case REDUZIR_TEMPO:
      state.diasRestantes--;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
  }
}, initialState);

export default reducer;
