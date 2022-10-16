import React, { useEffect, useState } from "react";

import { StyledPagination } from "./styles/Pagination.styled";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

import { useViewerContext } from "../contexts/ViewerContext";

import { PaginationNav } from "../utilities/PaginationNav";

const Pagination = () => {
  const { pageIndex, setPageIndex, data } = useViewerContext();
  const [active, setActive] = useState(pageIndex);

  const nav = new PaginationNav(setActive, setPageIndex, data.length - 1);

  const activeStyle = {
    color: "#EEEEEE",
  };

  useEffect(() => {
    setActive(pageIndex);
  }, [pageIndex]);

  return (
    <StyledPagination>
      <button className="btn" onClick={() => nav.prevPage(pageIndex)}>
        <BiArrowFromRight />
        Prev
      </button>
      <ul className="pag__ix-box">
        {data.map((_, index) => (
          <li
            key={index}
            className="pag__ix btn"
            style={active === index ? activeStyle : {}}
            onClick={() => nav.setPage(index)}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <button className="btn" onClick={() => nav.nextPage(pageIndex)}>
        Next
        <BiArrowFromLeft />
      </button>
    </StyledPagination>
  );
};

export default Pagination;
