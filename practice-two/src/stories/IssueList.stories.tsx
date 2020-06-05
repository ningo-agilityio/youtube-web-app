import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import * as constants from '../constants/constants';
import { IssueItemStyled } from '../components/IssueItem';
import Label from '../components/Label';
import Button from '../components/Button';
import '../App.css';

const CodeStyled = styled.div`
  background: rgba(123, 123, 123, 0.2);
  padding: 1rem;
  overflow: scroll;
`;

export default {
  title: 'Lists',
};

export const UnlockIssue = () => (
  <>
    <h2>Unlock List</h2>
    <ul className="itemList">
      <IssueItemStyled id="1">
        <Label
          name={constants.LABEL_LIGHT}
          locked={false}
          value="Issue one"
          onClick={action('Show detail form')}
        />
        <Button
          name={constants.BTN_NO_OUTLINE_LIGHT}
          value="Lock"
          type="button"
          onClick={action('Close an issue')}
        />
      </IssueItemStyled>
      <IssueItemStyled id="2">
        <Label
          name={constants.LABEL_LIGHT}
          locked={false}
          value="Issue Two"
          onClick={action('Show detail form')}
        />
        <Button
          name={constants.BTN_NO_OUTLINE_LIGHT}
          value="Lock"
          type="button"
          onClick={action('Close an issue')}
        />
      </IssueItemStyled>
    </ul>

    <pre>
      <CodeStyled>
        &lt;IssueList selectedIssue=selectedIssue isShowForm=false /&gt;
      </CodeStyled>
    </pre>

    <h3>Prop Types</h3>
    <table>
      <tr>
        <th>Property</th>
        <th>Type</th>
      </tr>
      <tr>
        <td>selectedIssue</td>
        <td>object</td>
      </tr>
      <tr>
        <td>isShowForm</td>
        <td>boolean</td>
      </tr>
    </table>
  </>
);

export const LockedIssue = () => (
  <>
    <h2>Locked List</h2>
    <ul className="itemList">
      <IssueItemStyled id="1">
        <Label
          name={constants.LABEL_DARK}
          locked={true}
          value="Issue one"
          onClick={action('Show detail form')}
        />
        <Button
          name={constants.BTN_NO_OUTLINE_DARK}
          value="Unlock"
          type="button"
          onClick={action('Reopen an issue')}
        />
      </IssueItemStyled>
      <IssueItemStyled id="2">
        <Label
          name={constants.LABEL_DARK}
          locked={true}
          value="Issue Two"
          onClick={action('Show detail form')}
        />
        <Button
          name={constants.BTN_NO_OUTLINE_DARK}
          value="Unlock"
          type="button"
          onClick={action('Reopen an issue')}
        />
      </IssueItemStyled>
    </ul>

    <pre>
      <CodeStyled>
        &lt;IssueList selectedIssue=selectedIssue isShowForm=false /&gt;
      </CodeStyled>
    </pre>

    <h3>Prop Types</h3>
    <table>
      <tr>
        <th>Property</th>
        <th>Type</th>
      </tr>
      <tr>
        <td>selectedIssue</td>
        <td>object</td>
      </tr>
      <tr>
        <td>isShowForm</td>
        <td>boolean</td>
      </tr>
    </table>
  </>
);
