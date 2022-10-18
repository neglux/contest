import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/Global";

import { Page } from "./layout/Page.styled";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

import { useGlobalContext } from "./contexts/AppContext";

function App() {
  const { theme } = useGlobalContext();
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
