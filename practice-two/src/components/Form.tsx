import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as constants from '../constants/constants';
import { Issue, FormProps } from '../buildTypes/buildTypes';
import { lightOrangeColor } from '../theme/color';
import * as metric from '../theme/metric';
import { Label } from './Label';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Button } from './Button';

export const FormStyled = styled.form`
  width: 50%;
  margin-left: 1rem;
  padding: ${metric.PADDING_3};
  border-radius: 0.5rem;
  border: 0.1rem solid ${lightOrangeColor};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 0;
`;

export const Title = styled.h3`
  border-bottom: 0.1rem solid ${lightOrangeColor};
  margin: 0;
  font-size: 1.5rem;
`;

export const Form = (props: FormProps) => {
  const [input, setInput] = useState(
    props.selectedIssue.id ? props.selectedIssue.title : ''
  );
  const [textarea, setTextarea] = useState(
    props.selectedIssue.id ? props.selectedIssue.body : ''
  );

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.trim());
  };

  const handleOnChangeTextarea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextarea(e.target.value.trim());
  };

  const clearForm = () => {
    props.handleChangeSelectedIssue(constants.issueDefault);
    setInput('');
    setTextarea('');
  };

  const handleOnClickCancel = (e: React.MouseEvent) => {
    props.toggleForm(e);
    clearForm();
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim() && textarea.trim()) {
      const issue: Issue = {
        title: input,
        body: textarea,
      };

      if (props.selectedIssue.id) {
        axios
          .patch(`${constants.API.url}/${props.selectedIssue.number}`, issue)
          .then((response) => {
            const updateList = props.issueList.map((item) =>
              item.id === props.selectedIssue.id ? response.data : item
            );
            props.handleUpdateIssue(updateList);
          });
        props.toggleForm(e);
      } else {
        axios.post(`${constants.API.url}`, issue).then((response) => {
          props.issueList.unshift(response.data);
          props.toggleForm(e);
        });
      }
      clearForm();
    }
  };

  const nameForm = props.selectedIssue.id
    ? constants.TITLE_EDIT_FORM
    : constants.TITLE_ADD_FORM;

  const isEnabled = input.length > 0 && textarea.length > 0;

  return (
    <FormStyled onSubmit={handleOnSubmit}>
      <Title>{nameForm}</Title>
      <Wrapper>
        <Label value={constants.LABEL_TITLE} />
        <Input
          type="text"
          placeholder={constants.PLACEHOLDER_TITLE}
          value={input}
          onChange={handleOnChangeInput}
        />
      </Wrapper>
      <Wrapper>
        <Label value={constants.LABEL_DESC} />
        <Textarea
          placeholder={constants.PLACEHOLDER_DESC}
          value={textarea}
          onChange={handleOnChangeTextarea}
        />
      </Wrapper>
      <Wrapper>
        <Button
          name={constants.BTN_PRIMARY}
          value={constants.BTN_SUBMIT}
          isEnabled={!isEnabled}
          type="submit"
        />
        <Button
          name={constants.BTN_PRIMARY}
          value={constants.BTN_CANCEL}
          type="button"
          onClick={handleOnClickCancel}
        />
      </Wrapper>
    </FormStyled>
  );
};
