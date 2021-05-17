import './App.css';
import React from 'react';
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
import SnackBarsRedux from './util/SnackBarsRedux';
import Firebaser, { initializeAuthListener } from './util/Firebaser'
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      {Firebaser()}
      {initializeAuthListener(dispatch)}
      <header className="App-NavBar">
        <Navbar/>
      </header>

      <div className='App-Main'>

        <header className="App-Header">
          <h1 style={{color: '#388e3c'}}>Header-container--</h1>
        </header>

          <Router basename={`${process.env.PUBLIC_URL}/`}>
              <ul style={{display: 'flex', flexDirection: 'column',  textAlign: "start" }}>
                  <li><Link to="/">LandingPage</Link></li>
                  <li><Link to="/genre">genre</Link></li>
                  <li><Link to="/comment">comment</Link></li>
                  <li><Link to="/login">login</Link></li>
                  <li><Link to="/profile">profile</Link></li>
                  <li><Link to="/search">search</Link></li>
                  <li><Link to="/shopping-cart">shopping-cart</Link></li>

              </ul>
              <div>
                  <Switch>
                      <Route exact path="/" component={LandingPage} />
                      <Route exact path="/genre" component={GenrePage} />
                      <Route exact path="/comment" component={CommentPage} />
                      <Route exact path="/login" component={LoginPage} />
                      <Route exact path="/profile" component={ProfilePage} />
                      <Route exact path="/search" component={SearchPage} />
                      <Route exact path="/shopping-cart" component={ShoppingCartPage} />

                  </Switch>
              </div>
          </Router>

      </div>
      
      <SnackBarsRedux/>

    </div>
  );
}

export default App;
