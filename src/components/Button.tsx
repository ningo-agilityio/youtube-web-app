import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from 'buildTypes';
import { BTN } from 'constants/index';
import { colors } from 'theme/color';

const ButtonStyled = styled.button`
  min-width: 6rem;
  background-color: ${(props) =>
    props.className === `${BTN.PRIMARY}`
      ? `${colors.WHITE}`
      : `${colors.BLUE}`};
  color: ${(props) =>
    props.className === `${BTN.PRIMARY}`
      ? `${colors.BLUE}`
      : `${colors.WHITE}`};
  font-weight: bold;
  border: 0.05rem solid ${colors.BLUE};
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 0.7;
  }
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
  name: 'BTN-PRIMARY',
  value: 'Button',
  type: 'button',
  onClick: () => {},
};

export default React.memo(Button);
