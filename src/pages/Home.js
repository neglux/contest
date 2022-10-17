import React from "react";
import ContestViewer from "../components/ContestViewer";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { Container } from "../components/styles/Container.styled";
import { ViewerContextProvider } from "../contexts/ViewerContext";
import useFetch from "../hooks/useFetch";

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
