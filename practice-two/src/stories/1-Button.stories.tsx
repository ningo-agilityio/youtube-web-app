import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/Button';

export default {
  title: 'Buttons',
  component: Button,
};

const Wrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 3rem;
`;

export const Primary = () => (
  <>
    <Button
      name="main-btn"
      value="New Issue"
      type="button"
      handleOnClick={action('Create new issue')}
    />
    <br />
    <br />
    <Button
      name="main-btn"
      value="Edit"
      type="button"
      handleOnClick={action('Edit an issue')}
    />
    <br />
    <br />
    <Button
      name="main-btn"
      value="Submit"
      type="submit"
      handleOnClick={action('Submit form')}
    />
  </>
);

export const Exit = () => (
  <Wrapper>
    <Button
      name="exit-btn"
      value="Exit"
      type="button"
      handleOnClick={action('Exit detail form')}
    />
  </Wrapper>
);

export const Status = () => (
  <>
    <Button
      name="status-btn"
      value="Close"
      type="button"
      handleOnClick={action('Close an issue')}
    />
    <br />
    <Button
      name="status-btn"
      value="Reopen"
      type="button"
      handleOnClick={action('Reopen an issue')}
    />
  </>
);
