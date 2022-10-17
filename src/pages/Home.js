import { Container } from "../layout/Container.styled";

import Loading from "../components/Loading";
import Error from "../components/Error";
import ContestViewer from "../components/ContestViewer";

import useFetch from "../hooks/useFetch";

import { ViewerContextProvider } from "../contexts/ViewerContext";

const Home = () => {
  const { isLoading, data, errorMsg } = useFetch(
    "https://kontests.net/api/v1/all"
  );

  return (
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
  );
};

export default Home;
