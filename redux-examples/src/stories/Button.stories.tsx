import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import * as constants from '../constants/constants';
import Button from '../components/Button';
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
      name={constants.BTN_PRIMARY}
      value="New Issue"
      type="button"
      onClick={action('Create new issue')}
    />
    <span> </span>
    <Button
      name={constants.BTN_PRIMARY}
      value="Edit"
      type="button"
      onClick={action('Edit an issue')}
    />
    <span> </span>
    <Button
      name={constants.BTN_PRIMARY}
      value="Submit"
      type="submit"
      onClick={action('Submit form')}
    />

    <pre>
      <CodeStyled>
        &lt;Button name="main-btn" value="New issue" type="button"
        onClick=handleClickNew /&gt;
        <br />
        &lt;Button name="main-btn" value="Edit" type="button"
        onClick=handleClickEdit /&gt;
        <br />
        &lt;Button name="main-btn" value="Submit" type="submit"
        onClick=handleClickSubmit /&gt;
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

export const Secondary = () => (
  <>
    <h2>Secondary Button</h2>
    <Wrapper>
      <Button
        name={constants.BTN_GRAY}
        value="Exit"
        type="button"
        onClick={action('Exit detail form')}
      />
    </Wrapper>

    <pre>
      <CodeStyled>
        &lt;Button name="exit-btn" value="Exit" type="button"
        onClick=handleClickExit /&gt;
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

export const NoOutline = () => (
  <>
    <h2>No Outline Button</h2>
    <Button
      name={constants.BTN_NO_OUTLINE_LIGHT}
      value="Lock"
      type="button"
      onClick={action('Lock an issue')}
    />
    <span> </span>
    <Button
      name={constants.BTN_NO_OUTLINE_DARK}
      value="Unlock"
      type="button"
      onClick={action('Unlock an issue')}
    />
    <pre>
      <CodeStyled>
        &lt;Button name="exit-btn" value="Lock" type="button"
        onClick=handleOnClick /&gt;
        <br />
        &lt;Button name="exit-btn" value="Unlock" type="button"
        onClick=handleOnClick /&gt;
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
