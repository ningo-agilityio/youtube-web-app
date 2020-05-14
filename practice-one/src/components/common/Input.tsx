import React from 'react';
import styled from 'styled-components';

interface InputProps {
  name?: string;
  value?: string;
  type: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  ariaLabel?: string;
  handleOnChange?: (e: React.ChangeEvent) => void;
  handleOnClick?: () => void;
}

const InputStyle = styled.input``;

export const Input = (props: InputProps) => {
  return (
    <InputStyle
      className={props.name}
      type={props.type}
      ref={props.inputRef}
      placeholder={props.placeholder}
      aria-label={props.ariaLabel}
      value={props.value}
      onChange={props.handleOnChange}
      onClick={props.handleOnClick}
    />
  );
};
