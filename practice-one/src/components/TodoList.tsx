import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: types.Todo[];
  selectedFilter: string;
}

const TodoList = (props: TodoListProps) => {
  const {
    todoList,
    selectedFilter,
  } = props;

  const filterTodoList = () => {
    switch (selectedFilter) {
      case types.Status.All:
        return todoList;
      case types.Status.Active:
        return helper.filterItemByProp(todoList, 'status', false);
      case types.Status.Completed:
        return helper.filterItemByProp(todoList, 'status', true);
      default:
        return helper.filterItemByProp(todoList, 'key', selectedFilter);
    }
  };

  const newTodoList = filterTodoList();

  const renderTodoList = (list: types.Item[]) =>
    list.map((todo) => (
      <TodoItem
        todo={todo}
        key={todo.id.toString()}
        todoList={todoList}
      />
    ));

  return (
    <ul className="app__content__todo" aria-label="List of todo">
      {renderTodoList(newTodoList)}
    </ul>
  );
};

export default TodoList;
