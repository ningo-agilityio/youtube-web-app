/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import OptionList from './OptionList';

interface OptionProps {
  optionState: boolean;
  selectedTodo: types.Item;
  selectedGroupList: types.Group[];
  todoList: types.Todo[];
  handleUpdateOptionPopUp: Function;
}

const OptionPopUp = (props: OptionProps) => {
  const {
    optionState,
    selectedTodo,
    selectedGroupList,
    todoList,
    handleUpdateOptionPopUp,
  } = props;

  const handleOnclickOutside = () => {
    handleUpdateOptionPopUp(false);
  };

  const displayFlex = optionState === true ? constants.displayFlex : '';

  return (
    <div
      className={`wrapper-option ${displayFlex}`}
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
