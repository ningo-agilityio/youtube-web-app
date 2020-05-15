import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  name: string;
  value?: string;
  handleOnClick?: (e: React.MouseEvent) => void;
}

const StyledButton = styled.button`
  width: 2.5rem;
  font-size: 1.75rem;
  color: #df8383;
  justify-self: end;
  visibility: hidden;
  background: none;
  border: none;
  outline: none;

  :hover {
    color: #f14a5d;
    cursor: pointer;
  }
`;

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton className={props.name} type="button" onClick={props.handleOnClick}>
      {props.value}
    </StyledButton>
  );
};
