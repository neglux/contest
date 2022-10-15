import React from "react";
import { StyledTabs } from "./styles/Tabs.styled";

const Tabs = ({ data, setFilter }) => {
  return (
    <StyledTabs className="tabs__list">
      {data.map((item, index) => (
        <li
          key={index}
          className="tabs__item"
          onClick={() => {
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
