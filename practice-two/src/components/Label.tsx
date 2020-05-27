import React from 'react';
import styled from 'styled-components';

const LabelStyled = styled.label`
  cursor: ${(props: LabelProps) => props.name === 'title-issue' && 'pointer'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props: LabelProps) => props.locked === true && 'gray'};
  :hover {
    text-decoration: ${(props: LabelProps) =>
      props.name === 'title-issue' && 'underline'};
  }
`;

interface LabelProps {
  value: string;
  locked?: boolean;
  name?: string;
  handleOnClick?: (e: React.MouseEvent) => void;
}

export const Label = React.memo((props: LabelProps) => {
  return (
    <LabelStyled
      {...props}
      className={props.name}
      onClick={props.handleOnClick}
    >
      {props.value}
    </LabelStyled>
  );
});
