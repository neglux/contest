import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";

import { GlobalStyles } from "./components/styles/Global";
import { Page } from "./components/styles/Page.styled";
import { Container } from "./components/styles/Container.styled";
import { Grid } from "./components/styles/Grid.styled";

import Header from "./components/Header";
import Contest from "./components/Contest";
import Footer from "./components/Footer";

import useFetch from "./hooks/useFetch";

import { dataHandler } from "./handlers/dataHandler";
import Loading from "./components/Loading";

function App() {
  const { isLoading, data } = useFetch("https://kontests.net/api/v1/all");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page>
        <Header />
        <Container>
          {isLoading ? (
            <Loading />
          ) : (
            <Grid>
              {dataHandler(data).map(
                (contest, index) =>
                  contest && <Contest key={index} {...contest} />
              )}
            </Grid>
          )}
        </Container>
        <Footer />
      </Page>
    </ThemeProvider>
  );
}

export default App;
