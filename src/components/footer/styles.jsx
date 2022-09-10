import styled from "styled-components";
import { colors, shadows } from "../../styles/Variables";

export const Footer = styled.footer`
  background-color: ${colors.secondaryBackgropundColor};
  margin-top: 5%;
  box-shadow: 15ch;
  & .url-text {
    background-color: ${colors.primaryBackgropundColor};
  }
  .icono {
    width: auto;
    height: auto;
    font-size: 25px;
    color: #555555;
    display: inline-block;
    text-decoration: none;
    margin: 0px 5px;
  }
  .fw-bold {
    margin-left: 5px;
  }
`;
