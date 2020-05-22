import React from 'react';
import styled from 'styled-components';

const LabelStyled = styled.label`
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props: LabelProps) => props.isOpen === false && 'gray'};
  :hover {
    text-decoration: underline;
  }
`;

interface LabelProps {
  value: string;
  isOpen?: boolean;
  handleOnClick?: (e: React.MouseEvent) => void;
}

export const Label = React.memo((props: LabelProps) => {
  return (
    <LabelStyled {...props} onClick={props.handleOnClick}>
      {props.value}
    </LabelStyled>
  );
});
