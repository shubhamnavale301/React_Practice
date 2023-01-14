import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <Hello />
      <Welcome />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World...!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me
        </a>
      </header>
    </div>
  );
}

export default App;
