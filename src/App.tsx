import { useState } from 'react';
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [schooling, setSchooling] = useState('Médio');
  const [resume, setResume] = useState('');
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);

  function resetForm() {
    setName('');
    setEmail('');
    setSchooling('');
    setResume('');
  } // função para apagar os inputs.

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (terms) {
      alert(
        `Nome: ${name}\nemail: ${email}\nEscolaridade:${schooling}\nExperiências: ${resume}`
      );
      resetForm();
    } else {
      setError(true);
    }
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Nome
          <input
            value={ name }
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label>
          E-mail
          <input
            value={ email }
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label>
          Escolaridade
          <select
            value={ schooling }
            onChange={({ target }) => setSchooling(target.value)}
          >
            <option value="Médio">Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pós-graduação">Pós-graduação</option>
          </select>
        </label>
        <label>
          Resumo das experiências
          <textarea
            value={ resume }
            onChange={({ target }) => setResume(target.value)}
          />
        </label>
        <label>
          Aceito os termos e condições!
          <input
            type="checkbok"
            checked={ terms }
            onChange={() => setTerms((prevTerms) => !prevTerms)}
          />

        </label>
        <button>Enviar</button>
      </form>
      {error && (
        <h4>Você precisa aceitar os termos e condições para enviar o currículo! 😅</h4>
      )}
    </>
  );
}

export default App;


// *  criar uma renderização condicional: se o formulário foi submetido sem o checkbox marcado, uma mensagem de erro será mostrada.
// é preciso realizar a validação no handleSubmit: se o checkbox estiver assinalado, ou seja, se o valor do estado terms for verdadeiro, o currículo será cadastrado normalmente. Em caso negativo, transformará o estado error em true, e a mensagem de erro será renderizada.