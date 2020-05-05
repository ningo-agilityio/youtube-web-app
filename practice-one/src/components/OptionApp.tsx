import React from 'react';
import * as types from '../buildTypes/buildTypes';
import OptionList from '../components/OptionList';

interface OptionProps {
  optionState: boolean;
  selectedTodo: types.Item;
  selectedGroupList: types.Group[];
  todoList: types.Todo[];
  idFilter: string;
  changeTodoList: Function;
  changeOptionPopUpState: Function;
}

const OptionApp = (props: OptionProps) => {
  return (
    <div
      className={`wrapper-option ${props.optionState === true ? 'd-flex' : ''}`}
    >
      <div className='option-box'>
        <p>Move to-do to...</p>
        <OptionList
          selectedTodo={props.selectedTodo}
          selectedGroupList={props.selectedGroupList}
          todoList={props.todoList}
          idFilter={props.idFilter}
          changeTodoList={props.changeTodoList}
          changeOptionPopUpState={props.changeOptionPopUpState}
        />
      </div>
    </div>
  );
};

export default OptionApp;
