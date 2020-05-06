import React from 'react';
import * as types from '../buildTypes/buildTypes';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

interface MainContentProps {
  todoList: types.Todo[];
  selectedFilterId: string;
  detailState: boolean;
  changeTodoList: (dataTodo: types.Todo[]) => void;
  showDetail: Function;
  showOptionPopUp: Function;
}

const MainContent = (props: MainContentProps) => {
  const {
    todoList,
    selectedFilterId,
    detailState,
    changeTodoList,
    showDetail,
    showOptionPopUp,
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
        showDetail={showDetail}
        showOptionPopUp={showOptionPopUp}
      />
    </div>
  );
};

export default MainContent;
