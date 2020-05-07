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
  const {
    name,
    todoList,
    selectedFilterId,
    detailState,
    changeTodoList,
    updateSelectedTodo,
    changeDetailBoxState,
    changeOptionList,
    changeOptionPopUpState,
  } = props;

  const filterTodoList = () => {
    switch (selectedFilterId) {
      case types.Status.All:
        return todoList;
      case types.Status.Active:
        return helper.filterItemByProp(todoList, 'status', types.Status.Active);
      case types.Status.Completed:
        return helper.filterItemByProp(
          todoList,
          'status',
          types.Status.Completed
        );
      default:
        return helper.filterItemByProp(todoList, 'key', selectedFilterId);
    }
  };

  const newTodoList = filterTodoList();

  const renderTodoList = (list: types.Item[]) =>
    list.map((todo) => (
      <TodoItem
        todo={todo}
        key={todo.id.toString()}
        todoList={todoList}
        name={name}
        detailState={detailState}
        changeTodoList={changeTodoList}
        changeDetailBoxState={changeDetailBoxState}
        changeOptionList={changeOptionList}
        changeOptionPopUpState={changeOptionPopUpState}
        updateSelectedTodo={updateSelectedTodo}
      />
    ));

  return (
    <ul className="app__content__todo" aria-label="List of todo">
      {renderTodoList(newTodoList)}
    </ul>
  );
};

export default TodoList;
