import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";

import { GlobalStyles } from "./components/styles/Global";
import { Page } from "./components/styles/Page.styled";
import { Container } from "./components/styles/Container.styled";

import Header from "./components/Header";
import Loading from "./components/Loading";
import Error from "./components/Error";
import ContestViewer from "./components/ContestViewer";
import Footer from "./components/Footer";

import useFetch from "./hooks/useFetch";

import { ViewerContextProvider } from "./contexts/ViewerContext";

function App() {
  const { isLoading, data, errorMsg } = useFetch(
    "https://kontests.net/api/v1/all"
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page>
        <Header />
        <Container>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {!data ? (
                <Error msg={errorMsg} />
              ) : (
                <ViewerContextProvider>
                  <ContestViewer data={data} />
                </ViewerContextProvider>
              )}
            </>
          )}
        </Container>
        <Footer />
      </Page>
    </ThemeProvider>
  );
}

export default App;
