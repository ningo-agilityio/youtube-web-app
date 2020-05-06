import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';

interface TodoItemProps {
  todo: types.Item;
  todoList: types.Todo[];
  name: string;
  detailState: boolean;
  changeTodoList: Function;
  showDetail(todo: types.Item): Function;
  showOptionPopUp(todo: types.Item): Function;
}

const TodoItem = (props: TodoItemProps) => {

  const deleteTodo = (e: React.MouseEvent) => {
    types.Todo.prototype.deleteTodo(props.todo.id, props.todoList, props.name);
    props.changeTodoList((e.target as HTMLLIElement).value);
  };

  const changeTodoStatus = (e: React.MouseEvent) => {
    helper.checkStatus(props.todo);
    types.Todo.prototype.updateTodo(
      props.todo,
      props.todoList,
      props.todo.title,
      props.todo.subTask!,
      props.todo.status!,
      'todoList',
      props.todo.dueDate!,
      props.todo.key
    );
    props.changeTodoList((e.target as HTMLLIElement).value);
    if (props.detailState) {
      props.showDetail(props.todo);
    }
  };

  const onShowOptionPopUp = (todo: types.Item) => (e: React.MouseEvent) => {
    e.preventDefault();
    props.showOptionPopUp(todo);
  };

  return (
    <li
      className={`todo ${
        props.todo.status === types.Status.Active ? '' : 'todo-checked'
      }`}
      id={props.todo.id.toString()}
    >
      <input
        className="todo__checkbox"
        type="checkbox"
        onClick={changeTodoStatus}
      />
      <label
        className="todo__text"
        onClick={(e) => props.showDetail(props.todo)}
        onContextMenu={onShowOptionPopUp(props.todo)}
        role="presentation"
      >
        {props.todo.title}
      </label>
      <button className="todo__delete" type="button" onClick={deleteTodo}>
        x
      </button>
    </li>
  );
};

export default TodoItem;
