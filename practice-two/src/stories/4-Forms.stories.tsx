import React from 'react';
import { action } from '@storybook/addon-actions';
import { FormStyled, Wrapper, FormTitle } from '../components/Form';
import { Input } from '../components/Input';
import { Label } from '../components/Label';
import { Textarea } from '../components/Textarea';
import { Button } from '../components/Button';

export default {
  title: 'Forms',
};

export const Add = () => (
  <FormStyled>
    <FormTitle>New Issue</FormTitle>
    <Wrapper>
      <Label value="Title" />
      <Input
        type="text"
        placeholder="Title"
        handleOnChange={action('Change title')}
      />
    </Wrapper>
    <Wrapper>
      <Label value="Description" />
      <Textarea
        placeholder="Write a comment..."
        handleOnChange={action('Change description')}
      />
    </Wrapper>
    <Wrapper>
      <Button
        name="main-btn"
        value="Submit"
        type="submit"
      />
      <Button
        name="main-btn"
        value="Cancel"
        type="button"
        handleOnClick={action('Cancel add')}
      />
    </Wrapper>
  </FormStyled>
);

export const Edit = () => (
  <FormStyled>
    <FormTitle>Edit Issue</FormTitle>
    <Wrapper>
      <Label value="Title" />
      <Input
        type="text"
        placeholder="Title"
        value="Issue one"
        handleOnChange={action('Change title')}
      />
    </Wrapper>
    <Wrapper>
      <Label value="Description" />
      <Textarea
        placeholder="Write a comment..."
        value="Parts of an issue"
        handleOnChange={action('Change description')}
      />
    </Wrapper>
    <Wrapper>
      <Button
        name="main-btn"
        value="Submit"
        type="submit"
      />
      <Button
        name="main-btn"
        value="Cancel"
        type="button"
        handleOnClick={action('Cancel add')}
      />
    </Wrapper>
  </FormStyled>
);
