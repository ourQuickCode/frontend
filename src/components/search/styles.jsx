import styled from "styled-components";
import { colors, shadows } from "../../styles/Variables";

export const FormContainer = styled.div`
  background-color: ${colors.secondaryBackgropundColor};
  margin: 25px 0px 25px 0px;
  padding: 20px;
  box-shadow: ${shadows.primaryShadow};
  border-radius: 8px;
  .form {
    display: flex;
    justify-content: space-between;
    //background-color: black;
  }
  .input-search {
    width: 80%;
  }
  .btn {
    width: 18%;
    height: 100%;
    max-height: 100%;
    background-color: ${colors.secondaryColor};
  }
`;
