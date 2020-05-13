import React from 'react';
import * as types from '../buildTypes/buildTypes';
import OptionList from './OptionList';

interface OptionProps {
  selectedTodo: types.Item;
  selectedGroupList: types.Group[];
  todoList: types.Todo[];
  handleUpdateOptionPopUp: Function;
}

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
    <div
      className="wrapper-option"
      onClick={handleOnclickOutside}
      role="presentation"
    >
      <div className="option-box">
        <p>Move todo to group...</p>
        <OptionList
          selectedTodo={selectedTodo}
          selectedGroupList={selectedGroupList}
          todoList={todoList}
          handleUpdateOptionPopUp={handleUpdateOptionPopUp}
        />
      </div>
    </div>
  );
};

export default OptionPopUp;
