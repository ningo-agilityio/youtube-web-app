import React from 'react';
import styled from 'styled-components';

const LabelStyled = styled.label`
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props: LabelProps) => props.locked === true && 'gray'};
  :hover {
    text-decoration: underline;
  }
`;

interface LabelProps {
  value: string;
  locked?: boolean;
  handleOnClick?: (e: React.MouseEvent) => void;
}

export const Label = React.memo((props: LabelProps) => {
  return (
    <LabelStyled {...props} onClick={props.handleOnClick}>
      {props.value}
    </LabelStyled>
  );
});
