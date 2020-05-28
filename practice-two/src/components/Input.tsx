import React from 'react';
import styled from 'styled-components';
import { InputProps } from '../buildTypes/buildTypes';
import { grayColor } from '../theme/color';
import * as metric from '../theme/metric';

const InputStyled = styled.input`
  width: 75%;
  padding: ${metric.PADDING_1};
  border: 0.05rem solid ${grayColor};
`;

export const Input = React.memo((props: InputProps) => {
  return (
    <InputStyled
      type={props.type}
      ref={props.inputRef}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
});
