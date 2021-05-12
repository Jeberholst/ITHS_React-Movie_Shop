import './Navbar.css';
import dummyLogo from '../../img/Logo/dummy_ic.jpg'


let menuOpen = true

const Bar = () => {
  return (
    <div className="navbar__container">
     <img src={dummyLogo} alt="" className="navbar_logo" />
     <div className="searchbar__container">
         <input type="text" className="searchbar__container_search-field" />
         <i className="fas fa-search searchbar__container_search-field_logo"></i>
     </div>

     <i className="fas fa-shopping-cart navbar__container_shop-cart"></i>
     <i className="fas fa-bars navbar__container_burger-menu"></i>
    

    </div>
  );
} 

let Menu = () => {
  return(
    <div className="menu__overlay">
    
    {/*top bar*/}
      <div className="navbar__container">
     <img src={dummyLogo} alt="" className="navbar_logo" />
     <div className="navbar_company_title">
         COMPANY NAME
     </div>
     <i className="fas fa-times"></i>
    </div>

    {/*menu*/}
      <div className="menu__container">
        <div className="menu_title_cont">
          <h2 className="menu__title">Movies</h2>
        </div>
        <div className="menu__categories_cont">
          <div className="categories_left">
            <div className="categories_item">Action</div>
            <div className="categories_item">Comedy</div>
            <div className="categories_item">Drama</div>
            <div className="categories_item">Romance</div>
          </div>
          <dic className="categories_right">
            <div className="categories_item">Fantasy</div>
            <div className="categories_item">Horror</div>
            <div className="categories_item">Mystery</div>
            <div className="categories_item">Thriller</div>
          </dic>
        </div>
        <div className="menu__bottom_cont">

        </div>
      </div>
    </div>
  );
}


const Navbar= () => {
  return (
    <>
    {menuOpen? <Menu></Menu> : <Bar></Bar>}
    </>
  );
}

export default Navbar;
