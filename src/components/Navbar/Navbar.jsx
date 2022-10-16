import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import data from "../../data/data.json";
import { AppContext } from "../../context/appContext";

function Navbar({ setPlanetIndex, planetIndex, color }) {
  const { showMenu, setShowMenu } = useContext(AppContext);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  const changePlanetHandler = (index) => {
    setPlanetIndex(index);
    setShowMenu(false);
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
            <li
              key={index}
              onClick={() => changePlanetHandler(index)}
              style={{
                borderTop: `4px solid ${
                  window.innerWidth >= 1000 && planetIndex === index
                    ? color
                    : "transparent"
                } `,
                color: `${
                  window.innerWidth >= 700 && planetIndex === index
                    ? "#fff"
                    : "#9595a8"
                }`,
              }}>
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
              <img
                className={classes.arrow}
                src={"../../assets/icon-chevron.svg"}
                alt='arrow'
              />
            </li>
          );
        })}
      </ul>
      <div className={classes.burger_menu} onClick={showMenuHandler}>
        <img src={"../../assets/icon-hamburger.svg"} alt='burger' />
      </div>
    </nav>
  );
}

export default Navbar;
