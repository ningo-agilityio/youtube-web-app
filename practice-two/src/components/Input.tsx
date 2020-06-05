import React from 'react';
import styled from 'styled-components';
import { InputProps } from '../buildTypes/buildTypes';
import { grayColor } from '../theme/color';
import * as metric from '../theme/metric';

const InputStyled = styled.input`
  width: 75%;
  padding: ${metric.PADDING.xs};
  border: 0.05rem solid ${grayColor};
  font-size: 1rem;
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
  placeholder: 'Title',
  defaultValue: '',
  inputRef: null,
};

export default React.memo(Input);
