import React, { useEffect, useState } from "react";
import { StyledPagination } from "./styles/Pagination.styled";

import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { useViewerContext } from "../contexts/ViewerContext";

const Pagination = () => {
  const { pageIndex, setPageIndex, data } = useViewerContext();
  const [active, setActive] = useState(pageIndex);

  const activeStyle = {
    color: "#EEEEEE",
  };

  useEffect(() => {
    setActive(pageIndex);
  }, [pageIndex]);

  return (
    <StyledPagination>
      <button
        className="btn"
        onClick={() => {
          if (pageIndex > 0) {
            setActive(pageIndex - 1);
            setPageIndex(pageIndex - 1);
          }
        }}
      >
        <BiArrowFromRight />
        Prev
      </button>
      <ul className="pag__ix-box">
        {data.map((_, index) => (
          <li
            key={index}
            className="pag__ix btn"
            style={active === index ? activeStyle : {}}
            onClick={() => {
              setActive(index);
              setPageIndex(index);
            }}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <button
        className="btn"
        onClick={() => {
          if (pageIndex < data.length - 1) {
            setActive(pageIndex + 1);
            setPageIndex(pageIndex + 1);
          }
        }}
      >
        Next
        <BiArrowFromLeft />
      </button>
    </StyledPagination>
  );
};

export default Pagination;
