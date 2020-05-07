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
    const todoObj = {
      id: todo.id,
      todoList,
      name,
    };

    Todo.deleteTodo(todoObj);
    changeTodoList(todoList);
  };

  const changeTodoStatus = () => {
    let todoObj = {} as types.updateTodoObj;

    helper.checkStatus(todo);
    todoObj = {
      todo,
      todoList,
      newContent: todo.title,
      newSubTask: todo.subTask!,
      check: todo.status!,
      name: constants.todoListName,
      newDate: todo.dueDate!,
      newKey: todo.key,
    };
    Todo.updateTodo(todoObj);
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

  const todoChecked =
    todo.status === types.Status.Active ? '' : constants.CHECKED;

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
