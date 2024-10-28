import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          20241028 react oss class
        </p>
        <Component1 />
        <Component2 />
        <Component3 />
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
  );
}

export default App;
