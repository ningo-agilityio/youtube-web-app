import React, { useState } from 'react';
import * as types from '../buildTypes/buildTypes';
import * as helper from '../helper/helper';
import * as constants from '../constants/Constants';
import { Form } from './common/Form';

interface SubTodoFormProps {
  selectedTodo: types.Item;
  handleUpdateSubTodo: (list: types.Item[]) => void;
}

const SubTodoForm = (props: SubTodoFormProps) => {
  const { selectedTodo, handleUpdateSubTodo } = props;
  const [inputValue, setInputValue] = useState('');
  const handleOnChange = (e: React.ChangeEvent) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim().length) {
      const itemSubTodo = {} as types.Item;
      let itemTodo = {} as types.Item;
      let subTodoObj = {} as types.subTodoObj;
      let updateTodoObj = {} as types.updateTodoObj;
      const SubTodo = new types.SubTodo(itemSubTodo);
      const Todo = new types.Todo(itemTodo);
      const dataTodo = constants.todoList.map((item) => ({
        ...(item as object),
      })) as types.Item[];

      helper.pushDataLocalToList(constants.todoListName, dataTodo, types.Todo);
      itemTodo = helper.findItemById(dataTodo, selectedTodo.id)!;
      subTodoObj = {
        text: inputValue.trim(),
        item: constants.todoDefault,
        subTodoList: selectedTodo.subTask!,
      };
      updateTodoObj = {
        todo: itemTodo,
        todoList: dataTodo,
        newContent: itemTodo.title,
        newSubTask: selectedTodo.subTask!,
        check: itemTodo.status!,
        name: constants.todoListName,
        newDate: itemTodo.dueDate,
        newKey: itemTodo.key,
      };
      SubTodo.addSubTodo(subTodoObj);
      Todo.updateTodo(updateTodoObj);
      handleUpdateSubTodo(selectedTodo.subTask!);
      setInputValue('');
    }
  };

  return (
    <Form
      name="sub-form"
      nameInput="sub-input"
      value={inputValue}
      type="text"
      placeholder="Create subtask..."
      ariaLabel="Enter to do text"
      action="#"
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

export default SubTodoForm;
