import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/Global";
import { theme } from "./styles/theme";

import { Page } from "./layout/Page.styled";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Page>
    </ThemeProvider>
  );
}

export default App;
