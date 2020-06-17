import React from 'react';
import styled from 'styled-components';
import * as constants from '../constants/constants';
import { ButtonProps } from '../buildTypes/buildTypes';
import * as color from '../theme/color';
import * as metric from '../theme/metric';

const ButtonStyled = styled.button`
  border-radius: 0.25rem;
  max-height: 2rem;
  background: ${(props) =>
    props.className === `${constants.BTN_PRIMARY}` && `${color.successColor}`};
  border: none;
  padding: ${(props) =>
    props.className === `${constants.BTN_PRIMARY}` 
      ? `${metric.PADDING.sm}`
      : ''};
  color: ${color.whiteColor};
  outline: none;
  cursor: pointer;

  :hover {
    opacity: ${metric.OPACITY.sm};
  }

  :disabled {
    background: ${color.mutedColor};
    opacity: ${metric.OPACITY.lg};
  }

  ${(props) =>
    props.className === `${constants.BTN_NO_OUTLINE_LIGHT}` &&
    `
    color: ${color.primaryColor};
    background: none;
  `};

  ${(props) =>
    props.className === `${constants.BTN_NO_OUTLINE_DARK}` &&
    `
    color: ${color.mutedColor};
    background: none;
  `};

  ${(props) =>
    props.className === `${constants.BTN_GRAY}` &&
    `
    background: ${color.mutedColor};
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  `};
`;

const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled
      className={props.name}
      type={props.type}
      onClick={props.onClick}
    >
      {props.value}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  name: 'btn-primary',
  value: 'Button',
  locked: false,
  type: 'button',
  onClick: () => {},
};

export default React.memo(Button);
