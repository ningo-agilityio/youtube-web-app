import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as constants from '../constants/Constants';

interface SubTodoProps {
  subTodo: types.Item;
  subTodoList: types.Item[];
  name: string;
  changeSubTodoList: Function;
}

const SubTodoItem = (props: SubTodoProps) => {
  const { subTodo, subTodoList, name, changeSubTodoList } = props;
  const item = {} as types.Item;
  const SubTodo = new types.SubTodo(item);

  const deleteSubTodo = () => {
    const subTodoObj = {
      id: subTodo.id,
      subTodoList,
      name,
    };

    SubTodo.deleteSubTodo(subTodoObj);
    changeSubTodoList(subTodoList);
  };

  const changeSubTodoStatus = () => {
    let subTodoObj = {} as types.updateSubTodoObj;

    helper.checkStatus(subTodo);
    subTodoObj = {
      subTodo,
      subTodoList,
      newContent: subTodo.title,
      check: subTodo.status!,
      name,
    };
    SubTodo.updateSubTodo(subTodoObj);
    changeSubTodoList(subTodoList);
  };

  const changeSubTodoText = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      const newText = (e.target as HTMLLabelElement).textContent!.trim();
      const subTodoObj = {
        subTodo,
        subTodoList,
        newContent: newText,
        check: subTodo.status!,
        name,
      };

      SubTodo.updateSubTodo(subTodoObj);
      changeSubTodoList(subTodoList);
      (e.target as HTMLLabelElement).blur();
    }
  };

  const todoChecked =
    subTodo.status === types.Status.Active ? '' : constants.CHECKED;

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
