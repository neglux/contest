import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  top: -250%;
  left: -10%;

  .modal {
    &__list {
      list-style: none;

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
