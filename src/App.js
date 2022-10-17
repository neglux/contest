import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";

import { GlobalStyles } from "./components/styles/Global";

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Page } from "./components/styles/Page.styled";

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
