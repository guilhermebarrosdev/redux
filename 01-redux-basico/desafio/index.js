import store from './store/configureStore.js';
import {
  incrementarTempo,
  reduzirTempo,
  modificarEmail,
} from './store/aluno.js';
import { completarAula, completarCurso, resetarCurso } from './store/aulas.js';

function render() {
  const { aluno, aulas } = store.getState();
  const dadosAulas = document.getElementById('aulas');
  const dadosAluno = document.getElementById('aluno');

  dadosAluno.textContent = `${aluno.nome} : ${aluno.email} : ${aluno.diasRestantes}`;
  dadosAulas.textContent = aulas.filter(
    (aula) => aula.completa === true
  ).length;
}
render();
store.subscribe(render);

store.dispatch(incrementarTempo());
store.dispatch(reduzirTempo());
store.dispatch(modificarEmail('wingui3@origamid.com'));
store.dispatch(completarAula(2));
store.dispatch(completarAula(3));
store.dispatch(completarCurso());
