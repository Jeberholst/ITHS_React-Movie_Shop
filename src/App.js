import './App.css';
import React from 'react';
import MockDataHolder from './mockData/MockDataHolder'
import { getTitleFull, getSearchedTitlePaged} from './mockData/mock-data-fetcher'
import Navbar from './components/navbar/Navbar';
import  {
    Route,
    Switch,
    Link,
    BrowserRouter as Router
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CommentPage from "./pages/CommentPage";
import LoginPage from "./pages/LoginPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import GenrePage from "./pages/GenrePage";

import firebase from "firebase/app";
import "firebase/firestore";
import {firebaseConfig} from "./util/firebase";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router  basename={`${process.env.PUBLIC_URL}/`}>
      <div className="App">

        <header className="App-NavBar">
          <Navbar/>
        </header>
        <div className='App-Main'>
                <div>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/genre/:id" component={GenrePage} />
                        <Route exact path="/comment" component={CommentPage} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/profile" component={ProfilePage} />
                        <Route exact path="/search" component={SearchPage} />
                        <Route exact path="/shopping-cart" component={ShoppingCartPage} />
                    </Switch>
                </div>
        </div>
      </div>
    </Router>
  );
}


export default App;
