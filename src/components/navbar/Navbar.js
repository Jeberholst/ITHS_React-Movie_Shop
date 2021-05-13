import './Navbar.css';
import React from 'react'
import dummyLogo from '../../img/Logo/dummy_ic.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { toggelMenu } from '../../redux/features/navbarSlice'
import  { Link } from "react-router-dom";




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

const Bar = () => {
  const dispatch = useDispatch()
  return (
    <div className="navbar__container">
     <Link to="/"><img src={dummyLogo} alt="" className="navbar_logo" /></Link>
     <div className="searchbar__container">
         <input type="text" className="searchbar__container_search-field" />
         <i className="fas fa-search searchbar__container_search-field_logo"></i>
     </div>

     <Link to="/shopping-cart"><i className="fas fa-shopping-cart navbar__container_shop-cart"></i></Link>
     <i onClick={() => dispatch(toggelMenu())} className="fas fa-bars navbar__container_burger-menu"></i>
    

    </div>
  );
} 

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

          <Link to="/" onClick={()=>dispatch(toggelMenu())}>
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


const Navbar= () => {
  let menuOpen = useSelector((state) => state.navbar.menuOpen)
  return (
    <>
    {menuOpen? <Menu></Menu> : <Bar></Bar>}
    </>
  );
}

export default Navbar;
