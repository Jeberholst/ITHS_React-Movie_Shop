import logo from './logo.svg';
import './App.css';
import React from 'react';
import MockDataHolder from './mockData/MockDataHolder'
import { getTitleFull, getSearchedTitlePaged} from './mockData/mock-data-fetcher'

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

      {/* {fetchMockData()}
      <MockDataHolder></MockDataHolder> */}


    </div>
  );
}

function fetchMockData(){
  getTitleFull()
  getSearchedTitlePaged()
}

export default App;
