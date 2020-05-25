import React from 'react';
import styled from 'styled-components';

const TextareaStyled = styled.textarea`
  width: 70%;
  min-height: 10rem;
  padding: 0.3rem;
  border: 0.05rem solid rgba(0, 0, 0, 0.2);
`;

interface TextareaProps {
  placeholder: string;
  value?: string;
  handleOnChange: (e: React.ChangeEvent) => void;
}

export const Textarea = (props: TextareaProps) => {
  return (
    <TextareaStyled
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleOnChange}
    />
  );
};
