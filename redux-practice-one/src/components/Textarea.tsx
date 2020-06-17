import React from 'react';
import styled from 'styled-components';
import { TextareaProps } from 'buildTypes';
import { colors } from 'theme/color';

const TextareaStyled = styled.textarea`
  width: 100%;
  min-height: 10rem;
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
  placeholder: 'Description...',
  defaultValue: '',
  textareaRef: null,
};

export default React.memo(Textarea);
