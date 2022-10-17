import { Grid } from "../layout/Grid.styled";

import Tabs from "./Tabs";
import Contest from "./Contest";
import Pagination from "./Pagination";

import { dataHandler } from "../handlers/dataHandler";
import { filterHandler } from "../handlers/filterHandler";
import { paginationHandler } from "../handlers/paginationHandler";

import { useEffect } from "react";

import { useViewerContext } from "../contexts/ViewerContext";

const ContestViewer = ({ data }) => {
  const { pageIndex, filter, setData } = useViewerContext();

  data = paginationHandler(filterHandler(dataHandler(data), filter));
  useEffect(() => {
    setData(data);
  }, [filter]);

  return (
    <>
      <Tabs />
      <Grid>
        {data[pageIndex].map(
          (contest, index) => contest && <Contest key={index} {...contest} />
        )}
      </Grid>
      <Pagination />
    </>
  );
};

export default ContestViewer;
