import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Contest from "./components/Contest";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import { GlobalStyles } from "./components/styles/Global";
import { Grid } from "./components/styles/Grid.styled";
import { Page } from "./components/styles/Page.styled";
import { palettes } from "./components/styles/palettes";

const theme = {
  colors: {
    text: palettes.palette1.colorTextLight,
    linkText: palettes.palette1.colorDarkenTextLight,
    linkHover: palettes.palette1.colorTextLight,
    body: palettes.palette1.colorSecondary,
    contestBg: palettes.palette1.colorTextDark,
    logoBg: palettes.palette1.white,
    labelBg: palettes.palette1.colorSecondary,
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      if (!resp) throw new Error("Something went wrong");
      const data = await resp.json();
      setData(data);
      setIsLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    fetchData("https://kontests.net/api/v1/all");
  }, []);

  if (isLoading) return <div>Loading</div>;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page>
        <Header />
        <Container>
          <Grid>
            {data.map((contest, index) => (
              <Contest key={index} {...contest} />
            ))}
          </Grid>
        </Container>
        <Footer />
      </Page>
    </ThemeProvider>
  );
}

export default App;
