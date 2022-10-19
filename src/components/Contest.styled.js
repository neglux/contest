import styled from "styled-components";

import { device } from "../data/queries";

export const StyledContest = styled.a`
  cursor: pointer;
  align-self: stretch;

  display: flex;

  padding: 1rem 2rem;

  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.contestBg};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  transition: all 0.1s;

  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
  :link,
  :visited {
    color: inherit;
    text-decoration: none;
  }

  :hover {
    transform: scale(1.01) translate(-2px, -2px);
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px,
      rgba(240, 46, 170, 0.3) 10px 10px;
  }

  :active {
    transform: scale(1) translate(0, 0);
    box-shadow: none;
  }

  .contest {
    &__site-logo {
      width: 90px;
      height: 90px;
      object-position: center;
      object-fit: contain;
      margin-right: 1rem;
      padding: 0.5rem;
      background-color: ${({ theme }) => theme.colors.logoBg};

      @media ${device.mobileL} {
        margin: 0;
        margin-bottom: 2rem;
        padding: 1rem;

        width: 100%;
      }

      @media ${device.mobileS} {
        padding: 1.5rem;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      width: 100%;

      font-size: 0.8rem;
    }

    &__name {
      display: flex;
      justify-content: space-between;

      flex: 1;
      width: 100%;

      font-size: 1.2rem;
      @media ${device.mobileS} {
        font-size: 1rem;
      }
    }

    &__title {
      display: flex;
      margin-bottom: 0.5rem;
    }

    &__state {
      align-self: flex-start;

      margin-left: 1rem;
      padding: 0.1rem 0.3rem;

      font-weight: 400;

      background-color: ${({ theme }) => theme.colors.labelBg};
      border-radius: 2px;
    }

    &__duration {
      flex: 1;

      display: flex;
      flex-direction: column;
    }

    &__time {
      display: flex;
      align-items: center;
      margin: 0.3rem 0;

      & > label {
        font-weight: 400;
        padding: 0.1rem 0.3rem;
        background-color: ${({ theme }) => theme.colors.labelBg};
        border-radius: 2px;
        margin-right: 1rem;
      }
    }
  }
`;
