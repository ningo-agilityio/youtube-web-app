import React from 'react';

interface InputProps {
  name: string;
  value?: string;
  type: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  ariaLabel?: string;
  handleOnChange?: (e: React.ChangeEvent) => void;
  handleOnClick?: () => void;
}

export const Input = (props: InputProps) => {
  return (
    <input
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
