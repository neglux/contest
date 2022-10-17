import { BiLoaderCircle } from "react-icons/bi";

import { StyledLoading } from "./Loading.styled";

const Loading = () => {
  return (
    <StyledLoading className="loading">
      <BiLoaderCircle className="loading__icon" />
    </StyledLoading>
  );
};

export default Loading;
