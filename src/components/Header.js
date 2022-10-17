import React from "react";
import logo from "../img/logo.svg";
import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <h1>Contest</h1>
    </StyledHeader>
  );
};

export default Header;
