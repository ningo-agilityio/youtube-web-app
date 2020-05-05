import React from 'react';
import * as types from '../buildTypes/buildTypes';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

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
    <div className='app__content'>
      <TodoForm
        todoList={props.todoList}
        idFilter={props.idFilter}
        changeTodoList={props.changeTodoList}
      />
      <TodoList
        todoList={props.todoList}
        name={'todoList'}
        idFilter={props.idFilter}
        detailState={props.detailState}
        changeTodoList={props.changeTodoList}
        showDetail={props.showDetail}
        showOptionPopUp={props.showOptionPopUp}
      />
    </div>
  );
}

export default MainApp