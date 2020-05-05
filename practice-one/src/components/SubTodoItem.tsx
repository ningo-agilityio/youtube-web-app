import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';

interface SubTodoProps {
  subTodo: types.Item;
  subTodoList: types.Item[];
  name: string;
  changeSubTodoList: Function;
}

const SubTodoItem = (props: SubTodoProps) => {
  const deleteSubTodo = () => {
    types.SubTodo.prototype.deleteSubTodo(
      props.subTodo.id,
      props.subTodoList,
      props.name
    );
    props.changeSubTodoList(props.subTodoList);
  };

  const changeSubTodoStatus = () => {
    helper.checkStatus(props.subTodo);
    types.SubTodo.prototype.updateSubTodo(
      props.subTodo,
      props.subTodoList!,
      props.subTodo.title,
      props.subTodo.status!,
      props.name
    );
    props.changeSubTodoList(props.subTodoList);
  };

  const changeSubTodoText = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      let newText = (e.target as HTMLLabelElement).textContent!.trim();
      types.SubTodo.prototype.updateSubTodo(
        props.subTodo,
        props.subTodoList!,
        newText!,
        props.subTodo.status!,
        props.name
      );
      props.changeSubTodoList(props.subTodoList);
      (e.target as HTMLLabelElement).blur();
    }
  };

  return (
    <li
      className={`todo ${
        props.subTodo.status === types.Status.Active ? '' : 'todo-checked'
      }`}
      id={props.subTodo.id.toString()}
    >
      <input
        className='todo__checkbox'
        type='checkbox'
        onClick={changeSubTodoStatus}
      />
      <label
        className='todo__text'
        contentEditable='true'
        suppressContentEditableWarning={true}
        onKeyDown={changeSubTodoText}
      >
        {props.subTodo.title}
      </label>
      <button className='todo__delete' onClick={deleteSubTodo}>
        x
      </button>
    </li>
  );
};

export default SubTodoItem;
