import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import Textarea from '../components/Textarea';

const CodeStyled = styled.div`
  background: rgba(123, 123, 123, 0.2);
  padding: 1rem;
  overflow: scroll;
`;

export default {
  title: 'Textarea',
  component: Textarea,
};

export const Default = () => (
  <>
    <h2>Textarea</h2>
    <Textarea placeholder="Write a comment..." />

    <pre>
      <CodeStyled>
        &lt;Textarea ref=textareaRef placeholder="Write a comment..."
        defaultValue="" /&gt;
      </CodeStyled>
    </pre>

    <h3>Prop Types</h3>
    <table>
      <tr>
        <th>Property</th>
        <th>Type</th>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>string</td>
      </tr>
      <tr>
        <td>defaultValue</td>
        <td>string</td>
      </tr>
      <tr>
        <td>inputRef</td>
        <td>React.RefObject</td>
      </tr>
    </table>
  </>
);