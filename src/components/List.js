import Error from "./Error";
import Loading from "./Loading";

const List = ({ isLoading, errorMsg, children }) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>{errorMsg ? <Error msg={errorMsg} /> : children}</>
      )}
    </>
  );
};

export default List;
