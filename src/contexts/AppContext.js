import React, { useContext, useState } from "react";
import { palettes } from "../styles/palettes";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [palette, setPalette] = useState(palettes[0]);

  function handleTheme(id) {
    setPalette(palettes.find((p) => p.id === id));
  }
  return (
    <AppContext.Provider value={{ palette, handleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
