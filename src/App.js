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

function App() {
  const { isLoading, data } = useFetch("https://kontests.net/api/v1/all");
  const [filter, setFilter] = useState("all");
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
              <Tabs data={["Active", "Upcoming"]} setFilter={setFilter} />
              <Grid>
                {filterHandler(dataHandler(data), filter).map(
                  (contest, index) =>
                    contest && <Contest key={index} {...contest} />
                )}
              </Grid>
            </>
          )}
        </Container>
        <Footer />
      </Page>
    </ThemeProvider>
  );
}

export default App;
