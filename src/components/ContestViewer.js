import React, { useState } from "react";

import { Grid } from "./styles/Grid.styled";

import Tabs from "./Tabs";
import Contest from "./Contest";
import Pagination from "./Pagination";

import { dataHandler } from "../handlers/dataHandler";
import { filterHandler } from "../handlers/filterHandler";
import { paginationHandler } from "../handlers/paginationHandler";

const ContestViewer = ({ data }) => {
  const [filter, setFilter] = useState("all");
  const [pageIndex, setPageIndex] = useState(0);

  const paginatedData = paginationHandler(
    filterHandler(dataHandler(data), filter)
  );

  return (
    <>
      <Tabs
        data={["All", "Active", "Upcoming"]}
        setFilter={setFilter}
        setPageIndex={setPageIndex}
      />
      <Grid>
        {paginatedData[pageIndex].map(
          (contest, index) => contest && <Contest key={index} {...contest} />
        )}
      </Grid>
      <Pagination
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        data={paginatedData}
      />
    </>
  );
};

export default ContestViewer;
