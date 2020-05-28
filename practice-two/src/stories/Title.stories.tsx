import React from 'react';
import styled from 'styled-components';
import * as constants from '../constants/constants';
import '../App.css';

const CodeStyled = styled.div`
  background: rgba(123, 123, 123, 0.2);
  padding: 1rem;
  overflow: scroll;
`;

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

export const Primary = () => (
  <>
    <h2>Primary Title</h2>
    <h1 className="main-title">{constants.TITLE}</h1>
    <pre>
      <CodeStyled>&lt;h1&gt;github issues app&lt;/h1&gt;</CodeStyled>
    </pre>
  </>
);

export const Secondary = () => (
  <>
    <h2>Secondary Title</h2>
    <h3>New Issue</h3>
    <h3>Edit Issue</h3>

    <pre>
      <CodeStyled>
        &lt;h3&gt;New Issue&lt;/h3&gt;
        <br />
        &lt;h3&gt;Edit Issue&lt;/h3&gt;
      </CodeStyled>
    </pre>
  </>
);
