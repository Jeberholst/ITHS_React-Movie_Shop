
import './Header.css';
import React from 'react'

function Header({children,page}) {
    
  let iconsClasses = {
        default: "fas fa-exclamation-triangle",
        shoppingcart: "fas fa-shopping-cart",
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

  let obj = Object.keys(iconsClasses).filter((key) => key.toUpperCase() === page.toUpperCase())
  let icon = !obj.length ? iconsClasses.default : iconsClasses[`${page.toLowerCase()}`]




  return (
    <React.Fragment>
    
      <div className="header__container">
          <div className="header__container-logo"><i className={icon}></i></div>
          <div className="header__container-txt">{children}</div>
      </div>
    </React.Fragment>
  );
}

export default Header;



// http://www.omdbapi.com/?apikey=733ba668&i=""