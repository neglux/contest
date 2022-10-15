import React from "react";
import errorImg from "../img/error.svg";
import { StyledError } from "./styles/Error.styled";

const Error = ({ msg }) => {
  return (
    <StyledError>
      <h3 className="error__msg">{msg}</h3>
      <img className="error__img" src={errorImg} alt="error img" />
    </StyledError>
  );
};

export default Error;
