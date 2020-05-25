import React from 'react';
import { action } from '@storybook/addon-actions';
import { Textarea } from '../components/Textarea';

export default {
  title: 'Textarea',
  component: Textarea,
};

export const Default = () => (
  <Textarea
    placeholder="Write a comment..."
    handleOnChange={action('Change description')}
  />
);
