import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import Context from '../contexts/Context';
import { Input } from './common/Input';
import { Label } from './common/Label';
import { Button } from './common/Button';

interface TodoItemProps {
  todo: types.Item;
  todoList: types.Todo[];
}

const TodoItem = (props: TodoItemProps) => {
  const context = React.useContext(Context);
  const {
    todo,
    todoList,
  } = props;
  const item = {} as types.Item;
  const Todo = new types.Todo(item);
  const handleOnClickDelete = () => {
    const todoObj = {
      id: todo.id,
      todoList,
      name: constants.todoListName,
    };

    Todo.deleteTodo(todoObj);
    context.handleUpdateTodo!(todoList);
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
    context.handleUpdateTodo!(todoList);
  };

  const handleOnClickText = (todoItem: types.Item) => () => {
    context.handleChangeSelectedTodo!(todoItem);
    context.handleUpdateDetailBox!(true);
  };

  const handleOnContextMenu = (todoItem: types.Item) => (
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    context.handleChangeSelectedTodo!(todoItem);
    context.handleUpdateOptionList!(todoItem);
    context.handleUpdateOptionPopUp!(true);
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
