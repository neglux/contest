import styled from "styled-components";

export const StyledTitle = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;

  background-color: ${({ theme }) => theme.colors.titleBg};

  border-bottom: 1px solid ${({ theme }) => theme.colors.titleBorder};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .title {
    &__heading-1 {
      font-size: 1.7rem;
      letter-spacing: 1px;
      margin-bottom: 0.5rem;
    }

    &__heading-2 {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
`;
