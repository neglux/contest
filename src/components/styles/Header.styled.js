import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  border-bottom: 2px solid ${({ theme }) => theme.colors.headerBorder};
  h1 {
    font-size: 1.4rem;
    font-weight: 500;
  }
  img {
    margin-right: 0.5rem;
  }
`;
