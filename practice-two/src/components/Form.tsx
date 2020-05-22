import React, { useState } from 'react';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/constants';
import { Label } from './Label';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Button } from './Button';

const FormStyled = styled.form`
  width: 50%;
  margin-left: 1rem;
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
  issueList: types.Issue[];
  selectedIssue: types.Issue;
  inputRef: React.RefObject<HTMLInputElement>;
  handleShowForm: (e: React.MouseEvent) => void;
  handleUpdateIssue: (newList: types.Issue[]) => void;
  handleChangeSelectedIssue: (newIssue: types.Issue) => void;
}

export const Form = (props: FormProps) => {
  const [input, setInput] = useState(
    props.selectedIssue.id !== 0 ? props.selectedIssue.title : ''
  );
  const [textarea, setTextarea] = useState(
    props.selectedIssue.id !== 0 ? props.selectedIssue.description : ''
  );

  const handleChangeInput = (e: React.ChangeEvent) => {
    setInput((e.target as HTMLInputElement).value);
  };

  const handleChangeTextarea = (e: React.ChangeEvent) => {
    setTextarea((e.target as HTMLInputElement).value);
  };

  const clearForm = () => {
    props.handleChangeSelectedIssue(constants.issueDefault);
    setInput('');
    setTextarea('');
  };

  const handleOnClickCancel = (e: React.MouseEvent) => {
    props.handleShowForm(e);
    clearForm();
  };

  const handleOnClickSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (input.trim() && textarea.trim()) {
      if (props.selectedIssue.id !== 0) {
        props.handleUpdateIssue(
          props.issueList.map((item) =>
            item.id === props.selectedIssue.id
              ? {
                  ...item,
                  title: input,
                  description: textarea,
                }
              : item
          )
        );
        props.handleShowForm(e);
      } else {
        const issue: types.Issue = {
          id: Date.now(),
          title: input,
          description: textarea,
          isOpen: true,
        };
        props.issueList.push(issue);
        props.handleUpdateIssue(props.issueList);
      }

      clearForm();
    }
  };

  const nameForm = props.selectedIssue.id !== 0 ? 'Edit Issue' : 'New Issue';

  return (
    <FormStyled>
      <FormTitle>{nameForm}</FormTitle>
      <Wrapper>
        <Label value="Title" />
        <Input
          type="text"
          inputRef={props.inputRef}
          placeholder="Title"
          value={input}
          handleOnChange={handleChangeInput}
        />
      </Wrapper>
      <Wrapper>
        <Label value="Description" />
        <Textarea
          placeholder="Write a comment..."
          value={textarea}
          handleOnChange={handleChangeTextarea}
        />
      </Wrapper>
      <Wrapper>
        <Button
          name="main-btn"
          value="Submit"
          handleOnClick={handleOnClickSubmit}
        />
        <Button
          name="main-btn"
          value="Cancel"
          handleOnClick={handleOnClickCancel}
        />
      </Wrapper>
    </FormStyled>
  );
};
