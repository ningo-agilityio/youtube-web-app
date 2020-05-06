import React from 'react';
import * as types from '../buildTypes/buildTypes';
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
  const displayFlex = props.optionState === true ? 'd-flex' : '';

  return (
    <div className={`wrapper-option ${displayFlex}`}>
      <div className="option-box">
        <p>Move to-do to...</p>
        <OptionList
          selectedTodo={props.selectedTodo}
          selectedGroupList={props.selectedGroupList}
          todoList={props.todoList}
          selectedFilterId={props.selectedFilterId}
          changeTodoList={props.changeTodoList}
          changeOptionPopUpState={props.changeOptionPopUpState}
        />
      </div>
    </div>
  );
};

export default OptionPopUp;
