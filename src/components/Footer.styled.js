import styled from "styled-components";

import { device } from "../data/queries";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  padding: 1rem 2rem;
  @media ${device.tablet} {
    padding: 1rem 1rem;
  }
  @media ${device.mobileS} {
    font-size: 0.8rem;
  }

  .footer {
    &__list {
      display: flex;
      list-style: none;

      @media ${device.tablet} {
        display: grid;
        grid-template-rows: 1fr 1fr;

        :first-child {
          grid-template-columns: auto auto;
          gap: 0 2rem;
        }
      }
    }

    &__item {
      text-transform: capitalize;
      &:not(:last-child) {
        margin-right: 1rem;
      }

      @media ${device.tablet} {
        width: min-content;
        &:not(:last-child) {
          margin-right: 0;
        }
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
