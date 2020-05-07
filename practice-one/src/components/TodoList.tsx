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
  updateSelectedTodo: Function;
  changeDetailBoxState: Function;
  changeOptionList: Function;
  changeOptionPopUpState: Function;
}

const TodoList = (props: TodoListProps) => {
  const filterTodoList = () => {
    switch (props.selectedFilterId) {
      case 'ALL':
        return props.todoList;
      case 'ACTIVE':
        return helper.filterItemByProp(props.todoList, 'status', 'ACTIVE');
      case 'COMPLETED':
        return helper.filterItemByProp(props.todoList, 'status', 'COMPLETED');
      default:
        return helper.filterItemByProp(
          props.todoList,
          'key',
          props.selectedFilterId
        );
    }
  };

  const newTodoList = filterTodoList();

  return (
    <ul className="app__content__todo" aria-label="List of todo">
      {newTodoList.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id.toString()}
          todoList={props.todoList}
          name={props.name}
          detailState={props.detailState}
          changeTodoList={props.changeTodoList}
          changeDetailBoxState={props.changeDetailBoxState}
          changeOptionList={props.changeOptionList}
          changeOptionPopUpState={props.changeOptionPopUpState}
          updateSelectedTodo={props.updateSelectedTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
