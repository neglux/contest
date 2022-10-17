import styled from "styled-components";

export const StyledLoading = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  .loading {
    &__icon {
      font-size: 2rem;

      animation: spin 2s infinite;
    }
  }

  @keyframes spin {
    70% {
      transform: rotate(360deg);
    }

    80% {
      transform: rotate(250deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
