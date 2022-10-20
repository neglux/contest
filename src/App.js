import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/Global";

import { Page } from "./layout/Page.styled";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

import { useGlobalContext } from "./contexts/AppContext";
import { useEffect } from "react";

function App() {
  const { palette, handleTheme } = useGlobalContext();

  const config = parseInt(localStorage.getItem("themeConfig"));
  useEffect(() => {
    if (config) handleTheme(config);
  }, []);
  const theme = {
    colors: {
      text: palette.colors.text,
      linkText: palette.colors.textDark,
      linkHover: palette.colors.text,
      body: palette.colors.primary,
      contestBg: palette.colors.secondary,
      logoBg: palette.colors.white,
      labelBg: palette.colors.primary,
      tabsColor: palette.colors.textDark,
      tabsBg: palette.colors.secondary,
      tabItemHover: palette.colors.textLight,
      pagBtnText: palette.colors.textDark,
      pagBtnHover: palette.colors.textLight,
      pagBtnBg: palette.colors.secondary,
      titleBg: palette.colors.secondary,
      titleBorder: palette.colors.textLight,
      logoColor: palette.colors.textDark,
      modalBg: palette.colors.secondary,
      modalItemHover: palette.colors.textDark,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page>
        <Header />
        <Routes>
          <Route path="contest/" element={<Home />} />
          <Route path="contest/about" element={<About />} />
        </Routes>
        <Footer />
      </Page>
    </ThemeProvider>
  );
}

export default App;
