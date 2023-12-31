import { useState } from 'react';
import './App.css'

function App() {
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    schooling: 'Médio',
    resume: '',
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  }
// Utilizando handleChange, quando o input email, por exemplo, sofrer alteração, os valores que não são do input email se manterão, enquanto o próprio será alterado!

  function resetForm() {
    setFormInfo({
      name: '',
      email: '',
      schooling: 'Médio',
      resume: '',
    });
  } // função para apagar os inputs.

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (terms) {
      resetForm();
      setTerms(false);
      setError(false);
      alert(
        `Nome: ${formInfo.name}\nemail: ${formInfo.email}\nEscolaridade:${formInfo.schooling}\nExperiências: ${formInfo.resume}`
      );
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
            value={ formInfo.name }
            onChange={ handleChange }
          />
        </label>
        <label>
          E-mail
          <input
            value={ formInfo.email }
            onChange={ handleChange }
          />
        </label>
        <label>
          Escolaridade
          <select
            value={ formInfo.schooling }
            onChange={ handleChange }
          >
            <option value="Médio">Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pós-graduação">Pós-graduação</option>
          </select>
        </label>
        <label>
          Resumo das experiências
          <textarea
            value={ formInfo.resume }
            onChange={ handleChange }
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