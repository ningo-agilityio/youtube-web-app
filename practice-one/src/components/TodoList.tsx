import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import TodoItem from '../components/TodoItem';

interface TodoListProps {
  todoList: types.Todo[];
  name: string;
  idFilter: string;
  detailState: boolean;
  changeTodoList: Function;
  showDetail: Function;
  showOptionPopUp: Function;
}

const TodoList = (props: TodoListProps) => {
  let newTodoList =
    props.idFilter === 'ALL'
      ? props.todoList
      : props.idFilter === 'ACTIVE'
      ? helper.filterItemByProp(props.todoList, 'status', 'ACTIVE')
      : props.idFilter === 'COMPLETED'
      ? helper.filterItemByProp(props.todoList, 'status', 'COMPLETED')
      : helper.filterItemByProp(props.todoList, 'key', props.idFilter);
  return (
    <ul className='app__content__todo' aria-label='List of todo'>
      {newTodoList.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id.toString()}
          todoList={props.todoList}
          name={props.name}
          idFilter={props.idFilter}
          detailState={props.detailState}
          changeTodoList={props.changeTodoList}
          showDetail={props.showDetail(todo)}
          showOptionPopUp={props.showOptionPopUp(todo)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
