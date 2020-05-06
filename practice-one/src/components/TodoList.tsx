import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import TodoItem from './TodoItem';

interface TodoListProps {
  name: string;
  todoList: types.Todo[];
  idFilter: string;
  detailState: boolean;
  changeTodoList: Function;
  showDetail: Function;
  showOptionPopUp: Function;
}

const TodoList = (props: TodoListProps) => {
  const newTodoList =
    props.idFilter === 'ALL'
      ? props.todoList
      : props.idFilter === 'ACTIVE'
        ? helper.filterItemByProp(props.todoList, 'status', 'ACTIVE')
        : props.idFilter === 'COMPLETED'
          ? helper.filterItemByProp(props.todoList, 'status', 'COMPLETED')
          : helper.filterItemByProp(props.todoList, 'key', props.idFilter);
  return (
    <ul className="app__content__todo" aria-label="List of todo">
      {newTodoList.map((todo) => (
        <TodoItem
          {...props}
          todo={todo}
          key={todo.id.toString()}
          showDetail={props.showDetail(todo)}
          showOptionPopUp={props.showOptionPopUp(todo)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
