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
  color: ${(props: ButtonProps) =>
    props.value === 'Open'
      ? 'red'
      : props.value === 'Closed'
      ? 'gray'
      : '#fff'};
  outline-color: rgb(33, 255, 65);

  :hover {
    background: rgb(33, 140, 90);
  }
`;

interface ButtonProps {
  name: string;
  value: string;
  handleOnClick?: (e: React.MouseEvent) => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled
      {...props}
      className={props.name}
      type="button"
      onClick={props.handleOnClick}
    >
      {props.value}
    </ButtonStyled>
  );
};
