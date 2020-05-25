import React from 'react';
import * as constants from '../constants/constants';

export default {
  title: 'Title',
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div
        style={{
          fontFamily: 'Ubuntu, sans-serif',
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
};

export const TitleMain = () => <h1>{constants.TITLE}</h1>;

export const TitleForm = () => (
  <>
    <h3>New Issue</h3>
    <h3>Edit Issue</h3>
  </>
);

TitleMain.story = {
  name: 'Title App',
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div
        style={{
          fontSize: '1rem',
          color: 'rgb(236, 103, 37)',
          textTransform: 'uppercase',
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
};
