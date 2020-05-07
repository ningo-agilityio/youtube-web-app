import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';

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
  const item = {} as types.Item;
  const Todo = new types.Todo(item);

  const deleteTodo = () => {
    Todo.deleteTodo(props.todo.id, props.todoList, props.name);
    props.changeTodoList(props.todoList);
  };

  const changeTodoStatus = () => {
    helper.checkStatus(props.todo);
    Todo.updateTodo(
      props.todo,
      props.todoList,
      props.todo.title,
      props.todo.subTask!,
      props.todo.status!,
      'todoList',
      props.todo.dueDate!,
      props.todo.key
    );
    props.changeTodoList(props.todoList);
    if (props.detailState) {
      props.changeDetailBoxState(false);
    }
  };

  const onShowDetailBox = (todo: types.Item) => (e: React.MouseEvent) => {
    props.updateSelectedTodo(todo);
    props.changeDetailBoxState(true);
  };

  const onShowOptionPopUp = (todo: types.Item) => (e: React.MouseEvent) => {
    e.preventDefault();
    props.updateSelectedTodo(todo);
    props.changeOptionList(todo);
    props.changeOptionPopUpState(true);
  };

  const todoChecked =
    props.todo.status === types.Status.Active ? '' : 'todo-checked';

  return (
    <li className={`todo ${todoChecked}`} id={props.todo.id.toString()}>
      <input
        className="todo__checkbox"
        type="checkbox"
        onClick={changeTodoStatus}
      />
      <label
        className="todo__text"
        onClick={onShowDetailBox(props.todo)}
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
