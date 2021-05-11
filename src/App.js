import logo from './logo.svg';
import './App.css';
// import ShoppingCartRedux from './components/shopping-cart/ShoppingCartRedux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Movie Shop
        </a>
      </header>

      {/* <ShoppingCartRedux></ShoppingCartRedux> */}

    </div>
  );
}

export default App;
