import React from 'react';
import { action } from '@storybook/addon-actions';
import { Input } from '../components/Input';

export default {
  title: 'Inputs',
  component: Input,
};

export const Text = () => (
  <Input
    type="text"
    placeholder="Title"
    handleOnChange={action('Change title')}
  />
);
