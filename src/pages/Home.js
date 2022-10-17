import { Container } from "../layout/Container.styled";

import ContestViewer from "../components/ContestViewer";
import List from "../components/List";

import useFetch from "../hooks/useFetch";

import { ViewerContextProvider } from "../contexts/ViewerContext";

const Home = () => {
  const { isLoading, data, errorMsg } = useFetch(
    "https://kontests.net/api/v1/all"
  );

  return (
    <Container>
      <List isLoading={isLoading} errorMsg={errorMsg}>
        <ViewerContextProvider>
          <ContestViewer data={data} />
        </ViewerContextProvider>
      </List>
    </Container>
  );
};

export default Home;
