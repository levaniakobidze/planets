import React, { useState, useContext, createContext } from "react";
export const AppContext = createContext();

export const ContextProvider = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showMenu,
        setShowMenu,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
