import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  width: 70%;
  padding: 0.3rem;
  border: 0.05rem solid rgba(0, 0, 0, 0.2);
`;

interface InputProps {
  type: string;
  placeholder: string;
}

export const Input = (props: InputProps) => {
  return <InputStyled type={props.type} placeholder={props.placeholder} />;
};
