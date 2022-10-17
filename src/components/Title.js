import React from "react";

import { StyledTitle } from "./Title.styled";

const Title = ({ title, subtitle }) => {
  return (
    <StyledTitle>
      <h1 className="title__heading-1">{title}</h1>
      <h2 className="title__heading-2">{subtitle}</h2>
    </StyledTitle>
  );
};

export default Title;
