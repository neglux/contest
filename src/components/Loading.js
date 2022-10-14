import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { StyledLoading } from "./styles/Loading.styled";

const Loading = () => {
  return (
    <StyledLoading className="loading">
      <BiLoaderCircle className="loading__icon" />
    </StyledLoading>
  );
};

export default Loading;
