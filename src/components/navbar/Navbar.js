import './Navbar.css';
import dummyLogo from '../../img/Logo/dummy_ic.jpg'

const Navbar= () => {
  return (
    <div className="navbar__container">
     <img src={dummyLogo} alt="" className="navbar__container_logo" />
     <div className="searchbar__container">
         <input type="text" className="searchbar__container_search-field" />
         <i className="fas fa-search searchbar__container_search-field_logo"></i>
     </div>

     <i className="fas fa-shopping-cart navbar__container_shop-cart"></i>
     <i className="fas fa-bars navbar__container_burger-menu"></i>
    

    </div>
  );
}

export default Navbar;
