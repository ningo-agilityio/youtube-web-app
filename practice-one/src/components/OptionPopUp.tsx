import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import OptionList from './OptionList';

interface OptionProps {
  optionState: boolean;
  selectedTodo: types.Item;
  selectedGroupList: types.Group[];
  todoList: types.Todo[];
  selectedFilter: string;
  handleUpdateTodo: Function;
  handleUpdateOptionPopUp: Function;
}

const OptionPopUp = (props: OptionProps) => {
  const {
    optionState,
    selectedTodo,
    selectedGroupList,
    todoList,
    selectedFilter,
    handleUpdateTodo,
    handleUpdateOptionPopUp,
  } = props;
  const displayFlex = optionState === true ? constants.displayFlex : '';

  return (
    <div className={`wrapper-option ${displayFlex}`}>
      <div className="option-box">
        <p>Move to-do to...</p>
        <OptionList
          selectedTodo={selectedTodo}
          selectedGroupList={selectedGroupList}
          todoList={todoList}
          selectedFilter={selectedFilter}
          handleUpdateTodo={handleUpdateTodo}
          handleUpdateOptionPopUp={handleUpdateOptionPopUp}
        />
      </div>
    </div>
  );
};

export default OptionPopUp;
