import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import {AppAddd} from "./components/ItemListContainer"

function App() {
  const onAdd = (count) => {
    console.log (`La cantidad es: ${count}`)
    alert (`La cantidad es ${count}`)
} 
  return (
    <div className="App">
      <NavBar />
      <div className="App2">
        <AppAddd />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hola loco</h1>
          <p>
            Edita <code>src/App.jsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;