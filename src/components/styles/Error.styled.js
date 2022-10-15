import styled from "styled-components";

export const StyledError = styled.article`
  display: block;
  width: 30rem;
  margin: 1rem auto;

  text-align: center;

  .error {
    &__msg {
      font-weight: 400;
      letter-spacing: 0.5px;

      ::after {
        display: block;
        content: "";

        margin-top: 1rem;

        width: 100%;
        height: 2px;

        background-color: ${({ theme }) => theme.colors.tabItemHover};
      }
    }

    &__img {
      margin: 1.5rem 0;
      width: 30rem;
    }
  }
`;
