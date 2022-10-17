import React from "react";
import { StyledError } from "./styles/Error.styled";

const Error = ({ msg }) => {
  return (
    <StyledError>
      <h3 className="error__msg">{msg}</h3>
    </StyledError>
  );
};

export default Error;
