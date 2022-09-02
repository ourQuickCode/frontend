import styled from "styled-components";
import { colors, shadows } from "../../styles/Variables";

export const Card = styled.div`
  background-color: ${colors.secondaryBackgropundColor};
  margin-bottom: 15px;
  border: none;
  box-shadow: ${shadows.primaryShadow};
  padding: 15px;
  label {
    color: gray;
  }
  .label1 {
    margin: 0px 15px 0px 0px;
  }
  .body-top {
    display: flex;
    margin-bottom: 25px;
    .body-top2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 20px;
    }
  }
  .title-name {
    color: ${colors.primaryColor};
    font-weight: 700;
  }
  .label-date {
    font-size: small;
  }

  .foto {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
  }
  .body-body {
    margin-bottom: 25px;
    .card-title {
      color: ${colors.primaryColor};
    }
    .card-text {
      color: ${colors.primaryColor};
    }
  }
  .body-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
    background-color: ${colors.secondaryColor};
    border: none;
    margin-left: 15px;
  }
`;
