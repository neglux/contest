import styled from "styled-components";
import { device } from "../data/queries";

export const Container = styled.main`
  flex: 1;

  padding: 4rem 1rem;

  @media ${device.mobileM} {
    padding: 2rem 1rem;
  }
`;
