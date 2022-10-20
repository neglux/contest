import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  .modal {
    &__list {
      list-style: none;
      text-transform: lowercase;

      padding: 0.5rem;
      font-size: 0.9rem;

      background-color: ${({ theme }) => theme.colors.modalBg};
    }

    &__item {
      cursor: pointer;
      padding: 0.2rem 1.5rem;

      &:hover {
        background-color: ${({ theme }) => theme.colors.modalItemHover};
      }
    }
  }
`;
