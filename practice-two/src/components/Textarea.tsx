import React from 'react';
import styled from 'styled-components';
import { TextareaProps } from '../buildTypes/buildTypes';
import { grayColor } from '../theme/color';
import * as metric from '../theme/metric';

const TextareaStyled = styled.textarea`
  width: 75%;
  min-height: 10rem;
  padding: ${metric.PADDING_1};
  border: 0.05rem solid ${grayColor};
`;

export const Textarea = (props: TextareaProps) => {
  return (
    <TextareaStyled
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
