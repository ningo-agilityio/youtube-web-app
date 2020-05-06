import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import TodoItem from './TodoItem';

interface TodoListProps {
  name: string;
  todoList: types.Todo[];
  selectedFilterId: string;
  detailState: boolean;
  changeTodoList: Function;
  showDetail: Function;
  showOptionPopUp: Function;
}

const TodoList = (props: TodoListProps) => {
  const newTodoList =
    props.selectedFilterId === 'ALL'
      ? props.todoList
      : props.selectedFilterId === 'ACTIVE'
      ? helper.filterItemByProp(props.todoList, 'status', 'ACTIVE')
      : props.selectedFilterId === 'COMPLETED'
      ? helper.filterItemByProp(props.todoList, 'status', 'COMPLETED')
      : helper.filterItemByProp(props.todoList, 'key', props.selectedFilterId);
      
  return (
    <ul className="app__content__todo" aria-label="List of todo">
      {newTodoList.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id.toString()}
          showDetail={props.showDetail(todo)}
          showOptionPopUp={props.showOptionPopUp(todo)}
          todoList={props.todoList}
          name={props.name}
          detailState={props.detailState}
          changeTodoList={props.changeTodoList}
        />
      ))}
    </ul>
  );
};

export default TodoList;
