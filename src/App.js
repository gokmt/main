import logo from './logo.svg';
import './App.css';

function App() {

  const [texto, setTexto] = useState('');

  return (
    <div className="App">
      <form>
        <label htmlFor='input'>Escreva algo: </label>
        <input 
          id='input'
          value={texto}
          name="texto"
          onChange={(e) => setTexto(e.target.value)}
        />
      </form>

      <p>{texto}</p>
    </div>
  );
}

export default App;
