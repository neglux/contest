import styled from "styled-components";
import { device } from "../data/queries";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }

  gap: 1rem 2rem;
`;
