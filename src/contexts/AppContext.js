import React, { useContext, useEffect, useState } from "react";
import { palettes } from "../styles/palettes";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [palette, setPalette] = useState(palettes[0]);

  function handleTheme(id) {
    setPalette(palettes.find((p) => p.id === id));
  }

  function saveCurrentTheme(palette) {
    localStorage.setItem("themeConfig", palette.id);
  }

  useEffect(() => {
    saveCurrentTheme(palette);
  }, [palette]);

  return (
    <AppContext.Provider value={{ palette, handleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
