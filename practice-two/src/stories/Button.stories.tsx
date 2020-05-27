import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/Button';
import '../App.css';

export default {
  title: 'Buttons',
  component: Button,
};

const Wrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 3rem;
`;

const CodeStyled = styled.div`
  background: rgba(123, 123, 123, 0.2);
  padding: 1rem;
  overflow: scroll;
`;

export const Primary = () => (
  <>
    <h2>Primary Button</h2>
    <Button
      name="main-btn"
      value="New Issue"
      type="button"
      handleOnClick={action('Create new issue')}
    />
    <span> </span>
    <Button
      name="main-btn"
      value="Edit"
      type="button"
      handleOnClick={action('Edit an issue')}
    />
    <span> </span>
    <Button
      name="main-btn"
      value="Submit"
      type="submit"
      handleOnClick={action('Submit form')}
    />

    <pre>
      <CodeStyled>
        &lt;Button name="main-btn" value="New issue" type="button"
        handleOnClick=handleClickNew /&gt;
        <br />
        &lt;Button name="main-btn" value="Edit" type="button"
        handleOnClick=handleClickEdit /&gt;
        <br />
        &lt;Button name="main-btn" value="Submit" type="submit"
        handleOnClick=handleClickSubmit /&gt;
      </CodeStyled>
    </pre>

    <h3>Prop Types</h3>
    <table>
      <tr>
        <th>Property</th>
        <th>Type</th>
      </tr>
      <tr>
        <td>name</td>
        <td>string</td>
      </tr>
      <tr>
        <td>value</td>
        <td>string</td>
      </tr>
      <tr>
        <td>type</td>
        <td>button | submit | reset</td>
      </tr>
      <tr>
        <td>handleOnClick</td>
        <td>Function</td>
      </tr>
    </table>
  </>
);

export const Exit = () => (
  <>
    <h2>Exit Button</h2>
    <Wrapper>
      <Button
        name="exit-btn"
        value="Exit"
        type="button"
        handleOnClick={action('Exit detail form')}
      />
    </Wrapper>

    <pre>
      <CodeStyled>
        &lt;Button name="exit-btn" value="Exit" type="button"
        handleOnClick=handleClickExit /&gt;
      </CodeStyled>
    </pre>

    <h3>Prop Types</h3>
    <table>
      <tr>
        <th>Property</th>
        <th>Type</th>
      </tr>
      <tr>
        <td>name</td>
        <td>string</td>
      </tr>
      <tr>
        <td>value</td>
        <td>string</td>
      </tr>
      <tr>
        <td>type</td>
        <td>button | submit | reset</td>
      </tr>
      <tr>
        <td>handleOnClick</td>
        <td>Function</td>
      </tr>
    </table>
  </>
);

export const Lock = () => (
  <>
    <h2>Lock Button</h2>
    <Button
      name="lock-btn"
      value="Lock"
      type="button"
      handleOnClick={action('Lock an issue')}
    />
    <span> </span>
    <Button
      name="lock-btn"
      value="Unlock"
      type="button"
      handleOnClick={action('Unlock an issue')}
    />
    <pre>
      <CodeStyled>
        &lt;Button name="exit-btn" value="Lock" type="button"
        handleOnClick=handleOnClick /&gt;
        <br />
        &lt;Button name="exit-btn" value="Unlock" type="button"
        handleOnClick=handleOnClick /&gt;
      </CodeStyled>
    </pre>

    <h3>Prop Types</h3>
    <table>
      <tr>
        <th>Property</th>
        <th>Type</th>
      </tr>
      <tr>
        <td>name</td>
        <td>string</td>
      </tr>
      <tr>
        <td>value</td>
        <td>string</td>
      </tr>
      <tr>
        <td>type</td>
        <td>button | submit | reset</td>
      </tr>
      <tr>
        <td>handleOnClick</td>
        <td>Function</td>
      </tr>
    </table>
  </>
);
