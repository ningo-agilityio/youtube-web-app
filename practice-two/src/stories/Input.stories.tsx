import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import Input from '../components/Input';

const CodeStyled = styled.div`
  background: rgba(123, 123, 123, 0.2);
  padding: 1rem;
  overflow: scroll;
`;

export default {
  title: 'Inputs',
  component: Input,
};

export const Text = () => (
  <>
    <h2>Text Input</h2>
    <Input type="text" placeholder="Title" />

    <pre>
      <CodeStyled>
        &lt;Input type="text" ref=inputRef placeholder="Title" defaultValue=""
        /&gt;
      </CodeStyled>
    </pre>

    <h3>Prop Types</h3>
    <table>
      <tr>
        <th>Property</th>
        <th>Type</th>
      </tr>
      <tr>
        <td>type</td>
        <td>string</td>
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
