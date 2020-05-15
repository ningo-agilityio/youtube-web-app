import React from 'react';
import styled from 'styled-components';
import { Input } from './Input';

interface FormProps {
  name?: string;
  nameInput?: string;
  value: string;
  type: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder: string;
  ariaLabel: string;
  action: string;
  handleOnChange: (e: React.ChangeEvent) => void;
  handleOnSubmit: (e: React.FormEvent) => void;
}

const FormStyled = styled.form`
  background: ${(props: FormProps) =>
    props.name === 'main-form' ? 'rgb(102, 137, 100)' : 'rgb(247,247,247)'};
  color: ${(props: FormProps) =>
    props.name === 'main-form' ? 'rgb(255, 255, 255)' : 'rgb(102, 137, 100)'};
  border-radius: ${(props: FormProps) => props.name === 'main-form' && '0.25rem'};
  border-top: ${(props: FormProps) =>
    props.name === 'main-form' ? '' : '0.063rem solid rgba(0, 0, 0, 0.1)'};
  padding: 1rem;
`;

export const Form = (props: FormProps) => {
  return (
    <FormStyled
      {...props}
      className={props.name}
      onSubmit={props.handleOnSubmit}
      action={props.action}
    >
      <Input
        name={props.nameInput}
        value={props.value}
        type={props.type}
        inputRef={props.inputRef}
        placeholder={props.placeholder}
        ariaLabel={props.ariaLabel}
        handleOnChange={props.handleOnChange}
      />
    </FormStyled>
  );
};
