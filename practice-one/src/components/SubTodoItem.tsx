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
  const { subTodo, subTodoList, name, changeSubTodoList } = props;

  const deleteSubTodo = () => {
    types.SubTodo.prototype.deleteSubTodo(subTodo.id, subTodoList, name);
    changeSubTodoList(subTodoList);
  };

  const changeSubTodoStatus = () => {
    helper.checkStatus(subTodo);
    types.SubTodo.prototype.updateSubTodo(
      subTodo,
      subTodoList!,
      subTodo.title,
      subTodo.status!,
      name
    );
    changeSubTodoList(subTodoList);
  };

  const changeSubTodoText = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      const newText = (e.target as HTMLLabelElement).textContent!.trim();
      types.SubTodo.prototype.updateSubTodo(
        subTodo,
        subTodoList!,
        newText!,
        subTodo.status!,
        name
      );
      changeSubTodoList(subTodoList);
      (e.target as HTMLLabelElement).blur();
    }
  };

  const todoChecked =
    subTodo.status === types.Status.Active ? '' : 'todo-checked';

  return (
    <li className={`todo ${todoChecked}`} id={subTodo.id.toString()}>
      <input
        className="todo__checkbox"
        type="checkbox"
        onClick={changeSubTodoStatus}
      />
      <label
        className="todo__text"
        contentEditable="true"
        suppressContentEditableWarning={true}
        onKeyDown={changeSubTodoText}
        role="presentation"
      >
        {subTodo.title}
      </label>
      <button type="button" className="todo__delete" onClick={deleteSubTodo}>
        x
      </button>
    </li>
  );
};

export default SubTodoItem;
