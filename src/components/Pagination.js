import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

import { StyledPagination } from "./Pagination.styled";

import { PaginationNav } from "../utilities/PaginationNav";

import { useEffect, useState } from "react";

import { useGlobalContext } from "../contexts/AppContext";
import { useViewerContext } from "../contexts/ViewerContext";

const Pagination = () => {
  const { pageIndex, setPageIndex, data } = useViewerContext();
  const { palette } = useGlobalContext();
  const [active, setActive] = useState(pageIndex);

  const nav = new PaginationNav(setActive, setPageIndex, data.length - 1);

  const activeStyle = {
    color: palette.colors.textLight,
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
