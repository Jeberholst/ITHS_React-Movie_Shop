
import './App.css';
import React from 'react';
import MockDataHolder from './mockData/MockDataHolder'
import { getTitleFull, getSearchedTitlePaged} from './mockData/mock-data-fetcher'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
      {/* {fetchMockData()}
      <MockDataHolder></MockDataHolder> */}
    </>
  );
}

function fetchMockData(){
  getTitleFull()
  getSearchedTitlePaged()
}

export default App;
