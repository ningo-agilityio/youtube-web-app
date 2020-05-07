import React from 'react';
import * as types from '../buildTypes/buildTypes';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

interface MainContentProps {
  todoList: types.Todo[];
  selectedFilterId: string;
  detailState: boolean;
  changeTodoList: (dataTodo: types.Todo[]) => void;
  updateSelectedTodo: (todo: types.Todo) => void;
  changeDetailBoxState: Function;
  changeOptionList: Function;
  changeOptionPopUpState: Function;
}

const MainContent = (props: MainContentProps) => {
  const {
    todoList,
    selectedFilterId,
    detailState,
    changeTodoList,
    updateSelectedTodo,
    changeDetailBoxState,
    changeOptionList,
    changeOptionPopUpState,
  } = props;

  return (
    <div className="app__content">
      <TodoForm
        todoList={todoList}
        selectedFilterId={selectedFilterId}
        changeTodoList={changeTodoList}
      />
      <TodoList
        name="todoList"
        todoList={todoList}
        selectedFilterId={selectedFilterId}
        detailState={detailState}
        changeTodoList={changeTodoList}
        updateSelectedTodo={updateSelectedTodo}
        changeDetailBoxState={changeDetailBoxState}
        changeOptionList={changeOptionList}
        changeOptionPopUpState={changeOptionPopUpState}
      />
    </div>
  );
};

export default MainContent;
