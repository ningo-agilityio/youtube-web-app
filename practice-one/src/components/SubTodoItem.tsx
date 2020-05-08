import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import { Input } from './common/Input';
import { Label } from './common/Label';
import { Button } from './common/Button';

interface SubTodoProps {
  subTodo: types.Item;
  subTodoList: types.Item[];
  name: string;
  handleUpdateSubTodo: Function;
}

const SubTodoItem = (props: SubTodoProps) => {
  const { subTodo, subTodoList, name, handleUpdateSubTodo } = props;
  const item = {} as types.Item;
  const SubTodo = new types.SubTodo(item);

  const handleOnClickDelete = (e: React.MouseEvent) => {
    const subTodoObj = {
      id: subTodo.id,
      subTodoList,
      name,
    };

    SubTodo.deleteSubTodo(subTodoObj);
    handleUpdateSubTodo(subTodoList);
  };

  const handleOnClickCheckBox = () => {
    let subTodoObj = {} as types.updateSubTodoObj;

    subTodoObj = {
      subTodo,
      subTodoList,
      newContent: subTodo.title,
      check: !subTodo.status,
      name,
    };
    SubTodo.updateSubTodo(subTodoObj);
    handleUpdateSubTodo(subTodoList);
  };

  const handelKeyDown = (e: React.KeyboardEvent) => {
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
      handleUpdateSubTodo(subTodoList);
      (e.target as HTMLLabelElement).blur();
    }
  };

  const todoChecked = subTodo.status === false ? '' : constants.CHECKED;

  return (
    <li className={`todo ${todoChecked}`} id={subTodo.id.toString()}>
      <Input
        name="todo__checkbox"
        type="checkbox"
        handleOnClick={handleOnClickCheckBox}
      />
      <Label
        name="todo__text"
        value={subTodo.title}
        contentEditable={true}
        handelKeyDown={handelKeyDown}
      />
      <Button name="todo__delete" value="x" handleOnClick={handleOnClickDelete} />
    </li>
  );
};

export default SubTodoItem;
