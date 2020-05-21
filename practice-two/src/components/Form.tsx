import React from 'react';
import styled from 'styled-components';
import { Label } from './Label';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Button } from './Button';

const FormStyled = styled.form`
  width: 50%;
  margin-right: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0.1rem solid rgba(236, 103, 37, 0.3);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 0;
`;

const FormTitle = styled.h3`
  border-bottom: 0.1rem solid rgba(236, 103, 37, 0.3);
  margin: 0;
  font-size: 1.5rem;
`;

interface FormProps {
  nameForm: string;
  handleIsShowForm: (e: React.MouseEvent) => void;
}

export const Form = (props: FormProps) => {

  return (
    <FormStyled>
      <FormTitle>{props.nameForm}</FormTitle>
      <Wrapper>
        <Label value="Title" />
        <Input type="text" placeholder="Title" />
      </Wrapper>
      <Wrapper>
        <Label value="Description" />
        <Textarea placeholder="Write a comment..." />
      </Wrapper>
      <Wrapper>
        <Button
          name="main-btn"
          value="Submit"
        />
        <Button
          name="main-btn"
          value="Cancel"
          handleOnClick={props.handleIsShowForm}
        />
      </Wrapper>
    </FormStyled>
  );
};
