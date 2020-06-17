import React, { useRef } from 'react';
import styled from 'styled-components';
import { FormProps } from 'buildTypes';
import { BTN } from 'constants/index';
import { colors } from 'theme/color';
import { useDispatch } from 'react-redux';
import { toggleForm } from 'actions';
import logo from 'assets/sub-logo.png';
import api from 'apis';
import Input from './Input';
import Textarea from './Textarea';
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
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (
    //   titleRef.current?.value.trim() === ACCOUNT.email &&
    //   descRef.current?.value.trim() === ACCOUNT.password
    // ) {
    // }
  };
  const handleOnClickCancel = () => {
    dispatch(toggleForm());
  };

  return (
    <FormStyled onSubmit={handleOnSubmit}>
      <Logo src={logo} alt="Sub Logo" />
      <TitleForm>Upload video</TitleForm>
      <Input
        type="text"
        inputRef={titleRef}
        placeholder="Title..."
        defaultValue=""
      />
      <Textarea
        textareaRef={descRef}
        placeholder="Description..."
        defaultValue=""
      />
      <Wrapper>
        <Button name={BTN.SECONDARY} value="submit" type="submit" />
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
