import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import OptionList from './OptionList';

interface OptionProps {
  optionState: boolean;
  selectedTodo: types.Item;
  selectedGroupList: types.Group[];
  todoList: types.Todo[];
  selectedFilterId: string;
  changeTodoList: Function;
  changeOptionPopUpState: Function;
}

const OptionPopUp = (props: OptionProps) => {
  const {
    optionState,
    selectedTodo,
    selectedGroupList,
    todoList,
    selectedFilterId,
    changeTodoList,
    changeOptionPopUpState,
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
          selectedFilterId={selectedFilterId}
          changeTodoList={changeTodoList}
          changeOptionPopUpState={changeOptionPopUpState}
        />
      </div>
    </div>
  );
};

export default OptionPopUp;
