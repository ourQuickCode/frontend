import styled from "styled-components";
import { colors, shadows } from "./../../src/styles/Variables";

export const Presentation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: auto;
  margin: 150px 0px 200px 0px;
  & .presentationText1 {
    font-weight: 700;
    font-size: 100px;
    display: flex;
    justify-content: center;
    margin: 0px 0px 0px 0px;
  }
  & .presentationText2 {
    font-size: 30px;
    display: flex;
    justify-content: center;
    margin: 25px 0px 25px 0px;
  }
  & label {
    color: ${colors.secondaryColor};
    margin-left: 12px;
  }
  & .foto {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
  }
`;

export const Button1 = styled.button`
  background-color: #5c62ec;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  width: 300px;
  height: 50px;
  margin: 2ex;
`;

export const Button2 = styled.button`
  color: ${colors.primaryColor};
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  width: 300px;
  height: 50px;
`;

export const Icons = styled.div`
  .icono {
    width: auto;
    height: auto;
    font-size: 40px;
    color: #555555;
    display: inline-block;
    text-decoration: none;
    margin: 0px 5px;
  }
`;

export const About = styled.div`
  background-color: rgba(92, 98, 236, 1);
  height: 500px;
  margin: 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  & .about-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & img {
    height: 200px;
  }
  & h1 {
    margin: 15px;
    color: ${colors.primaryBackgropundColor};
  }
  & p {
    margin: 15px;

    color: ${colors.primaryBackgropundColor};
  }
  & label {
    margin: 15px;
    color: ${colors.primaryBackgropundColor};
    font-size: large;
    font-weight: 600;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  & .title {
    margin: 50px;
    color: ${colors.primaryBackgropundColor};
  }
  & .carsInitContainer {
    display: flex;
    justify-content: center;
    & .carInit {
      width: 50%;
    }
  }
  & .card {
    box-shadow: ${shadows.primaryShadow};
    height: 250px;
    width: 30%;
    margin: 15px;
  }
  & .icon {
    color: ${colors.secondaryColor};
    font-size: 30px;
    margin: 5px;
  }
  & .card-title {
    color: ${colors.primaryColor};
    font-size: 30px;
    margin: 5px;
  }
  & p {
    margin: 5px;
    color: ${colors.primaryColor};
  }
  & .iconText {
    color: ${colors.secondaryColor};
    font-size: 20px;
    margin: 5px;
  }
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 800px;
  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${colors.secondaryBackgropundColor};
    box-shadow: ${shadows.primaryShadow};
    height: auto;
    width: 50%;
    border-radius: 8px;
    padding: 15px;
    & textarea {
      margin-bottom: 15px;
      resize: none;
    }
  }
  & h1 {
    font-size: 50px;
    font-weight: 700;
    margin: 25px;
  }
  & h6 {
    font-size: 20px;
    font-weight: 500;
    margin: 25px;
  }
  & .contactButton {
    width: 100%;
    margin: 0px;
  }
`;
