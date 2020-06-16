import React, { useRef } from 'react';
import styled from 'styled-components';
import { FormProps } from 'buildTypes';
import { BTN } from 'constants/index';
import { colors } from 'theme/color';
import { useDispatch } from 'react-redux';
import { toggleForm } from 'actions';
import logo from 'assets/sub-logo.png';
import Input from './Input';
import Button from './Button';

const FormStyled = styled.form`
  background: ${colors.WHITE};
  min-width: 25rem;
  min-height: 27rem;
  border: 0.05rem solid ${colors.GRAY};
  border-radius: 0.5rem;
  padding: 2.5rem;
  text-align: center;
  box-sizing: border-box;
`;

const TitleForm = styled.h3`
  margin: 0;
  color: ${colors.BLUE};
`;

const Logo = styled.img`
  width: 50%;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const Form = (props: FormProps) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleOnSubmit = () => {};
  const handleOnClickCancel = () => {
    dispatch(toggleForm());
  };

  return (
    <FormStyled onSubmit={handleOnSubmit}>
      <Logo src={logo} alt="Sub Logo" />
      <TitleForm>Sign in</TitleForm>
      <p>to continue to YouTube</p>
      <Input
        type="email"
        inputRef={emailRef}
        placeholder="Email..."
        defaultValue=""
      />
      <Input
        type="password"
        inputRef={passRef}
        placeholder="Password..."
        defaultValue=""
      />
      <Wrapper>
        <Button name={BTN.SECONDARY} value="log in" type="submit" />
        <Button
          name={BTN.SECONDARY}
          value="cancel"
          type="button"
          onClick={handleOnClickCancel}
        />
      </Wrapper>
    </FormStyled>
  );
};
