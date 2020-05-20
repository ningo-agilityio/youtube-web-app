import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  name: string;
  value?: string;
  handleOnClick?: (e: React.MouseEvent) => void;
}

const StyledButton = styled.button`
  font-size: 1.5rem;
  color: #df8383;
  visibility: hidden;
  background: none;
  margin-top: 0px;
  border: none;
  outline: none;

  :hover {
    color: #f14a5d;
    cursor: pointer;
  }
`;

export const Button = React.memo((props: ButtonProps) => {
  return (
    <StyledButton className={props.name} type="button" onClick={props.handleOnClick}>
      {props.value}
    </StyledButton>
  );
});
