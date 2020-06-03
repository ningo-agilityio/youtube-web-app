import React from 'react';
import styled from 'styled-components';
import { TextareaProps } from '../buildTypes/buildTypes';
import { grayColor } from '../theme/color';
import * as metric from '../theme/metric';

const TextareaStyled = styled.textarea`
  width: 75%;
  min-height: 10rem;
  padding: ${metric.PADDING.xs};
  border: 0.05rem solid ${grayColor};
`;

export const Textarea = React.memo((props: TextareaProps) => {
  return (
    <TextareaStyled
      ref={props.textareaRef}
      key={props.defaultValue}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      onBlur={props.onBlur}
    />
  );
});
