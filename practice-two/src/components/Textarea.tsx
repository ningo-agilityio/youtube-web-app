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

const Textarea = (props: TextareaProps) => {
  return (
    <TextareaStyled
      ref={props.textareaRef}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
    />
  );
};

Textarea.defaultProps = {
  placeholder: 'Write a comment...',
  defaultValue: '',
  textareaRef: null,
};

export default React.memo(Textarea);
