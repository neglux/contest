import React, { useContext, useState } from "react";

const ViewerContext = React.createContext();

export const ViewerContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  return (
    <ViewerContext.Provider
      value={{
        tabs: ["All", "Active", "Upcoming"],
        pageIndex,
        setPageIndex,
        filter,
        setFilter,
        data,
        setData,
      }}
    >
      {children}
    </ViewerContext.Provider>
  );
};

export const useViewerContext = () => {
  return useContext(ViewerContext);
};
