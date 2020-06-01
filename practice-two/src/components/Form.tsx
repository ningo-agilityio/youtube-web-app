import React, { useState, useRef, useEffect } from 'react';
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
  width: 100%;
  height: 100%;
  padding: ${metric.PADDING.md};
  border-radius: 0.5rem;
  border: 0.1rem solid ${lightOrangeColor};
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const Title = styled.h3`
  border-bottom: 0.1rem solid ${lightOrangeColor};
  margin: 0;
  font-size: 1.5rem;
`;

export const Form = (props: FormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [input, setInput] = useState(
    props.selectedIssue.id ? props.selectedIssue.title : ''
  );
  const [textarea, setTextarea] = useState(
    props.selectedIssue.id ? props.selectedIssue.body : ''
  );

  const handleOnBlurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.trim());
  };

  const handleOnBlurTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
          .then(() => {
            const list = props.issueList.slice();
            const editItem = list.find(
              (item) => item.id === props.selectedIssue.id
            );
            if (editItem) {
              editItem.title = input;
              editItem.body = textarea;
            }
            props.handleUpdateIssue(list);
          });
        props.toggleForm(e);
        clearForm();
        alert('Updated successful!');
      } else {
        axios.post(`${constants.API.url}`, issue).then((response) => {
          const list = props.issueList.slice();
          list.unshift(response.data);
          props.handleUpdateIssue(list);
          props.toggleForm(e);
          alert('Added successful!');
        });
      }
    }
  };

  const nameForm = props.selectedIssue.id
    ? constants.TITLE_EDIT_FORM
    : constants.TITLE_ADD_FORM;

  const isEnabled = input.length && textarea.length;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <FormStyled onSubmit={handleOnSubmit}>
      <Title>{nameForm}</Title>
      <Wrapper>
        <Label value={constants.LABEL_TITLE} />
        <Input
          type="text"
          inputRef={inputRef}
          placeholder={constants.PLACEHOLDER_TITLE}
          defaultValue={input}
          onBlur={handleOnBlurInput}
        />
      </Wrapper>
      <Wrapper>
        <Label value={constants.LABEL_DESC} />
        <Textarea
          placeholder={constants.PLACEHOLDER_DESC}
          defaultValue={textarea}
          onBlur={handleOnBlurTextarea}
        />
      </Wrapper>
      <Wrapper>
        <Button
          name={constants.BTN_PRIMARY}
          value={constants.BTN_SUBMIT}
          disabled={!isEnabled}
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
