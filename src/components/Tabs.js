import React, { useState } from "react";
import { StyledTabs } from "./styles/Tabs.styled";

const Tabs = ({ data, setFilter }) => {
  const [active, setActive] = useState(false);

  const activeStyle = {
    color: "#EEEEEE",
  };

  return (
    <StyledTabs className="tabs__list">
      {data.map((item, index) => (
        <li
          key={index}
          className="tabs__item"
          style={active === index ? activeStyle : {}}
          onClick={() => {
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
