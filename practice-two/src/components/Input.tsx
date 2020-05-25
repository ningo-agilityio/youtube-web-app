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
  value?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  handleOnChange: (e: React.ChangeEvent) => void;
}

export const Input = React.memo((props: InputProps) => {
  return (
    <InputStyled
      type={props.type}
      ref={props.inputRef}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleOnChange}
    />
  );
});
