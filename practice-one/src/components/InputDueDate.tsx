import React from 'react';
import styled from 'styled-components';

interface InputProps {
  name?: string;
  type: string;
  handleOnChange?: (e: React.ChangeEvent) => void;
}

const InputDueDateStyled = styled.input`
  box-shadow: none;
  background: #fff
    url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)
    97% 50% no-repeat;

  ::-webkit-calendar-picker-indicator {
    opacity: 0;
  }

  ::-webkit-inner-spin-button {
    display: none;
  }
`;

export const InputDueDate = (props: InputProps) => (
  <InputDueDateStyled
    className={props.name}
    type={props.type}
    onChange={props.handleOnChange}
  />
);