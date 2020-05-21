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
}

export const Textarea = (props: TextareaProps) => {
  return <TextareaStyled placeholder={props.placeholder} />;
};
