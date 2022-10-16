import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";

import { GlobalStyles } from "./components/styles/Global";
import { Page } from "./components/styles/Page.styled";
import { Container } from "./components/styles/Container.styled";
import { Grid } from "./components/styles/Grid.styled";

import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Contest from "./components/Contest";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

import useFetch from "./hooks/useFetch";

import { dataHandler } from "./handlers/dataHandler";
import { filterHandler } from "./handlers/filterHandler";
import Error from "./components/Error";
import { paginationHandler } from "./handlers/paginationHandler";
import Pagination from "./components/Pagination";

function App() {
  const { isLoading, data, errorMsg } = useFetch(
    "https://kontests.net/api/v1/all"
  );
  const [filter, setFilter] = useState("all");
  const [pageIndex, setPageIndex] = useState(0);

  const paginatedData = paginationHandler(
    filterHandler(dataHandler(data), filter)
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
                <>
                  <Tabs
                    data={["Active", "Upcoming"]}
                    setFilter={setFilter}
                    setPageIndex={setPageIndex}
                  />
                  <Grid>
                    {paginationHandler(
                      filterHandler(dataHandler(data), filter)
                    )[pageIndex].map(
                      (contest, index) =>
                        contest && <Contest key={index} {...contest} />
                    )}
                  </Grid>
                  <Pagination
                    pageIndex={pageIndex}
                    setPageIndex={setPageIndex}
                    data={paginatedData}
                  />
                </>
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
