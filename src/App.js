import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import { GlobalStyles } from "./components/styles/Global";
import { Page } from "./components/styles/Page.styled";
import { palettes } from "./components/styles/palettes";

const theme = {
  colors: {
    text: palettes.palette1.colorTextLight,
    body: palettes.palette1.colorSecondary,
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page>
        <Header />
        <Container>hello</Container>
        <Footer />
      </Page>
    </ThemeProvider>
  );
}

export default App;
