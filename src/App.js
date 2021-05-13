
import './App.css';
import React from 'react';
import MockDataHolder from './mockData/MockDataHolder'
import { getTitleFull, getSearchedTitlePaged} from './mockData/mock-data-fetcher'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">

      <header className="App-NavBar">
        <Navbar></Navbar>
      </header>

      <div className='App-Main'>
      
        <header className="App-Header">
          <h1 style={{color: '#388e3c'}}>Header-container--</h1>
        </header>

        <div className="App-Content">
          <h1 style={{color: '#388e3c'}}>Content-container--</h1>
          {fetchMockData()}
          <MockDataHolder></MockDataHolder>
        </div>

      </div>

    </div>
  );
}

function fetchMockData(){
  getTitleFull()
  getSearchedTitlePaged()
}

export default App;
