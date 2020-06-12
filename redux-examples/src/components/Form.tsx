import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import * as constants from '../constants/constants';
import { Issue, FormProps } from '../buildTypes/buildTypes';
import { lightOrangeColor } from '../theme/color';
import * as metric from '../theme/metric';
import Label from './Label';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';
import { addIssue, editIssue, toggleForm } from '../actions';

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
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();

  // When click Cancel then close Form and change selected issue to default
  const handleOnClickCancel = (e: React.MouseEvent) => {
    dispatch(toggleForm());
    props.handleChangeSelectedIssue(constants.issueDefault);
  };

  // handle submit an issue
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current?.value.trim() && textareaRef.current?.value.trim()) {
      const issue: Issue = {
        title: inputRef.current?.value,
        body: textareaRef.current?.value,
      };

      // if selected issue is true then handle edit issue
      if (props.selectedIssue.id) {
        axios
          .patch(`${constants.API.url}/${props.selectedIssue.number}`, issue)
          .then((response) => {
            dispatch(toggleForm());
            props.handleChangeSelectedIssue(constants.issueDefault);
            dispatch(editIssue(response.data));
            alert('Updated successful');
          });

        // If selected issue is null then handle add new an issue
      } else {
        axios.post(`${constants.API.url}`, issue).then((response) => {
          dispatch(toggleForm());
          dispatch(addIssue(response.data));
          alert('Added successful!');
        });
      }
    }
  };

  // set title name of form
  const nameForm = props.selectedIssue.id
    ? constants.TITLE_EDIT_FORM
    : constants.TITLE_ADD_FORM;

  // set focus at input filed in first time render
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
          defaultValue={props.selectedIssue.title || ''}
        />
      </Wrapper>
      <Wrapper>
        <Label value={constants.LABEL_DESC} />
        <Textarea
          textareaRef={textareaRef}
          placeholder={constants.PLACEHOLDER_DESC}
          defaultValue={props.selectedIssue.body || ''}
        />
      </Wrapper>
      <Wrapper>
        <Button
          name={constants.BTN_PRIMARY}
          value={constants.BTN_SUBMIT}
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

Form.defaultProps = {
  selectedIssue: {},
  toggleForm: () => {},
  handleSaveChange: () => {},
  handleChangeSelectedIssue: () => {},
};
