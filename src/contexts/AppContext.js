import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [palette, setPalette] = useState({
    colorPrimary: "#EA9215",
    colorSecondary: "#3A4750",
    colorTextDark: "#303841",
    colorTextLight: "#ebf3fa",
    colorDarkenTextLight: "#708291",
    white: "#fff",
  });

  function handleTheme(palettes, ix) {
    setPalette(palettes[`${ix}`]);
  }

  let theme = {
    colors: {
      text: palette.colorTextLight,
      linkText: palette.colorDarkenTextLight,
      linkHover: palette.colorTextLight,
      body: palette.colorSecondary,
      contestBg: palette.colorTextDark,
      logoBg: palette.white,
      labelBg: palette.colorSecondary,
      tabsColor: palette.colorDarkenTextLight,
      tabsBg: palette.colorTextDark,
      tabItemHover: palette.colorTextLight,
      pagBtnText: palette.colorDarkenTextLight,
      pagBtnHover: palette.colorTextLight,
      pagBtnBg: palette.colorTextDark,
      titleBg: palette.colorTextDark,
      titleBorder: palette.colorTextLight,
      logoColor: palette.colorDarkenTextLight,
    },
  };
  useEffect(() => {
    theme = {
      colors: {
        text: palette.colorTextLight,
        linkText: palette.colorDarkenTextLight,
        linkHover: palette.colorTextLight,
        body: palette.colorSecondary,
        contestBg: palette.colorTextDark,
        logoBg: palette.white,
        labelBg: palette.colorSecondary,
        tabsColor: palette.colorDarkenTextLight,
        tabsBg: palette.colorTextDark,
        tabItemHover: palette.colorTextLight,
        pagBtnText: palette.colorDarkenTextLight,
        pagBtnHover: palette.colorTextLight,
        pagBtnBg: palette.colorTextDark,
        titleBg: palette.colorTextDark,
        titleBorder: palette.colorTextLight,
        logoColor: palette.colorDarkenTextLight,
      },
    };
  }, [palette]);

  return (
    <AppContext.Provider value={{ theme, handleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
