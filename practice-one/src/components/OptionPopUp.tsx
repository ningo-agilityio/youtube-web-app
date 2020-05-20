import React from 'react';
import styled from 'styled-components';
import * as types from '../buildTypes/buildTypes';
import OptionList from './OptionList';

interface OptionProps {
  selectedTodo: types.Item;
  selectedGroupList: types.Group[];
  todoList: types.Todo[];
  handleUpdateOptionPopUp: (isShow: boolean) => void;
}

const WrapperOption = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const OptionBox = styled.div`
  min-width: 12.5rem;
  background: rgb(154, 209, 152);
  margin: auto;
  padding: 1.25rem;
  max-width: 12.5rem;
`;

const OptionPopUp = (props: OptionProps) => {
  const {
    selectedTodo,
    selectedGroupList,
    todoList,
    handleUpdateOptionPopUp,
  } = props;

  const handleOnclickOutside = () => {
    handleUpdateOptionPopUp(false);
  };

  return (
    <WrapperOption onClick={handleOnclickOutside} role="presentation">
      <OptionBox>
        <p>Move todo to group...</p>
        <OptionList
          selectedTodo={selectedTodo}
          selectedGroupList={selectedGroupList}
          todoList={todoList}
          handleUpdateOptionPopUp={handleUpdateOptionPopUp}
        />
      </OptionBox>
    </WrapperOption>
  );
};

export default OptionPopUp;
