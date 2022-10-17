import { StyledHeader } from "./Header.styled";

import logo from "../img/logo.svg";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <h1>Contest</h1>
    </StyledHeader>
  );
};

export default Header;
