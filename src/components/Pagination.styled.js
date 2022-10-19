import styled from "styled-components";
import { device } from "../data/queries";

export const StyledPagination = styled.div`
  display: flex;

  width: min-content;

  margin: 0 auto;
  margin-top: 2rem;

  .pag {
    &__ix-box {
      flex: 1;

      display: flex;

      margin: 0 1rem;
      @media ${device.mobileS} {
        margin: 0 0.2rem;
      }
    }

    &__ix {
      margin: 0 0.2rem;
    }
  }

  .btn {
    outline: none;
    border: none;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;

    color: ${({ theme }) => theme.colors.pagBtnText};
    background-color: ${({ theme }) => theme.colors.pagBtnBg};

    font-size: 0.9rem;
    border-radius: 5px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    transition: all 0.2s;
    &:hover {
      color: ${({ theme }) => theme.colors.pagBtnHover};
    }

    @media ${device.mobileM} {
      font-size: 0.8rem;
    }
  }
`;
