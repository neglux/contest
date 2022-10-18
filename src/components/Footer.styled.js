import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  padding: 1rem 2rem;
  .footer {
    &__list {
      display: flex;
      list-style: none;
    }

    &__item {
      text-transform: capitalize;
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }

    &__link {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.3rem 0.5rem;

      & :first-child {
        margin-right: 0.4rem;
      }

      &:link,
      &:visited {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.linkText};
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.linkHover};
      }
    }
  }

  .modal-btn {
    position: relative;
  }
`;
