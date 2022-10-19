import styled from "styled-components";

import { device } from "../data/queries";

export const Page = styled.section`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  padding: 1rem 4rem;
  overflow-x: hidden;

  @media ${device.tablet} {
    padding: 1rem 1rem;
  }

  @media ${device.mobileS} {
    padding: 1rem 0;
  }
`;
