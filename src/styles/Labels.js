// ------------------------------ import libraries
import styled, { css } from 'styled-components'

// ------------------------------ import variables
import { colors, spacing, shadows, border, fonts } from './Variables'

// ------------------------------------ COMPONENTS ------------------------------------//
export const Label = styled.label`
  border: ${border.border};
  border-radius: ${border.borderRadiusButton};
  cursor: pointer;
  outline: none;
  background: ${colors.backgroundSwitchColor};
  transition: 0.3s;
  width: 343px;
  height: 54px;
  margin: ${spacing.space1} 0;
  padding: ${spacing.space0};
  font-family: ${fonts.family}, ${fonts.familySecondary};
  font-weight: ${fonts.bold};
  font-size: ${fonts.h1};
  color: ${colors.textColor};
  text-align: center;
  /* justify-content: center; */

  &:hover {
    box-shadow: none;
  }

  &:active {
    /* box-shadow: ${shadows.innerShadow}; */
  }
  /* this validate the color of background */
  /* if has the prop main display background orange */

  ${(props) =>
    props.large &&
    css`
      ${colors.mainBackgroundColor};
      max-width: 278px;
      height: 50px;
    `};

  ${(props) =>
    props.medium &&
    css`
      ${colors.mainBackgroundColor};
      max-width: 219px;
      height: 50px;
    `};

    ${(props) =>
    props.small &&
    css`
      ${colors.mainBackgroundColor};
      max-width: 126px;
      height: 40px;
    `};

    ${(props) =>
    props.micro &&
    css`
      ${colors.mainBackgroundColor};
      max-width: 95.25px;
      height: 25.59px;
    `};
`

export const GoogleButton = styled.button`
  background: ${colors.primaryColor};
  border: ${border.border};
  border-radius: ${border.borderRadiusButton};
  font-weight: ${fonts.bold};
  color: ${colors.titleColor};
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  width: 343px;
  height: 54px;
  margin: ${spacing.space2} 0;
`
export const LineLabel = styled.label`
    width: 80px;
    height: 7.53px;
    background: #C4C4C4;
    border-radius: 8px;
    margin-top: ${spacing.space0};
    margin-bottom: ${spacing.space3};
`
export const LineLabelCard = styled.div`
    width: 80px;
    height: 7.53px;
    background: #C4C4C4;
    border-radius: 8px;
    margin-top: ${spacing.space1};
    margin-bottom: ${spacing.space1};
`
