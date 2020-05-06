import React from 'react';
import * as types from '../buildTypes/buildTypes';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

interface MainAppProps {
  todoList: types.Todo[];
  idFilter: string;
  detailState: boolean;
  changeTodoList: Function;
  showDetail: Function;
  showOptionPopUp: Function;
}

const MainApp = (props: MainAppProps) => {
  return (
    <div className="app__content">
      <TodoForm {...props} />
      <TodoList name="todoList" {...props} />
    </div>
  );
};

export default MainApp;
