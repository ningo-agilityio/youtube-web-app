import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  border-radius: 0.25rem;
  max-height: 2rem;
  background: ${(props: ButtonProps) =>
    props.name === 'main-btn' ? 'rgb(33, 170, 85)' : 'none'};
  border: none;
  padding: ${(props: ButtonProps) =>
    props.name === 'main-btn' ? '0.5rem' : ''};
  color: #fff;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }

  :disabled {
    background: gray;
    opacity: 1;
  }

  ${(props: ButtonProps) =>
    props.name === 'lock-btn' &&
    `
    color: ${props.value === 'Lock' ? 'rgb(236, 73, 37)' : 'gray'};
  `};

  ${(props: ButtonProps) =>
    props.name === 'exit-btn' &&
    `
    background: gray;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  `};
`;

interface ButtonProps {
  name?: string;
  value: string;
  isEnabled?: boolean;
  type: 'button' | 'submit' | 'reset';
  handleOnClick?: (e: React.MouseEvent) => void;
}

export const Button = React.memo((props: ButtonProps) => {
  return (
    <ButtonStyled
      {...props}
      className={props.name}
      type={props.type}
      disabled={props.isEnabled}
      onClick={props.handleOnClick}
    >
      {props.value}
    </ButtonStyled>
  );
});
