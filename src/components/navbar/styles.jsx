import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { colors, shadows } from "../../styles/Variables";

export const Nav = styled.nav`
  background-color: ${colors.secondaryBackgropundColor};
  height: 4em;
  display: flex;
  flex-direction: row-reverse;
  box-shadow: ${shadows.primaryShadow};
  & ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px 50px 0px 50px;
  }
`;

export const Link = styled(LinkRouter)`
  color: ${colors.primaryColor};
  font-weight: 500;
`;
