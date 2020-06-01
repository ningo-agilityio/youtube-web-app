import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { FormStyled, Wrapper, Title } from '../components/Form';
import { Input } from '../components/Input';
import { Label } from '../components/Label';
import { Textarea } from '../components/Textarea';
import { Button } from '../components/Button';

const CodeStyled = styled.div`
  background: rgba(123, 123, 123, 0.2);
  padding: 1rem;
  overflow: scroll;
`;

export default {
  title: 'Forms',
};

export const FromGroup = () => (
  <>
    <h2>Form Group</h2>
    <FormStyled>
      <Title>New Issue</Title>
      <Wrapper>
        <Label value="Title" />
        <Input
          type="text"
          placeholder="Title"
          onBlur={action('Change title')}
        />
      </Wrapper>
      <Wrapper>
        <Label value="Description" />
        <Textarea
          placeholder="Write a comment..."
          onBlur={action('Change description')}
        />
      </Wrapper>
      <Wrapper>
        <Button name="main-btn" value="Submit" type="submit" />
        <Button
          name="main-btn"
          value="Cancel"
          type="button"
          onClick={action('Cancel add')}
        />
      </Wrapper>
    </FormStyled>

    <pre>
      <CodeStyled>
        &lt;Form <br />
        issueList=issueList <br />
        selectedIssue=selectedIssue
        <br />
        handleChangeSelectedIssue=handleChangeSelectedIssue
        <br />
        handleShowForm=handleShowForm(!isShowForm)
        <br />
        handleUpdateIssue=handleUpdateIssue
        <br />
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
        <td>issueList</td>
        <td>Array&lt;object&gt;</td>
      </tr>
      <tr>
        <td>selectedIssue</td>
        <td>object</td>
      </tr>
      <tr>
        <td>handleChangeSelectedIssue</td>
        <td>Function</td>
      </tr>
      <tr>
        <td>handleShowForm</td>
        <td>Function</td>
      </tr>
      <tr>
        <td>handleUpdateIssue</td>
        <td>Function</td>
      </tr>
    </table>
  </>
);
