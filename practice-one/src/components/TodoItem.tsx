import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import { Input } from './common/Input';
import { Label } from './common/Label';
import { Button } from './common/Button';

interface TodoItemProps {
  todo: types.Item;
  todoList: types.Todo[];
  name: string;
  handleUpdateTodo: Function;
  handleChangeSelectedTodo: Function;
  handleUpdateDetailBox: Function;
  handleUpdateOptionList: Function;
  handleUpdateOptionPopUp: Function;
}

const TodoItem = (props: TodoItemProps) => {
  const {
    todo,
    todoList,
    name,
    handleUpdateTodo,
    handleChangeSelectedTodo,
    handleUpdateDetailBox,
    handleUpdateOptionList,
    handleUpdateOptionPopUp,
  } = props;
  const item = {} as types.Item;
  const Todo = new types.Todo(item);
  const handleOnClickDelete = () => {
    const todoObj = {
      id: todo.id,
      todoList,
      name,
    };

    Todo.deleteTodo(todoObj);
    handleUpdateTodo(todoList);
  };

  const handleOnClickCheckBox = () => {
    let todoObj = {} as types.updateTodoObj;

    todo.subTask!.forEach((ite) => {
      ite.status = !todo.status;
    });
    todoObj = {
      todo,
      todoList,
      newContent: todo.title,
      newSubTask: todo.subTask!,
      check: !todo.status,
      name: constants.todoListName,
      newDate: todo.dueDate!,
      newKey: todo.key,
    };
    Todo.updateTodo(todoObj);
    handleUpdateTodo(todoList);
  };

  const handleOnClickText = (todoItem: types.Item) => () => {
    handleChangeSelectedTodo(todoItem);
    handleUpdateDetailBox(true);
  };

  const handleOnContextMenu = (todoItem: types.Item) => (
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    handleChangeSelectedTodo(todoItem);
    handleUpdateOptionList(todoItem);
    handleUpdateOptionPopUp(true);
  };

  const todoName = todo.status === false ? '' : constants.CHECKED;

  return (
    <li className={`todo ${todoName}`} id={todo.id.toString()}>
      <Input
        name="todo__checkbox"
        type="checkbox"
        handleOnClick={handleOnClickCheckBox}
      />
      <Label
        name="todo__text"
        value={todo.title}
        handleOnClick={handleOnClickText(todo)}
        handleOnContextMenu={handleOnContextMenu(todo)}
      />
      <Button
        name="todo__delete"
        value="x"
        handleOnClick={handleOnClickDelete}
      />
    </li>
  );
};

export default TodoItem;
