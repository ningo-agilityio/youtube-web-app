import React from 'react';
import styled from 'styled-components';
import * as constants from '../constants/constants';
import { ButtonProps } from '../buildTypes/buildTypes';
import * as color from '../theme/color';
import * as metric from '../theme/metric';

const ButtonStyled = styled.button`
  border-radius: 0.25rem;
  max-height: 2rem;
  background: ${(props: ButtonProps) =>
    props.name === `${constants.BTN_PRIMARY}` && `${color.successColor}`};
  border: none;
  padding: ${(props: ButtonProps) =>
    props.name === `${constants.BTN_PRIMARY}` ? `${metric.PADDING.sm}` : ''};
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

  ${(props: ButtonProps) =>
    props.name === `${constants.BTN_NO_OUTLINE_LIGHT}` &&
    `
    color: ${color.primaryColor};
    background: none;
  `};

  ${(props: ButtonProps) =>
    props.name === `${constants.BTN_NO_OUTLINE_DARK}` &&
    `
    color: ${color.mutedColor};
    background: none;
  `};

  ${(props: ButtonProps) =>
    props.name === `${constants.BTN_GRAY}` &&
    `
    background: ${color.mutedColor};
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  `};
`;

export const Button = React.memo((props: ButtonProps) => {
  return (
    <ButtonStyled
      {...props}
      className={props.name}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.value}
    </ButtonStyled>
  );
});
