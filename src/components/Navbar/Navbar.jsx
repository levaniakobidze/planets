import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import data from "../../data/data.json";
import arrow from "../../assets/icon-chevron.svg";
import burger from "../../assets/icon-hamburger.svg";
import { AppContext } from "../../context/appContext";

function Navbar() {
  const { showMenu, setShowMenu } = useContext(AppContext);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className={classes.navbar}>
      <h1 className={classes.logo}>THE PLANETS</h1>
      <ul
        className={
          !showMenu
            ? classes.nav_menu_list
            : `${classes.nav_menu_list} ${classes.nav_menu_list_show}`
        }>
        {data.map((planet, index) => {
          return (
            <li key={index}>
              <div className={classes.list}>
                <div
                  className={classes.circle}
                  style={{
                    background: `${
                      planet.name === "Mercury"
                        ? "#DEF4FC"
                        : planet.name === "Venus"
                        ? "#F7CC7F"
                        : planet.name === "Earth"
                        ? "#545BFE"
                        : planet.name === "Mars"
                        ? "#FF6A45"
                        : planet.name === "Jupiter"
                        ? "#ECAD7A"
                        : planet.name === "Saturn"
                        ? "#FCCB6B"
                        : planet.name === "Uranus"
                        ? "#65F0D5"
                        : planet.name === "Neptune"
                        ? "#497EFA"
                        : "#ffff"
                    }`,
                  }}></div>
                {planet.name}
              </div>
              <img className={classes.arrow} src={arrow} alt='arrow' />
            </li>
          );
        })}
      </ul>
      <div className={classes.burger_menu} onClick={showMenuHandler}>
        <img src={burger} alt='burger' />
      </div>
    </nav>
  );
}

export default Navbar;
