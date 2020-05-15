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

const InputStyle = styled.input`
  width: ${(props: InputProps) => props.type === 'text' && '100%'};
  box-sizing: ${(props: InputProps) => props.type === 'text' && 'border-box'};
  border: ${(props: InputProps) => props.type === 'text' && 'none'};
  font-size: ${(props: InputProps) => props.type === 'text' && '1.25rem'};
  background: ${(props: InputProps) => props.type === 'text' && 'inherit'};

  :focus {
    outline: ${(props: InputProps) => props.type === 'text' && '0'};
  }

  ::placeholder {
    font-style: ${(props: InputProps) => props.type === 'text' && 'italic'};
    color: ${(props: InputProps) =>
    props.name === 'main-input'
      ? 'rgb(255, 255, 255, 0.5)'
      : props.name === 'sub-input'
        ? 'rgb(102, 137, 100, 0.5)'
        : ''};
  }
`;

export const Input = (props: InputProps) => {
  return (
    <InputStyle
      {...props}
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
