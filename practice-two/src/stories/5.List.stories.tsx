import React from 'react';
import { action } from '@storybook/addon-actions';
import { IssueItemStyled } from '../components/IssueItem';
import { Label } from '../components/Label';
import { Button } from '../components/Button';

export default {
  title: 'Lists',
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <ul
        style={{
          fontFamily: 'Ubuntu, sans-serif',
          background: 'rgba(236, 103, 37, 0.1)',
          listStyle: 'none',
          padding: '1rem',
          margin: '0',
        }}
      >
        {storyFn()}
      </ul>
    ),
  ],
};

export const OpenIssue = () => (
  <ul>
    <IssueItemStyled id="1">
      <Label
        isOpen={true}
        value="Issue one"
        handleOnClick={action('Show detail form')}
      />
      <Button
        name="status-btn"
        value="Close"
        type="button"
        handleOnClick={action('Close an issue')}
      />
    </IssueItemStyled>
    <IssueItemStyled id="2">
      <Label
        isOpen={true}
        value="Issue Two"
        handleOnClick={action('Show detail form')}
      />
      <Button
        name="status-btn"
        value="Close"
        type="button"
        handleOnClick={action('Close an issue')}
      />
    </IssueItemStyled>
  </ul>
);

export const ClosedIssue = () => (
  <ul>
    <IssueItemStyled id="1">
      <Label
        isOpen={false}
        value="Issue one"
        handleOnClick={action('Show detail form')}
      />
      <Button
        name="status-btn"
        value="Reopen"
        type="button"
        handleOnClick={action('Reopen an issue')}
      />
    </IssueItemStyled>
    <IssueItemStyled id="2">
      <Label
        isOpen={false}
        value="Issue Two"
        handleOnClick={action('Show detail form')}
      />
      <Button
        name="status-btn"
        value="Reopen"
        type="button"
        handleOnClick={action('Reopen an issue')}
      />
    </IssueItemStyled>
  </ul>
);
