import React from 'react';
import * as types from '../buildTypes/buildTypes';
import * as constants from '../constants/Constants';
import * as helper from '../helper/helper';
import { Input } from './common/Input';
import { Label } from './common/Label';
import { Button } from './common/Button';

interface SubTodoProps {
  selectedTodo: types.Item;
  subTodo: types.Item;
  handleUpdateSubTodo: Function;
}

const SubTodoItem = (props: SubTodoProps) => {
  const { selectedTodo, subTodo, handleUpdateSubTodo } = props;
  const itemSubTodo = {} as types.Item;
  const SubTodo = new types.SubTodo(itemSubTodo);

  const updateTodo = () => {
    let itemTodo = {} as types.Item;
    let updateTodoObj = {} as types.updateTodoObj;
    const Todo = new types.Todo(itemTodo);
    const dataTodo = constants.todoList.map((item) => ({
      ...(item as object),
    })) as types.Item[];

    helper.pushDataLocalToList(constants.todoListName, dataTodo, types.Todo);
    itemTodo = helper.findItemById(dataTodo, selectedTodo.id)!;
    updateTodoObj = {
      todo: itemTodo,
      todoList: dataTodo,
      newContent: itemTodo.title,
      newSubTask: selectedTodo.subTask!,
      check: itemTodo.status!,
      name: constants.todoListName,
    };
    Todo.updateTodo(updateTodoObj);
  };

  const handleOnClickDelete = (e: React.MouseEvent) => {
    const subTodoObj = {
      id: subTodo.id,
      subTodoList: selectedTodo.subTask!,
    };

    SubTodo.deleteSubTodo(subTodoObj);
    updateTodo();
    handleUpdateSubTodo(selectedTodo.subTask!);
  };

  const handleOnClickCheckBox = () => {
    const subTodoObj = {
      subTodo,
      newContent: subTodo.title,
      check: !subTodo.status,
    };

    SubTodo.updateSubTodo(subTodoObj);
    updateTodo();
    handleUpdateSubTodo(selectedTodo.subTask!);
  };

  const handelKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      const newText = (e.target as HTMLLabelElement).textContent!.trim();
      const subTodoObj = {
        subTodo,
        newContent: newText,
        check: subTodo.status!,
      };

      SubTodo.updateSubTodo(subTodoObj);
      updateTodo();
      handleUpdateSubTodo(selectedTodo.subTask!);
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
      <Button
        name="todo__delete"
        value="x"
        handleOnClick={handleOnClickDelete}
      />
    </li>
  );
};

export default SubTodoItem;
