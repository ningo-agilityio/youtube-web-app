import React from 'react';
import styled from 'styled-components';

const LabelStyled = styled.label`
  cursor: pointer;
  color: ${(props: LabelProps) => props.isOpen === false && 'gray'};
  :hover {
    text-decoration: ${(props: LabelProps) =>
    props.isOpen === true && 'underline'};
  }
`;

interface LabelProps {
  value: string;
  isOpen?: boolean;
  handleOnClick?: (e: React.MouseEvent) => void
}

export const Label = (props: LabelProps) => {
  return (
    <LabelStyled {...props} onClick={props.handleOnClick}>
      {props.value}
    </LabelStyled>
  );
};
