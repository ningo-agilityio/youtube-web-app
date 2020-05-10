import React from 'react';
import { Input } from './Input';

interface FormProps {
  nameForm: string;
  nameInput: string;
  value: string;
  type: string;
  placeholder: string;
  ariaLabel: string;
  action: string;
  handleOnChange: (e: React.ChangeEvent) => void;
  handleOnSubmit: (e: React.FormEvent) => void;
}

export const Form = (props: FormProps) => {
  return (
    <form
      className={props.nameForm}
      onSubmit={props.handleOnSubmit}
      action={props.action}
    >
      <Input
        name={props.nameInput}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        ariaLabel={props.ariaLabel}
        handleOnChange={props.handleOnChange}
      />
    </form>
  );
};
