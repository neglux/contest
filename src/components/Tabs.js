import { StyledTabs } from "./Tabs.styled";

import { useState } from "react";

import { useViewerContext } from "../contexts/ViewerContext";

const Tabs = () => {
  const { tabs, setPageIndex, setFilter } = useViewerContext();
  const [active, setActive] = useState(0);
  return (
    <StyledTabs className="tabs__list">
      {tabs.map((item, index) => (
        <li
          key={index}
          className={`tabs__item ${
            active === index ? "tabs__item--active" : ""
          }`}
          onClick={() => {
            setPageIndex(0);
            setActive(index);
            setFilter(item.toLowerCase());
          }}
        >
          {item}
        </li>
      ))}
    </StyledTabs>
  );
};

export default Tabs;
