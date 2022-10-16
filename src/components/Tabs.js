import React, { useState } from "react";
import { useViewerContext } from "../contexts/ViewerContext";
import { StyledTabs } from "./styles/Tabs.styled";

const Tabs = () => {
  const { tabs, setPageIndex, setFilter } = useViewerContext();
  const [active, setActive] = useState(0);

  const activeStyle = {
    color: "#EEEEEE",
  };

  return (
    <StyledTabs className="tabs__list">
      {tabs.map((item, index) => (
        <li
          key={index}
          className="tabs__item"
          style={active === index ? activeStyle : {}}
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
