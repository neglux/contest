import styled from "styled-components";

export const StyledTabs = styled.ul`
  list-style: none;

  display: flex;

  margin-bottom: 1rem;
  padding: 1rem 2rem;

  color: ${({ theme }) => theme.colors.tabsColor};
  background-color: ${({ theme }) => theme.colors.tabsBg};

  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  .tabs {
    &__item {
      cursor: pointer;

      transition: all 0.2s;
      &:not(:last-child) {
        margin-right: 1rem;
      }
      :hover {
        color: ${({ theme }) => theme.colors.tabItemHover};
      }

      &--active {
        color: ${({ theme }) => theme.colors.tabItemHover};
      }
    }
  }
`;
