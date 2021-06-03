import './Navbar.css';
import React from 'react'
import dummyLogo from '../../img/Logo/logo_planet_movie.webp'
import { useSelector, useDispatch } from 'react-redux'
import { toggelMenu, setSearchResults, toggelSearch, fetchSearchResult } from '../../redux/features/navbarSlice'
import  { actions }  from '../../redux/features/movieSection'
import  { Link } from "react-router-dom";
import ShoppingCartBadge from './../shopping-cart/ShoppingCartBadge'



const CATEGORIES = {
        default: "fas fa-exclamation-triangle",
        shoppingcart: "fa-shopping-basket",
        payment:"far fa-credit-card",
        action: "fas fa-fighter-jet",
        comedy:"fas fa-grin-beam",
        drama:"fas fa-theater-masks",
        fantasy:"fas fa-dragon",
        horror:"fas fa-ghost",
        mystery:"fas fa-user-secret",
        romance:"fas fa-grin-hearts",
        thriller:"fas fa-flushed",
        western:"fas fa-hat-cowboy"
}

const ResultItem = ({movie}) => {
  let dispatch = useDispatch()
  function setSingelMovie(movie){
    //set movieSection 
    dispatch(actions.setSelectedMovie(movie))
    //toggel menu on nav.
    dispatch(toggelSearch())
  }
  const posterPre = "https://image.tmdb.org/t/p/w300/"
  return(
    <Link to={`/movie/${movie.id}`} onClick= {() => setSingelMovie(movie)} className="result-item__cont">
      <img className="result-item__img" src={posterPre+movie.posterPath} alt="movie poster" />
      <div className="result-item_info-cont">
        <h5>{movie.title}</h5>
        <h5>{movie.releaseDate}</h5>
        <h5>{movie.voteAverage}</h5>
      </div>
   
    </Link>
  )
}

const SearchResult = ({result}) =>{ 
  return(
     <React.Fragment>
      <div className="searchresult__cont">
      { result.map((movie) => {
        return <ResultItem key={movie.title}  movie = {movie}></ResultItem>
      })  }
        
      </div>
     </React.Fragment>
  )
}



const Bar = () => {
  const dispatch = useDispatch()
  let searchResults = useSelector(state => state.navbar.searchResult)
  let searchbarOpen = useSelector(state => state.navbar.searchbarOpen)

  // Search Event.
  function handleSearch(event){
    if(event.target.value.length > 3){
      dispatch(fetchSearchResult(event.target.value))
    }else if(event.target.value.length < 4 && !searchResults.length !== true){
        dispatch(setSearchResults([]))
    }
  }
 
  return (
   <React.Fragment>
    <div className="navbar__container">
      {/*Navigation bar*/}
      <Link to="/"><img src={dummyLogo} alt="" className="navbar_logo" /></Link>
      <div className="menu__icons">
        <i className="fas fa-search" onClick={() => dispatch(toggelSearch())}></i>
        <Link to="/shopping-cart"> <ShoppingCartBadge/> </Link>
        <i onClick={() => dispatch(toggelMenu())} className="fas fa-bars navbar__container_burger-menu"></i>
      </div>
      
    </div>
    {
      //Search bar.
      searchbarOpen? 
      <div className="searchbar__container">
        <div className="search-field__container">
          <input type="text" className="search-field" onChange={(e)=>handleSearch(e) }/>
          <i className="fas fa-search searchbar__container_logo"></i>
        </div>
        
        <i className="fas fa-times search_x_btn" onClick={() => dispatch(toggelSearch())}></i>  
          {!searchResults.length? null : <SearchResult result={searchResults}></SearchResult>}
      </div> : null  
    }
   </React.Fragment>
  );
} 


//Menu Component.
let Menu = () => {
  const dispatch = useDispatch()
  return(
    <div className="menu__overlay">
    
    {/*top bar*/}
      <div className="navbar__container">
     <Link to="/" onClick={() => dispatch(toggelMenu())}><img src={dummyLogo} alt="" className="navbar_logo" /></Link>
     <div className="navbar_company_title">
        <h3> SUPER MOVIE PAGE </h3>    
     </div>
     <i className="fas fa-times menu_x_btn" onClick={() => dispatch(toggelMenu())}></i>
    </div>

    {/*menu*/}
      <div className="menu__container">
        <div className="menu_title_cont">
          <h2 className="menu__title">Movies</h2>
        </div>
        <div className="menu__categories_cont">
          <div className="categories_left">
            <Link to="/genre/action" onClick={()=>dispatch(toggelMenu())}>
              <div className="categories_item"><i className={`${CATEGORIES.action} menu_cat_icon`}></i>Action</div>
            </Link>

            <Link to="/genre/comedy" onClick={()=>dispatch(toggelMenu())}>
            <div className="categories_item"><i className={`${CATEGORIES.comedy} menu_cat_icon`}></i>Comedy</div>
            </Link>
            
            <Link to="/genre/drama" onClick={()=>dispatch(toggelMenu())}>
            <div className="categories_item"><i className={`${CATEGORIES.drama} menu_cat_icon`}></i>Drama</div>
            </Link>
            
            <Link to="/genre/romance" onClick={()=>dispatch(toggelMenu())}>
            <div className="categories_item"><i className={`${CATEGORIES.romance} menu_cat_icon`}></i>Romance</div>
            </Link>
          </div>
          <div className="categories_right">
            <Link to="/genre/fantasy" onClick={()=>dispatch(toggelMenu())}>
              <div className="categories_item"><i className={`${CATEGORIES.fantasy} menu_cat_icon`}></i>Fantasy</div>
            </Link>

            <Link to="/genre/horror" onClick={()=>dispatch(toggelMenu())}>
              <div className="categories_item"><i className={`${CATEGORIES.horror} menu_cat_icon`}></i>Horror</div>
            </Link>
            
            <Link to="/genre/mystery" onClick={()=>dispatch(toggelMenu())}>
              <div className="categories_item"><i className={`${CATEGORIES.mystery} menu_cat_icon`}></i>Mystery</div>
            </Link>
            
            <Link to="/genre/thriller" onClick={()=>dispatch(toggelMenu())}>
              <div className="categories_item"><i className={`${CATEGORIES.thriller} menu_cat_icon`}></i>Thriller</div>
            </Link>
            
          </div>
        </div>
        <div className="menu__bottom_cont">
          
          <Link to="/shopping-cart" onClick={()=>dispatch(toggelMenu())}>
            <div className="bottom_cont_box">
            <i className="fas fa-shopping-cart bottom_cont_icon_box"></i>
            <p>cart</p>
            </div>
          </Link>

          <Link to="/login" onClick={()=>dispatch(toggelMenu())}>
            <div className="bottom_cont_box">
            <i className="fas fa-question bottom_cont_icon_box"></i>
            <p>unknown</p>
            </div>
          </Link>

          <Link to="/profile" onClick={()=>dispatch(toggelMenu())}>
            <div className="bottom_cont_box">
            <i className="fas fa-user bottom_cont_icon_box"></i>
            <p>account</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}


//Complete Navbar to be used in app.
const Navbar= () => {
  let menuOpen = useSelector((state) => state.navbar.menuOpen)
  return (
   <React.Fragment>
    {menuOpen? <Menu></Menu> : <Bar></Bar>}
   </React.Fragment>
  );
}

export default Navbar;
