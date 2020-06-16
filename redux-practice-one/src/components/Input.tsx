import React from 'react';
import styled from 'styled-components';
import { InputProps } from 'buildTypes';
import { colors } from 'theme/color';

const InputStyled = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border: 0.05rem solid ${colors.GRAY};
  border-radius: 0.2rem;
  display: block;
  box-sizing: border-box;
  outline: none;

  :focus {
    border: 0.05rem solid ${colors.BLUE};
  }
`;

const Input = (props: InputProps) => {
  return (
    <InputStyled
      type={props.type}
      ref={props.inputRef}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: 'Email',
  defaultValue: '',
  inputRef: null,
};

export default React.memo(Input);
