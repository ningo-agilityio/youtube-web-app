import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as constants from '../constants/Constants';

interface TodoItemProps {
  todo: types.Item;
  todoList: types.Todo[];
  name: string;
  detailState: boolean;
  changeTodoList: Function;
  updateSelectedTodo: Function;
  changeDetailBoxState: Function;
  changeOptionList: Function;
  changeOptionPopUpState: Function;
}

const TodoItem = (props: TodoItemProps) => {
  const {
    todo,
    todoList,
    name,
    detailState,
    changeTodoList,
    updateSelectedTodo,
    changeDetailBoxState,
    changeOptionList,
    changeOptionPopUpState,
  } = props;
  const item = {} as types.Item;
  const Todo = new types.Todo(item);

  const deleteTodo = () => {
    Todo.deleteTodo(todo.id, todoList, name);
    changeTodoList(todoList);
  };

  const changeTodoStatus = () => {
    helper.checkStatus(todo);
    Todo.updateTodo(
      todo,
      todoList,
      todo.title,
      todo.subTask!,
      todo.status!,
      constants.todoListName,
      todo.dueDate!,
      todo.key
    );
    changeTodoList(todoList);
    if (detailState) {
      changeDetailBoxState(false);
    }
  };

  const onShowDetailBox = (todoItem: types.Item) => () => {
    updateSelectedTodo(todoItem);
    changeDetailBoxState(true);
  };

  const onShowOptionPopUp = (todoItem: types.Item) => (e: React.MouseEvent) => {
    e.preventDefault();
    updateSelectedTodo(todoItem);
    changeOptionList(todoItem);
    changeOptionPopUpState(true);
  };

  const todoChecked = todo.status === types.Status.Active ? '' : constants.CHECKED;

  return (
    <li className={`todo ${todoChecked}`} id={todo.id.toString()}>
      <input
        className="todo__checkbox"
        type="checkbox"
        onClick={changeTodoStatus}
      />
      <label
        className="todo__text"
        onClick={onShowDetailBox(todo)}
        onContextMenu={onShowOptionPopUp(todo)}
        role="presentation"
      >
        {todo.title}
      </label>
      <button className="todo__delete" type="button" onClick={deleteTodo}>
        x
      </button>
    </li>
  );
};

export default TodoItem;
