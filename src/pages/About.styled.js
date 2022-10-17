import styled from "styled-components";

export const StyledAbout = styled.article`
  .about {
    &__list {
      list-style: none;

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.5rem 1rem;

      color: ${({ theme }) => theme.colors.logoColor};

      font-family: "Bebas Neue", cursive;
      font-size: 1.2rem;

      text-transform: uppercase;
    }

    &__img {
      display: block;
      margin-left: auto;
      width: 450px;
    }
  }
`;
